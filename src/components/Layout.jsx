import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingSocials from './FloatingSocials';
import FloatingChat from './FloatingChat';

const Layout = ({ children }) => {
  return (
    <div className="app-background">
      {/* Header will be rendered here */}
      <Header />
      
      {/* Main content will be rendered here */}
      <main>
        {children}
      </main>
      
      {/* Footer will be rendered here */}
      <Footer />
      
      {/* Floating elements */}
      <FloatingSocials />
      <FloatingChat />
    </div>
  );
};

export default Layout;