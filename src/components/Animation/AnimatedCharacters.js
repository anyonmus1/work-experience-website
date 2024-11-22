import { motion } from 'framer-motion';

function Characters() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={styles.characters}>
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero content */}
      </motion.div>
      <div style={styles.content}>
        <motion.div 
          style={styles.charactersGrid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {characters.map((character, index) => (
            <motion.div
              key={index}
              style={styles.characterCard}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              {/* Character card content */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

