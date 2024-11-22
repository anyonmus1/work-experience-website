import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Rocket, ChartBar, Bell, Leaf, Target, Heart } from 'lucide-react';

function Home() {
  const styles = {
    home: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8',
      color: '#28265a',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    hero: {
      textAlign: 'center',
      padding: '6rem 2rem',
      background: 'linear-gradient(rgba(11, 23, 27, 0.8), rgba(40, 38, 90, 0.8))',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#efcea1',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      color: '#a7af75',
      marginBottom: '2rem',
    },
    heroText: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      marginBottom: '2.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#ffffff',
    },
    ctaContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#713c4e',
      color: '#0b171b',
      padding: '1rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      border: '2px solid transparent',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(252, 255, 244, 0.2)',
      transition: 'all 0.3s ease',
    },
    secondaryCta: {
      backgroundColor: 'transparent',
      border: '2px solid #93b3d8',
      color: '#93b3d8',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '4rem 2rem',
      backgroundColor: '#0b171b',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    feature: {
      padding: '2rem',
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
      color: '#efcea1',
      fontSize: '1.5rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    stats: {
      padding: '4rem 2rem',
      backgroundColor: '#93b3d8',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    stat: {
      backgroundColor: 'rgba(40, 38, 90, 0.1)',
      padding: '2rem',
      borderRadius: '15px',
      textAlign: 'center',
      border: '1px solid rgba(147, 179, 216, 0.1)',
      transition: 'all 0.3s ease',
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#713c4e',
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    statLabel: {
      color: '#28265a',
      fontSize: '1.1rem',
    },
    manifestoSection: {
      padding: '4rem 2rem',
      backgroundColor: '#0b171b',
      textAlign: 'center',
    },
    manifestoContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    manifestoQuote: {
      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
      color: '#a7af75',
      fontStyle: 'italic',
      lineHeight: '1.6',
      marginBottom: '2rem',
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

  return (
    <div style={styles.home}>
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          style={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to CowWifBell
        </motion.h1>
        <motion.h2
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The May-Bellets Militia
        </motion.h2>
        <motion.p 
          style={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Join our revolutionary campaign to reclaim the spirit of community, security, and fun 
          in the meme coin landscape. Led by Field General May Bell, we're here to change the 
          game and create a new paradigm in the crypto space!
        </motion.p>
        <motion.div 
          style={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/about"
            style={styles.ctaButton}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#28265a',
              color: '#713c4e',
              border: '2px solid #713c4e',
              boxShadow: '0 6px 20px rgba(252, 255, 244, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Users size={20} />
            Join the Militia
          </motion.a>
          <motion.a
            href="/tokenomics"
            style={{...styles.ctaButton, ...styles.secondaryCta}}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#713c4e',
              color: '#0b171b',
              border: '2px solid #713c4e',
            }}
            whileTap={{ scale: 0.95 }}
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
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            style={styles.feature}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
              border: '1px solid rgba(252, 255, 244, 0.2)',
            }}
          >
            <motion.div 
              style={styles.featureIcon}
              whileHover={{
                backgroundColor: '#713c4e',
              }}
            >
              <motion.div
                style={styles.icon}
                whileHover={{
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
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
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
          <p style={{ color: '#ffffff' }}>- Field General May Bell</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;