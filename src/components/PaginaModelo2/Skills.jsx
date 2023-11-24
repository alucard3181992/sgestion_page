import React from "react";
import { projects2 } from "../PaginasExterior/data";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

export default function Skills() {

  return (
    <section id="skills" className="mbr-fullscreen imagen3" style={{
      zIndex: 0, top: 0, backgroundImage: "none", position: "relative"
    }}>
      <div className="grid p-5" >
        <div className="col-12 md:col-6 p-0">
          <div style={{ width: "100%", height: "100%" }}>
            <Image src="/icons/img/5.jpg" className="ImgnormalInicioCard"
              /* style={{ width: "100%", height: "100%" }}  *//>
          </div>
        </div>
        <div className="col-12 md:col-6 p-0" style={{ background: "#7155c4" }}>
          <div className="p-5">
            <div className="font-bold text-3xl">
              TITULO DEL ARTICULO
            </div>
            <div className="text-500 mb-3">
              1 Lorem ipsum dolosudhuisaufhsaghfuigh asufjsakjfhks jahfaisuhfiuh ewuahfkjshfiuas hfkhsafjhsaiu fhWHIHFLISH r sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?
            </div>
            <div className="grid">
              {projects2.map((project, index) => (
                <div className="centro-total col-12" key={index} style={{ cursor: "pointer", }}>
                  <div className="grid">
                    <div className="col-2 centro-total" style={{ padding: 0 }}>
                      <div className="">
                        <i className={project.icon + " mb-5 icon-redondo"} style={{ color: "white", fontSize: "2.5rem" }} ></i>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <div className="font-bold text-2xl">{project.title}</div>
                        <div className="font-bold text-xl">{project.subtitle}</div>
                        <div className="text-l ">{project.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}