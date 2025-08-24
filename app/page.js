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
      display: isMobile ? 'flex' : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '12px' : '32px',
      fontSize: isMobile ? 'clamp(13px, 4vw, 16px)' : '16px',
      alignItems: isMobile ? 'flex-start' : 'center',
      marginLeft: isMobile ? 0 : '35vw',
      letterSpacing: 'normal',
      background: isMobile ? '#003366' : 'none',
      padding: isMobile ? '12px 0' : 0,
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
          fontSize: isMobile ? 'clamp(15px, 6vw, 19px)' : '17px',
          fontFamily: 'inherit',
          marginRight: isMobile ? 'auto' : '60px',
          letterSpacing: 'normal',
        }}>Arkansas.gov</div>
        {isMobile ? (
          <button
            style={{
              background: '#003366',
              color: '#fff',
              border: '1.5px solid #fff',
              borderRadius: 8,
              padding: '6px 14px',
              fontWeight: 600,
              fontSize: 'clamp(13px, 4vw, 15px)',
              cursor: 'pointer',
              marginLeft: 'auto',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              alignSelf: 'center',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              height: '32px',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#0050b3';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#003366';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            }}
            onClick={() => setShowNav(!showNav)}
            aria-expanded={showNav}
            aria-controls="mobile-nav-links"
          >
            {showNav ? 'Hide Links' : 'Show More'}
          </button>
        ) : navLinks}
        {isMobile && showNav && (
          <div id="mobile-nav-links" style={{width: '100%'}}>
            {navLinks}
          </div>
        )}
      </header>
      <MainContent />
      <Footer />
    </div>
  );
}

