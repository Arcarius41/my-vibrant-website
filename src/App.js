import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import SerenityScribe from "./SerenityScribe";
import UsKidsProjectImage from "./assets/images/UsKidsProject.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
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
                  <img
                    src={process.env.PUBLIC_URL + "/images/hero.png"}
                    alt="Hero Section"
                    className="hero-image"
                  />
                </div>

                <div className="container py-5">
                  <h2 className="text-center project-heading">
                    Some of My Projects
                  </h2>
                  <div className="row project-row">
                    <div className="col-lg-3 col-md-6">
                      <div className="card">
                        <img
                          src={UsKidsProjectImage}
                          className="card-img-top"
                          alt="Project 1"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Rockumentary</h5>
                          <h6 className="card-title">React+Shopify Embed</h6>
                          <p className="card-text">
                            Dive into the story behind the music with this interactive work in progress. Featuring exclusive content,
                             an embedded merchandise store, YouTube integration, Instagram embeds, links to social media channels,
                              and a sleek, responsive design powered by React and Shopify.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="https://rockumentary-vite.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                            >
                              Sneak Peek
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/ws9dY0B/Screenshot-2024-06-15-serinityscribe-home-page.png"
                          className="card-img-top"
                          alt="Project 2"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Serenity Scribe</h5>
                          <h6 className="card-title">A Full-Stack Journaling App</h6>
                          <p className="card-text">
                            Platform that allows users to record their daily
                            moods and journal entries. It aims to help users
                            track their emotional well-being over time, offering
                            insights and affirmations to encourage positive
                            mental health practices.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="/serenity-scribe"
                              className="btn btn-primary"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/GvVmbb9/Here-Is-Looking-At-U.jpg"
                          className="card-img-top"
                          alt="Project 3"
                        />
                        <div className="card-body">
                          <h5 className="card-title">My Vibrant Website</h5>
                          <p className="card-text">
                            You are test driving it right now. A personal
                            website showcasing my web development skills and
                            projects. Built with React for a dynamic UI,
                            Bootstrap for modern styling, and React Router for
                            seamless navigation. It features light and dark
                            modes with persistent state and accessibility
                            enhancements.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="https://github.com/Arcarius41/my-vibrant-website"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                            >
                              See the ReadMe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="card">
                        <img
                          src="https://i.ibb.co/DWCKcs5/Screenshot-2024-05-17-205930.png"
                          className="card-img-top"
                          alt="Project 4"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Java Application</h5>
                          <p className="card-text">
                            The School Management System is a Java application
                            for managing classrooms, teachers, and students. It
                            features user input handling, object-oriented
                            design, and report generation, demonstrating
                            fundamental programming skills ideal for a junior
                            developer.
                          </p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="https://github.com/Arcarius41/Scotts-Java-School-Management-System"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
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
          <Route path="/about" element={<About />} />
          <Route path="/serenity-scribe" element={<SerenityScribe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
