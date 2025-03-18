import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { useLocation } from "react-router";
function BlogPage() {
  return (
    <section className="blog-section">
      <div className="blog_page-container">
        <div className="blog-page__header">
          <h1>post title</h1>
          <p>6 min read</p>
        </div>
        <p id="blog-upload-date">2020-01-01</p>
        <div className="blog-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae iure
          non autem eaque officiis, ipsum itaque sed minima ipsa numquam
          aliquam? Voluptas dolores voluptate unde.
          {/* {<img src={post.img} alt="" />} */}
          <h1>IMAGE</h1>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
