(() => {
  "use strict";

  const icon = {
    search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
    account: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 3.5-6.3 8-6.3s7.2 2.1 8 6.3"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"/></svg>',
    cart: '<svg viewBox="0 0 24 24"><path d="M2 3h2l2.5 12.5a2 2 0 0 0 2 1.5h9.8a2 2 0 0 0 1.9-1.4L22 8H5"/><circle cx="9" cy="21" r="1.3"/><circle cx="18" cy="21" r="1.3"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0-18"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };

  const logo = `
    <span class="cdc-logo">
      <img src="assets/logo-officiel.svg"
           alt="LA CLÉ DES CŒURS — Depuis 1974 — Bijoux fins et raffinés">
    </span>`;

  const header = `
    <header class="header cdc-header">
      <button class="menu-button cdc-icon-button" id="menuButton" type="button"
        aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mainNav">
        <span class="hamburger-lines"><i></i><i></i><i></i></span>
      </button>
      <a href="index.html" class="brand cdc-brand" aria-label="La Clé des Cœurs - Accueil">${logo}</a>
      <div class="header-actions">
        <button class="cdc-icon-button" id="cdcSearchButton" type="button" aria-label="Rechercher">${icon.search}</button>
        <a class="cdc-icon-button" href="compte.html" aria-label="Mon compte">${icon.account}</a>
        <a class="cdc-icon-button" href="favoris.html" aria-label="Mes favoris">${icon.heart}</a>
        <a class="cdc-icon-button cart-link" href="panier.html" aria-label="Mon panier">${icon.cart}<span id="cartCount">0</span></a>
        <label class="cdc-language" aria-label="Choisir la langue">
          <span>${icon.globe}</span>
          <select id="cdcLanguage" aria-label="Langue">
            <option value="fr">FR</option><option value="en">EN</option><option value="es">ES</option>
            <option value="de">DE</option><option value="it">IT</option><option value="pt">PT</option><option value="nl">NL</option>
          </select>
        </label>
        <button class="cdc-icon-button theme-button" id="cdcThemeButton" type="button" aria-label="Changer le thème">${icon.moon}</button>
      </div>
    </header>
    <nav class="main-nav cdc-nav" id="mainNav" aria-label="Navigation principale">
      <a href="index.html">Accueil</a><a href="catalogue.html">Catalogue</a>
      <a href="catalogue.html?categorie=accessoires">Accessoires et bracelets</a>
      <a href="catalogue.html?categorie=ap-swatch">AP x Swatch</a>
      <a href="catalogue.html?categorie=femme">Montres femme</a>
      <a href="catalogue.html?categorie=homme">Montres homme</a>
      <a href="qui-sommes-nous.html">Qui sommes-nous</a><a href="contact.html">Contact</a>
      <a href="livraison-retours.html">Livraison et retours</a>
    </nav>
    <div class="cdc-search" id="cdcSearch" hidden>
      <form id="cdcSearchForm">
        <input id="cdcSearchInput" type="search" placeholder="Rechercher un produit..." aria-label="Rechercher un produit">
        <button type="submit">RECHERCHER</button>
      </form>
    </div>`;

  const footer = `
    <footer class="footer cdc-footer">
      <div class="footer-brand cdc-footer-brand"><a href="index.html" aria-label="Accueil">${logo}</a></div>
      <div class="footer-column"><h4>LA BOUTIQUE</h4>
        <a href="index.html">Accueil</a><a href="catalogue.html">Catalogue</a>
        <a href="favoris.html">Favoris</a><a href="panier.html">Panier</a><a href="contact.html">Contact</a>
      </div>
      <div class="footer-column"><h4>INFORMATIONS</h4>
        <a href="livraison-retours.html">Livraison et retours</a>
        <a href="conditions-generales.html">Conditions générales de vente</a>
        <a href="mentions-legales.html">Mentions légales</a><a href="confidentialite.html">Confidentialité</a>
      </div>
      <div class="footer-contact"><h4>CONTACT</h4><a href="mailto:lacledescoeurs@outlook.fr">lacledescoeurs@outlook.fr</a></div>
      <div class="footer-bottom">© <span id="cdcYear"></span> LA CLÉ DES CŒURS. Tous droits réservés.</div>
    </footer>`;

  function lirePanier() {
    try {
      const data = JSON.parse(localStorage.getItem("cdc_cart") || "[]");
      return Array.isArray(data) ? data : [];
    } catch { return []; }
  }

  function actualiserCompteurPanier() {
    const compteur = document.getElementById("cartCount");
    if (compteur) compteur.textContent = lirePanier().reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  }

  function initialiser() {
    document.querySelectorAll(".announcement, header.header, nav.main-nav, .utility-bar, footer").forEach(el => el.remove());
    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);

    const year = document.getElementById("cdcYear");
    if (year) year.textContent = new Date().getFullYear();

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("mainNav");
    menuButton?.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("click", e => {
      if (menu && menuButton && !menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });

    const searchButton = document.getElementById("cdcSearchButton");
    const searchBox = document.getElementById("cdcSearch");
    const searchForm = document.getElementById("cdcSearchForm");
    const searchInput = document.getElementById("cdcSearchInput");
    searchButton?.addEventListener("click", () => {
      searchBox.hidden = !searchBox.hidden;
      if (!searchBox.hidden) searchInput.focus();
    });
    searchForm?.addEventListener("submit", e => {
      e.preventDefault();
      const q = searchInput.value.trim();
      location.href = q ? "catalogue.html?recherche=" + encodeURIComponent(q) : "catalogue.html";
    });

    const themeButton = document.getElementById("cdcThemeButton");
    if (localStorage.getItem("cdc_theme") === "dark") document.body.classList.add("theme-dark");
    const updateThemeIcon = () => themeButton.innerHTML = document.body.classList.contains("theme-dark") ? icon.sun : icon.moon;
    updateThemeIcon();
    themeButton?.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
      localStorage.setItem("cdc_theme", document.body.classList.contains("theme-dark") ? "dark" : "light");
      updateThemeIcon();
    });

    const language = document.getElementById("cdcLanguage");
    if (language) {
      language.value = localStorage.getItem("cdc_language") || "fr";
      language.addEventListener("change", () => {
        const lang = language.value;
        localStorage.setItem("cdc_language", lang);
        if (lang === "fr") {
          location.href = location.pathname + location.search + location.hash;
        } else {
          location.href = "https://translate.google.com/translate?sl=fr&tl=" + encodeURIComponent(lang) + "&u=" + encodeURIComponent(location.href);
        }
      });
    }

    actualiserCompteurPanier();
    window.addEventListener("storage", actualiserCompteurPanier);
    window.addEventListener("cdc-cart-updated", actualiserCompteurPanier);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiser, { once: true });
  } else {
    initialiser();
  }
})();