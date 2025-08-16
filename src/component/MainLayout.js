import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const MainLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1" style={{ marginLeft: 250 }}>
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default MainLayout;
