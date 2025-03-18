import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Projects from "./components/Projects/Projects";
import ProjectLanding from "./components/Projects/ProjectLanding";
import SkillsMarquee from "./components/Marquee/Marquee";
import NewFooter from "./components/NewFooter/NewFooter";
import BlogPage from "./components/BlogPage/BlogPage";
import AddBlog from "./components/Blogs/AddBlog";
import Blogs from "./components/Blogs/Blogs";
import LenisScroll from "./LenisScroll";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* <LockScreen /> */}
      <div style={{ marginTop: "5em" }}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomeScreen />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectLanding />} />
          <Route path="/web-projects" element={<Projects />} />
          <Route path="/marquee" element={<SkillsMarquee />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blogs" element={<Blogs />} /> */}
        </Routes>
        <NewFooter />
      </div>
    </>
  );
}

export default App;
