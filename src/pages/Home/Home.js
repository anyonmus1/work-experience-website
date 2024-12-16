import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Users, ChartBar, Bell, Leaf, Target, Heart } from 'lucide-react';

function Home() {
  // Hook to respect user's motion preferences
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    home: {
      paddingTop: '80px',
      backgroundColor: '#100c1c',
      color: '#28265a',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
      background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(40, 38, 90, 0.8))',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      '@media (minwidth: 768px)': {
        padding: '6rem 2rem',
      },
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#ffe3b3',
      wordBreak: 'break-word',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
      color: '#c79884',
      marginBottom: '2rem',
      wordBreak: 'break-word',
    },
    heroText: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      marginBottom: '2.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#ffffff',
      padding: '0 1rem',
    },
    ctaContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '0 1rem',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#713c4e',
      color: '#100c1c',
      padding: '0.875rem 1.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      border: '2px solid transparent',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(252, 255, 244, 0.2)',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      '@media (minwidth: 768px)': {
        padding: '1rem 2rem',
      },
    },
    secondaryCta: {
      backgroundColor: 'transparent',
      border: '2px solid #93b3d8',
      color: '#93b3d8',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      padding: '2rem 1rem',
      backgroundColor: '#100c1c',
      maxWidth: '1400px',
      margin: '0 auto',
      '@media (minwidth: 768px)': {
        padding: '4rem 2rem',
        gap: '2rem',
      },
    },
    feature: {
      padding: '1.5rem',
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '@media (minwidth: 768px)': {
        padding: '2rem',
      },
    },
    featureIcon: {
      backgroundColor: '#28265a',
      padding: '1rem',
      borderRadius: '50%',
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    icon: {
      color: '#713c4e',
      transition: 'color 0.3s ease',
    },
    featureTitle: {
      color: '#ffe3b3',
      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
      marginBottom: '1rem',
      fontWeight: 'bold',
      wordBreak: 'break-word',
    },
    stats: {
      padding: '2rem 1rem',
      backgroundColor: '#93b3d8',
      '@media (minwidth: 768px)': {
        padding: '4rem 2rem',
      },
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      '@media (minwidth: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      },
    },
    stat: {
      backgroundColor: 'rgba(40, 38, 90, 0.1)',
      padding: '1.5rem',
      borderRadius: '15px',
      textAlign: 'center',
      border: '1px solid rgba(147, 179, 216, 0.1)',
      transition: 'all 0.3s ease',
      '@media (minwidth: 768px)': {
        padding: '2rem',
      },
    },
    statValue: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#713c4e',
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    statLabel: {
      color: '#28265a',
      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    },
    manifestoSection: {
      padding: '2rem 1rem',
      backgroundColor: '#100c1c',
      textAlign: 'center',
      '@media (minwidth: 768px)': {
        padding: '4rem 2rem',
      },
    },
    manifestoContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    manifestoQuote: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
      color: '#c79884',
      fontStyle: 'italic',
      lineHeight: '1.6',
      marginBottom: '2rem',
      padding: '0 1rem',
    },
  };

  const features = [
    {
      icon: <Shield size={32} />,
      title: "Fort Knox of the Farmyard",
      description: "State-of-the-art security measures including smart contract audits and anti-pump-and-dump mechanisms."
    },
    {
      icon: <Users size={32} />,
      title: "Community Governance",
      description: "Every member has a voice through our innovative Proof of Steak mechanism and decentralized governance."
    },
    {
      icon: <Target size={32} />,
      title: "Strategic Vision",
      description: "Clear roadmap with planned developments, partnerships, and ecosystem expansion initiatives."
    },
    {
      icon: <Bell size={32} />,
      title: "Revolutionary Tokenomics",
      description: "Fair distribution with 50% allocated to community rewards and ecosystem growth."
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainable Growth",
      description: "Smart contract-powered ecosystem ensures continuous development, liquidity provision, and community rewards"
    },
    {
      icon: <Heart size={32} />,
      title: "Community First",
      description: "Regular events, rewards, and engagement initiatives to nurture our growing community."
    }
  ];

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.4 }
  };


  return (
    <div style={styles.home}>
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <motion.h1 
          style={styles.heroTitle}
          {...fadeInUp}
        >
          Welcome to CowWifBell
        </motion.h1>
        <motion.h2
          style={styles.heroSubtitle}
          {...fadeInUp}
        >
          The May-Bellets Militia
        </motion.h2>
        <motion.p 
          style={styles.heroText}
          {...fadeInUp}
        >
          Join our revolutionary campaign to reclaim the spirit of community, security, and fun 
          in the meme coin landscape. Led by Field General May Bell, we're here to change the 
          game and create a new paradigm in the crypto space!
        </motion.p>
        <motion.div 
          style={styles.ctaContainer}
          {...fadeInUp}
        >
          <motion.a
            href="/connect"
            style={styles.ctaButton}
            whileHover={prefersReducedMotion ? {} : { 
              scale: 1.05,
              backgroundColor: '#28265a',
              color: '#713c4e',
              border: '2px solid #713c4e',
              boxShadow: '0 6px 20px rgba(252, 255, 244, 0.3)',
            }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <Users size={20} />
            Join the Militia
          </motion.a>
          <motion.a
            href="/tokenomics"
            style={{...styles.ctaButton, ...styles.secondaryCta}}
            whileHover={prefersReducedMotion ? {} : { 
              scale: 1.05,
              backgroundColor: '#713c4e',
              color: '#100c1c',
              border: '2px solid #713c4e',
            }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <ChartBar size={20} />
            View Tokenomics
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        style={styles.features}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            style={styles.feature}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
            whileHover={prefersReducedMotion ? {} : { 
              y: -10,
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
              border: '1px solid rgba(252, 255, 244, 0.2)',
            }}
          >
            <motion.div 
              style={styles.featureIcon}
              whileHover={prefersReducedMotion ? {} : {
                backgroundColor: '#713c4e',
              }}
            >
              <motion.div
                style={styles.icon}
                whileHover={prefersReducedMotion ? {} : {
                  color: '#28265a',
                }}
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p>{feature.description}</p>
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: '#713c4e',
                opacity: 0,
              }}
              whileHover={{ opacity: 0.6 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div style={styles.stats}>
        <motion.div 
          style={styles.statsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { value: "10B", label: "Total Supply" },
            { value: "50%", label: "Community Allocation" },
            { value: "12mo", label: "Liquidity Lock" },
            { value: "12mo", label: "Vesting Period" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { 
                y: -10,
                boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
                border: '1px solid rgba(252, 255, 244, 0.2)',
              }}
            >
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div style={styles.manifestoSection}>
        <motion.div 
          style={styles.manifestoContent}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <blockquote style={styles.manifestoQuote}>
            "In pastures of pixels and fields of finance, we stand united. Our strength is our 
            community, our shield is our security, and our spirit is the joy we bring to the 
            world of cryptocurrency."
          </blockquote>
          <p style={{ color: '#ffffff', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>- Field General May Bell</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;