import React, { useState } from "react";
import "./Accordion.css";
import * as faIcons from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      title: "Datanest",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum minima alias consequuntur vel.",
    },
    {
      title: "Dave's Cave",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum minima alias consequuntur vel.",
    },
    {
      title: "On Country",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum minima alias consequuntur vel.",
    },
    {
      title: "Wine",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum minima alias consequuntur vel.",
    },
    {
      title: "Mommy Bear",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam rerum minima alias consequuntur vel.",
    },
  ];
  return (
    <section className="accordion-wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title">
              <h1 onClick={() => toggle(i)}>{item.title}</h1>
              <span>
                <a href="https://github.com" target="_blank">
                  <faIcons.FaGithub />
                </a>
                <a href="#!">
                  <faIcons.FaExternalLinkAlt />
                </a>
                <a href="#!" onClick={() => toggle(i)}>
                  <CgDetailsMore />
                </a>
              </span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordion;
