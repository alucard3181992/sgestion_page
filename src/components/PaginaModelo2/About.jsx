import React, { useState } from "react";
import VistaCarousel from "./Carousel";
import VistaGalleria from "./Galleria";

export default function About() {
    return (
        <section id="about" className="mbr-fullscreen imagen1" style={{
            zIndex: 0, top: 0, backgroundImage: "none", position: "relative", display: "grid"
        }}>

            {/* <VistaCarousel></VistaCarousel> */}
            <div className="grid w-full modelo3" style={{ background: "#b89b9b70", }} >
                <div className="col-12 md:col-4 centro-total">
                    <div className="grid">
                        <div className="col-4 derecha-total">
                            <a
                                style={{
                                    background: "#50505080", color: "white",
                                    fontSize: "1.5rem",
                                    border: "none", textDecoration: "none", fontWeight: 700
                                }}
                                href="#"
                                className="pi pi-phone p-3 border-none 
                    p-button p-button-raised p-button-text p-button-rounded"
                            >

                            </a>
                        </div>
                        <div className="col-8 izquierda-total">
                            <div>
                                <div className="font-bold">
                                    +591-12345678
                                </div>
                                <div className="font-bold">
                                    +591-12345678
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 md:col-4 centro-total text-center">
                    <div className="font-bold text-4xl">TITULO DE LA PAGINA</div>
                </div>
                <div className="col-12 md:col-4 centro-total">
                    <div className="grid">
                        <div className="col-4 derecha-total">
                            <a
                                style={{
                                    background: "#50505080", color: "white",
                                    fontSize: "1.5rem",
                                    border: "none", textDecoration: "none", fontWeight: 700
                                }}
                                href="#"
                                className="pi pi-map-marker p-3 border-none 
                    p-button p-button-raised p-button-text p-button-rounded"
                            >
                            </a>
                        </div>
                        <div className="col-8 izquierda-total">
                            <div>
                                <div className="font-bold">
                                    Calle Julion Numero nose pero si esto se alarga se adapta
                                </div>
                                <div className="font-bold">
                                    Av. Panamerican gozu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{ padding: 0 }}>
                    <VistaGalleria />
                </div>
            </div>
            {/* <div class="grid nested-grid">
                <div class="col-4">
                    <div class="text-center p-3 border-round-sm h-full bg-primary font-bold">4</div>
                </div>
                <div class="col-8">
                    <div class="grid">
                        <div class="col-6">
                            <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                        </div>
                        <div class="col-6">
                            <div class="text-center p-3 border-round-sm bg-primary font-bold">6</div>
                        </div>
                        <div class="col-12">
                            <div class="text-center p-3 border-round-sm bg-primary font-bold">12</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </section >
    );
}