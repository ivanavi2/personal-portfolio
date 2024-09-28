import React from "react";

import experienceList from "./experienceList";

const Experience = () => {
  return (
    <section className="container-fluid p-5 ">
      <h1 className="text-decoration-underline lh-1 section-heading" id="experience">
        Professional Experience
      </h1>
      <section>
        <div className="py-5 ms-2">
          <div className="main-timeline-5">
            {experienceList.map((experience, i) => (
              <div className="timeline-5 right-5" key={i}>
                <div className="">
                  <div className="card-body experience-body p-4">
                    <h3>
                      {experience.title}, <i>{experience.company}</i>
                    </h3>
                    <span className="small text-muted">
                      <i className="fas fa-clock me-1 timeline-icon"></i>
                      {experience.period}
                    </span>
                    {experience.bulletPoints.map((bp, i) => (
                      <p className="mt-2 mb-0" key={i}>
                        - {bp}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
