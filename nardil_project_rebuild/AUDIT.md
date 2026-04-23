# Audit rapide des fichiers réellement fournis

## Fichiers audités
- `document_maitre_tyramine_nardil_v4.xlsx`
- `Archive.zip`
- `Calculatrice tyramine interactive.txt`
- `Dosage Nardil et tyramine.txt`
- `Teneur en tyramine des aliments pour une calculette patient sous Nardil-3.pdf`

## Constat sur le classeur v4
Le classeur v4 est déjà mieux structuré que les itérations front précédentes :
- 338 entrées alimentaires
- seuils cliniques séparés
- facteurs algorithmiques séparés
- règles d’alerte séparées
- wording patient séparé
- sources séparées

## Constat sur l’archive front précédente
L’archive contenait :
- un front statique autonome
- une PWA minimale
- une UX plus claire que certaines itérations récentes
- mais un dataset et un moteur encore trop hérités / insuffisamment branchés au master v4

## Décision de reconstruction
Cette refonte ne repart pas des anciens ZIP incohérents.
Elle :
1. conserve les fonctionnalités utiles observées dans l’archive ;
2. remplace la logique alimentaire codée en dur par un runtime généré depuis le master v4 ;
3. réorganise l’UX en 3 pages : Construire / Information / Divers ;
4. garde l’enregistrement horaire, le repas courant et les graphes de chevauchement.
