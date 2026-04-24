# Nardil × Tyramine — package statique testable

## Ce que contient ce ZIP
- une application statique `index.html`
- un dataset généré séparé du front dans `data/`
- le fichier maître source dans `source/document_maitre_tyramine_nardil_v4.xlsx`
- un script de régénération `scripts/build_dataset.py`
- des tests simples dans `tests/`

## Utilisation ultra simple
### Option 1 — test immédiat
1. Dézippez le dossier.
2. Ouvrez `index.html` dans votre navigateur.
3. L’application fonctionne sans installation.

### Option 2 — GitHub Pages
1. Créez un dépôt GitHub vide.
2. Uploadez **tout le contenu du dossier**, à la racine.
3. Activez **Settings > Pages** sur la branche principale.
4. Ouvrez l’URL GitHub Pages générée.

## Si vous mettez à jour le fichier maître
1. Remplacez `source/document_maitre_tyramine_nardil_v4.xlsx`.
2. Lancez :
   ```bash
   python3 scripts/build_dataset.py
   ```
3. Les fichiers `data/nardil_master.generated.json` et `data/nardil_master.generated.js` seront régénérés.

## Tests
```bash
npm run test:data-integrity
npm run test:unit
```

## Architecture
- `index.html` : shell applicatif
- `styles.css` : UI mobile first
- `app.js` : front + moteur de calcul côté navigateur
- `data/nardil_master.generated.*` : runtime généré depuis le master
- `source/` : golden source
- `scripts/build_dataset.py` : génération du runtime
- `tests/` : contrôles minimaux

## Transparence
- Le moteur reste limité au Nardil / phénelzine.
- Le graphe représente une **exposition potentielle relative**, pas un taux sanguin.
- Aucune extrapolation à d’autres traitements n’est faite.
