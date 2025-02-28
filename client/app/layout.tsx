import "./global.scss";
import { geistMono } from "./_common/fonts/fonts";
import Sidebar from "./components/sidebar/sidebar";
import { Metadata } from "next";


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
    <html lang="fr" className={`${geistMono.variable}`}>
      <body>
        <div className="layout">
          <div className="layout__body">
            <div className="layout__container">
              <Sidebar />
              <main className="layout__main">
                <div className="layout__content">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
