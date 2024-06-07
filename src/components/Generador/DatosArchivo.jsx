import React, { useState, useEffect } from "react";
import SimpleInputTextoMemo from "../Componentes/SimpleInputTexto";
import { Button } from "primereact/button";
import SimpleChipsMemo from "../Componentes/SimpleChips";
const DatosArchivo = ({ Datos, lista, setDatos, titulo }) => {
    const [bloqueo, setBloqueo] = useState(true)
    const [datosNuevos, setDatosNuevos] = useState(null)
    const [cambios, setCambios] = useState(false)
    useEffect(() => {
        //console.log("DatosArchivo  ", lista);
        if (lista.length && Datos) {
            //console.log("DATOS ARCHIVO", Datos);
            setDatosNuevos(Datos)
            setBloqueo(false)
        }
    }, [lista, Datos])

    const registrarCambio = () => {
        setDatos(datosNuevos)
    }
    useEffect(() => {
        //console.log("DatosArchivo  ", lista);
        if (JSON.stringify(Datos) === JSON.stringify(datosNuevos)) {
            setCambios(false)
        } else {
            setCambios(true)
        }
    }, [datosNuevos, Datos])
    return (
        <React.Fragment>
            <div className={cambios ? "mb-3 card check" : "mb-3 card"} >
                <div className={cambios ? "mb-5 font-bold text-red-600" : "mb-5 font-bold"} >{cambios ? titulo + " (Datos sin Guardar)" : titulo}</div>
                {bloqueo ? "Cargando La lista ...." :
                    lista.map((item) =>
                        item.campo === "ListasAdicionales" ? <SimpleChipsMemo
                            campo={item.campo}
                            cliente={datosNuevos}
                            setCliente={setDatosNuevos}
                            original={Datos}
                            key={item.index}
                        /> : <SimpleInputTextoMemo
                            campo={item.campo}
                            cliente={datosNuevos}
                            setCliente={setDatosNuevos}
                            original={Datos}
                            key={item.index}
                        />
                    )
                }
                <Button label="Registrar Cambios"
                    onClick={(e) => { e.preventDefault(), registrarCambio() }} />
            </div>


        </React.Fragment >
    );
};
export default DatosArchivo
