import Navbar from '@/components/Navbar';
import React from 'react';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <main className="pt-5 lg:pt-20">{children}</main>
    </div>
  );
}

export default Layout;
