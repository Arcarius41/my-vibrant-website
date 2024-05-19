// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import Footer from './Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <div className="container my-5">
        <ContentSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
