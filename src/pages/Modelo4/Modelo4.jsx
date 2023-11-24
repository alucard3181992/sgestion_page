import React, { useEffect, useState } from "react"
import UsuarioContextProvider from "@/context/UsuarioContext"
import VistaUsuario from "@/components/Usuario/Usuario"

export default function Modelo4() {

    return (<React.Fragment>
        <UsuarioContextProvider>
            <VistaUsuario></VistaUsuario>
        </UsuarioContextProvider>
    </React.Fragment>)
}