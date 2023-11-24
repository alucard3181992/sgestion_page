import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { Image } from "primereact/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mbr-fullscreen">
      <div className="text-center">
        <i className="pi pi-users" style={{ fontSize: '2.5rem' }}></i>
        <div className="font-bold text-3xl mb-3">
          Testimonios de clientes
        </div>
      </div>
      <div className="grid p-2" >
        {testimonials.map((testimonials, index) => (
          <div className="p-3 col-12 md:col-6 lg:col-6"
            key={index} style={{ cursor: "pointer" }}>
            <div className="grid card" style={{ height: "100%" }}>
              <div className="col-12 font-500 text-center">
                <div>
                  <i className="pi pi-comment" style={{ color: "#6ebe71", fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  {testimonials.mensaje}
                </div>
              </div>
              <div className="col-12 flex centro-total">
                <div style={{ height: "50px", width: "50px", display: "grid" }}>
                  <Image
                    src={testimonials.image}
                    alt="Foto Actual"
                    className="ImgnormalInicioRedondo"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold">{testimonials.company}</div>
                  <div className="font-bold">{testimonials.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}