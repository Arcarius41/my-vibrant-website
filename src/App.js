import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import SerenityScribe from "./SerenityScribe";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-section">
                  <div className="hero-text">
                    {/* <h1 className="display-3">Welcome to My Vibrant Website</h1> */}
                    {/* <p className="lead">Creating clean, bright, and vibrant web experiences.</p> */}
                  </div>
                </div>
                <div className="container py-5">
                  <h2 className="text-center project-heading">
                    Some of My Projects
                  </h2>{" "}
                  {/* Added class project-heading */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/ws9dY0B/Screenshot-2024-06-15-serinityscribe-home-page.png"
                          className="card-img-top"
                          alt="Service 1"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Journaling App - Serenity Scribe
                          </h5>
                          <h6 className="card-title">Full-Stack</h6>
                          <p className="card-text">
                            Platform that allows users to record their daily
                            moods and journal entries. It aims to help users
                            track their emotional well-being over time, offering
                            insights and affirmations to encourage positive
                            mental health practices.
                          </p>
                          <div className="d-flex justify-content-center">
                            <Link
                              to="/serenity-scribe"
                              className="btn btn-primary"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/GvVmbb9/Here-Is-Looking-At-U.jpg"
                          className="card-img-top"
                          alt="Service 2"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Portfolio Website</h5>
                          <p className="card-text">
                            You are looking at the project in action. Click on
                            the buttons in the navigation bar to scroll to the
                            corresponding project card. This project implements
                            the use of React, Bootstrap, and CSS to create a
                            responsive, single-page portfolio website.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="#"
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/DWCKcs5/Screenshot-2024-05-17-205930.png"
                          className="card-img-top"
                          alt="Service 3"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Java Application</h5>
                          <p className="card-text">
                            The School Management System is a Java application
                            for managing classrooms, teachers, and students. It
                            features user input handling, object-oriented
                            design, and report generation, demonstrating
                            fundamental programming skills ideal for junior
                            developers and recruiter showcases.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="https://github.com/Arcarius41/Scotts-Java-School-Management-System"
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Repo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/serenity-scribe" element={<SerenityScribe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
