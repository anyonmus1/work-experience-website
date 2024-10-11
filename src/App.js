import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Characters from './pages/Characters/Characters';
import Roadmap from './pages/Roadmap/Roadmap';
import Tokenomics from './pages/Tokenomics/Tokenomics';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import DarkModeToggle from './components/DarkModeToggle';
import './global.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={< About />} />
            <Route path="/characters" element={< Characters />} />
            <Route path="/roadmap" element={< Roadmap />} />
            <Route path="/tokenomics" element={< Tokenomics />} />
            <Route path="/darkmodetoggle" element={< DarkModeToggle />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;