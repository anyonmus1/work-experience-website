import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 20) {
        setIsVisible(true);
        setScrolled(false);
        return;
      }

      setScrolled(true);
      
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const touchDiff = touchY - touchStartY.current;

      if (touchDiff > 50) {
        setIsVisible(true);
      } else if (touchDiff < -50) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const styles = {
    header: {
      backgroundColor: scrolled ? '#0b171b' : 'rgba(11, 23, 27, 0.95)',
      padding: '1rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: scrolled ? '0 2px 10px rgba(40, 38, 90, 0.2)' : 'none',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(147, 179, 216, 0.1)',
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    logo: {
      height: '60px',
      width: 'auto',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    nav: {
      display: isMobile && !isMenuOpen ? 'none' : 'block',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '100%' : 'auto',
      left: isMobile ? 0 : 'auto',
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? '#0b171b' : 'transparent',
      padding: isMobile ? '1rem' : 0,
      boxShadow: isMobile ? '0 4px 6px rgba(40, 38, 90, 0.2)' : 'none',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
    },
    navItem: {
      margin: isMobile ? '0.5rem 0' : '0 1rem',
    },
    menuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: '#93b3d8',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      zIndex: 1001,
    },
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'The Militia', path: '/militia' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Tokenomics', path: '/tokenomics' }
  ];

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          style={styles.header}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headerVariants}
        >
          <div style={styles.headerContent}>
            <Link to="/">
              <motion.img
                src="/images/cowwifbellogo.png"
                alt="CowWifBell Logo"
                style={styles.logo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            <motion.button
              style={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ color: '#efcea1' }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </motion.button>

            <motion.nav
              style={styles.nav}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={isMobile ? mobileMenuVariants : {}}
            >
              <ul style={styles.navList}>
                {navItems.map((item) => (
                  <motion.li key={item.label} style={styles.navItem}>
                    <motion.div
                      style={{ display: 'inline-block' }}
                      whileHover={{
                        scale: isMobile ? 1 : 1.3,
                        rotate: isMobile ? 0 : [0, -2, 2, -2, 2, 0],
                        x: isMobile ? 10 : 0,
                      }}
                      transition={{
                        scale: { duration: 0.2 },
                        rotate: {
                          repeat: Infinity,
                          duration: 0.5,
                          repeatType: "loop"
                        }
                      }}
                    >
                      <motion.span
                        style={{
                          color: '#93b3d8',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          padding: '0.5rem',
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer'
                        }}
                        whileHover={{ color: '#efcea1' }}
                      >
                        <Link
                          to={item.path}
                          style={{
                            color: 'inherit',
                            textDecoration: 'none'
                          }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.span>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Header;