import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiLinkExternal } from "react-icons/bi";

function Header({ scrollToSection }) {
  // sidebar menu
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const showMobileSidebar = () => setMobileSidebar(!mobileSidebar);
  const hideMobileSidebar = () => setMobileSidebar(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <>
      <section className="header-section">
        <div className="container">
          <div className="left-container">
            <div className="header-link">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                  hideMobileSidebar();
                }}
              >
                <p id="header__logo">achyut .</p>
              </Link>
            </div>
          </div>

          <div className="right-container">
            <div className="header-link">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                  hideMobileSidebar();
                }}
              >
                <p>about</p>
              </a>
            </div>
            <div className="header-link">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                  hideMobileSidebar();
                }}
              >
                <p>projects</p>
              </a>
            </div>
            <div className="header-link__contact-btn">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  hideMobileSidebar();
                }}
              >
                <p>contact</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
