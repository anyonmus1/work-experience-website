import React from 'react';

function Home() {
  const styles = {
    home: {
      paddingTop: '80px',
      backgroundColor: '#116466',
      color: '#D1E8E2',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(44, 53, 49, 0.7), rgba(17, 100, 102, 0.7))',
      backgroundImage: 'url("/path/to/your/hero-image.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#FFCB9A',
    },
    heroText: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#D9B08C',
      color: '#0D181D',
      padding: '0.8rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    features: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '4rem 2rem',
      backgroundColor: '#0D181D',
    },
    feature: {
      flexBasis: '30%',
      textAlign: 'center',
    },
    featureTitle: {
      color: '#D9B08C',
      marginBottom: '1rem',
    },
    quickStats: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '4rem 2rem',
      backgroundColor: '#116466',
    },
    stat: {
      textAlign: 'center',
    },
    statTitle: {
      color: '#FFCB9A',
      marginBottom: '0.5rem',
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  };

  return (
    <section style={styles.home}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Your Meme Coin</h1>
        <p style={styles.heroText}>The most hilarious and innovative cryptocurrency in the meme universe!</p>
        <a href="/about" style={styles.ctaButton}>Learn More</a>
      </div>
      <div style={styles.features}>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Community Driven</h2>
          <p>Join our vibrant and engaged community of meme enthusiasts and crypto lovers.</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Meme-Powered</h2>
          <p>Harness the viral nature of memes for explosive growth and endless entertainment.</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Real Utility</h2>
          <p>Beyond the laughs, we're building real use cases and partnerships in the crypto world.</p>
        </div>
      </div>
      <div style={styles.quickStats}>
        <div style={styles.stat}>
          <h3 style={styles.statTitle}>Total Supply</h3>
          <p style={styles.statValue}>1,000,000,000</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statTitle}>Holders</h3>
          <p style={styles.statValue}>50,000+</p>
        </div>
        <div style={styles.stat}>
          <h3 style={styles.statTitle}>Market Cap</h3>
          <p style={styles.statValue}>$10M+</p>
        </div>
      </div>
    </section>
  );
}

export default Home;