import React, { useState, useEffect, useMemo, memo } from "react";

import { SimpleCheckbox } from "../Tabla/Checkbox";
import { SimpleChips } from "../Tabla/Chips";
import SimpleInputTextoMemo from "../Componentes/SimpleInputTexto";
import { GeneradorDeArrayTablaFormulario2 } from "./editorN";
import { GeneradorDeArrayTablaFormulario } from "./FuncionesGeneradora";

import { Button } from "primereact/button";
import SimpleCheckboxMemo from "../Componentes/SimpleCheckbox";
import SimpleChipsMemo from "../Componentes/SimpleChips";
import SimpleInputNumberMemo from "../Componentes/SimpleInputNumber";

function identificarTipo(array) {
    if (Array.isArray(array) && array.length > 0) {
        const tipoElemento = typeof array[0];
        //console.log("0", array[0], tipoElemento);
        if (tipoElemento !== 'object') {
            return 'simple';
        } else {
            return 'compuesto';
        }
    } else {
        //console.log("VACIO");
        return 'simple'; // Tratamos arrays vacíos como simples
    }
}
function obtenerPrimerAtributo(objeto) {
    if (objeto && typeof objeto === 'object') {
        const claves = Object.keys(objeto);
        if (claves.length > 0) {
            return claves[0];
        }
    }
    return null;
}
const VistasDatos = ({ objeto, datos, setDatos, cli, setCli, titulo }) => {
    /* useEffect(() => {

    }, []) */
    const [bloqueo, setBloqueo] = useState(true)
    const [datosNuevos, setDatosNuevos] = useState(null)
    const [cambios, setCambios] = useState(false)

    useEffect(() => {
        if (datos) {
            setDatosNuevos(datos)
            setBloqueo(false)
        }
    }, [datos])

    useEffect(() => {
        datos && console.log("VistaDatos1", datos.tablaFilas);
        datosNuevos && console.log("VistaDatos2", datosNuevos.tablaFilas);
        if (JSON.stringify(datos) === JSON.stringify(datosNuevos)) {
            setCambios(false)
        } else {
            setCambios(true)
        }
    }, [datosNuevos, datos])

    const registrarCambio = () => {
        setDatos(datosNuevos)
    }

    return (<React.Fragment>
        <div className={cambios ? "mb-3 card check" : "mb-3 card"} >
            <div className={cambios ? "mb-5 font-bold text-red-600" : "mb-5 font-bold"} >{cambios ? titulo + " (Datos sin Guardar)" : titulo}</div>
            {bloqueo ? "Cargando La lista ...." : datosNuevos && Object.entries(objeto).map((tipo, key) => {
                switch (tipo[1]) {
                    case 'string':
                        //console.log("seee")
                        return <SimpleInputTextoMemo
                            campo={tipo[0]}
                            cliente={datosNuevos}
                            setCliente={setDatosNuevos}
                            original={datos}
                            key={key}
                        />
                    case 'number':
                        return <SimpleInputNumberMemo
                            campo={tipo[0]}
                            cliente={datosNuevos}
                            setCliente={setDatosNuevos}
                            original={datos}
                            key={key}
                        />
                    case 'boolean':
                        return <SimpleCheckboxMemo
                            campo={tipo[0]}
                            cliente={datosNuevos}
                            setCliente={setDatosNuevos}
                            original={datos}
                            key={key}
                        />
                    case 'object': {
                        if (tipo[0] === "formularioDialog") {
                            return <GeneradorDeArrayTablaFormulario2
                                arrayLista={datosNuevos[tipo[0]]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo[0]}
                                titulo={obtenerPrimerAtributo(datosNuevos[tipo[0]])}
                                key={key} />
                        } else {
                            return <GeneradorDeArrayTablaFormulario
                                arrayLista={datosNuevos[tipo[0]]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo[0]}
                                titulo={obtenerPrimerAtributo(datosNuevos[tipo[0]])}
                                key={key} />
                        }

                    }
                    case 'array': {
                        if (identificarTipo(datos[tipo[0]]) === "simple") {
                            return <SimpleChipsMemo
                                campo={tipo[0]}
                                cliente={datosNuevos}
                                setCliente={setDatosNuevos}
                                original={datos}
                                key={key}
                            />
                        } else {
                            if (identificarTipo(datosNuevos[tipo[0]]) === "compuesto") {
                                return <GeneradorDeArrayTablaFormulario
                                    arrayLista={datosNuevos[tipo[0]]}
                                    setPropiedad={setDatosNuevos}
                                    tipo={tipo[0]}
                                    titulo={"header"}
                                    key={key} />

                            }
                        }
                    }
                    default:
                        return null;
                }
            })}
            <Button label="Registrar Cambios Datos"
                onClick={(e) => { e.preventDefault(), registrarCambio() }} />
        </div>
    </React.Fragment>)
}
export default VistasDatos