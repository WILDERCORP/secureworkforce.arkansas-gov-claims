"use client";
import '../src/styles/globals.css';
import MainContent from './MainContent';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = (
    <nav style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
      fontSize: '12px',
      alignItems: 'center',
      marginLeft: '48px',
      letterSpacing: 'normal',
      background: 'none',
      padding: 0,
      flexWrap: 'wrap',
    }}>
      <span>ADWS Home&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>AR Claim Help&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Agencies&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Online&nbsp;|</span>
      <span>Services&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Policies</span>
      <span style={{textDecoration: 'underline', marginLeft: '16px', fontSize: '12px'}}>En español</span>
    </nav>
  );

  return (
    <div style={{ background: '#fff', minHeight: '100vh', width: '100%' }}>
      <MainContent />
      <Footer />
    </div>
  );
}

