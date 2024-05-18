// src/ContentSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContentSection() {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <img src="https://via.placeholder.com/300" className="card-img-top" alt="Sample" />
          <div className="card-body">
            <h5 className="card-title">Service 1</h5>
            <p className="card-text">Description of service 1.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <img src="https://via.placeholder.com/300" className="card-img-top" alt="Sample" />
          <div className="card-body">
            <h5 className="card-title">Service 2</h5>
            <p className="card-text">Description of service 2.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <img src="https://via.placeholder.com/300" className="card-img-top" alt="Sample" />
          <div className="card-body">
            <h5 className="card-title">Service 3</h5>
            <p className="card-text">Description of service 3.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
