import React, { useState } from "react";
import { projects } from "./data";
import { Image } from "primereact/image";

export default function Projects2() {
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

  function getColumnClass(index, totalElements) {
    if (totalElements % 2 === 0) {
      // Si hay un número par de elementos, cada elemento toma md:col-6
      return "md:col-6";
    } else {
      // Si hay un número impar de elementos, el último elemento toma md:col-12
      return index === totalElements - 1 ? "md:col-12" : "md:col-6";
    }
  }
  function getColumnClassLg(index, totalElements) {
    if (totalElements % 3 === 0) {
      return "lg:col-4";
    } else {
      const multiplos = Math.floor(totalElements / 3) * 3;
      const restante = totalElements - multiplos
      if (restante === 1) {
        return index === totalElements - 1 ? "lg:col-12" : "lg:col-4"
      } else {
        if (restante === 2) {
          return index === totalElements - 1 || index === totalElements - 2 ? "lg:col-6" : "lg:col-4"
        }
      }
    }
  }
  return (
    <section id="projects2" className="mbr-fullscreen" style={{
      zIndex: 0, position: "relative"
    }}>
      <div className="text-center">
        <div className=" text-6xl mb-3">
          TITULO DE LA PRIMERA SECCION2222
        </div>
        <div className=" text-2xl mb-3">
          Subtitulo de la Primera Seccion222
        </div>
      </div>
      <div className="grid p-2">
        {projects.map((project, index) => (
          <div className={"centro-total col-12 " + getColumnClass(index, projects.length) + " " + getColumnClassLg(index, projects.length)}
            key={index} style={{ cursor: "pointer", }}>
            <div
              className="surface-0 shadow-2 border-round border-50 border-1 fondob"
              onMouseOver={() => handleMouseEnter(index)}
              /* onMouseEnter={} */
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ color: "white" }}
            >
              {showDescriptions[index] ?
                <div className="text-center p-3">
                  <i className={project.icon + " mb-5"} style={{ color: project.color, fontSize: "4.5rem" }} ></i>
                  <div className="font-bold text-2xl">{project.title}</div>
                  <div className="font-bold text-xl">{project.subtitle}</div>
                  <div className="text-l ">{project.description}</div>
                </div>
                :
                <div className="">
                  <Image
                    src={project.image}
                    alt="Foto Actual"
                    className="ImgnormalInicio"
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