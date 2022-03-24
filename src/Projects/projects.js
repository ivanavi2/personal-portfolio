import React from "react";
import projectList from "./projectsList";
import ProjectItem from "./projectItem";

const Projects = () => {
  const displayProjectItems = () => {
    return projectList.map((project) => (
      <ProjectItem {...project} key={project.modalTargetName} />
    ));
  };

  return (
    <>
      <section
        className="container-fluid p-5"
        data-scroll
        data-scroll-speed={0.1}>
        <h1
          className="text-decoration-underline lh-1 section-heading"
          id="projects"
          data-scroll
          data-scroll-speed={1}>
          Projects
        </h1>
        <div
          className="card-list d-flex py-3"
          data-scroll
          data-scroll-speed={2}>
          {displayProjectItems()}
        </div>
      </section>
      {/* Modal for project images */}

      <div
        className="modal fade"
        id="modal-spotasong"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className="img-fluid" src="/img/spotasong.JPG" alt="" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modal-deliveryapp"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img
                className="img-fluid"
                src="/img/preview-deliveryrapp.JPG"
                alt=""
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modal-shoppingapp"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img
                className="img-fluid p-2"
                src="/img/preview-shopapp1.JPG"
                alt=""
              />
              <img
                className="img-fluid p-2"
                src="/img/preview-shopapp2.JPG"
                alt=""
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
