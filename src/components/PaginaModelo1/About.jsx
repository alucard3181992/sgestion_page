import React from "react";

export default function About() {
    return (
        <section id="about" className="mbr-fullscreen imagen1" style={{
            zIndex: 0, top: 0, backgroundImage: "none", position: "relative"
        }}>
            <div className="grid p-2">
                <div className="col-12" >
                    <div className="text-center">
                        <label className="font-bold text-7xl ">TITULO PUEDE SER LARGO O NO</label>
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-4" >
                    <div className="text-center p-2 gap-2">
                        <a
                            href="#contact"
                            className="p-3 bg-orange-500 p-button border-none text-white"
                        >
                            Boton Naranja
                        </a>
                    </div>
                </div>
                <div className="col-6 md:col-4 lg:col-4" >
                    <div className="text-center p-2 gap-2">
                        <a
                            href="#contact"
                            className="p-3 bg-green-500 p-button border-none text-white"
                        >
                            Boton Verde
                        </a>
                    </div>
                </div>
                <div className="col-12 md:col-4 lg:col-4" >
                    <div className="text-center p-2 gap-2">
                        <a
                            href="#contact"
                            className="p-3 bg-blue-500 p-button border-none text-white"
                        >
                            Boton Azul
                        </a>
                    </div>
                </div>
                <div className="col-12 peque">
                    <div className="flex align-items-center justify-content-center">
                        <div className="fadeoutdown animation-duration-3000 animation-iteration-infinite flex align-items-center justify-content-center
        font-bold flecha-abajo">
                            <a href="#projects">
                                <i className="pi pi-arrow-down" style={{ fontSize: '3rem',color: "white", }}></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}