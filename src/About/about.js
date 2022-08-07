import React from "react";

const About = () => {
  return (
    <section className="container-fluid p-5" id="about">
      <h1 className="text-decoration-underline lh-1 section-heading">About</h1>
      <div className="row">
        <div className="col-sm-6 border-white" id="about-1">
          <p className="fs-4">
            I am a software engineering fresh graduate from Penang, Malaysia,
            who is interested in full stack web development. I am open and keen
            to learning new technologies to grow and thrive as a software
            engineer.
          </p>
        </div>
        <div className="col-sm-6 ps-4-sm pt-3 pt-sm-0" id="about-2">
          <p className="fs-4">
            I mainly work with the{" "}
            <span className="underline-text">MERN stack</span>. I have also
            learnt Flutter/Dart, Java and a little C++ in university. Other
            frameworks and tools I am familiar with include Bootstrap, Heroku,
            Git/Github.
          </p>
          <i className="fab fa-node-js about-icon" style={{ "--order": 1 }}></i>
          <svg
            className="about-icon pb-2"
            style={{ "--order": 2 }}
            role="img"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"
              fill="#fff"
            />
          </svg>
          <i className="fab fa-react about-icon" style={{ "--order": 3 }}></i>
          <i
            className="fab fa-bootstrap about-icon"
            style={{ "--order": 4 }}></i>
          <i
            className="fab fa-js-square about-icon"
            style={{ "--order": 5 }}></i>
          <i className="fab fa-java about-icon" style={{ "--order": 6 }}></i>
        </div>
      </div>
    </section>
  );
};

export default About;
