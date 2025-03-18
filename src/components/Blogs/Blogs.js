import React, { useEffect, useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Blogs() {
  return (
    <section className="blogs-section">
      <div className="title">
        <h1>[ coming soon ]</h1>
      </div>
      {/* <div className="blog-filters">
        <Link to="/?cat=all" className="blog-filter">
          <p>All</p>
        </Link>
        <Link to="/?cat=analytics" className="blog-filter">
          <p>Data Analytics</p>
        </Link>
        <Link to="/?cat=math" className="blog-filter">
          <p>Mathematics</p>
        </Link>

        <Link to="/?cat=life" className="blog-filter">
          <p>Life</p>
        </Link>
        <Link to="/?cat=other" className="blog-filter">
          <p>Other</p>
        </Link>
      </div>
      <div className="blogs-container">
       

        <a href="#!" target="_blank" className="blog-card">
          <div className="blog-header">
            <div className="blog-tag">
              <p>title</p>
            </div>
            <p>March 19, 2024</p>
          </div>
          <div className="blog-title">
            <h1>Space Exploration Data Analysis</h1>
          </div>
          <div className="blog-desc">
            <p>
              Analyzed planatery exploration budget data to explore what drives
              the progression of space missions Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Perferendis impedit ad dignissimos
              corrupti temporibus doloremque consectetur nobis? Assumenda, cum
              sequi!
            </p>
            <a href="#!">Read More</a>
          </div>
        </a>
      </div> */}
    </section>
  );
}

export default Blogs;
