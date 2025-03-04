import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar__header">
        <h1 className="sidebar__title">Playground</h1>
      </div>
      
      <nav className="sidebar__nav">
        <NavLink to="/" className="sidebar__link">
          <span className="sidebar__icon">📊</span>
          Dashboard
        </NavLink>
        <NavLink to="/commandes" className="sidebar__link">
          <span className="sidebar__icon">📦</span>
          Commandes
        </NavLink>
        <NavLink to="/clients" className="sidebar__link">
          <span className="sidebar__icon">👥</span>
          Clients
        </NavLink>
        <NavLink to="/parametres" className="sidebar__link">
          <span className="sidebar__icon">⚙️</span>
          Paramètres
        </NavLink>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__user-avatar">JD</div>
          <div className="sidebar__user-info">John Doe</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
