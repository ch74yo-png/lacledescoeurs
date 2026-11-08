(() => {
  "use strict";

  const icon = (name) => {
    const icons = {
      key: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9m-4 4 3 3m-6 0 3 3"/></svg>`,
      search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>`,
      account: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 3.5-6.3 8-6.3s7.2 2.1 8 6.3"/></svg>`,
      heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"/></svg>`,
      bag: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>`,
      globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
      moon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg>`,
      sun: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`
    };

    return icons[name] || "";
  };

  const header = `
    <header class="header cdc-header">
      <button class="menu-button cdc-icon-button" id="menuButton"
        type="button" aria-label="Ouvrir le menu" aria-expanded="false"
        aria-controls="mainNav">
        <span class="hamburger-lines"><i></i><i></i><i></i></span>
      </button>

      <a href="index.html" class="brand" aria-label="LA CLÉ DES CŒURS — Accueil">
        <span class="brand-monogram">
          <span>CDC</span>
          <span class="brand-key">${icon("key")}</span>
        </span>
        <span class="brand-name">LA CLÉ DES CŒURS</span>
        <span class="brand-tagline">BIJOUX FINS &amp; RAFFINÉS</span>
      </a>

      <div class="header-actions">
        <button class="cdc-icon-button" id="cdcSearchButton"
          type="button" aria-label="Rechercher">${icon("search")}</button>

        <a class="cdc-icon-button" href="compte.html"
          aria-label="Mon compte">${icon("account")}</a>

        <a class="cdc-icon-button" href="favoris.html"
          aria-label="Mes favoris">${icon("heart")}</a>

        <a class="cdc-icon-button cart-link" href="panier.html"
          aria-label="Mon panier">
          ${icon("bag")}<span id="cartCount">0</span>
        </a>

        <label class="cdc-language" aria-label="Choisir la langue">
          <span>${icon("globe")}</span>
          <select id="cdcLanguage" aria-label="Langue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
            <option value="pt">PT</option>
            <option value="nl">NL</option>
          </select>
        </label>

        <button class="cdc-icon-button theme-button" id="cdcThemeButton"
          type="button" aria-label="Changer le thème">
          ${icon("moon")}
        </button>
      </div>
    </header>

    <nav class="main-nav cdc-nav" id="mainNav" aria-label="Navigation principale">
      <a href="index.html">Accueil</a>
      <a href="catalogue.html">Catalogue</a>
      <a href="catalogue.html?categorie=accessoires">Accessoires et bracelets</a>
      <a href="catalogue.html?categorie=ap-swatch">AP x Swatch</a>
      <a href="catalogue.html?categorie=femme">Montres femme</a>
      <a href="catalogue.html?categorie=homme">Montres homme</a>
      <a href="qui-sommes-nous.html">Qui sommes-nous</a>
      <a href="contact.html">Contact</a>
      <a href="livraison-retours.html">Livraison et retours</a>
    </nav>

    <div class="cdc-search" id="cdcSearch" hidden>
      <form id="cdcSearchForm">
        <input id="cdcSearchInput" type="search"
          placeholder="Rechercher un produit..." aria-label="Rechercher un produit">
        <button type="submit">RECHERCHER</button>
      </form>
    </div>
  `;

  const footer = `
    <footer class="footer cdc-footer">
      <div class="footer-brand">
        <span class="brand-monogram">
          <span>CDC</span>
          <span class="brand-key">${icon("key")}</span>
        </span>
        <h3>LA CLÉ DES CŒURS</h3>
        <p>BIJOUX FINS &amp; RAFFINÉS</p>
      </div>

      <div class="footer-column">
        <h4>LA BOUTIQUE</h4>
        <a href="index.html">Accueil</a>
        <a href="catalogue.html">Catalogue</a>
        <a href="favoris.html">Favoris</a>
        <a href="panier.html">Panier</a>
        <a href="contact.html">Contact</a>
      </div>

      <div class="footer-column">
        <h4>INFORMATIONS</h4>
        <a href="livraison-retours.html">Livraison et retours</a>
        <a href="conditions-generales.html">Conditions générales de vente</a>
        <a href="mentions-legales.html">Mentions légales</a>
        <a href="confidentialite.html">Confidentialité</a>
      </div>

      <div class="footer-bottom">
        © <span id="cdcYear"></span> LA CLÉ DES CŒURS. Tous droits réservés.
      </div>
    </footer>
  `;

  function lirePanier() {
    try {
      return JSON.parse(localStorage.getItem("cdc_cart") || "[]");
    } catch {
      return [];
    }
  }

  function actualiserCompteurPanier() {
    const compteur = document.getElementById("cartCount");
    if (!compteur) return;

    const total = lirePanier().reduce((sum, item) => {
      return sum + (Number(item.quantity) || 1);
    }, 0);

    compteur.textContent = total;
  }

  function initialiserMenu() {
    const bouton = document.getElementById("menuButton");
    const menu = document.getElementById("mainNav");

    if (!bouton || !menu) return;

    bouton.addEventListener("click", () => {
      const ouvert = menu.classList.toggle("is-open");
      bouton.setAttribute("aria-expanded", String(ouvert));
    });
  }

  function initialiserRecherche() {
    const bouton = document.getElementById("cdcSearchButton");
    const zone = document.getElementById("cdcSearch");
    const formulaire = document.getElementById("cdcSearchForm");
    const champ = document.getElementById("cdcSearchInput");

    if (!bouton || !zone || !formulaire || !champ) return;

    bouton.addEventListener("click", () => {
      zone.hidden = !zone.hidden;
      if (!zone.hidden) champ.focus();
    });

    formulaire.addEventListener("submit", event => {
      event.preventDefault();
      const recherche = champ.value.trim();

      location.href = recherche
        ? "catalogue.html?recherche=" + encodeURIComponent(recherche)
        : "catalogue.html";
    });
  }

  function initialiserTheme() {
    const bouton = document.getElementById("cdcThemeButton");
    if (!bouton) return;

    const themeEnregistre = localStorage.getItem("cdc_theme");
    if (themeEnregistre === "dark") {
      document.body.classList.add("theme-dark");
    }

    function actualiserIcone() {
      bouton.innerHTML = document.body.classList.contains("theme-dark")
        ? icon("sun")
        : icon("moon");
    }

    actualiserIcone();

    bouton.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");

      localStorage.setItem(
        "cdc_theme",
        document.body.classList.contains("theme-dark") ? "dark" : "light"
      );

      actualiserIcone();
    });
  }

  function initialiserLangue() {
    const select = document.getElementById("cdcLanguage");
    if (!select) return;

    const langueEnregistree = localStorage.getItem("cdc_language") || "fr";
    select.value = langueEnregistree;

    select.addEventListener("change", () => {
      const langue = select.value;
      localStorage.setItem("cdc_language", langue);

      if (langue === "fr") {
        location.href = location.pathname + location.search;
        return;
      }

      const urlActuelle = encodeURIComponent(location.href);
      location.href =
        "https://translate.google.com/translate?sl=fr&tl=" +
        encodeURIComponent(langue) +
        "&u=" + urlActuelle;
    });
  }

  function initialiser() {
    document.querySelectorAll(
      ".announcement, header.header, nav.main-nav, .utility-bar, footer.footer"
    ).forEach(element => element.remove());

    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);

    const annee = document.getElementById("cdcYear");
    if (annee) annee.textContent = new Date().getFullYear();

    actualiserCompteurPanier();
    initialiserMenu();
    initialiserRecherche();
    initialiserTheme();
    initialiserLangue();

    window.addEventListener("storage", actualiserCompteurPanier);
    window.addEventListener("cdc-cart-updated", actualiserCompteurPanier);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiser, { once: true });
  } else {
    initialiser();
  }
})();
