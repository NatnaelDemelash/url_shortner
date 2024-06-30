import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/* Header */}
        <Header />
        <Outlet />
        {/* Body */}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-100 shadow-gray-800  font-semibold">
        &copy; 2024 DevByNatiD. All rights reserved.
      </footer>
    </div>
  );
};

export default AppLayout;
