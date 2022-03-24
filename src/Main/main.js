import React, { useEffect, useRef } from "react";
import { startTextAnimation } from "./typeWriter";

const typeWriterTexts = [
  "Hi I'm Ivan🖐, nice to meet you!",
  "I develop websites and enjoy learning new stuff" /*, "enjoy designing websites."*/,
];

const Main = () => {
  const typeWriterRef = useRef();
  useEffect(() => {
    startTextAnimation(typeWriterTexts, 0, typeWriterRef.current);
  }, []);

  return (
    <main className="p-3">
      <div className="row p-3">
        <div className="col-1 d-flex flex-column align-items-center justify-content-center">
          <a href="https://www.facebook.com/ivanivanivanivanivanivanivaniva/">
            <i className="fab fa-facebook p-md-2 main-icon"></i>
          </a>
          <a href="https://github.com/ivanavi2">
            <i className="fab fa-github p-md-2 main-icon"></i>
          </a>
          <a href="https://www.instagram.com/ivanavi__/">
            <i className="fab fa-instagram p-md-2 main-icon"></i>
          </a>
        </div>
        <div className="col-11 d-flex flex-column align-items-center main-content">
          <img src="/img/photo2.jpg" alt="" className="thumbnail-img my-4" />
          <span
            id="typewriter-text"
            className="p-4 fs-2"
            ref={typeWriterRef}></span>
          <h1 className="p-4 text-sm-center fw-bold main-text">
            Currently a 4th year software engineering student from Universiti
            Teknologi Malaysia
          </h1>

          <a href="mailto:guang@graduate.utm.my">
            <button
              type="button"
              className="m-sm-4 btn btn-dark btn-lg main-button">
              Drop me an email
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
