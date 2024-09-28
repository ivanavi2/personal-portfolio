import React from "react";

const ProjectItemModal = ({ imagePaths, modalTargetName }) => {
  return (
    <div
      className="modal fade"
      id={modalTargetName}
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
            {imagePaths.map((path) => (
              <img className="img-fluid" src={path} alt="" />
            ))}
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
  );
};

export default ProjectItemModal;
