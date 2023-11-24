import React, { useEffect, useState, useRef } from 'react';

import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Messages } from 'primereact/messages';

import { Funciones } from './Funciones';

//prueba de componentes
import RenderizarInputTexto from './InputText';
import RenderizarCheckbox from './Checkbox';
import RenderizarRadiobutton from './RadioButton';
import RenderizarFecha from './Fechas';
import RenderizarDropdownLista from './DropdowLista';
import RenderizarImagen from './ImagenFormulario';
import RenderizarChips from './Chips';
import RenderizarToggleButton from './ToggleButton';

function VistaFormulario({ formulario, setFormulario, datosFormulario, datosCliente }) {

    const [telefonosOriginales, setTelefonosOriginales] = useState([])
    const [cliente, setCliente] = useState(null)
    const [cli, setCli] = useState([])
    const msgs = useRef(null);

    useEffect(() => {
        if (formulario) {
            if (!datosCliente) {
                const clienteVacio = datosFormulario.campos.reduce((acc, tipo) => {
                    Object.keys(tipo).forEach((key) => {
                        tipo[key].forEach((campo) => {
                            switch (key) {
                                case "fecha": return acc[campo.value] = null
                                case "imagen": return acc[campo.value] = null
                                case "checkbox": return acc[campo.value] = []
                                case "toggleButton": return acc[campo.value] = []
                                case "chips": return acc[campo.value] = []
                                case "id": return acc[campo.value] = null
                                default: return acc[campo.value] = ""
                            }
                        })
                    })
                    return acc;
                }, {})
                setCliente(clienteVacio)
            } else {
                const clienteVacio2 = datosFormulario.campos.reduce((acc, tipo) => {
                    Object.keys(tipo).forEach((key) => {
                        tipo[key].forEach((campo) => {
                            switch (key) {
                                case "fecha": return acc[campo.value] = Funciones.fechabien(Funciones.obtenerValorPropiedad(datosCliente, campo.value2))
                                case "imagen": return acc[campo.value] = Funciones.obtenerValorPropiedad(datosCliente, campo.value2)
                                case "checkbox": return acc[campo.value] = Funciones.obtenerChips(Funciones.obtenerValorPropiedad(datosCliente, campo.value2), campo.valor)
                                case "toggleButton": return acc[campo.value] = Funciones.obtenerChips(Funciones.obtenerValorPropiedad(datosCliente, campo.value2), campo.valor)
                                case "chips": {
                                    const valores = Funciones.obtenerChips(Funciones.obtenerValorPropiedad(datosCliente, campo.value2), campo.valor);
                                    if (campo.telefono) {
                                        //console.log("SOY UN PINCHE TELEFONO", campo.etiqueta);
                                        setTelefonosOriginales((prevTelefonosOriginales) => [
                                            ...prevTelefonosOriginales,
                                            { [campo.value]: valores }
                                        ]);
                                    }
                                    return acc[campo.value] = valores;
                                }
                                case "id": return acc[campo.value] = Funciones.obtenerValorPropiedad(datosCliente, campo.value2)
                                case "listas": return acc[campo.value] = Funciones.obtenerValorPropiedad(datosCliente, campo.value2)
                                default: return acc[campo.value] = Funciones.obtenerValorPropiedad(datosCliente, campo.value2)
                            }

                        })
                    })
                    return acc;
                }, {})
                setCliente(clienteVacio2)
            }
        }
        //console.log(clienteVacio2);
    }, [formulario])



    function cerrarFomrulario() {
        setFormulario(false)
        setTelefonosOriginales([])
        datosFormulario.cerrar()
        setCli([])

    }

    //creacion de la const q almacene los datos principales

    const clienteAyuda = datosFormulario.campos.reduce((acc, tipo) => {
        Object.keys(tipo).forEach((key) => {
            tipo[key].forEach((campo) => {
                acc[campo.value] = campo.label || campo.etiqueta;
            })
        })
        return acc;
    }, {})
    const clienteRequerido = datosFormulario.campos.reduce((acc, tipo) => {
        Object.keys(tipo).forEach((key) => {
            tipo[key].forEach((campo) => {
                acc[campo.value] = campo.requerido;
            })
        })
        return acc;
    }, {})



    const renderizarCampo = (campos) => {
        return (
            <form>
                {Object.keys(campos).map((tipo) => {
                    return campos[tipo].map((campo, index) => {
                        switch (tipo) {
                            case 'texto':
                                return <RenderizarInputTexto
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'checkbox':
                                return <RenderizarCheckbox
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'radiobutton':
                                return <RenderizarRadiobutton
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'fecha':
                                return <RenderizarFecha
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'listas':
                                return <RenderizarDropdownLista
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'imagen':
                                return <RenderizarImagen
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'chips':
                                return <RenderizarChips
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            case 'toggleButton':
                                return <RenderizarToggleButton
                                    campo={campo}
                                    cli={cli}
                                    setCli={setCli}
                                    cliente={cliente}
                                    setCliente={setCliente}
                                    key={index}
                                />
                            default:
                                return null;
                        }
                    });
                })}
            </form>
        )
    }

    const mensajeEstatico2 = (Sticky, Estado, Titulo, Mensaje, Vida) => {
        msgs.current.show({ sticky: Sticky, severity: Estado, summary: `${Titulo} `, detail: Mensaje, life: Vida })
    }

    const agregar = () => {
        const validacion = Funciones.validar(cliente, clienteRequerido, clienteAyuda, cli, setCli)
        if (validacion.isValid) {
            const resultadoComparacion = datosFormulario.telefono ? Funciones.compararTelefonos(cliente, telefonosOriginales) : "Nada"
            const datosValidos = ({
                ...cliente,
                "telefonos": resultadoComparacion
            })
            switch (datosFormulario.botonTitulo) {
                case "Editar":
                    datosFormulario.modificar(datosValidos)
                    break;
                case "Guardar":
                    datosFormulario.nuevo(datosValidos)
                    break;
                case "Mostrar":
                    setFormulario(false)
                    break;
                default:
                    break;
            }
        } else {
            mensajeEstatico2(false, "error", "********", validacion.mens.join(",\n"), 40000);
        }
    }

    const footer = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" severity='danger' onClick={cerrarFomrulario} />
            <Button label={datosFormulario.botonTitulo} icon="pi pi-check" onClick={agregar} />
        </React.Fragment>
    )


    //2023-11-17T04:00:00.000Z"
    return (<React.Fragment>

        {formulario && <Dialog
            header={datosFormulario.formularioTitulo + "(" + datosFormulario.botonTitulo + ")"}
            visible={formulario}
            style={{ width: '62rem' }}
            breakpoints={{ '960px': '75vw', '641px': '90vw' }}
            onHide={cerrarFomrulario}
            footer={footer}
            modal className="p-fluid"
        >
            <Messages ref={msgs} />
            {/* {JSON.stringify(cliente)}
            {JSON.stringify(cli)}
            {JSON.stringify(telefonosOriginales)} */}
            {datosFormulario.campos.map((campo, index) => (
                <div style={{ marginTop: 20 }} key={index}
                    className={datosFormulario.botonTitulo === "Mostrar" ? "intocable " : ""}
                >
                    {cliente && renderizarCampo(campo)}
                </div>
            ))}

        </Dialog>}
    </React.Fragment>)
}
export default function FormularioPrincipal({ formulario, setFormulario, datosFormulario, datosCliente }) {
    return (<>
        <VistaFormulario formulario={formulario} setFormulario={setFormulario}
            datosCliente={datosCliente} datosFormulario={datosFormulario}></VistaFormulario>
    </>)
}
