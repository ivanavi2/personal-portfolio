import React from "react";

import "@/App.css";

import NavBar from "./Nav/navBar";
import Main from "./Main/main";
import About from "./About/about";
import Projects from "./Projects/projects";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="frame">
        <Main />
      </div>
      <div className="frame">
        <About />
      </div>
      <div className="frame">
        <Projects />
      </div>
    </div>
  );
};

export default App;
