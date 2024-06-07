import React, { useState, useEffect, useCallback } from "react";
import { GeneradorDeArrayTablaFormulario } from "./FuncionesGeneradora";
import { Button } from "primereact/button";

export function RenderizarCampos({ campos, setCamposFormulario, titulo }) {
    //console.log("A LA CHINGADA DE NUEVO RENDERIZAR CAMPOS");

    const [bloqueo, setBloqueo] = useState(true)
    const [datosNuevos, setDatosNuevos] = useState(null)
    const [cambios, setCambios] = useState(false)

    useEffect(() => {
        if (campos) {
            setDatosNuevos(campos)
            setBloqueo(false)
        }
    }, [campos])

    useEffect(() => {
        if (JSON.stringify(campos) === JSON.stringify(datosNuevos)) {
            setCambios(false)
        } else {
            setCambios(true)
        }
    }, [datosNuevos, campos])

    const registrarCambio = () => {
        const datos = [{
            ...datosNuevos
        }]
        setCamposFormulario(datos)
    }

    return (<React.Fragment>
        {/* <div className="mb3">{JSON.stringify(campos)}</div>
        <div className="mb3">cambiojshfjgdfggj</div>
        <div className="mb3">{JSON.stringify(datosNuevos)}</div> */}
        <div className={cambios ? "mb-3 card check" : "mb-3 card"} >
            <div className={cambios ? "mb-5 font-bold text-red-600" : "mb-5 font-bold"} >{cambios ? titulo + " (Datos sin Guardar)" : titulo}</div>
            {bloqueo ? "Cargando La lista ...." :
                Object.keys(datosNuevos).map((tipo, key) => {
                    switch (tipo) {
                        case 'id':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"label"} />

                        case 'texto':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"label"} />
                        case 'checkbox':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"etiqueta"} />

                        case 'radiobutton':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"etiqueta"} />
                                
                        case 'fecha':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"label"} />

                        case 'listas':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"etiqueta"} />

                        case 'imagen':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"label"} />

                        case 'chips':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"etiqueta"} />


                        case 'toggleButton':
                            return <GeneradorDeArrayTablaFormulario
                                key={key}
                                arrayLista={datosNuevos[tipo]}
                                setPropiedad={setDatosNuevos}
                                tipo={tipo}
                                titulo={"etiqueta"} />

                        default:
                            return null;
                    }
                })}
            <Button label="Registrar Cambios Formulario"
                onClick={(e) => { e.preventDefault(), registrarCambio() }} />
        </div>
    </React.Fragment>)
}




