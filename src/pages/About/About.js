import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Rocket, Bell, Heart, Code, Leaf, Star } from 'lucide-react';

function About() {
  const styles = {
    about: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8', // Light blue base
      color: '#ffffff',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(11, 23, 27, 0.8), rgba(40, 38, 90, 0.8))', // Dark blue to deep purple gradient
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
    sectionContent: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      marginBottom: '2rem',
      color: '#93b3d8', // Light blue
    },
    quote: {
      fontStyle: 'italic',
      color: '#efcea1', // Warm beige
      fontSize: '1.2rem',
      textAlign: 'center',
      margin: '2rem 0',
      padding: '2rem',
      borderLeft: '4px solid #713c4e', // Red accent
      backgroundColor: 'rgba(252, 255, 244, 0.05)', // Subtle red background
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    cardIcon: {
      backgroundColor: '#28265a', // Deep purple
      padding: '1rem',
      borderRadius: '50%',
      display: 'inline-block',
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      color: '#efcea1', // Warm beige
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    teamSection: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    valueProps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      margin: '3rem 0',
    },
    footer: {
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: 'rgba(40, 38, 90, 0.2)', // Deep purple with opacity
    },
    roleText: {
      color: '#713c4e', // Red accent for emphasis
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    experienceText: {
      color: '#93b3d8', // Light blue
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
  

  const corePillars = [
    {
      icon: <Shield size={32} />,
      title: "Security First",
      description: "State-of-the-art security measures including smart contract audits, continuous monitoring, and anti-pump-and-dump mechanisms protect our community."
    },
    {
      icon: <Users size={32} />,
      title: "Community Driven",
      description: "Through our innovative governance model, every member has a voice in shaping the future of CowWifBell."
    },
    {
      icon: <Target size={32} />,
      title: "Clear Vision",
      description: "Our detailed roadmap and strategic planning ensure sustainable growth and continued innovation."
    }
  ];

  const teamMembers = [
    {
      role: "Project Lead",
      title: "The Head Farmer",
      experience: "4 years crypto experience, 30 years IT background",
      icon: <Star size={32} />
    },
    {
      role: "Lead Developer",
      title: "The Master Plower",
      experience: "5 years blockchain development",
      icon: <Code size={32} />
    },
    {
      role: "Community Manager",
      title: "The Herd Whisperer",
      experience: "Expert in community engagement",
      icon: <Heart size={32} />
    }
  ];

  return (
    <div style={styles.about}>
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
          About CowWifBell
        </motion.h1>
        <motion.p 
          style={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to the May-Bellets Militia, where we're revolutionizing the meme coin landscape 
          through community, security, and sustainable innovation.
        </motion.p>
      </motion.div>

      <div style={styles.content}>
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.div 
            style={styles.sectionContent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>The once-fertile fields of meme coins have been ravaged by pump-and-dump mercenaries 
            and quick-profit poachers. Trust has been eroded, communities scattered, and the joy 
            of meme culture diluted. The May-Bellets Militia stands ready to change the game.</p>
            
            <div style={styles.quote}>
              "In pastures of pixels and fields of finance, we stand united. Our strength is our 
              community, our shield is our security, and our spirit is the joy we bring to the 
              world of cryptocurrency."
            </div>
          </motion.div>

          <motion.div 
            style={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                style={styles.card}
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
                    {pillar.icon}
                  </motion.div>
                </motion.div>
                <h3 style={styles.cardTitle}>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section style={styles.teamSection}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Team Behind the Moo-vement
          </motion.h2>
          <motion.div 
            style={styles.grid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                style={styles.card}
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
                    {member.icon}
                  </motion.div>
                </motion.div>
                <h3 style={styles.cardTitle}>{member.title}</h3>
                <p style={styles.roleText}>{member.role}</p>
                <p style={styles.experienceText}>{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section style={styles.footer}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.sectionTitle}>Join the Revolution</h2>
            <p style={styles.sectionContent}>
              The May-Bellets Militia is more than a project—it's a movement. Together, we're 
              creating a new paradigm in the meme coin space, where creativity flourishes, 
              trust is paramount, and every member has a stake in our shared success.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default About;