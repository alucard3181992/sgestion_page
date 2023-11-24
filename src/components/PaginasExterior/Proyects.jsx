import React, { useState } from "react";
import { projects } from "./data";
import { Image } from "primereact/image";

export default function Projects() {
  const [showDescriptions, setShowDescriptions] = useState(projects.map(() => false));

  const handleMouseEnter = (index) => {
    console.log("me llaman mouseEnter INDEX", index);
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = true;
    setShowDescriptions(newShowDescriptions);
  };

  const handleMouseLeave = () => {
    const newShowDescriptions = new Array(projects.length).fill(false);
    setShowDescriptions(newShowDescriptions);
  };

  return (
    <section id="projects" className="mbr-fullscreen">
      <div className="text-center">
        <i className="pi pi-code" style={{ fontSize: '2.5rem' }}></i>
        <div className="font-bold text-3xl mb-3">
          Aplicaciones que he construido
        </div>
        <div className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </div>
      </div>
      <div className="grid p-2">
        {projects.map((project, index) => (
          <div className="col-12 md:col-6 lg:col-6"
            key={index} style={{ cursor: "pointer",}}>
            <div
              className="surface-0 shadow-2 border-round border-50 border-1"
              onMouseOver={() => handleMouseEnter(index)}
              /* onMouseEnter={} */
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ minHeight: "300px", }}
            >
              {showDescriptions[index] ?
                <div className="text-center p-3" style={{ minHeight: "300px" }}>
                  <div className="font-bold text-2xl">{project.title}</div>
                  <div className="font-bold text-xl">{project.subtitle}</div>
                  <div className="font-bold text-l">{project.description}</div>
                </div>
                :
                <div style={{ minHeight: "300px" }} >
                  <Image
                    src={project.image}
                    alt="Foto Actual"
                    className="ImgnormalInicio border-round"
                    style={{ height: "100%", width: "100%", minHeight: "300px", display: "grid" }}
                  />
                </div>
              }
            </div>
          </div>
        ))}
      </div>

    </section >
  );
}