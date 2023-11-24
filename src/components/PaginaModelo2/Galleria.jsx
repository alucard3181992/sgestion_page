
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { projects } from '../PaginasExterior/data';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export default function VistaGalleria() {
    useEffect(() => { }, []);
    const itemTemplate = (item) => {
        return <Image
            src={item.image}
            alt={item.title}
            className='ImgnormalInicioGalleria'
            style={{ width: "100%", height: "600px" }} />;
    }
    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-center">
                    <div className=" text-3xl font-bold mb-3">{item.title}</div>
                    <div className="font-medium mb-3">{item.subtitle}</div>
                    <div className="mb-3">{item.link}</div>
                    <Button label="IR A LA CONSULTA ONLINE" className="font-bold text-white"></Button>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div style={{ width: "100%",/* top: 0, position: "absolute"  */ }}>
            <Galleria
                value={projects}
                numVisible={1}
                circular
                autoPlay
                transitionInterval={30000}
                caption={caption}
                showThumbnails={false}
                showItemNavigators
                showItemNavigatorsOnHover
                item={itemTemplate}
                style={{
                    width: "100%", height: "600px", cursor: "pointer"
                }} />
        </div>
    )
}
