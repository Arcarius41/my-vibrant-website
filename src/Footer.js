import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">My Vibrant Website</h5>
            <p>Creating visually stunning and vibrant web experiences.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">Home</a>
              </li>
              <li>
                <a href="#" className="text-dark">About</a>
              </li>
              <li>
                <a href="#" className="text-dark">Services</a>
              </li>
              <li>
                <a href="#" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2023 My Vibrant Website
      </div>
    </footer>
  );
}

export default Footer;
