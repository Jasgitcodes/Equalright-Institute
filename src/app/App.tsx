import React from 'react';
import { Providers } from './providers';
import { AppRouter } from './router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageContainer } from '@/components/layout/PageContainer';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { AnimatePresence } from 'framer-motion';
import { PageLoader } from '@/components/common/PageLoader';
import { ScrollToTop } from '@/components/common/ScrollToTop';

/**
 * Main App component.
 * Uses a wrap-around layout with Navbar, PageContainer, and Footer.
 * Path aliases like @/ are configured in vite.config.ts and tsconfig.json.
 */
const AppContent = () => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const location = useLocation();
  useScrollToTop();

  React.useEffect(() => {
    // Show loader on route change for a premium feel
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1500);

    const routeNames: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/services': 'Services',
      '/contact': 'Contact',
      '/waitlist': 'Waitlist',
    };

    const currentPage = routeNames[location.pathname] || 'EqualRights';
    document.title = `EQI | ${currentPage}`;

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isTransitioning && <PageLoader key="global-loader" />}
      </AnimatePresence>
      <ScrollToTop />
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
