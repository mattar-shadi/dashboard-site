# Dashboard Moderne 2026 — Blazor WebAssembly

Un dashboard moderne et responsive construit avec **Blazor WebAssembly (.NET 8)**. Interface sombre/claire avec Chart.js, Font Awesome et navigation SPA entièrement côté client.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-GitHub_Pages-6366f1?style=for-the-badge)](https://mattar-shadi.github.io/dashboard-site/)

> 🔗 **Démo en ligne** : [https://mattar-shadi.github.io/dashboard-site/](https://mattar-shadi.github.io/dashboard-site/)

## 📸 Aperçu

![NexusDash Dashboard](https://github.com/user-attachments/assets/619184a0-1fbc-4727-9471-fdaaf2c9c075)

## 🎯 Caractéristiques

- **Blazor WebAssembly** : Application SPA entièrement côté client (.NET 8)
- **Design moderne et élégant** : Interface sombre avec palette de couleurs professionnelle
- **Responsive** : Adapté à tous les appareils (desktop, tablette, mobile)
- **Graphiques interactifs** : Chart.js via CDN avec interop JavaScript
- **Animations fluides** : Transitions et animations CSS pour une meilleure UX
- **Accessibilité** : Sémantique HTML correcte et contraste optimal
- **Dark/Light mode** : Bascule entre mode sombre et clair avec détection automatique des préférences système
- **Navigation SPA** : 6 pages Razor (Dashboard, Analytics, Clients, Commandes, Finances, Paramètres)

## 📂 Structure

```
dashboard-site/
├── DashboardSite.csproj    → Projet Blazor WebAssembly (.NET 8)
├── Program.cs              → Point d'entrée Blazor
├── App.razor               → Router Blazor
├── _Imports.razor          → Namespaces globaux
├── Layout/
│   └── MainLayout.razor    → Layout partagé (sidebar + header)
├── Pages/
│   ├── Index.razor         → Page Dashboard (/)
│   ├── Analytics.razor     → Page Analytics (/analytics)
│   ├── Clients.razor       → Page Clients (/clients)
│   ├── Commandes.razor     → Page Commandes (/commandes)
│   ├── Finances.razor      → Page Finances (/finances)
│   └── Parametres.razor    → Page Paramètres (/parametres)
├── wwwroot/
│   ├── index.html          → Shell HTML Blazor WASM
│   ├── css/
│   │   └── style.css       → Styles communs
│   └── js/
│       └── main.js         → JS interop (sidebar, thème, graphiques)
└── .github/
    └── workflows/
        └── deploy.yml      → Build + déploiement GitHub Pages
```

## 🚀 Pré-requis

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) ou supérieur

## ⚡ Démarrage rapide

1. Clonez le repository :
```bash
git clone https://github.com/mattar-shadi/dashboard-site.git
cd dashboard-site
```

2. Restaurez les dépendances :
```bash
dotnet restore
```

3. Lancez l'application en développement :
```bash
dotnet run
# Puis accédez à http://localhost:5062
```

## 🏗️ Build & Publication

```bash
# Build
dotnet build

# Publier en mode Release
dotnet publish -c Release -o publish
# Les fichiers statiques se trouvent dans publish/wwwroot/
```

## 🌐 Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement à chaque push sur `main` :

1. Installe le SDK .NET 8
2. Exécute `dotnet publish -c Release`
3. Corrige le `<base href>` pour le sous-chemin `/dashboard-site/`
4. Génère `404.html` (copie de `index.html`) pour le routing SPA
5. Ajoute `.nojekyll` pour désactiver Jekyll
6. Déploie sur GitHub Pages via `actions/deploy-pages`

Le site est servi sous : `https://mattar-shadi.github.io/dashboard-site/`

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `wwwroot/css/style.css` :

```css
:root {
  --primary: #6366f1;       /* Couleur principale */
  --success: #10b981;       /* Couleur de succès */
  --danger: #ef4444;        /* Couleur d'erreur */
  --warning: #f59e0b;       /* Couleur d'avertissement */
}
```

### Modifier les données

Les données sont définies dans les composants Razor sous `Pages/`. Pour les modifier :

1. **Statistiques** : Éditez les valeurs dans les cartes du composant Razor
2. **Graphiques** : Mettez à jour les tableaux de données dans `wwwroot/js/main.js`
3. **Tableaux** : Ajoutez/modifiez les lignes dans le composant Razor correspondant

## 📱 Responsive Design

- **Desktop** : Disposition 2 colonnes (sidebar + contenu)
- **Tablette** : Sidebar repliée, contenu plein écran
- **Mobile** : Disposition verticale, navigation optimisée

## 🛠️ Technologies utilisées

- **Blazor WebAssembly** : Framework SPA .NET 8
- **C# / Razor** : Composants et pages
- **CSS3** : Styling moderne avec variables CSS et Grid/Flexbox
- **JavaScript Interop** : Sidebar, thème et Chart.js
- **Chart.js 4.4.1** : Bibliothèque de graphiques (CDN)
- **Font Awesome 6.5.1** : Icônes vectorielles (CDN)
- **Google Fonts** : Police Inter (CDN)

## 📦 Dépendances NuGet

- `Microsoft.AspNetCore.Components.WebAssembly` 8.0.x
- `Microsoft.AspNetCore.Components.WebAssembly.DevServer` 8.0.x

## 🔗 Liens utiles

- [🌐 Démo en ligne](https://mattar-shadi.github.io/dashboard-site/) - Voir le dashboard en action
- [Documentation Blazor WebAssembly](https://learn.microsoft.com/aspnet/core/blazor/)
- [Documentation Chart.js](https://www.chartjs.org/docs/latest/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

## 👤 Auteur

Créé avec ❤️ en 2026
