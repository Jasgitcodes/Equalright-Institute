import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

/**
 * PageContainer component that provides consistent padding and width for pages.
 * It also manages the main content area's flexibility.
 */
export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="relative flex-grow min-h-screen bg-dot-pattern">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl animate-in fade-in duration-700 nature-accent">
        {children}
      </div>
    </main>
  );
};
