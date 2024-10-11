import { useState, useEffect } from 'react';

function useResponsiveStyles() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    pageContainer: {
      paddingTop: isMobile ? '60px' : '80px',
      minHeight: '100vh',
    },
    section: {
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '3rem',
    },
    heroText: {
      fontSize: isMobile ? '1rem' : '1.2rem',
    },
    flexContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    flexItem: {
      flexBasis: isMobile ? '100%' : 'calc(33% - 1rem)',
      marginBottom: isMobile ? '1rem' : 0,
    },
  };
}

export default useResponsiveStyles;