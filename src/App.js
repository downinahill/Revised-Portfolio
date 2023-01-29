import React, {useState} from "react";
import About from "./Components/About";
// import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import './index.css'
// import './styles.scss'
// import './App.css'

// import Testimonials from "./Components/Testimonials";
// import Badge from "./Components/Badge";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkLight = () => {
    setDarkMode(!darkMode);
  }

  return (
    
    <main className="text-gray-400 bg-gray-900 body-font">
      <button className={`light-bulb ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkLight}>
        <div className="light"></div>
      </button>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      {/* <Certifications /> */}
      {/* <Badge /> */}
      <Contact />
    </main>
  );
}