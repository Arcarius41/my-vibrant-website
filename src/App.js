import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="hero-section">
        <img src="https://i.ibb.co/Dp9W3WC/Scott-B-Bowman.png" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1 className="display-3">Welcome to My Vibrant Website</h1>
          <p className="lead">Creating clean, bright, and vibrant web experiences.</p>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/xGRjXbF/Screenshot-2024-03-20-175938.png" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Full Stack Journaling App - Serenity Scribe</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/GvVmbb9/Here-Is-Looking-At-U.jpg" className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://i.ibb.co/DWCKcs5/Screenshot-2024-05-17-205930.png" className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
