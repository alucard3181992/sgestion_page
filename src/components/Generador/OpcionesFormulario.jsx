import React, { useState, useEffect, useMemo } from "react";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";

import { FuncionesGenerador } from "./FuncionesGeneradora";
import { Funciones } from "../Tabla/Funciones";
import { BotonEliminar, Header2 } from "./FuncionesGeneradora";

export function visualizarOpciones(setPropiedad, data, campo, tipo, index) {
    const value = data && data[campo];
    return (
        <><Button icon="pi pi-refresh"
            rounded text raised
            onClick={(e) => { e.preventDefault(), cambioOpciones(value, setPropiedad, campo, tipo, index) }}
            tooltip="Cambiar de Tipo" tooltipOptions={{ position: "top" }}
        />
            {Array.isArray(value) ? tablaDeOpciones(setPropiedad, tipo, value, campo, index) :
                <InputTextarea
                    type="text"
                    value={value}
                    onChange={(e) => { e.preventDefault(), FuncionesGenerador.registrarCambio2(setPropiedad, data.key, campo, e.target.value, tipo) }}
                    className="w-full"
                />}
        </>
    )
}

function cambioOpciones(value, setPropiedad, campo, tipo, index) {
    /* const cam = { value, setPropiedad, campo, tipo, index }
    console.log("VALUE ES", cam) */
    if (Array.isArray(value)) {
        setPropiedad(prevFormularios => {
            const nuevosFormularios = [...prevFormularios];
            nuevosFormularios[0][tipo][index][campo] = `Funciones.convierteListas("entidad", "valor", "atributo1", "atributo2")`;
            return nuevosFormularios;
        })
    } else {
        const nuevaColeccion = [{ label: 'Creado', valor: 'Valor', key: Date.now().toString() }]
        setPropiedad(prevFormularios => {
            const nuevosFormularios = [...prevFormularios];
            nuevosFormularios[0][tipo][index][campo] = nuevaColeccion;
            return nuevosFormularios;
        })
    }
}
function tablaDeOpciones(setPropiedad, tipo, value, campo, index) {
    //console.log("ES UN ARRAY");
    let columns
    if (value.length) {
        columns = FuncionesGenerador.generateColumns(value[0])
    } else {

    }
    return (
        <DataTable
            value={value}
            emptyMessage="Lista Vacia!!!"
            header={value.length ?
                <Header2
                    setPropiedad={setPropiedad} campo={campo} index={index} titulo={"label"} tipo={tipo} objeto={value[0]} /> : ""}
        >{value.length && columns.map((col, i) => {
            switch (col.header) {
                case "Key":
                    return (
                        <Column key={col.field} header={col.header} body={(data =>
                            <BotonEliminar setPropiedad={setPropiedad} data={data}
                                funcion={"FuncionesGenerador.eliminarFormulario3(setPropiedad, data.key, tipo, campo, index)"} tipo={tipo} campo={campo} index={index} size={"small"} />
                        )} />
                    )
                default:
                    return (
                        < Column
                            key={col.field}
                            field={col.field}
                            header={col.header}
                            editor={(data) => textEditor3(setPropiedad, data, campo, col.field, tipo, index, data.rowIndex)}
                        />)
            }
        })}
        </DataTable>)
}
function textEditor3(setPropiedad, data, campo, campo2, tipo, index, indexCampo) {
    //console.log("CAMPO ", campo);
    return <InputText
        type="text"
        value={data.value}//setPropiedad, campo, valor, tipo, index, indexCampo
        onChange={(e) => { e.preventDefault(), FuncionesGenerador.registrarCambio3(setPropiedad, campo, campo2, e.target.value, tipo, index, indexCampo) }}
    />
}