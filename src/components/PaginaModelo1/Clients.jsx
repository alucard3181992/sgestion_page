import React from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { projects } from "../PaginasExterior/data";

export default function Clients() {
    //pi-compass
    const pTemplate = (product) => {
        return (
            <div className="text-center">
                <div className="mb-3 centro-total">
                    <Image alt="Cargando Imagen..." src={`${product.image}`} className="ImgnormalInicioRedondoCarusel" />
                </div>
                <div className="mb-3">
                    {product.description}
                </div>
                <div className="font-bold text-2xl mb-3">
                    {product.title}
                </div>
                <div className="text-xl mb-3">
                    {product.subtitle}
                </div>

            </div>
        );
    };

    return (
        <section id="clients" className="mbr-fullscreen imagen4" style={{
            zIndex: 0, top: 0, backgroundImage: "none", position: "relative"
        }}>
            <div className="grid">
                <div className="col-12 centro-total">
                    <div className="text-center texto-seccion-carusel">
                        <div className="text-6xl mb-3">
                            Titulo de la Tercera Seccion Muy Largo Que Sea
                        </div>
                        <div className="text-2xl mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus,
                            arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
                        </div>
                    </div>
                </div>
                <div className="col-12 centro-total">
                    <div className="carusel" >
                        <div className="card color-fondo" style={{ background: "var(--surface-a)" }} >
                            <Carousel value={projects} numScroll={1} numVisible={1} itemTemplate={pTemplate} circular />{/*  */}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="centro-total">
                        <div className="flex flex-wrap gap-5">
                            <Button label="LEAN MORE" style={{ color: "white" }} className="p-3 bg-orange-500 border-none" />
                            <Button label="LEAN MORE2" style={{ color: "white" }} className="p-3 bg-blue-500 border-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}