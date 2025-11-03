# Structure des Images

Ce dossier contient toutes les images utilisées sur le site de la Communauté bahá'í de Montréal.

## Organisation des dossiers

### `/hero/`
Images pour la section héro de la page d'accueil
- `hero-bg.jpg` - Image de fond principale du héro

### `/gallery/`
Images pour les galeries et événements
- Photos d'événements communautaires
- Images du sanctuaire
- Photos d'activités

### `/logos/`
Logos et icônes
- Variations du logo de la communauté
- Étoile bahá'í
- Icônes diverses

## Formats recommandés
- **Photos** : `.jpg` (pour les photos avec beaucoup de couleurs)
- **Images avec transparence** : `.png`
- **Logos/icônes** : `.svg` (vectoriel, meilleure qualité)
- **Moderne** : `.webp` (plus léger, supporté par Next.js)

## Utilisation
Les images sont accessibles depuis le code avec le chemin `/images/dossier/fichier.ext`

Exemple :
```jsx
<Image src="/images/hero/hero-bg.jpg" alt="Background" width={1920} height={1080} />
```