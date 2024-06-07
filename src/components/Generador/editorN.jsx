import React, { useState, useEffect } from "react";

import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { SimpleInputTexto } from "../Tabla/InputText";
import { SimpleCheckbox } from "../Tabla/Checkbox";
import { SimpleChips } from "../Tabla/Chips";
import { InputTextarea } from "primereact/inputtextarea";

import { FuncionesGenerador } from './FuncionesGeneradora';
import { Funciones } from "../Tabla/Funciones";

function GeneradorDeArrayTablaFormulario2({ setPropiedad, titulo, arrayLista, tipo }) {
    const data = Object.keys(arrayLista).map(key => ({ titulo: key, ...arrayLista[key] }));
    const columns = data.length ? FuncionesGenerador.generateColumns(data[0]) : null
    const data2 = Object.keys(arrayLista).map(key => arrayLista[key]);
    return (<>
        {columns &&
            <DataTable
                value={data}
                emptyMessage={"Sin Datos"}
                header={columns && <Header3 objeto={data2[0]} setPropiedad={setPropiedad}
                    tipo={tipo} />}
                editMode="cell"
                className="mb-5"
            >
                {columns && columns.map((col, i) => {
                    switch (col.header) {
                        case "Key":
                            return (
                                <Column key={col.field} header={col.header} body={(data =>
                                    <BotonEliminar setPropiedad={setPropiedad} data={data}
                                        funcion={"eliminarFormulario2Especial(setPropiedad, data.key, tipo, data.titulo)"} tipo={tipo} />
                                )} />
                            )
                        case "Titulo":
                            return (
                                <Column
                                    key={col.field}
                                    field={col.field}
                                    header={col.header}
                                />
                            )
                        // Agregar casos para otros encabezados especiales según sea necesario
                        default:
                            return (
                                <Column
                                    key={col.field}
                                    field={col.field}
                                    header={col.header}
                                    editor={(data) => textEditorN2(setPropiedad, arrayLista, data, col.field, tipo, data.rowIndex)}
                                />
                            )
                    }
                })}
            </DataTable>
        }
    </>)
}
function BotonEliminar(props) {
    const { setPropiedad, data, funcion, tipo, campo, index, size } = props
    return (
        <Button
            label="ELIMINAR"
            onClick={(e) => {
                e.preventDefault(),
                    eval(funcion)
            }}
            className="w-full"
            severity="danger"
            size={size}
        />
    )
}

function Header3({ setPropiedad, objeto, tipo, }) {
    const [nuevoTitulo, setNuevoTitulo] = useState("")
    return (
        <React.Fragment>
            <div className="flex gap-2">
                <div className="centro-total">
                    {tipo && <span className="p-tag">{Funciones.formatearCadena(tipo)}</span>}
                </div>
                <span className="p-input-icon-left">
                    <i className="pi pi-plus" />
                    <InputText
                        type="search"
                        placeholder="Nuevo campo"
                        value={nuevoTitulo}
                        onChange={(e) => setNuevoTitulo(e.target.value)}
                        className="w-full"

                    />
                </span>
                <Button
                    label="Nuevo"
                    onClick={(e) => {
                        e.preventDefault(),
                            agregarNuevoObjeto(nuevoTitulo, setNuevoTitulo, setPropiedad, objeto, tipo)
                    }} />

            </div>
        </React.Fragment>
    )
}
function textEditorN2(setPropiedad, propiedad, data, campo, tipo, index) {
    const titulo = data && data.rowData && data.rowData.titulo
    return <InputText
        type="text"
        value={data.value}
        onChange={(e) => {
            e.preventDefault()
            data.editorCallback(e.target.value)
            registrarCambio2(setPropiedad, titulo, campo, e.target.value, tipo)
        }}
    />
}
function agregarNuevoObjeto(nuevoTitulo, setNuevoTitulo, setPropiedad, objeto, tipo) {
    setPropiedad((prevDatosC1) => {
        const nuevoFormularioDialog = {
            ...prevDatosC1[tipo],
            [nuevoTitulo]: {
                ...objeto,
                key: nuevoTitulo,
            },
        };

        return {
            ...prevDatosC1,
            [tipo]: nuevoFormularioDialog,
        }
    })
    setNuevoTitulo("")
}
function registrarCambio2(setPropiedad, titulo, campo, valor, tipo) {
    const camp = { setPropiedad, titulo, campo, valor, tipo }
    setPropiedad(prevFormularios => {
        const nuevosFormularios = { ...prevFormularios };
        if (campo === "titulo") {
            return nuevosFormularios
        } else {
            nuevosFormularios[tipo][titulo][campo] = valor;
            return nuevosFormularios
        }

    })
}
function eliminarFormulario2Especial(setPropiedad, key, tipo, titulo) {
    const camp = { setPropiedad, key, tipo, titulo }
    setPropiedad((prevDatosC1) => {
        const nuevoFormularioDialog = { ...prevDatosC1[tipo] };
        if (key in nuevoFormularioDialog) {
            delete nuevoFormularioDialog[key];
        }
        return {
            ...prevDatosC1,
            [tipo]: nuevoFormularioDialog,
        }
    })
}

export { GeneradorDeArrayTablaFormulario2 };
