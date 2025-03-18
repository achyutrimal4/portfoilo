import React, { useState } from "react";
import "./LockScreen.css";
import * as faIcons from "react-icons/fa6";
import TextSpan from "./TextSpan";
import transition from "../../transition";

function LockScreen() {
  const [isVisible, setIsVisible] = useState(true);

  const handleLockScreenClick = () => {
    setIsVisible(false);
  };

  const sentence = "Achyut.Rimal".split("");

  return (
    <section className={`lockscreen-section ${isVisible ? "" : "hidden"}`}>
      <div className="container">
        <div className="name">
          {sentence.map((letter, index) => {
            return <TextSpan key={index}>{letter}</TextSpan>;
          })}
        </div>

        <div
          className="lockscreen-arrow__container"
          onClick={handleLockScreenClick}
        >
          <div className="lockscreen-arrow">
            <p>
              <faIcons.FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default transition(LockScreen);
