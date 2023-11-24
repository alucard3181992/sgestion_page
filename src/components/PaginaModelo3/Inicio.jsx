import React, { useState } from "react"
import EditorImagen from "./EditorImagenes"
import Navbar from "../PaginaModelo2/Navbar"
export default function PaginaInicioModelo3() {

    return (<React.Fragment>
        <main>
            <Navbar></Navbar>
            <EditorImagen />

        </main>
    </React.Fragment>)
}