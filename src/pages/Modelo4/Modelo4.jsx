import React, { useEffect, useState } from "react"
import UsuarioContextProvider from "@/context/UsuarioContext"
import VistaUsuario from "@/components/Usuario/UsuarioDatos"
import VistaGeneradora from "@/components/Generador/VistaGeneradora";
export default function Modelo4() {

    useEffect(() => {
    }, []);

    return (<React.Fragment>
        <VistaGeneradora />
    </React.Fragment>)
}