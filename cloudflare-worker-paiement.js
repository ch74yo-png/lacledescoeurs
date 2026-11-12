/**
 * LA CLÉ DES CŒURS — WORKER STRIPE
 * Checkout hébergé Stripe : carte / Apple Pay + virement bancaire classique.
 * Compte marchand : France (FR).
 *
 * Secrets Cloudflare à conserver :
 * STRIPE_SECRET_KEY
 * STRIPE_WEBHOOK_SECRET
 * RESEND_API_KEY (si utilisé ailleurs)
 */

const SITE_URL = "https://lacledescoeurs.com";
const ALLOWED_ORIGINS = new Set([
  "https://lacledescoeurs.com",
  "https://www.lacledescoeurs.com",
  "https://lacledescoeurs.pages.dev"
]);
const DETAILS_ID = "details";
const PROMO_CODE = "CDCXBAGZ19XX";
const PROMO_PERCENT = 10;
const STRIPE_VERSION = "2026-09-30.endive";

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : "null",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors(origin), "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}
function text(data, status) {
  return new Response(data, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
  });
}
function clean(value, max = 250) {
  return String(value ?? "").trim().slice(0, max);
}
function parseStringOrNumber(value) {
  const v = String(value ?? "").trim();
  try { return JSON.parse(v); }
  catch {
    if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) return v.slice(1, -1);
    return null;
  }
}
function splitArguments(source) {
  const result = [];
  let start = 0, depth = 0, quote = null, escaped = false;
  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
    if (c === "(" || c === "[" || c === "{") depth++;
    if (c === ")" || c === "]" || c === "}") depth--;
    if (c === "," && depth === 0) { result.push(source.slice(start, i).trim()); start = i + 1; }
  }
  result.push(source.slice(start).trim());
  return result;
}
function extractProducts(source) {
  const products = new Map();
  const marker = "creerProduit(";
  let position = 0;
  while ((position = source.indexOf(marker, position)) !== -1) {
    const start = position + marker.length;
    let depth = 1, quote = null, escaped = false, end = start;
    for (; end < source.length; end++) {
      const c = source[end];
      if (quote) {
        if (escaped) escaped = false;
        else if (c === "\\") escaped = true;
        else if (c === quote) quote = null;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
      if (c === "(") depth++;
      if (c === ")") depth--;
      if (depth === 0) break;
    }
    if (depth !== 0) break;
    const args = splitArguments(source.slice(start, end));
    const id = parseStringOrNumber(args[0]);
    const name = parseStringOrNumber(args[1]);
    const price = Number(args[3]);
    if (typeof id === "string" && id && typeof name === "string" && name && Number.isFinite(price) && price > 0) {
      products.set(id, { name: clean(name, 250), unitAmount: Math.round(price * 100) });
    }
    position = end + 1;
  }
  return products;
}
async function getTrustedProducts(ids) {
  const response = await fetch(SITE_URL + "/produits.js", {
    headers: { "Accept": "text/javascript" },
    cf: { cacheTtl: 0 }
  });
  if (!response.ok) throw new Error("Impossible de lire le catalogue : HTTP " + response.status + " sur /produits.js.");
  const products = extractProducts(await response.text());
  products.set(DETAILS_ID, { name: "DETAILS", unitAmount: 200 });
  for (const id of ids) if (!products.has(id)) throw new Error("Produit introuvable dans le catalogue : " + id);
  return products;
}
async function stripeRequest(path, options, secret) {
  const response = await fetch("https://api.stripe.com" + path, {
    method: options.method || "GET",
    headers: {
      "Authorization": "Bearer " + secret,
      "Stripe-Version": STRIPE_VERSION,
      ...(options.headers || {})
    },
    body: options.body
  });
  let result;
  try { result = await response.json(); }
  catch { throw new Error("Réponse Stripe illisible."); }
  if (!response.ok) throw new Error(result.error?.message || "Erreur de communication avec Stripe.");
  return result;
}
function constantTimeEqual(a, b) {
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return difference === 0;
}
async function verifyStripeSignature(payload, header, secret) {
  if (!header || !secret) return false;
  let timestamp = "";
  const signatures = [];
  for (const part of header.split(",")) {
    const pair = part.split("=");
    if (pair[0] === "t") timestamp = pair[1] || "";
    if (pair[0] === "v1" && pair[1]) signatures.push(pair[1]);
  }
  const time = Number(timestamp);
  if (!Number.isFinite(time) || Math.abs(Date.now() / 1000 - time) > 300) return false;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(timestamp + "." + payload));
  const expected = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
  return signatures.some(signature => constantTimeEqual(signature, expected));
}
function shippingForCountry(code) {
  const europe = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT MC NL NO PL PT RO SM SK SI ES SE CH GB".split(" "));
  const northAmerica = new Set(["US", "CA"]);
  const asiaOceania = new Set(["AU", "NZ", "JP", "SG", "KR", "HK", "TW"]);
  const blocked = new Set(["GH", "NG", "ZA", "KE", "UG", "TZ", "RW", "SN", "CI", "CM", "MA", "TN", "EG"]);
  if (!code || blocked.has(code)) return null;
  if (europe.has(code)) return 1562;
  if (northAmerica.has(code)) return 3990;
  if (asiaOceania.has(code)) return 4990;
  return 5990;
}

async function calculateTrustedOrder(body) {
  const customerInput = body.customer || {};
  const email = clean(customerInput.email, 254).toLowerCase();
  const fullName = clean(customerInput.fullName || [customerInput.firstName || "", customerInput.lastName || ""].join(" "), 200);
  const phone = clean(customerInput.phone, 100);
  const address = clean(customerInput.address, 200);
  const postalCode = clean(customerInput.postalCode, 40);
  const city = clean(customerInput.city, 100);
  const countryCode = clean(customerInput.countryCode || customerInput.country_code || customerInput.country, 2).toUpperCase();
  const items = body.items;
  if (!validEmail(email)) throw new Error("Adresse e-mail invalide.");
  if (!fullName || !phone || !address || !postalCode || !city || !/^[A-Z]{2}$/.test(countryCode)) throw new Error("Les coordonnées ou l'adresse de livraison sont incomplètes.");
  if (!Array.isArray(items) || !items.length || items.length > 50) throw new Error("Panier vide ou invalide.");
  const normalized = [];
  const seen = new Set();
  for (const item of items) {
    const id = clean(item.id, 150);
    const quantity = Number(item.quantity);
    if (!/^[a-zA-Z0-9_-]+$/.test(id) || !Number.isInteger(quantity) || quantity < 1 || quantity > 15 || seen.has(id)) throw new Error("Un article ou une quantité du panier est invalide.");
    seen.add(id);
    normalized.push({ id, quantity });
  }
  const shipping = shippingForCountry(countryCode);
  if (shipping === null) throw new Error("La livraison n'est pas disponible pour ce pays.");
  const submittedPromoCode = clean(body.promoCode, 80).toUpperCase();
  if (submittedPromoCode && submittedPromoCode !== PROMO_CODE) throw new Error("Code promo invalide.");
  const promoApplied = submittedPromoCode === PROMO_CODE;
  const trustedProducts = await getTrustedProducts(normalized.map(item => item.id));
  let subtotal = 0, discountedSubtotal = 0;
  const lines = [];
  for (const item of normalized) {
    const product = trustedProducts.get(item.id);
    if (!product) throw new Error("Produit introuvable : " + item.id);
    const originalUnitAmount = product.unitAmount;
    const unitAmount = promoApplied ? Math.round(originalUnitAmount * (100 - PROMO_PERCENT) / 100) : originalUnitAmount;
    const originalLineTotal = originalUnitAmount * item.quantity;
    const lineTotal = unitAmount * item.quantity;
    if (!Number.isSafeInteger(originalLineTotal) || !Number.isSafeInteger(lineTotal)) throw new Error("Montant de commande invalide.");
    subtotal += originalLineTotal;
    discountedSubtotal += lineTotal;
    lines.push({ id: item.id, name: product.name, quantity: item.quantity, originalUnitAmount, unitAmount, originalLineTotal, lineTotal });
  }
  const discount = subtotal - discountedSubtotal;
  const total = discountedSubtotal + shipping;
  if (!Number.isSafeInteger(total) || total < 100 || total > 99999999) throw new Error("Montant de commande invalide.");
  return { email, fullName, phone, address, postalCode, city, countryCode, normalized, lines, subtotal, discount, discountedSubtotal, shipping, total, promoCode: promoApplied ? PROMO_CODE : "", promoPercent: promoApplied ? PROMO_PERCENT : 0 };
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
async function makeIdempotencyKey(prefix, body) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(body));
  const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
  return prefix + hash;
}
function setIf(form, key, value) {
  if (value !== undefined && value !== null && String(value) !== "") form.set(key, String(value));
}
async function createStripeCustomer(data, secret, orderReference) {
  const form = new URLSearchParams();
  form.set("email", data.email);
  form.set("name", data.fullName);
  setIf(form, "phone", data.phone);
  setIf(form, "address[line1]", data.address);
  setIf(form, "address[line2]", data.addressExtra);
  setIf(form, "address[postal_code]", data.postalCode);
  setIf(form, "address[city]", data.city);
  setIf(form, "address[country]", data.countryCode);
  form.set("metadata[order_reference]", orderReference);
  form.set("metadata[shop]", "LA CLE DES COEURS");
  const body = form.toString();
  const key = await makeIdempotencyKey("cdc-customer-", body);
  return stripeRequest("/v1/customers", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": key },
    body
  }, secret);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });

    if (url.pathname === "/webhook" && request.method === "POST") {
      if (!env.STRIPE_WEBHOOK_SECRET) return text("Webhook secret not configured.", 500);
      const payload = await request.text();
      const valid = await verifyStripeSignature(payload, request.headers.get("Stripe-Signature"), env.STRIPE_WEBHOOK_SECRET);
      if (!valid) return text("Invalid Stripe signature.", 400);
      let event;
      try { event = JSON.parse(payload); }
      catch { return text("Invalid event payload.", 400); }
      const session = event.data?.object || {};
      if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
        if (session.payment_status === "paid") {
          console.log("CDC_PAYMENT_CONFIRMED", session.id, session.amount_total, session.currency, session.metadata?.order_reference || "");
        } else {
          console.log("CDC_PAYMENT_PENDING", session.id, session.amount_total, session.currency, session.metadata?.order_reference || "");
        }
      }
      if (event.type === "checkout.session.async_payment_failed") console.warn("CDC_PAYMENT_FAILED", session.id);
      return text("ok", 200);
    }

    if (!ALLOWED_ORIGINS.has(origin)) return json({ erreur: "Origine non autorisée." }, 403, origin);

    if (request.method === "POST" && url.pathname === "/bank-transfer-declaration") {
      try {
        if (!env.DB) return json({ erreur: "La base D1 n'est pas reliée au Worker (binding DB)." }, 500, origin);
        const body = await request.json();
        const order = await calculateTrustedOrder(body);
        const orderReference = clean(body.orderReference || ("CDC-" + crypto.randomUUID()), 80);
        if (!/^[A-Za-z0-9_-]{3,80}$/.test(orderReference)) return json({ erreur: "Référence de commande invalide." }, 400, origin);
        const itemsJson = JSON.stringify({
          items: order.normalized, lines: order.lines, subtotal: order.subtotal,
          discount: order.discount, promoCode: order.promoCode,
          promoPercent: order.promoPercent, shipping: order.shipping
        });
        await env.DB.prepare(`
          INSERT OR IGNORE INTO bank_transfer_declarations
          (order_reference, customer_name, customer_email, customer_phone,
           customer_address, customer_postal_code, customer_city, customer_country,
           items_json, amount_cents, currency, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'EUR', 'pending_verification')
        `).bind(
          orderReference, order.fullName, order.email, order.phone, order.address,
          order.postalCode, order.city, order.countryCode, itemsJson, order.total
        ).run();
        const saved = await env.DB.prepare(
          "SELECT order_reference, amount_cents, currency, status, declared_at FROM bank_transfer_declarations WHERE order_reference = ?"
        ).bind(orderReference).first();
        if (!saved) throw new Error("La déclaration n'a pas pu être enregistrée dans D1.");
        return json({ success: true, orderReference: saved.order_reference, amount: saved.amount_cents, currency: saved.currency, status: saved.status, declaredAt: saved.declared_at }, 200, origin);
      } catch (error) {
        console.error("CDC_BANK_TRANSFER_SAVE_ERROR", error);
        return json({ erreur: error.message || "Impossible d'enregistrer la déclaration de virement." }, 400, origin);
      }
    }

    if (request.method === "GET" && url.pathname === "/bank-transfer-status") {
      try {
        if (!env.DB) return json({ erreur: "La base D1 n'est pas reliée au Worker." }, 500, origin);
        const reference = clean(url.searchParams.get("reference"), 80);
        if (!/^[A-Za-z0-9_-]{3,80}$/.test(reference)) return json({ erreur: "Référence de commande invalide." }, 400, origin);
        const saved = await env.DB.prepare(
          "SELECT order_reference, status, declared_at, amount_cents, currency FROM bank_transfer_declarations WHERE order_reference = ?"
        ).bind(reference).first();
        if (!saved) return json({ erreur: "Aucune déclaration trouvée pour cette référence." }, 404, origin);
        return json({ orderReference: saved.order_reference, status: saved.status, declaredAt: saved.declared_at, amount: saved.amount_cents, currency: saved.currency }, 200, origin);
      } catch (error) {
        console.error("CDC_BANK_TRANSFER_STATUS_ERROR", error);
        return json({ erreur: "Impossible de vérifier le statut du virement." }, 500, origin);
      }
    }

    if (!env.STRIPE_SECRET_KEY) return json({ erreur: "La clé secrète Stripe n'est pas configurée." }, 500, origin);

    if (request.method === "GET" && url.pathname === "/checkout-session") {
      try {
        const sessionId = clean(url.searchParams.get("session_id"), 200);
        if (!/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId)) return json({ erreur: "Référence de paiement invalide." }, 400, origin);
        const session = await stripeRequest("/v1/checkout/sessions/" + encodeURIComponent(sessionId), { method: "GET" }, env.STRIPE_SECRET_KEY);
        return json({
          id: session.id,
          status: session.status,
          payment_status: session.payment_status,
          amount_total: session.amount_total,
          currency: session.currency,
          order_reference: session.metadata?.order_reference || ""
        }, 200, origin);
      } catch (error) {
        console.error("CDC_SESSION_CHECK_ERROR", error);
        return json({ erreur: error.message }, 502, origin);
      }
    }

    if (request.method !== "POST" || url.pathname !== "/create-checkout-session") return json({ erreur: "Route introuvable." }, 404, origin);

    try {
      const body = await request.json();
      const customerInput = body.customer || {};
      const email = clean(customerInput.email, 254).toLowerCase();
      const items = body.items;
      if (!validEmail(email)) return json({ erreur: "Adresse e-mail invalide." }, 400, origin);

      const fullName = clean(customerInput.fullName || [customerInput.firstName || "", customerInput.lastName || ""].join(" "), 200);
      const phone = clean(customerInput.phone, 100);
      const address = clean(customerInput.address, 200);
      const addressExtra = clean(customerInput.addressExtra || customerInput.address_extra, 200);
      const postalCode = clean(customerInput.postalCode, 40);
      const city = clean(customerInput.city, 100);
      const countryCode = clean(customerInput.countryCode || customerInput.country_code || customerInput.country, 2).toUpperCase();

      if (!fullName || !phone || !address || !postalCode || !city || !/^[A-Z]{2}$/.test(countryCode)) {
        return json({ erreur: "Les coordonnées ou l'adresse de livraison sont incomplètes." }, 400, origin);
      }
      if (!Array.isArray(items) || !items.length || items.length > 50) return json({ erreur: "Panier vide ou invalide." }, 400, origin);

      const normalized = [];
      const seen = new Set();
      for (const item of items) {
        const id = clean(item.id, 150);
        const quantity = Number(item.quantity);
        if (!/^[a-zA-Z0-9_-]+$/.test(id) || !Number.isInteger(quantity) || quantity < 1 || quantity > 15 || seen.has(id)) {
          return json({ erreur: "Un article ou une quantité du panier est invalide." }, 400, origin);
        }
        seen.add(id);
        normalized.push({ id, quantity });
      }

      const shipping = shippingForCountry(countryCode);
      if (shipping === null) return json({ erreur: "La livraison n'est pas disponible pour ce pays." }, 400, origin);

      const submittedPromoCode = clean(body.promoCode, 80).toUpperCase();
      if (submittedPromoCode && submittedPromoCode !== PROMO_CODE) return json({ erreur: "Code promo invalide." }, 400, origin);
      const promoApplied = submittedPromoCode === PROMO_CODE;

      const trustedProducts = await getTrustedProducts(normalized.map(item => item.id));
      let subtotal = 0, discountedSubtotal = 0;
      const lines = [];
      for (const item of normalized) {
        const product = trustedProducts.get(item.id);
        if (!product) throw new Error("Produit introuvable : " + item.id);
        const originalUnitAmount = product.unitAmount;
        const unitAmount = promoApplied ? Math.round(originalUnitAmount * (100 - PROMO_PERCENT) / 100) : originalUnitAmount;
        const originalLineTotal = originalUnitAmount * item.quantity;
        const lineTotal = unitAmount * item.quantity;
        if (!Number.isSafeInteger(originalLineTotal) || !Number.isSafeInteger(lineTotal)) throw new Error("Montant de commande invalide.");
        subtotal += originalLineTotal;
        discountedSubtotal += lineTotal;
        lines.push({ name: product.name, quantity: item.quantity, originalUnitAmount, unitAmount, originalLineTotal, lineTotal });
      }
      const discount = subtotal - discountedSubtotal;
      const total = discountedSubtotal + shipping;
      if (!Number.isSafeInteger(total) || total < 100 || total > 99999999) throw new Error("Montant de commande invalide.");

      const orderReference = clean(body.orderReference || ("CDC-" + Date.now()), 80);
      const stripeCustomer = await createStripeCustomer({
        email, fullName, phone, address, addressExtra, postalCode, city, countryCode
      }, env.STRIPE_SECRET_KEY, orderReference);

      if (!stripeCustomer.id) throw new Error("Stripe n'a pas créé le profil client nécessaire au virement bancaire.");

      const form = new URLSearchParams();
      form.set("mode", "payment");
      form.set("ui_mode", "elements");
      form.set("locale", "fr");
      form.set("customer", stripeCustomer.id);
      form.set("billing_address_collection", "required");
      form.set("client_reference_id", orderReference);
      form.set("return_url", SITE_URL + "/confirmation.html?session_id={CHECKOUT_SESSION_ID}");

      /* Stripe Payment Element affiche les moyens activés et éligibles
         directement dans le cadre de paiement du site.
         Apple Pay apparaît comme portefeuille si l'appareil et le domaine le permettent.
         Le virement bancaire classique est proposé par Stripe lorsqu'il est éligible. */
      form.set("payment_method_options[customer_balance][funding_type]", "bank_transfer");
      form.set("payment_method_options[customer_balance][bank_transfer][type]", "eu_bank_transfer");
      form.set("payment_method_options[customer_balance][bank_transfer][eu_bank_transfer][country]", "FR");

      form.set("metadata[order_reference]", orderReference);
      form.set("metadata[customer_name]", fullName);
      form.set("metadata[customer_phone]", phone);
      form.set("metadata[customer_address]", address);
      form.set("metadata[customer_address_extra]", addressExtra);
      form.set("metadata[customer_postal_code]", postalCode);
      form.set("metadata[customer_city]", city);
      form.set("metadata[customer_country_code]", countryCode);
      form.set("metadata[promo_code]", promoApplied ? PROMO_CODE : "");
      form.set("metadata[promo_percent]", promoApplied ? String(PROMO_PERCENT) : "0");
      form.set("metadata[promo_discount]", String(discount));
      form.set("metadata[item_ids]", normalized.map(item => item.id + "x" + item.quantity).join(",").slice(0, 500));

      lines.forEach((line, index) => {
        const prefix = "line_items[" + index + "]";
        form.set(prefix + "[price_data][currency]", "eur");
        form.set(prefix + "[price_data][unit_amount]", String(line.unitAmount));
        form.set(prefix + "[price_data][product_data][name]", line.name);
        form.set(prefix + "[quantity]", String(line.quantity));
      });
      const shippingIndex = lines.length;
      const shippingPrefix = "line_items[" + shippingIndex + "]";
      form.set(shippingPrefix + "[price_data][currency]", "eur");
      form.set(shippingPrefix + "[price_data][unit_amount]", String(shipping));
      form.set(shippingPrefix + "[price_data][product_data][name]", "Livraison");
      form.set(shippingPrefix + "[quantity]", "1");

      const formBody = form.toString();
      const idempotencyKey = await makeIdempotencyKey("cdc-session-", formBody);
      const session = await stripeRequest("/v1/checkout/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": idempotencyKey },
        body: formBody
      }, env.STRIPE_SECRET_KEY);

      if (!session.client_secret) throw new Error("Stripe n'a pas retourné le secret de la session intégrée.");
      return json({
        clientSecret: session.client_secret,
        amount: total,
        subtotal,
        discount,
        promoCode: promoApplied ? PROMO_CODE : "",
        promoPercent: promoApplied ? PROMO_PERCENT : 0,
        discountedSubtotal,
        shipping,
        total,
        lines
      }, 200, origin);
    } catch (error) {
      console.error("CDC_STRIPE_ERROR", error);
      return json({ erreur: error.message || "Erreur lors de la préparation du paiement." }, 500, origin);
    }
  }
};
