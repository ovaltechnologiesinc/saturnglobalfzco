import { useEffect } from 'react';
import { Outlet, useRouterState } from '@tanstack/react-router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function RootLayout() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222326] font-sans antialiased relative">
      {/* Corporate Floating Header */}
      <Navbar currentPath={currentPath} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Corporate Deep Navy Footer */}
      <Footer />
    </div>
  );
}
