"use client";
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
      flexDirection: isMobile ? 'row' : 'row',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: isMobile ? '12px' : '32px',
      fontSize: isMobile ? 'clamp(13px, 4vw, 16px)' : '16px',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'flex-end',
      marginLeft: isMobile ? 0 : 'auto',
      letterSpacing: 'normal',
      background: isMobile ? '#003366' : 'none',
      padding: isMobile ? '12px 0' : 0,
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '260px' : 'none',
    }}>
      <span>ADWS Home&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>AR Claim Help&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Agencies&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Online&nbsp;|</span>
      <span>Services&nbsp;|</span>
      <span style={{textDecoration: 'underline'}}>Policies</span>
      <span style={{textDecoration: 'underline', marginLeft: isMobile ? 0 : '32px', fontSize: isMobile ? 'clamp(12px, 3vw, 14px)' : '14px'}}>En español</span>
    </nav>
  );

  return (
  <div style={{ background: '#fff', minHeight: '100vh', width: '100%' }}>
      <header style={{
        background: '#003366',
        padding: isMobile ? '6px 8px' : '16px 20px',
        fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        boxSizing: 'border-box',
        width: '100%',
        borderBottom: '1px solid #071C93',
        zIndex: 1000,
        minHeight: isMobile ? '72px' : 'auto',
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: isMobile ? 'clamp(13px, 5vw, 16px)' : '15px',
          fontFamily: 'inherit',
          marginRight: isMobile ? '18px' : '60px',
          letterSpacing: 'normal',
        }}>Arkansas.gov</div>
        {/* Add extra space between Arkansas.gov and nav links only in mobile view */}
        {isMobile && <div style={{width: '12px'}}></div>}
        {navLinks}
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

