import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Target, Users, Leaf, Code, Bell, Zap, Globe } from 'lucide-react';

const roadmapData = [
  {
    phase: "Phase 1: Seeding the Fields",
    timeline: "Q4 2024 - Q1 2025",
    icon: <Rocket size={24} color="#713c4e" />,
    items: [
      "Launch of CWB token on Ethereum mainnet",
      "Initial exchange listings and liquidity provision",
      "Community building initiatives and social media campaigns",
      "Release of basic governance features for community voting",
      "Development and testing of core smart contracts",
      "Implementation of security measures and audits",
      "Launch of community engagement programs"
    ],
    status: "upcoming"
  },
  {
    phase: "Phase 2: Nurturing Growth",
    timeline: "Q2 2025 - Q3 2025",
    icon: <Leaf size={24} color="#713c4e" />,
    items: [
      "Launch of the May-Bellets Militia meme creation platform",
      "Implementation of staking and yield farming features",
      "Expansion of governance capabilities",
      "Partnerships with key influencers and meme communities",
      "First major marketing campaign",
      "Launch of educational resources",
      "Introduction of community rewards program"
    ],
    status: "planned"
  },
  {
    phase: "Phase 3: Expanding the Pastures",
    timeline: "Q4 2025 - Q2 2026",
    icon: <Globe size={24} color="#713c4e" />,
    items: [
      "Integration with Binance Smart Chain for cross-chain functionality",
      "Launch of NFT marketplace for meme trading",
      "Implementation of DAO structure for fully decentralized governance",
      "Development of educational resources",
      "Exploration of Solana integration",
      "Enhanced security features implementation",
      "Strategic partnerships expansion"
    ],
    status: "planned"
  },
  {
    phase: "Phase 4: Harvesting Innovation",
    timeline: "Q3 2026 - Q4 2026",
    icon: <Zap size={24} color="#713c4e" />,
    items: [
      "Launch of May-Bellets DeFi suite",
      "Implementation of layer 2 scaling solution",
      "Major partnerships with traditional brands",
      "First annual MooCon conference",
      "Establishment of May-Bellets Grants program",
      "Advanced trading features implementation",
      "Global community expansion initiatives"
    ],
    status: "planned"
  }
];

function Roadmap() {
  // Hook to detect if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    roadmap: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8',
      color: '#ffffff',
      minHeight: '100vh',
      overflowX: 'hidden', // Prevent horizontal scroll on mobile
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
      background: 'linear-gradient(rgba(11, 23, 27, 0.8), rgba(40, 38, 90, 0.8))',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      '@media (min-width: 768px)': {
        padding: '4rem 2rem',
      },
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#efcea1',
      wordBreak: 'break-word',
    },
    heroText: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#ffffff',
      padding: '0 1rem',
    },
    content: {
      padding: '2rem 1rem',
      backgroundColor: '#0b171b',
      position: 'relative',
      '@media (min-width: 768px)': {
        padding: '4rem 2rem',
      },
    },
    timeline: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      paddingTop: '2rem',
    },
    timelineConnector: {
      position: 'absolute',
      left: '20px',
      width: '4px',
      height: '100%',
      backgroundColor: '#713c4e',
      opacity: 0.3,
      '@media (min-width: 768px)': {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    phase: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '4rem',
      position: 'relative',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
    phaseContent: {
      flex: '1',
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      borderRadius: '15px',
      padding: '1.5rem',
      margin: '1rem 0 1rem 3rem',
      border: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        padding: '2rem',
        margin: '0 2rem',
      },
    },
    phaseHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
      gap: '1rem',
    },
    phaseTitle: {
      color: '#efcea1',
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
      marginBottom: '0.5rem',
      wordBreak: 'break-word',
    },
    phaseTimeline: {
      color: '#a7af75',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    phaseIcon: {
      backgroundColor: '#28265a',
      padding: '1rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: '0',
      zIndex: 2,
      border: '2px solid #713c4e',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    itemsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      marginBottom: '1rem',
      paddingLeft: '1.5rem',
      position: 'relative',
      color: '#93b3d8',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      '&:before': {
        content: '"🐮"',
        position: 'absolute',
        left: 0,
        top: '2px',
      },
    },
    disclaimer: {
      textAlign: 'center',
      padding: '2rem 1rem',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      opacity: 0.8,
      maxWidth: '800px',
      margin: '0 auto',
      color: '#a7af75',
    },
  };

  // Optimized animation variants for mobile
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const phaseVariants = (index) => ({
    initial: { 
      opacity: 0, 
      x: window.innerWidth < 768 ? -20 : (index % 2 === 0 ? -50 : 50) 
    },
    animate: { 
      opacity: 1, 
      x: 0 
    },
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.4,
      delay: index * 0.1
    }
  });

  return (
    <div style={styles.roadmap}>
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <motion.h1 
          style={styles.heroTitle}
          {...fadeInVariants}
        >
          Our Roadmap
        </motion.h1>
        <motion.p 
          style={styles.heroText}
          {...fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          Follow the May-Bellets Militia's journey as we cultivate a revolutionary 
          ecosystem in the crypto pastures. Our detailed roadmap outlines the key 
          milestones in our mission to transform the meme coin landscape.
        </motion.p>
      </motion.div>

      <div style={styles.content}>
        <div style={styles.timeline}>
          <div style={styles.timelineConnector} />
          {roadmapData.map((phase, index) => (
            <motion.div
              key={index}
              style={styles.phase}
              variants={phaseVariants(index)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                style={styles.phaseIcon}
                whileHover={prefersReducedMotion ? {} : {
                  backgroundColor: '#713c4e',
                  transform: window.innerWidth < 768 ? 
                    'scale(1.1)' : 
                    'translateX(-50%) scale(1.1)',
                  boxShadow: '0 0 20px rgba(252, 255, 244, 0.3)',
                }}
              >
                {phase.icon}
              </motion.div>
              <motion.div 
                style={styles.phaseContent}
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
                  border: '1px solid rgba(252, 255, 244, 0.2)',
                }}
              >
                <div style={styles.phaseHeader}>
                  <div>
                    <h2 style={styles.phaseTitle}>{phase.phase}</h2>
                    <p style={styles.phaseTimeline}>{phase.timeline}</p>
                  </div>
                </div>
                <ul style={styles.itemsList}>
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      style={styles.item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: prefersReducedMotion ? 0 : (index * 0.1) + (itemIndex * 0.05),
                        duration: 0.3
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          style={styles.disclaimer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
        >
          This roadmap is a living document and may be adjusted based on technological 
          advancements, market conditions, and community feedback. We're committed to 
          transparency and will keep our community informed of any changes or updates 
          to our plans.
        </motion.p>
      </div>
    </div>
  );
}

export default Roadmap;