import React from 'react';

// You can replace these with actual values
const tokenomicsData = {
  totalSupply: "1,000,000,000,000",
  circulatingSupply: "600,000,000,000",
  burnRate: "2%",
  distribution: [
    { category: "Community", percentage: 50 },
    { category: "Liquidity", percentage: 20 },
    { category: "Team", percentage: 15 },
    { category: "Marketing", percentage: 10 },
    { category: "Development", percentage: 5 },
  ],
};

function Tokenomics() {
  const styles = {
    tokenomics: {
      paddingTop: '80px',
      backgroundColor: '#116466',
      color: '#D1E8E2',
      minHeight: '100vh',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(13, 24, 29, 0.7), rgba(17, 100, 102, 0.7))',
      backgroundImage: 'url("/path/to/your/tokenomics-hero-image.jpg")',
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
      maxWidth: '1200px',
      margin: '0 auto 4rem',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#D9B08C',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    tokenInfo: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '2rem',
      marginBottom: '4rem',
    },
    infoCard: {
      backgroundColor: '#116466',
      borderRadius: '10px',
      padding: '1.5rem',
      textAlign: 'center',
      flexBasis: 'calc(33% - 2rem)',
      minWidth: '200px',
    },
    infoTitle: {
      color: '#FFCB9A',
      marginBottom: '0.5rem',
    },
    infoValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    distributionChart: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    distributionBar: {
      display: 'flex',
      alignItems: 'center',
      height: '40px',
      backgroundColor: '#116466',
      borderRadius: '20px',
      overflow: 'hidden',
    },
    distributionFill: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem',
      color: '#0D181D',
      fontWeight: 'bold',
    },
    distributionLabel: {
      marginLeft: '1rem',
      color: '#D1E8E2',
    },
  };

  const getRandomColor = () => {
    const colors = ['#FFCB9A', '#D9B08C', '#D1E8E2', '#116466', '#2C3531'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={styles.tokenomics}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Tokenomics</h1>
        <p style={styles.heroText}>
          Understand the economics behind [Your Meme Coin Name]. 
          Our tokenomics are designed for long-term sustainability and community benefit.
        </p>
      </div>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Token Information</h2>
          <div style={styles.tokenInfo}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Total Supply</h3>
              <p style={styles.infoValue}>{tokenomicsData.totalSupply}</p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Circulating Supply</h3>
              <p style={styles.infoValue}>{tokenomicsData.circulatingSupply}</p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>Burn Rate</h3>
              <p style={styles.infoValue}>{tokenomicsData.burnRate} per transaction</p>
            </div>
          </div>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Token Distribution</h2>
          <div style={styles.distributionChart}>
            {tokenomicsData.distribution.map((item, index) => (
              <div key={index}>
                <div style={styles.distributionBar}>
                  <div 
                    style={{
                      ...styles.distributionFill,
                      width: `${item.percentage}%`,
                      backgroundColor: getRandomColor(),
                    }}
                  >
                    {item.percentage}%
                  </div>
                  <span style={styles.distributionLabel}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tokenomics;