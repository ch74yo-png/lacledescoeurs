(() => {
  "use strict";
  const icon = {
    search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"/></svg>',
    cart: '<svg viewBox="0 0 24 24"><path d="M2 3h2l2.5 12.5a2 2 0 0 0 2 1.5h9.8a2 2 0 0 0 1.9-1.4L22 8H5"/><circle cx="9" cy="21" r="1.3"/><circle cx="18" cy="21" r="1.3"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };

  // Le même logo officiel est utilisé dans l'en-tête et dans le pied de page.
  const logo = '<span class="cdc-logo"><img class="cdc-logo-image" src="/logo-officiel.jpg?v=mobile-fix-20261110" alt="LA CLE DES CŒURS — Depuis 1974 — Bijoux Fins & Raffinés"></span>';
  const header = `
    <header class="header cdc-header">
      <button class="menu-button cdc-icon-button" id="menuButton" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mainNav"><span class="hamburger-lines"><i></i><i></i><i></i></span></button>
      <a href="index.html" class="brand cdc-brand" aria-label="La Clé des Cœurs - Accueil">${logo}</a>
      <div class="header-actions">
        <button class="cdc-icon-button" id="cdcSearchButton" type="button" aria-label="Rechercher">${icon.search}</button>
        <a class="cdc-icon-button favorites-link" href="favoris.html" aria-label="Mes favoris">${icon.heart}<span id="favoriteCount" hidden></span></a>
        <a class="cdc-icon-button cart-link" href="panier.html" aria-label="Mon panier">${icon.cart}<span id="cartCount" hidden></span></a>
        <div class="cdc-language-flag" id="cdcLanguagePicker"><button class="cdc-language-flag-button" id="cdcLanguageButton" type="button" aria-label="Choisir la langue" aria-expanded="false">🇫🇷</button><div class="cdc-language-flag-menu" id="cdcLanguageMenu" hidden><button type="button" data-lang="fr" aria-label="Français">🇫🇷</button><button type="button" data-lang="en" aria-label="English">🇬🇧</button><button type="button" data-lang="es" aria-label="Espagnol">🇪🇸</button><button type="button" data-lang="de" aria-label="Allemand">🇩🇪</button><button type="button" data-lang="it" aria-label="Italien">🇮🇹</button><button type="button" data-lang="pt" aria-label="Portugais">🇵🇹</button><button type="button" data-lang="nl" aria-label="Néerlandais">🇳🇱</button><button type="button" data-lang="ar" aria-label="Arabe">🇸🇦</button><button type="button" data-lang="zh-CN" aria-label="Chinois">🇨🇳</button><button type="button" data-lang="ja" aria-label="Japonais">🇯🇵</button></div></div>
      </div>
    </header>
    <nav class="main-nav cdc-nav" id="mainNav" aria-label="Navigation principale">
      <a href="index.html">Accueil</a><a href="catalogue.html">Catalogue</a>
      <a href="catalogue.html?categorie=accessoires">Accessoires et bracelets</a><a href="catalogue.html?categorie=ap-swatch">AP x Swatch</a>
      <a href="catalogue.html?categorie=femme">Montres femme</a><a href="catalogue.html?categorie=homme">Montres homme</a>
      <a href="qui-sommes-nous.html">Qui sommes-nous</a><a href="contact.html">Contact</a><a href="livraison-retours.html">Livraison et retours</a>
    </nav>
    <div class="cdc-search" id="cdcSearch" hidden><form id="cdcSearchForm"><input id="cdcSearchInput" type="search" placeholder="Rechercher un produit..." aria-label="Rechercher un produit"><button type="submit">RECHERCHER</button></form></div>`;
  const footer = `
    <footer class="footer cdc-footer">
      <div class="footer-brand cdc-footer-brand"><a href="index.html" aria-label="Accueil">${logo}</a></div>
      <div class="footer-column"><h4>LA BOUTIQUE</h4><a href="index.html">Accueil</a><a href="catalogue.html">Catalogue</a><a href="favoris.html">Favoris</a><a href="panier.html">Panier</a></div>
      <div class="footer-column"><h4>INFORMATIONS</h4><a href="livraison-retours.html">Livraison et retours</a><a href="conditions-generales.html">Conditions générales de vente</a><a href="mentions-legales.html">Mentions légales</a><a href="confidentialite.html">Confidentialité</a></div>
      <div class="footer-contact"><h4>COORDONNÉES</h4><a href="mailto:lacledescoeurs@outlook.fr">lacledescoeurs@outlook.fr</a><a href="tel:+33780950371">+33 7 80 95 03 71</a><a href="https://www.google.com/maps/search/?api=1&query=38%20Bd%20du%20Mar%C3%A9chal%20Foch%2C%2049100%20Angers%2C%20France">38 Bd du Maréchal Foch, 49100 Angers, France</a></div>
      <div class="footer-contact footer-contact-form"><h4>FORMULAIRE DE CONTACT</h4><form id="cdcFooterContactForm" class="cdc-footer-contact-form"><label for="cdcFooterName">Nom et prénom *</label><input id="cdcFooterName" name="name" type="text" autocomplete="name" required placeholder="Votre nom"><label for="cdcFooterEmail">Adresse e-mail *</label><input id="cdcFooterEmail" name="email" type="email" autocomplete="email" required placeholder="Votre adresse e-mail"><label for="cdcFooterSubject">Objet *</label><input id="cdcFooterSubject" name="subject" type="text" required placeholder="Objet de votre demande"><label for="cdcFooterMessage">Votre message *</label><textarea id="cdcFooterMessage" name="message" rows="4" required placeholder="Écrivez votre message..."></textarea><button type="submit">ENVOYER</button><p class="cdc-footer-form-note">L’envoi ouvre votre application e-mail avec votre message prêt à être envoyé.</p></form></div>
      <div class="footer-bottom">© <span id="cdcYear"></span> LA CLÉ DES CŒURS. Tous droits réservés.</div>
    </footer>`;

  // Nettoyage unique des anciens paniers/favoris fantômes créés par les versions précédentes.
  try{if(localStorage.getItem("cdc_badges_reset_v2")!=="1"){localStorage.setItem("cdc_cart","[]");localStorage.setItem("cdc_favorites","[]");localStorage.setItem("cdc_badges_reset_v2","1");}}catch{}
  function lirePanier(){try{const data=JSON.parse(localStorage.getItem("cdc_cart")||"[]");return Array.isArray(data)?data.filter(item=>item&&typeof item==="object"&&(item.name||item.nom)&&Number.isFinite(Number(item.price??item.prix))&&Number(item.price??item.prix)>=0&&Number(item.quantity??1)>0):[]}catch{return[]}}
  function lireFavoris(){try{const data=JSON.parse(localStorage.getItem("cdc_favorites")||"[]");return Array.isArray(data)?data.filter(item=>item&&typeof item==="object"&&(item.name||item.nom)&&Number.isFinite(Number(item.price??item.prix))&&Number(item.price??item.prix)>=0):[]}catch{return[]}}
  function actualiserCompteurPanier(){const compteur=document.getElementById("cartCount");if(compteur){const total=lirePanier().reduce((sum,item)=>sum+Math.min(10,Math.max(1,Math.floor(Number(item.quantity)||1))),0);compteur.textContent=total?String(total):"";compteur.hidden=total===0}}
  function actualiserCompteurFavoris(){const compteur=document.getElementById("favoriteCount");if(compteur){const total=lireFavoris().length;compteur.textContent=total?String(total):"";compteur.hidden=total===0}}
  function appliquerThemeNoirIntegral(){
    if(document.getElementById("cdc-theme-noir-integral")) return;
    const style=document.createElement("style");
    style.id="cdc-theme-noir-integral";
    style.textContent=`
      body .cdc-footer{grid-template-columns:repeat(4,minmax(0,1fr))!important}
      body .cdc-footer .footer-contact-form{grid-column:1/-1!important;max-width:680px!important;justify-self:center!important}
      body .cdc-footer .cdc-footer-contact-form{display:grid!important;grid-template-columns:1fr 1fr!important;gap:9px 14px!important;width:100%!important;text-align:left!important}
      body .cdc-footer .cdc-footer-contact-form label{display:block!important;text-align:left!important;font-size:11px!important}
      body .cdc-footer .cdc-footer-contact-form input,body .cdc-footer .cdc-footer-contact-form textarea{box-sizing:border-box!important;width:100%!important;padding:10px!important;background:#080808!important;color:#fff!important;border:1px solid #d4af37!important}
      body .cdc-footer .cdc-footer-contact-form textarea,body .cdc-footer .cdc-footer-contact-form button,body .cdc-footer .cdc-footer-contact-form .cdc-footer-form-note{grid-column:1/-1!important}
      body .cdc-footer .cdc-footer-contact-form button{padding:13px!important;background:#d4af37!important;color:#000!important;border:1px solid #d4af37!important;cursor:pointer!important;letter-spacing:1.5px!important}
      body .cdc-footer .cdc-footer-form-note{font-size:10px!important;color:#ccc!important;text-align:center!important}
      @media(max-width:650px){body .cdc-footer{grid-template-columns:1fr!important}body .cdc-footer .footer-contact-form{grid-column:1!important}body .cdc-footer .cdc-footer-contact-form{grid-template-columns:1fr!important}}

      html,body{background:#000!important;background-image:none!important;color:#fff!important}
      body *:not(img):not(video):not(canvas):not(svg):not(path):not(.cdc-logo-image){
        background-color:#000!important;background-image:none!important;
        color:#fff!important;border-color:rgba(212,175,55,.55)!important;box-shadow:none!important;
      }
      body .hero{
        position:relative!important;isolation:isolate!important;overflow:hidden!important;
        min-height:470px!important;display:flex!important;align-items:center!important;justify-content:center!important;
        padding:55px 7% 35px!important;text-align:center!important;background-color:#000!important;
        background-image:linear-gradient(rgba(0,0,0,.16),rgba(0,0,0,.16)),url("/images/hero-ring.jpg")!important;
        background-position:center center!important;background-size:cover!important;background-repeat:no-repeat!important;
      }
      body .hero .hero-content,body .hero .hero-content *{
        background:transparent!important;background-color:transparent!important;background-image:none!important;box-shadow:none!important;
      }
      body .hero .hero-content{position:relative!important;z-index:2!important;width:100%!important;max-width:1000px!important;margin:0 auto!important;text-align:center!important}
      body .hero::after{display:none!important}
      body .hero .eyebrow,body .eyebrow{color:#d4af37!important}
      body .hero-content>p:not(.eyebrow),body .hero .primary-button{display:none!important}
      body .store-showcase,body .store-showcase-image{background:#000!important;background-image:none!important;text-align:center!important;margin:0!important;padding-top:8px!important}
      body .store-showcase img{filter:none!important;opacity:1!important;object-fit:contain!important}
      body .store-showcase p{color:#fff!important;text-align:center!important;margin-top:12px!important}
      body .store-collection-button{display:inline-flex!important;align-items:center!important;justify-content:center!important;margin:28px auto 0!important;padding:16px 38px!important;min-height:58px!important;background:#d4af37!important;color:#000!important;border:1px solid #d4af37!important}
      body img,body .cdc-logo,body .cdc-logo img,body .cdc-logo-image{filter:none!important;opacity:1!important}
      body .cdc-header,body .cdc-footer,body .cdc-nav,body .cdc-search{background:#000!important;color:#fff!important}
      body .cdc-footer{
        display:grid!important;
        grid-template-columns:repeat(4,minmax(0,1fr))!important;
        justify-items:center!important;
        align-items:start!important;
        gap:28px 36px!important;
        padding:42px 6% 22px!important;
        text-align:center!important;
      }
      body .cdc-footer .cdc-footer-brand{grid-column:1/-1!important;justify-self:center!important;text-align:center!important;width:100%!important;margin:0 auto 4px!important}
      body .cdc-footer .footer-column,body .cdc-footer .footer-contact{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;text-align:center!important;min-width:0!important;width:100%!important;gap:10px!important}
      body .cdc-footer .footer-column h4,body .cdc-footer .footer-contact h4{margin:0 0 8px!important;text-align:center!important}
      body .cdc-footer .footer-column a,body .cdc-footer .footer-contact a{display:block!important;text-align:center!important;line-height:1.7!important;overflow-wrap:anywhere!important}
      body .cdc-footer .footer-bottom{grid-column:1/-1!important;width:100%!important;text-align:center!important;margin-top:12px!important}
      @media(max-width:650px){
        body .cdc-footer{grid-template-columns:1fr!important;gap:25px!important;padding:34px 20px 20px!important}
        body .cdc-footer .cdc-footer-brand,body .cdc-footer .footer-bottom{grid-column:1!important}
      }
      body .cdc-language-flag{position:relative;display:inline-flex;align-items:center;justify-content:center;margin-left:5px}
      body .cdc-language-flag-button{width:38px;height:38px;padding:0!important;border:0!important;background:transparent!important;color:#fff!important;font-size:23px!important;line-height:1;cursor:pointer}
      body .cdc-language-flag-menu{position:absolute;right:0;top:calc(100% + 8px);z-index:99999;display:grid;grid-template-columns:repeat(2,42px);gap:5px;padding:8px;background:#080808!important;border:1px solid #d4af37!important;border-radius:5px;box-shadow:0 8px 25px #000}
      body .cdc-language-flag-menu[hidden]{display:none!important}
      body .cdc-language-flag-menu button{width:40px;height:38px;padding:0!important;background:#080808!important;color:#fff!important;border:1px solid rgba(212,175,55,.35)!important;font-size:22px!important;cursor:pointer}
      body .cdc-language-flag-menu button:hover{background:#242424!important}
      body .cdc-language-flag-menu button[aria-current="true"]{border-color:#d4af37!important}
      body .cdc-header .cdc-icon-button,body .cdc-header .header-actions,body .cdc-header .header-actions a,body .cdc-header .header-actions button,body .cdc-header .cdc-language,body .cdc-header .cdc-language>span,body .cdc-header .cdc-language select{color:#fff!important}
      body .cdc-header .cdc-icon-button svg,body .cdc-header .cdc-language svg{color:#fff!important;stroke:#fff!important}
      body .cdc-header .hamburger-lines i{background:#fff!important}
      body .product-price,body .favorite-price,body .detail-price,body .price,body .checkout-total,body .payment-total,body .home-category-heading h2 a,body .home-category-heading>a,body .cdc-footer .footer-column h4,body .cdc-footer .footer-contact h4,body .category-link{color:#d4af37!important}
      body input:not([type=checkbox]):not([type=radio]),body select,body textarea{background:#080808!important;color:#fff!important;border:1px solid #d4af37!important}
      body input::placeholder,body textarea::placeholder{color:#ddd!important;opacity:1!important}
      body select option{background:#000!important;color:#fff!important}
      body button,body .primary-button,body .secondary-button,body .checkout-button,body .pay-button,body button.primary,body .btn-primary{background:#d4af37!important;color:#000!important;border:1px solid #d4af37!important}
      @media(max-width:600px){
        body .hero{min-height:420px!important;padding:48px 6% 28px!important;background-position:center center!important;background-size:cover!important}
        body .hero h1{font-size:clamp(42px,11vw,58px)!important;line-height:1.04!important}
        body .store-showcase{padding:22px 12px 48px!important}
        body .store-showcase img{width:100%!important;max-height:none!important}
        body .store-showcase p{font-size:25px!important;line-height:1.3!important}
        body .store-collection-button{width:min(100%,340px)!important;padding:15px 18px!important;font-size:10px!important}
      }
    `;
    document.body.appendChild(style);
  }

  const CDC_LANGUAGES={
    fr:{flag:"🇫🇷",name:"Français"},en:{flag:"🇬🇧",name:"English"},es:{flag:"🇪🇸",name:"Español"},
    de:{flag:"🇩🇪",name:"Deutsch"},it:{flag:"🇮🇹",name:"Italiano"},pt:{flag:"🇵🇹",name:"Português"},
    nl:{flag:"🇳🇱",name:"Nederlands"},ar:{flag:"🇸🇦",name:"العربية"},"zh-CN":{flag:"🇨🇳",name:"中文"},ja:{flag:"🇯🇵",name:"日本語"}
  };
  const cdcOriginalText=new WeakMap();
  const cdcTranslated=new WeakMap();
  let cdcTranslationObserver=null;
  const cdcTranslationPending=[];
  let cdcTranslationActive=0;
  function cdcRunTranslationQueue(){while(cdcTranslationActive<6&&cdcTranslationPending.length){const task=cdcTranslationPending.shift();cdcTranslationActive++;task().finally(()=>{cdcTranslationActive--;cdcRunTranslationQueue()})}}
  function cdcTranslateNode(node,lang){
    if(!node||node.nodeType!==Node.TEXT_NODE)return;
    const parent=node.parentElement;
    if(!parent||/^(SCRIPT|STYLE|NOSCRIPT|SVG|TEXTAREA|INPUT|OPTION|CODE|PRE)$/i.test(parent.tagName))return;
    if(parent.closest("[data-no-translate],.cdc-language-flag,.cdc-logo,.product-image,.cdc-product-image,[href^=\"mailto:\"]"))return;
    const original=cdcOriginalText.get(node)||node.nodeValue;
    if(!original||!original.trim())return;
    if(!cdcOriginalText.has(node))cdcOriginalText.set(node,original);
    if(lang==="fr"){node.nodeValue=original;cdcTranslated.delete(node);return}
    if(cdcTranslated.get(node)===lang)return;
    const key="cdc_tr_"+lang+"_"+original;
    let cached=null;try{cached=sessionStorage.getItem(key)}catch{}
    const task=async()=>{
      try{
        let translated=cached;
        if(!translated){
          const url="https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl="+encodeURIComponent(lang)+"&dt=t&q="+encodeURIComponent(original);
          const response=await fetch(url,{method:"GET"});
          if(!response.ok)throw new Error("Traduction indisponible");
          const data=await response.json();
          translated=Array.isArray(data?.[0])?data[0].map(part=>part?.[0]||"").join(""):"";
          if(!translated)throw new Error("Réponse de traduction vide");
          try{sessionStorage.setItem(key,translated)}catch{}
        }
        if(localStorage.getItem("cdc_language")===lang&&node.isConnected){
          node.nodeValue=translated;cdcTranslated.set(node,lang);
        }
      }catch(error){console.warn("CDC traduction automatique :",error)}
    };
    cdcTranslationPending.push(task);cdcRunTranslationQueue();
  }
  function cdcTranslateDocument(lang,root=document){
    if(lang==="fr"){
      root.querySelectorAll("*").forEach(el=>{for(const node of el.childNodes)if(node.nodeType===Node.TEXT_NODE&&cdcOriginalText.has(node))node.nodeValue=cdcOriginalText.get(node)});
      return;
    }
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>cdcTranslateNode(node,lang));
    root.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach(el=>{
      ["placeholder","aria-label","title","alt"].forEach(attr=>{
        const value=el.getAttribute(attr);if(!value)return;
        const originals=el.__cdcOriginalAttrs||(el.__cdcOriginalAttrs={});
        if(!(attr in originals))originals[attr]=value;
        const cacheKey="cdc_attr_"+lang+"_"+originals[attr];
        let cached=null;try{cached=sessionStorage.getItem(cacheKey)}catch{}
        const apply=translated=>{if(localStorage.getItem("cdc_language")===lang&&el.isConnected)el.setAttribute(attr,translated)};
        if(cached){apply(cached);return}
        fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl="+encodeURIComponent(lang)+"&dt=t&q="+encodeURIComponent(originals[attr]))
          .then(r=>r.json()).then(data=>{const translated=Array.isArray(data?.[0])?data[0].map(x=>x?.[0]||"").join(""):"";if(translated){try{sessionStorage.setItem(cacheKey,translated)}catch{}apply(translated)}}).catch(()=>{});
      });
    });
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  }
  function initialiserTraduction(){
    const button=document.getElementById("cdcLanguageButton"),menu=document.getElementById("cdcLanguageMenu");
    if(!button||!menu)return;
    const lang=localStorage.getItem("cdc_language")||"fr";
    const selected=CDC_LANGUAGES[lang]?lang:"fr";
    button.textContent=CDC_LANGUAGES[selected].flag;
    menu.querySelectorAll("button[data-lang]").forEach(item=>{
      item.setAttribute("aria-current",item.dataset.lang===selected?"true":"false");
      item.addEventListener("click",()=>{
        const next=item.dataset.lang;
        localStorage.setItem("cdc_language",next);
        button.textContent=CDC_LANGUAGES[next].flag;
        menu.hidden=true;button.setAttribute("aria-expanded","false");
        location.reload();
      });
    });
    button.addEventListener("click",event=>{
      event.stopPropagation();menu.hidden=!menu.hidden;
      button.setAttribute("aria-expanded",String(!menu.hidden));
    });
    document.addEventListener("click",event=>{
      if(!document.getElementById("cdcLanguagePicker")?.contains(event.target)){
        menu.hidden=true;button.setAttribute("aria-expanded","false");
      }
    });
    if(selected!=="fr"){
      cdcTranslateDocument(selected);
      if(cdcTranslationObserver)cdcTranslationObserver.disconnect();
      cdcTranslationObserver=new MutationObserver(records=>{
        if(localStorage.getItem("cdc_language")!==selected)return;
        records.forEach(record=>{
          record.addedNodes.forEach(node=>{
            if(node.nodeType===Node.TEXT_NODE)cdcTranslateNode(node,selected);
            else if(node.nodeType===Node.ELEMENT_NODE)cdcTranslateDocument(selected,node);
          });
        });
      });
      cdcTranslationObserver.observe(document.body,{childList:true,subtree:true});
    }else{
      document.documentElement.lang="fr";document.documentElement.dir="ltr";
    }
  }

  function initialiser(){
    appliquerThemeNoirIntegral();
    document.querySelectorAll(".announcement, header.header, nav.main-nav, .utility-bar, footer").forEach(el=>el.remove());
    document.body.insertAdjacentHTML("afterbegin",header);
    document.body.insertAdjacentHTML("beforeend",footer);
    const year=document.getElementById("cdcYear");if(year)year.textContent=new Date().getFullYear();
    const menuButton=document.getElementById("menuButton"),menu=document.getElementById("mainNav"),headerElement=document.querySelector(".cdc-header");
    if(headerElement&&menu&&menu.parentElement!==headerElement)headerElement.appendChild(menu);
    const fermerMenu=()=>{if(!menu||!menuButton)return;menu.classList.remove("is-open");menu.style.removeProperty("display");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Ouvrir le menu")};
    const basculerMenu=()=>{if(!menu||!menuButton)return;const ouvrir=!menu.classList.contains("is-open");menu.classList.toggle("is-open",ouvrir);if(ouvrir)menu.style.setProperty("display","flex","important");else menu.style.setProperty("display","none","important");menuButton.setAttribute("aria-expanded",String(ouvrir));menuButton.setAttribute("aria-label",ouvrir?"Fermer le menu":"Ouvrir le menu")};
    menuButton?.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();basculerMenu()});
    menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",fermerMenu));
    document.addEventListener("click",event=>{if(menu?.classList.contains("is-open")&&!menu.contains(event.target)&&!menuButton?.contains(event.target))fermerMenu()});
    document.addEventListener("keydown",event=>{if(event.key==="Escape")fermerMenu()});
    const searchButton=document.getElementById("cdcSearchButton"),searchBox=document.getElementById("cdcSearch"),searchForm=document.getElementById("cdcSearchForm"),searchInput=document.getElementById("cdcSearchInput");
    searchButton?.addEventListener("click",()=>{searchBox.hidden=!searchBox.hidden;if(!searchBox.hidden)searchInput.focus()});
    searchForm?.addEventListener("submit",e=>{e.preventDefault();const q=searchInput.value.trim();location.href=q?"catalogue.html?recherche="+encodeURIComponent(q):"catalogue.html"});
    /* Le bouton de changement de thème est volontairement retiré de l'en-tête. */
    initialiserTraduction();


    const footerContactForm=document.getElementById("cdcFooterContactForm");
    footerContactForm?.addEventListener("submit",event=>{
      event.preventDefault();
      const data=new FormData(footerContactForm);
      const subject=String(data.get("subject")||"Demande depuis le site LA CLÉ DES CŒURS").trim();
      const body="Nom : "+String(data.get("name")||"")+"\nE-mail : "+String(data.get("email")||"")+"\n\nMessage :\n"+String(data.get("message")||"");
      location.href="mailto:lacledescoeurs@outlook.fr?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
    });
    actualiserCompteurPanier();actualiserCompteurFavoris();
    window.addEventListener("storage",()=>{actualiserCompteurPanier();actualiserCompteurFavoris()});
    window.addEventListener("cdc-cart-updated",actualiserCompteurPanier);
    window.addEventListener("cdc-favorites-updated",actualiserCompteurFavoris);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initialiser,{once:true});else initialiser();
})();