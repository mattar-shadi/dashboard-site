# MATTAR Dashboard — Blazor WebAssembly (WASM)

Dashboard UI moderne (template) construit en **Blazor WebAssembly (.NET 8)** et déployé sur **GitHub Pages**.

- Démo : https://mattar-shadi.github.io/dashboard-site/

> Objectif du projet (à venir) : en faire un dashboard pour suivre les ventes Microsoft Store (intégration Partner Center dans une étape suivante).

## ✨ Fonctionnalités actuelles

- SPA **Blazor WASM** (.NET 8)
- Thème **dark / light** (persistance via `localStorage`)
- Sidebar responsive (hamburger + overlay mobile)
- Pages Razor : Dashboard, Analytics, Clients, Commandes, Finances, Paramètres
- Graphiques via **Chart.js** (CDN) + JavaScript (pour l’instant)
- Déploiement automatisé sur GitHub Pages

## 🧱 Structure du repo

```
.
├── MATTAR Dashboard.csproj
├── Program.cs
├── App.razor
├── _Imports.razor
├── Layout/
├── Pages/
├── wwwroot/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── .github/workflows/deploy.yml
```

## ✅ Pré-requis

- .NET SDK 8.x

Vérifier :

```bash
dotnet --version
```

## ▶️ Lancer en local (dev)

```bash
git clone https://github.com/mattar-shadi/dashboard-site.git
cd dashboard-site

dotnet restore
dotnet run
```

Ensuite ouvrir l’URL indiquée dans la console (ex: `http://localhost:5062`).

## 🏗️ Build / Publish

```bash
# Build
dotnet build

# Publish (Release)
dotnet publish -c Release -o publish
```

Les fichiers statiques publiés se trouvent dans :

- `publish/wwwroot/`

## 🌐 Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` :

- build + publish en Release
- ajuste le `<base href>` vers `/dashboard-site/` (car le site est servi sous un sous-chemin)
- génère `404.html` (copie de `index.html`) pour supporter le routing SPA sur GitHub Pages
- ajoute `.nojekyll`
- déploie via `actions/deploy-pages`

### Branche de déclenchement

Attention : le workflow se déclenche sur la branche **`main`**.

Si ta branche par défaut est `master`, tu as 2 options :
1. Renommer la branche par défaut en `main`
2. Ou modifier le workflow pour déclencher sur `master`

## 🎨 Assets / UI

- CSS : `wwwroot/css/style.css`
- JS : `wwwroot/js/main.js`

## 🗺️ Roadmap (prochaines étapes)

- Remplacer les données mock par les données du **Microsoft Partner Center** (ventes / revenus / acquisitions)
- Remplacer une partie du JS par des composants Blazor + interop minimal
- Ajouter un vrai modèle de données + services + gestion d’erreurs

## 📄 Licence

MIT
