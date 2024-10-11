import React from 'react';

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Launch and Community Building",
    items: [
      "Launch website and social media channels",
      "Initial token distribution",
      "Community building and engagement initiatives",
      "Listing on decentralized exchanges"
    ]
  },
  {
    phase: "Phase 2",
    title: "Growth and Partnerships",
    items: [
      "Major marketing campaigns",
      "Strategic partnerships with meme creators",
      "Launch of community governance platform",
      "Listing on major centralized exchanges"
    ]
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Expansion",
    items: [
      "Launch of NFT marketplace",
      "Development of meme creation tools",
      "Cross-chain integration",
      "Expansion into DeFi protocols"
    ]
  },
  {
    phase: "Phase 4",
    title: "Global Adoption",
    items: [
      "Launch of mobile app",
      "Integration with major e-commerce platforms",
      "Sponsorship of meme contests and events",
      "Establishment of [Your Meme Coin] Foundation"
    ]
  }
];

function Roadmap() {
  const styles = {
    roadmap: {
      paddingTop: '80px',
      backgroundColor: '#116466',
      color: '#D1E8E2',
      minHeight: '100vh',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(13, 24, 29, 0.7), rgba(17, 100, 102, 0.7))',
      backgroundImage: 'url("/path/to/your/roadmap-hero-image.jpg")',
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
    timeline: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      width: '4px',
      height: '100%',
      backgroundColor: '#D9B08C',
      transform: 'translateX(-50%)',
    },
    timelineItem: {
      position: 'relative',
      width: '50%',
      padding: '2rem',
      boxSizing: 'border-box',
      margin: '2rem 0',
    },
    timelineItemLeft: {
      left: '0',
      textAlign: 'right',
    },
    timelineItemRight: {
      left: '50%',
      textAlign: 'left',
    },
    timelineContent: {
      padding: '1.5rem',
      backgroundColor: '#116466',
      borderRadius: '10px',
      position: 'relative',
    },
    timelineContentLeft: {
      marginRight: '2rem',
    },
    timelineContentRight: {
      marginLeft: '2rem',
    },
    phase: {
      position: 'absolute',
      top: '0',
      backgroundColor: '#FFCB9A',
      color: '#0D181D',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontWeight: 'bold',
    },
    phaseLeft: {
      right: '-1rem',
    },
    phaseRight: {
      left: '-1rem',
    },
    title: {
      color: '#FFCB9A',
      marginBottom: '1rem',
      fontSize: '1.5rem',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.roadmap}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Our Roadmap</h1>
        <p style={styles.heroText}>
          Explore the exciting journey ahead for [Your Meme Coin Name]. 
          From launch to global adoption, we've got big plans for the future!
        </p>
      </div>
      <div style={styles.content}>
        <div style={styles.timeline}>
          <div style={styles.timelineLine}></div>
          {roadmapItems.map((item, index) => (
            <div 
              key={index} 
              style={{
                ...styles.timelineItem, 
                ...(index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight)
              }}
            >
              <div style={{
                ...styles.timelineContent,
                ...(index % 2 === 0 ? styles.timelineContentLeft : styles.timelineContentRight)
              }}>
                <div style={{
                  ...styles.phase,
                  ...(index % 2 === 0 ? styles.phaseLeft : styles.phaseRight)
                }}>{item.phase}</div>
                <h3 style={styles.title}>{item.title}</h3>
                <ul style={styles.list}>
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex} style={styles.listItem}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;