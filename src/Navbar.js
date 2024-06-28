import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Vibrant Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
