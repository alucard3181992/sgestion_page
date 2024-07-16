import React, { useEffect, useState } from "react"
import VistaGeneradora from "@/components/Generador/VistaGeneradora";
import AuthWrapper from "@/components/Componentes/AuthWrapper";
import VentaExcel from "@/components/Venta2/VentaExcel";
export default function Modelo4() {

    useEffect(() => {
    }, []);

    return (<React.Fragment>
        <AuthWrapper correctPassword="admin12">
            {/* <VistaGeneradora /> */}
            <VentaExcel />
        </AuthWrapper>
    </React.Fragment>)
}

