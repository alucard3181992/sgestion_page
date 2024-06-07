import React, { useState, useContext, useEffect } from "react";
import PrincipalContextProvider, { PrincipalContext } from "@/context/PrincipalContext";
import PaginaExteriorInicio from "@/components/PaginasExterior/Inicio";
import { Session } from "@/components/Esqueleto/VistaSkeleton";
import PaginaInicio from "@/components/Inicio/PaginaInicio";

const VistaFuera = () => (
    <React.Fragment>
        <PaginaExteriorInicio />
    </React.Fragment>
)

const VistaDentro = () => (
    <React.Fragment>
        <PaginaInicio />
    </React.Fragment>
)


const VistaPrincipal = () => {
    const { datosIn, setScroll, loading } = useContext(PrincipalContext);
    useEffect(() => {

    }, [datosIn])

    const handleScroll = (event) => {
        console.log("SOY ESCROll");
        const scrollTop = event.target.scrollTop;
        setScroll(scrollTop);
    }

    return (<React.Fragment>
        {loading ? (
            <Session animacion={"P"} mensaje={"Verificando..."} todo={true} />
        ) : (datosIn ?
            <VistaDentro />
            :
            <div className="fuera" onScroll={handleScroll}>
                <VistaFuera />
            </div>

        )}
    </React.Fragment>)
}

const PrincipalVista = () => {
    useEffect(() => {

    }, [])
    return (
        <PrincipalContextProvider>
            <VistaPrincipal></VistaPrincipal>
        </PrincipalContextProvider>
    )
}
export default PrincipalVista;