import React, { useEffect, useRef } from "react";
import { startTextAnimation } from "./typeWriter";

const typeWriterTexts = ["Hi I'm Ivan🖐, nice to meet you!" /*, "enjoy designing websites."*/];

const Main = () => {
  const typeWriterRef = useRef();
  useEffect(() => {
    startTextAnimation(typeWriterTexts, 0, typeWriterRef.current);
  }, []);

  return (
    <main className="p-3 main-fade-in-text">
      <div className="row p-3">
        <div className="col-1 d-flex flex-column align-items-center justify-content-center">
          <a href="https://github.com/ivanavi2">
            <i className="fab fa-github p-md-2 main-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/ivan-teh-guang-sern-815a0220a/">
            <i className="fab fa-linkedin p-md-2 main-icon"></i>
          </a>
        </div>
        <div className="col-11 d-flex flex-column align-items-center main-content">
          <img src="/img/photo2.jpg" alt="" className="thumbnail-img my-4" />
          <span id="typewriter-text" className="p-4 fs-2" ref={typeWriterRef}></span>
          <h2 className="p-4 lh-base main-text">
            A software engineer with 2 years experience proficient in designing and building scalable, high-performance web applications using technologies such
            as Next.js, React.js, Node.js, .NET, MongoDB, SQL
          </h2>

          <a href="mailto:ivanavi2@outlook.com">
            <button type="button" className="m-sm-4 btn btn-dark btn-lg main-button">
              Drop me an email
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
