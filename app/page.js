import MainContent from './MainContent';
import Footer from './Footer';

export default function Page() {
  return (
    <>
      <header style={{
        background: '#003366',
        padding: '20px',
        fontFamily: 'alfabet, Arial, Helvetica, sans-serif',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%',
        borderBottom: '1px solid #071C93',
        zIndex: 1000
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '17px',
          fontFamily: 'inherit',
          marginRight: '60px',
          letterSpacing: 'normal',
        }}>Arkansas.gov</div>
        <nav style={{
          display: 'flex',
          gap: '32px',
          fontSize: '16px',
          alignItems: 'center',
          marginLeft: '35vw',
          letterSpacing: 'normal',
        }}>
          <span>ADWS Home&nbsp;|</span>
          <span style={{textDecoration: 'underline'}}>AR Claim Help&nbsp;|</span>
          <span style={{textDecoration: 'underline'}}>Agencies&nbsp;|</span>
          <span style={{textDecoration: 'underline'}}>Online&nbsp;|</span>
          <span>Services&nbsp;|</span>
          <span style={{textDecoration: 'underline'}}>Policies</span>
          <span style={{textDecoration: 'underline', marginLeft: '32px', fontSize: '14px'}}>En español</span>
        </nav>
      </header>
      <MainContent />
      <Footer />
    </>
  );
}

