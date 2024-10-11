import React from 'react';

function About() {
  const styles = {
    about: {
      paddingTop: '80px',
      backgroundColor: '#116466',
      color: '#D1E8E2',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(13, 24, 29, 0.7), rgba(17, 100, 102, 0.7))',
      backgroundImage: 'url("/path/to/your/about-hero-image.jpg")',
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
      maxWidth: '800px',
      margin: '0 auto',
    },
    content: {
      padding: '4rem 2rem',
      backgroundColor: '#0D181D',
    },
    section: {
      maxWidth: '1000px',
      margin: '0 auto 4rem',
    },
    sectionTitle: {
      color: '#D9B08C',
      marginBottom: '1rem',
      fontSize: '2rem',
    },
    features: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    feature: {
      flexBasis: 'calc(33% - 1rem)',
      backgroundColor: '#116466',
      padding: '1.5rem',
      borderRadius: '10px',
      marginBottom: '2rem',
    },
    featureTitle: {
      color: '#FFCB9A',
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.about}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Our Meme Coin</h1>
        <p style={styles.heroText}>
          Welcome to [Your Meme Coin Name], the most hilarious and innovative cryptocurrency in the meme universe! 
          Born from the wild imagination of internet culture and fueled by the power of community, our coin is here 
          to bring laughter, value, and a touch of absurdity to the world of finance.
        </p>
      </div>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p>
            [Your Meme Coin Name] was created in 2024 by a group of meme enthusiasts and blockchain developers 
            who believed that cryptocurrency could be both fun and functional. Inspired by the viral nature of 
            internet memes and the transformative potential of blockchain technology, we set out to create a 
            digital currency that would make people laugh while also offering real utility in the crypto space.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <div style={styles.features}>
            <div style={styles.feature}>
              <h3 style={styles.featureTitle}>Community Driven</h3>
              <p>Our strength lies in our vibrant and engaged community of meme lovers and crypto enthusiasts.</p>
            </div>
            <div style={styles.feature}>
              <h3 style={styles.featureTitle}>Meme-Powered Growth</h3>
              <p>We harness the viral nature of memes for explosive growth and brand recognition.</p>
            </div>
            <div style={styles.feature}>
              <h3 style={styles.featureTitle}>Real Utility</h3>
              <p>Beyond the laughs, we're building real use cases and partnerships in the crypto world.</p>
            </div>
          </div>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p>
            At [Your Meme Coin Name], we envision a future where finance and fun coexist harmoniously. 
            We aim to create a global community of meme coin holders who not only enjoy the humor and 
            creativity of our project but also benefit from its growing ecosystem and real-world applications. 
            Through strategic partnerships, innovative features, and community-driven initiatives, we're 
            committed to establishing [Your Meme Coin Name] as a leading player in the meme coin space and 
            the broader cryptocurrency market.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;