// src/HeroSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <div className="hero-section text-center d-flex align-items-center">
      <div className="container">
        <h1 className="display-3 text-white">Welcome to My Vibrant Website</h1>
        <p className="lead text-white">Creating visually stunning and vibrant web experiences.</p>
        <a href="#" className="btn btn-primary btn-lg">Learn More</a>
      </div>
    </div>
  );
}

export default HeroSection;
