// src/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Scott B Bowman</h2>
          <p>
            Hello! I'm a passionate web developer with a strong
            background in front-end and back-end technologies. My journey into
            full-stack development started when I was introduced to HTML and,
            and I've been hooked ever since.
          </p>
          <p>
            Over the years, I've honed my skills in various technologies,
            including React, Node.js, Flask, and PostgreSQL. I enjoy creating
            dynamic, responsive web applications that provide a seamless user
            experience.
          </p>
          <p>
            When I'm not coding, you can find me playing hide-n-seek with my 5 year old daughter, building pc's, playing fantasy crpg's on my computer, serving at my church, hiking or working out . I believe in continuous learning and always strive to
            stay updated with the latest industry trends.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://i.ibb.co/cb3cQ64/B-WPortrait.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle mb-4"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">My Skills</h3>
          <div className="d-flex justify-content-center flex-wrap">
            <span className="badge bg-primary m-2">HTML</span>
            <span className="badge bg-primary m-2">CSS</span>
            <span className="badge bg-primary m-2">JavaScript</span>
            <span className="badge bg-primary m-2">Bootstrap</span>
            <span className="badge bg-primary m-2">React</span>
            <span className="badge bg-primary m-2">Node.js</span>
            <span className="badge bg-primary m-2">Flask</span>
            <span className="badge bg-primary m-2">SQLAlchemy</span>
            <span className="badge bg-primary m-2">PostgreSQL</span>
            <span className="badge bg-primary m-2">Git</span>
            <span className="badge bg-primary m-2">REST APIs</span>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">Need a Day to Shake the Rust Off</h3>
          <div className="d-flex justify-content-center flex-wrap">
          <span className="badge bg-primary m-2">Java</span>
          <span className="badge bg-primary m-2">C++</span>
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Gallery 1"
              className="img-thumbnail m-2"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery 2"
              className="img-thumbnail m-2"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery 3"
              className="img-thumbnail m-2"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery 4"
              className="img-thumbnail m-2"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery 5"
              className="img-thumbnail m-2"
            /> */}
          </div>
          <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">Learning</h3>
          <div className="d-flex justify-content-center flex-wrap">
            <span className="badge bg-primary m-2">Azure</span>
            {/* <span className="badge bg-primary m-2">CSS</span> */}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default About;
