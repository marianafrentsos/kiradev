import './App.css';
import './variables/variables.scss'
import React from "react";
import Landing from './components/Landing/Landing'
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
      <>
        <Landing/>
        <About/>
        <Skills/>
      </>
  );
}

export default App;
