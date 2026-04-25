# Mémo — Commentaires sur le site web Tyramine

**Date de rédaction :** 2026-04-25  
**Dépôt :** DavidPERRON/TA  
**Branche de travail :** `claude/tyramine-comments-memo-sJGpk`

---

## 1. Commentaires GitHub — Pull Request #1

**PR :** [Dataset golden source — 338 entrées extraites du xlsx maître](https://github.com/DavidPERRON/TA/pull/1)  
**État :** Fermé et mergé le 2026-04-24  
**Branche source :** `claude/resume-project-quality-wwGlT` → `main`

### Corps du PR (soumis par Claude)

Le PR documente l'extraction du dataset depuis `document_maitre_tyramine_nardil_v4.xlsx` :

- **Fichiers ajoutés :** `data/foods.json`, `data/foods.js`, `data/clinical.json`, `data/clinical.js`, `extract_data.py`
- **Schéma :** 338 aliments, 23 colonnes (id, nom_fr, procédé, mg100_low/typ/high, portion, confiance A/B/C/D, etc.)
- **Distribution :** NOIR=200 / ORANGE=83 / ROUGE=22 / VERT LIMITÉ=33
- **Intégrité :** 0 violation de contrainte `low ≤ typ ≤ high`, assertions passées
- **Prochaine étape annoncée :** Refonte 3 pages (Construire / Information / Divers), moteur mg-réels, i18n FR/EN/RU, mobile-first

### Commentaires de David Perron (propriétaire)

| Date | Commentaire | Lien |
|---|---|---|
| 2026-04-23 13:47 | `ok` | [#issuecomment-4304918814](https://github.com/DavidPERRON/TA/pull/1#issuecomment-4304918814) |
| 2026-04-24 05:43 | `ok` | [#issuecomment-4310965254](https://github.com/DavidPERRON/TA/pull/1#issuecomment-4310965254) |

> Aucun commentaire de review formel, aucun thread de révision de code. Le PR a été mergé après approbation implicite.

---

## 2. Commentaires internes au dépôt

### AUDIT.md — Constats d'audit

**Fichiers audités :**
- `document_maitre_tyramine_nardil_v4.xlsx` (source maître)
- `Calculatrice tyramine interactive.txt`
- `Dosage Nardil et tyramine.txt`
- `Teneur en tyramine des aliments pour une calculette patient sous Nardil-3.pdf`

**Constats sur le classeur v4 :**
- 338 entrées alimentaires
- Seuils cliniques séparés
- Facteurs algorithmiques séparés
- Règles d'alerte séparées
- Wording patient séparé
- Sources séparées

**Constats sur l'archive front-end précédente :**
- Front statique autonome, PWA minimale
- UX plus claire que certaines itérations récentes
- Dataset et moteur trop hérités, insuffisamment liés au maître v4

**Décision de reconstruction :** Rebuild complet depuis le xlsx maître, en conservant les fonctionnalités utiles des versions précédentes.

---

### SCHEMA_CANONIQUE.md — Notes techniques

- Source opérationnelle : `source/document_maitre_tyramine_nardil_v4.xlsx`
- 8 feuilles documentées dans le classeur
- Champ `special_lock` : verrou non-tyramine (ex. L-DOPA dans les fèves)
- Contrainte moteur : séparation stricte source (XLSX) / runtime (JSON/JS)

---

### Commentaires dans le code source

| Fichier | Ligne | Commentaire |
|---|---|---|
| `data/foods.js` | 1 | `// Golden source — 338 entrées extraites de document_maitre_tyramine_nardil_v4.xlsx` |
| `data/clinical.js` | 2 | `// Source : document_maitre_tyramine_nardil_v4.xlsx` |
| `extract_data.py` | 1-9 | Docstring : ne jamais modifier `data/` manuellement ; relancer le script après modification du xlsx |

---

### Notes complémentaires dans le dataset (`data/nardil_master.generated.json`)

Champ `supplemental_note` présent sur 50+ aliments, signalant des variabilités importantes :

| Aliment | Note clé |
|---|---|
| Brie / Camembert | Données Mayer 2010 : ≤ 0,15–0,3 mg/portion 30 g. Anciens outliers jusqu'à ~54 mg/30 g. |
| Cheddar | Jeunes < 50 mg/kg ; 36 semaines < 160 mg/kg. Anciennes valeurs probablement obsolètes. |
| Gouda | Jeune < 50 mg/kg ; vieux 100–250 mg/kg. L'âge d'affinage change fortement le risque. |
| Saucisses fermentées | Moyenne 150–200 mg/kg ; max rapporté 785 mg/kg. Très forte variabilité. |
| Kéfir | Costa 2015 : 249–337 mg/kg en conditions expérimentales. Ne pas extrapoler au kéfir industriel. |
| Bleus / Roquefort | Novella-Rodríguez 2003 : 0–1585 mg/kg. Outliers majeurs. |
| Cabrales | Combarros-Fuertes 2016 : jusqu'à 800 mg/100 g. Outlier extrême. |

---

## 3. Disclaimer clinique (intégré dans l'application)

Présent dans `data/clinical.json` :

> "Cet outil concerne uniquement la phénelzine (Nardil). Les estimations de teneur en tyramine varient selon la marque, la fermentation, l'affinage et le stockage. Outil éducatif uniquement."

---

## 4. Résumé

- **Issues GitHub ouvertes ou fermées :** aucune
- **PRs :** 1 (mergé) — validé par 2 commentaires "ok" du propriétaire
- **Reviews formelles :** aucune
- **Threads de révision de code :** aucun
- **Commentaires internes :** audit documenté dans `AUDIT.md`, schéma dans `SCHEMA_CANONIQUE.md`, notes de variabilité dans le dataset
