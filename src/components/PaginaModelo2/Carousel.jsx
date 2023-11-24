import React from "react";

import { projects } from "../PaginasExterior/data";
import { useRouter } from 'next/router'

import { Carousel } from "primereact/carousel";
import { Button } from 'primereact/button';
import { Image } from "primereact/image";

export default function VistaCarousel() {

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const pTemplate = (product) => {
        return (
            <div className="text-center"
            >
                <div className="mb-3">
                    <div className='ContenedorImg'>
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="ImgnormalInicioCarusel" />
                        <div className='CentroInterno'>
                            <div className=" text-3xl font-bold mb-3">{product.title}</div>
                            <div className="font-medium mb-3">{product.subtitle}</div>
                            <div className="mb-3">{product.link}</div>
                            <Button label="IR A LA CONSULTA ONLINE" className="font-bold text-white"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (<React.Fragment>

        <div className="ContenedorDelCarusel" style={{ background: "transparent", top: 0, position: "absolute" }}>
            <Carousel value={projects} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={pTemplate} />

        </div>


    </React.Fragment >);
}