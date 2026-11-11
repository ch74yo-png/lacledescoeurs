"use strict";

// =============================================
// LA CLÉ DES CŒURS
// Catalogue original conservé
// Produit supplémentaire : DETAILS à 2 €
// =============================================

const determinerCategories = (nom, marque, categories) => {
  const texte = String(nom || "").toLowerCase();
  const marqueTexte = String(marque || "").toLowerCase();
  if (marqueTexte.includes("ap x swatch") || texte.includes("royal pop") || texte.includes("bioceramic")) {
    return ["ap-swatch"];
  }
  if (Array.isArray(categories) && categories.some(c => c === "femme" || c === "homme")) {
    return [categories.includes("femme") ? "femme" : "homme"];
  }
  if (/\b(montre|watch|chronographe|santos|tank|panth[eè]re|baignoire|reverso|seamaster|speedmaster|datejust|submariner|navitimer|el primero|patek philippe|rolex|tudor|omega|jaeger|breitling)\b/.test(texte)) {
    if (/\b(femme|women|lady|dames|demoiselle|petit[e]? mod[eè]le femme)\b/.test(texte)) return ["femme"];
    if (/\b(homme|men|masculin)\b/.test(texte)) return ["homme"];
    return ["homme"];
  }
  return ["accessoires"];
};

const creerProduit = (id, nom, marque, prix, ancienPrix = null, categories = ["accessoires"], extra = {}) => {
  const categoriesFinales = determinerCategories(nom, marque, categories);
  return {
    id,
    nom,
    marque,
    categorie: categoriesFinales[0],
    categories: categoriesFinales,
    prix,
    ancienPrix,
    devise: "EUR",
    image: "",
    actif: true,
    ...extra
  };
};

const produits = [
  // PAGE 1
  {
    ...creerProduit("bague-cartier-trinite-diamants-54", "Bague Cartier Trinité – Or tricolore 18 carats – Diamants – Taille 54 UE / 6,75 US – Avec boîte", "Cartier", 2500, 3200),
    image: "https://bijouterielamalmaison.fr/wp-content/uploads/2026/05/AA1.webp"
  },
  {
    ...creerProduit("bague-cartier-trinity-diamants-4-1-4", "Bague Cartier Trinity en or 18 carats et diamants – Taille 4 1/4 – Excellent état", "Cartier", 4599, 6000),
    image: "https://bijouterielamalmaison.fr/wp-content/uploads/2026/05/AB1-430x323.webp"
  },
  {
    ...creerProduit("bague-fiancailles-cartier-1895", "Bague de fiançailles Cartier 1895 en or jaune 18 carats, diamant rond de 0,72 ct, couleur D, pureté VS1", "Cartier", 1899),
    image: "https://bijouterielamalmaison.fr/wp-content/uploads/2026/05/AC1-1-430x350.webp"
  },
  {
    ...creerProduit("bracelet-alhambra-cornaline-1", "Bracelet Alhambra en or rose 18 carats et cornaline de VanCleef & Arpels, avec boite et certificat.", "Van Cleef & Arpels", 3299, null, ["accessoires"], { image: "assets/181f650e-098a-4939-b752-d9398827d157.JPG", images: ["assets/181f650e-098a-4939-b752-d9398827d157.JPG", "assets/2dc97fae-1323-44a5-bb8c-da2de3036c01.JPG", "assets/3e7c204e-f41a-4d63-a49d-3935d91936d5.JPG"] }),
    image: "https://bijouterielamalmaison.fr/wp-content/uploads/2026/05/CC4-430x368.jpeg"
  },
  creerProduit("bracelet-alhambra-cornaline-2", "Bracelet Alhambra en or rose 18 carats et cornaline de VanCleef & Arpels, avec boite et certificat.", "Van Cleef & Arpels", 3299),
  creerProduit("bracelet-cartier-love-authentique", "Bracelet authentique CARTIER Love", "Cartier", 5500, null, ["accessoires"], { image: "9dfa5e12-05b5-4ebe-bcff-6345bd518ea2.JPG" }),
  creerProduit("bracelet-cartier-love-jaune-16", "Bracelet CARTIER « LOVE » en or jaune 18 carats 750 taille 16", "Cartier", 3599, null, ["accessoires"], { image: "9f928690-30f6-4aed-a2b6-4e445c19f5bc.JPG", images: ["9f928690-30f6-4aed-a2b6-4e445c19f5bc.JPG", "assets/202ab02a-adb1-4058-8720-3e0c99a6d4cd.JPG", "assets/3522b108-804d-4c64-b3d1-15d2227947b4.JPG", "assets/3e627c9a-7564-4e04-873d-c9cc3375bc27.JPG"] }),
  creerProduit("bracelet-cartier-juste-un-clou-2025", "Bracelet Cartier Juste Un Clou 18K Or Jaune 18 cm – Bijou de Luxe Authentique 2025", "Cartier", 2000, null, ["accessoires"], { image: "9d2c3185-4e92-4583-9784-55dc6934b73b.JPG", images: ["9d2c3185-4e92-4583-9784-55dc6934b73b.JPG", "assets/356a2f65-eea7-4dcc-8d55-4963e94a138a.JPG", "assets/3531c052-e99a-48b0-aea5-3a716a606fa8.JPG"] }),
  creerProduit("bracelet-cartier-juste-un-clou-36mm", "Bracelet Cartier JUSTE UN CLOU en or jaune 18 carats de 3,6 mm, taille 17, boîte cadeau, reçu", "Cartier", 4300, null, ["accessoires"], { image: "adf24613-321d-4caf-98db-ec58214a896d.JPG", images: ["adf24613-321d-4caf-98db-ec58214a896d.JPG", "assets/3531c052-e99a-48b0-aea5-3a716a606fa8.JPG", "assets/4af7112a-c7a0-464f-a93b-876d1bae4887.JPG"] }),
  creerProduit("bracelet-cartier-juste-un-clou-small-15", "Bracelet Cartier Juste Un Clou Small Or 18K 15 cm – Bijou de Luxe Authentique", "Cartier", 2300),
  creerProduit("bracelet-cartier-love-blanc-15", "Bracelet Cartier Love – Or blanc 18 carats – Taille 15", "Cartier", 2299, 3000),
  creerProduit("bracelet-cartier-love-jaune-petit-17", "Bracelet Cartier Love – Or Jaune 18 ct – Petit Modèle Taille 17 – Occasion Authentique", "Cartier", 3700),

  // PAGE 2
  creerProduit("bracelet-cartier-love-rose-16-complet", "Bracelet Cartier Love – Or rose 18 carats – Taille 16 – Ensemble complet avec papiers", "Cartier", 3799, 4500),
  creerProduit("bracelet-cartier-love-16-rose", "Bracelet Cartier Love 16 Or Rose – Ensemble Complet | Excellent État", "Cartier", 3900),
  creerProduit("bracelet-cartier-love-blanc-17-certificat", "Bracelet Cartier Love authentique en or blanc 18 carats, taille 17, avec certificat.", "Cartier", 3500, null, ["accessoires"], { image: "assets/194b1f30-f83d-41f5-b618-783b248522b3.JPG", images: ["assets/194b1f30-f83d-41f5-b618-783b248522b3.JPG", "assets/288f3a86-fde7-46d5-967c-8b24012f8685.JPG", "assets/2a531aab-c9d6-42db-8033-ace0ae30eebc.JPG"] }),
  creerProduit("bracelet-cartier-love-jaune-17-complet", "Bracelet Cartier Love Authentique Or Jaune 18K – Taille 17 cm – Boîte et Papiers", "Cartier", 4500, null, ["accessoires"], { image: "a36de3d2-f315-434a-bde1-73ec08bf24d0.JPG" }),
  creerProduit("bracelet-cartier-love-4-diamants-blanc-17", "Bracelet Cartier Love Classique – 4 Diamants – Or blanc 18 carats – Taille 17", "Cartier", 4299, 5500),
  creerProduit("bracelet-cartier-love-rose-21", "Bracelet Cartier Love Classique – Or Rose 18 Carats – 21 cm – Occasion 2022 avec Coffret et Certificat", "Cartier", 2500),
  creerProduit("bracelet-cartier-love-blanc-17-complet", "Bracelet Cartier LOVE en or blanc 18 carats, taille 17, coffret complet et certificat", "Cartier", 3699, 4500, ["accessoires"], { image: "a3eb8bfd-99ea-416c-ad89-32b2eeb9b2a3.JPG", images: ["a3eb8bfd-99ea-416c-ad89-32b2eeb9b2a3.JPG", "assets/15f97781-c36a-436b-90be-c30da98f5569.JPG"] }),
  creerProduit("bracelet-cartier-love-jaune-16-page2", "Bracelet Cartier Love en Or jaune 18 carats – Taille 16", "Cartier", 4099, null, ["accessoires", "assets/3e627c9a-7564-4e04-873d-c9cc3375bc27.JPG", "assets/408ad890-b738-48f2-86d0-870ba121395c.JPG", "assets/47adf04d-9761-4d68-bea6-527216d38f4d.JPG"], { image: "assets/202ab02a-adb1-4058-8720-3e0c99a6d4cd.JPG", images: ["assets/202ab02a-adb1-4058-8720-3e0c99a6d4cd.JPG", "assets/2b5968f5-320d-4537-9b78-61bb37ca5c64.JPG", "assets/2dadd26e-0f5a-411d-941d-90bc7749d7a0.JPG", "assets/2fb8c827-fa8c-4930-bf69-d7e3f0d1f474.JPG", "assets/3522b108-804d-4c64-b3d1-15d2227947b4.JPG", "assets/3a76747e-a840-4680-b1e0-129c3aa0fb68.JPG"] }),
  creerProduit("bracelet-cartier-love-jaune-15-a", "Bracelet Cartier Love en or jaune 18 carats taille 15.", "Cartier", 4099),
  creerProduit("bracelet-cartier-love-jaune-15-b", "Bracelet Cartier Love en or jaune 18 carats, taille 15", "Cartier", 4200),
  creerProduit("bracelet-cartier-love-jaune-18-fermoir", "Bracelet Cartier Love en or jaune 18 carats, taille 18, fermoir à vis, neuf, avec boîte et papier", "Cartier", 3299, 4000),
  creerProduit("bracelet-cartier-love-jaune-tournevis-19", "Bracelet Cartier Love en or jaune avec tournevis, taille 19", "Cartier", 3500),

  // PAGE 3
  creerProduit("bracelet-cartier-love-rose-6-diamants-19", "Bracelet Cartier Love en or rose 18 carats, 6 diamants, taille 19", "Cartier", 3900),
  creerProduit("bracelet-cartier-love-rose-17-complet", "Bracelet Cartier Love en or rose 18 carats, taille 17, ensemble complet", "Cartier", 4599),
  creerProduit("bracelet-cartier-love-moyen-16", "Bracelet Cartier Love modèle moyen taille 16 boîte et papiers", "Cartier", 4300),
  creerProduit("bracelet-cartier-love-blanc-19", "Bracelet Cartier Love Or Blanc 18K 6,1 mm – Taille 19 – Authentique avec Boîte et Papiers", "Cartier", 4300),
  creerProduit("bracelet-cartier-love-blanc-4-diamants", "Bracelet Cartier Love Or Blanc 18K Classique – 4 Diamants – Boîte et Papiers", "Cartier", 4800),
  creerProduit("bracelet-cartier-love-jaune-17", "Bracelet Cartier Love Or Jaune 18K – Taille 17 cm – Authentique avec Boîte et Papiers", "Cartier", 4300, null, ["accessoires"], { image: "aa56a573-19df-423f-b5b4-0cef2b38ea6b.JPG" }),
  creerProduit("bracelet-cartier-love-jaune-18", "Bracelet Cartier Love Or Jaune 18K Authentique – Taille 18 – Jonc Homme/Femme", "Cartier", 3500),
  creerProduit("bracelet-cartier-love-rose-16-complet-page3", "Bracelet Cartier Love Or Rose 18K – Taille 16 – Ensemble Complet, Excellent État", "Cartier", 3800),
  creerProduit("bracelet-cartier-love-jaune-2023", "Bracelet Cartier Love Taille Classique – Or Jaune 18k, avec Boîte & Certifiacat (2023)", "Cartier", 3699),
  creerProduit("bracelet-cartier-love-jaune-2024-19", "Bracelet Cartier Love, taille 19 (modèle 2024), ensemble complet, or jaune.", "Cartier", 3700),
  creerProduit("bracelet-cartier-panthere-3-rangs", "Bracelet Cartier Panthère – 3 rangs – Or jaune 18 carats – Très bon état", "Cartier", 3099, 4500),
  creerProduit("bracelet-fred-emeraude", "Bracelet Fred en or jaune 18 carats avec émeraude", "Fred", 6800),

  // PAGE 4
  creerProduit("bracelet-fred-force-10-cable-vert", "Bracelet Fred Force 10 en or jaune 18 carats avec câble vert émeraude – Grand modèle 19", "Fred", 7850),
  creerProduit("bracelet-fred-force-10-rose-ceramique", "Bracelet Fred Force 10 en or rose 18 carats, céramique, diamants et câble noir – Grand modèle 16", "Fred", 5099),
  creerProduit("bracelet-fred-force-10-rose-diamant", "Bracelet Fred Force 10 grand modèle en or rose 18 carats et diamant", "Fred", 2888),
  creerProduit("bracelet-jonc-cartier-trinity", "Bracelet jonc Cartier Trinity Tricolore en or 18 carats – Modèle classique", "Cartier", 2850, 4000),
  creerProduit("bracelet-jonc-tiffany-notes", "Bracelet jonc Tiffany & Co. Notes en or jaune 18 carats – 28,10 g", "Tiffany & Co.", 3099),
  creerProduit("bracelet-jonc-cartier-love-blanc-18", "Bracelet jonc vissé Cartier Love en or blanc 18 carats – Taille 18", "Cartier", 3099, 3700),
  creerProduit("bracelet-love-cartier-blanc-16", "Bracelet Love Cartier – Or blanc 18 carats – Taille 16 – Coffret et tournevis", "Cartier", 3599, 4500),
  creerProduit("bracelet-love-cartier-rose-19", "Bracelet Love Cartier authentique, modèle classique, 4 diamants, or rose, taille 19.", "Cartier", 6200),
  creerProduit("bracelet-love-cartier-jaune-b4034", "Bracelet Love Cartier en or jaune 18 carats, taille 16, avec boîte et certificat – B4034", "Cartier", 3599, 4500),
  creerProduit("bracelet-love-cartier-jaune-18", "Bracelet Love Cartier en or jaune 18 K, modèle classique – Taille 18.", "Cartier", 4099),
  creerProduit("bracelet-love-cartier-rose-17", "Bracelet love cartier en or rose taille 17", "Cartier", 3250),
  creerProduit("bracelet-manchette-cartier-love-blanc", "Bracelet Manchette Cartier Love Grand Modèle – Or Blanc 18K – Boîte et Papiers", "Cartier", 4250),

  // PAGE 5
  creerProduit("bracelet-manchette-cartier-love-jaune-20", "Bracelet Manchette Cartier Love Or Jaune 18K Taille 20 – Authentique avec Boîte et Papiers", "Cartier", 2700),
  creerProduit("bracelet-manchette-cartier-panthere-1987", "Bracelet Manchette Cartier Panthère Femme 1987 – Or Jaune 18 Carats", "Cartier", 7400),
  creerProduit("royal-pop-blaue-acht", "Bracelet Royal Pop Blaue Acht – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-green-eight", "Bracelet Royal Pop Green Eight – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-huit-blanc", "Bracelet Royal Pop Huit Blanc – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-lan-ba", "Bracelet Royal Pop Lan Ba – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-ocho-negro", "Bracelet Royal Pop Ocho Negro – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-orenji-hachi", "Bracelet Royal Pop Orenji Hachi – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-otg-roz", "Bracelet Royal Pop Otg Roz – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("royal-pop-otto-rosso", "Bracelet Royal Pop Otto Rosso – Bioceramic Swiss Made", "AP x Swatch", 53, null, ["accessoires", "ap-swatch"]),
  creerProduit("bracelet-vca-malachite-5-motifs", "Bracelet Van Cleef & Arpels 5 Motifs Malachite en Or Jaune 18k – Avec Boîte & Certificat", "Van Cleef & Arpels", 2500, null, ["accessoires"], { image: "a53fbd1b-0773-431b-b2d2-cf9288ece29e.JPG", images: ["a53fbd1b-0773-431b-b2d2-cf9288ece29e.JPG", "assets/1a42118e-b69c-4799-a707-66ba7ebf644a.JPG", "assets/1b681efb-e673-4ebe-b6d1-f91dcb8b0b35.JPG", "assets/3f025a3a-b7fb-48a0-8d93-1372df3bdb91.JPG"] }),
  creerProduit("bracelet-vca-alhambra-onyx-vintage", "Bracelet Van Cleef & Arpels Alhambra 5 Motifs – Or 18K et Onyx – Vintage", "Van Cleef & Arpels", 3000, null, ["accessoires"], { image: "assets/2935ec41-4688-46c6-a741-88e2f8cf9392.JPG" }),

  // PAGE 6
  creerProduit("bracelet-vca-vintage-alhambra-onyx", "Bracelet Van Cleef & Arpels Vintage Alhambra – 5 motifs en or jaune 18 carats et onyx", "Van Cleef & Arpels", 2999, 4000),
  creerProduit("bracelet-vca-alhambra-nacre-19", "Bracelet Van Cleef & Arpels Vintage Alhambra 5 motifs en nacre blanche, or jaune 18 carats, taille 19 cm", "Van Cleef & Arpels", 2099, 3000),
  creerProduit("bracelet-vca-alhambra-cornaline", "Bracelet Vintage Alhambra en or jaune 18 carats et cornaline à 5 motifs – Van Cleef & Arpels", "Van Cleef & Arpels", 2099, 3200),
  creerProduit("bracelet-cartier-love-18-2024", "Bracelet/bracelet Cartier Love taille 18 – petit modèle 2024 ensemble complet or jaune", "Cartier", 3600),
  creerProduit("cartier-juste-un-clou-petit-16", "Cartier Juste un Clou – Bracelet petit modèle en or jaune 18 carats, taille 16, avec écrin et certificat", "Cartier", 2015),
  creerProduit("cartier-juste-un-clou-bague-52", "Cartier Juste Un Clou Bague en or rose 18 carats Taille 52 / US 6", "Cartier", 1850),
  creerProduit("cartier-juste-un-clou-diamant-rose", "Cartier Juste Un Clou Diamant Or Rose Bracelet", "Cartier", 5500, null, ["accessoires", "assets/4018b180-1235-4879-a957-0d0c5135216b.JPG", "assets/43da533a-0d14-45d9-ba14-40339f0f5ebc.JPG", "assets/44b3f403-83ad-49b3-84fd-ee84c7819e0d.JPG", "assets/4bf1f405-7c08-4825-8a52-ac0488383fb5.JPG", "assets/4af7112a-c7a0-464f-a93b-876d1bae4887.JPG"], { image: "assets/1ecece59-9a76-461e-aca3-d5b31de5bf3b.JPG", images: ["assets/1ecece59-9a76-461e-aca3-d5b31de5bf3b.JPG", "assets/2b45e114-2bf9-4f82-834c-210103f8f866.JPG", "assets/356a2f65-eea7-4dcc-8d55-4963e94a138a.JPG", "assets/39496461-e422-4350-97e6-7fd510dacd45.JPG", "assets/3b9b218e-c634-449d-ac49-c9a0164b350f.JPG", "assets/4018b180-1235-4879-a957-0d0c5135216b.JPG", "assets/44b3f403-83ad-49b3-84fd-ee84c7819e0d.JPG"] }),
  creerProduit("cartier-juste-un-clou-ring-jaune-49", "Cartier Juste Un Clou Ring 49mm US 5 18K Jaune Modèle Classique", "Cartier", 2500, null, ["accessoires"], { image: "assets/1b9e978d-bc8e-4bfb-abb3-465a2d26a219.JPG" }),
  creerProduit("cartier-love-bracelet-jaune-18-2020", "Cartier Love Bracelet – Taille 18, or jaune 18 carats, collection Love (2020)", "Cartier", 3269),
  creerProduit("cartier-tank-homme-wsta0056", "Cartier Tank Homme – Acier inoxydable – Cadran vert – 25 mm – Quartz – WSTA0056", "Cartier", 2000, 3000, ["accessoires", "homme"], { reference: "WSTA0056" }),
  creerProduit("collier-vca-magic-alhambra", "Collier long motif Magic Alhambra 1 de Van Cleef & Arpels en or blanc et diamants", "Van Cleef & Arpels", 13750, 16500),
  creerProduit("pendentifs-vintage-alhambra-diamants", "Ensemble Complet de Pendentifs Vintage Alhambra en Or Jaune 18 carats et Diamants – Van Cleef & Arpels", "Van Cleef & Arpels", 1600, 2700),

  // PAGE 7
  creerProduit("bracelet-fred-chaine-infini-rose", "Grand bracelet Fred Chaîne Infini en or rose 18 carats", "Fred", 3099),
  creerProduit("bracelet-fred-forsten-blanc-15", "Grand bracelet Fred Forsten en or blanc 18 carats – Taille 15", "Fred", 2555),
  creerProduit("pendentif-vca-pure-alhambra-onyx", "Pendentif Pure Alhambra en Onyx et Or Jaune 18 carats – Van Cleef & Arpels", "Van Cleef & Arpels", 3835, 4610),
  creerProduit("bracelet-vca-vintage-alhambra-malachite", "Van Cleef & Arpels Vintage Alhambra – Bracelet 5 motifs en or jaune 18k et malachite", "Van Cleef & Arpels", 3099, 4500),

  // MONTRES CARTIER
  creerProduit("cartier-santos-carree-2961", "Cartier Santos Carrée 2961 – Cadran Bordeaux", "Cartier", 4300, 5100, ["homme"], {
    reference: "2961",
    description: "Montre Cartier Santos Carrée de 1982 avec cadran bordeaux Swiss Only, boîte et papiers d’origine.",
    ficheSource: "https://bijouterielamalmaison.fr/product/cartier-santos-carree-2961-cadran-bordeaux-swiss-only-1982-boite-papiers-rare/"
  }),
  creerProduit("cartier-santos-wssa0062", "Cartier Santos de Cartier WSSA0062 – Cadran vert", "Cartier", 6000, null, ["homme"], {
    reference: "WSSA0062",
    image: "assets/16e7b339-c2b3-42bf-92a9-57a8fd0b1259.JPG",
    images: ["assets/16e7b339-c2b3-42bf-92a9-57a8fd0b1259.JPG", "assets/24dd6da1-4ba2-4ec5-afe4-c98db37fd2df.JPG", "assets/25faf4a3-50bb-4388-aed1-6ed90a48ec31.JPG", "assets/43ba34b1-bc56-49ea-bb75-9cf12023f51b.JPG"],
    description: "Montre automatique Cartier Santos en acier, cadran vert, boîte et papiers.",
    ficheSource: "https://bijouterielamalmaison.fr/product/cartier-santos-de-cartierwssa0062-ensemble-complet-garantie/"
  }),

  // NOUVEAU PRODUIT AJOUTÉ
  creerProduit(
    "bracelet-chaine-cartier-love-7-pouces",
    "Bracelet chaîne Cartier Love 7 pouces à emboîtement en or jaune 18 carats",
    "Cartier",
    1999,
    null,
    ["accessoires"],
    {
      image: "assets/1d611b43-7cb8-4617-b08b-ae332ea032bb.JPG",
      images: ["assets/1d611b43-7cb8-4617-b08b-ae332ea032bb.JPG", "assets/41bc7c65-efad-4b9d-9f41-303a01d9df48.JPG"],
      description: "Condition : Occasion – Très bon état.\nÉtat : Ce bracelet Cartier est en très bon état. Toutes les parties fonctionnent correctement."
    }
  ),

  // PRODUITS AJOUTÉS À PARTIR DES FICHES TRANSMISES LE 10/11/2026
  creerProduit("bague-cartier-love-classique-jaune", "Bague Cartier Love classique en or jaune 18 carats", "Cartier", 1400, null, ["accessoires"], { image: "assets/301c92e9-d3a2-4cd5-abad-100d625900b4.JPG", description: "Bague Cartier Love classique en or jaune 18 carats." }),
  creerProduit("bracelet-cartier-love-classique-rose", "Bracelet Cartier Love classique en or rose 18 carats", "Cartier", 3999, null, ["accessoires"], { description: "Bracelet Cartier Love classique en or rose 18 carats." }),
  creerProduit("bague-cartier-love-petit-modele", "Bague Cartier Love petit modèle", "Cartier", 1099, null, ["accessoires"], { description: "Bague Cartier Love petit modèle." }),
  creerProduit("bague-cartier-ecrou-deux-rangs", "Bague Cartier Écrou deux rangs", "Cartier", 1999, null, ["accessoires"], { description: "Bague Cartier Écrou deux rangs." }),
  creerProduit("bracelet-cartier-love-petit-jaune", "Bracelet Cartier Love petit modèle en or jaune 18 carats", "Cartier", 3700, null, ["accessoires"], { description: "Bracelet Cartier Love petit modèle en or jaune 18 carats." }),
  creerProduit("bracelet-cartier-love-rose-16-4200", "Bracelet Cartier Love en or rose 18 carats – Taille 16", "Cartier", 4200, null, ["accessoires"], { description: "Bracelet Cartier Love en or rose 18 carats, taille 16." }),
  creerProduit("montre-cartier-panthere-wspn0006", "Montre Cartier Panthère WSPN0006", "Cartier", 4500, null, ["homme"], { reference: "WSPN0006", image: "9d268d76-c3af-4f6c-b43d-97892779e898.JPG", images: ["9d268d76-c3af-4f6c-b43d-97892779e898.JPG", "assets/212d0cc1-8065-45d2-8220-fc720e37a05a.JPG"], description: "Montre Cartier Panthère WSPN0006 en acier, cadran argenté à chiffres romains, bracelet acier, mouvement quartz. Numéro de série communiqué : 4022764889XX. Carte datée du 01/05/2019." }),
  creerProduit("bracelet-cartier-love-rose-16-3799", "Bracelet Cartier Love en or rose 18 carats – Taille 16", "Cartier", 3799, null, ["accessoires"], { description: "Bracelet Cartier Love en or rose 18 carats, taille 16." }),
  creerProduit("bracelet-bulgari-serpenti-viper", "Bracelet Bvlgari Serpenti Viper", "Bvlgari", 4200, null, ["accessoires", "assets/3dd1d680-1686-4791-8ffe-4f880296eafd.JPG", "assets/4074e2b3-812d-4968-92eb-a22d03fcd3d4.JPG", "assets/4b8b4d8a-d413-4939-8c04-dfa9b8aaa63d.JPG"], { image: "a9f11dbe-877b-45c1-ace5-dbe172fbc8e1.JPG", images: ["a9f11dbe-877b-45c1-ace5-dbe172fbc8e1.JPG", "a5b406c6-0686-4ff8-b124-94f8e455ae5d.JPG", "assets/3dd1d680-1686-4791-8ffe-4f880296eafd.JPG"], description: "Bracelet Bvlgari Serpenti Viper." }),
  creerProduit("bracelet-cartier-maillon-panthere-vintage", "Bracelet Cartier Maillon de Panthère vintage", "Cartier", 3299, null, ["accessoires"], { description: "Bracelet Cartier Maillon de Panthère vintage." }),
  creerProduit("bracelet-cartier-panthere-cougar-trinity", "Bracelet Cartier Panthère Cougar Trinity", "Cartier", 4599, null, ["accessoires"], { description: "Bracelet Cartier Panthère Cougar Trinity." }),
  creerProduit("boucles-oreilles-cartier-panthere-cougar-trinity", "Boucles d’oreilles Cartier Panthère Cougar Trinity", "Cartier", 2200, null, ["accessoires"], { description: "Boucles d’oreilles Cartier Panthère Cougar Trinity." }),
  creerProduit("montre-cartier-tank-louis-verte-grand-modele", "Montre Cartier Tank Louis Cartier grand modèle – Cadran vert", "Cartier", 7299, null, ["homme"], { description: "Montre Cartier Tank Louis Cartier grand modèle à cadran vert." }),

  // BRACELET CARTIER LOVE CLASSIC — FICHE AJOUTÉE LE 10/11/2026
  creerProduit(
    "bracelet-cartier-love-classic-or-jaune-16-certificat",
    "Bracelet Cartier Classic Love en or jaune 18 carats, taille 16 — Ensemble complet authentique",
    "Cartier",
    3500,
    null,
    ["accessoires"],
    {
      description: "Bracelet Cartier Classic Love en or jaune 18 carats, taille 16 cm. Ensemble présenté avec écrin Cartier, tournevis et certificat.\n\nÉtat : Neuf avec imperfections.\nForme : Ovale. Fermoir : À vis. Ajustable : Non.\nMétal : Or jaune 18 carats (750). Longueur : 16 cm.\nMatériaux provenant de : France. Couleur : Or. Pierre principale : Aucune.\nMarque : Cartier. Type : Bracelet jonc. Collection : Cartier Love.\nStyle : Jonc. Thème : Amour. Vintage : Non. Personnalisé : Non.\nNuméro indiqué sur le certificat : 0EH 025. Date d’achat indiquée : 01/11/2016.\nCertification déclarée dans les informations transmises : GIA. Garantie vendeur : Oui. Poinçonné : Oui.",
      reference: "0EH 025",
      image: "assets/cartier-love-classic-16-1.jpg",
      images: Array.from({ length: 7 }, (_, index) => `assets/cartier-love-classic-16-${index + 1}.jpg`)
    }
  ),

  // RESTAURATION DES 14 PRODUITS DE LA CATÉGORIE MONTRES FEMME
  // Fiches reprises du catalogue d'origine ; images laissées vides volontairement.
  creerProduit("bracelet-cartier-juste-un-clou-femme-original", "BRACELET À ONGLES CLASSIQUE CARTIER AUTHENTIQUE JUSTE UN CLOU 18K taille 17 boîte et certificat.", "Cartier", 3699, null, ["femme"]),
  creerProduit("cartier-baignoire-wgba0025-femme", "Cartier Baignoire Petit WGBA0025 « Femme » Quartz Or Jaune (2025) Taille 16 NEUF", "Cartier", 16000, null, ["femme"], { image: "assets/279bc8c3-7a0c-425b-8b96-fa4214b75f3e.JPG", images: ["assets/279bc8c3-7a0c-425b-8b96-fa4214b75f3e.JPG", "assets/31b55f37-31b0-4f46-8a38-af551223bee2.JPG", "assets/17174298-608b-48f7-8e3d-7a42cf23795e.JPG", "assets/231f2837-a847-4679-a615-8474d2343c3b.JPG"] }),
  creerProduit("cartier-panthere-22mm-femme", "Cartier Panthère 22 mm Femme – Montre Or Jaune | Service Officiel & Boîte", "Cartier", 7000, null, ["femme", "assets/3d4ba205-dae4-420f-89bf-da8157582d3a.JPG", "assets/3ea20b8f-48a7-4541-ac1b-d715beb67729.JPG", "assets/4368a53b-31bc-40d8-a6bd-53200e5a75ee.JPG", "assets/4c6f3633-1b7e-4cb4-adf4-b3ef89bb58a1.JPG"], { image: "assets/13c78fcb-e84a-4cd1-9928-7e5b9ad10a34.JPG", images: ["assets/13c78fcb-e84a-4cd1-9928-7e5b9ad10a34.JPG", "assets/3ea20b8f-48a7-4541-ac1b-d715beb67729.JPG", "assets/3d4ba205-dae4-420f-89bf-da8157582d3a.JPG", "assets/4368a53b-31bc-40d8-a6bd-53200e5a75ee.JPG"] }),
  creerProduit("cartier-tank-must-femme", "Cartier Tank Must – Montre de Luxe avec Ensemble Complet, Boîte et Papiers", "Cartier", 2000, null, ["femme"], { image: "assets/384a2b30-36a0-49f9-a39b-32af8e59933a.JPG" }),
  creerProduit("jaeger-lecoultre-reverso-2024-femme", "Jaeger-LeCoultre Reverso 2024 – Acier inoxydable – Réf. 214.8.62 Q3858522", "Jaeger-LeCoultre", 4599, 6000, ["femme"]),
  creerProduit("cartier-faberge-67082-femme", "Montre Cartier Fabergé 67082 en or massif 18 carats", "Cartier", 3000, 3800, ["femme"]),
  creerProduit("cartier-panthere-wgpn0045-femme", "Montre Cartier Panthere 2025 or jaune 18 carats 27 mm à quartz WGPN0045 4014 – Série complète", "Cartier", 15500, null, ["femme"], { images: ["assets/3d4ba205-dae4-420f-89bf-da8157582d3a.JPG"] }),
  creerProduit("cartier-panthere-w2pn0007-femme", "Montre Cartier Panthère Medium W2PN0007 Femme – Acier & Or 2020", "Cartier", 5500, null, ["femme"]),
  creerProduit("cartier-santos-carree-femme-0901", "Montre Cartier Santos Carrée Femme 24 mm 18 carats YG 90 grs Bordeaux Automatique", "Cartier", 7600, null, ["femme"]),
  creerProduit("cartier-santos-demoiselle-2698", "Montre Cartier Santos Demoiselle 20 mm Acier Cadran Rose Nacré – Réf. 2698", "Cartier", 2300, null, ["femme"]),
  creerProduit("patek-philippe-vintage-1908-femme", "Montre Patek Philippe vintage de 1908 en or jaune 18K. Rare, avec papiers d’origine.", "Patek Philippe", 5000, null, ["femme"]),
  creerProduit("omega-seamaster-diver-300m-007-femme", "OMEGA Seamaster Diver 300M 007", "Omega", 3500, null, ["femme"]),
  creerProduit("patek-philippe-1935-femme", "Patek Philippe 1935 Femme – Montre-bracelet en Or Blanc 18 carats avec Boîte et Papiers", "Patek Philippe", 2500, null, ["femme"]),
  creerProduit("patek-philippe-3352-1-femme", "Patek Philippe Femme – 23 mm – Or massif 18 carats – Remontage manuel – Réf. 3352/1", "Patek Philippe", 3099, 4000, ["femme"]),

  // RESTAURATION COMPLÉMENTAIRE — PRODUITS RETROUVÉS DANS LE CATALOGUE SOURCE
  // Les photos ne sont pas attribuées ici : les images du ZIP ont des noms techniques
  // et doivent être rapprochées visuellement pour éviter les erreurs.
  creerProduit("bracelet-cartier-juste-un-clou-homme-15-complet", "Bracelet Cartier Juste Un Clou en or jaune 18 carats, taille 15 – Coffret complet avec boîte et certificat.", "Cartier", 2899, null, ["homme"]),
  creerProduit("bracelet-cartier-love-moyen-jaune-16-homme", "Bracelet Cartier Love – Modèle moyen – Or jaune 18K – Taille 16", "Cartier", 3900, null, ["homme"]),
  creerProduit("bracelet-cartier-love-rose-17-homme", "Bracelet Cartier Love – Or rose 18 carats – Taille 17", "Cartier", 3199, 4500, ["homme"]),
  creerProduit("bracelet-cartier-love-jaune-4-diamants-18-homme", "BRACELET CARTIER LOVE EN OR JAUNE 18 CARATS, 4 DIAMANTS, 0,42 CT, TAILLE 18, ENSEMBLE COMPLET", "Cartier", 4899, null, ["homme", "assets/4ccb682f-5902-4531-b159-ed385ffb9f91.JPG"], { image: "assets/259f2a57-b6a2-4e55-8650-ea197681aaed.JPG", images: ["assets/259f2a57-b6a2-4e55-8650-ea197681aaed.JPG", "assets/2c3bf3d9-ee93-4caa-8755-d4fde8c0ab45.JPG", "assets/310c09ae-1dca-4743-9d2d-dcc8e2ac80e6.JPG"] }),
  creerProduit("bracelet-cartier-love-jaune-classique-18-homme", "Bracelet Love Cartier en or jaune, modèle classique – Taille 18", "Cartier", 3099, null, ["homme"]),
  creerProduit("bracelet-cartier-love-manchette-blanc-homme", "Bracelet manchette Love Cartier en or blanc 18 carats", "Cartier", 2599, 3500, ["homme"]),
  creerProduit("breitling-ab0162121g1s1-superocean-heritage", "Breitling AB0162121G1S1 Superocean Heritage B01 Chronographe 44 mm 2019 Kit complet", "Breitling", 2500, null, ["homme"]),
  creerProduit("breitling-navitimer-b01-ab0137241l1a1", "Breitling Navitimer B01 Chronographe 46 mm AB0137241L1A1", "Breitling", 3200, null, ["homme"]),

  creerProduit("breitling-super-avenger-ii-a13371", "Breitling Super Avenger II A13371 Homme – Montre Chronographe 48 mm Acier Cadran Argent Rare", "Breitling", 1700, null, ["homme"]),
  creerProduit("breitling-superocean-heritage-ab2020", "Breitling Superocean Heritage AB2020 – 46 mm – Cadran Bleu Soleil – Acier Inoxydable – Étanche 200 m", "Breitling", 2200, null, ["homme"]),
  creerProduit("cartier-panthere-wspn0006-homme-source", "Cartier Panthère pour femme WSPN0006 Quartz", "Cartier", 4100, null, ["homme"]),
  creerProduit("cartier-santos-wssa0062-cadran-vert-source", "Cartier Santos – WSSA0062 – Grande taille – Cadran vert – Coffret et papiers", "Cartier", 4099, 5299, ["homme"]),
  creerProduit("cartier-santos-wssa0037-noir-source", "Cartier Santos 2025 – WSSA0037 – Boîtier Noir ADLC & Acier – Coffret et papiers", "Cartier", 4400, 6000, ["homme", "assets/3cf695c3-d4f3-4ebb-b1a1-4822d13969ef.JPG", "assets/448b7f40-fd23-44f1-ba53-d71c8f5b8f29.JPG", "assets/4814f29c-446a-4b74-9ac5-2f6c8a1b56b0.JPG"], { image: "a180a0bd-df0b-4d42-84af-3f2c3c0b1751.JPG", images: ["a180a0bd-df0b-4d42-84af-3f2c3c0b1751.JPG", "a55b79bd-ae1f-477b-bf03-f4beaaf783f3.JPG", "assets/27f18a57-66e4-4788-b3a5-693cfcc2e6e2.JPG", "assets/29839d04-30e0-494a-991a-b6ee9b971a54.JPG", "assets/375fc26f-9406-466e-87b8-65ca7735214b.JPG", "assets/3720363f-1841-4969-bb06-75f0d122ab16.JPG"] }),
  creerProduit("cartier-santos-2025-grand-modele-vert", "Cartier Santos 2025 Grand Modèle – Cadran Vert – WSSA0062 – Bracelet Acier & Cuir – Coffret Complet", "Cartier", 4600, 5500, ["homme"]),
  creerProduit("cartier-santos-carree-2961-bordeaux", "Cartier Santos Carrée 2961 – Cadran Bordeaux « Swiss Only » – 1982 – Boîte & Papiers – Rare", "Cartier", 4300, 5100, ["homme"]),
  creerProduit("cartier-santos-grand-modele-vert-degrade", "Cartier Santos de Cartier – Grand Modèle Vert Dégradé", "Cartier", 4000, null, ["homme"]),
  creerProduit("cartier-santos-wssa0018-source", "Cartier Santos de Cartier – WSSA0018", "Cartier", 3500, 7300, ["homme"]),
  creerProduit("cartier-santos-cadran-vert-398mm", "Cartier Santos de Cartier cadran vert grand modèle 39,8 mm WSSA0062", "Cartier", 6500, null, ["homme"]),
  creerProduit("cartier-santos-grand-modele-blanc-wssa0018", "Cartier Santos De Cartier Grand Modèle 40 mm – Cadran blanc | Boîte & papiers WSSA0018", "Cartier", 2500, null, ["homme"]),
  creerProduit("cartier-santos-large-bleu-40mm", "Cartier Santos De Cartier Large 40 mm – Acier inoxydable – Cadran bleu | Boîte & papiers", "Cartier", 2500, null, ["homme"]),

  // RESTAURATION — PAGE 3 DES MONTRES HOMME
  creerProduit("cartier-santos-large-wssa0030-bleu", "Cartier Santos De Cartier Large 40 mm – Acier inoxydable – Cadran bleu WSSA0030 | Boîte & papiers | Excellent état", "Cartier", 2800, null, ["homme"]),
  creerProduit("cartier-santos-wssa0030", "Cartier Santos de Cartier WSSA0030", "Cartier", 5300, null, ["homme"]),
  creerProduit("cartier-santos-wssa0062-garantie", "Cartier Santos de CartierWSSA0062 – Ensemble complet – Garantie", "Cartier", 6000, null, ["homme"]),
  creerProduit("cartier-santos-galbee-2319", "Cartier Santos Galbée Automatique 29 mm Acier & Or Jaune – Réf. 2319 – Boîte & Garantie", "Cartier", 6150, null, ["homme"]),
  creerProduit("cartier-santos-grand-modele-wssa0018-blanc", "Cartier Santos Grand Modèle WSSA0018 – Montre Homme Acier 40 mm | Cadran Blanc | Boîte & Papiers", "Cartier", 3600, null, ["homme"]),
  creerProduit("cartier-santos-large-4072-wssa0039", "Cartier Santos Large 4072 WSSA0039 Cadran noir Acier noir Boîte ADLC Papier", "Cartier", 3382, null, ["homme"]),
  creerProduit("cartier-santos-large-wssa0018-4072", "Cartier Santos Large WSSA0018 4072 – Montre Homme Acier 40 mm | Cadran Blanc | Boîte & Papiers", "Cartier", 3600, null, ["homme"]),
  creerProduit("cartier-santos-large-wssa0039-2025", "Cartier Santos Large WSSA0039 – Cadran noir, acier ADLC, 2025, boîte & papiers", "Cartier", 3529, null, ["homme"]),
  creerProduit("cartier-santos-medium-wssa0029", "Cartier Santos Medium – Acier inoxydable – WSSA0029 – Coffret et papiers", "Cartier", 2800, 4299, ["homme"]),
  creerProduit("cartier-santos-medium-tiger-eye-2024", "Cartier Santos Medium 2024 – Cadran Tiger Eye Marron | Montre Homme/Femme | Coffret Complet", "Cartier", 3150, null, ["homme"]),
  creerProduit("cartier-santos-medium-vert-351", "Cartier Santos Medium 35,1 mm – Montre Homme/Femme Acier Inoxydable | Cadran Vert | Boîte et Papiers", "Cartier", 3500, null, ["homme"]),
  creerProduit("cartier-santos-medium-wssa0061-vert", "Cartier Santos Medium en acier inoxydable cadran vert WSSA0061", "Cartier", 4500, null, ["homme"]),

  // RESTAURATION — PAGES 4 ET 5 DES MONTRES HOMME
  creerProduit("cartier-santos-medium-w2sa0016-2024", "Cartier Santos Medium W2SA0016 2024 – Bicolore Acier & Or 40 mm | Cadran Blanc | Boîte & Papiers", "Cartier", 2900, null, ["homme"]),
  creerProduit("cartier-santos-medium-w2sa0016-500", "Cartier Santos Medium W2SA0016 2024 – Bicolore Acier & Or 40 mm | Cadran Blanc | Boîte & Papiers", "Cartier", 500, null, ["homme"]),
  creerProduit("cartier-santos-medium-wssa0029-3550", "Cartier Santos Medium WSSA0029 – 35 mm, Acier Inoxydable, Cadran Blanc, Mouvement Automatique", "Cartier", 3550, 5000, ["homme"]),
  creerProduit("cartier-santos-medium-wssa0029-homme-2500", "Cartier Santos Medium WSSA0029 Homme – Montre Automatique Acier avec Boîte et Papiers", "Cartier", 2500, null, ["homme"]),
  creerProduit("cartier-santos-medium-wssa0061-6000", "Cartier Santos Medium WSSA0061 – Montre Homme Acier 40 mm | Cadran Vert | Boîte & Papiers", "Cartier", 6000, null, ["homme"]),
  creerProduit("cartier-santos-w2020010", "Cartier Santos W2020010", "Cartier", 2450, 3500, ["homme"]),
  creerProduit("cartier-santos-dumont-wssa0085", "Cartier Santos-Dumont WSSA0085 – 31,5 mm, Acier Inoxydable, Mouvement Quartz, Cadran Argenté, Bracelet en Cuir Alligator Bleu", "Cartier", 2599, 4000, ["homme"], { image: "a0563dd1-8c3a-420f-86d9-b88333563bb5.JPG", images: ["a0563dd1-8c3a-420f-86d9-b88333563bb5.JPG", "a521d090-0234-489a-8157-b28b1513aae7.JPG", "a3c8f966-50d0-4c7d-a5a4-d76a41295f93.JPG"] }),
  creerProduit("cartier-tank-louis-grand-modele-2023", "Cartier Tank Louis Cartier – Grand Modèle 2023 – Cadran vert – Boîtier en or 18 carats 33,7 mm", "Cartier", 7099, 8500, ["homme"]),
  creerProduit("cartier-tank-vermeil-ultra-rare", "CARTIER Tank Vermeil Cadran Romain Bicolore – Quartz – ULTRA RARE", "CARTIER", 2000, null, ["homme"]),
  creerProduit("omega-seamaster-300-titane-2006", "Chronographe Omega Seamaster 300 Titane 2006 – Coffret complet & papiers révisés", "Chronographe", 2300, null, ["homme"]),
  creerProduit("omega-speedmaster-57-trilogy-2017", "Coffret complet Omega Speedmaster 57 Trilogy Limited Edition 2017 (031.11.10.39.30.010)", "Coffret", 6500, 8000, ["homme"]),
  creerProduit("omega-speedmaster-moonwatch-3113042", "Coffret complet OMEGA Speedmaster Moonwatch Professional 311.30.42.30.01.006 2020", "Coffret", 3099, 4299, ["homme"]),
  creerProduit("glashutte-original-seaq", "Glashütte Original SeaQ", "Glashütte", 6000, null, ["homme"]),
  creerProduit("glashutte-seaq-panorama-date-432", "Glashütte Original SeaQ Panorama Date 43,2 mm – Acier et Or – Cadran Gris Bicolore – Boîte et papiers", "Glashütte", 5800, null, ["homme"]),
  creerProduit("glashutte-seaq-panorama-or-rouge", "Glashütte Original SeaQ Panorama Or Rouge – Cadran Noir – Boîte et papiers", "Glashütte", 10400, null, ["homme"]),
  creerProduit("hublot-big-bang-all-black-ceramic-41", "Hublot Big Bang All Black Ceramic 41 mm", "Hublot", 3599, 4500, ["homme"]),
  creerProduit("hublot-classic-fusion-king-gold-chrono", "Hublot Classic Fusion Chronographe – King Gold – Élégance sportive et luxe contemporain", "Hublot", 7000, 9500, ["homme"]),
  creerProduit("hublot-classic-fusion-titanium-45", "Hublot Classic Fusion Titanium 45 mm – Référence 511.NX.1171.RX", "Hublot", 2599, 4000, ["homme"]),
  creerProduit("iwc-big-pilot-43-noir", "IWC Big Pilot 43 mm – Cadran noir – 2 bracelets OEM – Garantie d’usine – Ensemble complet", "IWC", 4000, 5299, ["homme"]),
  creerProduit("iwc-big-pilot-petit-prince-iw502703", "IWC Big Pilot Le Petit Prince – IW502703 – Calendrier Annuel – Édition Limitée", "IWC", 7500, 9099, ["homme"]),
  creerProduit("iwc-big-pilot-top-gun-iw502001", "IWC Big Pilot Top Gun IW502001 Black Ceramic Leather Strap 7 Day Power Reserve", "IWC", 3500, null, ["homme"]),
  creerProduit("iwc-aviateur-chronographe-43-noir", "IWC Montre d’Aviateur Chronographe – 43 mm – Cadran noir", "IWC", 3599, 5000, ["homme"]),
  creerProduit("iwc-aviateur-chronographe-bronze-bleu", "IWC Montre d’Aviateur Chronographe – Bronze & Cadran Bleu – IW288109 – Coffret et papiers", "IWC", 3099, 4500, ["homme"]),
  creerProduit("iwc-pilot-top-gun-lake-tahoe-iw389105", "IWC Pilot Top Gun Lake Tahoe – IW389105 – Chronographe – Céramique blanche 45 mm – Neuf", "IWC", 6299, 7500, ["homme"]),

  // RESTAURATION — PAGES 6 ET 7 DES MONTRES HOMME
  creerProduit("iwc-timezoner-petit-prince-iw395503", "IWC Pilot’s Watch Timezoner Edition “Le Petit Prince” IW395503 – Édition Limitée – Boîte et Papiers", "IWC", 4500, 7000, ["homme"]),
  creerProduit("iwc-portugieser-chronograph-iw371445", "IWC Portugieser Chronograph White Dial Automatic Watch IW371445 *2025", "IWC", 2000, null, ["homme"]),
  creerProduit("iwc-pilot-mercedes-amg-iw388108", "La IWC Pilot Mercedes-AMG Petronas IW388108", "IWC", 4000, 7300, ["homme"]),
  creerProduit("cartier-santos-100-w20106x8", "Montre automatique Cartier Santos 100 en acier inoxydable – Taille moyenne W20106X8", "Cartier", 4000, null, ["homme"]),
  creerProduit("cartier-santos-2018-wssa0009", "Montre automatique Cartier Santos 2018, cadran blanc, 39,8 mm, acier, WSSA0009 B+P", "Cartier", 3500, 4500, ["homme"]),
  creerProduit("cartier-santos-homme-wssa0018-2580", "Montre automatique Cartier Santos pour homme, 40 mm, grand modèle, en acier, WSSA0018, avec boîte et bracelet", "Cartier", 2580, null, ["homme"]),
  creerProduit("iwc-big-pilot-iw500401", "Montre automatique IWC Big Pilot 7 jours, cadran noir, 46 mm, acier, IW500401", "IWC", 2500, null, ["homme"]),
  creerProduit("iwc-big-pilot-iw500401-carte", "Montre automatique IWC Big Pilot 7 jours, cadran noir, 46 mm, acier, IW500401, avec carte", "IWC", 2600, null, ["homme"]),
  creerProduit("omega-seamaster-planet-ocean-215", "Montre automatique pour homme Omega Seamaster Planet Ocean 215.30.44.21.01.001", "Omega", 2500, 3299, ["homme"]),
  creerProduit("rolex-datejust-126200", "Montre automatique Rolex Datejust 36 mm Jubilee en acier inoxydable avec cadran bleu 126200", "Rolex", 4000, null, ["homme"]),
  creerProduit("cartier-santos-automatique-2319", "Montre Cartier Santos Automatique 29 mm en acier inoxydable guilloché – Réf. 2319 – Avec boîte", "Cartier", 4850, null, ["homme"]),
  creerProduit("cartier-santos-bbc8346", "Montre Cartier Santos BBC8346 – Bicolore Acier Inoxydable et Or 18 Carats – État Neuf", "Cartier", 3500, 4500, ["homme"], { image: "assets/30fe696a-6851-488d-90ba-0e7f67b34c89.JPG", images: ["assets/30fe696a-6851-488d-90ba-0e7f67b34c89.JPG", "assets/30b217bc-05bf-43b9-b89f-006c2f8e936a.JPG"] }),
  creerProduit("cartier-santos-bleue-wssa0030", "Montre Cartier Santos de Cartier bleue WSSA0030", "Cartier", 3114, null, ["homme"]),
  creerProduit("cartier-santos-caoutchouc-noir", "Montre CARTIER Santos de Cartier grand modèle avec bracelet en caoutchouc noir", "Cartier", 2990, null, ["homme"]),
  creerProduit("cartier-santos-galbee-187901", "Montre Cartier Santos Galbée 187901 – Acier & Or 18K 29 mm Quartz 1994", "Cartier", 2600, null, ["homme"]),
  creerProduit("cartier-santos-grand-noire-wssa0039", "Montre Cartier Santos Grand Modèle Automatique Noire – Réf. WSSA0039", "Cartier", 2850, null, ["homme"]),
  creerProduit("cartier-santos-large-adlc-wssa0037", "Montre Cartier Santos Large ADLC WSSA0037 – Cadran gris, bracelet acier et caoutchouc, 40 mm, Homme, 2021", "Cartier", 2958, null, ["homme"]),
  creerProduit("iwc-pilots-spitfire-iw387901", "Montre chronographe IWC Pilots Spitfire 41 mm IW387901 – Coffret complet 2021", "IWC", 3500, null, ["homme"]),
  creerProduit("iwc-aviateur-bleue-iw388109", "Montre d’Aviateur IWC Bleue Homme IW388109 Chronographe Bronze 41 mm", "IWC", 2800, null, ["homme"]),
  creerProduit("iwc-aviateur-noire-iw500401", "Montre d’aviateur IWC noire pour homme – IW500401", "IWC", 2770, null, ["homme"]),
  creerProduit("iwc-aviateur-performance-amg", "Montre d’Aviateur IWC Performance Chronographe 41 mm AMG", "IWC", 4200, null, ["homme"]),
  creerProduit("omega-speedmaster-moonwatch-bicolore", "Montre homme Omega Speedmaster Professional bicolore Moonwatch Co-Axial Master", "Omega", 7099, 8299, ["homme"]),

  // RESTAURATION — PAGES 8 À 12 DES MONTRES HOMME
  creerProduit("omega-speedmaster-moonwatch-pro-2900", "Montre OMEGA Speedmaster Moonwatch Professional pour homme, noire", "Omega", 2900, null, ["homme"]),
  creerProduit("rolex-datejust-36-bleu-romain", "Montre Rolex Datejust 36 mm cadran bleu chiffres romains", "Rolex", 3500, null, ["homme"]),
  creerProduit("tudor-black-bay-58-gmt-cocacola", "Montre Tudor Black Bay 58 GMT 39 mm – Modèle 2025 « Coca-Cola » noir & rouge – Réf. 7939G1A0NRU – Coffret & carte", "Tudor", 2500, 3500, ["homme"]),
  creerProduit("tudor-black-bay-gmt-m79830rb", "Montre TUDOR Black Bay GMT M79830RB-0010, 41 mm, cadran opalin/blanc, B&P", "Tudor", 1850, 2500, ["homme"]),
  creerProduit("tag-heuer-monaco-caw2113", "Montres Tag Heuer pour hommes Monaco CAW2113", "TAG Heuer", 3599, 4500, ["homme"]),
  creerProduit("omega-speedmaster-3861-domino", "Nouvelle boîte et papiers Omega Speedmaster Professional 3861 310.30.42.50.01.001 Domino", "Omega", 3000, null, ["homme"]),
  creerProduit("omega-aqua-terra-220234121", "Omega Seamaster Aqua Terra 220.23.41.21.02.001, boîtier en acier et or 18 carats. W", "Omega", 5500, null, ["homme"]),
  creerProduit("omega-aqua-terra-sedna-41", "Omega Seamaster Aqua Terra 41 mm – Or Sedna™ 18K & Cadran Bleu", "Omega", 11500, null, ["homme"]),
  creerProduit("omega-seamaster-diver-300-ceramique", "Omega Seamaster Diver 300 – 42 mm – Céramique Gris Bleu – Bracelet Caoutchouc – Réf. 210.32.42.20.06.001", "Omega", 2099, 3200, ["homme"]),
  creerProduit("omega-seamaster-green-bond-titane", "Omega Seamaster Diver 300M « Green Bond » Titane 2025 – État neuf", "Omega", 6800, null, ["homme"]),
  creerProduit("omega-seamaster-diver-james-bond-21090", "Omega Seamaster Diver 300M 210.90.42.20.01.001 James Bond", "Omega", 3269, null, ["homme"]),
  creerProduit("omega-speedmaster-kit-complet", "Omega Speedmaster – Kit complet – Coffret et accessoires officiels", "Omega", 3399, 5000, ["homme"]),
  creerProduit("omega-speedmaster-snoopy-2025", "OMEGA Speedmaster 2025 « Silver Snoopy Award » 50e montre 310.32.42.50.02.001", "Omega", 15500, 18000, ["homme", "assets/48451bed-10e1-4af8-9344-a273d82e7cd1.JPG"], { image: "assets/3561c5e3-69ff-4d0c-b211-25b3becd041f.JPG", images: ["assets/3561c5e3-69ff-4d0c-b211-25b3becd041f.JPG", "assets/3a773331-3710-4af8-9161-cfed5c89dc6a.JPG", "assets/2717b264-9083-4571-8d28-7533b90482c0.JPG", "assets/3a4a72f5-e185-42f7-b51d-29c30baabebe.JPG", "a58be40a-988e-4de3-af07-58f096bce6bd.JPG", "assets/4246792d-be2d-4e09-9f54-b482f61ac808.JPG"] }),
  creerProduit("omega-speedmaster-apollo-8", "Omega Speedmaster Apollo 8 « Dark Side of the Moon » – 311.92.44.30 – Céramique – Kit complet", "Omega", 5000, 6500, ["homme"]),
  creerProduit("omega-speedmaster-ck2998-blue-panda", "Omega Speedmaster CK2998 Édition Limitée « Blue Panda » – Coffret complet", "Omega", 5000, 6500, ["homme"], { image: "a0c4cb4f-c571-4e96-97a2-a64527550fe4.JPG" }),
  creerProduit("omega-speedmaster-dark-side-31192", "Omega Speedmaster Dark Side of the Moon – 311.92.44.51.01.006 – Automatique – Coffret et cartes", "Omega", 4099, 5200, ["homme"]),
  creerProduit("omega-speedmaster-fois-40", "Omega Speedmaster FOIS – 40 mm – Acier – Cadran Noir – Boîte et Papiers", "Omega", 3500, null, ["homme"]),
  creerProduit("omega-speedmaster-moon-to-mars", "Omega Speedmaster Moon to Mars – Édition Limitée Moonwatch 42 mm – Réf. 3577.50.00", "Omega", 6099, 8000, ["homme"]),
  creerProduit("omega-speedmaster-moonwatch-3103042-002", "Omega Speedmaster Moonwatch – 310.30.42.50.01.002", "Omega", 7500, null, ["homme"]),
  creerProduit("omega-speedmaster-sandwich-saphir", "Omega Speedmaster Moonwatch « Sandwich Saphir » 310.30.42.50.01.002 – Modèle 2025 jamais porté", "Omega", 3000, null, ["homme"]),
  creerProduit("omega-speedmaster-moonwatch-42", "Omega Speedmaster Moonwatch 42 mm", "Omega", 4000, null, ["homme"]),
  creerProduit("omega-speedmaster-pro-3103042-002", "Omega Speedmaster Moonwatch Professional – 310.30.42.50.01.002 – Automatique – Coffret complet", "Omega", 3850, 5000, ["homme"]),
  creerProduit("omega-speedmaster-pro-3103042-001", "OMEGA Speedmaster Moonwatch Professional 310.30.42.50.01.001", "Omega", 2900, null, ["homme"]),
  creerProduit("omega-speedmaster-apollo-11", "Omega Speedmaster Moonwatch Professional Apollo 11", "Omega", 7000, null, ["homme"]),
  creerProduit("omega-speedmaster-saphir", "Omega Speedmaster Moonwatch Professional Saphir – Chronographe légendaire avec verre et fond transparent", "Omega", 2900, null, ["homme"]),
  creerProduit("omega-speedmaster-professional-2025", "Omega Speedmaster Professional Moonwatch 42 mm 2025 – Acier – Boîte et papiers", "Omega", 3500, null, ["homme"]),
  creerProduit("panerai-luminor-due-pam01249", "Panerai Luminor Due 42, 3 jours, date, acier, réf. PAM01249", "Panerai", 2900, null, ["homme"]),
  creerProduit("rolex-datejust-126200-black", "Rolex Datejust 36 mm Cadran noir Acier Oyster – Rolex 126200", "Rolex", 3500, null, ["homme"]),
  creerProduit("rolex-datejust-116234-diamant", "Rolex Datejust 36mm 116234 avec cadran diamant – Acier inoxydable et or blanc – État excellent", "Rolex", 8099, 9500, ["homme"]),
  creerProduit("rolex-datejust-diamants-or", "Rolex Datejust en or et diamants – Sous garantie – Élégance intemporelle", "Rolex", 7500, 10000, ["homme"]),
  creerProduit("rolex-turnograph-16264", "Rolex Datejust Turn-O-Graph 16264 – Cadran noir Oyster, lunette or blanc, 36 mm", "Rolex", 3224, null, ["homme"]),
  creerProduit("rolex-gmt-master-1675-pepsi", "Rolex GMT Master 1675 Pepsi Vintage 1969 – Acier, Boîte & Papiers, Lunette Rouge/Bleue", "Rolex", 10500, null, ["homme"]),
  creerProduit("rolex-submariner-date-16610", "Rolex Submariner Date 16610 – Automatique – Acier inoxydable – Cadran noir 40 mm", "Rolex", 5400, 7099, ["homme"]),
  creerProduit("tudor-black-bay-blue-complet", "Tudor Black Bay – Automatique – Cadran bleu – Acier inoxydable – Neuve – Ensemble complet", "Tudor", 2000, 3000, ["homme"]),
  creerProduit("tudor-black-bay-54-lagoon", "Tudor Black Bay 54 Lagoon Blue – 37 mm – Bracelet 5 maillons", "Tudor", 3200, null, ["homme"]),
  creerProduit("tudor-black-bay-58-bronze", "TUDOR Black Bay 58 BRONZE – Réf. M79012M-0001 – Exclusivité", "Tudor", 2900, null, ["homme"]),
  creerProduit("tudor-black-bay-58-burgundy", "Tudor Black Bay 58 Burgundy Jubilee – 39 mm – Bracelet 5 maillons Rouge", "Tudor", 2950, null, ["homme"]),
  creerProduit("zenith-chronomaster-el-primero-032150", "Zenith Chronomaster El Primero réf. 03.2150.400/69.C713, avec boîte et papiers", "Zenith", 2890, null, ["homme"], { image: "assets/19cc9025-f09e-4c19-9fea-c005b8bae947.JPG", images: ["assets/19cc9025-f09e-4c19-9fea-c005b8bae947.JPG"] }),
  creerProduit("zenith-chronomaster-sport-yoshida", "Zenith Chronomaster Sport Yoshida Édition Spéciale – Réf. 30.3107.3600/56.M3100", "Zenith", 3500, null, ["homme"]),
  creerProduit("zenith-el-primero-or-rose-1998", "Zenith El Primero – Chronomètre et Chronographe en Or Rose 18K – Édition Limitée (1998)", "Zenith", 3500, null, ["homme"]),
  creerProduit("zenith-chronomaster-38-gris", "Zenith El Primero Chronomaster 38 mm Cadran Gris – Chronographe Automatique Homme", "Zenith", 2700, null, ["homme"]),
  creerProduit("zenith-chronomaster-triple-calendar-2024", "Zenith El Primero Chronomaster 38 mm Triple Calendar 2024 – Réf. 03.3400.3610/39.M3200 – Neuve avec Garantie", "Zenith", 6500, null, ["homme"]),

  // PRODUIT SUPPLÉMENTAIRE
  creerProduit(
    "details",
    "DETAILS",
    "LA CLÉ DES CŒURS",
    2,
    null,
    ["accessoires"],
    { image: "", description: "Frais de détails." }
  )
];

// =============================================
// Les produits non encore illustrés conservent leur fiche et leur catégorie.
// Aucune image générique n'est attribuée à un produit.
// =============================================

// =============================================
// RESTAURATION DES PHOTOS AUTOMATIQUES DE L'ANCIEN PROJET
// Les photos déjà associées à un produit sont conservées.
// Même logique de sélection par catégorie que dans le ZIP d'origine.
// =============================================

const imagesBijoux = [
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=85",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=85",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85"
];

const imagesMontres = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85",
  "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=85"
];

const imagesBracelets = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=85",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=85"
];

const imagesBagues = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85"
];

const imagesColliers = [
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=85"
];

// Les produits sans photo utilisent les photographies locales du dépôt.
// Cela évite les images externes qui échouent et déclenchent le logo de secours.
const photosLocalesDisponibles = ["assets/14b3351a-2a1e-41d1-b3fd-1fa7c833c109.JPG","assets/158773a7-30d4-40a1-9bc8-bf4ed8ca115d.JPG","assets/158a4ce3-af2d-4c86-8da5-5782a3357c29.JPG","assets/167db8fb-a19b-4320-829d-9b9cd789abad.JPG","assets/1704c9a0-1071-46a8-b1d3-7d7694961daa.JPG","assets/1777e04a-ae49-45ae-9bb2-d152ad929063.JPG","assets/17860e44-22fb-4032-8cb5-f2508ea6d5f8.JPG","assets/178e5a26-fa76-4079-9e35-ae6ed72e7ef8.JPG","assets/17bf4c85-1f2e-4cf6-87f7-0d3d41809c93.JPG","assets/18b46859-65f8-4df0-a5a2-be612e3cbfee.JPG","assets/195d7dcf-a8ed-491e-aa46-97db72c87ce3.JPG","assets/1a6679b8-758d-487d-98d2-e36d19805923.JPG","assets/1bd0f307-0698-4d82-84fe-ca3fb0c4afd4.JPG","assets/1c3f74e9-7304-4178-a0b9-1b9c35c6c943.JPG","assets/1c89ee87-4e40-4ed2-a491-3409e4818c4e.JPG","assets/1cf5ed1e-b3f3-46d7-a642-1db9a8bc2d37.JPG","assets/1d45d82b-7fbd-4067-a265-67c726e8a065.JPG","assets/1d7a1c58-cce0-4455-9406-eb14890abd54.JPG","assets/1daec093-97ed-4226-87aa-6b8a9c44ef2a.JPG","assets/1dc95adf-021f-49cc-95e3-8ee66ea6a145.JPG","assets/1f7a5a73-a52f-4bb7-9b04-c9385d81468a.JPG","assets/201b7bfa-b0ea-46e9-81f8-cbc4d3733de4.JPG","assets/20bb613d-bbfe-4852-95ef-bbd95dedcc3e 2.JPG","assets/20bb613d-bbfe-4852-95ef-bbd95dedcc3e.JPG","assets/213ea65c-1671-4077-9df5-aa0ad29e8e75.JPG","assets/22d458a6-0c1f-4ae4-ac03-20d6f4307837 2.JPG","assets/22d458a6-0c1f-4ae4-ac03-20d6f4307837.JPG","assets/23079e39-501f-4c81-8e5a-f8ce11e3818d.JPG","assets/23415b08-639e-42b2-97e6-dbbed42db837.JPG","assets/234b6118-803f-43d5-84d2-697a5aa61f8e.JPG","assets/23fecfa5-fabd-41c4-abe3-3a8978c8301c.JPG","assets/24cfc6bd-807a-4d79-8a7f-59c4dc54ddbf.JPG","assets/24df63b8-0c0a-4c07-8945-340111fa66fd.JPG","assets/267bbe42-c07a-45b9-88c0-48e03656a0cc.JPG","assets/275ff415-3220-438c-93cf-dcf5882de1e4.JPG","assets/279c8591-f45b-42c4-b6fa-40f8e7706eb6.JPG","assets/282c6d9f-df12-4906-a5c9-888cbf040e92.JPG","assets/29ba5356-7207-4a75-b2d7-5a515fe01b27.JPG","assets/2a42139e-fb9c-4f82-b6d3-c83da3a1c7db.JPG","assets/2a831723-e2e8-4729-9092-6ad77d6648d1.JPG","assets/2ad18de4-71e4-42a3-92d0-1e165c3c0d15.JPG","assets/2b6b6049-d8a1-4373-92d0-41145899aafb.JPG","assets/2cf2bc29-a44c-4467-9518-93120513cad0.JPG","assets/2cf5ea69-65ed-4bac-8cbd-412d1ceb9121.JPG","assets/2d7353c0-b377-4def-97c1-f904d4bf768b.JPG","assets/2dc25bfc-c62a-46f3-bbca-a686b65aa52b 2.JPG","assets/2dc25bfc-c62a-46f3-bbca-a686b65aa52b.JPG","assets/2e350af1-bee5-454f-a7ec-e47b0c22d3c8.JPG","assets/2e747dfc-aa00-4c91-8905-f47a4ccebee6.JPG","assets/2e9c335e-1d72-49ee-b2e1-64759c74ebdd.JPG","assets/2f3133fa-8e4f-46cf-a310-4ff46e4c4d9e.JPG","assets/3064e9d4-48d0-4873-b0db-2629fb6bf9d1.JPG","assets/309c05e5-d6b0-47b0-8d3f-9debd707dc09.JPG","assets/316de211-629d-4992-903c-cf917a83f2a9.JPG","assets/325257b4-eeca-4873-a72e-2835731feb91.JPG","assets/33a04968-46dc-422d-bb8c-8cc598bdc5b1.JPG","assets/340bfa06-6c13-492a-aec9-667f1f2aff2c.JPG","assets/3411ea67-7459-40e9-b678-2dc78466a378.JPG","assets/3438e08f-6999-46e2-8950-b8f8a4ea9b3a.JPG","assets/359ca13a-71d0-4ced-8404-536df2e9fdb5.JPG","assets/36432ad5-77e0-4bdd-9078-c4c405302268.JPG","assets/3657c3d7-e0bc-4a2c-b754-b4a09d884e9a.JPG","assets/3a76747e-a840-4680-b1e0-129c3aa0fb68 2.JPG","assets/3d8174d5-9ba9-447f-89a3-8748230bb504.JPG","assets/3df36d58-512e-46f3-811b-c62a9221d439.JPG","assets/3f091e06-d667-438f-975c-d31d168812dd.JPG","assets/3f92c4f8-c047-4eb2-bbce-6082d101f9ab.JPG","assets/4007d74b-f43e-4e88-a179-be1cd1d2bedc.JPG","assets/40ee2d8b-b6e3-4383-b7af-adf094cf8060.JPG","assets/41db8cb2-63b1-4b37-b303-14793e610d59.JPG","assets/42ee995d-fb4c-44ab-a5d5-4aea04194358.JPG","assets/454a2d3d-7898-4b1f-a587-4af4f17fb294.JPG","assets/454e01b8-2990-4869-bc8b-2a555e942b63.JPG","assets/46cac780-5cf3-47b6-bb92-dd538860516a.JPG","assets/46f366fc-b149-4c5f-a696-96e866800044.JPG","assets/4a290881-3c1a-4168-bb4f-27403f6364aa.JPG","assets/4a30ecfe-b1ed-4010-a58e-90e356bed3c9.JPG","assets/4b1a81b9-0a20-46cf-b6e2-19304a28d13e.JPG","assets/4b849647-bba2-41bd-b78d-ae256a2c0d09.JPG","assets/4ce49922-b372-4d0f-ba2d-9bd5cfff73e9.JPG","assets/4cea37cf-0a77-4a97-bd4d-e6e142d8342b.JPG","assets/4cf5ed62-0f92-447b-a0dc-6bbdcd8986db.JPG","assets/4d2ca2d5-5266-405e-a74b-5328a451f4ce.JPG","assets/4d2e2ff9-3fc7-4c5f-94c9-a8258e133a6c.JPG","assets/4daaec41-dfec-4e6c-b7e2-62127c84b370.JPG","assets/4e06ec58-10a5-4352-9b40-e4374958398a.JPG","assets/4f403012-c785-45e5-9051-b4cc2f33e991.JPG","assets/4f880fff-593e-41df-a080-39e3add1447b.JPG","assets/4fbe7f31-e6b8-4fba-aa4e-2be658e4263d.JPG","assets/4fd0bfef-157c-4696-90a6-84598e37f977.JPG","assets/4fdf7ab7-d8f2-4ca1-b7c2-e27f6325646b.JPG","assets/4fe8e610-f311-42d9-aafe-38c559d3a254.JPG","assets/506805ef-aa6d-444a-9933-bb5c9d3bc398.JPG","assets/506a3b7d-9c1b-4f7e-8dee-4a62cf5745c3.JPG","assets/5119c862-ecc6-440a-aa03-62376f107424.JPG","assets/51c01128-764f-4f65-b506-f5ba4ccdf823.JPG","assets/52bb11d6-c7c5-4c40-8e84-2fd1bffe436f.JPG","assets/5354bb91-963a-487f-854f-91d654d943a3.JPG","assets/53db8603-70f4-4880-9128-999fdbefd0ca.JPG","assets/53ecb8e6-a591-47d8-a5d0-730a1df47c8d.JPG","assets/545ab60a-b30e-4414-9bc8-accc43da0a70.JPG","assets/5477a7e3-f1d2-4a03-925d-554bab97c3bf.JPG","assets/5539efbf-2396-4422-864f-4975474a1cfd.JPG","assets/556596cf-1fe8-49f7-8a4a-20ac443947a9.JPG","assets/558241fd-c2ec-4d23-b2ea-c20d22845e77.JPG","assets/55bb201c-a3c5-4ebd-bfe1-9e13eeb1e6e2.JPG","assets/5633a24e-7c1a-4eef-89cd-09cc622eb4af.JPG","assets/5659ee28-ca2b-46ee-8224-294ff780f76e.JPG","assets/5689c7f0-b471-429a-8302-e9d9464ee0dd.JPG","assets/56b3cb7d-f6f4-499b-b6c0-ab8cc4ae3b00.JPG","assets/5700542e-a5de-44ed-8b51-2834506e1517.JPG","assets/572280c6-7a6e-4285-bb0e-cbbe5dda8246.JPG","assets/57e96f79-0114-4d84-817f-5b8c5a9f4712.JPG","assets/57ec408f-46c8-4474-8c39-e4e25a748372.JPG","assets/580c7c1b-6897-4444-bf42-5f1298d7198a.JPG","assets/58716411-f897-4ac9-82f4-ef9b5edf32f0.JPG","assets/58a2bb58-82c4-4a84-b4ca-1e4a31a9278c.JPG","assets/59c7650d-09bd-412e-a430-84bc9df25d82.JPG","assets/5a4f8688-f47e-4a86-9a48-ea8e5ea898db.JPG","assets/5ac5a1fd-d70d-4d9f-ad45-08043a8a162d 2.JPG","assets/5ac5a1fd-d70d-4d9f-ad45-08043a8a162d.JPG","assets/5bc7d1d9-65d4-4a2d-862c-c8d1e72ba62b.JPG","assets/5c2f4b17-eba8-4a4a-9a28-fe0ea60a7141.JPG","assets/5c577949-1ab8-44d1-8c24-4c34d334c6d9.JPG","assets/5c6fc7c8-f965-4caa-8944-fe50c4875daa.JPG","assets/5cc28033-f478-41f8-893f-3a715a214389.JPG","assets/5d724ed3-2868-434b-9e42-a8c92e15c8ec.JPG","assets/5e418ace-fb5b-4284-a5f5-fab13a3aa478.JPG","assets/5e6b5689-e6e5-4af1-b220-bf8d985ee4cd.JPG","assets/5f13b6b1-5d83-4833-aa3e-208e6f688c1a.JPG","assets/5f712168-25d3-467f-987e-c0005dac91f0.JPG","assets/6046d919-9549-43fe-8da0-27bc8201d0a1.JPG","assets/617b2caa-5fa7-4400-a5f3-65ff0655657f.JPG","assets/61a3ea39-792a-4b1b-9282-083d8a13c756.JPG","assets/62aeb04c-c07e-49d5-bfe2-d74b70858ee6.JPG","assets/62e1269e-06c1-474f-a854-40a97e302fa8.JPG","assets/633e9e04-50e6-4b21-8c92-ca8a22844665.JPG","assets/641f8d81-2492-4110-91f3-4ede6bcbe42e.JPG","assets/64857142-b1e9-4c55-b7bc-229fa31b5f56.JPG","assets/65827860-b399-4723-b3c0-34953a21c528.JPG","assets/65854bb5-1977-4a38-b217-13804aaf20d7.JPG","assets/65cbf834-36e3-43e2-85b2-34463f2ba300.JPG","assets/6657422d-1d7d-42c6-bdba-527211077798.JPG","assets/665eea6a-c27c-4db3-a797-fea08f5aafbb.JPG","assets/678b8052-ae87-424e-9531-0ee443b63e55.JPG","assets/6839c1e6-db1a-4561-98f2-8205227e8987.JPG","assets/688dd19e-4db0-4753-9a45-317382efe3cb.JPG","assets/6921043b-ef2a-4877-a26a-8354d45393c4.JPG","assets/69404ad7-27e3-4b69-97c1-d1ba2d372314.JPG","assets/69d5cf30-8d82-458b-8045-321c5c1d3b32.JPG","assets/69e1c424-31cb-4362-a745-0bd12567bc63.JPG","assets/69f8fa6c-1e5a-42e8-b7be-bb641abcc9e2.JPG","assets/6a1bbdbf-7867-4ccc-9a32-2d64b14e659b.JPG","assets/6a364393-0c38-4ea5-86d0-9ff7e0fc23fc.JPG","assets/6a7f7d2d-9ee0-4d9c-8444-011f00de42ad.JPG","assets/6b361b27-ea49-46be-b7b5-d3645991c452.JPG","assets/6bbcf543-e147-4194-893a-4f34417443c7.JPG","assets/6bcd48c3-fbee-40ca-8a65-f56f999336d8.JPG","assets/6c2a2293-5d3c-4d31-8de2-956cf1d21929.JPG","assets/6c86b0f8-ebc8-4fe1-9637-c28fa82cc585.JPG","assets/6cca8b5a-7190-46bb-8947-3f3daa43da22.JPG","assets/6d313a1f-c604-4e7c-a9bb-36e0dfd3395c.JPG","assets/6eb63334-5d5e-41d4-8c8c-7d6fd195a989.JPG","assets/6ed2ba49-f746-47c1-9438-6ce15c6f3dd8.JPG","assets/6ed5b7a2-397f-4605-a061-58211eea7518.JPG","assets/6f55a80f-cfcc-4034-ade2-c5ca536cdbc4.JPG","assets/6f784d63-2e72-4459-80c4-27164de17340.JPG","assets/6fa9072c-99b5-40af-b7c6-65132855bb4b.JPG","assets/6ff0c522-d7b8-40de-89e5-d124bafb6d0f.JPG","assets/70b43dd4-c665-4687-839b-e75ab6ac9dc9.JPG","assets/70f5dd1d-c4d1-40ef-8a9a-a21f371de256.JPG","assets/712c8455-7136-4bc9-b88c-620c16f20cba.JPG","assets/716554a8-a2be-4596-b5b9-55af0ee9d2cf.JPG","assets/71b66030-8658-4054-96d9-dca9fcf3ac77.JPG","assets/71b9c0f1-e577-4f9b-898d-ee78be77a6fe.JPG","assets/7201f4f8-9afc-437a-80c3-263b27258434.JPG","assets/7248b5ea-cf43-45fa-b571-0c11486f0f1f 2.JPG","assets/7248b5ea-cf43-45fa-b571-0c11486f0f1f.JPG","assets/734d6232-eb8e-432a-ae2b-b1602eb8ce85.JPG","assets/74489e29-61bd-48da-8c78-680ac2329e9e.JPG","assets/7480377f-9323-4a21-b8c5-ffd752f3ab0f.JPG","assets/74809b14-b5ab-4f3a-aef0-2a3ea40eff84.JPG","assets/74a79107-4633-4164-971b-0041037d18de.JPG","assets/74e86641-a4c3-4e14-8119-ce04facf2769.JPG","assets/75b33d78-4ccc-4404-a7ba-1874106146e0.JPG","assets/760ec5b1-d4d8-4e80-a73a-8a7b1ef36ac5.JPG","assets/76174c2e-17e5-40a6-a024-7ecf7c2d35a7.JPG","assets/76794c14-fac7-4d1a-8c9b-1bddb24753e2.JPG","assets/76b88f07-953e-4e42-b8ff-fcfe1ce74764.JPG","assets/76e88504-672d-4787-bc7b-e53013554cbf.JPG","assets/770e527c-688c-4f81-8213-ddb88ff59ccb.JPG","assets/775e6e15-ee7a-4584-88a5-f58a24b45260.JPG","assets/77b7a108-d2e1-4cff-a2ee-86dfd6353304.JPG","assets/78ab4a1f-7525-40d8-8c84-6344a91d73f4.JPG","assets/7989f4ad-aaac-40f3-8ec8-01b5230289e2.JPG","assets/79d51030-b80a-442d-976a-3fb43edd8265.JPG","assets/7a1cc16c-574b-41fd-b611-54ba987cb900.JPG","assets/7a74da8d-398f-4a6b-a7b0-6daec0715df9.JPG","assets/7ad6d68b-ff21-4783-8750-ef561ba1e68d.JPG","assets/7b20ff70-857f-4b55-aaf0-1f9755a78ff0.JPG","assets/7c880a05-9b21-4ca0-b55c-352dbedb339e.JPG","assets/7d25ab8c-1bf7-4fb9-bce7-7b7fb2e5830f.JPG","assets/7d49231c-b4b2-45d5-b621-381661ec5c1f.JPG","assets/7dbf4cf6-b3e2-4a20-baf0-080210f9e4d8.JPG","assets/7ea37aea-0014-4749-9a86-193bb70341e1.JPG","assets/7f332b28-25d0-4e8e-9b3c-dc6591f506ae.JPG","assets/80063be9-b9a9-4461-80f0-bc215fc8ed9a.JPG","assets/80288db1-3842-4652-a363-b8af881550a8.JPG","assets/80ca1d78-a479-439d-a9f2-55126db60e16.JPG","assets/8272e0b9-7407-46dd-b735-2bf98dc9bdc7.JPG","assets/82c1f964-d4eb-42c7-84ac-6faba15a8bce.JPG","assets/8357d159-14fe-429d-87d6-bb70ded0596a.JPG","assets/83b04db9-62a3-4087-ba98-7a70b52d8fda.JPG","assets/83da4585-1557-421f-a1f1-f97184eabc08.JPG","assets/8438ecfb-73ad-49ee-9d3a-4bf0131fe4ee.JPG","assets/84590987-8d75-4116-8b50-e8364d092505.JPG","assets/84c9feaa-fac2-4149-9290-95602d250db6.JPG","assets/85136442-e067-4327-a198-92c812124a70.JPG","assets/85369878-498f-4d98-b18c-4b16872a8e3c.JPG","assets/85445917-78d1-46d0-aa21-87427ea09d61.JPG","assets/861200db-260f-40e7-9143-9708945b1296.JPG","assets/861bd80e-e73f-4e85-a7be-404dfa10ce9e.JPG","assets/86a12d5b-4468-4875-a2b1-2196d2093009.JPG","assets/86b82a5e-37d4-44af-9df2-3108b7d60792.JPG","assets/8798272c-ed51-4517-b9a8-9efe0db3153c.JPG","assets/87ff9d9b-3ab3-4393-bc73-06a2171224c0.JPG","assets/88062e2d-f479-4b5c-b69a-545a258c2056.JPG","assets/8809a192-0d49-4a54-92a2-77480c5c3767.JPG","assets/883b7124-9938-4081-b052-dfe078fae171.JPG","assets/883d3698-f311-467f-b6f7-eb04a13e03bf.JPG","assets/898f78a0-84b0-4a48-881d-2da3dc6ede87.JPG","assets/89aa6bf5-d151-48dd-bd4f-d2d4f4f3b8e0.JPG","assets/89be6250-cb0a-446d-bb9a-37c47de006ad.JPG","assets/89c566d5-013a-4db8-925f-8b92da29d538.JPG","assets/8a5aa556-d133-48bf-857d-3cc0861f9a0e.JPG","assets/8a5d3bc8-a781-4a2b-b773-373bf92b45ed.JPG","assets/8a82da63-4f29-4e0b-b02a-fda08cf6bb49.JPG","assets/8b02757b-454f-4ed2-959f-8643b9d5e890.JPG","assets/8bafb307-69c1-47ae-8899-ad281bae4f11.JPG","assets/8bc7c164-3973-44a2-bea0-dc69e2e8f29d.JPG","assets/8cf514fa-12a3-4418-8663-ba5ff5033b25.JPG","assets/8d0c87d0-3cce-40d3-bda3-1fee15253266.JPG","assets/8d6bfa5f-ae94-4a55-a3eb-71b00fd122c0.JPG","assets/8d81b56e-3305-46d0-888b-40f693dacf12.JPG","assets/8dd6db15-28b9-4b2b-b22c-7c8037ba3efe.JPG","assets/8e1bbfd7-6f5f-4fc3-a6b8-7f9ae6dd5e14.JPG","assets/8f4b1ac3-c37f-4e33-ba59-f060865ef9c3.JPG","assets/8f64ea2a-8557-426d-8706-accac9b2bbce.JPG","assets/9063631b-3cab-4d3c-9a20-50b6350574f0.JPG","assets/91221f51-758b-447d-95e7-086e39cb8a5f.JPG","assets/9252e21c-a04a-4043-a04c-5226a5f9fcfb.JPG","assets/92b8f397-42ca-48b7-898c-49a8172c09f4.JPG","assets/92f10460-4ab9-4e88-9272-a79aceda1b82.JPG","assets/936dd925-fb15-48de-bea0-5e8c7441f71b.JPG","assets/93b2fccf-e199-41d7-ab25-ebdfac3dab49.JPG","assets/93e46524-2bf7-4b53-a7fc-6157c3365f51.JPG","assets/9430ca21-bc61-41fa-97a5-b69c63591ecf.JPG","assets/94460bb4-9e2f-4496-86a4-9118b6afd105.JPG","assets/94f1f2df-c522-444d-ab4d-588b455c6761.JPG","assets/95023106-b259-445c-80ce-7cc01264fedd.JPG","assets/950907ba-c63b-4c49-8ecb-23706257d1ac.JPG","assets/953db2df-4006-4f3a-b7bc-d3cf3bd58475.JPG","assets/955b204b-72ee-46be-99bc-6890a364b4de.JPG","assets/95abbc69-eff9-48d5-8c60-1d8e75209e87.JPG","assets/95e7799b-48cc-490e-996a-38a2430a619d.JPG","assets/95fda9b2-8dd4-40a2-b6b0-023a41b969a8.JPG","assets/96021837-a5f0-4bf2-9662-914a361e25dd.JPG","assets/96122872-c92a-4ef0-a809-770d4b0adcdc.JPG","assets/96348129-0e42-43c7-886a-ce69c583e961.JPG","assets/974772e0-2b65-4840-ade5-8e9930634f10.JPG","assets/978edcdc-e186-41d9-82f8-b13adc779bbf.JPG","assets/97d517d8-7258-4abe-8b60-7f08fb4083e5.JPG","assets/9818edb0-d5a3-4eac-8c3e-fffeb32c8e07.JPG","assets/98578fe0-ba33-4795-b7ae-552e10a43d4c.JPG","assets/9879455f-9762-415b-b8e2-c5a85c6f9c46.JPG","assets/98f5ba57-5484-49e2-96b8-bb4211d72401.JPG","assets/99b997a7-94f1-43e6-9a27-fad7d4e0e1cd.JPG","assets/9d268d76-c3af-4f6c-b43d-97892779e898.JPG","assets/9d2c3185-4e92-4583-9784-55dc6934b73b.JPG","assets/9dfa5e12-05b5-4ebe-bcff-6345bd518ea2.JPG","assets/9edf5f39-32e7-474b-bbbb-ee14aeba17d2.JPG","assets/9f297fd4-4fba-44a9-a829-fa1fbc5a0535 2.JPG","assets/9f297fd4-4fba-44a9-a829-fa1fbc5a0535.JPG","assets/9f3e3d87-e675-4aaa-8e83-97da88b6bc8c.JPG","assets/9f928690-30f6-4aed-a2b6-4e445c19f5bc.JPG","assets/IMG_2640.PNG","assets/IMG_2644.PNG","assets/a0563dd1-8c3a-420f-86d9-b88333563bb5.JPG","assets/a07962e6-1332-4df7-8328-78d1c17f0b28.JPG","assets/a09f29c3-78cf-4732-a2ad-30981ae4621c.JPG","assets/a0c4cb4f-c571-4e96-97a2-a64527550fe4.JPG","assets/a180a0bd-df0b-4d42-84af-3f2c3c0b1751.JPG","assets/a1852b81-e147-4522-b0c7-757937a9439c.JPG","assets/a1b72ab3-aa64-4484-8830-51cefdedeb61.JPG","assets/a1d6161a-162c-45be-be0c-88a7f4a1e36d.JPG","assets/a27e0649-9c56-4529-bccf-5f79d3f2b447.JPG","assets/a2863e09-1880-40a4-9027-e344f285c78d.JPG","assets/a36de3d2-f315-434a-bde1-73ec08bf24d0.JPG","assets/a3863253-6b36-4728-af7b-ee1139c569f1.JPG","assets/a3c8f966-50d0-4c7d-a5a4-d76a41295f93.JPG","assets/a3ced054-c390-4e8e-ade1-2419719fa4b1.JPG","assets/a3eb8bfd-99ea-416c-ad89-32b2eeb9b2a3.JPG","assets/a4234fed-2728-40fa-82db-a8dc33c67502.JPG","assets/a521d090-0234-489a-8157-b28b1513aae7.JPG","assets/a53fbd1b-0773-431b-b2d2-cf9288ece29e.JPG","assets/a55b79bd-ae1f-477b-bf03-f4beaaf783f3.JPG","assets/a58be40a-988e-4de3-af07-58f096bce6bd.JPG","assets/a5b406c6-0686-4ff8-b124-94f8e455ae5d.JPG","assets/a617ae91-a4f1-4c75-b4dd-f07dc91903ae.JPG","assets/a73c054b-16d5-4745-82d4-5e887fb65285.JPG","assets/a79a2d43-ca40-422e-b911-d610270ad417.JPG","assets/a7dbba38-ae80-48d1-88a7-ba824ad84625.JPG","assets/a828a3d2-6ad8-4a30-9181-fda18af2b4e0.JPG","assets/a9f11dbe-877b-45c1-ace5-dbe172fbc8e1.JPG","assets/aa56a573-19df-423f-b5b4-0cef2b38ea6b.JPG","assets/aac875a2-9158-4d40-8044-e66b33da7332.JPG","assets/aafb5040-ebde-40db-889b-593f572e8304.JPG","assets/ab186e2a-4a10-45b9-8432-e28057ec71af.JPG","assets/ab192715-1729-4aa4-9061-3e705733ce29.JPG","assets/ac0da541-7e26-4a9e-80b5-8141f5a75dcb.JPG","assets/ad1f55b6-1db3-4609-a41c-f7db110168ff.JPG","assets/ad337ceb-09fc-4a23-8fab-8fa4ac65f9b6.JPG","assets/adcc02a9-6daf-4f0f-a51a-ca7c09160c58.JPG","assets/adf24613-321d-4caf-98db-ec58214a896d.JPG","assets/ae373b2d-1dcd-4d16-a152-0d6879d31b06.JPG","assets/ae8ce620-0dd1-40d7-ae83-2c71755413a7.JPG","assets/afb3032d-9c54-46fe-af18-a21efeec66f5.JPG","assets/afc2ecef-cc30-46c2-ac4e-a068e98628fa.JPG","assets/aff65f5d-39b9-4ee6-88db-9bdf3f025275.JPG","assets/b08cfeae-38d4-46ff-8f12-35dee1018c01.JPG","assets/b0ccede8-5f6e-4cae-8d23-b56a4aa75523.JPG","assets/b0e2cbec-85d1-44bd-8942-a1d505344bf9.JPG","assets/b1ba6151-31f4-45f7-aeb8-2d0dec5ac498.JPG","assets/b283e094-e247-4bd9-8ac2-2a5bff3b0b41.JPG","assets/b2a7f391-b718-4ae5-90bb-5690e7175964.JPG","assets/b2b1d158-c0c4-469e-880d-d6465db96933.JPG","assets/b3053375-67ac-406a-bc1b-37c493e52ad1.JPG","assets/b4becca9-cfa5-4c43-8a9a-4749eea97632.JPG","assets/b4e79f91-9a78-4c58-9edf-057978f87bb4.JPG","assets/b5abf632-7f71-4918-817c-b72df863ee17.JPG","assets/b727f76e-4e9a-4d9b-844f-3277668c3106.JPG","assets/b7429cc0-e711-4089-8e57-3ad3118b0a75.JPG","assets/b763a906-dc05-497c-8454-8bb11a08cbe9.JPG","assets/b7658bbf-bc1f-4d74-ba1b-48512be26309.JPG","assets/b87f92d9-0253-4bb7-b578-0bb8ac2181d9.JPG","assets/b8adbb22-1c02-4647-91e4-a7362ec793eb.JPG","assets/b8d3b9be-b0aa-45a5-8f40-a13bfa9546d8.JPG","assets/b948e791-68f1-449c-bb1c-2a4cc465bc1b.JPG","assets/b94e8129-f3f3-41bc-8632-e8ee9bb1d6da.JPG","assets/b9a6eb1e-a5a1-4595-89c6-2f2827e51ac2.JPG","assets/baa9d19b-0a2a-44ee-9fc0-f16007b5e6d3.JPG","assets/bac44e54-055f-440d-b669-7e83699f9eca.JPG","assets/bc3a367e-6345-4b78-ac7f-3a9f408dae81.JPG","assets/bc42c40c-664a-4e16-aa77-e90f31e0b889.JPG","assets/bc6a7d66-3c3c-49d7-96af-b653343c503b.JPG","assets/bca4859e-1bd3-4cfd-bcfe-415a7546aa69.JPG","assets/bcecfbd7-7515-4a9a-8c40-eec59dfdebaa.JPG","assets/bd5dc9b2-2c29-4c31-9ee7-d7f4186190bb.JPG","assets/bd6c3fb6-bed1-4034-889f-e1aa636dca11.JPG","assets/bdcd7347-1f5d-49b6-8471-699946badea2.JPG","assets/be8c5ec7-6b08-46ed-af0e-6c0f996b3de2.JPG","assets/bea1ef83-a3d0-49bb-b1fd-7c8943b74f43.JPG","assets/bee8b28d-15fa-4d58-8552-a642ec43eca4.JPG","assets/bf3eaa19-31d8-4882-a1e0-b55d2ac57a8e.JPG","assets/c0d4b830-d559-4b37-82c0-00bbb525fe56.JPG","assets/c0d57dfd-39fe-4090-8a76-19a50d5113d8.JPG","assets/c0d96a76-c37c-45cb-9ae9-8b26b33a35a0.JPG","assets/c1987c86-9ae7-4e50-8960-8e424023c662.JPG","assets/c1f71902-6d31-4383-8074-dc3271f2ab81.JPG","assets/c2229f09-6485-4c2a-b7d5-a8e23881b0fd.JPG","assets/c2ab3db4-4d4d-4258-95fd-e4553d648e8f.JPG","assets/c2bd5ee3-b789-47eb-9bc2-3e27cedcd048 2.JPG","assets/c2bd5ee3-b789-47eb-9bc2-3e27cedcd048.JPG","assets/c34d60b0-61c5-4545-aeb8-173dfcef5cdb.JPG","assets/c3965e6f-3d96-4962-bfc8-4af73d475c5b.JPG","assets/c3b88954-d835-43cf-866a-5b6ae9f3cdca.JPG","assets/c4ec2ee7-51af-4197-913b-4700fd722fc3.JPG","assets/c5ed7233-70a9-4743-a942-073ec8ba0287.JPG","assets/c67863e1-bd02-4f0a-a072-b654e84516e4.JPG","assets/c67cbba1-05e4-45d5-adba-e18e1dda302a.JPG","assets/c682a987-4a76-46f9-9105-d59d7f740401.JPG","assets/c76ba27a-c582-4786-bda9-e3df154e7a43.JPG","assets/c76ef6d7-d6d5-4a0d-be28-c9a91df48f65.JPG","assets/c7b1368a-bae1-4c97-8f87-12dc0ef9b2b1.JPG","assets/c824cde7-1c46-4569-afe1-3a2e3356d2ab.JPG","assets/c968b601-f45a-410b-9ca1-64ccaed907e9.JPG","assets/c9ffcc25-9525-4246-947f-e9d180b0f20e.JPG","assets/ca47d6ab-cd8f-409b-ad33-afb1e2717198.JPG","assets/cab77a79-8180-4352-bcad-95804676e93d.JPG","assets/cac639e5-532a-4188-8636-4a7873fa5250.JPG","assets/cartier-love-classic-16-2.jpg","assets/cartier-love-classic-16-3.jpg","assets/cartier-love-classic-16-4.jpg","assets/cartier-love-classic-16-5.jpg","assets/cartier-love-classic-16-6.jpg","assets/cartier-love-classic-16-7.jpg","assets/cartier-love-classic-16.jpg","assets/cbb71a65-9925-43b2-ab9f-00c5a643de59.JPG","assets/cbc5af1a-a56b-4a9f-8ef1-5ab8c12c8cb3.JPG","assets/cc9b4864-149a-4dc8-b48f-203dcd6d9c48.JPG","assets/cd08a0c9-95ef-4f7b-8216-7d5e218b2d27.JPG","assets/cdb5f8f1-39dd-482b-9945-e6e222650874.JPG","assets/cdf276ab-870c-4b20-82b9-198c3ea9f615.JPG","assets/ce4185b3-8964-4ba8-a222-dd6762e6dde4.JPG","assets/ce6152f5-7e5c-4068-a776-22de0440a862.JPG","assets/ceb2a3d1-2dbe-452d-8518-44be5f461646.JPG","assets/ceb737f0-287e-4cc8-8f5d-ad6b6e4304de.JPG","assets/cf015674-2a69-41d8-bc6f-319bc4e3fa0c.JPG","assets/cf35c63b-9a07-4443-9bb1-ee02bafae2db.JPG","assets/cf55d84a-c973-491f-99a0-382f5d303322.JPG","assets/cfa04f41-f356-41bc-9c73-1c9050fd9a06.JPG","assets/d02048a0-cb59-44b7-845a-e9f0e123a232.JPG","assets/d038756b-1868-40cf-b3a1-cebd7375bfcf.JPG","assets/d08b8d4a-4dfa-4499-b03e-f81c07294b7b.JPG","assets/d0ec7e1c-c5da-42fa-9c83-aa5b5392a2bf.JPG","assets/d108f584-7109-497d-bc40-c846165a7ed7.JPG","assets/d185b033-8822-4539-835c-aeec1160f00b.JPG","assets/d1c573bf-61a2-4205-b671-5229715d9c9f.JPG","assets/d261a2b0-2aa5-47b5-bb49-f1ca8c279885.JPG","assets/d2ce83ef-60a3-4333-94e1-1ec386678710.JPG","assets/d33032ec-e0cb-42ea-8447-60898f97e753.JPG","assets/d363640c-8fa9-41c6-a052-006d23898246.JPG","assets/d3b5a879-b776-40df-a189-ada86db88acd.JPG","assets/d3c3bfda-52e2-4808-8065-3dd227fcc202.JPG","assets/d4979b34-7808-4d8c-9701-9546a5d66f93.JPG","assets/d4b757b5-1758-4c94-8c07-7d358f83de10.JPG","assets/d4e35b41-a094-4b8b-a591-752f2b1d8178.JPG","assets/d680df1d-075f-4f9e-b65a-a1062d161ccc 2.JPG","assets/d680df1d-075f-4f9e-b65a-a1062d161ccc.JPG","assets/d7375c11-dd39-4a46-9cf6-88ff4d889db9.JPG","assets/d78d04c2-555f-46c8-8397-65bd09f4c3ed.JPG","assets/d7c7e4e5-d27b-4b7b-a0f9-7c411387c50d.JPG","assets/d8067569-3a68-4b6d-9ab6-39c0ccef60bf.JPG","assets/d80d34db-b697-4751-b084-26cf5f3001b7.JPG","assets/d8553011-2edf-43f9-bae9-b311d9af0204.JPG","assets/d882a171-89a9-4bee-b75d-1abbb5d5f120.JPG","assets/d8f179bf-f2a0-4692-a8de-ef302020825b.JPG","assets/d9246d00-354b-4d38-92bc-79be01dc741b.JPG","assets/d97efd77-a9eb-4ebe-beed-903fdc2f38ff.JPG","assets/d9c40f1e-2e76-4825-beab-ab0dc11d348f.JPG","assets/da24b089-e22b-42b7-8374-08677786b26f.JPG","assets/da3b2a45-eef5-42d8-bbdd-02fd78204220.JPG","assets/daaf9f9a-24f8-4d4d-bc74-0c74acdeb1c1.JPG","assets/db0d76ae-09cb-4a00-aeed-59542664fb9a.JPG","assets/db200142-d1a8-46b3-abd5-9ef60b3ec478.JPG","assets/db93ee91-2685-4fda-b435-27fed3c404d5.JPG","assets/db9ef184-818f-407f-88d4-b8efb140255b.JPG","assets/dc1eb13c-333c-49b0-a6db-b46a3716f184.JPG","assets/dc1fccc3-6782-4435-b421-a778c0ffde2b.JPG","assets/dd276b7d-f64b-4b23-b80d-792dbd5ef1bc.JPG","assets/dd860b8b-7e09-475b-8e2e-27db1283d9e9.JPG","assets/ddb34640-429b-448c-b2a2-b978b45a0920.JPG","assets/de379130-1caa-4a12-8750-119b71274146.JPG","assets/df426c55-b30a-434b-a70d-6cfcb07dbb41.JPG","assets/dfa5d730-412a-4ccb-9102-e26f2050890b.JPG","assets/e0495e98-f141-471b-911a-9ed0b62a488b.JPG","assets/e05d52fb-966f-457d-a856-81bd163cbaf4.JPG","assets/e07f022d-1028-463d-b97c-946dcd50edb0.JPG","assets/e0909975-b854-450a-a969-1727c76c4bd2.JPG","assets/e0b83276-b43d-41b4-97a5-ee9454407e41.JPG","assets/e1027663-18ad-433d-aa03-ccf191370804.JPG","assets/e1c9f51d-ee48-4e60-b2da-d665da54a029.JPG","assets/e1dfeaa3-1ec3-4dfe-abe6-b54fc8d4e14f.JPG","assets/e2f18dc1-1112-4de8-937e-407df0127e64.JPG","assets/e331ff0a-d997-49ed-9a18-83047d3ae032.JPG","assets/e342eb8b-87a0-41ed-abc2-3c2b17934713.JPG","assets/e38faea7-73a4-4f70-9f01-7b210dfe50ec.JPG","assets/e3969976-3fa0-4fd8-958d-bbe1cd247697.JPG","assets/e39e8668-1264-46ec-8fe5-a55ab8366afb.JPG","assets/e3a8512e-a711-4daa-8a22-4fccbfa4cb1d.JPG","assets/e4340af2-32c3-4505-9327-5833661e9ce8.JPG","assets/e46441a0-aac5-43da-a4dd-823aec382615.JPG","assets/e4ae8665-d1e6-4705-8147-1cdb6e0e184a.JPG","assets/e52069ea-f3c7-4e5b-a52c-894d4c4513b6.JPG","assets/e54650a3-19f5-493a-8869-035681baaf43.JPG","assets/e57d4f27-a4b8-43b9-acbc-f5f564b9d590.JPG","assets/e5e4f3bf-d5e4-46b0-8ee8-8c1a145acc60.JPG","assets/e5f08399-a6f4-4634-bdd5-988e7da7e500.JPG","assets/e62a6918-6af5-47d4-b905-d434ba7a2078.JPG","assets/e6783a04-fd9f-4818-b6dd-81c549092018.JPG","assets/e71dfcbe-dd99-4ece-80ea-1f03c56fb099.JPG","assets/e834791d-ec65-4f2b-9d3b-0e443152a27e.JPG","assets/e89456ad-ddc6-4d71-9807-36b849dc6f6f.JPG","assets/e8d20ca5-9254-4c86-8896-120a4212eeeb.JPG","assets/e94802dc-bf40-47a6-a7d6-dea7322ec888.JPG","assets/e9dfab09-8cd1-4950-b23a-57cb9864b550.JPG","assets/ea6b4cc7-b158-4d32-9528-f0a6f6b1ff8d.JPG","assets/eae2df6c-56d2-4ab8-b0ae-6d0c905a0063.JPG","assets/eb41300c-2d5a-4ec3-8cee-18bd89195569.JPG","assets/eb8559e0-c6e3-4b19-8952-cc0db97dedac.JPG","assets/ebdbaf05-5280-46b2-a454-0343bdee789b.JPG","assets/ebefafc6-8615-42a7-8054-77b1f95ba499.JPG","assets/ec4bf426-a176-4718-bbb0-0685b868f7a8.JPG","assets/ec7ec4de-1f26-467d-af72-985596deae59.JPG","assets/ec9836d6-2981-4fa1-bd30-cf4a48170564.JPG","assets/ecfb8bda-334d-495c-beb9-17c80f40ce6f.JPG","assets/ed1d8467-04a8-442d-851b-997d80e79371.JPG","assets/ef708458-3ec9-4c98-998d-86bda9b46236.JPG","assets/f027d630-8d35-4520-956e-08c4a10aeb2a.JPG","assets/f07f773d-7a79-4d4e-89f5-f18ac68ab76d.JPG","assets/f1d4c09f-6872-4236-b39d-1edf9ddf76a7.JPG","assets/f1d92bc2-b677-4862-b2c9-36a9a83bfd2f.JPG","assets/f1f1a8f2-6923-4e46-a4b6-7b742aec9b96.JPG","assets/f2b6a425-33e7-45fa-a216-cc1244a905c0.JPG","assets/f2df96f8-9fcc-42e1-adc3-214ce5876347.JPG","assets/f2e76eb2-bca4-4736-8d95-aa0aff737b9a.JPG","assets/f409bbd3-27ba-4989-9d05-a440dbb96843.JPG","assets/f4d06f75-d045-4cc2-857d-564d6551da92.JPG","assets/f5014405-4a5b-42ba-b150-b33ff424ca91.JPG","assets/f5216d42-bd80-4778-9601-85dee20c988f.JPG","assets/f53183ae-5abe-4f96-a3e0-ee8018535ed9.JPG","assets/f619dc44-f81e-4106-a6ad-2462258a7bd4.JPG","assets/f65d6626-ca56-415a-87f9-625663f1046a.JPG","assets/f72303f0-00cf-4b6a-93d6-a6b9faf0e986.JPG","assets/f7df80d9-bae4-4b47-9623-36e7afd0a613.JPG","assets/f81bc36e-781a-4b0c-8175-454180c68dc8 2.JPG","assets/f81bc36e-781a-4b0c-8175-454180c68dc8.JPG","assets/f82fb9ad-7986-4f4c-bbb2-9ee38aa64ea6.JPG","assets/f8848cef-9ccc-4cef-a14a-47055bdd0676.JPG","assets/f9ea0ddc-b7c9-4e5d-8491-673ca601aaa2.JPG","assets/fa7be459-48b8-452e-92c2-4688c9627ba6.JPG","assets/faee0ec9-9e28-4b8b-952b-3f7d384acad4.JPG","assets/fb5e181b-0949-4ff7-9ea9-ab7246a4c468.JPG","assets/fbae6971-5324-46ec-83e5-add81e6f1785.JPG","assets/fc0f7cf6-55e7-475a-8588-89af78ab175a.JPG","assets/fc40b43b-6286-45f0-97cd-0c0df8695be7.JPG","assets/fcab0876-7444-4762-bb3b-ab0ea67824ab.JPG","assets/fd1f235a-961a-4ba2-a245-643f3e5ffc87.JPG","assets/fd6bc0b4-4114-4eb4-886f-f840c47e344e.JPG","assets/fe27ed4a-ce8e-444d-92a8-5b89b400b828.JPG","assets/fe82404c-b007-4dea-9cd1-f335e8d3e8a6.JPG","assets/fef1dc97-d20f-419d-9921-b736993789f1.JPG","assets/ff06d547-d7c1-4473-a051-edffee3a92c7.JPG","assets/ffc1513d-b40d-4266-bad6-9162c0bcca2a.JPG","assets/logo-boutique-exact.jpg","assets/logo-la-cle-des-coeurs.jpg","9edf5f39-32e7-474b-bbbb-ee14aeba17d2.JPG","9f297fd4-4fba-44a9-a829-fa1fbc5a0535 2.JPG","9f297fd4-4fba-44a9-a829-fa1fbc5a0535.JPG","9f3e3d87-e675-4aaa-8e83-97da88b6bc8c.JPG","IMG_2640.PNG","IMG_2644.PNG","a07962e6-1332-4df7-8328-78d1c17f0b28.JPG","a09f29c3-78cf-4732-a2ad-30981ae4621c.JPG","a1852b81-e147-4522-b0c7-757937a9439c.JPG","a1b72ab3-aa64-4484-8830-51cefdedeb61.JPG","a1d6161a-162c-45be-be0c-88a7f4a1e36d.JPG","a27e0649-9c56-4529-bccf-5f79d3f2b447.JPG","a2863e09-1880-40a4-9027-e344f285c78d.JPG","a3863253-6b36-4728-af7b-ee1139c569f1.JPG","a3ced054-c390-4e8e-ade1-2419719fa4b1.JPG","a4234fed-2728-40fa-82db-a8dc33c67502.JPG","a617ae91-a4f1-4c75-b4dd-f07dc91903ae.JPG","a73c054b-16d5-4745-82d4-5e887fb65285.JPG","a79a2d43-ca40-422e-b911-d610270ad417.JPG","a7dbba38-ae80-48d1-88a7-ba824ad84625.JPG","a828a3d2-6ad8-4a30-9181-fda18af2b4e0.JPG","aac875a2-9158-4d40-8044-e66b33da7332.JPG","aafb5040-ebde-40db-889b-593f572e8304.JPG","ab186e2a-4a10-45b9-8432-e28057ec71af.JPG","ab192715-1729-4aa4-9061-3e705733ce29.JPG","ac0da541-7e26-4a9e-80b5-8141f5a75dcb.JPG","ad1f55b6-1db3-4609-a41c-f7db110168ff.JPG","ad337ceb-09fc-4a23-8fab-8fa4ac65f9b6.JPG","adcc02a9-6daf-4f0f-a51a-ca7c09160c58.JPG","ae373b2d-1dcd-4d16-a152-0d6879d31b06.JPG","ae8ce620-0dd1-40d7-ae83-2c71755413a7.JPG","afb3032d-9c54-46fe-af18-a21efeec66f5.JPG","logo-officiel.jpg"];
let prochainIndexPhotoLocale = 0;
produits.forEach((produit) => {
  if (produit.id === "details") return;
  const imageActuelle = String(produit.image || "").trim();
  if (imageActuelle && !imageActuelle.includes("images.unsplash.com")) return;
  if (prochainIndexPhotoLocale < photosLocalesDisponibles.length) {
    produit.image = photosLocalesDisponibles[prochainIndexPhotoLocale++];
  }
});

// =============================================
// EXPORT DU CATALOGUE
// =============================================

if (typeof window !== "undefined") {
  window.produits = produits;
}

console.log("LA CLÉ DES CŒURS : " + produits.length + " produits chargés.");
