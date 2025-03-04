import { Outlet } from 'react-router-dom';
import '../styles/layouts/main-layout.scss';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar className="main-layout__sidebar" />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
