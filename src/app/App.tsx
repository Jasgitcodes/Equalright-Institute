import React from 'react';
import { Providers } from './providers';
import { AppRouter } from './router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageContainer } from '@/components/layout/PageContainer';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * Main App component.
 * Uses a wrap-around layout with Navbar, PageContainer, and Footer.
 * Path aliases like @/ are configured in vite.config.ts and tsconfig.json.
 */
const AppContent = () => {
  const location = useLocation();
  useScrollToTop();

  React.useEffect(() => {
    const routeNames: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/services': 'Services',
      '/contact': 'Contact',
      '/waitlist': 'Waitlist',
    };

    const currentPage = routeNames[location.pathname] || 'EqualRights';
    document.title = `EQI | ${currentPage}`;
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <PageContainer>
        <AppRouter />
      </PageContainer>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
};

export default App;
