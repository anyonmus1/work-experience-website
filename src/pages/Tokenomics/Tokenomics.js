import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, LineChart, BarChart, Shield } from 'lucide-react';
import { PieChart as RechartsRotation, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

function Tokenomics() {
  const styles = {
    tokenomics: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8', // Light blue
      color: '#ffffff',
      minHeight: '100vh',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(11, 23, 27, 0.8), rgba(40, 38, 90, 0.8))', // Dark blue to deep purple
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#efcea1', // Warm beige
    },
    heroText: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#ffffff',
    },
    content: {
      padding: '4rem 2rem',
      backgroundColor: '#0b171b', // Dark blue-black
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto 6rem',
    },
    sectionTitle: {
      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
      color: '#a7af75', // Sage green
      marginBottom: '2rem',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },
    card: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)', // Light blue with opacity
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      color: '#efcea1', // Warm beige
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    infoValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#713c4e', // Red for emphasis
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    distributionContainer: {
      height: 'clamp(400px, 70vh, 600px)',
      marginTop: '2rem',
      width: '100%',
      padding: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '2rem',
    },
    tableHeader: {
      backgroundColor: 'rgba(40, 38, 90, 0.3)', // Deep purple with opacity
      padding: '1rem',
      textAlign: 'left',
      color: '#efcea1', // Warm beige
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid rgba(147, 179, 216, 0.1)', // Light blue border
      color: '#93b3d8', // Light blue
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },
    feature: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)', // Light blue with opacity
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
    },
    featureIcon: {
      backgroundColor: '#28265a',
      padding: '1rem',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    icon: {
      color: '#713c4e', // Start with red color
      transition: 'color 0.3s ease',
    },
  };

  // Updated distribution data colors to match our palette
  const distributionData = [
    { name: 'Community Rewards & Ecosystem', value: 50, color: '#713c4e' }, // Red
    { name: 'Liquidity Provision', value: 30, color: '#efcea1' }, // Warm beige
    { name: 'Development & Marketing', value: 15, color: '#28265a' }, // Deep purple
    { name: 'Founders', value: 5, color: '#a7af75' }, // Sage green
  ];

  const tokenFeatures = [
    {
      title: "Anti-Whale Mechanisms",
      description: "Transaction limits and strategic measures to prevent market manipulation by large holders",
      icon: <Shield size={24} color="#28265a" />
    },
    {
      title: "Vesting Schedule",
      description: "12-month cliff followed by 36-month linear vesting for founder allocations",
      icon: <LineChart size={24} color="#713c4e" /> // Red
    },
    {
      title: "Liquidity Locks",
      description: "Initial liquidity locked for 12 months to ensure stability",
      icon: <BarChart size={24} color="#713c4e" /> // Red
    }
  ];

  const keyMetrics = [
    { label: "Total Supply", value: "10,000,000,000", suffix: "CWB" },
    { label: "Initial Market Cap", value: "TBA", suffix: "" },
    { label: "Launch Price", value: "TBA", suffix: "" },
    { label: "Vesting Period", value: "48", suffix: "Months" }
  ];

  const [chartSize, setChartSize] = useState({
    outerRadius: window.innerWidth < 480 ? 70 : 120,
    isMobile: window.innerWidth < 480
  });

  useEffect(() => {
    const handleResize = () => {
      setChartSize({
        outerRadius: window.innerWidth < 480 ? 70 : 120,
        isMobile: window.innerWidth < 480
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.tokenomics}>
      {/* Hero Section */}
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
          CowWifBell Tokenomics
        </motion.h1>
        <motion.p 
          style={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our tokenomics model is designed for sustainable growth and community rewards. 
          Every transaction strengthens our ecosystem through the innovative Grazing Tax system.
        </motion.p>
      </motion.div>

      <div style={styles.content}>
        {/* Key Metrics Section */}
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Metrics
          </motion.h2>
          <motion.div 
            style={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                style={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)', // Red glow
                  border: '1px solid rgba(252, 255, 244, 0.2)', // Red border
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
        </section>

        {/* Token Features Section */}
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Token Features
          </motion.h2>
          <motion.div 
            style={styles.featuresGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {tokenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                style={styles.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)', // Red glow
                  border: '1px solid rgba(252, 255, 244, 0.2)', // Red border
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
                    color: '#28265a', // Switch to deep purple on hover
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
        </section>

        {/* Distribution Chart Section */}
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Token Distribution
          </motion.h2>
          <motion.div 
            style={styles.card}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)', // Red glow
              border: '1px solid rgba(252, 255, 244, 0.2)', // Red border
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
                    align="center"
                    verticalAlign="bottom"
                  />
                </RechartsRotation>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </section>

        {/* Vesting Schedule Section */}
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vesting Schedule
          </motion.h2>
          <motion.div 
            style={styles.card}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)', // Red glow
              border: '1px solid rgba(252, 255, 244, 0.2)', // Red border
            }}
          >
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Allocation</th>
                  <th style={styles.tableHeader}>Amount</th>
                  <th style={styles.tableHeader}>Vesting Terms</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td style={styles.tableCell}>Founder 1</td>
                  <td style={styles.tableCell}>100,000,000 CWB</td>
                  <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Founder 2</td>
                  <td style={styles.tableCell}>100,000,000 CWB</td>
                  <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Founder 3</td>
                  <td style={styles.tableCell}>100,000,000 CWB</td>
                  <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Founder 4</td>
                  <td style={styles.tableCell}>100,000,000 CWB</td>
                  <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                </tr>
                <tr>
                  <td style={styles.tableCell}>Founder 5</td>
                  <td style={styles.tableCell}>100,000,000 CWB</td>
                  <td style={styles.tableCell}>12-month cliff, 36-month linear vesting</td>
                </tr>
                </tbody>
            </table>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Tokenomics;