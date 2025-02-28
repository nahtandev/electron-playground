# Electron Playground

Une application de bureau moderne construite avec Electron, Next.js et NestJS. Cette application combine la puissance d'Electron pour la création d'applications de bureau natives avec l'interface utilisateur élégante de Next.js et un backend robuste NestJS.

## 🚀 Technologies

- **Frontend**: Next.js 15.2.0 avec SCSS et BEM
- **Backend**: NestJS
- **Desktop**: Electron
- **Style**: Geist Mono (police embarquée)

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Git

## 🛠 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/nahtandev/electron-playground.git
cd electron-playground
```

2. Installez les dépendances :
```bash
npm install
```

3. Installez les dépendances des workspaces :
```bash
cd client && npm install
cd ../server && npm install
```

## 🚀 Démarrage

### Mode Développement

```bash
npm run dev
```

Cette commande va :
- Démarrer le serveur de développement Next.js
- Démarrer le serveur NestJS
- Lancer l'application Electron

### Mode Production

```bash
npm run build
```

Cette commande va :
- Construire l'application Next.js
- Construire le serveur NestJS
- Créer un exécutable Electron

## 📦 Structure du Projet

```
electron-playground/
├── client/               # Application Next.js
│   ├── app/             # Pages et composants
│   └── public/          # Fichiers statiques
├── server/              # Serveur NestJS
│   └── src/             # Code source du serveur
└── electron/            # Configuration Electron
    ├── main.ts         # Point d'entrée
    └── preload.ts      # Script de préchargement
```

## 🔧 Configuration

- Le serveur Next.js tourne sur le port 3000
- Le serveur NestJS tourne sur le port 5000
- Les variables d'environnement peuvent être configurées dans les fichiers `.env` respectifs

## 👤 Auteur

**nahtandev**
- Email: sayme@hellonathan.dev
- GitHub: [@nahtandev](https://github.com/nahtandev)