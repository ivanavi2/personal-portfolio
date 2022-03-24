import React from "react";

const About = () => {
  return (
    <section className="container-fluid p-5" id="about">
      <h1 className="text-decoration-underline lh-1 section-heading">About</h1>
      <div className="row">
        <div className="col-sm-6 border-white" id="about-1">
          <p className="fs-4">
            I am a 4th year software engineering student from Penang, Malaysia,
            with interests in web development as well as application development
            especially front-end and design wise. I am open and keen to learning
            new technologies to grow and thrive as a software engineer.
          </p>
        </div>
        <div className="col-sm-6 ps-4-sm pt-3 pt-sm-0" id="about-2">
          <p className="fs-4">
            On the path of learning the{" "}
            <span className="underline-text">MERN stack</span> along with{" "}
            <span className="underline-text">Flutter/Dart.</span>I have also
            learnt Java and a little C++ in university. Other frameworks and
            tools I am familiar with include Bootstrap, Heroku, Git/Github.
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
