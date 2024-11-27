import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Users, Target, Rocket, Bell, Heart, Code, Leaf, Star } from 'lucide-react';

function About() {
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    about: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8',
      color: '#ffffff',
      overflowX: 'hidden',
    },
    hero: {
      textAlign: 'center',
      padding: '3rem 1rem',
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
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      color: '#a7af75',
      marginBottom: '2rem',
      textAlign: 'center',
      wordBreak: 'break-word',
    },
    sectionContent: {
      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
      lineHeight: '1.8',
      marginBottom: '2rem',
      color: '#93b3d8',
    },
    quote: {
      fontStyle: 'italic',
      color: '#efcea1',
      fontSize: 'clamp(1.1rem, 2vw, 1.2rem)',
      textAlign: 'center',
      margin: '2rem 0',
      padding: '1.5rem',
      borderLeft: '4px solid #713c4e',
      backgroundColor: 'rgba(252, 255, 244, 0.05)',
      '@media (min-width: 768px)': {
        padding: '2rem',
      },
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      margin: '2rem 0',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        margin: '3rem 0',
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
      color: '#713c4e',
      transition: 'color 0.3s ease',
    },
    cardTitle: {
      color: '#efcea1',
      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
      marginBottom: '1rem',
      wordBreak: 'break-word',
    },
    teamSection: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    valueProps: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      margin: '2rem 0',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        margin: '3rem 0',
      },
    },
    footer: {
      textAlign: 'center',
      padding: '2rem 1rem',
      backgroundColor: 'rgba(40, 38, 90, 0.2)',
      '@media (min-width: 768px)': {
        padding: '4rem 2rem',
      },
    },
    roleText: {
      color: '#713c4e',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    },
    experienceText: {
      color: '#93b3d8',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
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

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.4 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.4 }
    }
  };

  return (
    <div style={styles.about}>
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
          About CowWifBell
        </motion.h1>
        <motion.p 
          style={styles.heroText}
          {...fadeInUp}
        >
          Welcome to the May-Bellets Militia, where we're revolutionizing the meme coin landscape 
          through community, security, and sustainable innovation.
        </motion.p>
      </motion.div>

      <div style={styles.content}>
        <section style={styles.section}>
          <motion.h2 
            style={styles.sectionTitle}
            {...fadeInUp}
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
            viewport={{ once: true, margin: "-50px" }}
          >
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                style={styles.card}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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
            {...fadeInUp}
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
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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