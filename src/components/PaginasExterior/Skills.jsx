import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";

export default function Skills() {
  //pi-compass
  return (
    <section id="skills" className="mbr-fullscreen">
      <div className="text-center">
        <i className="pi pi-compass" style={{ fontSize: '2.5rem' }}></i>
        <div className="font-bold text-3xl mb-3">
          Habilidades y Tecnologías
        </div>
        <div className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </div>
      </div>
      <div className="grid p-2" >
        {skills.map((skills, index) => (
          <div className="p-3 col-12 md:col-6 lg:col-6"
            key={index} style={{ cursor: "pointer" }}>
            <div className="grid card" style={{ height: "100%" }}>
              <div className="col-2 flex centro-total">
                <i className="pi pi-android" style={{ color: "#6ebe71", fontSize: '1.5rem' }}></i>
              </div>
              <div className="col-10 font-500 centro-total">
                {skills}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}