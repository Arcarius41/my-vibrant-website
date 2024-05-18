// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container my-5">
      <header className="text-center mb-4">
        <h1 className="display-4">My Vibrant Website</h1>
        <p className="lead">A simple, vibrant, and clean website layout.</p>
      </header>
      <main>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Sample" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          {/* Repeat card components as needed */}
        </div>
      </main>
    </div>
  );
}

export default App;
