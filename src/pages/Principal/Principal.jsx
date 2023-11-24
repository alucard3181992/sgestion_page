import React, { useState, useContext } from "react";
import PrincipalContextProvider, { PrincipalContext } from "@/context/PrincipalContext";
import PaginaExteriorInicio from "@/components/PaginasExterior/Inicio";
const VistaFuera = () => {
    return (<React.Fragment>
        <PaginaExteriorInicio />
    </React.Fragment>)
}

const VistaDentro = () => {
    return (<React.Fragment>
        estoy en el sistema
    </React.Fragment>)
}

const VistaPrincipal = () => {
    const { datosIn, setScroll } = useContext(PrincipalContext);
    return (<React.Fragment>
        {datosIn ? <VistaDentro /> : <div className="fuera" onScroll={event => {
            const scrollTop = event.target.scrollTop;
            setScroll(scrollTop)
        }}>
            <VistaFuera />
        </div>}
    </React.Fragment>)
}

const PrincipalVista = () => {
    return (
        <PrincipalContextProvider>
            <VistaPrincipal></VistaPrincipal>
        </PrincipalContextProvider>
    )
}
export default PrincipalVista;