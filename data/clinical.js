// Données cliniques — seuils, facteurs, règles, signaux, wording, sources
// Source : document_maitre_tyramine_nardil_v4.xlsx
// Ne pas modifier manuellement ; régénérer via extract_data.py

window.CLINICAL = {
  "seuils_cliniques": [
    {
      "parametre": "Dose tyramine orale → PAS ≥ 30 mmHg (sujets non traités)",
      "valeur": "200-800 mg; ED50 ≈ 437 mg",
      "source": "Bieck 1989",
      "implication": "Baseline physiologique hors traitement."
    },
    {
      "parametre": "Même paramètre sous phénelzine 60 mg/j",
      "valeur": "ED50 ≈ 33 mg",
      "source": "Bieck 1989",
      "implication": "Chute spectaculaire du seuil sous IMAO irréversible."
    },
    {
      "parametre": "Seuil pratique conservateur (réaction légère)",
      "valeur": "≈ 6 mg par portion(s)",
      "source": "FAO/WHO via littérature secondaire",
      "implication": "Pivot du score : Rouge/Noir ≥ 6 mg."
    },
    {
      "parametre": "Zone de réaction sévère sous IMAO",
      "valeur": "≈ 10-25 mg",
      "source": "FAO/WHO via littérature clinique",
      "implication": "Zone de crise hypertensive franche."
    },
    {
      "parametre": "Persistance après arrêt phénelzine",
      "valeur": "Semaines (2-4 à 8+)",
      "source": "Bieck 1989 / revues",
      "implication": "Facteur ancienneté modeste mais non nul."
    },
    {
      "parametre": "Posologie cible Nardil",
      "valeur": "Initiale 15 mg×3/j; ≥ 60 mg/j; possiblement 90 mg/j",
      "source": "DailyMed/FDA Nardil",
      "implication": "Justifie paliers de dose de l'algorithme."
    },
    {
      "parametre": "Inhibition MAO plaquettaire à 60 mg/j",
      "valeur": "Médiane >80 %; clinique ≥60 %",
      "source": "Études contrôlées",
      "implication": "Effet plafond → pondération dose modeste."
    },
    {
      "parametre": "Délai d'effet antidépresseur",
      "valeur": "≥4 semaines à 60 mg/j",
      "source": "DailyMed/FDA Nardil",
      "implication": "Patient exposé au risque dès les premières semaines."
    }
  ],
  "formule": "score = tyramine_mg_portion_typ × f_dose × f_anciennete × f_incertitude",
  "facteurs": [
    {
      "facteur": "Dose phénelzine",
      "condition": "< 45 mg/j",
      "coeff": 0.95,
      "justification": "Dose sous-thérapeutique; inhibition MAO incomplète."
    },
    {
      "facteur": "Dose phénelzine",
      "condition": "45-60 mg/j",
      "coeff": 1,
      "justification": "Plage thérapeutique centrale (ED50 Bieck)."
    },
    {
      "facteur": "Dose phénelzine",
      "condition": "61-75 mg/j",
      "coeff": 1.05,
      "justification": "Inhibition plaquettaire >80 %; effet plafond amorcé."
    },
    {
      "facteur": "Dose phénelzine",
      "condition": "76-90 mg/j",
      "coeff": 1.1,
      "justification": "Dose maximale; effet plafond probable."
    },
    {
      "facteur": "Ancienneté traitement",
      "condition": "≤ 3 jours",
      "coeff": 0.95,
      "justification": "Inhibition MAO en installation."
    },
    {
      "facteur": "Ancienneté traitement",
      "condition": "4-28 jours",
      "coeff": 1,
      "justification": "Inhibition enzymatique stabilisée."
    },
    {
      "facteur": "Ancienneté traitement",
      "condition": "> 28 jours",
      "coeff": 1.05,
      "justification": "Exposition chronique; coussin modeste."
    },
    {
      "facteur": "Incertitude",
      "condition": "Confiance D, artisanal, maison, forte variabilité",
      "coeff": 1.2,
      "justification": "Outliers alimentaires = vrai risque clinique."
    },
    {
      "facteur": "Incertitude",
      "condition": "Haute confiance (A) et produit industriel standardisé",
      "coeff": 1,
      "justification": "Aucun multiplicateur."
    }
  ],
  "regles_alerte": [
    {
      "niveau": "NOIR",
      "regle": "Repas estimé ≥6 mg; OU aliment FDA-restricted + confiance D; OU fermenté/affiné artisanal protéique",
      "sens_clinique": "À éviter",
      "affichage_patient": "Message 'À ÉVITER sous Nardil' + voie d'urgence"
    },
    {
      "niveau": "ROUGE",
      "regle": "Repas estimé 4 à <6 mg; OU aliment ≥4 mg; OU catégorie haut risque avec confiance moyenne",
      "sens_clinique": "Risque important",
      "affichage_patient": "Message 'Risque important' + rappel 'faible ≠ sûr'"
    },
    {
      "niveau": "ORANGE",
      "regle": "Repas estimé 2 à <4 mg; OU 'non spécifiée'; OU forte variabilité",
      "sens_clinique": "Prudence forte",
      "affichage_patient": "Message 'Prudence forte' + conseil médecin/pharmacien"
    },
    {
      "niveau": "VERT LIMITÉ",
      "regle": "Repas <2 mg, confiance A/B, hors catégorie restrictive",
      "sens_clinique": "Risque estimé bas",
      "affichage_patient": "Message 'Risque estimé bas' + disclaimer 'faible ≠ sûr'"
    }
  ],
  "wording": {
    "Mode d'emploi patient": "Cet outil concerne uniquement la phénelzine (Nardil).\nIl estime la tyramine d'un aliment ou d'un repas à partir de données publiées.\nUn score faible ne veut pas dire que l'aliment est sûr pour vous.\nLes produits maison, artisanaux, mal réfrigérés, plus vieux, plus mûrs, plus affinés, ou d'une autre marque peuvent contenir beaucoup plus de tyramine que la valeur affichée.\nSi l'aliment est fermenté, affiné, fumé, saumurée/mariné, ou si la donnée est inconnue, n'utilisez pas ce résultat pour vous rassurer.\nEn cas de doute, ne consommez pas et contactez votre médecin ou pharmacien.",
    "Bloc urgence (visible sans clic)": "URGENCE : céphalée brutale ou très inhabituelle, douleur thoracique, palpitations, raideur cervicale, nausées/vomissements, essoufflement, ou pression artérielle très élevée = appelez les urgences.",
    "Disclaimer fort": "Outil éducatif uniquement. Ce service n'est PAS un dispositif médical, ne fournit PAS d'avis médical, et ne remplace PAS le jugement d'un médecin, d'un pharmacien, ou d'un service d'urgence.\nLes teneurs en tyramine sont des estimations; elles varient selon la marque, la recette, la fermentation, l'affinage, le stockage, l'hygiène et la portion réelle.\nAucune garantie n'est donnée quant à l'exactitude, l'exhaustivité, l'actualité, ou la sécurité d'un aliment pour une personne donnée.\nL'utilisateur assume seul toute décision de consommation.",
    "Projet de clause droit et juridiction": "Sauf disposition impérative contraire, les présentes conditions sont régies par le droit français. Tout litige relatif au service relève des juridictions compétentes du ressort de Paris.\n\nNote : clause à faire valider par un avocat en droit français de la consommation et du numérique."
  },
  "signaux_majeurs": [
    {
      "num": "1",
      "signal": "Les outliers tuent, pas les moyennes",
      "implication": "Un seul lot de saucisson, chorizo, sucuk, doenjang peut dépasser 1000 mg/kg. La colonne 'haute' doit gouverner la décision."
    },
    {
      "num": "2",
      "signal": "Fèves = mécanisme L-DOPA, pas tyramine",
      "implication": "Afficher Noir avec libellé explicite : 'mécanisme L-DOPA'. Ne pas se fier à tyramine basse."
    },
    {
      "num": "3",
      "signal": "Peau de banane source historique majeure",
      "implication": "Pertinent pour smoothies crus 'whole banana', plantains africains, recettes zéro-déchet. Foy & Parratt 1960 Lancet."
    },
    {
      "num": "4",
      "signal": "Levure nutritionnelle (Vert) vs Marmite (Noir)",
      "implication": "Distinction critique à désamorcer explicitement dans l'UX."
    },
    {
      "num": "5",
      "signal": "Dashi dilué vs flakes katsuobushi purs",
      "implication": "Dashi 2-3 g/L <1 mg/portion = OK ; flakes entiers = Rouge/Noir."
    },
    {
      "num": "6",
      "signal": "Dry-aged beef ≥45 jours = signal émergent",
      "implication": "Food Control 2025, Kim 2020 : Noir à partir de 45 jours de maturation."
    },
    {
      "num": "7",
      "signal": "Cuisson ne détruit pas la tyramine",
      "implication": "Stable thermiquement à 200°C. Carbonara au guanciale, sushi au nuoc-mâm, pastrami grillé conservent le risque."
    },
    {
      "num": "8",
      "signal": "Absorption accélérée à jeun (×3)",
      "implication": "Seuils réactifs abaissés à jeun. Alcool à jeun à traiter plus strictement."
    },
    {
      "num": "9",
      "signal": "label_restricted ≠ toxicité absolue",
      "implication": "Reflète l'inscription FDA, pas la dose. Worcestershire 5 mL, labneh 100g industriel, cornichons industriels : exposition négligeable. La colonne seuil_alerte_par_portion opérationnalise la décision."
    },
    {
      "num": "10",
      "signal": "Données manquantes (D) ≠ absence de risque",
      "implication": "Pour chhurpi, chechil, kilishi, qwanta, biltong, câpres, pulque, koumis artisanal, absence d'HPLC impose Noir par défaut."
    }
  ],
  "sources": [
    {
      "type": "Libellé officiel",
      "reference": "FDA DailyMed — Nardil (phénelzine) label",
      "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "usage": "Base du verrou catégoriel"
    },
    {
      "type": "Revue clinique",
      "reference": "Gillman PK — MAOI diet drug interactions 2019",
      "url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "usage": "Synthèse de référence moderne pour portions et catégories"
    },
    {
      "type": "Revue clinique courte",
      "reference": "Gillman PK — MAOI diet short 2019",
      "url": "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
      "usage": "Version opérationnelle conseil clinique"
    },
    {
      "type": "Pharmacologie",
      "reference": "Bieck & Antonin 1989 — pressor challenge phénelzine",
      "url": "cf. revue",
      "usage": "ED50 33 mg sous phénelzine"
    },
    {
      "type": "Étude séminale",
      "reference": "Shulman & Walker 1996",
      "url": "https://pubmed.ncbi.nlm.nih.gov/8601543/",
      "usage": "Réhabilitation de fromages/aliments"
    },
    {
      "type": "Revue récente",
      "reference": "Van den Eynde et al. 2022",
      "url": "https://pubmed.ncbi.nlm.nih.gov/35721816/",
      "usage": "Synthèse contemporaine fromages/harengs/jambons"
    },
    {
      "type": "Revue méthodologique",
      "reference": "McCabe-Sellers 2006 JFCA",
      "url": "https://doi.org/10.1016/j.jfca.2005.12.008",
      "usage": "Bouillons cubes modernes, yaourts"
    },
    {
      "type": "Étude bières",
      "reference": "Tailor et al. 1994 — phénelzine & tap beer",
      "url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "usage": "Catégorie FDA 'tap beer'"
    },
    {
      "type": "Étude vins",
      "reference": "Soleas et al. 1999",
      "url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "usage": "Tyramine dans vins modernes"
    },
    {
      "type": "Étude fromages",
      "reference": "Pillonel et al. 2003 emmental",
      "url": "https://pubmed.ncbi.nlm.nih.gov/12769487/",
      "usage": "8,6-403 mg/kg selon affinage"
    },
    {
      "type": "Étude fromages",
      "reference": "Novella-Rodríguez et al. 2000-2004",
      "url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "usage": "Fromages affinés brebis, bleus"
    },
    {
      "type": "Étude fromages",
      "reference": "Mayer 2010 — camembert/brie moderne",
      "url": "https://pubmed.ncbi.nlm.nih.gov/19781707/",
      "usage": "Fromages à croûte fleurie pasteurisés"
    },
    {
      "type": "Étude fromages",
      "reference": "Pluta-Kubica et al. 2022",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "usage": "Croûtes lavées"
    },
    {
      "type": "Étude fromages",
      "reference": "Combarros-Fuertes et al. 2016",
      "url": "https://pubmed.ncbi.nlm.nih.gov/27287361/",
      "usage": "Cabrales"
    },
    {
      "type": "Étude fromages",
      "reference": "Andiç et al. 2010 Motal",
      "url": "https://pubmed.ncbi.nlm.nih.gov/20105559/",
      "usage": "Motal PMID 20105559"
    },
    {
      "type": "Étude charcuteries",
      "reference": "Suzzi & Gardini 2003",
      "url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "usage": "Italian dry sausages"
    },
    {
      "type": "Étude charcuteries",
      "reference": "Latorre-Moratalla 2008-2017",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "usage": "Risk assessment Spanish sausages n=357"
    },
    {
      "type": "Étude charcuteries",
      "reference": "Anderegg et al. 2020",
      "url": "https://pubmed.ncbi.nlm.nih.gov/32338740/",
      "usage": "Landjäger PMID 32338740"
    },
    {
      "type": "Étude charcuteries",
      "reference": "Şenöz et al. 2000 sucuks",
      "url": "https://pubmed.ncbi.nlm.nih.gov/20051213/",
      "usage": "Turkish sucuks"
    },
    {
      "type": "Étude poissons",
      "reference": "Köse et al. 2012",
      "url": "https://www.tandfonline.com/doi/abs/10.1080/19440049.2011.600728",
      "usage": "Review fish seafood"
    },
    {
      "type": "Étude légumes",
      "reference": "Kalač et al. 1999-2003",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814699001314",
      "usage": "Sauerkraut n=121"
    },
    {
      "type": "Étude soja/kimchi/jeotgal",
      "reference": "Jeong et al. 2019 — kimchi et jeotgal",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "usage": "Corée produits fermentés"
    },
    {
      "type": "Étude soja/jeotgal",
      "reference": "Kim-Byun-Mah 2012 Korea retail",
      "url": "https://pubmed.ncbi.nlm.nih.gov/22980868/",
      "usage": "Korean fermented products"
    },
    {
      "type": "Étude légumineuses africaines",
      "reference": "Ouoba & Parkouda 2008-2009",
      "url": "https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14724",
      "usage": "Soumbala Parkia biglobosa"
    },
    {
      "type": "Étude africaine",
      "reference": "Tamang 2022 African fermented foods",
      "url": "https://www.nature.com/articles/s41538-022-00130-w",
      "usage": "Revue produits africains"
    },
    {
      "type": "Étude L-DOPA",
      "reference": "StatPearls Phenelzine fava beans",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK554508/",
      "usage": "Mécanisme L-DOPA cosse fèves"
    },
    {
      "type": "Étude banane",
      "reference": "Foy & Parratt 1960 Lancet",
      "url": "https://pubmed.ncbi.nlm.nih.gov/14434167/",
      "usage": "Peau de banane 50-150 mg/100g"
    },
    {
      "type": "Étude dairy",
      "reference": "Linares 2012 Front Microbiol",
      "url": "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2012.00180/full",
      "usage": "Revue dairy fermenté"
    },
    {
      "type": "Méthode peau de banane",
      "reference": "Walker 1996 restricted foods",
      "url": "https://pubmed.ncbi.nlm.nih.gov/8889911/",
      "usage": "Réhabilitation aliments historiques"
    },
    {
      "type": "Étude meat review",
      "reference": "Schirone 2022 meat review",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8947279/",
      "usage": "Charcuteries modernes"
    }
  ]
};
