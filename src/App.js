import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Characters from './pages/Characters/Characters';
import Roadmap from './pages/Roadmap/Roadmap';
import Tokenomics from './pages/Tokenomics/Tokenomics';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './global.css';
import ConnectPage from './pages/ConnectPage/ConnectPage';


function App() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/militia" element={<Characters />} /> {/* Changed from "/The Militia" */}
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/connect" element={<ConnectPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;