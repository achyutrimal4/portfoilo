import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import projects from "../../Projects";
import Accordion from "../Accordion/Accordion";

function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <Accordion />
        <div className="backdrop">
          <h1>Projects</h1>
        </div>
        {/* <div className="projects-grid">
          {projects.map((project) => (
            <Link
              className={`project-row ${project.id % 2 !== 0 ? "start" : ""}`}
              key={project.id}
              to={`/web-project/${project.id}`}
            >
              <div
                className={`project-card ${
                  project.id % 2 !== 0 ? "reverse" : ""
                }`}
              >
                <div className="project-title">
                  <h1>{project.name} </h1>
                  <div className="hidden-links">
                    <a href="#!">Github</a>
                    <Link to={`/web-project/${project.id}`}>Details</Link>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="card-image">
                  <img src={project.image} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
