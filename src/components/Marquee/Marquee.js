import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";
import python from "../../images/python(1).png";
import sql from "../../images/sql(2).png";
import orange from "../../images/orange(1).png";
import tableau from "../../images/tableau.png";
import excel from "../../images/excel.png";

function SkillsMarquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-section__inner">
        <h1 className="title" style={{ margin: "0 0 1em 1em" }}>
          what i use for projects
        </h1>
        <Marquee direction="left">
          <div className="marquee-container">
            <div className="marquee">
              <div
                className="skill-wrapper"
                style={{ backgroundColor: "#000000" }}
              >
                <Marquee
                  direction="right"
                  className="marquee-custom"
                  style={{ marginLeft: "2em" }}
                >
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="marquee-fragment">
                      <h1 className="title">SQL</h1>
                      <img src={sql} alt="SQL Logo" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="marquee">
              <div
                className="skill-wrapper"
                style={{ backgroundColor: "#1E4361" }}
              >
                <Marquee direction="right" className="marquee-custom">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="marquee-fragment">
                      <h1 className="title">python</h1>
                      <img src={python} alt="python" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="marquee">
              <div
                className="skill-wrapper"
                style={{ backgroundColor: "#0F6F3B" }}
              >
                <Marquee direction="right" className="marquee-custom">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="marquee-fragment">
                      <h1 className="title">EXCEL</h1>
                      <img src={excel} alt="SQL Logo" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="marquee">
              <div
                className="skill-wrapper"
                style={{ backgroundColor: "#1AB9FF" }}
              >
                <Marquee direction="right" className="marquee-custom">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="marquee-fragment">
                      <h1 className="title">tableau</h1>
                      <img src={tableau} alt="SQL Logo" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            <div className="marquee">
              <div
                className="skill-wrapper"
                style={{ backgroundColor: "orangered" }}
              >
                <Marquee direction="right" className="marquee-custom">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="marquee-fragment">
                      <h1 className="title">Orange</h1>
                      <img src={orange} alt="orange" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default SkillsMarquee;
