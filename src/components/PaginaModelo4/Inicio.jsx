import React from "react";
import Navbar from "@/components/PaginaModelo4/Navbar";
import MenubarTerminado from "../Componentes/MenuBar";
import PaginaCreacion from "../PaginaCreacion/PaginaCreacion";
import RegistroVenta from "./RegistroVenta";
import Presentacion from "./Presentacion";
const VistaInicio = () => {


    return (<React.Fragment>

        <Presentacion />
        <MenubarTerminado />
        <PaginaCreacion />
        {/* <RegistroVenta /> */}
    </React.Fragment>)
}
export default VistaInicio