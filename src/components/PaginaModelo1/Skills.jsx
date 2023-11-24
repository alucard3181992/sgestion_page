import React from "react";
import { projects } from "../PaginasExterior/data";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

export default function Skills() {
  //pi-compass
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
    <section id="skills" className="mbr-fullscreen imagen3" style={{
      zIndex: 0, top: 0, backgroundImage: "none", position: "relative"
    }}>
      <div className="grid p-2">
        <div className="col-12">
          <div className="text-center">
            <div className=" text-6xl mb-3">
              TITULO DE LA SEGUNDA SECCION
            </div>
            <div className=" text-2xl mb-3">
              Subtitulo de la segunda Seccion
            </div>
          </div>
        </div>
        {projects.map((project, index) => (
          <div className={"centro-total mb-5 col-12 " + getColumnClass(index, projects.length) + " " + getColumnClassLg(index, projects.length)}
            key={index} style={{ cursor: "pointer" }}>
            <div className="fondob" /* style={{ height:"100%",minHeight: "300px", maxWidth: "300px" }} */>
              <div className="img-seccion2">
                <Image src={project.image} className="ImgnormalInicio" />
              </div>
              <div className="p-5">

                <div className="font-bold text-2xl">{project.title}</div>
                <div className="font-bold text-xl">{project.subtitle}</div>
                <div className="text-l mb-3">{project.description}</div>
                <div className="centro-total">
                  <Button label="LEAN MORE" style={{ color: "white" }} className="p-3 bg-orange-500 border-none" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}