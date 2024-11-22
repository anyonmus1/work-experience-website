import React from 'react';
import { motion } from 'framer-motion';
import { Badge, Shield, Code, Heart, Users } from 'lucide-react';

const characters = [
  {
    name: "Field General May Bell",
    image: "/images/Maybell .png",
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
  const styles = {
    characters: {
      paddingTop: '80px',
      backgroundColor: '#93b3d8',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
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
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      color: '#a7af75',
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    content: {
      padding: '4rem 2rem',
      backgroundColor: '#0b171b',
      flex: 1,
    },
    charactersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    characterCard: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    characterImageContainer: {
      position: 'relative',
      marginBottom: '1.5rem',
    },
    characterImage: {
      width: '180px',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #713c4e',
      backgroundColor: '#0b171b',
      transition: 'all 0.3s ease',
    },
    iconBadge: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: '#28265a',
      padding: '0.5rem',
      borderRadius: '50%',
      border: '2px solid #713c4e',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    icon: {
      color: '#713c4e',
      transition: 'color 0.3s ease',
    },
    characterName: {
      fontSize: '1.8rem',
      color: '#efcea1',
      marginBottom: '0.5rem',
    },
    characterRole: {
      fontSize: '1.1rem',
      color: '#713c4e',
      marginBottom: '1.5rem',
      fontStyle: 'italic',
    },
    characterDescription: {
      fontSize: '1rem',
      color: '#93b3d8',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    quoteContainer: {
      marginTop: 'auto',
      padding: '1rem',
      backgroundColor: 'rgba(40, 38, 90, 0.3)',
      borderRadius: '10px',
      position: 'relative',
      transition: 'all 0.3s ease',
    },
    quote: {
      fontSize: '0.95rem',
      fontStyle: 'italic',
      color: '#a7af75',
    },
    quoteMark: {
      position: 'absolute',
      fontSize: '3rem',
      opacity: 0.2,
      color: '#713c4e',
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

  return (
    <div style={styles.characters}>
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
          Meet the Militia
        </motion.h1>
        <motion.p 
          style={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get to know the elite team leading the charge in our mission to revolutionize 
          the meme coin landscape and restore trust to the crypto pastures!
        </motion.p>
      </motion.div>
      
      <div style={styles.content}>
        <motion.div 
          style={styles.charactersGrid}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {characters.map((character, index) => (
            <motion.div
              key={index}
              style={styles.characterCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  delay: index * 0.1 
                }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px rgba(252, 255, 244, 0.1)',
                border: '1px solid rgba(252, 255, 244, 0.2)',
              }}
            >
              <div style={styles.characterImageContainer}>
                <motion.img 
                  src={character.image} 
                  alt={character.name} 
                  style={styles.characterImage}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#713c4e',
                    boxShadow: '0 0 20px rgba(252, 255, 244, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.div 
                  style={styles.iconBadge}
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
                    {character.icon}
                  </motion.div>
                </motion.div>
              </div>
              
              <h3 style={styles.characterName}>{character.name}</h3>
              <p style={styles.characterRole}>{character.role}</p>
              <p style={styles.characterDescription}>{character.description}</p>
              
              <motion.div 
                style={styles.quoteContainer}
                whileHover={{
                  backgroundColor: 'rgba(252, 255, 244, 0.05)',
                }}
              >
                <span style={{...styles.quoteMark, ...styles.quoteMarkLeft}}>"</span>
                <p style={styles.quote}>{character.quote}</p>
                <span style={{...styles.quoteMark, ...styles.quoteMarkRight}}>"</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Characters;