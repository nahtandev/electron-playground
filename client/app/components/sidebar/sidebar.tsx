"use client";

import "./sidebar.scss"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <h1 className="sidebar__title">Mon App</h1>
        </div>
      </div>

      <div className="sidebar__content">
        <nav className="sidebar__nav">
          <Link 
            href="/" 
            className={`sidebar__link ${isActive('/') ? 'sidebar__link--active' : ''}`}
          >
            <span className="sidebar__icon">📊</span>
            <span className="sidebar__text">Dashboard</span>
          </Link>

          <Link 
            href="/commandes" 
            className={`sidebar__link ${isActive('/commandes') ? 'sidebar__link--active' : ''}`}
          >
            <span className="sidebar__icon">📦</span>
            <span className="sidebar__text">Commandes</span>
          </Link>

          <Link 
            href="/clients" 
            className={`sidebar__link ${isActive('/clients') ? 'sidebar__link--active' : ''}`}
          >
            <span className="sidebar__icon">👥</span>
            <span className="sidebar__text">Clients</span>
          </Link>

          <Link 
            href="/parametres" 
            className={`sidebar__link ${isActive('/parametres') ? 'sidebar__link--active' : ''}`}
          >
            <span className="sidebar__icon">⚙️</span>
            <span className="sidebar__text">Paramètres</span>
          </Link>
        </nav>
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__avatar">
            <span className="sidebar__avatar-text">JD</span>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">John Doe</p>
            <p className="sidebar__user-role">Administrateur</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
