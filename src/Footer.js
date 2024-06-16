// src/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start text-dark">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">My Vibrant Website</h5>
            <a
              href="https://www.linkedin.com/in/scott-b-bowman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Arcarius41/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 My Vibrant Website
      </div>
    </footer>
  );
}

export default Footer;
