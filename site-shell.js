
(() => {
  "use strict";

  const header = `
    <div class="announcement">BIENVENUE CHEZ LA CLÉ DES CŒURS</div>
    <header class="header cdc-header">
      <button class="menu-button" id="menuButton" type="button" aria-label="Ouvrir le menu">☰</button>
      <a href="index.html" class="brand" aria-label="Retour à l'accueil">
        <span class="brand-monogram">CDC</span>
        <span class="brand-name">LA CLÉ DES CŒURS</span>
        <span class="brand-tagline">BIJOUX FINS &amp; RAFFINÉS</span>
      </a>
      <div class="header-actions">
        <button id="cdcSearchButton" type="button" aria-label="Rechercher">⌕</button>
        <a href="favoris.html" aria-label="Favoris">♡</a>
        <a href="panier.html" aria-label="Panier">♧ <span id="cartCount">0</span></a>
        <label class="cdc-language">◎
          <select id="cdcLanguage" aria-label="Langue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
            <option value="pt">PT</option>
          </select>
        </label>
        <button id="cdcThemeButton" type="button" aria-label="Mode clair ou sombre">☼</button>
      </div>
    </header>

    <nav class="main-nav cdc-nav" id="mainNav">
      <a href="index.html">Accueil</a>
      <a href="catalogue.html">Catalogue</a>
      <a href="catalogue.html?categorie=accessoires">Accessoires et bracelets</a>
      <a href="catalogue.html?categorie=ap-swatch">AP x Swatch</a>
      <a href="catalogue.html?categorie=femme">Montres femme</a>
      <a href="catalogue.html?categorie=homme">Montres homme</a>
      <a href="qui-sommes-nous.html">Qui sommes-nous</a>
      <a href="contact.html">Contact</a>
    </nav>

    <div class="cdc-search" id="cdcSearch" hidden>
      <form id="cdcSearchForm">
        <input id="cdcSearchInput" type="search" placeholder="Rechercher un produit...">
        <button type="submit">Rechercher</button>
      </form>
    </div>
  `;

  const footer = `
    <footer class="footer cdc-footer">
      <div class="footer-brand">
        <span class="brand-monogram">CDC</span>
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

  function init() {
    document.querySelectorAll(
      ".announcement, header.header, nav.main-nav, .utility-bar, footer.footer"
    ).forEach(element => element.remove());

    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);

    document.getElementById("cdcYear").textContent =
      new Date().getFullYear();

    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cdc_cart") || "[]");
    } catch {}

    document.getElementById("cartCount").textContent =
      cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

    const menu = document.getElementById("mainNav");
    document.getElementById("menuButton").addEventListener("click", () => {
      menu.classList.toggle("is-open");
    });

    const search = document.getElementById("cdcSearch");
    document.getElementById("cdcSearchButton").addEventListener("click", () => {
      search.hidden = !search.hidden;
      if (!search.hidden) document.getElementById("cdcSearchInput").focus();
    });

    document.getElementById("cdcSearchForm").addEventListener("submit", event => {
      event.preventDefault();
      const term = document.getElementById("cdcSearchInput").value.trim();
      location.href = term
        ? "catalogue.html?recherche=" + encodeURIComponent(term)
        : "catalogue.html";
    });

    document.getElementById("cdcThemeButton").addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
