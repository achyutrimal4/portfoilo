import React from "react";
import "./NewFooter.css";
import * as faIcons from "react-icons/fa6";

function NewFooter() {
  return (
    <>
      <section className="footer-section">
        <div className="footer_container--left">
          <a href="#!" target="_blank">
            <faIcons.FaGithub />
          </a>
          <a href="#!" target="_blank">
            <faIcons.FaLinkedinIn />
          </a>
          <a href="#!">
            <faIcons.FaMedium />
          </a>
        </div>

        <div className="footer_container--right">
          <a href="">back to top</a>
        </div>
      </section>
      <section className="bottom-footer">
        <p>&copy; 2024 achyut rimal</p>
      </section>
    </>
  );
}

export default NewFooter;
