import './App.css';
import './variables/variables.scss'
import React from "react";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </>
  );
}

export default App;
