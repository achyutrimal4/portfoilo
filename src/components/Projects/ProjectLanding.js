import React from "react";
import "./ProjectLanding.css";
import { Link } from "react-router-dom";
import image from "../../images/about-1.jpg";
import * as faIcons from "react-icons/fa6";

function ProjectLanding() {
  return (
    <section className="projectlanding-section">
      <div className="title">
        <p>[ work ]</p>
      </div>
      <div className="projectlanding-container">
        <div className="analysis-projects">
          <div className="analysis-projects--grid">
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="an-project-card">
              <p id="an-project-tag">Data Analysis</p>
              <img src={image} alt="" />
              <div className="an-project-description">
                <div className="an-project-title">
                  <a href="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ipsa!
                </p>
                <div className="an-card-bottom">
                  <div className="project-date">
                    <p>
                      <faIcons.FaCalendar />
                    </p>
                    <p>Jan 2024</p>
                    <p>|</p>
                    <p>
                      <faIcons.FaPython />
                    </p>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all">
        <h1>
          <Link to="/projects"> view all</Link>
        </h1>
      </div>
    </section>
  );
}

export default ProjectLanding;
