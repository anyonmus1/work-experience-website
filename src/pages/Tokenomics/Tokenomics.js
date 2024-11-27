import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, Shield } from 'lucide-react';
import { PieChart as RechartsRotation, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

function Tokenomics() {
  const styles = {
    tokenomics: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8',
      color: '#ffffff',
      minHeight: '100vh',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(11, 23, 27, 0.8), rgba(40, 38, 90, 0.8))',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 4vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#efcea1',
      wordBreak: 'break-word',
    },
    heroText: {
      fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
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
      '@media (min-width: 768px)': {
        padding: '4rem 2rem',
      },
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto 4rem',
      '@media (min-width: 768px)': {
        margin: '0 auto 6rem',
      },
    },
    sectionTitle: {
      fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
      color: '#a7af75',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      margin: '2rem 0',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
      },
    },
    card: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      padding: '1.5rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        padding: '2rem',
      },
    },
    cardTitle: {
      color: '#efcea1',
      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
      marginBottom: '1rem',
    },
    infoValue: {
      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#713c4e',
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
      wordBreak: 'break-word',
    },
    distributionContainer: {
      height: 'clamp(300px, 60vh, 600px)',
      marginTop: '2rem',
      width: '100%',
      padding: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '2rem',
      overflowX: 'auto',
      display: 'block',
      '@media (min-width: 768px)': {
        display: 'table',
      },
    },
    tableHeader: {
      backgroundColor: 'rgba(40, 38, 90, 0.3)',
      padding: '1rem',
      textAlign: 'left',
      color: '#efcea1',
      whiteSpace: 'nowrap',
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid rgba(147, 179, 216, 0.1)',
      color: '#93b3d8',
      whiteSpace: 'nowrap',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      margin: '2rem 0',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        margin: '3rem 0',
      },
    },
    feature: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      padding: '1.5rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        padding: '2rem',
      },
    },
    featureIcon: {
      backgroundColor: '#28265a',
      padding: '1rem',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      width: '56px', // Added fixed width
      height: '56px', // Added fixed height
      marginBottom: '1rem',
    },
    icon: {
      color: '#713c4e',
      transition: 'color 0.3s ease',
      display: 'flex', // Added display flex
      alignItems: 'center', // Added align items
      justifyContent: 'center', // Added justify content
    },
  };
  const distributionData = [
    { name: 'Community Rewards & Ecosystem', value: 50, color: '#713c4e' },
    { name: 'Liquidity Provision', value: 30, color: '#efcea1' },
    { name: 'Development & Marketing', value: 15, color: '#28265a' },
    { name: 'Founders', value: 5, color: '#a7af75' },
  ];

  const tokenFeatures = [
    {
      title: "Anti-Whale Mechanisms",
      description: "Transaction limits and strategic measures to prevent market manipulation by large holders",
      icon: <Shield size={24} style={{ minWidth: '24px', minHeight: '24px' }} /> // Added fixed dimensions
    },
    {
      title: "Vesting Schedule",
      description: "12-month cliff followed by 36-month linear vesting for founder allocations",
      icon: <LineChart size={24} style={{ minWidth: '24px', minHeight: '24px' }} />
    },
    {
      title: "Liquidity Locks",
      description: "Initial liquidity locked for 12 months to ensure stability",
      icon: <BarChart size={24} style={{ minWidth: '24px', minHeight: '24px' }} />
    }
  ];

  const keyMetrics = [
    { label: "Total Supply", value: "10 Billion", suffix: "CWB" },
    { label: "Initial Market Cap", value: "TBA", suffix: "" },
    { label: "Launch Price", value: "TBA", suffix: "" },
    { label: "Vesting Period", value: "48", suffix: "Months" }
  ];

  const [chartSize, setChartSize] = useState({
    outerRadius: 120,
    isMobile: false
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setChartSize({
        outerRadius: isMobile ? 80 : 120,
        isMobile
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile-optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={styles.tokenomics}>
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          style={styles.heroTitle}
          {...fadeInUp}
        >
          CowWifBell Tokenomics
        </motion.h1>
        <motion.p 
          style={styles.heroText}
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Our tokenomics model is designed for sustainable growth and community rewards. 
          Every transaction strengthens our ecosystem through the innovative Grazing Tax system.
        </motion.p>
      </motion.div>

      <div style={styles.content}>
        <motion.section 
          style={styles.section}
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            style={styles.sectionTitle}
            {...fadeInUp}
          >
            Key Metrics
          </motion.h2>
          <motion.div 
            style={styles.grid}
            variants={staggerChildren}
          >
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                style={styles.card}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
                  border: '1px solid rgba(252, 255, 244, 0.2)',
                }}
              >
                <h3 style={styles.cardTitle}>{metric.label}</h3>
                <p style={styles.infoValue}>
                  {metric.value}
                  <span style={{ fontSize: '1rem', marginLeft: '0.5rem', color: '#93b3d8' }}>{metric.suffix}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          style={styles.section}
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            style={styles.sectionTitle}
            {...fadeInUp}
          >
            Token Features
          </motion.h2>
          <motion.div 
            style={styles.featuresGrid}
            variants={staggerChildren}
          >
            {tokenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                style={styles.feature}
                variants={fadeInUp}
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
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={{ color: '#93b3d8' }}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          style={styles.section}
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            style={styles.sectionTitle}
            {...fadeInUp}
          >
            Token Distribution
          </motion.h2>
          <motion.div 
            style={styles.card}
            variants={fadeInUp}
            whileHover={{ 
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
              border: '1px solid rgba(252, 255, 244, 0.2)',
            }}
          >
            <div style={styles.distributionContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <RechartsRotation>
                  <Pie
                    data={distributionData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    outerRadius={chartSize.outerRadius}
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    layout={chartSize.isMobile ? "horizontal" : "vertical"}
                    align={chartSize.isMobile ? "center" : "right"}
                    verticalAlign={chartSize.isMobile ? "bottom" : "middle"}
                    wrapperStyle={chartSize.isMobile ? { paddingTop: '2rem' } : {}}
                  />
                </RechartsRotation>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          style={styles.section}
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            style={styles.sectionTitle}
            {...fadeInUp}
          >
            Vesting Schedule
          </motion.h2>
          <motion.div 
            style={styles.card}
            variants={fadeInUp}
            whileHover={{ 
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
              border: '1px solid rgba(252, 255, 244, 0.2)',
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Allocation</th>
                    <th style={styles.tableHeader}>Amount</th>
                    <th style={styles.tableHeader}>Vesting Terms</th>
                  </tr>
                </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <tr key={num}>
                        <td style={styles.tableCell}>Founder {num}</td>
                        <td style={styles.tableCell}>10 Billion CWB</td>
                        <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    );
}

export default Tokenomics;