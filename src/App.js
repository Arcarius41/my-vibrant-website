// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar.js';
import HeroSection from './HeroSection.js';
import ContentSection from './ContentSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container my-5">
        <ContentSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
