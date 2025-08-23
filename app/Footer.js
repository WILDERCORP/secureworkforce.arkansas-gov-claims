import '../../styles/globals.css';

export default function Footer() {
  return (
    <footer style={{
      background: '#071C93',
      padding: '0 0 32px 0',
      color: '#fff',
      width: '100%',
      fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '1px solid #003366',
      zIndex: 1000,
      height: '80px',
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
        maxWidth: 980,
        margin: '0 auto',
        width: '100%',
        letterSpacing: 'normal',
        height: '100%',
      }}>
        <span style={{fontSize: 15}}>
          All Rights Reserved. Copyright © 2021 ADWS, State of Arkansas
        </span>
        <span style={{fontSize: 16, textDecoration: 'underline', cursor: 'pointer'}}>
          Contact ADWS
        </span>
        <span style={{fontSize: 16, textDecoration: 'underline', cursor: 'pointer'}}>
          FAQ
        </span>
        <span style={{fontSize: 16, textDecoration: 'underline', cursor: 'pointer'}}>
          Privacy Policy
        </span>
      </div>
    </footer>
  );
}
