import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Important pour Electron
  images: {
    unoptimized: true, // Nécessaire pour le mode export
  },
  // Désactive le mode strict en développement pour éviter les problèmes avec Electron
  reactStrictMode: process.env.NODE_ENV === "production",
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
