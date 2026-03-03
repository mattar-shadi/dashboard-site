# Dashboard Moderne 2026

Un dashboard moderne et responsive conçu avec HTML, CSS et JavaScript. Parfait pour la gestion de données, l'analyse de ventes et le suivi des performances en temps réel.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-GitHub_Pages-6366f1?style=for-the-badge)](https://mattar-shadi.github.io/dashboard-site/)

> 🔗 **Démo en ligne** : [https://mattar-shadi.github.io/dashboard-site/](https://mattar-shadi.github.io/dashboard-site/)

## 📸 Aperçu

![NexusDash Dashboard](https://github.com/user-attachments/assets/619184a0-1fbc-4727-9471-fdaaf2c9c075)

## 🎯 Caractéristiques

- **Design moderne et élégant** : Interface sombre avec palette de couleurs professionnelle
- **Responsive** : Adapté à tous les appareils (desktop, tablette, mobile)
- **Graphiques interactifs** : Utilise Chart.js pour des visualisations dynamiques
- **Animations fluides** : Transitions et animations CSS pour une meilleure UX
- **Accessibilité** : Sémantique HTML correcte et contraste optimal
- **Performance** : Chargement rapide et optimisé
- **Dark/Light mode** : Bascule entre mode sombre et clair avec détection automatique des préférences système
- **Navigation dynamique** : 6 sections distinctes (Dashboard, Analytics, Clients, Commandes, Finances, Paramètres)

## 📊 Contenu

### Sections principales

1. **Statistiques en temps réel** : 4 cartes affichant les KPIs principaux
   - Revenus du mois
   - Nouveaux clients
   - Commandes
   - Taux d'échec

2. **Graphique des ventes** : Comparaison des ventes 2025 vs 2026 avec Chart.js
   - Visualisation en ligne (line chart)
   - Données mensuelles
   - Légende interactive

3. **Transactions récentes** : Tableau des dernières transactions avec statuts
   - Payé ✓
   - En attente ⏳
   - Échoué ✗

4. **Distribution des revenus** : Graphique en doughnut montrant la répartition par catégorie
   - Produits
   - Services
   - Abonnements
   - Partenariats

## 🚀 Démarrage rapide

### Installation locale

1. Clonez le repository :
```bash
git clone https://github.com/mattar-shadi/dashboard-site.git
cd dashboard-site
```

2. Ouvrez simplement le fichier `index.html` dans votre navigateur :
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Ou utilisez un serveur local :
```bash
python -m http.server 8000
# Puis accédez à http://localhost:8000
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans la section `:root` :

```css
:root {
  --primary: #6366f1;       /* Couleur principale */
  --success: #10b981;       /* Couleur de succès */
  --danger: #ef4444;        /* Couleur d'erreur */
  --warning: #f59e0b;       /* Couleur d'avertissement */
}
```

### Modifier les données

Les données sont hardcodées dans le fichier HTML. Pour les modifier :

1. **Statistiques** : Modifiez les valeurs dans les cartes
2. **Graphiques** : Éditez les données dans les objets Chart.js
3. **Tableau** : Ajoutez/modifiez les lignes du tableau

## 📱 Responsive Design

- **Desktop** : Disposition 2 colonnes (sidebar + contenu)
- **Tablette** : Sidebar repliée, contenu plein écran
- **Mobile** : Disposition verticale, navigation optimisée

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styling moderne avec variables CSS et Grid/Flexbox
- **JavaScript** : Interactivité et Chart.js
- **Chart.js** : Bibliothèque de graphiques
- **Font Awesome** : Icônes vectorielles

## 📦 Dépendances externes

- [Chart.js 4.4.0](https://www.chartjs.org/) - Graphiques interactifs
- [Font Awesome 6.5.0](https://fontawesome.com/) - Icônes

## 🔗 Liens utiles

- [🌐 Démo en ligne](https://mattar-shadi.github.io/dashboard-site/) - Voir le dashboard en action
- [Documentation Chart.js](https://www.chartjs.org/docs/latest/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

## 👤 Auteur

Créé avec ❤️ en 2026

---

**Note** : Ce dashboard est un template statique. Pour l'intégrer à une vraie application, connectez-le à une API backend pour récupérer les données en temps réel.
