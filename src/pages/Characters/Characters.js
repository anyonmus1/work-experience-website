import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Badge, Shield, Code, Heart, Users } from 'lucide-react';

const characters = [
  {
    name: "Field General May Bell",
    image: "/images/Cow2.png",
    role: "Project Lead",
    description: "Our fearless leader, guiding the May-Bellets Militia through the wild frontiers of the meme coin landscape with wisdom, strategy, and an unwavering commitment to our mission.",
    icon: <Badge size={24} />,
    quote: "In pastures of pixels and fields of finance, we stand united!"
  },
  {
    name: "Lieutenant Daisy Hoofstrong",
    image: "/images/Daisy.png",
    role: "Security Chief",
    description: "Our security expert, implementing rigorous defense protocols and ensuring the safety of our pastures with cutting-edge smart contract audits and anti-pump-and-dump mechanisms.",
    icon: <Shield size={24} />,
    quote: "Trust is earned in drops and lost in buckets."
  },
  {
    name: "Bessie the Strategist",
    image: "/images/Bessie.png",
    role: "Financial Advisor",
    description: "The wisdom behind our tokenomics, always ready with a bullseye insight and ensuring our economic model remains sustainable and community-focused.",
    icon: <Users size={24} />,
    quote: "When the pumps run dry and the dumps pile high, it's time for the herd to find greener pastures!"
  },
  {
    name: "Angus the Innovator",
    image: "/images/Angus.png",
    role: "Lead Developer",
    description: "Our technical mastermind, pioneering new solutions in the crypto pastures and ensuring our infrastructure remains cutting-edge and secure.",
    icon: <Code size={24} />,
    quote: "Innovation is the key to unlocking new pastures."
  },
  {
    name: "Clover the Community Champion",
    image: "/images/Clover.png",
    role: "Community Manager",
    description: "The heart of our militia, fostering engagement and spreading joy throughout our community while ensuring every voice is heard.",
    icon: <Heart size={24} />,
    quote: "Together we graze, together we grow!"
  }
];

function Characters() {
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    characters: {
      paddingTop: '80px',
      backgroundColor: '#100c1c',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
    },
    hero: {
      textAlign: 'center',
      padding: '3rem 1rem',
      background: 'linear-gradient(rgba(16, 12, 28, 0.8), rgba(113, 60, 78, 0.8))', // Restored gradient
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    heroDesktop: {
      padding: '6rem 2rem',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      marginBottom: '1.5rem',
      color: '#ffe3b3', // Updated text color
      wordBreak: 'break-word',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
      color: '#c79884', // Updated text color
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    content: {
      padding: '2rem 1rem',
      backgroundColor: 'rgba(113, 60, 78, 0.8)', // Restored red background
      flex: 1,
    },
    contentDesktop: {
      padding: '4rem 2rem',
    },
    charactersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    charactersGridTablet: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    charactersGridDesktop: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '3rem',
    },
    characterCard: {
      backgroundColor: 'rgba(16, 12, 28, 0.5)', // Kept original dark overlay
      borderRadius: '20px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    characterCardDesktop: {
      padding: '2rem',
    },
    characterImageContainer: {
      position: 'relative',
      marginBottom: '1.5rem',
      width: '640px',
      height: '640px',
    },
    characterImageContainerDesktop: {
      width: '360px',
      height: '360px',
    },
    characterImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #713c4e', // Updated from rgba
      backgroundColor: '#713c4e', // Updated from rgba
      transition: 'all 0.3s ease',
      imageRendering: 'auto',
      WebkitBackfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
    },
    iconBadge: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: '#28265a',
      padding: '0.5rem',
      borderRadius: '50%',
      border: '2px solid #713c4e', // Updated from rgba
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 1,
    },
    icon: {
      color: '#713c4e', // Updated from rgba
      transition: 'color 0.3s ease',
    },
    icon: {
      color: 'rgba(113, 60, 78, 0.8)',
      transition: 'color 0.3s ease',
    },
    characterName: {
      fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
      color: '#ffe3b3', // Updated text color
      marginBottom: '0.5rem',
      wordBreak: 'break-word',
    },
    characterRole: {
      fontSize: 'clamp(1.8rem, 2vw, 1.1rem)',
      color: '#c79884', // Updated text color
      marginBottom: '1.5rem',
      fontStyle: 'italic',
    },
    characterDescription: {
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      color: '#93b3d8', // Updated text color
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    quoteContainer: {
      marginTop: 'auto',
      padding: '1rem',
      backgroundColor: 'rgba(147, 179, 216, 0.1)', // Updated to match other cards
      borderRadius: '10px',
      position: 'relative',
      transition: 'all 0.3s ease',
    },
    quote: {
      fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
      fontStyle: 'italic',
      color: '#c79884', // Updated text color
      lineHeight: '1.4',
    },
    quoteMark: {
      position: 'absolute',
      fontSize: '2rem',
      opacity: 0.2,
      color: '#713c4e', // Updated from rgba(113, 60, 78, 0.8)
    },
    quoteMarkDesktop: {
      fontSize: '3rem',
    },
    quoteMarkLeft: {
      top: '-10px',
      left: '10px',
    },
    quoteMarkRight: {
      bottom: '-10px',
      right: '10px',
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.4 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.4 }
    }
  };

  // Use window.matchMedia to handle responsive styles
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const isTablet = window.matchMedia('(min-width: 640px)').matches;

  return (
    <div style={styles.characters}>
      <motion.div 
        style={{
          ...styles.hero,
          ...(isDesktop && styles.heroDesktop),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <motion.h1 
          style={styles.heroTitle}
          {...fadeInUp}
        >
          Meet the Militia
        </motion.h1>
        <motion.p 
          style={styles.heroSubtitle}
          {...fadeInUp}
        >
          Get to know the elite team leading the charge in our mission to revolutionize 
          the meme coin landscape and restore trust to the crypto pastures!
        </motion.p>
      </motion.div>
      
      <div style={{
        ...styles.content,
        ...(isDesktop && styles.contentDesktop),
      }}>
        <motion.div 
          style={{
            ...styles.charactersGrid,
            ...(isTablet && styles.charactersGridTablet),
            ...(isDesktop && styles.charactersGridDesktop),
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.15
              }
            }
          }}
        >
          {characters.map((character, index) => (
            <motion.div
              key={index}
              style={{
                ...styles.characterCard,
                ...(isDesktop && styles.characterCardDesktop),
              }}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { 
                y: -10,
                boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
                border: '1px solid rgba(252, 255, 244, 0.2)',
              }}
            >
              <div style={{
                ...styles.characterImageContainer,
                ...(isDesktop && styles.characterImageContainerDesktop),
              }}>
                <motion.img 
                  src={character.image} 
                  alt={character.name} 
                  style={styles.characterImage}
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.05,
                    borderColor: 'rgba(113, 60, 78, 0.8)',
                    boxShadow: '0 0 20px rgba(252, 255, 244, 0.3)',
                  }}
                  loading="lazy"
                />
                <motion.div 
                  style={styles.iconBadge}
                  whileHover={prefersReducedMotion ? {} : {
                    backgroundColor: 'rgba(113, 60, 78, 0.8)',
                  }}
                >
                  <motion.div
                    style={styles.icon}
                    whileHover={prefersReducedMotion ? {} : {
                      color: '#28265a',
                    }}
                  >
                    {character.icon}
                  </motion.div>
                </motion.div>
              </div>
              
              <h3 style={styles.characterName}>{character.name}</h3>
              <p style={styles.characterRole}>{character.role}</p>
              <p style={styles.characterDescription}>{character.description}</p>
              
              <motion.div 
                style={styles.quoteContainer}
                whileHover={prefersReducedMotion ? {} : {
                  backgroundColor: 'rgba(252, 255, 244, 0.05)',
                }}
              >
                <span style={{
                  ...styles.quoteMark,
                  ...styles.quoteMarkLeft,
                  ...(isDesktop && styles.quoteMarkDesktop),
                }}>"</span>
                <p style={styles.quote}>{character.quote}</p>
                <span style={{
                  ...styles.quoteMark,
                  ...styles.quoteMarkRight,
                  ...(isDesktop && styles.quoteMarkDesktop),
                }}>"</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Characters;