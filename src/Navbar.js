// src/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme === 'light' ? 'light' : 'dark'} bg-${theme} shadow-sm`}>
      <div className="container">
        <a className="navbar-brand" href="#">My Vibrant Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button className="btn btn-outline-primary ml-80%" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
