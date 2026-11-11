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
    ...creerProduit("bracelet-alhambra-cornaline-1", "Bracelet Alhambra en or rose 18 carats et cornaline de VanCleef & Arpels, avec boite et certificat.", "Van Cleef & Arpels", 3299, null, ["accessoires"], { image: "assets/181f650e-098a-4939-b752-d9398827d157.JPG" }),
    image: "https://bijouterielamalmaison.fr/wp-content/uploads/2026/05/CC4-430x368.jpeg"
  },
  creerProduit("bracelet-alhambra-cornaline-2", "Bracelet Alhambra en or rose 18 carats et cornaline de VanCleef & Arpels, avec boite et certificat.", "Van Cleef & Arpels", 3299),
  creerProduit("bracelet-cartier-love-authentique", "Bracelet authentique CARTIER Love", "Cartier", 5500, null, ["accessoires"], { image: "9dfa5e12-05b5-4ebe-bcff-6345bd518ea2.JPG" }),
  creerProduit("bracelet-cartier-love-jaune-16", "Bracelet CARTIER « LOVE » en or jaune 18 carats 750 taille 16", "Cartier", 3599, null, ["accessoires"], { image: "9f928690-30f6-4aed-a2b6-4e445c19f5bc.JPG" }),
  creerProduit("bracelet-cartier-juste-un-clou-2025", "Bracelet Cartier Juste Un Clou 18K Or Jaune 18 cm – Bijou de Luxe Authentique 2025", "Cartier", 2000, null, ["accessoires"], { image: "9d2c3185-4e92-4583-9784-55dc6934b73b.JPG" }),
  creerProduit("bracelet-cartier-juste-un-clou-36mm", "Bracelet Cartier JUSTE UN CLOU en or jaune 18 carats de 3,6 mm, taille 17, boîte cadeau, reçu", "Cartier", 4300, null, ["accessoires"], { image: "adf24613-321d-4caf-98db-ec58214a896d.JPG" }),
  creerProduit("bracelet-cartier-juste-un-clou-small-15", "Bracelet Cartier Juste Un Clou Small Or 18K 15 cm – Bijou de Luxe Authentique", "Cartier", 2300),
  creerProduit("bracelet-cartier-love-blanc-15", "Bracelet Cartier Love – Or blanc 18 carats – Taille 15", "Cartier", 2299, 3000),
  creerProduit("bracelet-cartier-love-jaune-petit-17", "Bracelet Cartier Love – Or Jaune 18 ct – Petit Modèle Taille 17 – Occasion Authentique", "Cartier", 3700),

  // PAGE 2
  creerProduit("bracelet-cartier-love-rose-16-complet", "Bracelet Cartier Love – Or rose 18 carats – Taille 16 – Ensemble complet avec papiers", "Cartier", 3799, 4500),
  creerProduit("bracelet-cartier-love-16-rose", "Bracelet Cartier Love 16 Or Rose – Ensemble Complet | Excellent État", "Cartier", 3900),
  creerProduit("bracelet-cartier-love-blanc-17-certificat", "Bracelet Cartier Love authentique en or blanc 18 carats, taille 17, avec certificat.", "Cartier", 3500, null, ["accessoires"], { image: "assets/194b1f30-f83d-41f5-b618-783b248522b3.JPG" }),
  creerProduit("bracelet-cartier-love-jaune-17-complet", "Bracelet Cartier Love Authentique Or Jaune 18K – Taille 17 cm – Boîte et Papiers", "Cartier", 4500, null, ["accessoires"], { image: "a36de3d2-f315-434a-bde1-73ec08bf24d0.JPG" }),
  creerProduit("bracelet-cartier-love-4-diamants-blanc-17", "Bracelet Cartier Love Classique – 4 Diamants – Or blanc 18 carats – Taille 17", "Cartier", 4299, 5500),
  creerProduit("bracelet-cartier-love-rose-21", "Bracelet Cartier Love Classique – Or Rose 18 Carats – 21 cm – Occasion 2022 avec Coffret et Certificat", "Cartier", 2500),
  creerProduit("bracelet-cartier-love-blanc-17-complet", "Bracelet Cartier LOVE en or blanc 18 carats, taille 17, coffret complet et certificat", "Cartier", 3699, 4500, ["accessoires"], { image: "a3eb8bfd-99ea-416c-ad89-32b2eeb9b2a3.JPG", images: ["a3eb8bfd-99ea-416c-ad89-32b2eeb9b2a3.JPG", "assets/15f97781-c36a-436b-90be-c30da98f5569.JPG"] }),
  creerProduit("bracelet-cartier-love-jaune-16-page2", "Bracelet Cartier Love en Or jaune 18 carats – Taille 16", "Cartier", 4099),
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
  creerProduit("bracelet-vca-malachite-5-motifs", "Bracelet Van Cleef & Arpels 5 Motifs Malachite en Or Jaune 18k – Avec Boîte & Certificat", "Van Cleef & Arpels", 2500, null, ["accessoires"], { image: "a53fbd1b-0773-431b-b2d2-cf9288ece29e.JPG", images: ["a53fbd1b-0773-431b-b2d2-cf9288ece29e.JPG", "assets/1a42118e-b69c-4799-a707-66ba7ebf644a.JPG", "assets/1b681efb-e673-4ebe-b6d1-f91dcb8b0b35.JPG"] }),
  creerProduit("bracelet-vca-alhambra-onyx-vintage", "Bracelet Van Cleef & Arpels Alhambra 5 Motifs – Or 18K et Onyx – Vintage", "Van Cleef & Arpels", 3000),

  // PAGE 6
  creerProduit("bracelet-vca-vintage-alhambra-onyx", "Bracelet Van Cleef & Arpels Vintage Alhambra – 5 motifs en or jaune 18 carats et onyx", "Van Cleef & Arpels", 2999, 4000),
  creerProduit("bracelet-vca-alhambra-nacre-19", "Bracelet Van Cleef & Arpels Vintage Alhambra 5 motifs en nacre blanche, or jaune 18 carats, taille 19 cm", "Van Cleef & Arpels", 2099, 3000),
  creerProduit("bracelet-vca-alhambra-cornaline", "Bracelet Vintage Alhambra en or jaune 18 carats et cornaline à 5 motifs – Van Cleef & Arpels", "Van Cleef & Arpels", 2099, 3200),
  creerProduit("bracelet-cartier-love-18-2024", "Bracelet/bracelet Cartier Love taille 18 – petit modèle 2024 ensemble complet or jaune", "Cartier", 3600),
  creerProduit("cartier-juste-un-clou-petit-16", "Cartier Juste un Clou – Bracelet petit modèle en or jaune 18 carats, taille 16, avec écrin et certificat", "Cartier", 2015),
  creerProduit("cartier-juste-un-clou-bague-52", "Cartier Juste Un Clou Bague en or rose 18 carats Taille 52 / US 6", "Cartier", 1850),
  creerProduit("cartier-juste-un-clou-diamant-rose", "Cartier Juste Un Clou Diamant Or Rose Bracelet", "Cartier", 5500, null, ["accessoires"], { image: "assets/1ecece59-9a76-461e-aca3-d5b31de5bf3b.JPG" }),
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
      description: "Condition : Occasion – Très bon état.\nÉtat : Ce bracelet Cartier est en très bon état. Toutes les parties fonctionnent correctement."
    }
  ),

  // PRODUITS AJOUTÉS À PARTIR DES FICHES TRANSMISES LE 10/11/2026
  creerProduit("bague-cartier-love-classique-jaune", "Bague Cartier Love classique en or jaune 18 carats", "Cartier", 1400, null, ["accessoires"], { description: "Bague Cartier Love classique en or jaune 18 carats." }),
  creerProduit("bracelet-cartier-love-classique-rose", "Bracelet Cartier Love classique en or rose 18 carats", "Cartier", 3999, null, ["accessoires"], { description: "Bracelet Cartier Love classique en or rose 18 carats." }),
  creerProduit("bague-cartier-love-petit-modele", "Bague Cartier Love petit modèle", "Cartier", 1099, null, ["accessoires"], { description: "Bague Cartier Love petit modèle." }),
  creerProduit("bague-cartier-ecrou-deux-rangs", "Bague Cartier Écrou deux rangs", "Cartier", 1999, null, ["accessoires"], { description: "Bague Cartier Écrou deux rangs." }),
  creerProduit("bracelet-cartier-love-petit-jaune", "Bracelet Cartier Love petit modèle en or jaune 18 carats", "Cartier", 3700, null, ["accessoires"], { description: "Bracelet Cartier Love petit modèle en or jaune 18 carats." }),
  creerProduit("bracelet-cartier-love-rose-16-4200", "Bracelet Cartier Love en or rose 18 carats – Taille 16", "Cartier", 4200, null, ["accessoires"], { description: "Bracelet Cartier Love en or rose 18 carats, taille 16." }),
  creerProduit("montre-cartier-panthere-wspn0006", "Montre Cartier Panthère WSPN0006", "Cartier", 4500, null, ["homme"], { reference: "WSPN0006", image: "9d268d76-c3af-4f6c-b43d-97892779e898.JPG", images: ["9d268d76-c3af-4f6c-b43d-97892779e898.JPG", "assets/212d0cc1-8065-45d2-8220-fc720e37a05a.JPG"], description: "Montre Cartier Panthère WSPN0006 en acier, cadran argenté à chiffres romains, bracelet acier, mouvement quartz. Numéro de série communiqué : 4022764889XX. Carte datée du 01/05/2019." }),
  creerProduit("bracelet-cartier-love-rose-16-3799", "Bracelet Cartier Love en or rose 18 carats – Taille 16", "Cartier", 3799, null, ["accessoires"], { description: "Bracelet Cartier Love en or rose 18 carats, taille 16." }),
  creerProduit("bracelet-bulgari-serpenti-viper", "Bracelet Bvlgari Serpenti Viper", "Bvlgari", 4200, null, ["accessoires"], { image: "a9f11dbe-877b-45c1-ace5-dbe172fbc8e1.JPG", images: ["a9f11dbe-877b-45c1-ace5-dbe172fbc8e1.JPG", "a5b406c6-0686-4ff8-b124-94f8e455ae5d.JPG", "adcc02a9-6daf-4f0f-a51a-ca7c09160c58.JPG"], description: "Bracelet Bvlgari Serpenti Viper." }),
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
  creerProduit("cartier-baignoire-wgba0025-femme", "Cartier Baignoire Petit WGBA0025 « Femme » Quartz Or Jaune (2025) Taille 16 NEUF", "Cartier", 16000, null, ["femme"]),
  creerProduit("cartier-panthere-22mm-femme", "Cartier Panthère 22 mm Femme – Montre Or Jaune | Service Officiel & Boîte", "Cartier", 7000, null, ["femme"], { image: "assets/13c78fcb-e84a-4cd1-9928-7e5b9ad10a34.JPG" }),
  creerProduit("cartier-tank-must-femme", "Cartier Tank Must – Montre de Luxe avec Ensemble Complet, Boîte et Papiers", "Cartier", 2000, null, ["femme"]),
  creerProduit("jaeger-lecoultre-reverso-2024-femme", "Jaeger-LeCoultre Reverso 2024 – Acier inoxydable – Réf. 214.8.62 Q3858522", "Jaeger-LeCoultre", 4599, 6000, ["femme"]),
  creerProduit("cartier-faberge-67082-femme", "Montre Cartier Fabergé 67082 en or massif 18 carats", "Cartier", 3000, 3800, ["femme"]),
  creerProduit("cartier-panthere-wgpn0045-femme", "Montre Cartier Panthere 2025 or jaune 18 carats 27 mm à quartz WGPN0045 4014 – Série complète", "Cartier", 15500, null, ["femme"]),
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
  creerProduit("bracelet-cartier-love-jaune-4-diamants-18-homme", "BRACELET CARTIER LOVE EN OR JAUNE 18 CARATS, 4 DIAMANTS, 0,42 CT, TAILLE 18, ENSEMBLE COMPLET", "Cartier", 4899, null, ["homme"]),
  creerProduit("bracelet-cartier-love-jaune-classique-18-homme", "Bracelet Love Cartier en or jaune, modèle classique – Taille 18", "Cartier", 3099, null, ["homme"]),
  creerProduit("bracelet-cartier-love-manchette-blanc-homme", "Bracelet manchette Love Cartier en or blanc 18 carats", "Cartier", 2599, 3500, ["homme"]),
  creerProduit("breitling-ab0162121g1s1-superocean-heritage", "Breitling AB0162121G1S1 Superocean Heritage B01 Chronographe 44 mm 2019 Kit complet", "Breitling", 2500, null, ["homme"]),
  creerProduit("breitling-navitimer-b01-ab0137241l1a1", "Breitling Navitimer B01 Chronographe 46 mm AB0137241L1A1", "Breitling", 3200, null, ["homme"]),

  creerProduit("breitling-super-avenger-ii-a13371", "Breitling Super Avenger II A13371 Homme – Montre Chronographe 48 mm Acier Cadran Argent Rare", "Breitling", 1700, null, ["homme"]),
  creerProduit("breitling-superocean-heritage-ab2020", "Breitling Superocean Heritage AB2020 – 46 mm – Cadran Bleu Soleil – Acier Inoxydable – Étanche 200 m", "Breitling", 2200, null, ["homme"]),
  creerProduit("cartier-panthere-wspn0006-homme-source", "Cartier Panthère pour femme WSPN0006 Quartz", "Cartier", 4100, null, ["homme"]),
  creerProduit("cartier-santos-wssa0062-cadran-vert-source", "Cartier Santos – WSSA0062 – Grande taille – Cadran vert – Coffret et papiers", "Cartier", 4099, 5299, ["homme"]),
  creerProduit("cartier-santos-wssa0037-noir-source", "Cartier Santos 2025 – WSSA0037 – Boîtier Noir ADLC & Acier – Coffret et papiers", "Cartier", 4400, 6000, ["homme"], { image: "a180a0bd-df0b-4d42-84af-3f2c3c0b1751.JPG", images: ["a180a0bd-df0b-4d42-84af-3f2c3c0b1751.JPG", "a55b79bd-ae1f-477b-bf03-f4beaaf783f3.JPG"] }),
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
  creerProduit("cartier-santos-bbc8346", "Montre Cartier Santos BBC8346 – Bicolore Acier Inoxydable et Or 18 Carats – État Neuf", "Cartier", 3500, 4500, ["homme"], { image: "aafb5040-ebde-40db-889b-593f572e8304.JPG" }),
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
  creerProduit("omega-speedmaster-snoopy-2025", "OMEGA Speedmaster 2025 « Silver Snoopy Award » 50e montre 310.32.42.50.02.001", "Omega", 15500, 18000, ["homme"], { image: "a58be40a-988e-4de3-af07-58f096bce6bd.JPG" }),
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
  creerProduit("zenith-chronomaster-el-primero-032150", "Zenith Chronomaster El Primero réf. 03.2150.400/69.C713, avec boîte et papiers", "Zenith", 2890, null, ["homme"]),
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
// EXPORT DU CATALOGUE
// =============================================

if (typeof window !== "undefined") {
  window.produits = produits;
}

console.log("LA CLÉ DES CŒURS : " + produits.length + " produits chargés.");
