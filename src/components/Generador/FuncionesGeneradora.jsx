import React, { useState, useEffect, useMemo } from "react";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";

import { Funciones } from "../Tabla/Funciones";
import { visualizarOpciones } from "./OpcionesFormulario";
export const FuncionesGenerador = {
    agregarFormulario(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto) {
        if (nuevoTitulo !== "") {
            const nuevoFormularioObj = {
                ...objeto,
                [titulo]: nuevoTitulo,
                key: Date.now().toString(),
            };
            setPropiedad(prevFormularios => [...prevFormularios, nuevoFormularioObj]);
            setNuevoTitulo("");
        }
    },
    eliminarFormulario(setPropiedad, key) {
        setPropiedad(prevFormularios => prevFormularios.filter(f => f.key !== key));
    },
    registrarCambio(setPropiedad, key, campo, valor, index) {
        setPropiedad(prevFormularios => {
            const nuevosFormularios = [...prevFormularios];
            //const index = nuevosFormularios.findIndex(f => f.key === key);
            nuevosFormularios[index][campo] = valor;
            return nuevosFormularios;
        });
    },
    agregarFormulario2(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto, tipo) {
        if (nuevoTitulo !== "") {
            setPropiedad(prevFormularios => {
                const formularioExistente = Array.isArray(prevFormularios) ? prevFormularios.find(formulario => formulario[tipo]) : null;
                // Si encontramos el formulario, agregar el nuevo elemento al tipo
                if (formularioExistente) {
                    // Añadir la lógica para generar key aleatorio de 6 dígitos a cada opción si existe
                    const opcionesConKey = objeto.opciones && Array.isArray(objeto.opciones) ? objeto.opciones.map(opcion => ({ ...opcion, key: `${Math.floor(100000000 + Math.random() * 900000000)}` })) : objeto.opciones;

                    formularioExistente[tipo].push({
                        ...objeto,
                        [titulo]: nuevoTitulo,
                        key: Date.now().toString(),
                        opciones: opcionesConKey,
                    });
                } else {
                    prevFormularios[tipo].push({
                        ...objeto,
                        [titulo]: nuevoTitulo,
                        key: Date.now().toString(),
                    });
                }

                return Array.isArray(prevFormularios) ? [...prevFormularios] : { ...prevFormularios }  // olver el nuevo array de formularios
            });

            setNuevoTitulo("");
        }
    },
    eliminarFormulario2(setPropiedad, key, tipo) {
        setPropiedad(prevFormularios => {
            const array = Array.isArray(prevFormularios)
            if (array) {
                return prevFormularios.map(formulario => {
                    // Si el formulario tiene el tipo y el key, eliminamos ese elemento
                    if (formulario[tipo] && formulario[tipo].some(elemento => elemento.key === key)) {
                        formulario[tipo] = formulario[tipo].filter(elemento => elemento.key !== key);
                    }
                    return formulario;
                })
            } else {
                // Si no es un array, es un objeto y eliminamos el objeto con la clave correspondiente
                if (prevFormularios[tipo] && prevFormularios[tipo].some(elemento => elemento.key === key)) {
                    prevFormularios[tipo] = prevFormularios[tipo].filter(elemento => elemento.key !== key);
                    console.log("SI ENTRO");
                }
                return { ...prevFormularios };
            }
        })
    },
    registrarCambio2(setPropiedad, key, campo, valor, tipo) {
        const camp = { setPropiedad, key, campo, valor, tipo }
        //console.log(camp);
        setPropiedad(prevFormularios => {
            const array = Array.isArray(prevFormularios)
            if (array) {
                const nuevosFormularios = [...prevFormularios];
                const index = nuevosFormularios[0][tipo].findIndex(f => f.key === key);
                nuevosFormularios[0][tipo][index][campo] = valor;
                return nuevosFormularios;
            } else {
                const nuevosFormularios = { ...prevFormularios };
                if (Array.isArray(nuevosFormularios[tipo])) {
                    const index = nuevosFormularios[tipo].findIndex(f => f.key === key);
                    nuevosFormularios[tipo][index][campo] = valor;
                    return nuevosFormularios
                } else {
                    nuevosFormularios[tipo][campo] = valor;
                    return nuevosFormularios
                }

            }

        })
    },
    registrarCambioCheckbox2(setPropiedad, campo, valor, tipo, index) {
        setPropiedad(prevFormularios => {
            const array = Array.isArray(prevFormularios)
            if (array) {
                const nuevosFormularios = [...prevFormularios];
                nuevosFormularios[0][tipo][index][campo] = valor;
                return nuevosFormularios;
            } else {
                const nuevosFormularios = { ...prevFormularios };
                if (Array.isArray(nuevosFormularios[tipo])) {
                    nuevosFormularios[tipo][index][campo] = valor;
                    return nuevosFormularios
                } else {
                    nuevosFormularios[tipo][campo] = valor;
                    return nuevosFormularios
                }

            }

        })
    },
    agregarFormulario3(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto, tipo, campo, index) {
        if (nuevoTitulo !== "") {
            setPropiedad(prevFormularios => {
                // Buscar el formulario correspondiente en prevFormularios
                const formularioExistente = prevFormularios.find(formulario => formulario[tipo].find(formulario2 => formulario2[campo]));

                // Si encontramos el formulario, agregar el nuevo elemento al tipo
                if (formularioExistente) {
                    return prevFormularios.map(formulario => {
                        if (formulario === formularioExistente) {
                            return {
                                ...formulario,
                                [tipo]: formulario[tipo].map((element, idx) => idx === index ? {
                                    ...element,
                                    [campo]: [
                                        ...element[campo],
                                        {
                                            ...objeto,
                                            [titulo]: nuevoTitulo,
                                            key: Date.now().toString(),
                                        }
                                    ]
                                } : element)
                            };
                        } else {
                            return formulario;
                        }
                    });
                }
                return [...prevFormularios];
            });

            setNuevoTitulo("");
        }
    },

    eliminarFormulario3(setPropiedad, key, tipo, campo, index) {
        const cam = { setPropiedad, key, tipo, campo, index }
        setPropiedad(prevFormularios => {
            return prevFormularios.map(formulario => {

                // Si el formulario tiene el tipo y el key, eliminamos ese elemento
                if (formulario[tipo] && formulario[tipo][index][campo].some(elemento => elemento.key === key)) {
                    formulario[tipo][index][campo] = formulario[tipo][index][campo].filter(elemento => elemento.key !== key);
                }
                return formulario;
            })
        })
    },
    registrarCambio3(setPropiedad, campo, campo2, valor, tipo, index, indexCampo) {
        setPropiedad(prevFormularios => {
            const nuevosFormularios = [...prevFormularios];

            // Buscar el formulario correspondiente en prevFormularios
            const formularioExistente = nuevosFormularios.find(formulario => formulario[tipo][index] && formulario[tipo][index][campo] && formulario[tipo][index][campo][indexCampo]);

            // Si encontramos el formulario, realizar el cambio en el campo correspondiente
            if (formularioExistente) {
                formularioExistente[tipo][index][campo][indexCampo][campo2] = valor;
            }

            return nuevosFormularios;
        });
    },
    generateColumns(obj) {
        return Object.entries(obj).map(([key, value]) => ({ field: key, header: key.charAt(0).toUpperCase() + key.slice(1), value: value }));
    },


}

function Header({ setPropiedad, titulo, objeto, tipo }) {
    const [nuevoTitulo, setNuevoTitulo] = useState("")

    return (
        <React.Fragment>
            <div className="flex flex-wrap gap-2">
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
                        className="w-full" />
                </span>
                {tipo === undefined ? <Button
                    label="Agregar Nuevo"
                    onClick={(e) => {
                        e.preventDefault()
                        FuncionesGenerador.agregarFormulario(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto)
                    }} />
                    :
                    <Button
                        label="Agregar Nuevo Tabla"
                        onClick={(e) => {
                            e.preventDefault()
                            FuncionesGenerador.agregarFormulario2(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto, tipo)
                        }} />}
            </div>
        </React.Fragment>
    )
}


export function Header2({ setPropiedad, titulo, objeto, tipo, campo, index }) {
    const [nuevoTitulo, setNuevoTitulo] = useState("")
    //let nuevoTitulo
    return (
        <React.Fragment>
            <div className="flex gap-2">
                <span className="p-input-icon-left">
                    <i className="pi pi-plus" />
                    <InputText
                        type="search"
                        placeholder="Nuevo campo"
                        value={nuevoTitulo}
                        onChange={(e) => setNuevoTitulo(e.target.value)}
                        className="w-full p-inputtext-sm "

                    />
                </span>
                <Button
                    label="Nuevo"
                    onClick={(e) => {
                        e.preventDefault(),
                            FuncionesGenerador.agregarFormulario3(nuevoTitulo, setNuevoTitulo, setPropiedad, titulo, objeto, tipo, campo, index)
                    }}
                    size="small"
                    severity="info" />

            </div>
        </React.Fragment>
    )
}

export function BotonEliminar(props) {
    //console.log("HOLA SI ME LLAMAN", props);
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

export function GeneradorDeArrayTabla({ setPropiedad, titulo, arrayLista }) {
    const columns = FuncionesGenerador.generateColumns(arrayLista[0])
    return (<DataTable
        value={arrayLista}
        //header={header(setPropiedad, titulo, arrayLista[0])}
        header={<Header setPropiedad={setPropiedad} objeto={arrayLista[0]} titulo={titulo} />}
    >
        {columns.map((col, i) => (col.header === "Key" ?
            <Column key={col.field} header={col.header} body={(data =>
                <BotonEliminar setPropiedad={setPropiedad} data={data}
                    funcion={"FuncionesGenerador.eliminarFormulario(setPropiedad, data.key)"} />
            )} />

            : (col.header === "Icon" ?
                <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    body={(data) => <div className="flex  gap-2">
                        <div className="centro-total">
                            <i className={data.icon} />
                        </div><span>{data.icon}</span>
                    </div>}
                    editor={(data) => textEditor(setPropiedad, data, col.field, data.rowIndex)} />
                :
                <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    editor={(data) => textEditor(setPropiedad, data, col.field, data.rowIndex)} />
            )))}
    </DataTable>)

}
export function GeneradorDeArrayTablaFormulario({ setPropiedad, titulo, arrayLista, tipo }) {
    useEffect(() => {

    }, [])
    const lista = Array.isArray(arrayLista)
    const contiene = lista ? arrayLista.length : null
    const columns = lista ? contiene !== 0 ? FuncionesGenerador.generateColumns(arrayLista[0]) : null : FuncionesGenerador.generateColumns(arrayLista)
    return (<>
    {columns && 
        <DataTable
            value={Array.isArray(arrayLista) ? arrayLista : [arrayLista]}
            //header={header(setPropiedad, titulo, arrayLista[0], tipo)}
            header={Array.isArray(arrayLista) ? <Header setPropiedad={setPropiedad} objeto={arrayLista[0]} titulo={titulo} tipo={tipo} />
                : <span className="p-tag">{Funciones.formatearCadena(tipo)}</span>
            }
            className="mb-5"
            emptyMessage="Sin Datos Disponibles"
        >
            {columns.map((col, i) => {
                switch (col.header) {
                    case "Opciones":
                        return (
                            <Column
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                body={(data, index) => visualizarOpciones(setPropiedad, data, col.field, tipo, index.rowIndex)}
                            />
                        )
                    case "Requerido":
                        return (
                            <Column
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                editor={(data) => checkboxEditor2(setPropiedad, arrayLista, data.rowIndex, col.field, tipo)}
                            />
                        )
                    case "Telefono":
                        return (
                            <Column
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                editor={(data) => checkboxEditor2(setPropiedad, arrayLista, data.rowIndex, col.field, tipo)}
                            />
                        )
                    case "Visible":
                        return (
                            <Column
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                editor={(data) => checkboxEditor2(setPropiedad, arrayLista, data.rowIndex, col.field, tipo)}
                            />
                        )
                    case "Key":
                        return (
                            <Column key={col.field} header={col.header} body={(data =>
                                <BotonEliminar setPropiedad={setPropiedad} data={data}
                                    funcion={"FuncionesGenerador.eliminarFormulario2(setPropiedad, data.key, tipo)"} tipo={tipo} />
                            )} />
                        )
                    // Agregar casos para otros encabezados especiales según sea necesario
                    default:
                        return (
                            <Column
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                editor={(data) => textEditor2(setPropiedad, arrayLista, data, col.field, tipo, data.rowIndex)}
                            />
                        )
                }
            })}
        </DataTable>
    }</>)

}

function textEditor(setPropiedad, data, campo, index) {
    const key = data && data.rowData && data.rowData.key
    return <InputText
        type="text"
        value={data.value}
        onChange={(e) => FuncionesGenerador.registrarCambio(setPropiedad, key, campo, e.target.value, index)}
    />
}

function textEditor2(setPropiedad, propiedad, data, campo, tipo, index) {
    const camp = { setPropiedad, data, campo, tipo }
    const key = data && data.rowData && data.rowData.key
    return <InputText
        type="text"
        //value={data.value}
        defaultValue={data.value}
        onBlur={(e) => { e.preventDefault(), FuncionesGenerador.registrarCambio2(setPropiedad, key, campo, e.target.value, tipo) }}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                FuncionesGenerador.registrarCambio2(setPropiedad, key, campo, e.target.value, tipo)
            }
        }}
    />
}

function checkboxEditor2(setPropiedad, propiedad, index, campo, tipo) {
    //console.log("CHEckBOX", propiedad);
    return <Checkbox
        checked={Array.isArray(propiedad) ? propiedad[index][campo] : propiedad[campo]}
        onChange={(e) => { e.preventDefault(), FuncionesGenerador.registrarCambioCheckbox2(setPropiedad, campo, e.checked, tipo, index) }}
    />
}

export function analizarObjeto(objeto) {
    //console.log("ME LLAMAN UNA SOLA VEZ ANALIZAR OBJETO");
    const resultado = {};

    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            const tipo = typeof objeto[clave];
            if (Array.isArray(objeto[clave])) {
                resultado[clave] = 'array'
            } else if (tipo === 'object') {
                resultado[clave] = 'object'
            } else {
                resultado[clave] = tipo;

            }
        }
    }
    return resultado
}