import React from "react";

import { certificateList } from "./certificateList";

const Certificates = () => {
  return (
    <section className="container-fluid p-5 mt-3" id="certificates">
      <h1 className="text-decoration-underline lh-1 section-heading" id="certificates">
        Certificates
      </h1>
      <ul className="list-group p-2">
        {certificateList.map((certificate, i) => (
          <a href={certificate.link} className="certificate-item p-3 my-2" key={i}>
            {certificate.name}
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
