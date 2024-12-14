import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
  const prefersReducedMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const touchStartY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < 20) {
          setIsVisible(true);
          setScrolled(false);
        } else {
          setScrolled(true);
          setIsVisible(currentScrollY < lastScrollY.current);
        }

        lastScrollY.current = currentScrollY;
        scrollTimeout.current = null;
      }, 100);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchDiff = e.touches[0].clientY - touchStartY.current;
      if (Math.abs(touchDiff) > 50) {
        setIsVisible(touchDiff > 0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'The Militia', path: '/militia' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Tokenomics', path: '/tokenomics' },
    { label: 'Connect', path: '/connect' }
  ];

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: prefersReducedMotion ? 300 : 200,
        damping: prefersReducedMotion ? 30 : 25
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: prefersReducedMotion ? 300 : 200,
        damping: prefersReducedMotion ? 30 : 25
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const styles = {
    header: {
      backgroundColor: 'rgba(16, 12, 28, 0.95)',
      padding: isMobile ? '0.75rem' : '1rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: scrolled ? '0 2px 10px rgba(40, 38, 90, 0.3)' : 'none',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
      height: isMobile ? '50px' : '60px',
      width: 'auto',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
      mixBlendMode: 'lighten',
    },
    nav: {
      display: isMobile && !isMenuOpen ? 'none' : 'flex',
      position: isMobile ? 'fixed' : 'static',
      top: isMobile ? '73px' : 'auto',
      left: 0,
      right: 0,
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? 'rgba(16, 12, 28, 0.98)' : 'transparent',
      padding: isMobile ? '1rem' : 0,
      boxShadow: isMobile ? '0 4px 6px rgba(0, 0, 0, 0.3)' : 'none',
      maxHeight: isMobile ? 'calc(100vh - 73px)' : 'none',
      overflowY: isMobile ? 'auto' : 'visible',
      justifyContent: 'flex-end',
      backdropFilter: isMobile ? 'blur(8px)' : 'none',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      width: isMobile ? '100%' : 'auto',
      gap: isMobile ? '0.5rem' : '2rem',
    },
    navItem: {
      margin: isMobile ? '0.5rem 1rem' : '0',
      width: isMobile ? '100%' : 'auto',
      textAlign: isMobile ? 'left' : 'center',
    },
    menuButton: {
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      zIndex: 1001,
      width: '44px',
      height: '44px',
      touchAction: 'manipulation',
      filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))',
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      padding: isMobile ? '0.75rem 0' : '0.5rem',
      display: 'block',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textShadow: '0 0 2px rgba(255, 255, 255, 0.2)',
      letterSpacing: '0.5px',
    },
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
            <Link to="/" onClick={handleNavClick}>
              <motion.img
                src="images/CowWifBell_Logo-V2.png"
                alt="CowWifBell Logo"
                style={styles.logo}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.1,
                  filter: 'brightness(1.3) contrast(1.2) saturate(1.2)'
                }}
                whileTap={prefersReducedMotion ? {} : { 
                  scale: 0.95,
                  filter: 'brightness(1.1) contrast(1.05) saturate(1.05)'
                }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            <motion.button
              style={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ 
                color: '#efcea1',
                textShadow: '0 0 4px rgba(239, 206, 161, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
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
                    <Link
                      to={item.path}
                      style={styles.navLink}
                      onClick={handleNavClick}
                    >
                      <motion.div
                        whileHover={!isMobile && !prefersReducedMotion ? {
                          scale: 1.1,
                          color: '#efcea1',
                          textShadow: '0 0 4px rgba(239, 206, 161, 0.5)'
                        } : {
                          color: '#efcea1',
                          textShadow: '0 0 4px rgba(239, 206, 161, 0.5)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
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