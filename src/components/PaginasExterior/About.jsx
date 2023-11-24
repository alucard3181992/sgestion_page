import React from "react";
import { Image } from "primereact/image";

export default function About() {
    return (
        <section id="about" className="mbr-fullscreen">
            <div className="grid p-2">
                <div className="col-12 md:col-6 lg:col-6" >
                    <div className="text-center">
                        <div className="font-bold text-3xl mb-2">
                            Hola, soy Alucard
                        </div>
                        <div className="font-bold text-3xl mb-2">
                            Me encanta construir aplicaciones web.
                        </div>
                        <div className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </div>
                        <div className="gap-5 mb-3" style={{ display: "inline-flex" }}>
                            <a
                                href="#contact"
                                className="p-5 bg-green-500 p-button border-none text-white"
                            >
                                Trabaja conmigo
                            </a>
                            <a
                                href="#projects"
                                className="p-button  border-none text-white"
                            >
                                Mira mis trabajos anteriores
                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6" >
                    <div style={{ alignContent: "center", display: "flex" }} className="justify-content-center">
                        <Image src="/icons/coding.svg" alt="Foto Actual" className="ImgnormalInicio border-round" style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
                <div className="col-12 peque">
                    <div className="flex align-items-center justify-content-center">
                        <div className="fadeoutdown animation-duration-3000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold flecha-abajo">
                            <a href="#projects">
                                <i className="pi pi-arrow-down" style={{ fontSize: '3rem' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}