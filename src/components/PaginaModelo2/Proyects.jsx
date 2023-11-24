import React, { useState } from "react";
import { projects } from "../PaginasExterior/data";
import { Image } from "primereact/image";

export default function Projects() {

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
    <section id="projects" className="mbr-fullscreen imagen2" style={{
      zIndex: 0, position: "relative"
    }}>
      <div className="text-center">
        <h2 className="text-6xl mb-3">
          TITULO DE LA SEGUNDA SECCION
        </h2>
        <div className=" text-2xl mb-3">
          Subtitulo de la Segunda Seccion
        </div>
      </div>
      <div className="grid p-2">
        {projects.map((project, index) => (
          <div className={"centro-total col-12 " + getColumnClass(index, projects.length) + " " + getColumnClassLg(index, projects.length)}
            key={index} style={{ cursor: "pointer", }}>
            <div className="text-center p-3" style={{ minHeight: "300px", maxWidth: "400px" }}>
              <i className={project.icon + " mb-5 icon-redondo"} style={{ color: "white", fontSize: "4.5rem" }} ></i>
              <div className="font-bold text-2xl">{project.title}</div>
              <div className="font-bold text-xl">{project.subtitle}</div>
              <div className="text-l ">{project.description}</div>
            </div>
          </div>
        ))}
      </div>

    </section >
  );
}