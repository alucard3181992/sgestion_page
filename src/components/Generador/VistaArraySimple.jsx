import React, { useState, useEffect } from "react";

import { Button } from "primereact/button";

import { GeneradorDeArrayTabla } from "./FuncionesGeneradora";

const VistaArraySimple = ({ Datos, setDatos, titulo, tituloPrincipal }) => {
    const [bloqueo, setBloqueo] = useState(true)
    const [datosNuevos, setDatosNuevos] = useState(null)
    const [cambios, setCambios] = useState(false)

    useEffect(() => {
        if (Datos) {
            setDatosNuevos(Datos)
            setBloqueo(false)
        }
    }, [Datos])

    const registrarCambio = () => {
        setDatos(datosNuevos)
    }

    useEffect(() => {
        if (JSON.stringify(Datos) === JSON.stringify(datosNuevos)) {
            setCambios(false)
        } else {
            setCambios(true)
        }
    }, [datosNuevos, Datos])

    return (
        <React.Fragment>
            <div className={cambios ? "mb-3 card check" : "mb-3 card"} >
                <div className={cambios ? "mb-5 font-bold text-red-600" : "mb-5 font-bold"} >{cambios ? tituloPrincipal + " (Datos sin Guardar)" : tituloPrincipal}</div>
                {bloqueo ? "Cargando La lista ...." : <div className="mb-3">
                    <GeneradorDeArrayTabla arrayLista={datosNuevos} setPropiedad={setDatosNuevos} titulo={titulo} />
                </div>}
                <Button label={`Registrar Cambios ${tituloPrincipal}`}
                    onClick={(e) => { e.preventDefault(), registrarCambio() }} />
            </div>
        </React.Fragment>
    )
}
export default VistaArraySimple
