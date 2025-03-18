import React, { useState } from "react";
import "./AddBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function AddBlog() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["code-block"],
      ["video"]["clean"],
    ],
  };

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
  ];

  return (
    <section className="section-addBlog">
      <div className="editor-container">
        <div className="editor-left">
          <input
            type="text"
            name=""
            id=""
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="quill-container">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={value}
              onChange={setValue}
            />
          </div>
          <input
            type="file"
            id="file"
            name=""
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="editor-right">
          <h1>Category</h1>
          <div className="radio-group">
            <input
              type="radio"
              name="cat"
              id="data_analytics"
              value="Data Analytics"
            />
            <label htmlFor="data_analytics">Data Analytics</label>
          </div>
          <div className="radio-group">
            <input type="radio" name="cat" id="web" value="web" />
            <label htmlFor="web">Web Development</label>
          </div>{" "}
          <div className="radio-group">
            <input type="radio" name="cat" id="stats" value="Statistics" />
            <label htmlFor="stats">Statistics</label>
          </div>{" "}
          <div className="radio-group">
            <input type="radio" name="cat" id="life" value="life" />
            <label htmlFor="life">Life</label>
          </div>{" "}
          <input
            type="submit"
            name="Publish"
            className="primary-btn"
            value="Publish"
          />
        </div>
      </div>
    </section>
  );
}

export default AddBlog;
