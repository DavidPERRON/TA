window.__NARDIL_DATA__ = {
  "meta": {
    "version": "2026-04-23-rebuild",
    "source_file": "document_maitre_tyramine_nardil_v4.xlsx",
    "food_count": 338,
    "confidence_counts": {
      "B": 92,
      "C": 134,
      "A": 36,
      "D": 76
    },
    "family_counts": {
      "Fromages": 59,
      "Produits laitiers": 15,
      "Viandes": 5,
      "Poissons / fruits de mer": 44,
      "Charcuteries / viandes affinées": 52,
      "Boissons fermentées": 12,
      "Légumes / fermentés": 22,
      "Soja / légumineuses fermentés": 28,
      "Sauces / condiments": 25,
      "Levures / extraits": 7,
      "Boissons alcoolisées": 50,
      "Fruits": 15,
      "Fèves / légumineuses": 4
    },
    "cuisine_type_counts": {
      "Global / international": 90,
      "Russie / Europe de l'Est": 34,
      "France / francophone": 30,
      "Royaume-Uni / Irlande": 9,
      "Italie": 25,
      "Japon": 22,
      "Asie du Sud-Est": 21,
      "Méditerranée": 10,
      "Corée": 18,
      "Chine / Taïwan": 10,
      "Moyen-Orient / Maghreb": 9,
      "Allemagne / Suisse": 9,
      "Espagne": 13,
      "Amériques": 16,
      "Inde": 9,
      "Afrique": 7,
      "Asie": 3,
      "Nordique": 3
    }
  },
  "rules": {
    "context": {
      "scope": "Nardil / phenelzine only"
    },
    "bands_mg": {
      "green_limited_max_exclusive": 2,
      "orange_max_exclusive": 4,
      "red_max_exclusive": 6,
      "black_min_inclusive": 6
    },
    "dose_factors": [
      {
        "label": "<45 mg/j",
        "min": 0,
        "max": 44.99,
        "factor": 0.95
      },
      {
        "label": "45-60 mg/j",
        "min": 45,
        "max": 60,
        "factor": 1.0
      },
      {
        "label": "61-75 mg/j",
        "min": 61,
        "max": 75,
        "factor": 1.05
      },
      {
        "label": "76-90 mg/j",
        "min": 76,
        "max": 90,
        "factor": 1.1
      }
    ],
    "duration_factors": [
      {
        "label": "<=3 jours",
        "min_days": 0,
        "max_days": 3,
        "factor": 0.95
      },
      {
        "label": "4-28 jours",
        "min_days": 4,
        "max_days": 28,
        "factor": 1.0
      },
      {
        "label": ">28 jours",
        "min_days": 29,
        "max_days": 9999,
        "factor": 1.05
      }
    ],
    "uncertainty_factor_default": 1.2,
    "alcohol_context_factor": 1.05,
    "fasting_factor": 1.1,
    "stop_window_days_no_relaxation": 14
  },
  "sheets": {
    "Sommaire": [
      [
        "Document maître — Tyramine sous Nardil (phénelzine) — v4"
      ],
      [
        "Consolidation élargie : 338 entrées — couverture mondiale"
      ],
      [
        "1. Aliments consolidé",
        "338 entrées — 23 colonnes incluant seuil_alerte et categorie_libelle_fda.",
        "→ Aliments_consolide"
      ],
      [
        "2. Seuils cliniques",
        "Valeurs pharmacologiques phénelzine/tyramine.",
        "→ Seuils_cliniques"
      ],
      [
        "3. Facteurs algorithme",
        "Pondérations dose/ancienneté/incertitude.",
        "→ Facteurs_algorithme"
      ],
      [
        "4. Règles d'alerte",
        "Niveaux Noir/Rouge/Orange/Vert limité.",
        "→ Regles_alerte"
      ],
      [
        "5. Wording patient",
        "Textes d'accueil, urgence, disclaimer, juridique.",
        "→ Wording_patient"
      ],
      [
        "6. Méthode & limitations",
        "Audit et questions ouvertes.",
        "→ Methode_limitations"
      ],
      [
        "7. Sources",
        "URLs primaires consolidées.",
        "→ Sources"
      ],
      [
        "8. Signaux cliniques majeurs",
        "10 points de vigilance critiques.",
        "→ Signaux_majeurs"
      ],
      [
        "Règle de consolidation",
        null,
        null
      ],
      [
        "Consolidation à partir de trois sources : (1) CSV v2 à 69 entrées structurées ; (2) rapport de deep research initial apportant 8 entrées et des enrichissements ; (3) rapport de deep research élargi apportant 260+ entrées couvrant l'ensemble des régions mondiales. En cas de doublons, la valeur la plus complète prime. Les entrées de confiance D sans donnée quantitative directe sont marquées 'donnée manquante — prudence forte'.",
        null,
        null
      ],
      [
        "Avertissement",
        null,
        null
      ],
      [
        "Outil éducatif uniquement. Ce document n'est pas un dispositif médical et ne remplace pas le jugement d'un médecin, pharmacien ou service d'urgence. Les teneurs sont des estimations.",
        null,
        null
      ]
    ],
    "Seuils_cliniques": [
      [
        "Seuils cliniques — phénelzine et tyramine orale",
        null,
        null,
        null
      ],
      [
        "Paramètre clinique",
        "Valeur / interprétation",
        "Source",
        "Implication pour l'outil"
      ],
      [
        "Dose tyramine orale → PAS ≥ 30 mmHg (sujets non traités)",
        "200-800 mg; ED50 ≈ 437 mg",
        "Bieck 1989",
        "Baseline physiologique hors traitement."
      ],
      [
        "Même paramètre sous phénelzine 60 mg/j",
        "ED50 ≈ 33 mg",
        "Bieck 1989",
        "Chute spectaculaire du seuil sous IMAO irréversible."
      ],
      [
        "Seuil pratique conservateur (réaction légère)",
        "≈ 6 mg par portion(s)",
        "FAO/WHO via littérature secondaire",
        "Pivot du score : Rouge/Noir ≥ 6 mg."
      ],
      [
        "Zone de réaction sévère sous IMAO",
        "≈ 10-25 mg",
        "FAO/WHO via littérature clinique",
        "Zone de crise hypertensive franche."
      ],
      [
        "Persistance après arrêt phénelzine",
        "Semaines (2-4 à 8+)",
        "Bieck 1989 / revues",
        "Facteur ancienneté modeste mais non nul."
      ],
      [
        "Posologie cible Nardil",
        "Initiale 15 mg×3/j; ≥ 60 mg/j; possiblement 90 mg/j",
        "DailyMed/FDA Nardil",
        "Justifie paliers de dose de l'algorithme."
      ],
      [
        "Inhibition MAO plaquettaire à 60 mg/j",
        "Médiane >80 %; clinique ≥60 %",
        "Études contrôlées",
        "Effet plafond → pondération dose modeste."
      ],
      [
        "Délai d'effet antidépresseur",
        "≥4 semaines à 60 mg/j",
        "DailyMed/FDA Nardil",
        "Patient exposé au risque dès les premières semaines."
      ]
    ],
    "Facteurs_algorithme": [
      [
        "Facteurs de l'algorithme de score",
        null,
        null,
        null
      ],
      [
        "score_repas = tyramine_mg_cumulée × facteur_dose × facteur_ancienneté × facteur_incertitude",
        null,
        null,
        null
      ],
      [
        "Facteur",
        "Condition",
        "Coefficient",
        "Justification"
      ],
      [
        "Dose phénelzine",
        "< 45 mg/j",
        0.95,
        "Dose sous-thérapeutique; inhibition MAO incomplète."
      ],
      [
        "Dose phénelzine",
        "45-60 mg/j",
        1,
        "Plage thérapeutique centrale (ED50 Bieck)."
      ],
      [
        "Dose phénelzine",
        "61-75 mg/j",
        1.05,
        "Inhibition plaquettaire >80 %; effet plafond amorcé."
      ],
      [
        "Dose phénelzine",
        "76-90 mg/j",
        1.1,
        "Dose maximale; effet plafond probable."
      ],
      [
        "Ancienneté traitement",
        "≤ 3 jours",
        0.95,
        "Inhibition MAO en installation."
      ],
      [
        "Ancienneté traitement",
        "4-28 jours",
        1,
        "Inhibition enzymatique stabilisée."
      ],
      [
        "Ancienneté traitement",
        "> 28 jours",
        1.05,
        "Exposition chronique; coussin modeste."
      ],
      [
        "Incertitude",
        "Confiance D, artisanal, maison, forte variabilité",
        1.2,
        "Outliers alimentaires = vrai risque clinique."
      ],
      [
        "Incertitude",
        "Haute confiance (A) et produit industriel standardisé",
        1,
        "Aucun multiplicateur."
      ],
      [
        "Garde-fou",
        null,
        null,
        null
      ],
      [
        "Ces pondérations modulent le score mais ne l'annulent jamais. Un aliment officiellement à éviter (FDA label_restricted=True) ou sans donnée fiable reste classé par le verrou catégoriel, indépendamment du score numérique.",
        null,
        null,
        null
      ]
    ],
    "Regles_alerte": [
      [
        "Règles d'alerte — niveaux et déclencheurs",
        null,
        null,
        null
      ],
      [
        "Niveau",
        "Règle",
        "Sens clinique",
        "Affichage patient"
      ],
      [
        "NOIR",
        "Repas estimé ≥6 mg; OU aliment FDA-restricted + confiance D; OU fermenté/affiné artisanal protéique",
        "À éviter",
        "Message 'À ÉVITER sous Nardil' + voie d'urgence"
      ],
      [
        "ROUGE",
        "Repas estimé 4 à <6 mg; OU aliment ≥4 mg; OU catégorie haut risque avec confiance moyenne",
        "Risque important",
        "Message 'Risque important' + rappel 'faible ≠ sûr'"
      ],
      [
        "ORANGE",
        "Repas estimé 2 à <4 mg; OU 'non spécifiée'; OU forte variabilité",
        "Prudence forte",
        "Message 'Prudence forte' + conseil médecin/pharmacien"
      ],
      [
        "VERT LIMITÉ",
        "Repas <2 mg, confiance A/B, hors catégorie restrictive",
        "Risque estimé bas",
        "Message 'Risque estimé bas' + disclaimer 'faible ≠ sûr'"
      ],
      [
        "Verrou catégoriel (FDA label phenelzine)",
        null,
        null,
        null
      ],
      [
        "Indépendamment du score, si l'aliment appartient à une famille du libellé officiel (aged/fermented cheeses, smoked/pickled/aged/fermented meats et fish, fermented soy/fish, concentrated yeast extracts, tap beer, fortified wines, overripe fruits, fava beans L-DOPA, liver/pâté), la colonne label_restricted=True signale le verrou. La colonne categorie_libelle_fda opérationnalise le rattachement.",
        null,
        null,
        null
      ]
    ],
    "Wording_patient": [
      [
        "Textes patient — accueil, urgence, disclaimer, juridique",
        null
      ],
      [
        "Mode d'emploi patient",
        null
      ],
      [
        "Cet outil concerne uniquement la phénelzine (Nardil).\nIl estime la tyramine d'un aliment ou d'un repas à partir de données publiées.\nUn score faible ne veut pas dire que l'aliment est sûr pour vous.\nLes produits maison, artisanaux, mal réfrigérés, plus vieux, plus mûrs, plus affinés, ou d'une autre marque peuvent contenir beaucoup plus de tyramine que la valeur affichée.\nSi l'aliment est fermenté, affiné, fumé, saumurée/mariné, ou si la donnée est inconnue, n'utilisez pas ce résultat pour vous rassurer.\nEn cas de doute, ne consommez pas et contactez votre médecin ou pharmacien.",
        null
      ],
      [
        "Bloc urgence (visible sans clic)",
        null
      ],
      [
        "URGENCE : céphalée brutale ou très inhabituelle, douleur thoracique, palpitations, raideur cervicale, nausées/vomissements, essoufflement, ou pression artérielle très élevée = appelez les urgences.",
        null
      ],
      [
        "Disclaimer fort",
        null
      ],
      [
        "Outil éducatif uniquement. Ce service n'est PAS un dispositif médical, ne fournit PAS d'avis médical, et ne remplace PAS le jugement d'un médecin, d'un pharmacien, ou d'un service d'urgence.\nLes teneurs en tyramine sont des estimations; elles varient selon la marque, la recette, la fermentation, l'affinage, le stockage, l'hygiène et la portion réelle.\nAucune garantie n'est donnée quant à l'exactitude, l'exhaustivité, l'actualité, ou la sécurité d'un aliment pour une personne donnée.\nL'utilisateur assume seul toute décision de consommation.",
        null
      ],
      [
        "Projet de clause droit et juridiction",
        null
      ],
      [
        "Sauf disposition impérative contraire, les présentes conditions sont régies par le droit français. Tout litige relatif au service relève des juridictions compétentes du ressort de Paris.\n\nNote : clause à faire valider par un avocat en droit français de la consommation et du numérique.",
        null
      ]
    ],
    "Methode_limitations": [
      [
        "Méthode de consolidation v4 et limitations",
        null,
        null,
        null,
        null
      ],
      [
        "Sources consolidées et règle de doublons",
        null,
        null,
        null,
        null
      ],
      [
        "Trois sources primaires ont été fusionnées : (1) dataset_maitre_tyramine_nardil_v2.csv — 69 entrées structurées ; (2) rapport de deep research initial — enrichissements notes + 8 nouvelles entrées ; (3) rapport de deep research élargi — 260+ entrées couvrant toutes les régions du monde. Règle : en cas de doublon, la source la plus riche prime. Les valeurs numériques sont prises telles que rapportées par la littérature HPLC moderne (post-2010 quand possible). Les notes complémentaires consolident les nuances industriel vs artisanal, anciennes vs modernes valeurs, outliers documentés.",
        null,
        null,
        null,
        null
      ],
      [
        "Limitations principales",
        null,
        null,
        null,
        null
      ],
      [
        "Scientifique — pharmacologie",
        "Absence de courbe clinique granularisée dose phénelzine / seuil tyramine. Pondérations dose/durée volontairement modestes.",
        null,
        null,
        null
      ],
      [
        "Alimentaire — couverture régionale",
        "Certains produits artisanaux (shanklish, motal, chhurpi, chechil, kilishi, biltong, qwanta, ogiri, ugba, kenkey, kisra, koumis) ne disposent pas d'études HPLC publiées. Classification conservatrice par défaut (confidence D, souvent Noir).",
        null,
        null,
        null
      ],
      [
        "Méthodologique — anciennes mesures",
        "Certaines mesures anciennes (années 1960-1980) ont surestimé la tyramine des fromages. L'audit a privilégié les données contemporaines, mais conservé les outliers anciens comme rappel de la variabilité réelle.",
        null,
        null,
        null
      ],
      [
        "Clinique — variabilité individuelle",
        "Variabilité interindividuelle importante même hors traitement. Un coussin de sécurité systématique s'impose.",
        null,
        null,
        null
      ],
      [
        "Mécanisme alternatif — fèves",
        "Les fèves / broad beans agissent via la L-DOPA (cosse 200-300 mg/100g, Johns & Hertzler) et non la tyramine. Crises hypertensives documentées (Hodge 1964). Noir absolu indépendamment de la colonne tyramine.",
        null,
        null,
        null
      ],
      [
        "FDA label vs science moderne",
        "La notice FDA Nardil maintient des restrictions conservatrices (années 1960-80). Les réévaluations modernes (Shulman-Walker 1996, McCabe-Sellers 2006, Gillman 2017/2019, Van den Eynde 2022) réhabilitent : bière bouteille pasteurisée, vins en modération (sauf Chianti), chocolat, bacon en portions normales, yaourts industriels, bouillon cubes modernes, levure nutritionnelle inactivée, spiritueux distillés, tofu frais, viandes fraîches, conserves appertisées. Le label_restricted colonne reflète le libellé FDA tandis que le seuil_alerte_par_portion intègre la réévaluation moderne par la dose effective.",
        null,
        null,
        null
      ]
    ],
    "Sources": [
      [
        "Sources primaires consolidées",
        null,
        null,
        null
      ],
      [
        "Type",
        "Référence",
        "URL",
        "Usage"
      ],
      [
        "Libellé officiel",
        "FDA DailyMed — Nardil (phénelzine) label",
        "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
        "Base du verrou catégoriel"
      ],
      [
        "Revue clinique",
        "Gillman PK — MAOI diet drug interactions 2019",
        "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
        "Synthèse de référence moderne pour portions et catégories"
      ],
      [
        "Revue clinique courte",
        "Gillman PK — MAOI diet short 2019",
        "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
        "Version opérationnelle conseil clinique"
      ],
      [
        "Pharmacologie",
        "Bieck & Antonin 1989 — pressor challenge phénelzine",
        "cf. revue",
        "ED50 33 mg sous phénelzine"
      ],
      [
        "Étude séminale",
        "Shulman & Walker 1996",
        "https://pubmed.ncbi.nlm.nih.gov/8601543/",
        "Réhabilitation de fromages/aliments"
      ],
      [
        "Revue récente",
        "Van den Eynde et al. 2022",
        "https://pubmed.ncbi.nlm.nih.gov/35721816/",
        "Synthèse contemporaine fromages/harengs/jambons"
      ],
      [
        "Revue méthodologique",
        "McCabe-Sellers 2006 JFCA",
        "https://doi.org/10.1016/j.jfca.2005.12.008",
        "Bouillons cubes modernes, yaourts"
      ],
      [
        "Étude bières",
        "Tailor et al. 1994 — phénelzine & tap beer",
        "https://pubmed.ncbi.nlm.nih.gov/8151003/",
        "Catégorie FDA 'tap beer'"
      ],
      [
        "Étude vins",
        "Soleas et al. 1999",
        "https://pubmed.ncbi.nlm.nih.gov/10552634/",
        "Tyramine dans vins modernes"
      ],
      [
        "Étude fromages",
        "Pillonel et al. 2003 emmental",
        "https://pubmed.ncbi.nlm.nih.gov/12769487/",
        "8,6-403 mg/kg selon affinage"
      ],
      [
        "Étude fromages",
        "Novella-Rodríguez et al. 2000-2004",
        "https://pubmed.ncbi.nlm.nih.gov/12769492/",
        "Fromages affinés brebis, bleus"
      ],
      [
        "Étude fromages",
        "Mayer 2010 — camembert/brie moderne",
        "https://pubmed.ncbi.nlm.nih.gov/19781707/",
        "Fromages à croûte fleurie pasteurisés"
      ],
      [
        "Étude fromages",
        "Pluta-Kubica et al. 2022",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
        "Croûtes lavées"
      ],
      [
        "Étude fromages",
        "Combarros-Fuertes et al. 2016",
        "https://pubmed.ncbi.nlm.nih.gov/27287361/",
        "Cabrales"
      ],
      [
        "Étude fromages",
        "Andiç et al. 2010 Motal",
        "https://pubmed.ncbi.nlm.nih.gov/20105559/",
        "Motal PMID 20105559"
      ],
      [
        "Étude charcuteries",
        "Suzzi & Gardini 2003",
        "https://pubmed.ncbi.nlm.nih.gov/14527803/",
        "Italian dry sausages"
      ],
      [
        "Étude charcuteries",
        "Latorre-Moratalla 2008-2017",
        "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
        "Risk assessment Spanish sausages n=357"
      ],
      [
        "Étude charcuteries",
        "Anderegg et al. 2020",
        "https://pubmed.ncbi.nlm.nih.gov/32338740/",
        "Landjäger PMID 32338740"
      ],
      [
        "Étude charcuteries",
        "Şenöz et al. 2000 sucuks",
        "https://pubmed.ncbi.nlm.nih.gov/20051213/",
        "Turkish sucuks"
      ],
      [
        "Étude poissons",
        "Köse et al. 2012",
        "https://www.tandfonline.com/doi/abs/10.1080/19440049.2011.600728",
        "Review fish seafood"
      ],
      [
        "Étude légumes",
        "Kalač et al. 1999-2003",
        "https://www.sciencedirect.com/science/article/abs/pii/S0308814699001314",
        "Sauerkraut n=121"
      ],
      [
        "Étude soja/kimchi/jeotgal",
        "Jeong et al. 2019 — kimchi et jeotgal",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
        "Corée produits fermentés"
      ],
      [
        "Étude soja/jeotgal",
        "Kim-Byun-Mah 2012 Korea retail",
        "https://pubmed.ncbi.nlm.nih.gov/22980868/",
        "Korean fermented products"
      ],
      [
        "Étude légumineuses africaines",
        "Ouoba & Parkouda 2008-2009",
        "https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14724",
        "Soumbala Parkia biglobosa"
      ],
      [
        "Étude africaine",
        "Tamang 2022 African fermented foods",
        "https://www.nature.com/articles/s41538-022-00130-w",
        "Revue produits africains"
      ],
      [
        "Étude L-DOPA",
        "StatPearls Phenelzine fava beans",
        "https://www.ncbi.nlm.nih.gov/books/NBK554508/",
        "Mécanisme L-DOPA cosse fèves"
      ],
      [
        "Étude banane",
        "Foy & Parratt 1960 Lancet",
        "https://pubmed.ncbi.nlm.nih.gov/14434167/",
        "Peau de banane 50-150 mg/100g"
      ],
      [
        "Étude dairy",
        "Linares 2012 Front Microbiol",
        "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2012.00180/full",
        "Revue dairy fermenté"
      ],
      [
        "Méthode peau de banane",
        "Walker 1996 restricted foods",
        "https://pubmed.ncbi.nlm.nih.gov/8889911/",
        "Réhabilitation aliments historiques"
      ],
      [
        "Étude meat review",
        "Schirone 2022 meat review",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC8947279/",
        "Charcuteries modernes"
      ]
    ],
    "Signaux_majeurs": [
      [
        "10 signaux cliniques majeurs pour l'outil patient Nardil",
        null,
        null
      ],
      [
        "#",
        "Signal",
        "Implication pour l'outil"
      ],
      [
        "1",
        "Les outliers tuent, pas les moyennes",
        "Un seul lot de saucisson, chorizo, sucuk, doenjang peut dépasser 1000 mg/kg. La colonne 'haute' doit gouverner la décision."
      ],
      [
        "2",
        "Fèves = mécanisme L-DOPA, pas tyramine",
        "Afficher Noir avec libellé explicite : 'mécanisme L-DOPA'. Ne pas se fier à tyramine basse."
      ],
      [
        "3",
        "Peau de banane source historique majeure",
        "Pertinent pour smoothies crus 'whole banana', plantains africains, recettes zéro-déchet. Foy & Parratt 1960 Lancet."
      ],
      [
        "4",
        "Levure nutritionnelle (Vert) vs Marmite (Noir)",
        "Distinction critique à désamorcer explicitement dans l'UX."
      ],
      [
        "5",
        "Dashi dilué vs flakes katsuobushi purs",
        "Dashi 2-3 g/L <1 mg/portion = OK ; flakes entiers = Rouge/Noir."
      ],
      [
        "6",
        "Dry-aged beef ≥45 jours = signal émergent",
        "Food Control 2025, Kim 2020 : Noir à partir de 45 jours de maturation."
      ],
      [
        "7",
        "Cuisson ne détruit pas la tyramine",
        "Stable thermiquement à 200°C. Carbonara au guanciale, sushi au nuoc-mâm, pastrami grillé conservent le risque."
      ],
      [
        "8",
        "Absorption accélérée à jeun (×3)",
        "Seuils réactifs abaissés à jeun. Alcool à jeun à traiter plus strictement."
      ],
      [
        "9",
        "label_restricted ≠ toxicité absolue",
        "Reflète l'inscription FDA, pas la dose. Worcestershire 5 mL, labneh 100g industriel, cornichons industriels : exposition négligeable. La colonne seuil_alerte_par_portion opérationnalise la décision."
      ],
      [
        "10",
        "Données manquantes (D) ≠ absence de risque",
        "Pour chhurpi, chechil, kilishi, qwanta, biltong, câpres, pulque, koumis artisanal, absence d'HPLC impose Noir par défaut."
      ]
    ]
  },
  "foods": [
    {
      "id": "TYR_001",
      "names": {
        "fr": "Fromages frais non affinés",
        "en": "mozzarella fraîche, ricotta, queso fresco standardisé",
        "ru": "творог / свежий сыр"
      },
      "search_terms": [
        "Fromages",
        "Fromages frais non affinés",
        "Global / international",
        "Global laitier",
        "frais non affiné",
        "fresh cheese – not restricted",
        "mozzarella fraîche, ricotta, queso fresco standardisé",
        "творог / свежий сыр"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Global laitier",
      "cuisine_type": "Global / international",
      "process": "frais non affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "mozzarella fraîche, ricotta, queso fresco standardisé",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 130,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 275,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_002",
      "names": {
        "fr": "Yaourt nature",
        "en": "yogurt plain",
        "ru": "йогурт"
      },
      "search_terms": [
        "Global / international",
        "Global laitier",
        "Produits laitiers",
        "Yaourt nature",
        "fermented dairy – low concern",
        "fermenté standardisé",
        "yogurt plain",
        "йогурт"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Global laitier",
      "cuisine_type": "Global / international",
      "process": "fermenté standardisé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "125 g",
        "value": 125.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.13,
        "high": 0.63
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "yogurt plain",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 150,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 190,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_003",
      "names": {
        "fr": "Kéfir",
        "en": "kefir",
        "ru": "кефир"
      },
      "search_terms": [
        "Europe de l'Est / global",
        "Kéfir",
        "Produits laitiers",
        "Russie / Europe de l'Est",
        "fermented dairy – low concern",
        "fermenté laitier",
        "kefir",
        "кефир"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Europe de l'Est / global",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fermenté laitier",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 1.28
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.25,
        "high": 3.2
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.researchgate.net/publication/226101665_Biogenic_amine_content_of_kefir_A_fermented_dairy_product",
      "restaurant_alias": "kefir",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Revue dairy 2012 : BA totales 2,4-35,2 mg/L, tyramine prévalente mais sans chiffre tyramine exploitable.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 190,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 220,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 380,
          "max": 500,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_004",
      "names": {
        "fr": "Brie / Camembert",
        "en": "brie, camembert",
        "ru": "бри / камамбер"
      },
      "search_terms": [
        "Brie / Camembert",
        "France / francophone",
        "France / global",
        "Fromages",
        "affiné",
        "aged/fermented cheeses",
        "brie, camembert",
        "бри / камамбер"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France / global",
      "cuisine_type": "France / francophone",
      "process": "affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 10
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.3,
        "high": 3
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "brie, camembert",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Données modernes (Mayer 2010) : brie/camembert commerciaux ≤ 0,15-0,3 mg/portion 30 g. Anciens outliers jusqu'à ~54 mg/30 g.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_005",
      "names": {
        "fr": "Cheddar affiné",
        "en": "aged cheddar",
        "ru": "чеддер"
      },
      "search_terms": [
        "Cheddar affiné",
        "Fromages",
        "Royaume-Uni / Irlande",
        "UK / global",
        "affiné",
        "aged cheddar",
        "aged/fermented cheeses",
        "чеддер"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "UK / global",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 8,
        "high": 16
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 2.4,
        "high": 4.8
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "aged cheddar",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Jeunes cheddars < 50 mg/kg; 36 semaines d'affinage < 160 mg/kg. Anciennes valeurs très élevées probablement obsolètes.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_006",
      "names": {
        "fr": "Gouda / Edam",
        "en": "gouda, edam",
        "ru": "гауда / эдам"
      },
      "search_terms": [
        "Fromages",
        "Global / international",
        "Gouda / Edam",
        "Pays-Bas / global",
        "affiné",
        "aged/fermented cheeses",
        "gouda, edam",
        "гауда / эдам"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Pays-Bas / global",
      "cuisine_type": "Global / international",
      "process": "affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 17,
        "high": 25
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 5.1,
        "high": 7.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "gouda, edam",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Gouda jeune < 50 mg/kg; gouda vieux 100-250 mg/kg. L'âge d'affinage change fortement le risque.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_007",
      "names": {
        "fr": "Parmigiano / Grana",
        "en": "parmesan, grana padano",
        "ru": "пармезан / грана"
      },
      "search_terms": [
        "Fromages",
        "Italie",
        "Parmigiano / Grana",
        "aged/fermented cheeses",
        "parmesan, grana padano",
        "très affiné",
        "пармезан / грана"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "très affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 8,
        "high": 15
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.4,
        "typ": 1.6,
        "high": 3
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "parmesan, grana padano",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_008",
      "names": {
        "fr": "Fromages bleus",
        "en": "roquefort, stilton, gorgonzola, bleu",
        "ru": "сыр с плесенью"
      },
      "search_terms": [
        "Fromages",
        "Fromages bleus",
        "Global",
        "Global / international",
        "aged/fermented cheeses",
        "bleu / très affiné",
        "roquefort, stilton, gorgonzola, bleu",
        "сыр с плесенью"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "bleu / très affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 28.9,
        "high": 87.5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.3,
        "typ": 8.7,
        "high": 26.3
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://cjfs.agriculturejournals.cz/pdfs/cjf/2008/06/06.pdf",
      "restaurant_alias": "roquefort, stilton, gorgonzola, bleu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_009",
      "names": {
        "fr": "Bryndza",
        "en": "brynza",
        "ru": "брынза"
      },
      "search_terms": [
        "Bryndza",
        "Europe de l'Est",
        "Fromages",
        "Russie / Europe de l'Est",
        "aged/fermented cheeses",
        "brynza",
        "saumure / brebis",
        "брынза"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Europe de l'Est",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "saumure / brebis",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2,
        "high": 8.72
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.8,
        "high": 3.49
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://www.researchgate.net/publication/287418019_Biogenic_amines_in_ewe%27s_milk_lump_cheese_and_bryndza",
      "restaurant_alias": "brynza",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_010",
      "names": {
        "fr": "Suluguni",
        "en": "suluguni, smoked suluguni",
        "ru": "сулугуни"
      },
      "search_terms": [
        "Fromages",
        "Géorgie / Russie",
        "Russie / Europe de l'Est",
        "Suluguni",
        "aged/fermented cheeses",
        "saumure / parfois fumé",
        "suluguni, smoked suluguni",
        "сулугуни"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Géorgie / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "saumure / parfois fumé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 2,
        "high": 8
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "suluguni, smoked suluguni",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_011",
      "names": {
        "fr": "Viande fraîche",
        "en": "fresh meat",
        "ru": "свежее мясо"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Viande fraîche",
        "Viandes",
        "frais",
        "fresh meat",
        "fresh meat – not restricted",
        "свежее мясо"
      ],
      "family": "Viandes",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "fresh meat",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_012",
      "names": {
        "fr": "Poisson frais",
        "en": "fresh fish",
        "ru": "свежая рыба"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poisson frais",
        "Poissons / fruits de mer",
        "frais",
        "fresh fish",
        "fresh fish – not restricted",
        "свежая рыба"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "fresh fish",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fresh fish – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 275,
          "max": 375,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_013",
      "names": {
        "fr": "Boeuf maturé",
        "en": "dry-aged beef",
        "ru": "выдержанная говядина"
      },
      "search_terms": [
        "Boeuf maturé",
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "dry-aged beef",
        "maturé",
        "smoked/pickled/aged/fermented meats",
        "выдержанная говядина"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "maturé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 6,
        "typ": 9,
        "high": 12
      },
      "portion_standard": {
        "label": "200 g",
        "value": 200.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 12,
        "typ": 18,
        "high": 24
      },
      "confidence": "C",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "dry-aged beef",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 180,
          "max": 300,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 700,
          "unit": "g",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_014",
      "names": {
        "fr": "Saucisson sec fermenté",
        "en": "salami sec, saucisson sec",
        "ru": "сырокопчёная колбаса / салями"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Europe / Russie",
        "Russie / Europe de l'Est",
        "Saucisson sec fermenté",
        "salami sec, saucisson sec",
        "smoked/pickled/aged/fermented meats",
        "séché fermenté",
        "сырокопчёная колбаса / салями"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Europe / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "séché fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 11.18,
        "high": 39.3
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 3.35,
        "high": 11.79
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://diposit.ub.edu/bitstreams/bfbbafbf-031d-47e3-bbb1-946934a7c855/download",
      "restaurant_alias": "salami sec, saucisson sec",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Moyennes 150-200 mg/kg; maximum rapporté 785,22 mg/kg. Catégorie à très forte variabilité.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_015",
      "names": {
        "fr": "Jambon sec non fermenté",
        "en": "prosciutto, jamón serrano",
        "ru": "вяленый окорок"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Europe",
        "Global / international",
        "Jambon sec non fermenté",
        "prosciutto, jamón serrano",
        "smoked/pickled/aged/fermented meats",
        "séché non fermenté",
        "вяленый окорок"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Europe",
      "cuisine_type": "Global / international",
      "process": "séché non fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 3.7
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.4,
        "high": 1.48
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://www.vup.sk/resources/bulletin/jfnr-2012-1-p052-059-paulsen.pdf",
      "restaurant_alias": "prosciutto, jamón serrano",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 80,
          "max": 140,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_016",
      "names": {
        "fr": "Salo",
        "en": "salo simple",
        "ru": "сало"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Russie / Europe de l'Est",
        "Russie / Ukraine",
        "Salo",
        "salo simple",
        "salé",
        "smoked/pickled/aged/fermented meats",
        "сало"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Russie / Ukraine",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 0.3,
        "high": 1.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "salo simple",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_017",
      "names": {
        "fr": "Foie / pâté de foie",
        "en": "liver pate",
        "ru": "печень / паштет"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Europe / Russie",
        "Foie / pâté de foie",
        "Russie / Europe de l'Est",
        "liver / pâté – restricted",
        "liver pate",
        "pâté / abats",
        "печень / паштет"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Europe / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "pâté / abats",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 12,
        "high": 20
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 12,
        "high": 20
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/011909s038lbl.pdf",
      "restaurant_alias": "liver pate",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "liver / pâté – restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 150,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 200,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_018",
      "names": {
        "fr": "Hareng fumé",
        "en": "smoked herring",
        "ru": "копчёная сельдь"
      },
      "search_terms": [
        "Hareng fumé",
        "Nord / Russie",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "fumé",
        "smoked herring",
        "smoked/pickled/aged/fermented fish",
        "копчёная сельдь"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Nord / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fumé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 7.9,
        "typ": 11,
        "high": 14.5
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 5.5,
        "high": 7.25
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://advetresearch.com/index.php/AVR/article/view/1234",
      "restaurant_alias": "smoked herring",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_019",
      "names": {
        "fr": "Hareng mariné",
        "en": "pickled herring",
        "ru": "маринованная сельдь"
      },
      "search_terms": [
        "Hareng mariné",
        "Nord / Russie",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "mariné",
        "pickled herring",
        "smoked/pickled/aged/fermented fish",
        "маринованная сельдь"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Nord / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "mariné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 2,
        "high": 10
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1,
        "high": 5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/011909s038lbl.pdf",
      "restaurant_alias": "pickled herring",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_020",
      "names": {
        "fr": "Saumon fumé à froid",
        "en": "cold-smoked salmon",
        "ru": "холодного копчения лосось"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poissons / fruits de mer",
        "Saumon fumé à froid",
        "cold-smoked salmon",
        "fumé à froid",
        "smoked/pickled/aged/fermented fish",
        "холодного копчения лосось"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "fumé à froid",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2,
        "high": 13
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1,
        "high": 6.5
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "cold-smoked salmon",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_021",
      "names": {
        "fr": "Vobla / poisson séché salé",
        "en": "vobla, taranka",
        "ru": "вобла"
      },
      "search_terms": [
        "Poissons / fruits de mer",
        "Russie",
        "Russie / Europe de l'Est",
        "Vobla / poisson séché salé",
        "smoked/pickled/aged/fermented fish",
        "séché salé",
        "vobla, taranka",
        "вобла"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "séché salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 15,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 4.5,
        "high": 12
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.mdpi.com/2304-8158/13/16/2583",
      "restaurant_alias": "vobla, taranka",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_022",
      "names": {
        "fr": "Poisson fermenté",
        "en": "fermented fish",
        "ru": "ферментированная рыба"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poisson fermenté",
        "Poissons / fruits de mer",
        "fermented fish",
        "fermented fish products",
        "fermenté",
        "ферментированная рыба"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 40,
        "high": 60
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 20,
        "high": 30
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "fermented fish",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_023",
      "names": {
        "fr": "Choucroute",
        "en": "sauerkraut, kvashenaya kapusta",
        "ru": "квашеная капуста"
      },
      "search_terms": [
        "Boissons fermentées",
        "Choucroute",
        "Europe / global",
        "Global / international",
        "fermented vegetables / pickled foods",
        "lacto-fermenté",
        "sauerkraut, kvashenaya kapusta",
        "квашеная капуста"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Europe / global",
      "cuisine_type": "Global / international",
      "process": "lacto-fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 4.4,
        "typ": 17.4,
        "high": 90
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.4,
        "typ": 17.4,
        "high": 90
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814699001314",
      "restaurant_alias": "sauerkraut, kvashenaya kapusta",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Études anciennes 25-89 mg/kg; survey n=121 moyenne 174 mg/kg; stockage prolongé jusqu'à 570 mg/kg.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 100,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_024",
      "names": {
        "fr": "Concombres fermentés",
        "en": "pickled cucumbers, fermented pickles",
        "ru": "солёные огурцы"
      },
      "search_terms": [
        "Concombres fermentés",
        "Est Europe / global",
        "Légumes / fermentés",
        "Russie / Europe de l'Est",
        "fermented vegetables / pickled foods",
        "fermenté",
        "pickled cucumbers, fermented pickles",
        "солёные огурцы"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Est Europe / global",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 4,
        "high": 12
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 4,
        "high": 12
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.bccdc.ca/resource-gallery/Documents/Educational%20Materials/EH/FPS/Food/Fermented/Fermented_Foods_Guidance-3.1_Fermented_Vegetables.pdf",
      "restaurant_alias": "pickled cucumbers, fermented pickles",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_025",
      "names": {
        "fr": "Sauce soja",
        "en": "soy sauce, shoyu",
        "ru": "соевый соус"
      },
      "search_terms": [
        "Asie / global",
        "Global / international",
        "Sauce soja",
        "Soja / légumineuses fermentés",
        "condiment fermenté",
        "fermented soy products",
        "soy sauce, shoyu",
        "соевый соус"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Asie / global",
      "cuisine_type": "Global / international",
      "process": "condiment fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2.9,
        "typ": 15,
        "high": 77.5
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.44,
        "typ": 2.25,
        "high": 11.63
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/pii/S0308814612000660",
      "restaurant_alias": "soy sauce, shoyu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Profils usuels 100-200 mg/L, produits mesurés jusqu'à 793-940 mg/L. 1 c. à s. peut atteindre seuil 6 mg.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_026",
      "names": {
        "fr": "Miso",
        "en": "miso",
        "ru": "мисо"
      },
      "search_terms": [
        "Japon",
        "Japon / global",
        "Miso",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "miso",
        "pâte fermentée",
        "мисо"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon / global",
      "cuisine_type": "Japon",
      "process": "pâte fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 6,
        "high": 17
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.2,
        "high": 3.4
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "miso",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_027",
      "names": {
        "fr": "Natto",
        "en": "natto",
        "ru": "натто"
      },
      "search_terms": [
        "Japon",
        "Natto",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "natto",
        "soja fermenté",
        "натто"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "soja fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 10
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.5,
        "typ": 2.5,
        "high": 5
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "natto",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_028",
      "names": {
        "fr": "Sauce de poisson",
        "en": "fish sauce, nuoc-mâm",
        "ru": "рыбный соус"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Sauce de poisson",
        "Sauces / condiments",
        "condiment fermenté",
        "fermented fish products",
        "fish sauce, nuoc-mâm",
        "рыбный соус"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Asie du Sud-Est",
      "cuisine_type": "Asie du Sud-Est",
      "process": "condiment fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 10,
        "typ": 35,
        "high": 58.8
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 3.5,
        "high": 5.88
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/24779975/",
      "restaurant_alias": "fish sauce, nuoc-mâm",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_029",
      "names": {
        "fr": "Extrait de levure",
        "en": "marmite, vegemite",
        "ru": "дрожжевой экстракт"
      },
      "search_terms": [
        "Extrait de levure",
        "Global",
        "Global / international",
        "Levures / extraits",
        "concentrated yeast extracts",
        "concentré levure",
        "marmite, vegemite",
        "дрожжевой экстракт"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "concentré levure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 32.2,
        "typ": 48,
        "high": 65
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.61,
        "typ": 2.4,
        "high": 3.25
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.researchgate.net/publication/230019742_Histamine_and_Tyramine_Content_of_Yeast_Products",
      "restaurant_alias": "marmite, vegemite",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Anciens extrêmes rapportés ~1500 mg/kg. Portion petite mais produit très concentré.",
      "fda_category": "concentrated yeast extracts",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_030",
      "names": {
        "fr": "Bière bouteille / canette",
        "en": "bottled beer, canned beer",
        "ru": "бутылочное / баночное пиво"
      },
      "search_terms": [
        "Bière bouteille / canette",
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "alcoholic beverages",
        "bière pasteurisée standard",
        "bottled beer, canned beer",
        "бутылочное / баночное пиво"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "bière pasteurisée standard",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.065,
        "high": 0.316
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.21,
        "high": 1.04
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "bottled beer, canned beer",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_031",
      "names": {
        "fr": "Bière pression / live / homebrew",
        "en": "draft beer, live beer, homebrew",
        "ru": "разливное / живое / домашнее пиво"
      },
      "search_terms": [
        "Bière pression / live / homebrew",
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "bière pression / non standardisée",
        "draft beer, live beer, homebrew",
        "tap beer",
        "разливное / живое / домашнее пиво"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "bière pression / non standardisée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2.63,
        "typ": 6,
        "high": 11.29
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 8.68,
        "typ": 19.8,
        "high": 37.26
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "draft beer, live beer, homebrew",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_032",
      "names": {
        "fr": "Vin rouge",
        "en": "red wine",
        "ru": "красное вино"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "Vin rouge",
        "red wine",
        "vin",
        "wine (red)",
        "красное вино"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "vin",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.76,
        "high": 3
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.14,
        "high": 4.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8508579/",
      "restaurant_alias": "red wine",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "wine (red)",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_033",
      "names": {
        "fr": "Vin blanc",
        "en": "white wine",
        "ru": "белое вино"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "Vin blanc",
        "alcoholic beverages",
        "vin",
        "white wine",
        "белое вино"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "vin",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 1
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.mdpi.com/2306-5710/5/1/19",
      "restaurant_alias": "white wine",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_034",
      "names": {
        "fr": "Kvas de pain",
        "en": "bread kvass",
        "ru": "квас"
      },
      "search_terms": [
        "Boissons fermentées",
        "Kvas de pain",
        "Russie / Est Europe",
        "Russie / Europe de l'Est",
        "boisson fermentée",
        "bread kvass",
        "fermented beverages",
        "квас"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Russie / Est Europe",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "boisson fermentée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": null,
        "typ": 0.2,
        "high": 0.5
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 0.5,
        "high": 1.25
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.cambridge.org/core/journals/nutrition-research-reviews/article/traditional-lowalcoholic-and-nonalcoholic-fermented-beverages-consumed-in-european-countries-a-neglected-food-group/F7DBC2D563B72D393E1EC47F4B228877",
      "restaurant_alias": "bread kvass",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 200,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 250,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 450,
          "max": 620,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_035",
      "names": {
        "fr": "Kvas de betterave",
        "en": "beet kvass",
        "ru": "свекольный квас"
      },
      "search_terms": [
        "Boissons fermentées",
        "Kvas de betterave",
        "Russie / Est Europe",
        "Russie / Europe de l'Est",
        "beet kvass",
        "boisson fermentée",
        "fermented beverages",
        "свекольный квас"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Russie / Est Europe",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "boisson fermentée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": null,
        "typ": 0.4,
        "high": 1
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1,
        "high": 2.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.researchgate.net/publication/343971931_Effects_of_Salt_and_Garlic_Concentration_on_The_Microbial_Safety_Biochemical_Properties_and_Sensory_Acceptance_of_Spontaneously_Fermented_Beet_Kvass",
      "restaurant_alias": "beet kvass",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 200,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 250,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 450,
          "max": 620,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_036",
      "names": {
        "fr": "Pulpe de banane",
        "en": "banana pulp",
        "ru": "банан"
      },
      "search_terms": [
        "Fruits",
        "Global",
        "Global / international",
        "Pulpe de banane",
        "banana pulp",
        "fresh fruit – not restricted",
        "fruit",
        "банан"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "fruit",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.2
      },
      "portion_standard": {
        "label": "120 g",
        "value": 120.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.06,
        "high": 0.24
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://www.psychiatrist.com/pdf/dietary-restrictions-and-drug-interactions-with-monoamine-oxidase-inhibitors-an-update-pdf/",
      "restaurant_alias": "banana pulp",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fresh fruit – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 140,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_037",
      "names": {
        "fr": "Peau de banane",
        "en": "banana peel",
        "ru": "банановая кожура"
      },
      "search_terms": [
        "Fruits",
        "Global",
        "Global / international",
        "Peau de banane",
        "banana peel",
        "overripe fruits",
        "peau",
        "банановая кожура"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "peau",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "1 peau",
        "value": 1.0,
        "unit": "peau"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 3,
        "high": 6
      },
      "confidence": "C",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8889911/",
      "restaurant_alias": "banana peel",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "overripe fruits",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 0.5,
          "max": 1,
          "unit": "peau",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 1,
          "max": 1,
          "unit": "peau",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 2,
          "max": 3,
          "unit": "peau",
          "featured": false
        },
        "default_qty": 1,
        "step": 0.5
      }
    },
    {
      "id": "TYR_038",
      "names": {
        "fr": "Avocat très mûr",
        "en": "very ripe avocado",
        "ru": "очень спелый авокадо"
      },
      "search_terms": [
        "Avocat très mûr",
        "Fruits",
        "Global",
        "Global / international",
        "fruit très mûr",
        "overripe fruits",
        "very ripe avocado",
        "очень спелый авокадо"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "fruit très mûr",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "75 g",
        "value": 75.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 0.38,
        "high": 1.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "very ripe avocado",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "overripe fruits",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 90,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 190,
          "unit": "g",
          "featured": false
        },
        "default_qty": 75,
        "step": 5
      }
    },
    {
      "id": "TYR_039",
      "names": {
        "fr": "Chocolat noir",
        "en": "dark chocolate",
        "ru": "тёмный шоколад"
      },
      "search_terms": [
        "Chocolat noir",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "condiments – not restricted",
        "dark chocolate",
        "transformé",
        "тёмный шоколад"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "transformé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.3
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.03,
        "high": 0.09
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/011909s038lbl.pdf",
      "restaurant_alias": "dark chocolate",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_040",
      "names": {
        "fr": "Fèves / gousses de fèves",
        "en": "fava beans, broad beans",
        "ru": "бобы / стручки бобов"
      },
      "search_terms": [
        "Fèves / gousses de fèves",
        "Fèves / légumineuses",
        "Global",
        "Global / international",
        "fava beans, broad beans",
        "fava/broad beans (L-DOPA mechanism)",
        "légumineuse",
        "бобы / стручки бобов"
      ],
      "family": "Fèves / légumineuses",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "légumineuse",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": null,
        "high": null
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2007/011909s038lbl.pdf",
      "restaurant_alias": "fava beans, broad beans",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": true
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fava/broad beans (L-DOPA mechanism)",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_041",
      "names": {
        "fr": "Salami / pepperoni",
        "en": "pizza pepperoni, salami piccante",
        "ru": "салями / пепперони"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Italie / global",
        "Salami / pepperoni",
        "pizza pepperoni, salami piccante",
        "smoked/pickled/aged/fermented meats",
        "séché fermenté",
        "салями / пепперони"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie / global",
      "cuisine_type": "Italie",
      "process": "séché fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 19.77,
        "high": 51
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 5.93,
        "high": 15.3
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814612011612",
      "restaurant_alias": "pizza pepperoni, salami piccante",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Couvert par la catégorie saucisse fermentée : moyennes 150-200 mg/kg, maximum 785 mg/kg.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_042",
      "names": {
        "fr": "Sucuk / sudjuk",
        "en": "sujuk, sucuk, sudzhuk",
        "ru": "суджук / суджук"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Russie / Europe de l'Est",
        "Sucuk / sudjuk",
        "Turquie / Caucase / Russie",
        "smoked/pickled/aged/fermented meats",
        "sujuk, sucuk, sudzhuk",
        "séché fermenté",
        "суджук / суджук"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Turquie / Caucase / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "séché fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.24,
        "typ": 20,
        "high": 67.6
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.07,
        "typ": 6,
        "high": 20.28
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0956713507001880",
      "restaurant_alias": "sujuk, sucuk, sudzhuk",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_043",
      "names": {
        "fr": "Pastirma / basturma",
        "en": "basturma, bastirma, pastirma",
        "ru": "пастрома / бастурма"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Pastirma / basturma",
        "Russie / Europe de l'Est",
        "Turquie / Arménie / Caucase",
        "basturma, bastirma, pastirma",
        "smoked/pickled/aged/fermented meats",
        "séché / épicé / maturé",
        "пастрома / бастурма"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Turquie / Arménie / Caucase",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "séché / épicé / maturé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 6,
        "high": 18
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.8,
        "high": 5.4
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.mdpi.com/2304-8158/13/16/2583",
      "restaurant_alias": "basturma, bastirma, pastirma",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_044",
      "names": {
        "fr": "Coppa / capocollo",
        "en": "coppa, capocollo",
        "ru": "коппа"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Coppa / capocollo",
        "Italie",
        "coppa, capocollo",
        "smoked/pickled/aged/fermented meats",
        "séché non fermenté",
        "коппа"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "séché non fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2,
        "high": 6
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.6,
        "high": 1.8
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.vup.sk/resources/bulletin/jfnr-2012-1-p052-059-paulsen.pdf",
      "restaurant_alias": "coppa, capocollo",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_045",
      "names": {
        "fr": "Bresaola",
        "en": "bresaola",
        "ru": "брезаола"
      },
      "search_terms": [
        "Bresaola",
        "Charcuteries / viandes affinées",
        "Italie",
        "bresaola",
        "smoked/pickled/aged/fermented meats",
        "séché non fermenté",
        "брезаола"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "séché non fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 4
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.4,
        "high": 1.6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.vup.sk/resources/bulletin/jfnr-2012-1-p052-059-paulsen.pdf",
      "restaurant_alias": "bresaola",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 80,
          "max": 140,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_046",
      "names": {
        "fr": "Anchois salés",
        "en": "anchovies",
        "ru": "анчоусы"
      },
      "search_terms": [
        "Anchois salés",
        "Méditerranée",
        "Poissons / fruits de mer",
        "anchovies",
        "salé / maturé",
        "smoked/pickled/aged/fermented fish",
        "анчоусы"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "salé / maturé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 10,
        "high": 30
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.5,
        "high": 4.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "anchovies",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Pons-Sánchez-Cascado 2005a : jusqu'à 90 mg/kg. Outlier classique Mietz-Karmas 1977 jusqu'à 783 mg/kg.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_047",
      "names": {
        "fr": "Maquereau fumé",
        "en": "smoked mackerel",
        "ru": "копчёная скумбрия"
      },
      "search_terms": [
        "Europe / Russie",
        "Maquereau fumé",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "fumé",
        "smoked mackerel",
        "smoked/pickled/aged/fermented fish",
        "копчёная скумбрия"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Europe / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fumé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 6,
        "high": 18
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 3,
        "high": 9
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "smoked mackerel",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_048",
      "names": {
        "fr": "Sprats fumés",
        "en": "sprats",
        "ru": "шпроты"
      },
      "search_terms": [
        "Baltique / Russie",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "Sprats fumés",
        "fumé en conserve",
        "smoked/pickled/aged/fermented fish",
        "sprats",
        "шпроты"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Baltique / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fumé en conserve",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 4,
        "high": 12
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 2,
        "high": 6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "sprats",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_049",
      "names": {
        "fr": "Omul fumé",
        "en": "smoked omul",
        "ru": "омуль горячего/холодного копчения"
      },
      "search_terms": [
        "Global / international",
        "Omul fumé",
        "Poissons / fruits de mer",
        "Sibérie",
        "fumé",
        "smoked omul",
        "smoked/pickled/aged/fermented fish",
        "омуль горячего/холодного копчения"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Sibérie",
      "cuisine_type": "Global / international",
      "process": "fumé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 2.5,
        "high": 7.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "smoked omul",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_050",
      "names": {
        "fr": "Kimchi",
        "en": "baechu kimchi, kkakdugi, pa kimchi",
        "ru": "кимчхи"
      },
      "search_terms": [
        "Corée",
        "Corée / global restaurant",
        "Kimchi",
        "Sauces / condiments",
        "baechu kimchi, kkakdugi, pa kimchi",
        "fermented vegetables / pickled foods",
        "lacto-fermenté avec condiments",
        "кимчхи"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Corée / global restaurant",
      "cuisine_type": "Corée",
      "process": "lacto-fermenté avec condiments",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 5,
        "high": 15
      },
      "confidence": "C",
      "note_type": "prudente",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "baechu kimchi, kkakdugi, pa kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 100,
          "max": 200,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 400,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_051",
      "names": {
        "fr": "Gochujang",
        "en": "gochujang",
        "ru": "кочуджан"
      },
      "search_terms": [
        "Corée",
        "Gochujang",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "gochujang",
        "pâte fermentée",
        "кочуджан"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "pâte fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.215,
        "typ": 2.5,
        "high": 5.234
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.04,
        "typ": 0.5,
        "high": 1.05
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.mdpi.com/2304-8158/10/10/2370",
      "restaurant_alias": "gochujang",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_052",
      "names": {
        "fr": "Doenjang",
        "en": "doenjang",
        "ru": "твенджан / 된장"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Corée",
        "Doenjang",
        "doenjang",
        "fermented soy products",
        "pâte fermentée artisanale",
        "твенджан / 된장"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "pâte fermentée artisanale",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 8,
        "high": 25
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.6,
        "high": 5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/38002142/",
      "restaurant_alias": "doenjang",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 40,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_053",
      "names": {
        "fr": "Cheonggukjang",
        "en": "cheonggukjang",
        "ru": "청국장"
      },
      "search_terms": [
        "Cheonggukjang",
        "Corée",
        "Soja / légumineuses fermentés",
        "cheonggukjang",
        "fermented soy products",
        "soja fermenté",
        "청국장"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "soja fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 45.74,
        "high": 140
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 9.15,
        "high": 28
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.mdpi.com/2304-8158/9/7/915",
      "restaurant_alias": "cheonggukjang",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_054",
      "names": {
        "fr": "Tamari / shoyu",
        "en": "tamari, shoyu",
        "ru": "тамари / сёю"
      },
      "search_terms": [
        "Japon",
        "Japon / global",
        "Soja / légumineuses fermentés",
        "Tamari / shoyu",
        "fermented soy products",
        "sauce soja fermentée",
        "tamari, shoyu",
        "тамари / сёю"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon / global",
      "cuisine_type": "Japon",
      "process": "sauce soja fermentée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2.9,
        "typ": 15,
        "high": 77.5
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.44,
        "typ": 2.25,
        "high": 11.63
      },
      "confidence": "B",
      "note_type": "prudente",
      "source_url": "https://www.sciencedirect.com/science/article/pii/S0308814612000660",
      "restaurant_alias": "tamari, shoyu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_055",
      "names": {
        "fr": "Doubanjiang",
        "en": "doubanjiang, chili bean paste",
        "ru": "дубаньцзян"
      },
      "search_terms": [
        "Chine / Taïwan",
        "Chine / restaurant",
        "Doubanjiang",
        "Soja / légumineuses fermentés",
        "doubanjiang, chili bean paste",
        "fermented soy products",
        "pâte fèves fermentée",
        "дубаньцзян"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine / restaurant",
      "cuisine_type": "Chine / Taïwan",
      "process": "pâte fèves fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 6,
        "high": 20
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.2,
        "high": 4
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "doubanjiang, chili bean paste",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_056",
      "names": {
        "fr": "Sambal fermenté / belacan",
        "en": "sambal belacan, shrimp paste sambal",
        "ru": "самбал / белачан"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Sambal fermenté / belacan",
        "Sauces / condiments",
        "condiment fermenté",
        "fermented condiments – caution",
        "sambal belacan, shrimp paste sambal",
        "самбал / белачан"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Asie du Sud-Est",
      "cuisine_type": "Asie du Sud-Est",
      "process": "condiment fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 8,
        "high": 25
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.2,
        "high": 3.75
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/24779975/",
      "restaurant_alias": "sambal belacan, shrimp paste sambal",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented condiments – caution",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 6,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 30,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_057",
      "names": {
        "fr": "Pâte de crevettes fermentée",
        "en": "shrimp paste, belacan, bagoong",
        "ru": "креветочная паста"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Pâte de crevettes fermentée",
        "Sauces / condiments",
        "fermented fish products",
        "fermenté",
        "shrimp paste, belacan, bagoong",
        "креветочная паста"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Asie du Sud-Est",
      "cuisine_type": "Asie du Sud-Est",
      "process": "fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 15,
        "high": 40
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.5,
        "high": 4
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/24779975/",
      "restaurant_alias": "shrimp paste, belacan, bagoong",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_058",
      "names": {
        "fr": "Huîtres / sauce huître fermentée",
        "en": "oyster sauce",
        "ru": "устричный соус"
      },
      "search_terms": [
        "Asie / global",
        "Global / international",
        "Huîtres / sauce huître fermentée",
        "Sauces / condiments",
        "condiment fermenté",
        "fermented condiments – caution",
        "oyster sauce",
        "устричный соус"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Asie / global",
      "cuisine_type": "Global / international",
      "process": "condiment fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": null,
        "typ": 3,
        "high": 10
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 0.45,
        "high": 1.5
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "oyster sauce",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented condiments – caution",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 6,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 30,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 45,
          "max": 60,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_059",
      "names": {
        "fr": "Tempeh",
        "en": "tempeh",
        "ru": "темпе"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Indonésie / global",
        "Soja / légumineuses fermentés",
        "Tempeh",
        "fermented soy products",
        "soja fermenté",
        "tempeh",
        "темпе"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Indonésie / global",
      "cuisine_type": "Asie du Sud-Est",
      "process": "soja fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 2,
        "high": 8
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 2,
        "high": 8
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.sciencedirect.com/science/article/pii/S0308814614016823",
      "restaurant_alias": "tempeh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_060",
      "names": {
        "fr": "Sufu / tofu fermenté",
        "en": "fermented tofu, sufu, stinky tofu",
        "ru": "суфу / ферментированный тофу"
      },
      "search_terms": [
        "Chine",
        "Chine / Taïwan",
        "Soja / légumineuses fermentés",
        "Sufu / tofu fermenté",
        "fermented soy products",
        "fermented tofu, sufu, stinky tofu",
        "soja fermenté",
        "суфу / ферментированный тофу"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "soja fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 8,
        "high": 20
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 2.4,
        "high": 6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.sciencedirect.com/science/article/pii/S0308814614016823",
      "restaurant_alias": "fermented tofu, sufu, stinky tofu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_061",
      "names": {
        "fr": "Olives de table artisanales",
        "en": "table olives",
        "ru": "оливки"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Méditerranée",
        "Olives de table artisanales",
        "fermented vegetables / pickled foods",
        "saumure fermentée",
        "table olives",
        "оливки"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "saumure fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 1
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.06,
        "high": 0.3
      },
      "confidence": "C",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/11252482/",
      "restaurant_alias": "table olives",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_062",
      "names": {
        "fr": "Câpres / caperberries",
        "en": "capers, caperberries",
        "ru": "каперсы"
      },
      "search_terms": [
        "Câpres / caperberries",
        "Légumes / fermentés",
        "Méditerranée",
        "capers, caperberries",
        "fermented vegetables / pickled foods",
        "saumure",
        "каперсы"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 1
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.03,
        "high": 0.15
      },
      "confidence": "C",
      "note_type": "prudente",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/11252482/",
      "restaurant_alias": "capers, caperberries",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_063",
      "names": {
        "fr": "Concombres lacto-fermentés maison",
        "en": "starter-culture gherkins",
        "ru": "домашние солёные огурцы"
      },
      "search_terms": [
        "Concombres lacto-fermentés maison",
        "Est Europe / Russie",
        "Légumes / fermentés",
        "Russie / Europe de l'Est",
        "fermented vegetables / pickled foods",
        "fermenté maison",
        "starter-culture gherkins",
        "домашние солёные огурцы"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Est Europe / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fermenté maison",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.35,
        "high": 0.485
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.35,
        "high": 0.49
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6675860/",
      "restaurant_alias": "starter-culture gherkins",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_064",
      "names": {
        "fr": "Halloumi / fromage en saumure",
        "en": "halloumi, white brined cheese",
        "ru": "халлуми"
      },
      "search_terms": [
        "Fromages",
        "Halloumi / fromage en saumure",
        "Levant / Méditerranée",
        "Moyen-Orient / Maghreb",
        "aged/fermented cheeses",
        "halloumi, white brined cheese",
        "saumure",
        "халлуми"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Levant / Méditerranée",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2,
        "high": 8
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.8,
        "high": 3.2
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "halloumi, white brined cheese",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_065",
      "names": {
        "fr": "Labneh très égoutté / affiné",
        "en": "labneh",
        "ru": "лабне"
      },
      "search_terms": [
        "Labneh très égoutté / affiné",
        "Levant",
        "Moyen-Orient / Maghreb",
        "Produits laitiers",
        "fermented dairy – low concern",
        "labneh",
        "lait fermenté concentré",
        "лабне"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Levant",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "lait fermenté concentré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 4
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.4,
        "high": 1.6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://psychotropical.com/wp-content/uploads/2017/12/MAOI_diet_drug_interactions_2016.pdf",
      "restaurant_alias": "labneh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_066",
      "names": {
        "fr": "Makdous",
        "en": "makdous",
        "ru": "макдус"
      },
      "search_terms": [
        "Levant",
        "Légumes / fermentés",
        "Makdous",
        "Moyen-Orient / Maghreb",
        "aubergine fermentée / farcie",
        "fermented vegetables / pickled foods",
        "makdous",
        "макдус"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Levant",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "aubergine fermentée / farcie",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 4,
        "high": 12
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 3.2,
        "high": 9.6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "makdous",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_067",
      "names": {
        "fr": "Jerky artisanal",
        "en": "beef jerky, dried meat snack",
        "ru": "джерки"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "Jerky artisanal",
        "beef jerky, dried meat snack",
        "smoked/pickled/aged/fermented meats",
        "séché",
        "джерки"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "séché",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 10,
        "high": 57.6
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 3,
        "high": 17.28
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://www.mdpi.com/2304-8158/14/11/1842",
      "restaurant_alias": "beef jerky, dried meat snack",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": null,
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_068",
      "names": {
        "fr": "Kombucha alcoolisé / hard kombucha",
        "en": "hard kombucha",
        "ru": "хард комбуча"
      },
      "search_terms": [
        "Boissons fermentées",
        "Global / international",
        "Global craft",
        "Kombucha alcoolisé / hard kombucha",
        "fermented beverages",
        "fermenté",
        "hard kombucha",
        "хард комбуча"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Global craft",
      "cuisine_type": "Global / international",
      "process": "fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": null,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.65,
        "high": 6.6
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.efsa.europa.eu/en/efsajournal/pub/2393",
      "restaurant_alias": "hard kombucha",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": null,
      "fda_category": "fermented beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 590,
          "max": 820,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_069",
      "names": {
        "fr": "Boisson distillée standardisée",
        "en": "vodka, gin, white rum",
        "ru": "водка / gin / rhum blanc"
      },
      "search_terms": [
        "Boisson distillée standardisée",
        "Boissons fermentées",
        "Global",
        "Global / international",
        "alcoholic beverages",
        "distillé",
        "vodka, gin, white rum",
        "водка / gin / rhum blanc"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "distillé",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.2
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.08
      },
      "confidence": "D",
      "note_type": "prudente",
      "source_url": "https://www.ages.at/en/human/nutrition-food/residues-contaminants-from-a-to-z/biogenic-amines",
      "restaurant_alias": "vodka, gin, white rum",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": null,
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_070",
      "names": {
        "fr": "Féta",
        "en": "feta, salade grecque",
        "ru": "фета"
      },
      "search_terms": [
        "Fromages",
        "Féta",
        "Grèce / global",
        "Méditerranée",
        "aged/fermented cheeses",
        "feta, salade grecque",
        "saumure affinée",
        "фета"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Grèce / global",
      "cuisine_type": "Méditerranée",
      "process": "saumure affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 31,
        "high": 310.11
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 9.3,
        "high": 93
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/34551335/",
      "restaurant_alias": "feta, salade grecque",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Kandasamy 2021 : échantillon à 310 mg/kg. Suffit seul pour signal rouge conservateur.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_071",
      "names": {
        "fr": "Gruyère AOP",
        "en": "gruyère, fondue",
        "ru": "грюйер"
      },
      "search_terms": [
        "France / francophone",
        "Fromages",
        "Gruyère AOP",
        "Suisse / France",
        "aged/fermented cheeses",
        "gruyère, fondue",
        "pâte pressée cuite affinée",
        "грюйер"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Suisse / France",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 5,
        "high": 10
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1.5,
        "high": 3
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "gruyère, fondue",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "< 100 mg/kg dans les données résumées par Gillman. Risque inférieur à bleus/féta mais pas 'sûr'.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_072",
      "names": {
        "fr": "Emmental",
        "en": "emmental, swiss cheese",
        "ru": "эмменталь"
      },
      "search_terms": [
        "Emmental",
        "France / francophone",
        "Fromages",
        "Suisse / France / global",
        "aged/fermented cheeses",
        "emmental, swiss cheese",
        "pâte pressée cuite affinée",
        "эмменталь"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Suisse / France / global",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.86,
        "typ": 20,
        "high": 40.3
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.26,
        "typ": 6,
        "high": 12.1
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769487/",
      "restaurant_alias": "emmental, swiss cheese",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Pillonel 2003 : 8,6-403 mg/kg selon origine et affinage. Très variable.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_073",
      "names": {
        "fr": "Anchois marinés au vinaigre",
        "en": "boquerones en vinagre",
        "ru": "анчоусы маринованные в уксусе"
      },
      "search_terms": [
        "Anchois marinés au vinaigre",
        "Boissons alcoolisées",
        "Méditerranée",
        "boquerones en vinagre",
        "condiments – not restricted",
        "mariné vinaigre",
        "анчоусы маринованные в уксусе"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "mariné vinaigre",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 0.8,
        "high": 7.81
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 0.16,
        "high": 1.56
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/16091324/",
      "restaurant_alias": "boquerones en vinagre",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Pons-Sánchez-Cascado 2005b : 7,81 mg/kg. Beaucoup plus bas que anchois salés.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 40,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_074",
      "names": {
        "fr": "Hareng peu salé longue conservation",
        "en": "малосольная сельдь",
        "ru": "малосольная сельдь длительного хранения"
      },
      "search_terms": [
        "Hareng peu salé longue conservation",
        "Nord / Russie",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "peu salé maturé",
        "smoked/pickled/aged/fermented fish",
        "малосольная сельдь",
        "малосольная сельдь длительного хранения"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Nord / Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "peu salé maturé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 15,
        "high": 31.8
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 7.5,
        "high": 15.9
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527013/",
      "restaurant_alias": "малосольная сельдь",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fonberg-Broczek 2003 : jusqu'à 318 mg/kg après 6 semaines. Fort risque si maison.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_075",
      "names": {
        "fr": "Laits fermentés probiotiques (étude expérimentale)",
        "en": "probiotic fermented milk",
        "ru": "пробиотические кисломолочные продукты"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global / international",
        "Global expérimental",
        "Laits fermentés probiotiques (étude expérimentale)",
        "fermentation souches spécifiques",
        "fermented dairy – low concern",
        "probiotic fermented milk",
        "пробиотические кисломолочные продукты"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global expérimental",
      "cuisine_type": "Global / international",
      "process": "fermentation souches spécifiques",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 24.96,
        "typ": 29,
        "high": 33.71
      },
      "portion_standard": {
        "label": "200 g",
        "value": 200.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 49.9,
        "typ": 58,
        "high": 67.4
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/25766125/",
      "restaurant_alias": "probiotic fermented milk",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Costa 2015 : 249-337 mg/kg en conditions expérimentales. Ne PAS extrapoler au kéfir industriel.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 250,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 600,
          "unit": "g",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_076",
      "names": {
        "fr": "Fromage semi-dur russe Rossiïski (proxy)",
        "en": "российский, russian semi-hard cheese",
        "ru": "российский сыр"
      },
      "search_terms": [
        "Fromage semi-dur russe Rossiïski (proxy)",
        "Fromages",
        "Russie",
        "Russie / Europe de l'Est",
        "aged/fermented cheeses",
        "semi-dur affiné (proxy)",
        "российский сыр",
        "российский, russian semi-hard cheese"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "semi-dur affiné (proxy)",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 17,
        "high": 25
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 5.1,
        "high": 7.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "российский, russian semi-hard cheese",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy Gouda/Edam (TYR_006). Données directes russes insuffisantes.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_077",
      "names": {
        "fr": "Ryazhenka",
        "en": "ряженка, ryazhenka",
        "ru": "ряженка"
      },
      "search_terms": [
        "Boissons fermentées",
        "Russie / Europe de l'Est",
        "Russie / Ukraine",
        "Ryazhenka",
        "fermented dairy – low concern",
        "lait cuit fermenté",
        "ряженка",
        "ряженка, ryazhenka"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Russie / Ukraine",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "lait cuit fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": null,
        "typ": null,
        "high": null
      },
      "confidence": "D",
      "note_type": "donnée manquante",
      "source_url": null,
      "restaurant_alias": "ряженка, ryazhenka",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Aucune donnée quantitative directe. Prudence forte par défaut.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 200,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 250,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 450,
          "max": 620,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_078",
      "names": {
        "fr": "Gruyère vieux/réserve 15+ mois",
        "en": "vieux gruyère, gruyère réserve",
        "ru": "грюйер выдержанный"
      },
      "search_terms": [
        "Allemagne / Suisse",
        "Fromages",
        "Gruyère vieux/réserve 15+ mois",
        "Suisse",
        "aged/fermented cheeses",
        "pâte pressée cuite affinée 15+ mois",
        "vieux gruyère, gruyère réserve",
        "грюйер выдержанный"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Suisse",
      "cuisine_type": "Allemagne / Suisse",
      "process": "pâte pressée cuite affinée 15+ mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 18,
        "high": 50
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 5.4,
        "high": 15
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769487/",
      "restaurant_alias": "vieux gruyère, gruyère réserve",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Pillonel 2003 : affinage long augmente tyramine jusqu'à 500 mg/kg sur outliers.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_079",
      "names": {
        "fr": "Comté AOP jeune 6-12 mois",
        "en": "young comté",
        "ru": "конте молодой"
      },
      "search_terms": [
        "Comté AOP jeune 6-12 mois",
        "France / francophone",
        "France Jura",
        "Fromages",
        "aged/fermented cheeses",
        "pâte pressée cuite jeune",
        "young comté",
        "конте молодой"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Jura",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite jeune",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.5,
        "high": 4.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "young comté",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy Gruyère jeune. Affinage court limite l'accumulation.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_080",
      "names": {
        "fr": "Comté AOP vieux 18-24 mois",
        "en": "aged comté",
        "ru": "конте выдержанный"
      },
      "search_terms": [
        "Comté AOP vieux 18-24 mois",
        "France / francophone",
        "France Jura",
        "Fromages",
        "aged comté",
        "aged/fermented cheeses",
        "pâte pressée cuite affinée",
        "конте выдержанный"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Jura",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6,
        "high": 12
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "aged comté",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy Gruyère vieux. Affinage long = risque élevé.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_081",
      "names": {
        "fr": "Comté extra-vieux 36+ mois",
        "en": "extra-aged comté",
        "ru": "конте экстра выдержанный"
      },
      "search_terms": [
        "Comté extra-vieux 36+ mois",
        "France / francophone",
        "France Jura",
        "Fromages",
        "aged/fermented cheeses",
        "extra-aged comté",
        "pâte pressée cuite très affinée",
        "конте экстра выдержанный"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Jura",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite très affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 50,
        "high": 120
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 15,
        "high": 36
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "extra-aged comté",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy fromages long affinage. Noir absolu en 30g.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_082",
      "names": {
        "fr": "Beaufort d'alpage AOP",
        "en": "beaufort alpage",
        "ru": "бофор"
      },
      "search_terms": [
        "Beaufort d'alpage AOP",
        "France / francophone",
        "France Savoie",
        "Fromages",
        "aged/fermented cheeses",
        "beaufort alpage",
        "pâte pressée cuite alpage",
        "бофор"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Savoie",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée cuite alpage",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 22,
        "high": 60
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6.6,
        "high": 18
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "beaufort alpage",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy pâtes pressées cuites long affinage.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_083",
      "names": {
        "fr": "Appenzeller",
        "en": "appenzeller",
        "ru": "аппенцеллер"
      },
      "search_terms": [
        "Allemagne / Suisse",
        "Appenzeller",
        "Fromages",
        "Suisse",
        "aged/fermented cheeses",
        "appenzeller",
        "pâte pressée cuite croûte lavée",
        "аппенцеллер"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Suisse",
      "cuisine_type": "Allemagne / Suisse",
      "process": "pâte pressée cuite croûte lavée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 4.5,
        "high": 12
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769487/",
      "restaurant_alias": "appenzeller",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Données Pillonel 2003 proches Gruyère/Emmental.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_084",
      "names": {
        "fr": "Cheddar jeune 3 mois",
        "en": "mild cheddar, young cheddar",
        "ru": "чеддер молодой"
      },
      "search_terms": [
        "Cheddar jeune 3 mois",
        "Fromages",
        "Royaume-Uni / Irlande",
        "UK / global",
        "aged/fermented cheeses",
        "mild cheddar, young cheddar",
        "pâte pressée non cuite jeune",
        "чеддер молодой"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "UK / global",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "pâte pressée non cuite jeune",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2.5,
        "high": 8
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.75,
        "high": 2.4
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "mild cheddar, young cheddar",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Gillman : jeunes cheddars < 50 mg/kg. Réhabilité vs notice FDA historique.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_085",
      "names": {
        "fr": "Cheddar extra-mature/vintage 18-36 mois",
        "en": "vintage cheddar, extra-mature",
        "ru": "чеддер винтаж"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Cheddar extra-mature/vintage 18-36 mois",
        "Royaume-Uni / Irlande",
        "UK / global",
        "aged/fermented cheeses",
        "pâte pressée non cuite très affinée",
        "vintage cheddar, extra-mature",
        "чеддер винтаж"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "UK / global",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "pâte pressée non cuite très affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 160
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 12,
        "high": 48
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "vintage cheddar, extra-mature",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Affinage long : Gillman jusqu'à 160 mg/kg à 36 semaines.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_086",
      "names": {
        "fr": "Gouda vieux/oud 2-4 ans",
        "en": "oud gouda, aged gouda",
        "ru": "гауда выдержанная"
      },
      "search_terms": [
        "Fromages",
        "Global / international",
        "Gouda vieux/oud 2-4 ans",
        "Pays-Bas",
        "aged/fermented cheeses",
        "oud gouda, aged gouda",
        "pâte pressée non cuite très affinée",
        "гауда выдержанная"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Pays-Bas",
      "cuisine_type": "Global / international",
      "process": "pâte pressée non cuite très affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 100,
        "high": 250
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 12,
        "typ": 30,
        "high": 75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "oud gouda, aged gouda",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Gillman : gouda vieux 100-250 mg/kg. Noir absolu.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_087",
      "names": {
        "fr": "Cantal entre-deux/vieux AOP",
        "en": "cantal entre-deux, cantal vieux",
        "ru": "канталь"
      },
      "search_terms": [
        "Cantal entre-deux/vieux AOP",
        "France / francophone",
        "France Auvergne",
        "Fromages",
        "aged/fermented cheeses",
        "cantal entre-deux, cantal vieux",
        "pâte pressée non cuite affinée",
        "канталь"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Auvergne",
      "cuisine_type": "France / francophone",
      "process": "pâte pressée non cuite affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 15,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 4.5,
        "high": 12
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "cantal entre-deux, cantal vieux",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy pâtes pressées non cuites moyennes.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_088",
      "names": {
        "fr": "Manchego curado/viejo DOP",
        "en": "manchego curado, manchego viejo",
        "ru": "манчего"
      },
      "search_terms": [
        "Espagne",
        "Espagne La Mancha",
        "Fromages",
        "Manchego curado/viejo DOP",
        "aged/fermented cheeses",
        "brebis pâte pressée affinée",
        "manchego curado, manchego viejo",
        "манчего"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Espagne La Mancha",
      "cuisine_type": "Espagne",
      "process": "brebis pâte pressée affinée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 25,
        "high": 80
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 7.5,
        "high": 24
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "manchego curado, manchego viejo",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Novella-Rodríguez 2000-2004 : long affinage brebis augmente tyramine.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_089",
      "names": {
        "fr": "Pecorino Romano DOP",
        "en": "pecorino romano, pecorino",
        "ru": "пекорино романо"
      },
      "search_terms": [
        "Fromages",
        "Italie",
        "Italie Lazio/Sardaigne",
        "Pecorino Romano DOP",
        "aged/fermented cheeses",
        "brebis pâte pressée cuite salée",
        "pecorino romano, pecorino",
        "пекорино романо"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie Lazio/Sardaigne",
      "cuisine_type": "Italie",
      "process": "brebis pâte pressée cuite salée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 50,
        "high": 150
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 10,
        "high": 30
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "pecorino romano, pecorino",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fromage brebis très salé long affinage. Outliers élevés.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_090",
      "names": {
        "fr": "Pecorino Sardo vieux",
        "en": "pecorino sardo stagionato",
        "ru": "пекорино сардо"
      },
      "search_terms": [
        "Fromages",
        "Italie",
        "Italie Sardaigne",
        "Pecorino Sardo vieux",
        "aged/fermented cheeses",
        "brebis affinage long",
        "pecorino sardo stagionato",
        "пекорино сардо"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie Sardaigne",
      "cuisine_type": "Italie",
      "process": "brebis affinage long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 70,
        "high": 200
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 21,
        "high": 60
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "pecorino sardo stagionato",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy Pecorino Romano long affinage.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_091",
      "names": {
        "fr": "Parmigiano Reggiano 24 mois DOP",
        "en": "parmigiano 24 mois, parmesan",
        "ru": "пармезан 24 месяца"
      },
      "search_terms": [
        "Fromages",
        "Italie",
        "Parmigiano Reggiano 24 mois DOP",
        "aged/fermented cheeses",
        "parmigiano 24 mois, parmesan",
        "pâte très dure cuite",
        "пармезан 24 месяца"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "pâte très dure cuite",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 100
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 6,
        "high": 20
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "parmigiano 24 mois, parmesan",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Suivi Gillman. Outliers extrêmes reportés sur long affinage.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_092",
      "names": {
        "fr": "Grana Padano stravecchio 36+ mois",
        "en": "grana stravecchio",
        "ru": "грана падано старший"
      },
      "search_terms": [
        "Fromages",
        "Grana Padano stravecchio 36+ mois",
        "Italie",
        "aged/fermented cheeses",
        "grana stravecchio",
        "pâte très dure long affinage",
        "грана падано старший"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "pâte très dure long affinage",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 80,
        "high": 250
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 16,
        "high": 50
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "grana stravecchio",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Long affinage >30 mois : accumulation majeure.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_093",
      "names": {
        "fr": "Brie de Meaux AOP lait cru",
        "en": "brie de meaux AOP",
        "ru": "бри де мо"
      },
      "search_terms": [
        "Brie de Meaux AOP lait cru",
        "France",
        "France / francophone",
        "Fromages",
        "aged/fermented cheeses",
        "brie de meaux AOP",
        "pâte molle croûte fleurie lait cru",
        "бри де мо"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte fleurie lait cru",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 25,
        "high": 150
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.3,
        "typ": 7.5,
        "high": 45
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/19781707/",
      "restaurant_alias": "brie de meaux AOP",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Mayer 2010 : lait cru + affinage artisanal = outliers majeurs vs industriel pasteurisé.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_094",
      "names": {
        "fr": "Camembert de Normandie AOP lait cru",
        "en": "camembert AOP lait cru",
        "ru": "камамбер де нормандия"
      },
      "search_terms": [
        "Camembert de Normandie AOP lait cru",
        "France",
        "France / francophone",
        "Fromages",
        "aged/fermented cheeses",
        "camembert AOP lait cru",
        "pâte molle lait cru AOP",
        "камамбер де нормандия"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "pâte molle lait cru AOP",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 25,
        "high": 150
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.3,
        "typ": 7.5,
        "high": 45
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/19781707/",
      "restaurant_alias": "camembert AOP lait cru",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Mayer 2010 : affinage cru = valeurs très variables vs industriel.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_095",
      "names": {
        "fr": "Coulommiers",
        "en": "coulommiers",
        "ru": "куломье"
      },
      "search_terms": [
        "Coulommiers",
        "France",
        "France / francophone",
        "Fromages",
        "aged/fermented cheeses",
        "coulommiers",
        "pâte molle croûte fleurie",
        "куломье"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte fleurie",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 3,
        "high": 30
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.9,
        "high": 9
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "coulommiers",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy Brie industriel + notes artisanales.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_096",
      "names": {
        "fr": "Chaource AOP",
        "en": "chaource",
        "ru": "шаурс"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Chaource AOP",
        "France / francophone",
        "France Champagne",
        "aged/fermented cheeses",
        "chaource",
        "pâte molle triple crème",
        "шаурс"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "France Champagne",
      "cuisine_type": "France / francophone",
      "process": "pâte molle triple crème",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 5,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.5,
        "high": 12
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chaource",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy croûte fleurie affinage court.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_097",
      "names": {
        "fr": "Époisses de Bourgogne AOP",
        "en": "epoisses",
        "ru": "эпуасс"
      },
      "search_terms": [
        "France",
        "France / francophone",
        "Fromages",
        "aged/fermented cheeses",
        "epoisses",
        "pâte molle croûte lavée marc",
        "Époisses de Bourgogne AOP",
        "эпуасс"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée marc",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 50,
        "high": 150
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 15,
        "high": 45
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "epoisses",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Pluta-Kubica 2022 : croûtes lavées typiquement 20-150 mg/100g.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_098",
      "names": {
        "fr": "Munster AOP",
        "en": "munster, munster-géromé",
        "ru": "мюнстер"
      },
      "search_terms": [
        "France / francophone",
        "France Alsace",
        "Fromages",
        "Munster AOP",
        "aged/fermented cheeses",
        "munster, munster-géromé",
        "pâte molle croûte lavée",
        "мюнстер"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Alsace",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 45,
        "high": 130
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 13.5,
        "high": 39
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "munster, munster-géromé",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Croûte lavée long affinage : accumulation forte.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_099",
      "names": {
        "fr": "Livarot AOP",
        "en": "livarot",
        "ru": "ливаро"
      },
      "search_terms": [
        "France / francophone",
        "France Normandie",
        "Fromages",
        "Livarot AOP",
        "aged/fermented cheeses",
        "livarot",
        "pâte molle croûte lavée",
        "ливаро"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Normandie",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 40,
        "high": 120
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 12,
        "high": 36
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "livarot",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy croûtes lavées.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_100",
      "names": {
        "fr": "Reblochon AOP",
        "en": "reblochon",
        "ru": "реблошон"
      },
      "search_terms": [
        "France / francophone",
        "France Savoie",
        "Fromages",
        "Reblochon AOP",
        "aged/fermented cheeses",
        "pâte molle croûte lavée lait cru",
        "reblochon",
        "реблошон"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Savoie",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée lait cru",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 6,
        "high": 24
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "reblochon",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Croûte lavée lait cru.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_101",
      "names": {
        "fr": "Pont-l'Évêque AOP",
        "en": "pont-l'eveque",
        "ru": "пон-левек"
      },
      "search_terms": [
        "France / francophone",
        "France Normandie",
        "Fromages",
        "Pont-l'Évêque AOP",
        "aged/fermented cheeses",
        "pont-l'eveque",
        "pâte molle croûte lavée",
        "пон-левек"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Normandie",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 25,
        "high": 90
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 7.5,
        "high": 27
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "pont-l'eveque",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy Livarot.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_102",
      "names": {
        "fr": "Langres AOP",
        "en": "langres",
        "ru": "лангр"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "France / francophone",
        "France Champagne",
        "Langres AOP",
        "aged/fermented cheeses",
        "langres",
        "pâte molle croûte lavée marc",
        "лангр"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "France Champagne",
      "cuisine_type": "France / francophone",
      "process": "pâte molle croûte lavée marc",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 40,
        "high": 120
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 12,
        "high": 36
      },
      "confidence": "C",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740775/",
      "restaurant_alias": "langres",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy Époisses.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_103",
      "names": {
        "fr": "Roquefort AOP",
        "en": "roquefort",
        "ru": "рокфор"
      },
      "search_terms": [
        "France / francophone",
        "France Aveyron",
        "Fromages",
        "Roquefort AOP",
        "aged/fermented cheeses",
        "bleu brebis AOP",
        "roquefort",
        "рокфор"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "France Aveyron",
      "cuisine_type": "France / francophone",
      "process": "bleu brebis AOP",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 200,
        "high": 800
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 15,
        "typ": 60,
        "high": 240
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "roquefort",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Novella-Rodríguez 2003 : bleus 0-1585 mg/kg. Roquefort outliers majeurs.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_104",
      "names": {
        "fr": "Stilton PDO",
        "en": "stilton",
        "ru": "стилтон"
      },
      "search_terms": [
        "Fromages",
        "Royaume-Uni / Irlande",
        "Stilton PDO",
        "UK",
        "aged/fermented cheeses",
        "bleu vache PDO",
        "stilton",
        "стилтон"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "bleu vache PDO",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 150,
        "high": 420
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 45,
        "high": 126
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "stilton",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Evans 1988 historique jusqu'à 420 mg/100g (4200 mg/kg).",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_105",
      "names": {
        "fr": "Gorgonzola dolce DOP",
        "en": "gorgonzola dolce",
        "ru": "горгонзола дольче"
      },
      "search_terms": [
        "Fromages",
        "Gorgonzola dolce DOP",
        "Italie",
        "aged/fermented cheeses",
        "bleu vache doux",
        "gorgonzola dolce",
        "горгонзола дольче"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "bleu vache doux",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 80,
        "high": 250
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 24,
        "high": 75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "gorgonzola dolce",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Version dolce : affinage plus court que piccante.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_106",
      "names": {
        "fr": "Gorgonzola piccante DOP",
        "en": "gorgonzola piccante",
        "ru": "горгонзола пиканте"
      },
      "search_terms": [
        "Fromages",
        "Gorgonzola piccante DOP",
        "Italie",
        "aged/fermented cheeses",
        "bleu vache affiné",
        "gorgonzola piccante",
        "горгонзола пиканте"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "bleu vache affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 200,
        "high": 500
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 15,
        "typ": 60,
        "high": 150
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/12769492/",
      "restaurant_alias": "gorgonzola piccante",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Version piccante : long affinage.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_107",
      "names": {
        "fr": "Cabrales DOP",
        "en": "cabrales",
        "ru": "кабралес"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Cabrales DOP",
        "Espagne",
        "Espagne Asturies",
        "aged/fermented cheeses",
        "bleu mélange lait artisanal",
        "cabrales",
        "кабралес"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Espagne Asturies",
      "cuisine_type": "Espagne",
      "process": "bleu mélange lait artisanal",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 100,
        "typ": 400,
        "high": 800
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 30,
        "typ": 120,
        "high": 240
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/27287361/",
      "restaurant_alias": "cabrales",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Combarros-Fuertes 2016 : Cabrales jusqu'à 800 mg/100g. Outlier extrême.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_108",
      "names": {
        "fr": "Queso fresco mexicain",
        "en": "queso fresco",
        "ru": "кесо фреско"
      },
      "search_terms": [
        "Amériques",
        "Fromages",
        "Mexique",
        "Queso fresco mexicain",
        "frais non affiné",
        "fresh cheese – not restricted",
        "queso fresco",
        "кесо фреско"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "frais non affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "queso fresco",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fromage frais : tyramine négligeable. Réhabilité.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_109",
      "names": {
        "fr": "Queso Oaxaca/quesillo",
        "en": "oaxaca, quesillo",
        "ru": "оахака"
      },
      "search_terms": [
        "Amériques",
        "Fromages",
        "Mexique",
        "Queso Oaxaca/quesillo",
        "fresh cheese – not restricted",
        "oaxaca, quesillo",
        "pâte filée frais",
        "оахака"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "pâte filée frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.9
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "oaxaca, quesillo",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Proche mozzarella fraîche.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_110",
      "names": {
        "fr": "Queso Cotija añejado",
        "en": "cotija añejo",
        "ru": "котиха"
      },
      "search_terms": [
        "Amériques",
        "Fromages",
        "Mexique",
        "Queso Cotija añejado",
        "affiné brebis/vache",
        "aged/fermented cheeses",
        "cotija añejo",
        "котиха"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "affiné brebis/vache",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 8,
        "high": 24
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "cotija añejo",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Données HPLC directes absentes. Proxy brebis affiné.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_111",
      "names": {
        "fr": "Queso Chihuahua/menonita",
        "en": "chihuahua, menonita",
        "ru": "чиуауа"
      },
      "search_terms": [
        "Amériques",
        "Fromages",
        "Mexique",
        "Queso Chihuahua/menonita",
        "aged/fermented cheeses",
        "chihuahua, menonita",
        "semi-dur affiné",
        "чиуауа"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "semi-dur affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 50
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 4.5,
        "high": 15
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chihuahua, menonita",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy Gouda/Cheddar jeune.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_112",
      "names": {
        "fr": "Queso Panela",
        "en": "panela",
        "ru": "панела"
      },
      "search_terms": [
        "Amériques",
        "Fromages",
        "Mexique",
        "Queso Panela",
        "frais non affiné",
        "fresh cheese – not restricted",
        "panela",
        "панела"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "frais non affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.09,
        "high": 0.45
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "panela",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fromage frais à griller.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_113",
      "names": {
        "fr": "Requesón",
        "en": "requesón",
        "ru": "рекесон"
      },
      "search_terms": [
        "Espagne",
        "Fromages",
        "Mexique/Espagne",
        "Requesón",
        "fresh cheese – not restricted",
        "petit-lait frais",
        "requesón",
        "рекесон"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Mexique/Espagne",
      "cuisine_type": "Espagne",
      "process": "petit-lait frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.09,
        "high": 0.3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "requesón",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Équivalent ricotta.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_114",
      "names": {
        "fr": "Queijo Minas frescal",
        "en": "minas frescal",
        "ru": "минас фрескал"
      },
      "search_terms": [
        "Amériques",
        "Brésil",
        "Fromages",
        "Queijo Minas frescal",
        "frais non affiné",
        "fresh cheese – not restricted",
        "minas frescal",
        "минас фрескал"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Brésil",
      "cuisine_type": "Amériques",
      "process": "frais non affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "minas frescal",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fromage frais brésilien majeur.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_115",
      "names": {
        "fr": "Queijo Coalho",
        "en": "queijo coalho",
        "ru": "коалью"
      },
      "search_terms": [
        "Amériques",
        "Brésil Nordeste",
        "Fromages",
        "Queijo Coalho",
        "aged/fermented cheeses",
        "queijo coalho",
        "semi-dur à griller",
        "коалью"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Brésil Nordeste",
      "cuisine_type": "Amériques",
      "process": "semi-dur à griller",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.6,
        "typ": 3,
        "high": 12
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "queijo coalho",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy halloumi.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_116",
      "names": {
        "fr": "Queijo Canastra vieilli",
        "en": "canastra",
        "ru": "канастра"
      },
      "search_terms": [
        "Amériques",
        "Brésil Minas Gerais",
        "Fromages",
        "Queijo Canastra vieilli",
        "aged/fermented cheeses",
        "canastra",
        "lait cru affiné",
        "канастра"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Brésil Minas Gerais",
      "cuisine_type": "Amériques",
      "process": "lait cru affiné",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 60,
        "high": 200
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 18,
        "high": 60
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "canastra",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lait cru + long affinage artisanal.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_117",
      "names": {
        "fr": "Shanklish libanais/syrien",
        "en": "shanklish, surke",
        "ru": "шанклиш"
      },
      "search_terms": [
        "Fromages",
        "Liban/Syrie",
        "Moyen-Orient / Maghreb",
        "Shanklish libanais/syrien",
        "aged/fermented cheeses",
        "boules affinées séchées",
        "shanklish, surke",
        "шанклиш"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Liban/Syrie",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "boules affinées séchées",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 30,
        "high": 120
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "shanklish, surke",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Équivalent culturel au fromage bleu. Confidence D.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_118",
      "names": {
        "fr": "Jibneh arabieh",
        "en": "jibneh arabieh",
        "ru": "арабский сыр"
      },
      "search_terms": [
        "Fromages",
        "Jibneh arabieh",
        "Moyen-Orient",
        "Moyen-Orient / Maghreb",
        "aged/fermented cheeses",
        "jibneh arabieh",
        "saumure traditionnelle",
        "арабский сыр"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Moyen-Orient",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "saumure traditionnelle",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 60
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 4.5,
        "high": 18
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "jibneh arabieh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy halloumi/féta.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_119",
      "names": {
        "fr": "Chechil arménien fumé",
        "en": "chechil",
        "ru": "чечил"
      },
      "search_terms": [
        "Arménie",
        "Chechil arménien fumé",
        "Fromages",
        "Russie / Europe de l'Est",
        "aged/fermented cheeses",
        "chechil",
        "filé fumé",
        "чечил"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Arménie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "filé fumé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 12,
        "high": 36
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chechil",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fromage filé fumé. Données HPLC absentes.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_120",
      "names": {
        "fr": "Chanakh arménien",
        "en": "chanakh",
        "ru": "чанах"
      },
      "search_terms": [
        "Arménie",
        "Chanakh arménien",
        "Fromages",
        "Russie / Europe de l'Est",
        "aged/fermented cheeses",
        "brebis saumure",
        "chanakh",
        "чанах"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Arménie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "brebis saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 60,
        "high": 200
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 18,
        "high": 60
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chanakh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy féta brebis artisanale.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_121",
      "names": {
        "fr": "Motal arménien/azéri",
        "en": "motal, motal peyniri",
        "ru": "мотал"
      },
      "search_terms": [
        "Arménie/Azerbaïdjan",
        "Fromages",
        "Motal arménien/azéri",
        "Russie / Europe de l'Est",
        "aged/fermented cheeses",
        "motal, motal peyniri",
        "saumure peau de mouton",
        "мотал"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Arménie/Azerbaïdjan",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "saumure peau de mouton",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 350
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 30,
        "high": 105
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/20105559/",
      "restaurant_alias": "motal, motal peyniri",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Andiç 2010 PMID 20105559.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_122",
      "names": {
        "fr": "Adygeyski",
        "en": "adygeyski",
        "ru": "адыгейский"
      },
      "search_terms": [
        "Adygeyski",
        "Fromages",
        "Russie / Europe de l'Est",
        "Russie Caucase",
        "adygeyski",
        "fresh cheese – not restricted",
        "fromage frais caillé",
        "адыгейский"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Russie Caucase",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fromage frais caillé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "adygeyski",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fromage frais circassien.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_123",
      "names": {
        "fr": "Paneer indien",
        "en": "paneer",
        "ru": "панир"
      },
      "search_terms": [
        "Fromages",
        "Inde",
        "Paneer indien",
        "frais caillage acide",
        "fresh cheese – not restricted",
        "paneer",
        "панир"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Inde",
      "cuisine_type": "Inde",
      "process": "frais caillage acide",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 1.5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.45
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "paneer",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fromage frais sans fermentation.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_124",
      "names": {
        "fr": "Sufu / stinky tofu / chou doufu",
        "en": "sufu, stinky tofu, chou doufu",
        "ru": "суфу"
      },
      "search_terms": [
        "Chine / Taïwan",
        "Chine/Taïwan",
        "Soja / légumineuses fermentés",
        "Sufu / stinky tofu / chou doufu",
        "fermented soy products",
        "soja fermenté long",
        "sufu, stinky tofu, chou doufu",
        "суфу"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine/Taïwan",
      "cuisine_type": "Chine / Taïwan",
      "process": "soja fermenté long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 100,
        "typ": 300,
        "high": 500
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 30,
        "typ": 90,
        "high": 150
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/11453290/",
      "restaurant_alias": "sufu, stinky tofu, chou doufu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Han BZ 2001-2013 : jusqu'à 500 mg/kg. Équivalent fonctionnel bleu affiné.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_125",
      "names": {
        "fr": "Chhurpi dur tibétain/népalais",
        "en": "chhurpi",
        "ru": "чхурпи"
      },
      "search_terms": [
        "Chhurpi dur tibétain/népalais",
        "Fromages",
        "Global / international",
        "Tibet/Népal",
        "aged/fermented cheeses",
        "chhurpi",
        "yak séché très dur",
        "чхурпи"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Tibet/Népal",
      "cuisine_type": "Global / international",
      "process": "yak séché très dur",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": null,
        "high": null
      },
      "confidence": "D",
      "note_type": "donnée manquante",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chhurpi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Aucune étude HPLC. Prudence forte par défaut.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 55,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_126",
      "names": {
        "fr": "Wagashi/Warankashi",
        "en": "wagashi, warankashi",
        "ru": "ваганши"
      },
      "search_terms": [
        "Afrique",
        "Afrique Ouest Fulani",
        "Fromages",
        "Wagashi/Warankashi",
        "frais caillé artisanal",
        "fresh cheese – not restricted",
        "wagashi, warankashi",
        "ваганши"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Afrique Ouest Fulani",
      "cuisine_type": "Afrique",
      "process": "frais caillé artisanal",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "wagashi, warankashi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fromage frais peul. Données absentes.",
      "fda_category": "fresh cheese – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_127",
      "names": {
        "fr": "Queso blanco/llanero vénézuélien",
        "en": "queso llanero, queso blanco",
        "ru": "льянеро"
      },
      "search_terms": [
        "Fromages",
        "Global / international",
        "Queso blanco/llanero vénézuélien",
        "Venezuela/Colombie",
        "aged/fermented cheeses",
        "queso llanero, queso blanco",
        "semi-frais salé",
        "льянеро"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Venezuela/Colombie",
      "cuisine_type": "Global / international",
      "process": "semi-frais salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.3,
        "typ": 1.5,
        "high": 6
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "queso llanero, queso blanco",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy queso fresco salé.",
      "fda_category": "aged/fermented cheeses",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_128",
      "names": {
        "fr": "Prostokvasha",
        "en": "prostokvasha",
        "ru": "простокваша"
      },
      "search_terms": [
        "Boissons fermentées",
        "Prostokvasha",
        "Russie / Europe de l'Est",
        "Russie/Ukraine",
        "fermented dairy – low concern",
        "lait caillé spontané",
        "prostokvasha",
        "простокваша"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Russie/Ukraine",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "lait caillé spontané",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 2,
        "high": 10
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "prostokvasha",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy yaourt/kéfir.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 360,
          "max": 500,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_129",
      "names": {
        "fr": "Varenets",
        "en": "varenets",
        "ru": "варенец"
      },
      "search_terms": [
        "Boissons fermentées",
        "Russie",
        "Russie / Europe de l'Est",
        "Varenets",
        "fermented dairy – low concern",
        "lait cuit fermenté",
        "varenets",
        "варенец"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "lait cuit fermenté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 1.5,
        "high": 6
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 3,
        "high": 12
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "varenets",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy ryazhenka.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 360,
          "max": 500,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_130",
      "names": {
        "fr": "Katyk",
        "en": "katyk",
        "ru": "катык"
      },
      "search_terms": [
        "Asie",
        "Asie centrale",
        "Boissons alcoolisées",
        "Katyk",
        "fermented dairy – low concern",
        "katyk",
        "lait fermenté traditionnel",
        "катык"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Asie centrale",
      "cuisine_type": "Asie",
      "process": "lait fermenté traditionnel",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 3,
        "high": 12
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 6,
        "high": 24
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "katyk",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation artisanale prolongée.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 600,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_131",
      "names": {
        "fr": "Ayran",
        "en": "ayran, doogh",
        "ru": "айран"
      },
      "search_terms": [
        "Ayran",
        "Global / international",
        "Produits laitiers",
        "Turquie/Caucase",
        "ayran, doogh",
        "fermented dairy – low concern",
        "yaourt dilué salé",
        "айран"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Turquie/Caucase",
      "cuisine_type": "Global / international",
      "process": "yaourt dilué salé",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.25,
        "high": 5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ayran, doogh",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Dilué, fermentation courte.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 190,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 220,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 380,
          "max": 500,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_132",
      "names": {
        "fr": "Doogh iranien",
        "en": "doogh",
        "ru": "дух"
      },
      "search_terms": [
        "Doogh iranien",
        "Iran",
        "Moyen-Orient / Maghreb",
        "Produits laitiers",
        "doogh",
        "fermented dairy – low concern",
        "yaourt dilué herbes",
        "дух"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Iran",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "yaourt dilué herbes",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "250 mL",
        "value": 250.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.25,
        "high": 5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "doogh",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Équivalent ayran.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 120,
          "max": 190,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 220,
          "max": 300,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 380,
          "max": 500,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 250,
        "step": 10
      }
    },
    {
      "id": "TYR_133",
      "names": {
        "fr": "Yaourt grec nature",
        "en": "greek yogurt",
        "ru": "греческий йогурт"
      },
      "search_terms": [
        "Grèce/global",
        "Méditerranée",
        "Produits laitiers",
        "Yaourt grec nature",
        "fermented dairy – low concern",
        "greek yogurt",
        "yaourt égoutté",
        "греческий йогурт"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Grèce/global",
      "cuisine_type": "Méditerranée",
      "process": "yaourt égoutté",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.45,
        "high": 2.25
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "greek yogurt",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Industriel pasteurisé : Vert. Shulman-Walker 1996 réhabilite.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_134",
      "names": {
        "fr": "Yaourt bulgare",
        "en": "bulgarian yogurt",
        "ru": "болгарский йогурт"
      },
      "search_terms": [
        "Bulgarie",
        "Produits laitiers",
        "Russie / Europe de l'Est",
        "Yaourt bulgare",
        "bulgarian yogurt",
        "fermented dairy – low concern",
        "yaourt Lactobacillus bulgaricus",
        "болгарский йогурт"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Bulgarie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "yaourt Lactobacillus bulgaricus",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.4,
        "high": 2
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.6,
        "high": 3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bulgarian yogurt",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Industriel standardisé = Vert.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_135",
      "names": {
        "fr": "Skyr islandais",
        "en": "skyr",
        "ru": "скир"
      },
      "search_terms": [
        "Islande",
        "Nordique",
        "Produits laitiers",
        "Skyr islandais",
        "fermented dairy – low concern",
        "frais filtré acidifié",
        "skyr",
        "скир"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Islande",
      "cuisine_type": "Nordique",
      "process": "frais filtré acidifié",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.45,
        "high": 1.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "skyr",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Produit frais égoutté.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_136",
      "names": {
        "fr": "Filmjölk suédois",
        "en": "filmjolk",
        "ru": "фильмьёлк"
      },
      "search_terms": [
        "Filmjölk suédois",
        "Global / international",
        "Produits laitiers",
        "Suède",
        "fermented dairy – low concern",
        "filmjolk",
        "lait fermenté mésophile",
        "фильмьёлк"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Suède",
      "cuisine_type": "Global / international",
      "process": "lait fermenté mésophile",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1,
        "high": 4
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "filmjolk",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Proxy yaourt industriel.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 150,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 180,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 400,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_137",
      "names": {
        "fr": "Matsoni géorgien",
        "en": "matsoni",
        "ru": "мацони"
      },
      "search_terms": [
        "Géorgie",
        "Matsoni géorgien",
        "Produits laitiers",
        "Russie / Europe de l'Est",
        "fermented dairy – low concern",
        "matsoni",
        "yaourt géorgien traditionnel",
        "мацони"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Géorgie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "yaourt géorgien traditionnel",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 4,
        "high": 15
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 8,
        "high": 30
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "matsoni",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Version artisanale variable.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 150,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 180,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 400,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_138",
      "names": {
        "fr": "Koumis / airag",
        "en": "kumis, airag",
        "ru": "кумыс"
      },
      "search_terms": [
        "Asie",
        "Asie centrale",
        "Boissons alcoolisées",
        "Koumis / airag",
        "fermented dairy – low concern",
        "kumis, airag",
        "lait jument fermenté alcool",
        "кумыс"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Asie centrale",
      "cuisine_type": "Asie",
      "process": "lait jument fermenté alcool",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 60
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kumis, airag",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation alcoolique longue. Données HPLC absentes.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 600,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_139",
      "names": {
        "fr": "Dahi indien",
        "en": "dahi, curd",
        "ru": "дахи"
      },
      "search_terms": [
        "Dahi indien",
        "Inde",
        "Produits laitiers",
        "dahi, curd",
        "fermented dairy – low concern",
        "yaourt traditionnel maison",
        "дахи"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Inde",
      "cuisine_type": "Inde",
      "process": "yaourt traditionnel maison",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.5,
        "high": 7.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dahi, curd",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Version maison variable.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 110,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_140",
      "names": {
        "fr": "Salami Milano",
        "en": "milano salami",
        "ru": "салями милано"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Salami Milano",
        "fermenté séché doux",
        "milano salami",
        "smoked/pickled/aged/fermented meats",
        "салями милано"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "fermenté séché doux",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 40,
        "high": 200
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 12,
        "high": 60
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "restaurant_alias": "milano salami",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_141",
      "names": {
        "fr": "Salami Napoli piccante",
        "en": "napoli salami",
        "ru": "неаполитанская салями"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Salami Napoli piccante",
        "fermenté séché piquant",
        "napoli salami",
        "smoked/pickled/aged/fermented meats",
        "неаполитанская салями"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "fermenté séché piquant",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 60,
        "high": 250
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 18,
        "high": 75
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "restaurant_alias": "napoli salami",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_142",
      "names": {
        "fr": "Soppressata calabrese",
        "en": "soppressata",
        "ru": "соппрессата"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Italie Calabre",
        "Soppressata calabrese",
        "fermenté pressé",
        "smoked/pickled/aged/fermented meats",
        "soppressata",
        "соппрессата"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie Calabre",
      "cuisine_type": "Italie",
      "process": "fermenté pressé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 24,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "restaurant_alias": "soppressata",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_143",
      "names": {
        "fr": "Finocchiona toscane",
        "en": "finocchiona",
        "ru": "финоккьона"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Finocchiona toscane",
        "Italie",
        "Italie Toscane",
        "fermenté fenouil",
        "finocchiona",
        "smoked/pickled/aged/fermented meats",
        "финоккьона"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie Toscane",
      "cuisine_type": "Italie",
      "process": "fermenté fenouil",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 50,
        "high": 250
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 15,
        "high": 75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "restaurant_alias": "finocchiona",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_144",
      "names": {
        "fr": "Ventricina",
        "en": "ventricina",
        "ru": "вентричина"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Italie Abruzzes",
        "Ventricina",
        "fermenté piquant",
        "smoked/pickled/aged/fermented meats",
        "ventricina",
        "вентричина"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie Abruzzes",
      "cuisine_type": "Italie",
      "process": "fermenté piquant",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 70,
        "high": 300
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 21,
        "high": 90
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ventricina",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_145",
      "names": {
        "fr": "'Nduja calabraise",
        "en": "nduja",
        "ru": "ндуя"
      },
      "search_terms": [
        "'Nduja calabraise",
        "Charcuteries / viandes affinées",
        "Italie",
        "Italie Calabre",
        "nduja",
        "smoked/pickled/aged/fermented meats",
        "tartinable fermenté piquant",
        "ндуя"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie Calabre",
      "cuisine_type": "Italie",
      "process": "tartinable fermenté piquant",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 500
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 5,
        "typ": 25,
        "high": 125
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nduja",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_146",
      "names": {
        "fr": "Rosette de Lyon",
        "en": "rosette",
        "ru": "розетт де лион"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "France",
        "France / francophone",
        "Rosette de Lyon",
        "rosette",
        "saucisson sec long",
        "smoked/pickled/aged/fermented meats",
        "розетт де лион"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "saucisson sec long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 24,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "rosette",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_147",
      "names": {
        "fr": "Jésus de Morteau",
        "en": "jesus, saucisson morteau",
        "ru": "жезю"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "France / francophone",
        "France Franche-Comté",
        "Jésus de Morteau",
        "jesus, saucisson morteau",
        "saucisse fermentée fumée",
        "smoked/pickled/aged/fermented meats",
        "жезю"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "France Franche-Comté",
      "cuisine_type": "France / francophone",
      "process": "saucisse fermentée fumée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 500
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 30,
        "high": 150
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "jesus, saucisson morteau",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_148",
      "names": {
        "fr": "Chorizo español cular curado",
        "en": "chorizo cular",
        "ru": "чорисо кулар"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Chorizo español cular curado",
        "Espagne",
        "chorizo cular",
        "fermenté pimenté long",
        "smoked/pickled/aged/fermented meats",
        "чорисо кулар"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "fermenté pimenté long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 150,
        "high": 742
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 45,
        "high": 222.6
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "chorizo cular",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_149",
      "names": {
        "fr": "Chorizo ibérico de bellota",
        "en": "chorizo iberico bellota",
        "ru": "чорисо иберико"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Chorizo ibérico de bellota",
        "Espagne",
        "chorizo iberico bellota",
        "porc ibérique long affinage",
        "smoked/pickled/aged/fermented meats",
        "чорисо иберико"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "porc ibérique long affinage",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 200,
        "high": 600
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 12,
        "typ": 60,
        "high": 180
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "chorizo iberico bellota",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_150",
      "names": {
        "fr": "Salchichón",
        "en": "salchichon",
        "ru": "сальчичон"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Salchichón",
        "fermenté paprika",
        "salchichon",
        "smoked/pickled/aged/fermented meats",
        "сальчичон"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "fermenté paprika",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 30,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "salchichon",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_151",
      "names": {
        "fr": "Fuet catalan",
        "en": "fuet",
        "ru": "фуэт"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Espagne Catalogne",
        "Fuet catalan",
        "fuet",
        "petit sec fermenté",
        "smoked/pickled/aged/fermented meats",
        "фуэт"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne Catalogne",
      "cuisine_type": "Espagne",
      "process": "petit sec fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 60,
        "high": 300
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 15,
        "high": 75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "fuet",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_152",
      "names": {
        "fr": "Sobrasada de Mallorca",
        "en": "sobrasada",
        "ru": "собрасада"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Espagne Baléares",
        "Sobrasada de Mallorca",
        "smoked/pickled/aged/fermented meats",
        "sobrasada",
        "tartinable porc piquant",
        "собрасада"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne Baléares",
      "cuisine_type": "Espagne",
      "process": "tartinable porc piquant",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 350
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3.75,
        "typ": 20,
        "high": 87.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "sobrasada",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_153",
      "names": {
        "fr": "Chouriço portugais Estremoz",
        "en": "chouriço, chorizo portugues",
        "ru": "шорисо"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Chouriço portugais Estremoz",
        "Global / international",
        "Portugal",
        "chouriço, chorizo portugues",
        "fermenté paprika",
        "smoked/pickled/aged/fermented meats",
        "шорисо"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Portugal",
      "cuisine_type": "Global / international",
      "process": "fermenté paprika",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 450
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 30,
        "high": 135
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/20551633/",
      "restaurant_alias": "chouriço, chorizo portugues",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_154",
      "names": {
        "fr": "Painho de Portalegre PDO",
        "en": "painho portalegre",
        "ru": "панью"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global / international",
        "Painho de Portalegre PDO",
        "Portugal Alentejo",
        "fermenté porc Alentejano",
        "painho portalegre",
        "smoked/pickled/aged/fermented meats",
        "панью"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Portugal Alentejo",
      "cuisine_type": "Global / international",
      "process": "fermenté porc Alentejano",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 150,
        "high": 700
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 45,
        "high": 210
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/20551633/",
      "restaurant_alias": "painho portalegre",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_155",
      "names": {
        "fr": "Landjäger allemand/suisse",
        "en": "landjaeger, landjäger",
        "ru": "ланджегер"
      },
      "search_terms": [
        "Allemagne / Suisse",
        "Allemagne/Suisse",
        "Charcuteries / viandes affinées",
        "Landjäger allemand/suisse",
        "landjaeger, landjäger",
        "saucisse fermentée fumée plate",
        "smoked/pickled/aged/fermented meats",
        "ланджегер"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Allemagne/Suisse",
      "cuisine_type": "Allemagne / Suisse",
      "process": "saucisse fermentée fumée plate",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 150,
        "high": 785
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 37.5,
        "high": 196.25
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/32338740/",
      "restaurant_alias": "landjaeger, landjäger",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_156",
      "names": {
        "fr": "Cervelat sec",
        "en": "cervelat",
        "ru": "сервелат сухой"
      },
      "search_terms": [
        "Allemagne / Suisse",
        "Cervelat sec",
        "Charcuteries / viandes affinées",
        "Suisse/Allemagne",
        "cervelat",
        "semi-fermenté",
        "smoked/pickled/aged/fermented meats",
        "сервелат сухой"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Suisse/Allemagne",
      "cuisine_type": "Allemagne / Suisse",
      "process": "semi-fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 50,
        "high": 200
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 15,
        "high": 60
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/32338740/",
      "restaurant_alias": "cervelat",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_157",
      "names": {
        "fr": "Pepperoni américain",
        "en": "pepperoni, pizza pepperoni",
        "ru": "пепперони"
      },
      "search_terms": [
        "Amériques",
        "Charcuteries / viandes affinées",
        "Pepperoni américain",
        "USA",
        "pepperoni, pizza pepperoni",
        "salami piquant pizza",
        "smoked/pickled/aged/fermented meats",
        "пепперони"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "USA",
      "cuisine_type": "Amériques",
      "process": "salami piquant pizza",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 120,
        "high": 510
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 36,
        "high": 153
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814612011612",
      "restaurant_alias": "pepperoni, pizza pepperoni",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_158",
      "names": {
        "fr": "Kulen serbe/slavonien",
        "en": "kulen, sremski kulen",
        "ru": "кулен"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global / international",
        "Kulen serbe/slavonien",
        "Serbie/Croatie",
        "kulen, sremski kulen",
        "porc fermenté paprika piment",
        "smoked/pickled/aged/fermented meats",
        "кулен"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Serbie/Croatie",
      "cuisine_type": "Global / international",
      "process": "porc fermenté paprika piment",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 30,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/33043554/",
      "restaurant_alias": "kulen, sremski kulen",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_159",
      "names": {
        "fr": "Lukanka bulgare",
        "en": "lukanka",
        "ru": "луканка"
      },
      "search_terms": [
        "Bulgarie",
        "Charcuteries / viandes affinées",
        "Lukanka bulgare",
        "Russie / Europe de l'Est",
        "fermenté séché plat",
        "lukanka",
        "smoked/pickled/aged/fermented meats",
        "луканка"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Bulgarie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "fermenté séché plat",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 70,
        "high": 300
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 21,
        "high": 90
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "lukanka",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie smoked/pickled/aged/fermented meats. Outliers documentés. Noir systématique.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_160",
      "names": {
        "fr": "Prosciutto di Parma DOP",
        "en": "parma ham, prosciutto parma",
        "ru": "пармская ветчина"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Prosciutto di Parma DOP",
        "jambon cru long affinage",
        "parma ham, prosciutto parma",
        "smoked/pickled/aged/fermented meats",
        "пармская ветчина"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "jambon cru long affinage",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 25,
        "high": 80
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 7.5,
        "high": 24
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/17651827/",
      "restaurant_alias": "parma ham, prosciutto parma",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études .",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_161",
      "names": {
        "fr": "Prosciutto San Daniele DOP",
        "en": "san daniele",
        "ru": "сан даниэле"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Prosciutto San Daniele DOP",
        "jambon cru 13+ mois",
        "san daniele",
        "smoked/pickled/aged/fermented meats",
        "сан даниэле"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "jambon cru 13+ mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 60
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6,
        "high": 18
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/17651827/",
      "restaurant_alias": "san daniele",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études .",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_162",
      "names": {
        "fr": "Speck Alto Adige IGP",
        "en": "speck",
        "ru": "шпек"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Italie",
        "Italie Tyrol",
        "Speck Alto Adige IGP",
        "jambon fumé cru",
        "smoked/pickled/aged/fermented meats",
        "speck",
        "шпек"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie Tyrol",
      "cuisine_type": "Italie",
      "process": "jambon fumé cru",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 10,
        "high": 30
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "speck",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études 8-MAOI_diet_drug_interactions_2019.pdf.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_163",
      "names": {
        "fr": "Jamón ibérico de bellota",
        "en": "jamon iberico bellota",
        "ru": "иберико де бельота"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Jamón ibérico de bellota",
        "ibérique gland 36-48 mois",
        "jamon iberico bellota",
        "smoked/pickled/aged/fermented meats",
        "иберико де бельота"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "ibérique gland 36-48 mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 150,
        "high": 400
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 37.5,
        "high": 100
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "jamon iberico bellota",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études S0278691516304185.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_164",
      "names": {
        "fr": "Jamón ibérico cebo",
        "en": "jamon iberico cebo",
        "ru": "иберико себо"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Jamón ibérico cebo",
        "ibérique standard 24 mois",
        "jamon iberico cebo",
        "smoked/pickled/aged/fermented meats",
        "иберико себо"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "ibérique standard 24 mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 200
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3.75,
        "typ": 20,
        "high": 50
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "jamon iberico cebo",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études S0278691516304185.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_165",
      "names": {
        "fr": "Presunto portugais long affinage",
        "en": "presunto",
        "ru": "прешунту"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global / international",
        "Portugal",
        "Presunto portugais long affinage",
        "jambon cru 18+ mois",
        "presunto",
        "smoked/pickled/aged/fermented meats",
        "прешунту"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Portugal",
      "cuisine_type": "Global / international",
      "process": "jambon cru 18+ mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 50,
        "high": 150
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 12.5,
        "high": 37.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "presunto",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études 8-MAOI_diet_drug_interactions_2019.pdf.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_166",
      "names": {
        "fr": "Bresaola Valtellina IGP",
        "en": "bresaola",
        "ru": "брезаола"
      },
      "search_terms": [
        "Bresaola Valtellina IGP",
        "Charcuteries / viandes affinées",
        "Italie",
        "bresaola",
        "bœuf séché salé",
        "smoked/pickled/aged/fermented meats",
        "брезаола"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "bœuf séché salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 4,
        "high": 20
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.4,
        "typ": 1.6,
        "high": 8
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bresaola",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études 8-MAOI_diet_drug_interactions_2019.pdf.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 80,
          "max": 140,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_167",
      "names": {
        "fr": "Culatello di Zibello DOP",
        "en": "culatello",
        "ru": "кулателло"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Culatello di Zibello DOP",
        "Italie",
        "cuissot cru long affinage",
        "culatello",
        "smoked/pickled/aged/fermented meats",
        "кулателло"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "cuissot cru long affinage",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 45,
        "high": 140
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 11.25,
        "high": 35
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "culatello",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études 8-MAOI_diet_drug_interactions_2019.pdf.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_168",
      "names": {
        "fr": "Guanciale",
        "en": "guanciale",
        "ru": "гуанчале"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Guanciale",
        "Italie",
        "guanciale",
        "joue porc séchée",
        "smoked/pickled/aged/fermented meats",
        "гуанчале"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "joue porc séchée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 60
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 3.75,
        "high": 15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "guanciale",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études 8-MAOI_diet_drug_interactions_2019.pdf.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 30,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_169",
      "names": {
        "fr": "Lomo embuchado ibérique",
        "en": "lomo embuchado",
        "ru": "ломо"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Espagne",
        "Lomo embuchado ibérique",
        "filet porc séché",
        "lomo embuchado",
        "smoked/pickled/aged/fermented meats",
        "ломо"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "filet porc séché",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 25,
        "high": 80
      },
      "portion_standard": {
        "label": "25 g",
        "value": 25.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.25,
        "typ": 6.25,
        "high": 20
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0278691516304185",
      "restaurant_alias": "lomo embuchado",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études S0278691516304185.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 50,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "default_qty": 25,
        "step": 5
      }
    },
    {
      "id": "TYR_170",
      "names": {
        "fr": "Biltong sud-africain",
        "en": "biltong",
        "ru": "бильтонг"
      },
      "search_terms": [
        "Afrique",
        "Afrique du Sud",
        "Biltong sud-africain",
        "Charcuteries / viandes affinées",
        "biltong",
        "bœuf épicé séché rapide",
        "smoked/pickled/aged/fermented meats",
        "бильтонг"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Afrique du Sud",
      "cuisine_type": "Afrique",
      "process": "bœuf épicé séché rapide",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": null,
        "high": null
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "biltong",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Aucune étude HPLC publiée. Prudence forte par défaut, Noir.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_171",
      "names": {
        "fr": "Dry-aged beef 45-60 j",
        "en": "dry-aged beef 45 days+",
        "ru": "выдержанная говядина 45-60 дней"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Dry-aged beef 45-60 j",
        "Global",
        "Global / international",
        "dry-aged beef 45 days+",
        "maturation sèche longue",
        "smoked/pickled/aged/fermented meats",
        "выдержанная говядина 45-60 дней"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "maturation sèche longue",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 50,
        "high": 150
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 30,
        "typ": 75,
        "high": 225
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/pii/S0956713525008175",
      "restaurant_alias": "dry-aged beef 45 days+",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Charcuterie long affinage. Valeurs typiques sur études S0956713525008175.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 225,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 525,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_172",
      "names": {
        "fr": "Truite fumée",
        "en": "smoked trout",
        "ru": "копчёная форель"
      },
      "search_terms": [
        "Europe",
        "Global / international",
        "Poissons / fruits de mer",
        "Truite fumée",
        "fumée à chaud",
        "smoked trout",
        "smoked/pickled/aged/fermented fish",
        "копчёная форель"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Europe",
      "cuisine_type": "Global / international",
      "process": "fumée à chaud",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 8,
        "high": 40
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 4,
        "high": 20
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "smoked trout",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy saumon fumé à chaud.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_173",
      "names": {
        "fr": "Anguille fumée",
        "en": "smoked eel",
        "ru": "копчёный угорь"
      },
      "search_terms": [
        "Anguille fumée",
        "Europe",
        "Global / international",
        "Poissons / fruits de mer",
        "fumée à chaud grasse",
        "smoked eel",
        "smoked/pickled/aged/fermented fish",
        "копчёный угорь"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Europe",
      "cuisine_type": "Global / international",
      "process": "fumée à chaud grasse",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "smoked eel",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Poisson gras fumé : accumulation scombroïde-like.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_174",
      "names": {
        "fr": "Kippers UK",
        "en": "kippers",
        "ru": "киппер"
      },
      "search_terms": [
        "Kippers UK",
        "Poissons / fruits de mer",
        "Royaume-Uni / Irlande",
        "UK",
        "hareng fumé à froid",
        "kippers",
        "smoked/pickled/aged/fermented fish",
        "киппер"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "hareng fumé à froid",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 15,
        "high": 50
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 7.5,
        "high": 25
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kippers",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Hareng fumé à froid britannique.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_175",
      "names": {
        "fr": "Finnan haddie",
        "en": "finnan haddie",
        "ru": "финнан хэдди"
      },
      "search_terms": [
        "Finnan haddie",
        "Global / international",
        "Poissons / fruits de mer",
        "finnan haddie",
        "smoked/pickled/aged/fermented fish",
        "Écosse",
        "églefin fumé à froid",
        "финнан хэдди"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Écosse",
      "cuisine_type": "Global / international",
      "process": "églefin fumé à froid",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 12,
        "high": 40
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6,
        "high": 20
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "finnan haddie",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy hareng fumé à froid.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_176",
      "names": {
        "fr": "Matjes herring",
        "en": "matjes",
        "ru": "матье"
      },
      "search_terms": [
        "Europe du Nord",
        "Matjes herring",
        "Nordique",
        "Poissons / fruits de mer",
        "matjes",
        "peu salé maturé",
        "smoked/pickled/aged/fermented fish",
        "матье"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Europe du Nord",
      "cuisine_type": "Nordique",
      "process": "peu salé maturé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "matjes",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Maturation enzymatique courte.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_177",
      "names": {
        "fr": "Rollmops",
        "en": "rollmops",
        "ru": "рольмопс"
      },
      "search_terms": [
        "Allemagne",
        "Allemagne / Suisse",
        "Boissons alcoolisées",
        "Rollmops",
        "hareng mariné vinaigre roulé",
        "rollmops",
        "smoked/pickled/aged/fermented fish",
        "рольмопс"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Allemagne",
      "cuisine_type": "Allemagne / Suisse",
      "process": "hareng mariné vinaigre roulé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.8,
        "typ": 4,
        "high": 16
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "rollmops",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Acidification vinaigre limite mais n'annule pas.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 80,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 160,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_178",
      "names": {
        "fr": "Surströmming",
        "en": "surstromming",
        "ru": "сурстрёмминг"
      },
      "search_terms": [
        "Global / international",
        "Poissons / fruits de mer",
        "Surströmming",
        "Suède",
        "fermented fish products",
        "hareng fermenté lactique",
        "surstromming",
        "сурстрёмминг"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Suède",
      "cuisine_type": "Global / international",
      "process": "hareng fermenté lactique",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 200,
        "typ": 500,
        "high": 1000
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 60,
        "typ": 150,
        "high": 300
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/15871493/",
      "restaurant_alias": "surstromming",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Poisson fermenté extrême. Interdit absolu.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_179",
      "names": {
        "fr": "Hákarl islandais",
        "en": "hakarl, kæstur hákarl",
        "ru": "хакарль"
      },
      "search_terms": [
        "Hákarl islandais",
        "Islande",
        "Nordique",
        "Poissons / fruits de mer",
        "fermented fish products",
        "hakarl, kæstur hákarl",
        "requin fermenté 6 mois",
        "хакарль"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Islande",
      "cuisine_type": "Nordique",
      "process": "requin fermenté 6 mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 100,
        "typ": 300,
        "high": 700
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 30,
        "typ": 90,
        "high": 210
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "hakarl, kæstur hákarl",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy surströmming. Absorption amines massive.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_180",
      "names": {
        "fr": "Rakfisk norvégien",
        "en": "rakfisk, rakørret",
        "ru": "ракфиск"
      },
      "search_terms": [
        "Global / international",
        "Norvège",
        "Poissons / fruits de mer",
        "Rakfisk norvégien",
        "fermented fish products",
        "rakfisk, rakørret",
        "truite fermentée 3-12 mois",
        "ракфиск"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Norvège",
      "cuisine_type": "Global / international",
      "process": "truite fermentée 3-12 mois",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 80,
        "typ": 250,
        "high": 600
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 32,
        "typ": 100,
        "high": 240
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "rakfisk, rakørret",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation lactique longue.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_181",
      "names": {
        "fr": "Bacalao séché salé",
        "en": "bacalao, salt cod",
        "ru": "баккалау"
      },
      "search_terms": [
        "Bacalao séché salé",
        "Méditerranée",
        "Poissons / fruits de mer",
        "bacalao, salt cod",
        "morue séchée salée",
        "smoked/pickled/aged/fermented fish",
        "баккалау"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "morue séchée salée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bacalao, salt cod",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Réhydraté avant consommation, dessalage partiel.",
      "fda_category": "smoked/pickled/aged/fermented fish",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_182",
      "names": {
        "fr": "Bottarga/poutargue",
        "en": "bottarga, poutargue",
        "ru": "боттарга"
      },
      "search_terms": [
        "Bottarga/poutargue",
        "Méditerranée",
        "Poissons / fruits de mer",
        "bottarga, poutargue",
        "fermented fish products",
        "œufs mulet/thon séchés",
        "боттарга"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "œufs mulet/thon séchés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 80,
        "high": 300
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 8,
        "high": 30
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bottarga, poutargue",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Œufs de poisson séchés long salage.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_183",
      "names": {
        "fr": "Mentaiko/tarako japonais",
        "en": "mentaiko, tarako",
        "ru": "ментайко"
      },
      "search_terms": [
        "Japon",
        "Mentaiko/tarako japonais",
        "Poissons / fruits de mer",
        "fermented fish products",
        "mentaiko, tarako",
        "œufs lieu fermentés",
        "ментайко"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "œufs lieu fermentés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 350
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 30,
        "high": 105
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "mentaiko, tarako",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Œufs de poisson fermentés.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_184",
      "names": {
        "fr": "Katsuobushi (flocons purs)",
        "en": "katsuobushi, bonito flakes",
        "ru": "кацуобуси"
      },
      "search_terms": [
        "Japon",
        "Katsuobushi (flocons purs)",
        "Poissons / fruits de mer",
        "bonite fermentée fumée séchée",
        "fermented fish products",
        "katsuobushi, bonito flakes",
        "кацуобуси"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "bonite fermentée fumée séchée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 150,
        "high": 400
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 7.5,
        "high": 20
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "katsuobushi, bonito flakes",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "En flocons purs = Rouge. En dashi 2-3 g/L = Vert.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_185",
      "names": {
        "fr": "Ikura (œufs saumon)",
        "en": "ikura, salmon roe",
        "ru": "икра красная"
      },
      "search_terms": [
        "Ikura (œufs saumon)",
        "Poissons / fruits de mer",
        "Russie / Europe de l'Est",
        "Russie/Japon",
        "fermented fish products",
        "ikura, salmon roe",
        "œufs saumon salés",
        "икра красная"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Russie/Japon",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "œufs saumon salés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6,
        "high": 24
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ikura, salmon roe",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Œufs salés crus.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_186",
      "names": {
        "fr": "Dried shrimp asiatique",
        "en": "dried shrimp, ebi",
        "ru": "сушёные креветки"
      },
      "search_terms": [
        "Asie",
        "Dried shrimp asiatique",
        "Poissons / fruits de mer",
        "crevettes séchées entières",
        "dried shrimp, ebi",
        "fermented fish products",
        "сушёные креветки"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Asie",
      "cuisine_type": "Asie",
      "process": "crevettes séchées entières",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dried shrimp, ebi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Crevettes séchées concentrées.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_187",
      "names": {
        "fr": "Nam pla thaï",
        "en": "nam pla, fish sauce thai",
        "ru": "нам пла"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Nam pla thaï",
        "Sauces / condiments",
        "Thaïlande",
        "fermented fish products",
        "nam pla, fish sauce thai",
        "poisson fermenté condiment",
        "нам пла"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Thaïlande",
      "cuisine_type": "Asie du Sud-Est",
      "process": "poisson fermenté condiment",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 30,
        "typ": 80,
        "high": 120
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 8,
        "high": 12
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/24779975/",
      "restaurant_alias": "nam pla, fish sauce thai",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_188",
      "names": {
        "fr": "Patis philippin",
        "en": "patis",
        "ru": "патис"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Patis philippin",
        "Philippines",
        "Sauces / condiments",
        "fermented fish products",
        "patis",
        "poisson fermenté condiment",
        "патис"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Philippines",
      "cuisine_type": "Asie du Sud-Est",
      "process": "poisson fermenté condiment",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 20,
        "typ": 60,
        "high": 100
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 6,
        "high": 10
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/24779975/",
      "restaurant_alias": "patis",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_189",
      "names": {
        "fr": "Colatura di alici",
        "en": "colatura, colatura cetara",
        "ru": "колатура"
      },
      "search_terms": [
        "Colatura di alici",
        "Italie",
        "Italie Cetara",
        "Poissons / fruits de mer",
        "anchois fermentés liquide long affinage",
        "colatura, colatura cetara",
        "fermented fish products",
        "колатура"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Italie Cetara",
      "cuisine_type": "Italie",
      "process": "anchois fermentés liquide long affinage",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 40,
        "typ": 100,
        "high": 250
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 10,
        "high": 25
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/36613342/",
      "restaurant_alias": "colatura, colatura cetara",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_190",
      "names": {
        "fr": "Ngapi birman",
        "en": "ngapi",
        "ru": "нгапи"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Myanmar",
        "Ngapi birman",
        "Poissons / fruits de mer",
        "fermented fish products",
        "ngapi",
        "pâte crevettes/poisson fermentée",
        "нгапи"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Myanmar",
      "cuisine_type": "Asie du Sud-Est",
      "process": "pâte crevettes/poisson fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 150,
        "high": 500
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 15,
        "high": 50
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ngapi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_191",
      "names": {
        "fr": "Prahok cambodgien",
        "en": "prahok",
        "ru": "прахок"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Cambodge",
        "Poissons / fruits de mer",
        "Prahok cambodgien",
        "fermented fish products",
        "prahok",
        "pâte poisson fermenté",
        "прахок"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Cambodge",
      "cuisine_type": "Asie du Sud-Est",
      "process": "pâte poisson fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 150,
        "high": 400
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 5,
        "typ": 15,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "prahok",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_192",
      "names": {
        "fr": "Pla ra thaï",
        "en": "pla ra",
        "ru": "пла ра"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Pla ra thaï",
        "Poissons / fruits de mer",
        "Thaïlande",
        "fermented fish products",
        "pla ra",
        "poisson fermenté en saumure",
        "пла ра"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Thaïlande",
      "cuisine_type": "Asie du Sud-Est",
      "process": "poisson fermenté en saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 130,
        "high": 400
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 19.5,
        "high": 60
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "pla ra",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_193",
      "names": {
        "fr": "Padaek laotien",
        "en": "padaek",
        "ru": "падек"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Laos",
        "Padaek laotien",
        "Poissons / fruits de mer",
        "fermented fish products",
        "padaek",
        "poisson fermenté salé long",
        "падек"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Laos",
      "cuisine_type": "Asie du Sud-Est",
      "process": "poisson fermenté salé long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 350
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 10,
        "high": 35
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "padaek",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_194",
      "names": {
        "fr": "Ika no shiokara",
        "en": "shiokara",
        "ru": "сиокара"
      },
      "search_terms": [
        "Ika no shiokara",
        "Japon",
        "Poissons / fruits de mer",
        "fermented fish products",
        "shiokara",
        "viscères calmar fermentés",
        "сиокара"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "viscères calmar fermentés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 150,
        "high": 500
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 22.5,
        "high": 75
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "shiokara",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_195",
      "names": {
        "fr": "Saeujeot coréen",
        "en": "saeujeot",
        "ru": "сэуджот"
      },
      "search_terms": [
        "Corée",
        "Poissons / fruits de mer",
        "Saeujeot coréen",
        "crevettes fermentées saumure",
        "fermented fish products",
        "saeujeot",
        "сэуджот"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "crevettes fermentées saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 300
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 10,
        "high": 30
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "saeujeot",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_196",
      "names": {
        "fr": "Myeolchi-jeot coréen",
        "en": "myeolchi-jeot",
        "ru": "мёлчи-джот"
      },
      "search_terms": [
        "Corée",
        "Myeolchi-jeot coréen",
        "Poissons / fruits de mer",
        "anchois fermentés saumure",
        "fermented fish products",
        "myeolchi-jeot",
        "мёлчи-джот"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "anchois fermentés saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 100,
        "typ": 300,
        "high": 1000
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 30,
        "high": 100
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "myeolchi-jeot",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_197",
      "names": {
        "fr": "Myeongnan-jeot coréen",
        "en": "myeongnan-jeot",
        "ru": "мёнран-джот"
      },
      "search_terms": [
        "Corée",
        "Myeongnan-jeot coréen",
        "Poissons / fruits de mer",
        "fermented fish products",
        "myeongnan-jeot",
        "œufs colin fermentés pimentés",
        "мёнран-джот"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "œufs colin fermentés pimentés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 150,
        "high": 400
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 22.5,
        "high": 60
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "myeongnan-jeot",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_198",
      "names": {
        "fr": "Bagoong alamang",
        "en": "bagoong alamang",
        "ru": "багонг аламанг"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Bagoong alamang",
        "Philippines",
        "Poissons / fruits de mer",
        "bagoong alamang",
        "fermented fish products",
        "krill/crevettes fermentés",
        "багонг аламанг"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Philippines",
      "cuisine_type": "Asie du Sud-Est",
      "process": "krill/crevettes fermentés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 40,
        "typ": 130,
        "high": 400
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 13,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bagoong alamang",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_199",
      "names": {
        "fr": "Kapi thaï",
        "en": "kapi",
        "ru": "капи"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Kapi thaï",
        "Poissons / fruits de mer",
        "Thaïlande",
        "fermented fish products",
        "kapi",
        "pâte crevettes fermentée",
        "капи"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Thaïlande",
      "cuisine_type": "Asie du Sud-Est",
      "process": "pâte crevettes fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 50,
        "typ": 150,
        "high": 500
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 5,
        "typ": 15,
        "high": 50
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kapi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_200",
      "names": {
        "fr": "Belacan malaisien",
        "en": "belacan, blachan",
        "ru": "белачан"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Belacan malaisien",
        "Malaisie",
        "Poissons / fruits de mer",
        "belacan, blachan",
        "fermented fish products",
        "pâte crevettes fermentée séchée",
        "белачан"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Malaisie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "pâte crevettes fermentée séchée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 80,
        "typ": 200,
        "high": 600
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 8,
        "typ": 20,
        "high": 60
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "belacan, blachan",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_201",
      "names": {
        "fr": "Terasi indonésien",
        "en": "terasi, trassi",
        "ru": "тераси"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Indonésie",
        "Poissons / fruits de mer",
        "Terasi indonésien",
        "fermented fish products",
        "pâte crevettes fermentée",
        "terasi, trassi",
        "тераси"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Indonésie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "pâte crevettes fermentée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 60,
        "typ": 180,
        "high": 550
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 18,
        "high": 55
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "terasi, trassi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Condiment fermenté concentré. Portion petite mais teneur élevée.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_202",
      "names": {
        "fr": "Kapusta kiszona polonaise",
        "en": "polish sauerkraut",
        "ru": "квашеная капуста польская"
      },
      "search_terms": [
        "Global / international",
        "Kapusta kiszona polonaise",
        "Légumes / fermentés",
        "Pologne",
        "choucroute lacto",
        "fermented vegetables / pickled foods",
        "polish sauerkraut",
        "квашеная капуста польская"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Pologne",
      "cuisine_type": "Global / international",
      "process": "choucroute lacto",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 100
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 5,
        "typ": 20,
        "high": 100
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.sciencedirect.com/science/article/abs/pii/S0308814699001314",
      "restaurant_alias": "polish sauerkraut",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proche sauerkraut allemand. Fermentation traditionnelle.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_203",
      "names": {
        "fr": "Kkakdugi (kimchi radis)",
        "en": "kkakdugi",
        "ru": "ккактуги"
      },
      "search_terms": [
        "Corée",
        "Kkakdugi (kimchi radis)",
        "Légumes / fermentés",
        "fermented vegetables / pickled foods",
        "kkakdugi",
        "radis cubé lacto-fermenté pimenté",
        "ккактуги"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "radis cubé lacto-fermenté pimenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 60,
        "high": 300
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 8,
        "typ": 48,
        "high": 240
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "kkakdugi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Kimchi de radis daikon.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_204",
      "names": {
        "fr": "Oi kimchi (concombre)",
        "en": "oi kimchi",
        "ru": "ой кимчхи"
      },
      "search_terms": [
        "Corée",
        "Légumes / fermentés",
        "Oi kimchi (concombre)",
        "concombre lacto pimenté",
        "fermented vegetables / pickled foods",
        "oi kimchi",
        "ой кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "concombre lacto pimenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 150
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 24,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "oi kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Kimchi concombre court vieillissement.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_205",
      "names": {
        "fr": "Chonggak kimchi (radis jeune)",
        "en": "chonggak kimchi",
        "ru": "чхонгак кимчхи"
      },
      "search_terms": [
        "Chonggak kimchi (radis jeune)",
        "Corée",
        "Légumes / fermentés",
        "chonggak kimchi",
        "fermented vegetables / pickled foods",
        "petit radis lacto",
        "чхонгак кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "petit radis lacto",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 60,
        "high": 250
      },
      "portion_standard": {
        "label": "60 g",
        "value": 60.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 6,
        "typ": 36,
        "high": 150
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "chonggak kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Radis jeune avec tige lacto.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 55,
          "max": 70,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 110,
          "max": 150,
          "unit": "g",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_206",
      "names": {
        "fr": "Pa kimchi (ciboule)",
        "en": "pa kimchi",
        "ru": "пха кимчхи"
      },
      "search_terms": [
        "Corée",
        "Légumes / fermentés",
        "Pa kimchi (ciboule)",
        "ciboule lacto très épicée",
        "fermented vegetables / pickled foods",
        "pa kimchi",
        "пха кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "ciboule lacto très épicée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 80,
        "high": 400
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 40,
        "high": 200
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "pa kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Kimchi d'échalote/ciboule. Outlier élevé.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_207",
      "names": {
        "fr": "Gat kimchi (moutarde)",
        "en": "gat kimchi",
        "ru": "кат кимчхи"
      },
      "search_terms": [
        "Corée",
        "Gat kimchi (moutarde)",
        "Légumes / fermentés",
        "fermented vegetables / pickled foods",
        "gat kimchi",
        "moutarde lacto long",
        "кат кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "moutarde lacto long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 70,
        "high": 300
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 35,
        "high": 150
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "gat kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Feuilles de moutarde lacto.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_208",
      "names": {
        "fr": "Mul kimchi (eau)",
        "en": "mul kimchi",
        "ru": "муль кимчхи"
      },
      "search_terms": [
        "Corée",
        "Légumes / fermentés",
        "Mul kimchi (eau)",
        "fermented vegetables / pickled foods",
        "mul kimchi",
        "radis/chou dans eau",
        "муль кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "radis/chou dans eau",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "100 mL",
        "value": 100.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "mul kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Version liquide moins concentrée.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_209",
      "names": {
        "fr": "Baek kimchi (blanc)",
        "en": "baek kimchi",
        "ru": "пэк кимчхи"
      },
      "search_terms": [
        "Baek kimchi (blanc)",
        "Corée",
        "Légumes / fermentés",
        "baek kimchi",
        "chou lacto sans piment",
        "fermented vegetables / pickled foods",
        "пэк кимчхи"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "chou lacto sans piment",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 100
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 16,
        "high": 80
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6915361/",
      "restaurant_alias": "baek kimchi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Kimchi blanc sans piment.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_210",
      "names": {
        "fr": "Pao cai Sichuan",
        "en": "pao cai, suan cai",
        "ru": "пао цай"
      },
      "search_terms": [
        "Chine / Taïwan",
        "Chine Sichuan",
        "Légumes / fermentés",
        "Pao cai Sichuan",
        "fermented vegetables / pickled foods",
        "légumes lacto saumure épicée",
        "pao cai, suan cai",
        "пао цай"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Chine Sichuan",
      "cuisine_type": "Chine / Taïwan",
      "process": "légumes lacto saumure épicée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 200
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 8,
        "typ": 32,
        "high": 160
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/29444008/",
      "restaurant_alias": "pao cai, suan cai",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation lactique prolongée sichuanaise.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 140,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_211",
      "names": {
        "fr": "Zha cai (mustard tuber)",
        "en": "zha cai",
        "ru": "джа цай"
      },
      "search_terms": [
        "Chine",
        "Chine / Taïwan",
        "Sauces / condiments",
        "Zha cai (mustard tuber)",
        "fermented vegetables / pickled foods",
        "tubercule moutarde lacto salé",
        "zha cai",
        "джа цай"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "tubercule moutarde lacto salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 50,
        "high": 250
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 15,
        "high": 75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "zha cai",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Tubercule salé très fermenté.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_212",
      "names": {
        "fr": "Takuan",
        "en": "takuan",
        "ru": "такуан"
      },
      "search_terms": [
        "Japon",
        "Légumes / fermentés",
        "Takuan",
        "daikon lacto jaune long",
        "fermented vegetables / pickled foods",
        "takuan",
        "такуан"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "daikon lacto jaune long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 180
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 12,
        "high": 54
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "takuan",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Radis long salage long.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_213",
      "names": {
        "fr": "Umeboshi",
        "en": "umeboshi",
        "ru": "умэбоси"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Japon",
        "Umeboshi",
        "fermented vegetables / pickled foods",
        "prunes sel lacto vinaigrées",
        "umeboshi",
        "умэбоси"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "prunes sel lacto vinaigrées",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 100
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 4.5,
        "high": 15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "umeboshi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Prune ume salée fermentée long.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 45,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_214",
      "names": {
        "fr": "Nukazuke",
        "en": "nukazuke",
        "ru": "нукадзуке"
      },
      "search_terms": [
        "Japon",
        "Légumes / fermentés",
        "Nukazuke",
        "fermented vegetables / pickled foods",
        "légumes son de riz fermenté",
        "nukazuke",
        "нукадзуке"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "légumes son de riz fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 40,
        "high": 200
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 16,
        "high": 80
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nukazuke",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation son de riz.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_215",
      "names": {
        "fr": "Olives Kalamata",
        "en": "kalamata olives",
        "ru": "каламата"
      },
      "search_terms": [
        "Grèce",
        "Légumes / fermentés",
        "Méditerranée",
        "Olives Kalamata",
        "fermented vegetables / pickled foods",
        "kalamata olives",
        "olives lacto saumure",
        "каламата"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Grèce",
      "cuisine_type": "Méditerranée",
      "process": "olives lacto saumure",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 5,
        "high": 30
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.1,
        "typ": 1,
        "high": 6
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22098807/",
      "restaurant_alias": "kalamata olives",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "García-García 2000 : 5-300 mg/kg selon lots.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_216",
      "names": {
        "fr": "Olives Manzanilla espagnoles",
        "en": "manzanilla",
        "ru": "мансанилья"
      },
      "search_terms": [
        "Espagne",
        "Légumes / fermentés",
        "Olives Manzanilla espagnoles",
        "fermented vegetables / pickled foods",
        "manzanilla",
        "olives lacto saumure verte",
        "мансанилья"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "olives lacto saumure verte",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.3,
        "typ": 3,
        "high": 20
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.06,
        "typ": 0.6,
        "high": 4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22098807/",
      "restaurant_alias": "manzanilla",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Olive verte espagnole standard.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_217",
      "names": {
        "fr": "Achaar mangue",
        "en": "mango achaar, aam ka achar",
        "ru": "мангровый ачаар"
      },
      "search_terms": [
        "Achaar mangue",
        "Boissons alcoolisées",
        "Inde",
        "fermented vegetables / pickled foods",
        "mango achaar, aam ka achar",
        "mangue huile piment vinaigre",
        "мангровый ачаар"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Inde",
      "cuisine_type": "Inde",
      "process": "mangue huile piment vinaigre",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 15
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.1,
        "typ": 0.6,
        "high": 3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "mango achaar, aam ka achar",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 40,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_218",
      "names": {
        "fr": "Achaar citron vert",
        "en": "lime pickle, nimbu achar",
        "ru": "ачаар лайм"
      },
      "search_terms": [
        "Achaar citron vert",
        "Inde",
        "Inde Sud",
        "Légumes / fermentés",
        "citron huile/sel fermenté long",
        "fermented vegetables / pickled foods",
        "lime pickle, nimbu achar",
        "ачаар лайм"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Inde Sud",
      "cuisine_type": "Inde",
      "process": "citron huile/sel fermenté long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 25
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.15,
        "typ": 0.75,
        "high": 3.75
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "lime pickle, nimbu achar",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_219",
      "names": {
        "fr": "Achaar piment",
        "en": "chili pickle",
        "ru": "ачаар перец"
      },
      "search_terms": [
        "Achaar piment",
        "Inde",
        "Légumes / fermentés",
        "chili pickle",
        "fermented vegetables / pickled foods",
        "piments huile épices",
        "ачаар перец"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Inde",
      "cuisine_type": "Inde",
      "process": "piments huile épices",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 20
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.075,
        "typ": 0.45,
        "high": 3
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chili pickle",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_220",
      "names": {
        "fr": "Chhundo gujarati",
        "en": "chhundo, chundo",
        "ru": "чхундо"
      },
      "search_terms": [
        "Chhundo gujarati",
        "Fruits",
        "Inde",
        "Inde Gujarat",
        "chhundo, chundo",
        "fermented vegetables / pickled foods",
        "mangue rapée sucre épices",
        "чхундо"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Inde Gujarat",
      "cuisine_type": "Inde",
      "process": "mangue rapée sucre épices",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 15
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.075,
        "typ": 0.45,
        "high": 2.25
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chhundo, chundo",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_221",
      "names": {
        "fr": "Suan cai chinois",
        "en": "suan cai",
        "ru": "суань цай"
      },
      "search_terms": [
        "Chine",
        "Chine / Taïwan",
        "Légumes / fermentés",
        "Suan cai chinois",
        "chou moutarde fermenté sec",
        "fermented vegetables / pickled foods",
        "suan cai",
        "суань цай"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "chou moutarde fermenté sec",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 50,
        "high": 250
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4,
        "typ": 20,
        "high": 100
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "suan cai",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_222",
      "names": {
        "fr": "Beni shoga (gingembre rouge)",
        "en": "beni shoga",
        "ru": "бени шога"
      },
      "search_terms": [
        "Beni shoga (gingembre rouge)",
        "Boissons alcoolisées",
        "Japon",
        "beni shoga",
        "fermented vegetables / pickled foods",
        "gingembre vinaigre rouge",
        "бени шога"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "gingembre vinaigre rouge",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "beni shoga",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Pickle à l'huile/acide : fermentation inhibée par pH.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_223",
      "names": {
        "fr": "Gari (gingembre sushi)",
        "en": "gari, sushi ginger",
        "ru": "гари"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Gari (gingembre sushi)",
        "Japon",
        "fermented vegetables / pickled foods",
        "gari, sushi ginger",
        "gingembre vinaigre sucre",
        "гари"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "gingembre vinaigre sucre",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.05,
        "high": 0.2
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "gari, sushi ginger",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Pickle à l'huile/acide : fermentation inhibée par pH.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_224",
      "names": {
        "fr": "Nozawana-zuke",
        "en": "nozawanazuke",
        "ru": "нодзавана"
      },
      "search_terms": [
        "Japon",
        "Légumes / fermentés",
        "Nozawana-zuke",
        "fermented vegetables / pickled foods",
        "feuilles moutarde lacto",
        "nozawanazuke",
        "нодзавана"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "feuilles moutarde lacto",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 150
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 9,
        "high": 45
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nozawanazuke",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_225",
      "names": {
        "fr": "Dua muoi vietnamien",
        "en": "dua muoi, pickled mustard greens",
        "ru": "зуа муой"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Dua muoi vietnamien",
        "Sauces / condiments",
        "Vietnam",
        "dua muoi, pickled mustard greens",
        "fermented vegetables / pickled foods",
        "moutarde lacto condiment",
        "зуа муой"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Vietnam",
      "cuisine_type": "Asie du Sud-Est",
      "process": "moutarde lacto condiment",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 150
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 12,
        "high": 60
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dua muoi, pickled mustard greens",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 80,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 120,
          "max": 160,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_226",
      "names": {
        "fr": "Pousses bambou fermentées (soibum)",
        "en": "soibum, fermented bamboo shoots",
        "ru": "сойбум бамбук"
      },
      "search_terms": [
        "Inde",
        "Inde NE/Asie SE",
        "Légumes / fermentés",
        "Pousses bambou fermentées (soibum)",
        "bambou lacto long",
        "fermented vegetables / pickled foods",
        "soibum, fermented bamboo shoots",
        "сойбум бамбук"
      ],
      "family": "Légumes / fermentés",
      "cuisine_region_raw": "Inde NE/Asie SE",
      "cuisine_type": "Inde",
      "process": "bambou lacto long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 60,
        "high": 250
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 30,
        "high": 125
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.nature.com/articles/s41538-022-00130-w",
      "restaurant_alias": "soibum, fermented bamboo shoots",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lacto-fermentation prolongée : accumulation possible.",
      "fda_category": "fermented vegetables / pickled foods",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_227",
      "names": {
        "fr": "Tofu frais ferme",
        "en": "tofu, firm tofu",
        "ru": "тофу свежий"
      },
      "search_terms": [
        "Asie/global",
        "Global / international",
        "Soja / légumineuses fermentés",
        "Tofu frais ferme",
        "fresh meat – not restricted",
        "soja caillé non fermenté",
        "tofu, firm tofu",
        "тофу свежий"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Asie/global",
      "cuisine_type": "Global / international",
      "process": "soja caillé non fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 0.8
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.3,
        "high": 0.8
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://sniglobal.org/many-soyfoods-suitable-for-low-tyramine-diets/",
      "restaurant_alias": "tofu, firm tofu",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Shulman 1989 : 100g tofu = 0,8 mg. Vert.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_228",
      "names": {
        "fr": "Edamame",
        "en": "edamame",
        "ru": "эдамамэ"
      },
      "search_terms": [
        "Edamame",
        "Fromages",
        "Japon",
        "edamame",
        "fresh meat – not restricted",
        "soja frais bouilli",
        "эдамамэ"
      ],
      "family": "Fromages",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "soja frais bouilli",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 0.6
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.2,
        "high": 0.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "edamame",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Soja frais non fermenté.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 130,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 275,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_229",
      "names": {
        "fr": "Miso shiro (blanc)",
        "en": "miso shiro, white miso",
        "ru": "мисо сиро"
      },
      "search_terms": [
        "Japon",
        "Miso shiro (blanc)",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "miso shiro, white miso",
        "pâte soja jeune",
        "мисо сиро"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "pâte soja jeune",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 30,
        "high": 100
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 4.5,
        "high": 15
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22063060/",
      "restaurant_alias": "miso shiro, white miso",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Miso court fermentation, plus doux.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_230",
      "names": {
        "fr": "Miso aka/rouge",
        "en": "miso aka, red miso",
        "ru": "мисо ака"
      },
      "search_terms": [
        "Japon",
        "Miso aka/rouge",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "miso aka, red miso",
        "pâte soja long fermenté rouge",
        "мисо ака"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "pâte soja long fermenté rouge",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 80,
        "high": 300
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 12,
        "high": 45
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22063060/",
      "restaurant_alias": "miso aka, red miso",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Miso long (>1 an) : accumulation forte.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_231",
      "names": {
        "fr": "Miso hatcho",
        "en": "miso hatcho",
        "ru": "мисо хаттё"
      },
      "search_terms": [
        "Japon",
        "Miso hatcho",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "miso hatcho",
        "pâte soja pur long fermentation",
        "мисо хаттё"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "pâte soja pur long fermentation",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 15,
        "high": 60
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22063060/",
      "restaurant_alias": "miso hatcho",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Miso pur soja 2+ ans.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_232",
      "names": {
        "fr": "Miso mugi (orge)",
        "en": "miso mugi",
        "ru": "мисо муги"
      },
      "search_terms": [
        "Japon",
        "Miso mugi (orge)",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "miso mugi",
        "soja+orge fermenté",
        "мисо муги"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "soja+orge fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 60,
        "high": 200
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.25,
        "typ": 9,
        "high": 30
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "miso mugi",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Miso mélange avec orge.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_233",
      "names": {
        "fr": "Doenjang industriel",
        "en": "doenjang industrial",
        "ru": "твенджан пром."
      },
      "search_terms": [
        "Corée",
        "Doenjang industriel",
        "Soja / légumineuses fermentés",
        "doenjang industrial",
        "fermented soy products",
        "pâte soja fermentée standardisée",
        "твенджан пром."
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "pâte soja fermentée standardisée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 50,
        "high": 200
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 7.5,
        "high": 30
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22980868/",
      "restaurant_alias": "doenjang industrial",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Doenjang commercial standardisé.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_234",
      "names": {
        "fr": "Doenjang traditionnel 2-5 ans",
        "en": "traditional doenjang, meju-based",
        "ru": "твенджан традиционный"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Corée",
        "Doenjang traditionnel 2-5 ans",
        "fermented soy products",
        "pâte soja fermentée artisanale long",
        "traditional doenjang, meju-based",
        "твенджан традиционный"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "pâte soja fermentée artisanale long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 100,
        "typ": 500,
        "high": 3000
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 15,
        "typ": 75,
        "high": 450
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22980868/",
      "restaurant_alias": "traditional doenjang, meju-based",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Tamang 2010 : moyenne 1266 mg/kg n=23. Outliers >3000 mg/kg.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 45,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_235",
      "names": {
        "fr": "Doubanjiang Pixian",
        "en": "pixian doubanjiang",
        "ru": "дубаньцзян писянь"
      },
      "search_terms": [
        "Chine / Taïwan",
        "Chine Sichuan",
        "Doubanjiang Pixian",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "fèves fermentées piment long",
        "pixian doubanjiang",
        "дубаньцзян писянь"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine Sichuan",
      "cuisine_type": "Chine / Taïwan",
      "process": "fèves fermentées piment long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 60,
        "high": 250
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.25,
        "typ": 9,
        "high": 37.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "pixian doubanjiang",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Version Pixian longue fermentation.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_236",
      "names": {
        "fr": "Tianmianjiang",
        "en": "tianmianjiang, sweet bean paste",
        "ru": "тяньмяньцзян"
      },
      "search_terms": [
        "Chine",
        "Chine / Taïwan",
        "Soja / légumineuses fermentés",
        "Tianmianjiang",
        "fermented soy products",
        "pâte haricot jaune sweet",
        "tianmianjiang, sweet bean paste",
        "тяньмяньцзян"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "pâte haricot jaune sweet",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 25,
        "high": 100
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 3.75,
        "high": 15
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "tianmianjiang, sweet bean paste",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy doubanjiang doux.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_237",
      "names": {
        "fr": "Sauce soja koikuchi",
        "en": "koikuchi shoyu",
        "ru": "соевый соус коикути"
      },
      "search_terms": [
        "Japon",
        "Sauce soja koikuchi",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "koikuchi shoyu",
        "standard japonais long",
        "соевый соус коикути"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "standard japonais long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 50,
        "typ": 120,
        "high": 300
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 18,
        "high": 45
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8889911/",
      "restaurant_alias": "koikuchi shoyu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Walker 1996 : 94 mg/100 mL. 1 c.à s. = 5-10 mg.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_238",
      "names": {
        "fr": "Sauce soja usukuchi",
        "en": "usukuchi shoyu",
        "ru": "усукути"
      },
      "search_terms": [
        "Japon",
        "Sauce soja usukuchi",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "light japonaise",
        "usukuchi shoyu",
        "усукути"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "light japonaise",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 30,
        "typ": 80,
        "high": 200
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 12,
        "high": 30
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8889911/",
      "restaurant_alias": "usukuchi shoyu",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Version light mais fermentée.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_239",
      "names": {
        "fr": "Saishikomi shoyu",
        "en": "saishikomi shoyu, re-brewed soy",
        "ru": "сайсикоми"
      },
      "search_terms": [
        "Japon",
        "Saishikomi shoyu",
        "Soja / légumineuses fermentés",
        "double fermentation premium",
        "fermented soy products",
        "saishikomi shoyu, re-brewed soy",
        "сайсикоми"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "double fermentation premium",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 80,
        "typ": 180,
        "high": 400
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 12,
        "typ": 27,
        "high": 60
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "saishikomi shoyu, re-brewed soy",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Double fermentation = plus concentré.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_240",
      "names": {
        "fr": "Sauce soja chinoise dark",
        "en": "chinese dark soy, lao chou",
        "ru": "тёмный китайский соевый"
      },
      "search_terms": [
        "Chine",
        "Chine / Taïwan",
        "Sauce soja chinoise dark",
        "Soja / légumineuses fermentés",
        "chinese dark soy, lao chou",
        "fermented soy products",
        "long vieillissement mélasse",
        "тёмный китайский соевый"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "long vieillissement mélasse",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 60,
        "typ": 150,
        "high": 350
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 9,
        "typ": 22.5,
        "high": 52.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "chinese dark soy, lao chou",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Version chinoise foncée épaissie.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_241",
      "names": {
        "fr": "Kecap manis",
        "en": "kecap manis",
        "ru": "кечап манис"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Indonésie",
        "Kecap manis",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "kecap manis",
        "soja sweet soja+sucre de palme",
        "кечап манис"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Indonésie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "soja sweet soja+sucre de palme",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 20,
        "typ": 60,
        "high": 200
      },
      "portion_standard": {
        "label": "15 mL",
        "value": 15.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 9,
        "high": 30
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kecap manis",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Dilué sucre mais fermenté.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_242",
      "names": {
        "fr": "Dawadawa / iru / netetou",
        "en": "dawadawa, iru, netetou",
        "ru": "давадава"
      },
      "search_terms": [
        "Afrique",
        "Afrique Ouest",
        "Dawadawa / iru / netetou",
        "Soja / légumineuses fermentés",
        "dawadawa, iru, netetou",
        "fermented soy products",
        "locust bean fermenté Bacillus",
        "давадава"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Afrique Ouest",
      "cuisine_type": "Afrique",
      "process": "locust bean fermenté Bacillus",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 300
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.25,
        "typ": 12,
        "high": 45
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14724",
      "restaurant_alias": "dawadawa, iru, netetou",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Parkouda 2009 : PEA 272, histamine 82 mg/kg. Proxy pour tyramine élevée.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_243",
      "names": {
        "fr": "Soumbala",
        "en": "soumbala, sumbala",
        "ru": "сумбала"
      },
      "search_terms": [
        "Afrique",
        "Afrique Ouest",
        "Parkia biglobosa fermenté Bacillus",
        "Soja / légumineuses fermentés",
        "Soumbala",
        "fermented soy products",
        "soumbala, sumbala",
        "сумбала"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Afrique Ouest",
      "cuisine_type": "Afrique",
      "process": "Parkia biglobosa fermenté Bacillus",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 350
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 15,
        "high": 52.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14724",
      "restaurant_alias": "soumbala, sumbala",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation Bacillus prolongée.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_244",
      "names": {
        "fr": "Ogiri",
        "en": "ogiri",
        "ru": "огири"
      },
      "search_terms": [
        "Afrique",
        "Nigeria",
        "Ogiri",
        "Soja / légumineuses fermentés",
        "fermented soy products",
        "graines melon fermentées",
        "ogiri",
        "огири"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Nigeria",
      "cuisine_type": "Afrique",
      "process": "graines melon fermentées",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 20,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 15,
        "high": 60
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ogiri",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Proxy dawadawa, Noir par précaution.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_245",
      "names": {
        "fr": "Ugba/ukpaka",
        "en": "ugba, ukpaka",
        "ru": "угба"
      },
      "search_terms": [
        "Afrique",
        "Nigeria",
        "Soja / légumineuses fermentés",
        "Ugba/ukpaka",
        "fermented soy products",
        "graines Afzelia fermentées",
        "ugba, ukpaka",
        "угба"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Nigeria",
      "cuisine_type": "Afrique",
      "process": "graines Afzelia fermentées",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 300
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 16,
        "high": 60
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ugba, ukpaka",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Graines Afzelia africana fermentées.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 10,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_246",
      "names": {
        "fr": "Fèves fraîches cuites",
        "en": "cooked fava beans, broad beans",
        "ru": "бобы свежие варёные"
      },
      "search_terms": [
        "Fèves / légumineuses",
        "Fèves fraîches cuites",
        "Global",
        "Global / international",
        "cooked fava beans, broad beans",
        "cuites",
        "fava/broad beans (L-DOPA mechanism)",
        "бобы свежие варёные"
      ],
      "family": "Fèves / légumineuses",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "cuites",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 1,
        "high": 3
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1,
        "high": 3
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.ncbi.nlm.nih.gov/books/NBK554508/",
      "restaurant_alias": "cooked fava beans, broad beans",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": true
      },
      "variability": "modérée",
      "supplemental_note": "Mécanisme L-DOPA principal, PAS tyramine. Crises hypertensives documentées.",
      "fda_category": "fava/broad beans (L-DOPA mechanism)",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_247",
      "names": {
        "fr": "Fèves séchées cuites",
        "en": "dried fava beans cooked",
        "ru": "бобы сушёные варёные"
      },
      "search_terms": [
        "Fèves / légumineuses",
        "Fèves séchées cuites",
        "Global",
        "Global / international",
        "dried fava beans cooked",
        "fava/broad beans (L-DOPA mechanism)",
        "séchées cuites",
        "бобы сушёные варёные"
      ],
      "family": "Fèves / légumineuses",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "séchées cuites",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 1,
        "high": 3
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1,
        "high": 3
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.ncbi.nlm.nih.gov/books/NBK554508/",
      "restaurant_alias": "dried fava beans cooked",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": true
      },
      "variability": "modérée",
      "supplemental_note": "Même mécanisme L-DOPA.",
      "fda_category": "fava/broad beans (L-DOPA mechanism)",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_248",
      "names": {
        "fr": "Fèves jeunes en gousse (broad bean pods)",
        "en": "broad bean pods, fava pods",
        "ru": "бобы молодые в стручке"
      },
      "search_terms": [
        "Fèves / légumineuses",
        "Fèves jeunes en gousse (broad bean pods)",
        "Global",
        "Global / international",
        "broad bean pods, fava pods",
        "fava/broad beans (L-DOPA mechanism)",
        "gousse entière fraîche",
        "бобы молодые в стручке"
      ],
      "family": "Fèves / légumineuses",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "gousse entière fraîche",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": 1,
        "high": 5
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://www.ncbi.nlm.nih.gov/books/NBK554508/",
      "restaurant_alias": "broad bean pods, fava pods",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": true
      },
      "variability": "forte",
      "supplemental_note": "Catégorie FDA explicite. Cosse contient L-DOPA 200-300 mg/100g (Johns & Hertzler).",
      "fda_category": "fava/broad beans (L-DOPA mechanism)",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_249",
      "names": {
        "fr": "Pain au levain long-fermenté",
        "en": "sourdough",
        "ru": "хлеб на закваске"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Pain au levain long-fermenté",
        "Sauces / condiments",
        "condiments – not restricted",
        "levain naturel long",
        "sourdough",
        "хлеб на закваске"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "levain naturel long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.25,
        "high": 1.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/25182933/",
      "restaurant_alias": "sourdough",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Diana 2014 : <10 mg/kg tyramine. Vert limité.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 50,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 150,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_250",
      "names": {
        "fr": "Pain de seigle russe borodinsky",
        "en": "borodinsky, darnitsky",
        "ru": "бородинский"
      },
      "search_terms": [
        "Pain de seigle russe borodinsky",
        "Russie",
        "Russie / Europe de l'Est",
        "Sauces / condiments",
        "borodinsky, darnitsky",
        "condiments – not restricted",
        "seigle levain long",
        "бородинский"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "seigle levain long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 2,
        "high": 8
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.25,
        "typ": 1,
        "high": 4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "borodinsky, darnitsky",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Pain seigle long fermentation.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 50,
          "max": 100,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 150,
          "max": 200,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_251",
      "names": {
        "fr": "Injera éthiopien",
        "en": "injera",
        "ru": "инджера"
      },
      "search_terms": [
        "Global / international",
        "Injera éthiopien",
        "Sauces / condiments",
        "condiments – not restricted",
        "injera",
        "teff fermenté long",
        "Éthiopie",
        "инджера"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Éthiopie",
      "cuisine_type": "Global / international",
      "process": "teff fermenté long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.8,
        "typ": 4,
        "high": 16
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.nature.com/articles/s41538-022-00130-w",
      "restaurant_alias": "injera",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fermentation 2-3 jours mais pain consommé en grandes quantités.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 80,
          "max": 160,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 325,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_252",
      "names": {
        "fr": "Pâte dosa/idli (riz+lentilles)",
        "en": "dosa, idli batter",
        "ru": "доса батер"
      },
      "search_terms": [
        "Inde",
        "Inde Sud",
        "Pâte dosa/idli (riz+lentilles)",
        "Sauces / condiments",
        "condiments – not restricted",
        "dosa, idli batter",
        "riz+lentilles fermenté naturel",
        "доса батер"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Inde Sud",
      "cuisine_type": "Inde",
      "process": "riz+lentilles fermenté naturel",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dosa, idli batter",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fermentation courte.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 100,
          "max": 200,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 400,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_253",
      "names": {
        "fr": "Kenkey ghanéen",
        "en": "kenkey",
        "ru": "кенки"
      },
      "search_terms": [
        "Afrique",
        "Ghana",
        "Kenkey ghanéen",
        "Sauces / condiments",
        "condiments – not restricted",
        "kenkey",
        "maïs fermenté boule cuite",
        "кенки"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Ghana",
      "cuisine_type": "Afrique",
      "process": "maïs fermenté boule cuite",
      "unit_base": "mg/100g",
      "mg100": {
        "low": null,
        "typ": null,
        "high": null
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": null,
        "typ": null,
        "high": null
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kenkey",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Aucune étude HPLC identifiée.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 40,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 100,
          "max": 200,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 400,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_254",
      "names": {
        "fr": "Kisra soudanais",
        "en": "kisra",
        "ru": "кисра"
      },
      "search_terms": [
        "Global / international",
        "Kisra soudanais",
        "Sauces / condiments",
        "Soudan",
        "condiments – not restricted",
        "kisra",
        "sorgho fermenté crêpe",
        "кисра"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Soudan",
      "cuisine_type": "Global / international",
      "process": "sorgho fermenté crêpe",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 30
      },
      "portion_standard": {
        "label": "80 g",
        "value": 80.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.8,
        "typ": 4,
        "high": 24
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "kisra",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Sorgho fermenté long. Putrescine 26,88 mg/kg (MDPI 2024).",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 65,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 80,
          "max": 160,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 325,
          "unit": "g",
          "featured": false
        },
        "default_qty": 80,
        "step": 5
      }
    },
    {
      "id": "TYR_255",
      "names": {
        "fr": "Banane très mûre noircie",
        "en": "overripe banana, banane noircie",
        "ru": "банан переспелый"
      },
      "search_terms": [
        "Banane très mûre noircie",
        "Fruits",
        "Global",
        "Global / international",
        "overripe banana, banane noircie",
        "overripe fruits",
        "surmûr",
        "банан переспелый"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "surmûr",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 10,
        "typ": 30,
        "high": 65
      },
      "portion_standard": {
        "label": "120 g",
        "value": 120.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 12,
        "typ": 36,
        "high": 78
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14434167/",
      "restaurant_alias": "overripe banana, banane noircie",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Foy & Parratt 1960 : 15-65 mg/100g. Catégorie FDA 'overripe fruits'.",
      "fda_category": "overripe fruits",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 140,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_256",
      "names": {
        "fr": "Guacamole laissé à l'air ≥2h",
        "en": "guacamole oxidized",
        "ru": "гуакамоле окисленный"
      },
      "search_terms": [
        "Amériques",
        "Fruits",
        "Guacamole laissé à l'air ≥2h",
        "Mexique",
        "avocat exposé air",
        "guacamole oxidized",
        "overripe fruits",
        "гуакамоле окисленный"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "avocat exposé air",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 30
      },
      "portion_standard": {
        "label": "60 g",
        "value": 60.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.2,
        "typ": 6,
        "high": 18
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/22980868/",
      "restaurant_alias": "guacamole oxidized",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Brunissement enzymatique favorise formation tyramine/dopamine.",
      "fda_category": "overripe fruits",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 55,
          "max": 70,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 110,
          "max": 150,
          "unit": "g",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_257",
      "names": {
        "fr": "Papaye très mûre",
        "en": "overripe papaya",
        "ru": "папайя переспелая"
      },
      "search_terms": [
        "Fruits",
        "Global / international",
        "Papaye très mûre",
        "Tropical",
        "overripe fruits",
        "overripe papaya",
        "surmûr",
        "папайя переспелая"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Tropical",
      "cuisine_type": "Global / international",
      "process": "surmûr",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 15
      },
      "portion_standard": {
        "label": "120 g",
        "value": 120.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.6,
        "typ": 3.6,
        "high": 18
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "overripe papaya",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy fruits surmûris.",
      "fda_category": "overripe fruits",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 140,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_258",
      "names": {
        "fr": "Mangue très mûre",
        "en": "overripe mango",
        "ru": "манго переспелое"
      },
      "search_terms": [
        "Fruits",
        "Global / international",
        "Mangue très mûre",
        "Tropical",
        "overripe fruits",
        "overripe mango",
        "surmûr",
        "манго переспелое"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Tropical",
      "cuisine_type": "Global / international",
      "process": "surmûr",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 15
      },
      "portion_standard": {
        "label": "120 g",
        "value": 120.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.6,
        "typ": 3.6,
        "high": 18
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "overripe mango",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Proxy fruits surmûris.",
      "fda_category": "overripe fruits",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 140,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_259",
      "names": {
        "fr": "Raisins secs (sultanines/Corinthe)",
        "en": "raisins, sultanas",
        "ru": "изюм"
      },
      "search_terms": [
        "Fruits",
        "Global",
        "Global / international",
        "Raisins secs (sultanines/Corinthe)",
        "dried fruits if overripe",
        "raisins, sultanas",
        "séché concentré",
        "изюм"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "séché concentré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.3,
        "typ": 1.5,
        "high": 4.5
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "raisins, sultanas",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "FDA Nardil cite explicitement 'raisins'.",
      "fda_category": "dried fruits if overripe",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_260",
      "names": {
        "fr": "Pruneaux",
        "en": "prunes",
        "ru": "чернослив"
      },
      "search_terms": [
        "Fruits",
        "Global",
        "Global / international",
        "Pruneaux",
        "dried fruits if overripe",
        "prune séchée",
        "prunes",
        "чернослив"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "prune séchée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 10
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.2,
        "typ": 1.2,
        "high": 4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "prunes",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Prune séchée = fruit concentré.",
      "fda_category": "dried fruits if overripe",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_261",
      "names": {
        "fr": "Dates Medjool fraîches",
        "en": "medjool dates",
        "ru": "финики меджул"
      },
      "search_terms": [
        "Dates Medjool fraîches",
        "Fruits",
        "Moyen-Orient",
        "Moyen-Orient / Maghreb",
        "dattes humides fraîches",
        "fresh fruit – not restricted",
        "medjool dates",
        "финики меджул"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Moyen-Orient",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "dattes humides fraîches",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.3,
        "typ": 2,
        "high": 8
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.09,
        "typ": 0.6,
        "high": 2.4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "medjool dates",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Dattes fraîches humides.",
      "fda_category": "fresh fruit – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_262",
      "names": {
        "fr": "Dates Deglet Nour séchées",
        "en": "deglet nour dates",
        "ru": "деглет нур"
      },
      "search_terms": [
        "Dates Deglet Nour séchées",
        "Fruits",
        "Maghreb",
        "Moyen-Orient / Maghreb",
        "dattes séchées standard",
        "deglet nour dates",
        "dried fruits if overripe",
        "деглет нур"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Maghreb",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "dattes séchées standard",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 12
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.15,
        "typ": 0.9,
        "high": 3.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "deglet nour dates",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Dattes séchées concentrées.",
      "fda_category": "dried fruits if overripe",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 55,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_263",
      "names": {
        "fr": "Figues séchées",
        "en": "dried figs",
        "ru": "инжир сушёный"
      },
      "search_terms": [
        "Figues séchées",
        "Fruits",
        "Méditerranée",
        "dried figs",
        "dried fruits if overripe",
        "séché concentré",
        "инжир сушёный"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Méditerranée",
      "cuisine_type": "Méditerranée",
      "process": "séché concentré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 10
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.2,
        "typ": 1.2,
        "high": 4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dried figs",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fruits séchés, valeur proportionnelle.",
      "fda_category": "dried fruits if overripe",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_264",
      "names": {
        "fr": "Durian très mûr",
        "en": "overripe durian",
        "ru": "дуриан переспелый"
      },
      "search_terms": [
        "Asie SE",
        "Asie du Sud-Est",
        "Durian très mûr",
        "Fruits",
        "fruit très odorant surmûr",
        "overripe durian",
        "overripe fruits",
        "дуриан переспелый"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Asie SE",
      "cuisine_type": "Asie du Sud-Est",
      "process": "fruit très odorant surmûr",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 8,
        "high": 30
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 8,
        "high": 30
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "overripe durian",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Données HPLC limitées. Proxy fruits surmûris tropicaux.",
      "fda_category": "overripe fruits",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_265",
      "names": {
        "fr": "Chocolat noir 85-100%",
        "en": "dark chocolate 85%",
        "ru": "шоколад 85%"
      },
      "search_terms": [
        "Chocolat noir 85-100%",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "cacao concentré",
        "condiments – not restricted",
        "dark chocolate 85%",
        "шоколад 85%"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "cacao concentré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.09,
        "high": 0.3
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "dark chocolate 85%",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Gillman réhabilite chocolat. PEA domine mais faible MAO.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_266",
      "names": {
        "fr": "Chocolat au lait",
        "en": "milk chocolate",
        "ru": "молочный шоколад"
      },
      "search_terms": [
        "Chocolat au lait",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "cacao+lait+sucre",
        "condiments – not restricted",
        "milk chocolate",
        "молочный шоколад"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "cacao+lait+sucre",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.03,
        "high": 0.15
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "milk chocolate",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Tyramine négligeable.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_267",
      "names": {
        "fr": "Nutella / pâte à tartiner cacao",
        "en": "nutella",
        "ru": "нутелла"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Nutella / pâte à tartiner cacao",
        "Sauces / condiments",
        "cacao+noisettes+huile",
        "condiments – not restricted",
        "nutella",
        "нутелла"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "cacao+noisettes+huile",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.03,
        "high": 0.15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nutella",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Pas de signal tyramine.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 12,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 30,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_268",
      "names": {
        "fr": "Cacao en poudre",
        "en": "cocoa powder",
        "ru": "какао порошок"
      },
      "search_terms": [
        "Cacao en poudre",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "cocoa powder",
        "condiments – not restricted",
        "pur concentré",
        "какао порошок"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "pur concentré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.05,
        "high": 0.2
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "cocoa powder",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Concentré mais portion réduite.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_269",
      "names": {
        "fr": "Vegemite",
        "en": "vegemite",
        "ru": "веджемайт"
      },
      "search_terms": [
        "Australie",
        "Global / international",
        "Levures / extraits",
        "Vegemite",
        "concentrated yeast extracts",
        "extrait levure autolysé",
        "vegemite",
        "веджемайт"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "Australie",
      "cuisine_type": "Global / international",
      "process": "extrait levure autolysé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 500,
        "typ": 1500,
        "high": 3000
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 25,
        "typ": 75,
        "high": 150
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
      "restaurant_alias": "vegemite",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Extrait levure autolysé concentré. Catégorie FDA explicite.",
      "fda_category": "concentrated yeast extracts",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_270",
      "names": {
        "fr": "Cenovis",
        "en": "cenovis",
        "ru": "сеновис"
      },
      "search_terms": [
        "Allemagne / Suisse",
        "Cenovis",
        "Levures / extraits",
        "Suisse",
        "cenovis",
        "concentrated yeast extracts",
        "extrait levure suisse",
        "сеновис"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "Suisse",
      "cuisine_type": "Allemagne / Suisse",
      "process": "extrait levure suisse",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 400,
        "typ": 1200,
        "high": 2500
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 20,
        "typ": 60,
        "high": 125
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
      "restaurant_alias": "cenovis",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Équivalent Marmite suisse.",
      "fda_category": "concentrated yeast extracts",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_271",
      "names": {
        "fr": "Vitam-R",
        "en": "vitam-r",
        "ru": "витам-р"
      },
      "search_terms": [
        "Allemagne",
        "Allemagne / Suisse",
        "Levures / extraits",
        "Vitam-R",
        "concentrated yeast extracts",
        "extrait levure allemand",
        "vitam-r",
        "витам-р"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "Allemagne",
      "cuisine_type": "Allemagne / Suisse",
      "process": "extrait levure allemand",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 400,
        "typ": 1200,
        "high": 2500
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 20,
        "typ": 60,
        "high": 125
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
      "restaurant_alias": "vitam-r",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Équivalent extrait levure autolysé.",
      "fda_category": "concentrated yeast extracts",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_272",
      "names": {
        "fr": "Levure nutritionnelle en flocons",
        "en": "nutritional yeast, nooch",
        "ru": "пищевые дрожжи"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Levure nutritionnelle en flocons",
        "Levures / extraits",
        "condiments – not restricted",
        "levure inactive non autolysée",
        "nutritional yeast, nooch",
        "пищевые дрожжи"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "levure inactive non autolysée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 2,
        "high": 10
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nutritional yeast, nooch",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "DISTINCTION CRUCIALE : inactive/non-fermentée ≠ Marmite. Gillman : Vert.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_273",
      "names": {
        "fr": "Bovril",
        "en": "bovril",
        "ru": "бовриль"
      },
      "search_terms": [
        "Bovril",
        "Levures / extraits",
        "Royaume-Uni / Irlande",
        "UK",
        "bovril",
        "concentrated yeast extracts",
        "extrait bœuf historique",
        "бовриль"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "extrait bœuf historique",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 200,
        "typ": 500,
        "high": 1200
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 25,
        "high": 60
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/9-MAOI-diet-short-2019.pdf",
      "restaurant_alias": "bovril",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Extrait viande historique.",
      "fda_category": "concentrated yeast extracts",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_274",
      "names": {
        "fr": "Oxo cube bœuf",
        "en": "oxo cube",
        "ru": "окско"
      },
      "search_terms": [
        "Levures / extraits",
        "Oxo cube bœuf",
        "Royaume-Uni / Irlande",
        "UK",
        "bouillon cube bœuf standardisé",
        "condiments – not restricted",
        "oxo cube",
        "окско"
      ],
      "family": "Levures / extraits",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "bouillon cube bœuf standardisé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.05,
        "typ": 0.25,
        "high": 1
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://doi.org/10.1016/j.jfca.2005.12.008",
      "restaurant_alias": "oxo cube",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "McCabe-Sellers 2006 : bouillon cube moderne réhabilité.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 4,
          "max": 6,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_275",
      "names": {
        "fr": "Bouillon cube Knorr/Maggi",
        "en": "knorr cube, maggi cube",
        "ru": "кубик магги"
      },
      "search_terms": [
        "Bouillon cube Knorr/Maggi",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "condiments – not restricted",
        "industriel standardisé",
        "knorr cube, maggi cube",
        "кубик магги"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "industriel standardisé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 15
      },
      "portion_standard": {
        "label": "5 g",
        "value": 5.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.025,
        "typ": 0.15,
        "high": 0.75
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://doi.org/10.1016/j.jfca.2005.12.008",
      "restaurant_alias": "knorr cube, maggi cube",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Bouillons modernes formulations basses tyramine.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 5,
          "max": 10,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_276",
      "names": {
        "fr": "Fond de veau/volaille industriel",
        "en": "veal stock, chicken stock",
        "ru": "фонд телятины пром."
      },
      "search_terms": [
        "Fond de veau/volaille industriel",
        "Global",
        "Global / international",
        "Sauces / condiments",
        "concentré industriel",
        "condiments – not restricted",
        "veal stock, chicken stock",
        "фонд телятины пром."
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "concentré industriel",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.1,
        "typ": 0.5,
        "high": 2
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "veal stock, chicken stock",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fonds concentrés industriels modernes.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_277",
      "names": {
        "fr": "Bière lager pasteurisée bouteille",
        "en": "bottled lager",
        "ru": "лагер бутылочное"
      },
      "search_terms": [
        "Bière lager pasteurisée bouteille",
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "alcoholic beverages",
        "bottled lager",
        "pasteurisée filtrée standard",
        "лагер бутылочное"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "pasteurisée filtrée standard",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.07,
        "high": 0.35
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.231,
        "high": 1.155
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "bottled lager",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Gillman/Gardner 1996 réhabilite bière bouteille. Vert limité.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_278",
      "names": {
        "fr": "Bière IPA craft non filtrée",
        "en": "IPA craft, unfiltered IPA",
        "ru": "IPA крафтовая"
      },
      "search_terms": [
        "Bière IPA craft non filtrée",
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "IPA craft, unfiltered IPA",
        "IPA крафтовая",
        "craft non filtrée",
        "tap beer"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "craft non filtrée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3.3,
        "typ": 16.5,
        "high": 49.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "IPA craft, unfiltered IPA",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Non filtrée/non pasteurisée = signal tap beer.",
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_279",
      "names": {
        "fr": "Bière de blé Weissbier",
        "en": "weissbier, weizen",
        "ru": "пшеничное пиво"
      },
      "search_terms": [
        "Allemagne",
        "Allemagne / Suisse",
        "Bière de blé Weissbier",
        "Boissons alcoolisées",
        "blé non filtrée",
        "tap beer",
        "weissbier, weizen",
        "пшеничное пиво"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Allemagne",
      "cuisine_type": "Allemagne / Suisse",
      "process": "blé non filtrée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 4,
        "high": 12
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3.3,
        "typ": 13.2,
        "high": 39.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "weissbier, weizen",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Bière trouble non filtrée.",
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_280",
      "names": {
        "fr": "Bière trappiste/abbaye",
        "en": "trappist, abbey beer",
        "ru": "траппистское пиво"
      },
      "search_terms": [
        "Belgique",
        "Bière trappiste/abbaye",
        "Boissons alcoolisées",
        "France / francophone",
        "refermentée bouteille long",
        "tap beer",
        "trappist, abbey beer",
        "траппистское пиво"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Belgique",
      "cuisine_type": "France / francophone",
      "process": "refermentée bouteille long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 4,
        "high": 12
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3.3,
        "typ": 13.2,
        "high": 39.6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "trappist, abbey beer",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Refermentation bouteille = proche craft.",
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_281",
      "names": {
        "fr": "Lambic/gueuze belge",
        "en": "lambic, gueuze",
        "ru": "ламбик"
      },
      "search_terms": [
        "Belgique",
        "Boissons alcoolisées",
        "France / francophone",
        "Lambic/gueuze belge",
        "fermentation spontanée",
        "lambic, gueuze",
        "tap beer",
        "ламбик"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Belgique",
      "cuisine_type": "France / francophone",
      "process": "fermentation spontanée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 6,
        "high": 20
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 6.6,
        "typ": 19.8,
        "high": 66
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "lambic, gueuze",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation spontanée + vieillissement = outliers.",
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_282",
      "names": {
        "fr": "Sour/Kriek beer",
        "en": "sour beer, kriek",
        "ru": "кислое пиво"
      },
      "search_terms": [
        "Belgique/craft",
        "Boissons alcoolisées",
        "France / francophone",
        "Sour/Kriek beer",
        "souche Brettanomyces/lacto",
        "sour beer, kriek",
        "tap beer",
        "кислое пиво"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Belgique/craft",
      "cuisine_type": "France / francophone",
      "process": "souche Brettanomyces/lacto",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3.3,
        "typ": 16.5,
        "high": 49.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "sour beer, kriek",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Acidité et fermentation multi-souches.",
      "fda_category": "tap beer",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_283",
      "names": {
        "fr": "Bière sans alcool",
        "en": "non-alcoholic beer",
        "ru": "безалкогольное"
      },
      "search_terms": [
        "Bière sans alcool",
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "alcoholic beverages",
        "déshydratée alcool retiré",
        "non-alcoholic beer",
        "безалкогольное"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "déshydratée alcool retiré",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.2
      },
      "portion_standard": {
        "label": "330 mL",
        "value": 330.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.165,
        "high": 0.66
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8151003/",
      "restaurant_alias": "non-alcoholic beer",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Signal tyramine équivalent bière bouteille pasteurisée.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 160,
          "max": 260,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 330,
          "max": 400,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 660,
          "max": 990,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 330,
        "step": 10
      }
    },
    {
      "id": "TYR_284",
      "names": {
        "fr": "Vin rouge Bordeaux/Cabernet",
        "en": "bordeaux, cabernet sauvignon",
        "ru": "красное бордо"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "France / francophone",
        "France/global",
        "Vin rouge Bordeaux/Cabernet",
        "bordeaux, cabernet sauvignon",
        "vin rouge tannique",
        "wine (red)",
        "красное бордо"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "France/global",
      "cuisine_type": "France / francophone",
      "process": "vin rouge tannique",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.8,
        "high": 3
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 1.2,
        "high": 4.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "bordeaux, cabernet sauvignon",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Soleas 1999 : typique 1-4 mg/L. Gillman tolère en modération.",
      "fda_category": "wine (red)",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_285",
      "names": {
        "fr": "Vin rouge Chianti DOCG",
        "en": "chianti",
        "ru": "кьянти"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Italie",
        "Vin rouge Chianti DOCG",
        "chianti",
        "vin rouge Sangiovese",
        "wine (red)",
        "кьянти"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Italie",
      "cuisine_type": "Italie",
      "process": "vin rouge Sangiovese",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0.5,
        "typ": 2,
        "high": 5
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 3,
        "high": 7.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "chianti",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "FDA Nardil cite nominativement Chianti.",
      "fda_category": "wine (red)",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_286",
      "names": {
        "fr": "Vin orange/nature sans soufre",
        "en": "orange wine, natural wine",
        "ru": "натуральное вино"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global / international",
        "Global craft",
        "Vin orange/nature sans soufre",
        "macération pelures long vieillissement",
        "orange wine, natural wine",
        "wine (red)",
        "натуральное вино"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global craft",
      "cuisine_type": "Global / international",
      "process": "macération pelures long vieillissement",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 6,
        "high": 20
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 9,
        "high": 30
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "orange wine, natural wine",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Vins non soufrés : fermentation moins contrôlée.",
      "fda_category": "wine (red)",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_287",
      "names": {
        "fr": "Champagne/Prosecco/Cava",
        "en": "champagne, prosecco, cava",
        "ru": "шампанское"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Champagne/Prosecco/Cava",
        "France / francophone",
        "France/Italie/Espagne",
        "alcoholic beverages",
        "champagne, prosecco, cava",
        "effervescent méthode traditionnelle",
        "шампанское"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "France/Italie/Espagne",
      "cuisine_type": "France / francophone",
      "process": "effervescent méthode traditionnelle",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.45,
        "high": 2.25
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "champagne, prosecco, cava",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Effervescents généralement bas.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_288",
      "names": {
        "fr": "Porto vintage/tawny",
        "en": "port, porto",
        "ru": "портвейн"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global / international",
        "Porto vintage/tawny",
        "Portugal",
        "fortified wines",
        "fortifié long vieillissement",
        "port, porto",
        "портвейн"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Portugal",
      "cuisine_type": "Global / international",
      "process": "fortifié long vieillissement",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 8,
        "high": 25
      },
      "portion_standard": {
        "label": "60 mL",
        "value": 60.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1.2,
        "typ": 4.8,
        "high": 15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "port, porto",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Catégorie FDA 'fortified wines'.",
      "fda_category": "fortified wines",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 60,
          "max": 70,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 120,
          "max": 180,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_289",
      "names": {
        "fr": "Xérès fino/oloroso",
        "en": "sherry, jerez, fino, oloroso",
        "ru": "херес"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Espagne",
        "Xérès fino/oloroso",
        "fortified wines",
        "fortifié oxydatif long",
        "sherry, jerez, fino, oloroso",
        "херес"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Espagne",
      "cuisine_type": "Espagne",
      "process": "fortifié oxydatif long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 3,
        "typ": 10,
        "high": 30
      },
      "portion_standard": {
        "label": "60 mL",
        "value": 60.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1.8,
        "typ": 6,
        "high": 18
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "sherry, jerez, fino, oloroso",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Oxydation + fortification.",
      "fda_category": "fortified wines",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 60,
          "max": 70,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 120,
          "max": 180,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_290",
      "names": {
        "fr": "Vermouth rouge/blanc",
        "en": "vermouth",
        "ru": "вермут"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "France / francophone",
        "Italie/France",
        "Vermouth rouge/blanc",
        "aromatisé fortifié",
        "fortified wines",
        "vermouth",
        "вермут"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Italie/France",
      "cuisine_type": "France / francophone",
      "process": "aromatisé fortifié",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 6,
        "high": 20
      },
      "portion_standard": {
        "label": "60 mL",
        "value": 60.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1.2,
        "typ": 3.6,
        "high": 12
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "vermouth",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Catégorie FDA fortifiés.",
      "fda_category": "fortified wines",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 60,
          "max": 70,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 120,
          "max": 180,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_291",
      "names": {
        "fr": "Madère",
        "en": "madeira",
        "ru": "мадейра"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global / international",
        "Madère",
        "Portugal",
        "fortified wines",
        "fortifié chauffé long",
        "madeira",
        "мадейра"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Portugal",
      "cuisine_type": "Global / international",
      "process": "fortifié chauffé long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 3,
        "typ": 10,
        "high": 30
      },
      "portion_standard": {
        "label": "60 mL",
        "value": 60.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1.8,
        "typ": 6,
        "high": 18
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/10552634/",
      "restaurant_alias": "madeira",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Équivalent Porto, chauffage = tyramine élevée.",
      "fda_category": "fortified wines",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 50,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 60,
          "max": 70,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 120,
          "max": 180,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_292",
      "names": {
        "fr": "Worcestershire (Lea & Perrins)",
        "en": "worcestershire, lea & perrins",
        "ru": "вустерский соус"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Royaume-Uni / Irlande",
        "UK",
        "Worcestershire (Lea & Perrins)",
        "anchois+mélasse+vinaigre long",
        "fermented condiments – caution",
        "worcestershire, lea & perrins",
        "вустерский соус"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "anchois+mélasse+vinaigre long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 60
      },
      "portion_standard": {
        "label": "5 mL",
        "value": 5.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.25,
        "typ": 1,
        "high": 3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "worcestershire, lea & perrins",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Contient anchois fermentés. Portion condiment faible.",
      "fda_category": "fermented condiments – caution",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 5,
          "max": 6,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 10,
          "max": 15,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_293",
      "names": {
        "fr": "HP Sauce",
        "en": "hp sauce",
        "ru": "HP соус"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "HP Sauce",
        "HP соус",
        "Royaume-Uni / Irlande",
        "UK",
        "condiments – not restricted",
        "hp sauce",
        "sauce brune tomate vinaigre"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "UK",
      "cuisine_type": "Royaume-Uni / Irlande",
      "process": "sauce brune tomate vinaigre",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 8,
        "high": 25
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.2,
        "typ": 0.8,
        "high": 2.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "hp sauce",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Pas de fermentation active.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_294",
      "names": {
        "fr": "Tabasco classique",
        "en": "tabasco",
        "ru": "табаско"
      },
      "search_terms": [
        "Amériques",
        "Boissons alcoolisées",
        "Tabasco classique",
        "USA",
        "condiments – not restricted",
        "piments fermentés 3 ans vinaigre",
        "tabasco",
        "табаско"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "USA",
      "cuisine_type": "Amériques",
      "process": "piments fermentés 3 ans vinaigre",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "5 mL",
        "value": 5.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.05,
        "typ": 0.25,
        "high": 1
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "tabasco",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "pH très acide inhibe décarboxylases.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 2,
          "max": 4,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 5,
          "max": 6,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 10,
          "max": 15,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 5,
        "step": 1
      }
    },
    {
      "id": "TYR_295",
      "names": {
        "fr": "Sriracha Huy Fong",
        "en": "sriracha",
        "ru": "шрирача"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Boissons alcoolisées",
        "Sriracha Huy Fong",
        "Vietnam/USA",
        "condiments – not restricted",
        "piment ail vinaigre",
        "sriracha",
        "шрирача"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Vietnam/USA",
      "cuisine_type": "Asie du Sud-Est",
      "process": "piment ail vinaigre",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0.5,
        "typ": 2,
        "high": 10
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.05,
        "typ": 0.2,
        "high": 1
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "sriracha",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Fermentation inhibée par vinaigre.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_296",
      "names": {
        "fr": "Sambal oelek",
        "en": "sambal oelek",
        "ru": "самбал оэлек"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Indonésie",
        "Sambal oelek",
        "Sauces / condiments",
        "condiments – not restricted",
        "piments frais/sel acide",
        "sambal oelek",
        "самбал оэлек"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Indonésie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "piments frais/sel acide",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 2,
        "high": 10
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.05,
        "typ": 0.2,
        "high": 1
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "sambal oelek",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Pas de longue fermentation.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_297",
      "names": {
        "fr": "Sambal belacan",
        "en": "sambal belacan",
        "ru": "самбал белачан"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Malaisie",
        "Poissons / fruits de mer",
        "Sambal belacan",
        "fermented fish products",
        "piment + belacan fermenté",
        "sambal belacan",
        "самбал белачан"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Malaisie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "piment + belacan fermenté",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 30,
        "typ": 100,
        "high": 400
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 3,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "sambal belacan",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Contient pâte de crevettes fermentée = Noir.",
      "fda_category": "fermented fish products",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 9,
          "max": 12,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_298",
      "names": {
        "fr": "Ketchup industriel",
        "en": "ketchup",
        "ru": "кетчуп пром."
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Global",
        "Global / international",
        "Ketchup industriel",
        "condiments – not restricted",
        "ketchup",
        "tomate sucre vinaigre",
        "кетчуп пром."
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "tomate sucre vinaigre",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 2
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.075,
        "high": 0.3
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://doi.org/10.1016/j.jfca.2005.12.008",
      "restaurant_alias": "ketchup",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Tomate acidifiée, pas fermentée.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 45,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_299",
      "names": {
        "fr": "Harissa tunisienne",
        "en": "harissa",
        "ru": "хариса"
      },
      "search_terms": [
        "Global / international",
        "Harissa tunisienne",
        "Sauces / condiments",
        "Tunisie",
        "condiments – not restricted",
        "harissa",
        "pâte piment huile épices",
        "хариса"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Tunisie",
      "cuisine_type": "Global / international",
      "process": "pâte piment huile épices",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 1,
        "high": 5
      },
      "portion_standard": {
        "label": "10 g",
        "value": 10.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "harissa",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Pas de fermentation active.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 4,
          "max": 8,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_300",
      "names": {
        "fr": "Ajvar serbe/balkan",
        "en": "ajvar",
        "ru": "айвар"
      },
      "search_terms": [
        "Ajvar serbe/balkan",
        "Balkans",
        "Russie / Europe de l'Est",
        "Sauces / condiments",
        "ajvar",
        "condiments – not restricted",
        "poivrons aubergines rôtis broyés",
        "айвар"
      ],
      "family": "Sauces / condiments",
      "cuisine_region_raw": "Balkans",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "poivrons aubergines rôtis broyés",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "portion_standard": {
        "label": "20 g",
        "value": 20.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.1,
        "high": 0.6
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ajvar",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Légumes cuits purée.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 15,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 20,
          "max": 40,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "default_qty": 20,
        "step": 5
      }
    },
    {
      "id": "TYR_301",
      "names": {
        "fr": "Tkemali géorgien",
        "en": "tkemali",
        "ru": "ткемали"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Géorgie",
        "Russie / Europe de l'Est",
        "Tkemali géorgien",
        "fermented condiments – caution",
        "prunes vinaigrées fermentation courte",
        "tkemali",
        "ткемали"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Géorgie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "prunes vinaigrées fermentation courte",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 12
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.075,
        "typ": 0.45,
        "high": 1.8
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "tkemali",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fermentation courte mais artisanale.",
      "fda_category": "fermented condiments – caution",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 12,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 30,
          "max": 45,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_302",
      "names": {
        "fr": "Vinaigre balsamique traditionnel 12+ ans",
        "en": "aceto balsamico tradizionale",
        "ru": "бальзамический"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Italie",
        "Italie Modena",
        "Vinaigre balsamique traditionnel 12+ ans",
        "aceto balsamico tradizionale",
        "condiments – not restricted",
        "vinaigrage aérobie long",
        "бальзамический"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Italie Modena",
      "cuisine_type": "Italie",
      "process": "vinaigrage aérobie long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.1,
        "typ": 0.5,
        "high": 2
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "aceto balsamico tradizionale",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Long vieillissement mais acidité.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_303",
      "names": {
        "fr": "Vinaigre noir Chinkiang",
        "en": "chinkiang vinegar, black vinegar",
        "ru": "черный китайский уксус"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Chine",
        "Chine / Taïwan",
        "Vinaigre noir Chinkiang",
        "chinkiang vinegar, black vinegar",
        "fermented condiments – caution",
        "riz noir fermenté long",
        "черный китайский уксус"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Chine",
      "cuisine_type": "Chine / Taïwan",
      "process": "riz noir fermenté long",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "10 mL",
        "value": 10.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.2,
        "typ": 1,
        "high": 4
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/23871015/",
      "restaurant_alias": "chinkiang vinegar, black vinegar",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Marcobal 2013 : 20-200 mg/L selon lots.",
      "fda_category": "fermented condiments – caution",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 5,
          "max": 8,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 10,
          "max": 12,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 10,
        "step": 1
      }
    },
    {
      "id": "TYR_304",
      "names": {
        "fr": "Saké junmai/ginjo",
        "en": "sake junmai, ginjo",
        "ru": "сакэ"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Japon",
        "Saké junmai/ginjo",
        "alcoholic beverages",
        "riz fermenté filtré",
        "sake junmai, ginjo",
        "сакэ"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "riz fermenté filtré",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0.5,
        "typ": 2,
        "high": 8
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 3,
        "high": 12
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "sake junmai, ginjo",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Fermentation riz prolongée.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_305",
      "names": {
        "fr": "Saké nigori non filtré",
        "en": "nigori sake",
        "ru": "нигори"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Japon",
        "Saké nigori non filtré",
        "alcoholic beverages",
        "nigori sake",
        "riz fermenté non filtré",
        "нигори"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Japon",
      "cuisine_type": "Japon",
      "process": "riz fermenté non filtré",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 1,
        "typ": 4,
        "high": 15
      },
      "portion_standard": {
        "label": "150 mL",
        "value": 150.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 6,
        "high": 22.5
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "nigori sake",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Non filtré = proche craft.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 150,
          "max": 180,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 450,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_306",
      "names": {
        "fr": "Soju",
        "en": "soju",
        "ru": "соджу"
      },
      "search_terms": [
        "Boissons fermentées",
        "Corée",
        "Soju",
        "alcoholic beverages",
        "alcool riz/patate distillé ou semi",
        "soju",
        "соджу"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "alcool riz/patate distillé ou semi",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 2
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.12,
        "high": 0.8
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "soju",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Si distillé = Vert ; version traditionnelle semi-fermentée variable.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_307",
      "names": {
        "fr": "Makgeolli non distillé",
        "en": "makgeolli, makkoli",
        "ru": "макколи"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Corée",
        "Makgeolli non distillé",
        "fermented beverages",
        "makgeolli, makkoli",
        "riz fermenté non filtré",
        "макколи"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Corée",
      "cuisine_type": "Corée",
      "process": "riz fermenté non filtré",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 60
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/21793213/",
      "restaurant_alias": "makgeolli, makkoli",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Kim 2011 : jusqu'à 60+ mg/L. À éviter.",
      "fda_category": "fermented beverages",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 600,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_308",
      "names": {
        "fr": "Whisky single malt",
        "en": "whisky, scotch",
        "ru": "виски"
      },
      "search_terms": [
        "Boissons fermentées",
        "Global / international",
        "Whisky single malt",
        "alcoholic beverages",
        "distillé vieilli fût",
        "whisky, scotch",
        "Écosse/global",
        "виски"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Écosse/global",
      "cuisine_type": "Global / international",
      "process": "distillé vieilli fût",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.12
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "whisky, scotch",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Distillation détruit tyramine.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_309",
      "names": {
        "fr": "Bourbon",
        "en": "bourbon",
        "ru": "бурбон"
      },
      "search_terms": [
        "Amériques",
        "Boissons fermentées",
        "Bourbon",
        "USA",
        "alcoholic beverages",
        "bourbon",
        "maïs distillé fût chêne",
        "бурбон"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "USA",
      "cuisine_type": "Amériques",
      "process": "maïs distillé fût chêne",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.12
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bourbon",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Distillation détruit tyramine.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_310",
      "names": {
        "fr": "Tequila/mezcal",
        "en": "tequila, mezcal",
        "ru": "текила"
      },
      "search_terms": [
        "Amériques",
        "Boissons fermentées",
        "Mexique",
        "Tequila/mezcal",
        "agave distillé",
        "alcoholic beverages",
        "tequila, mezcal",
        "текила"
      ],
      "family": "Boissons fermentées",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "agave distillé",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.12
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "tequila, mezcal",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Distillation élimine tyramine.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_311",
      "names": {
        "fr": "Cognac/armagnac",
        "en": "cognac, armagnac",
        "ru": "коньяк"
      },
      "search_terms": [
        "Boissons alcoolisées",
        "Cognac/armagnac",
        "France",
        "France / francophone",
        "alcoholic beverages",
        "cognac, armagnac",
        "eau-de-vie vin distillée",
        "коньяк"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "eau-de-vie vin distillée",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.12
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "cognac, armagnac",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Distillation élimine tyramine.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 40,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 80,
          "max": 120,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_312",
      "names": {
        "fr": "Pisco péruvien",
        "en": "pisco",
        "ru": "писко"
      },
      "search_terms": [
        "Fruits",
        "Global / international",
        "Pisco péruvien",
        "Pérou/Chili",
        "alcoholic beverages",
        "pisco",
        "raisin distillé non vieilli",
        "писко"
      ],
      "family": "Fruits",
      "cuisine_region_raw": "Pérou/Chili",
      "cuisine_type": "Global / international",
      "process": "raisin distillé non vieilli",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 0,
        "typ": 0.05,
        "high": 0.3
      },
      "portion_standard": {
        "label": "40 mL",
        "value": 40.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.02,
        "high": 0.12
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "pisco",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Eau-de-vie de raisin.",
      "fda_category": "alcoholic beverages",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 50,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 70,
          "max": 100,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_313",
      "names": {
        "fr": "Pulque mexicain",
        "en": "pulque",
        "ru": "пульке"
      },
      "search_terms": [
        "Amériques",
        "Boissons alcoolisées",
        "Mexique",
        "Pulque mexicain",
        "agave fermenté non distillé",
        "fermented beverages",
        "pulque",
        "пульке"
      ],
      "family": "Boissons alcoolisées",
      "cuisine_region_raw": "Mexique",
      "cuisine_type": "Amériques",
      "process": "agave fermenté non distillé",
      "unit_base": "mg/100mL",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 60
      },
      "portion_standard": {
        "label": "200 mL",
        "value": 200.0,
        "unit": "mL"
      },
      "mg_per_portion": {
        "low": 10,
        "typ": 40,
        "high": 120
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "pulque",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Fermentation courte spontanée. Données HPLC absentes.",
      "fda_category": "fermented beverages",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 100,
          "max": 160,
          "unit": "mL",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 200,
          "max": 240,
          "unit": "mL",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 400,
          "max": 600,
          "unit": "mL",
          "featured": false
        },
        "default_qty": 200,
        "step": 10
      }
    },
    {
      "id": "TYR_314",
      "names": {
        "fr": "Bœuf frais bien réfrigéré",
        "en": "fresh beef",
        "ru": "говядина свежая"
      },
      "search_terms": [
        "Bœuf frais bien réfrigéré",
        "Global",
        "Global / international",
        "Viandes",
        "frais <4°C",
        "fresh beef",
        "fresh meat – not restricted",
        "говядина свежая"
      ],
      "family": "Viandes",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "frais <4°C",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.3
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.45
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fresh beef",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Viande fraîche bien réfrigérée.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_315",
      "names": {
        "fr": "Porc frais",
        "en": "fresh pork",
        "ru": "свинина свежая"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Porc frais",
        "Viandes",
        "frais",
        "fresh meat – not restricted",
        "fresh pork",
        "свинина свежая"
      ],
      "family": "Viandes",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.3
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.45
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fresh pork",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Viande porcine fraîche.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_316",
      "names": {
        "fr": "Poulet frais",
        "en": "fresh chicken",
        "ru": "курица свежая"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poulet frais",
        "Viandes",
        "fresh chicken",
        "fresh meat – not restricted",
        "volaille fraîche",
        "курица свежая"
      ],
      "family": "Viandes",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "volaille fraîche",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.3
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.15,
        "high": 0.45
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fresh chicken",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Volaille fraîche.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_317",
      "names": {
        "fr": "Viande hachée fin de DLC",
        "en": "ground beef end of life",
        "ru": "фарш конец срока"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Viande hachée fin de DLC",
        "Viandes",
        "fresh meat – not restricted",
        "ground beef end of life",
        "hachée proche limite consommation",
        "фарш конец срока"
      ],
      "family": "Viandes",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "hachée proche limite consommation",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 30,
        "high": 120
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ground beef end of life",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Contamination Enterobacter/Hafnia/Morganella décarboxylase-positives.",
      "fda_category": "fresh meat – not restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 180,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 250,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_318",
      "names": {
        "fr": "Foie de poulet frais",
        "en": "chicken liver",
        "ru": "куриная печень"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Foie de poulet frais",
        "Global",
        "Global / international",
        "abat frais",
        "chicken liver",
        "liver / pâté – restricted",
        "куриная печень"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "abat frais",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "chicken liver",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Catégorie FDA 'liver'.",
      "fda_category": "liver / pâté – restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 150,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 200,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_319",
      "names": {
        "fr": "Foie gras mi-cuit",
        "en": "foie gras mi-cuit",
        "ru": "фуа гра"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Foie gras mi-cuit",
        "France",
        "France / francophone",
        "foie canard mi-cuit artisanal",
        "foie gras mi-cuit",
        "liver / pâté – restricted",
        "фуа гра"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "foie canard mi-cuit artisanal",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 60
      },
      "portion_standard": {
        "label": "40 g",
        "value": 40.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.2,
        "typ": 6,
        "high": 24
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "foie gras mi-cuit",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Long process + abat.",
      "fda_category": "liver / pâté – restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 35,
          "max": 60,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 80,
          "max": 140,
          "unit": "g",
          "featured": false
        },
        "default_qty": 40,
        "step": 5
      }
    },
    {
      "id": "TYR_320",
      "names": {
        "fr": "Pâté de campagne",
        "en": "country pate",
        "ru": "паштет загородный"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "France",
        "France / francophone",
        "Pâté de campagne",
        "country pate",
        "liver / pâté – restricted",
        "pâté rustique",
        "паштет загородный"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "France",
      "cuisine_type": "France / francophone",
      "process": "pâté rustique",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 5,
        "high": 20
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "country pate",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Pâté contient foie.",
      "fda_category": "liver / pâté – restricted",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 75,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 100,
          "max": 180,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_321",
      "names": {
        "fr": "Liverwurst / pâté foie porc",
        "en": "liverwurst, braunschweiger",
        "ru": "ливервурст"
      },
      "search_terms": [
        "Allemagne",
        "Allemagne / Suisse",
        "Charcuteries / viandes affinées",
        "Liverwurst / pâté foie porc",
        "liver / pâté – restricted",
        "liverwurst, braunschweiger",
        "saucisse foie porc",
        "ливервурст"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Allemagne",
      "cuisine_type": "Allemagne / Suisse",
      "process": "saucisse foie porc",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2.5,
        "typ": 10,
        "high": 40
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/011909s038lbl.pdf",
      "restaurant_alias": "liverwurst, braunschweiger",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Saucisse foie.",
      "fda_category": "liver / pâté – restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 75,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 100,
          "max": 180,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_322",
      "names": {
        "fr": "Bacon fumé",
        "en": "bacon",
        "ru": "бекон"
      },
      "search_terms": [
        "Bacon fumé",
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "bacon",
        "porc fumé tranches",
        "smoked/pickled/aged/fermented meats",
        "бекон"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "porc fumé tranches",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 3,
        "typ": 15,
        "high": 50
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.9,
        "typ": 4.5,
        "high": 15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "bacon",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Historique FDA, Gillman réhabilite partiellement.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_323",
      "names": {
        "fr": "Montreal smoked meat",
        "en": "montreal smoked meat",
        "ru": "монреальский смокед мит"
      },
      "search_terms": [
        "Amériques",
        "Canada",
        "Charcuteries / viandes affinées",
        "Montreal smoked meat",
        "bœuf saumuré fumé cuit",
        "montreal smoked meat",
        "smoked/pickled/aged/fermented meats",
        "монреальский смокед мит"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Canada",
      "cuisine_type": "Amériques",
      "process": "bœuf saumuré fumé cuit",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 70
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 30,
        "high": 105
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "montreal smoked meat",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Sandwich deli = portion élevée.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 225,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 525,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_324",
      "names": {
        "fr": "Pastrami NYC",
        "en": "new york pastrami",
        "ru": "пастрома Нью-Йорк"
      },
      "search_terms": [
        "Amériques",
        "Charcuteries / viandes affinées",
        "Pastrami NYC",
        "USA",
        "bœuf saumuré fumé cuit épicé",
        "new york pastrami",
        "smoked/pickled/aged/fermented meats",
        "пастрома Нью-Йорк"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "USA",
      "cuisine_type": "Amériques",
      "process": "bœuf saumuré fumé cuit épicé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 70
      },
      "portion_standard": {
        "label": "150 g",
        "value": 150.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 7.5,
        "typ": 30,
        "high": 105
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "new york pastrami",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Équivalent Montreal smoked meat.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 75,
          "max": 120,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 140,
          "max": 225,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 300,
          "max": 525,
          "unit": "g",
          "featured": false
        },
        "default_qty": 150,
        "step": 10
      }
    },
    {
      "id": "TYR_325",
      "names": {
        "fr": "Corned beef en conserve / Spam",
        "en": "corned beef canned, spam",
        "ru": "тушёнка/спам"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Corned beef en conserve / Spam",
        "Global",
        "Global / international",
        "canned meat – not restricted",
        "conserve appertisée stérilisée",
        "corned beef canned, spam",
        "тушёнка/спам"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "conserve appertisée stérilisée",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.5,
        "high": 3
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "corned beef canned, spam",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Stérilisation bloque formation.",
      "fda_category": "canned meat – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 150,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 200,
          "max": 350,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_326",
      "names": {
        "fr": "Hot dogs / saucisses Francfort",
        "en": "hot dog, frankfurter",
        "ru": "сосиски"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "Hot dogs / saucisses Francfort",
        "cooked sausage – not restricted",
        "hot dog, frankfurter",
        "saucisse émulsion cuite",
        "сосиски"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "saucisse émulsion cuite",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0.5,
        "typ": 3,
        "high": 12
      },
      "portion_standard": {
        "label": "50 g",
        "value": 50.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.25,
        "typ": 1.5,
        "high": 6
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "hot dog, frankfurter",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Saucisse cuite émulsion.",
      "fda_category": "cooked sausage – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 25,
          "max": 40,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 45,
          "max": 75,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 100,
          "max": 180,
          "unit": "g",
          "featured": false
        },
        "default_qty": 50,
        "step": 5
      }
    },
    {
      "id": "TYR_327",
      "names": {
        "fr": "Thon frais",
        "en": "fresh tuna",
        "ru": "тунец свежий"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poissons / fruits de mer",
        "Thon frais",
        "frais réfrigéré",
        "fresh fish – not restricted",
        "fresh tuna",
        "тунец свежий"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "frais réfrigéré",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "portion_standard": {
        "label": "120 g",
        "value": 120.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.36,
        "high": 1.8
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fresh tuna",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Risque scombroïde principalement histamine.",
      "fda_category": "fresh fish – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 140,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 225,
          "max": 300,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_328",
      "names": {
        "fr": "Thon en conserve",
        "en": "canned tuna",
        "ru": "тунец консервированный"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poissons / fruits de mer",
        "Thon en conserve",
        "appertisé huile/eau",
        "canned fish – not restricted",
        "canned tuna",
        "тунец консервированный"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "appertisé huile/eau",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.5,
        "high": 5
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.5,
        "high": 5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://www.academia.edu/34573319/Biogenic_Amines_Content_of_Canned_Tuna_Fish_Marketed_in_Iran",
      "restaurant_alias": "canned tuna",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Conserve stérile.",
      "fda_category": "canned fish – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_329",
      "names": {
        "fr": "Tempeh fumé/frit",
        "en": "smoked tempeh, fried tempeh",
        "ru": "темпе"
      },
      "search_terms": [
        "Asie du Sud-Est",
        "Indonésie",
        "Soja / légumineuses fermentés",
        "Tempeh fumé/frit",
        "fermented soy products",
        "smoked tempeh, fried tempeh",
        "soja fermenté fumé/frit",
        "темпе"
      ],
      "family": "Soja / légumineuses fermentés",
      "cuisine_region_raw": "Indonésie",
      "cuisine_type": "Asie du Sud-Est",
      "process": "soja fermenté fumé/frit",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 1,
        "typ": 5,
        "high": 15
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1,
        "typ": 5,
        "high": 15
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "smoked tempeh, fried tempeh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Variante tempeh avec traitement supplémentaire.",
      "fda_category": "fermented soy products",
      "default_alert_threshold": "ROUGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 80,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_330",
      "names": {
        "fr": "Yaourt nature industriel",
        "en": "plain yogurt, yaourt nature",
        "ru": "йогурт пром."
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Produits laitiers",
        "Yaourt nature industriel",
        "fermented dairy – low concern",
        "pasteurisé fermenté court",
        "plain yogurt, yaourt nature",
        "йогурт пром."
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "pasteurisé fermenté court",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.5
      },
      "portion_standard": {
        "label": "125 g",
        "value": 125.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.125,
        "high": 0.625
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/8601543/",
      "restaurant_alias": "plain yogurt, yaourt nature",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Réhabilité par Shulman-Walker 1996.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 60,
          "max": 90,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 110,
          "max": 150,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 190,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 120,
        "step": 10
      }
    },
    {
      "id": "TYR_331",
      "names": {
        "fr": "Crème fraîche",
        "en": "sour cream, creme fraiche",
        "ru": "сметана"
      },
      "search_terms": [
        "Crème fraîche",
        "France/Russie",
        "Produits laitiers",
        "Russie / Europe de l'Est",
        "crème épaissie naturelle",
        "fermented dairy – low concern",
        "sour cream, creme fraiche",
        "сметана"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "France/Russie",
      "cuisine_type": "Russie / Europe de l'Est",
      "process": "crème épaissie naturelle",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 1
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.06,
        "high": 0.3
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "sour cream, creme fraiche",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Maturation courte.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 20,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 35,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 45,
          "max": 60,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_332",
      "names": {
        "fr": "Ghee indien",
        "en": "ghee",
        "ru": "гхи"
      },
      "search_terms": [
        "Ghee indien",
        "Inde",
        "Produits laitiers",
        "beurre clarifié",
        "condiments – not restricted",
        "ghee",
        "гхи"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Inde",
      "cuisine_type": "Inde",
      "process": "beurre clarifié",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.1,
        "high": 0.3
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.015,
        "high": 0.045
      },
      "confidence": "C",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "ghee",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Matière grasse pure.",
      "fda_category": "condiments – not restricted",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_333",
      "names": {
        "fr": "Smen maghrébin",
        "en": "smen, samneh",
        "ru": "смен"
      },
      "search_terms": [
        "Maghreb",
        "Moyen-Orient / Maghreb",
        "Produits laitiers",
        "Smen maghrébin",
        "beurre fermenté long",
        "fermented dairy – low concern",
        "smen, samneh",
        "смен"
      ],
      "family": "Produits laitiers",
      "cuisine_region_raw": "Maghreb",
      "cuisine_type": "Moyen-Orient / Maghreb",
      "process": "beurre fermenté long",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 20,
        "high": 80
      },
      "portion_standard": {
        "label": "15 g",
        "value": 15.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0.75,
        "typ": 3,
        "high": 12
      },
      "confidence": "D",
      "note_type": "proxy",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "smen, samneh",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Beurre fermenté enterré long.",
      "fda_category": "fermented dairy – low concern",
      "default_alert_threshold": "ORANGE",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 8,
          "max": 11,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 14,
          "max": 20,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 20,
          "max": 30,
          "unit": "g",
          "featured": false
        },
        "default_qty": 15,
        "step": 1
      }
    },
    {
      "id": "TYR_334",
      "names": {
        "fr": "Jerky bœuf industriel",
        "en": "beef jerky",
        "ru": "джерки"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "Jerky bœuf industriel",
        "beef jerky",
        "smoked/pickled/aged/fermented meats",
        "séché épicé salé",
        "джерки"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "séché épicé salé",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 5,
        "typ": 25,
        "high": 80
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 1.5,
        "typ": 7.5,
        "high": 24
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "beef jerky",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "modérée",
      "supplemental_note": "Séchage long.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_335",
      "names": {
        "fr": "Salami sec artisanal",
        "en": "artisan salami",
        "ru": "салями артизанальная"
      },
      "search_terms": [
        "Charcuteries / viandes affinées",
        "Global",
        "Global / international",
        "Salami sec artisanal",
        "artisan salami",
        "fermenté séché artisanal",
        "smoked/pickled/aged/fermented meats",
        "салями артизанальная"
      ],
      "family": "Charcuteries / viandes affinées",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "fermenté séché artisanal",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 15,
        "typ": 80,
        "high": 400
      },
      "portion_standard": {
        "label": "30 g",
        "value": 30.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 4.5,
        "typ": 24,
        "high": 120
      },
      "confidence": "A",
      "note_type": "quantitative",
      "source_url": "https://pubmed.ncbi.nlm.nih.gov/14527803/",
      "restaurant_alias": "artisan salami",
      "flags": {
        "artisanal_sensitive": true,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Lots artisanaux = forte variabilité.",
      "fda_category": "smoked/pickled/aged/fermented meats",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 15,
          "max": 25,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 25,
          "max": 45,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 60,
          "max": 100,
          "unit": "g",
          "featured": false
        },
        "default_qty": 30,
        "step": 5
      }
    },
    {
      "id": "TYR_336",
      "names": {
        "fr": "Poisson frais fin shelf-life",
        "en": "fish end of shelf life",
        "ru": "рыба конец срока"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Poisson frais fin shelf-life",
        "Poissons / fruits de mer",
        "fish end of shelf life",
        "fresh fish – not restricted",
        "proche limite DLC",
        "рыба конец срока"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "proche limite DLC",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 2,
        "typ": 10,
        "high": 40
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fish end of shelf life",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": true,
        "special_lock": false
      },
      "variability": "forte",
      "supplemental_note": "Risque scombroïde + tyramine.",
      "fda_category": "fresh fish – not restricted",
      "default_alert_threshold": "NOIR",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    },
    {
      "id": "TYR_337",
      "names": {
        "fr": "Huîtres fraîches",
        "en": "fresh oysters",
        "ru": "устрицы"
      },
      "search_terms": [
        "Global",
        "Global / international",
        "Huîtres fraîches",
        "Poissons / fruits de mer",
        "bivalves crus vivants",
        "fresh fish – not restricted",
        "fresh oysters",
        "устрицы"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "bivalves crus vivants",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.2,
        "high": 1
      },
      "portion_standard": {
        "label": "60 g (6 unités)",
        "value": 60.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.12,
        "high": 0.6
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "fresh oysters",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Bivalves vivants frais.",
      "fda_category": "fresh fish – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 30,
          "max": 45,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 55,
          "max": 70,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 110,
          "max": 150,
          "unit": "g",
          "featured": false
        },
        "default_qty": 60,
        "step": 5
      }
    },
    {
      "id": "TYR_338",
      "names": {
        "fr": "Crevettes cuites fraîches",
        "en": "cooked shrimp",
        "ru": "креветки варёные"
      },
      "search_terms": [
        "Crevettes cuites fraîches",
        "Global",
        "Global / international",
        "Poissons / fruits de mer",
        "cooked shrimp",
        "cuites réfrigérées",
        "fresh fish – not restricted",
        "креветки варёные"
      ],
      "family": "Poissons / fruits de mer",
      "cuisine_region_raw": "Global",
      "cuisine_type": "Global / international",
      "process": "cuites réfrigérées",
      "unit_base": "mg/100g",
      "mg100": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "portion_standard": {
        "label": "100 g",
        "value": 100.0,
        "unit": "g"
      },
      "mg_per_portion": {
        "low": 0,
        "typ": 0.3,
        "high": 1.5
      },
      "confidence": "B",
      "note_type": "quantitative",
      "source_url": "https://psychotropical.com/wp-content/uploads/2019/09/8-MAOI_diet_drug_interactions_2019.pdf",
      "restaurant_alias": "cooked shrimp",
      "flags": {
        "artisanal_sensitive": false,
        "label_restricted": false,
        "special_lock": false
      },
      "variability": "faible",
      "supplemental_note": "Différent des crevettes séchées/pâte.",
      "fda_category": "fresh fish – not restricted",
      "default_alert_threshold": "VERT LIMITÉ",
      "portion_profile": {
        "small": {
          "label": "Petite",
          "min": 50,
          "max": 75,
          "unit": "g",
          "featured": false
        },
        "normal": {
          "label": "Normale",
          "min": 90,
          "max": 120,
          "unit": "g",
          "featured": true
        },
        "large": {
          "label": "Importante",
          "min": 180,
          "max": 250,
          "unit": "g",
          "featured": false
        },
        "default_qty": 100,
        "step": 10
      }
    }
  ]
};
