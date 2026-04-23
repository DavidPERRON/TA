# Schéma canonique golden source

La golden source opérationnelle est `source/document_maitre_tyramine_nardil_v4.xlsx`.

## 1. Source primaire
Le classeur v4 contient :
- `Aliments_consolide`
- `Seuils_cliniques`
- `Facteurs_algorithme`
- `Regles_alerte`
- `Wording_patient`
- `Methode_limitations`
- `Sources`
- `Signaux_majeurs`

## 2. Objet runtime généré
Chaque aliment devient un objet JSON avec les champs suivants :

```json
{
  "id": "TYR_001",
  "names": {
    "fr": "Fromages frais non affinés",
    "en": "mozzarella fraîche, ricotta, queso fresco standardisé",
    "ru": "творог / свежий сыр"
  },
  "search_terms": [],
  "family": "Fromages",
  "cuisine_region_raw": "Global laitier",
  "cuisine_type": "Global / international",
  "process": "frais non affiné",
  "unit_base": "mg/100g",
  "mg100": { "low": 0, "typ": 0.1, "high": 0.5 },
  "portion_standard": { "label": "100 g", "value": 100, "unit": "g" },
  "mg_per_portion": { "low": 0, "typ": 0.1, "high": 0.5 },
  "confidence": "B",
  "note_type": "quantitative",
  "source_url": "…",
  "restaurant_alias": "…",
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
    "small": { "min": 50, "max": 80, "unit": "g" },
    "normal": { "min": 90, "max": 130, "unit": "g" },
    "large": { "min": 180, "max": 280, "unit": "g" },
    "default_qty": 100,
    "step": 10
  }
}
```

## 3. Principes de transformation
- Le front **ne recode pas** les aliments.
- Le runtime est généré depuis le master.
- `family` et `cuisine_type` sont des champs dérivés pour l’UX.
- `portion_profile` est dérivé **par produit** à partir de `portion_standard`, avec règles par famille.
- `special_lock` identifie les cas où la logique n’est pas strictement une question de tyramine moyenne, par exemple les fèves / L-DOPA.

## 4. Contraintes moteur
- ND n’est jamais assimilé à zéro.
- `low <= typ <= high` quand les trois existent.
- Le produit prime sur la catégorie.
- La dose et la durée ne sont que des modulateurs modestes.
- L’alcool n’est qu’un facteur contextuel modeste.
- Le graphe ne représente pas une concentration sanguine.
