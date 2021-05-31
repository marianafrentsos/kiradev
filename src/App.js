import './App.css';
import './variables/variables.scss'
import React from "react";
import Landing from './components/Landing/Landing'
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
      <>
        <Landing/>
        <About/>
        <Projects/>
      </>
  );
}

export default App;
