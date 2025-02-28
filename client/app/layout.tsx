import "./global.scss";
import "./_common/knacss.scss";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/sidebar/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Application de gestion avec Electron et Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="layout">
      <body className="layout__body">
        <div className="layout__container">
          <Sidebar />
          <div className="layout__main">
            <main className="layout__content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
