import React from "react"
import PaginaInicioModelo3 from "@/components/PaginaModelo3/Inicio"
import AuthWrapper from "@/components/Componentes/AuthWrapper"

export default function Modelo2() {
    return (<React.Fragment>
        <AuthWrapper correctPassword="admin12">
            <div className="fuera">
                <PaginaInicioModelo3 />
            </div>
        </AuthWrapper>
    </React.Fragment>)
}