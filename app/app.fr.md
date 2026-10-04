# CV Builder — fiche App Store (France)

> Source : https://apps.apple.com/fr/app/id1630645768, relevé le 2026-09-29.
> Captures françaises : `assets/appstore/fr/` (PNG + WebP). Icône commune : `assets/appstore/icon*`.

| Champ | Valeur |
|---|---|
| Nom | **Créateur de CV Pro** |
| Sous-titre | **Modèles & Lettre Motivation** |
| Note | 5,0 / 5 (7 notes) |
| Prix | Gratuit, achats intégrés ; abonnement « Créateur de CV CV PDF — Accès complet à tous les modèles de CV », essai gratuit |
| Catégorie | Économie et entreprise |
| Version | 1.23.0 (19 sept.) |
| Taille | 57,9 Mo |
| Compatibilité | iPhone, iPad ; iOS 18.6+ |

## Texte promotionnel
Créateur de CV Pro : créez un CV professionnel en quelques minutes. Plus de 100 modèles, lettre de motivation et export PDF. Pour iPhone et iPad.

## Rubriques dans l’app (FR)
Introduction · À propos · Photo · Coordonnées · Signature · Formation · Expérience · Compétences · Liens et codes QR · Langues · Certifications · Références · Sections personnalisées · Lettre de motivation · Aperçu PDF · Télécharger PDF

## Captures
| # | Titre | Contenu |
|---|---|---|
| 1 | CV DESIGNER — curriculum vitae · « L’art des modèles » | Galerie de modèles |
| 2 | CURRICULUM VITAE — modèle de CV · « Se faire embaucher ! » | CV terminé avec photo et QR |
| 3 | LETTRE DE — motivation gratuite · « Tout en un » | Lettre de motivation |
| 4 | CV MAKER — professionnel · « Tout ce que vous voulez » | Rubriques supplémentaires |
| 5 | ÉDITEUR DE CV — simple et rapide · « Facile à utiliser » | Menu avec % rempli |

## Remarques
- 7 notes seulement → la page /fr/ **n’affiche pas la note** (ni `aggregateRating`). À activer dans `build/landing/i18n/fr.js` plus tard.
- La capture 1 utilise « CV DESIGNER », nom d’un service tiers connu (CVDesignR / CV Designer de France Travail). Risque de refus Apple et de confusion de marque : préférez « CRÉATEUR DE CV ».
- L’ancien `build/fr.json` ciblait « cv designer france travail », « pole emploi », « cvdesignr » : requêtes de marque/navigationnelles d’autres services. La nouvelle page ne les cible plus (faible conversion, risque de marque).
- Capture 3 promet une « lettre de motivation gratuite » : vérifier que c’est vrai sans abonnement.
