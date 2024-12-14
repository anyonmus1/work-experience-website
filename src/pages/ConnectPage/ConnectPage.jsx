import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Users } from 'lucide-react';
import WalletConnect from '../../components/WalletConnect/WalletConnect';

const ConnectPage = () => {
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    container: {
      paddingTop: '80px',
      backgroundColor: '#100c1c',
      color: '#28265a',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '4rem 1rem',
      textAlign: 'center',
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#ffe3b3',
      wordBreak: 'break-word',
    },
    subtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
      color: '#c79884',
      marginBottom: '2rem',
      wordBreak: 'break-word',
    },
    text: {
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      marginBottom: '2.5rem',
      color: '#ffffff',
      lineHeight: '1.6',
    },
    benefits: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },
    benefit: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    benefitIcon: {
      backgroundColor: '#28265a',
      padding: '1rem',
      borderRadius: '50%',
      display: 'inline-flex',
      marginBottom: '1rem',
      color: '#713c4e',
    },
    benefitTitle: {
      color: '#ffe3b3',
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    benefitText: {
      color: '#ffffff',
    },
  };

  return (
    <div style={styles.container}>
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <h1 style={styles.title}>Join the Militia</h1>
        <h2 style={styles.subtitle}>Connect Your Wallet to Begin</h2>
        <p style={styles.text}>
          Join our growing community of dedicated members and be part of the CowWifBell revolution. 
          Connect your wallet to participate in our fair launch and secure your position in the militia.
        </p>

        <WalletConnect />

        <div style={styles.benefits}>
          <motion.div 
            style={styles.benefit}
            whileHover={prefersReducedMotion ? {} : { 
              y: -10,
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)'
            }}
          >
            <div style={styles.benefitIcon}>
              <Shield size={32} />
            </div>
            <h3 style={styles.benefitTitle}>Secure & Transparent</h3>
            <p style={styles.benefitText}>
              Your connection is secured through Web3 technology, ensuring safe and transparent transactions on the Optimism network.
            </p>
          </motion.div>

          <motion.div 
            style={styles.benefit}
            whileHover={prefersReducedMotion ? {} : { 
              y: -10,
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)'
            }}
          >
            <div style={styles.benefitIcon}>
              <Users size={32} />
            </div>
            <h3 style={styles.benefitTitle}>Community Benefits</h3>
            <p style={styles.benefitText}>
              Get early access to our fair launch, community events, and exclusive militia member benefits.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectPage;