# Electron Playground

Un boilerplate moderne et complet pour créer des applications desktop multi-plateformes avec Electron, React et Express.

[🇬🇧 English version](README.md)

## ✨ Pourquoi Electron Playground ?

Ce boilerplate fournit une base solide pour construire des applications desktop avec :
- **Stack Moderne** : React + Vite pour un développement rapide
- **Full-Stack Ready** : Backend Express.js inclus
- **Expérience Développeur** : Hot reload et support TypeScript
- **Prêt pour la Production** : Configuration de build et packaging optimisée

## 🚀 Fonctionnalités

- **Architecture Complète**
  - Frontend avec React + Vite
  - Backend avec Express.js
  - Intégration base de données SQLite
  - Configuration communication IPC

- **Composants Pré-construits**
  - Dashboard avec statistiques et KPIs
  - Système de gestion des clients
  - Interface de suivi des commandes
  - Pages de paramètres et configuration

- **Outils de Développement**
  - Configuration TypeScript
  - Configuration ESLint
  - Support du hot reload
  - Configuration de débogage

## 🛠️ Technologies

- **Frontend** : React, Vite, SCSS
- **Backend** : Express.js
- **Desktop** : Electron
- **Base de données** : SQLite (better-sqlite3)
- **Build** : Electron Forge

## 📋 Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn

## 🔧 Démarrage

1. Clonez le boilerplate :
```bash
git clone https://github.com/nahtandev/electron-playground.git
cd electron-playground
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run start:dev
```

## 📦 Scripts Disponibles

- `npm run start:dev` : Lance l'application en mode développement
- `npm run build` : Compile l'application
- `npm run package` : Crée un package pour la plateforme courante
- `npm run make` : Crée les installateurs
- `npm run publish` : Publie l'application

## 🏗️ Structure du Projet

```
electron-playground/
├── client/             # Source frontend React
│   ├── src/
│   ├── index.html
│   └── vite.config.ts
├── server/             # Source backend Express
│   ├── ./
│   └── vite.config.ts
├── preloader/          # Scripts de préchargement Electron
├── data/              # Données et configuration
├── config.ts          # Configuration de l'application
└── forge.config.ts    # Configuration Electron Forge
```

## ⚙️ Configuration

1. Créez un fichier `.env` à la racine du projet :
```
NODE_ENV=development
```

2. Personnalisez `forge.config.ts` selon vos besoins de build
3. Ajustez `config.ts` pour les paramètres de l'application

## 🔨 Personnalisation

1. **Frontend** : Modifiez les composants React dans `client/src/`
2. **Backend** : Ajoutez des routes API dans `server/`

## 📚 Documentation

Pour plus d'informations sur les technologies utilisées :
- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [Vite](https://vitejs.dev/)
- [Electron Forge](https://www.electronforge.io/)

## 👤 Auteur

**nahtandev**
- Email : sayme@hellonathan.dev
- GitHub : [@nahtandev](https://github.com/nahtandev)

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).
