import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SerenityScribe() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Serenity Scribe Project</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Serenity Scribe</h5>
              <p className="card-text">
                Serenity Scribe is a full-stack journaling application designed to help users track their daily moods and journal entries. This project showcases my skills in various technologies, including:
              </p>
              <ul>
                <li><strong>Front-End:</strong> Built using React and Bootstrap for a responsive and dynamic user interface.</li>
                <li><strong>Back-End API:</strong> Developed with Flask, providing RESTful endpoints for seamless client-server communication.</li>
                <li><strong>Database:</strong> Utilizes PostgreSQL with SQLAlchemy for robust and efficient data management.</li>
                <li><strong>Authentication:</strong> Implements user registration, sign-in, and sign-out functionality to ensure secure access to user data.</li>
              </ul>
              <p className="card-text">
                The application encourages positive mental health practices by offering insights and affirmations based on user entries.
              </p>
              <a href="https://github.com/Arcarius41/Albert_Derek_Scott-Mood-Journal" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerenityScribe;
