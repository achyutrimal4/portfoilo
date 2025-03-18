import React from "react";
import "./about.css";
import photo from "../../images/me.png";
import Marquee from "react-fast-marquee";
import SkillsMarquee from "../Marquee/Marquee";
function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <p className="title">[about me]</p>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            enim, officia eum hic facilis nihil. Sapiente, tenetur dignissimos!
            Hic, quidem ut atque quibusdam facilis error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            non eligendi odio officiis aut, ipsam reiciendis similique dolorem
            ratione, ut rem dolore? Deserunt, nulla laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            non eligendi odio officiis aut, ipsam reiciendis similique dolorem
            ratione, ut rem dolore? Deserunt, nulla laudantium.
          </p>

          <div className="education-section">
            <h1>Education</h1>
            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>MSc. IT, Data Analytics</h1>
                  <p>2024-2025</p>
                </span>
                <p>University of the West of Scotland</p>
                <p>London, UK</p>
              </div>
            </div>

            <div className="edu-history">
              <div className="course">
                <span>
                  <h1>BSc. IT, Computer Systems Engineering</h1>
                  <p>2018-2022</p>
                </span>

                <p>International School of Management and Technology</p>
                <p>aff. University of Sunderland</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div className="primary-btn">
            <a href="#!">download cv</a>
          </div>
        </div>
      </div>
      <div className="about-container__second">
        <SkillsMarquee />
        <div className="skills-container">
          <div className="skills-container--inner">
            <h1>Skills</h1>
            <div className="skills-tags">
              <p>Data Analytics</p>
              <p>Machine Learning</p>
              <p>Statistical Analysis</p>
              <p>UI/UX Design</p>
              <p>Web Development</p>
            </div>
          </div>
          <div className="skills-container--inner">
            <h1>Technical Skills</h1>
            <div className="skills-tags">
              <p>Python</p>
              <p>SQL</p>
              <p>Tableau</p>
              <p>Orange</p>
              <p>Excel</p>
              <p>Git & Github</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
