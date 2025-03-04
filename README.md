# Electron Playground

A modern and feature-rich boilerplate for building cross-platform desktop applications with Electron, React, and Express.

[🇫🇷 Version française](README.fr.md)

## ✨ Why Electron Playground?

This boilerplate provides a solid foundation for building desktop applications with:
- **Modern Stack**: React + Vite for fast development
- **Full-Stack Ready**: Express.js backend included
- **Developer Experience**: Hot reload and TypeScript support
- **Production Ready**: Optimized build and packaging configuration

## 🚀 Features

- **Complete Architecture**
  - Frontend with React + Vite
  - Backend with Express.js
  - SQLite database integration
  - IPC communication setup

- **Pre-built Components**
  - Dashboard with statistics and KPIs
  - Customer management system
  - Order tracking interface
  - Settings and configuration pages

- **Developer Tools**
  - TypeScript configuration
  - ESLint setup
  - Hot reload support
  - Debug configuration

## 🛠️ Tech Stack

- **Frontend**: React, Vite, SCSS
- **Backend**: Express.js
- **Desktop**: Electron
- **Database**: SQLite (better-sqlite3)
- **Build**: Electron Forge

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Getting Started

1. Clone the boilerplate:
```bash
git clone https://github.com/nahtandev/electron-playground.git
cd electron-playground²²
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run start:dev
```

## 📦 Available Scripts

- `npm run start:dev` : Start the app in development mode
- `npm run build` : Build the application
- `npm run package` : Package the app for the current platform
- `npm run make` : Create installers
- `npm run publish` : Publish the application

## 🏗️ Project Structure

```
electron-playground/
├── client/             # React frontend source
│   ├── src/
│   ├── index.html
│   └── vite.config.ts
├── server/             # Express backend source
│   ├── ./          
│   └── vite.config.ts
├── preloader/          # Electron preload scripts
├── data/              # Data and configuration
├── config.ts          # Application configuration
└── forge.config.ts    # Electron Forge configuration
```

## ⚙️ Configuration

1. Create a `.env` file in the root directory:
```
NODE_ENV=development
```

2. Customize `forge.config.ts` for your build requirements
3. Adjust `config.ts` for application settings

## 🔨 Customization

1. **Frontend**: Modify React components in `client/src/`
2. **Backend**: Add API routes in `server/`


## 📚 Documentation

For more information about the technologies used:
- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [Vite](https://vitejs.dev/)
- [Electron Forge](https://www.electronforge.io/)

## 👤 Author

**nahtandev**
- Email: sayme@hellonathan.dev
- GitHub: [@nahtandev](https://github.com/nahtandev)

## 📄 License

This project is [MIT](LICENSE) licensed.
