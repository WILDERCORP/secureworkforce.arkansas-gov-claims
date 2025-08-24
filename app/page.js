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
          fontSize: isMobile ? '12px' : '17px',
          fontFamily: 'inherit',
          marginRight: isMobile ? '16px' : '60px',
          letterSpacing: 'normal',
        }}>Arkansas.gov</div>
  {navLinks}
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

