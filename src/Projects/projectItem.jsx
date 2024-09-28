import React from "react";

const ProjectItem = ({
  title,
  descriptions,
  isDemoAvailable,
  url,
  githubUrl,
  modalTargetName,
  technologies,
  imagePaths,
}) => {
  const displayDescriptions = () => {
    return descriptions.map((description, index) => (
      <p key={`${title}${index}`}>{`- ${description}`}</p>
    ));
  };

  const displayTags = () => {
    return technologies.map((technology, index) => (
      <i key={`${title}${index}`}>{technology}</i>
    ));
  };

  return (
    <>
      <article className="project-card">
        <header className="project-card-header">
          <h2>{title}</h2>
          {displayDescriptions()}
          {isDemoAvailable && (
            <a href={url} className="mx-1">
              <button type="button" className="btn btn-dark-secondary btn-lg">
                {">Demo"}
              </button>
            </a>
          )}
          <a href={githubUrl} className="mx-1">
            <button type="button" className="btn btn-dark-secondary btn-lg">
              {">GitHub"}
            </button>
          </a>
          {modalTargetName && (
            <button
              type="button"
              className="btn btn-dark-secondary btn-lg mx-1"
              data-bs-toggle="modal"
              data-bs-target={modalTargetName}>
              <i className="fas fa-images"></i>
            </button>
          )}
        </header>
        <div className="tags">{displayTags()}</div>
      </article>
    </>
  );
};

export default ProjectItem;
