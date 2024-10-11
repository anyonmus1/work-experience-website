import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      backgroundColor: '#0D181D',
      padding: '1rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      height: '40px',
      width: 'auto',
    },
    nav: {
      display: isMobile && !isMenuOpen ? 'none' : 'block',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '100%' : 'auto',
      left: isMobile ? 0 : 'auto',
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? '#0D181D' : 'transparent',
      padding: isMobile ? '1rem' : 0,
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
    },
    navItem: {
      margin: isMobile ? '0.5rem 0' : '0 1rem',
    },
    navLink: {
      color: '#D1E8E2',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    menuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: '#D1E8E2',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <img src="/path/to/your/logo.png" alt="Your Meme Coin Logo" style={styles.logo} />
        <button 
          style={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
            <li style={styles.navItem}><a href="/characters" style={styles.navLink}>Characters</a></li>
            <li style={styles.navItem}><a href="/roadmap" style={styles.navLink}>Roadmap</a></li>
            <li style={styles.navItem}><a href="/tokenomics" style={styles.navLink}>Tokenomics</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;