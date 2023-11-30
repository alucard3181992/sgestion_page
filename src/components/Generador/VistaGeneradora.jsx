import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import { Funciones } from "../Tabla/Funciones";
import RenderizarCheckbox, { SimpleCheckbox } from "../Tabla/Checkbox";
import { SimpleInputTexto } from "../Tabla/InputText";
import { CodigoGenerador } from "./CodigoGenerador";
import RenderizarChips, { SimpleChips } from "../Tabla/Chips";

const VistaGeneradora = () => {

    const [cli, setCli] = useState([])


    const [seleccionBoleano, setSeleccionBoleano] = useState({
        tablaResponsiva: false,
        tablaColumnasDiferentes: true,
        expansion: true,
        header: true,
        borrarMasivo: true,
        añadir: true,
        modificar: true,
        ver: true,
        borrar: true,
    })
    const [datosArchivo, setDatosArchivo] = useState({
        NombreArchivo: "",
        NombreFuncion: "",
        NombreContext: "",
        ListaPrincipal: "",
    })

    const [seleccionTexto, setSeleccionTexto] = useState({
        tablaTitulo: "Registro de Usuarios",
        tablaOrden: "idu",
        tipoDeSeleccion: "multiple",
        tituloExpansion: "Expandir",
        listaExpansion: "persona",
    })
    const seleccionAMVB = {
        borrarMasivo: { visible: seleccionBoleano.borrarMasivo, funcion: "eliminarMasivo" },
        añadir: { visible: seleccionBoleano.añadir, funcion: "hola" },
        modificar: { visible: seleccionBoleano.modificar, funcion: "buscar" },
        ver: { visible: seleccionBoleano.ver, funcion: "mostrar" },
        borrar: { visible: seleccionBoleano.borrar, funcion: "eliminarIndividual" },
    }
    const columnaAdicional = [
        { header: "Modificar2", icon: "pi pi-pencil", generarHandler: "(data) => () => buscar(data)", dialog: "setFormulario", severity: "success" },
        { header: "Modificar3", icon: "pi pi-print", generarHandler: "(data, e, icon) => () => modificar(data, e, icon)", dialog: "setFormulario", severity: "danger" },
    ]
    const [seleccionArray, setSeleccionArray] = useState({
        columnasDeBusqueda: [],
        tablaArray: [],
    })
    const [seleccionFormularioDialog, setSeleccionFormularioDialog] = useState({
        formularioDialog: {
            principal: { formulario: "formulario", setFormulario: "setFormulario" },
            secundario: { formulario: "vacio", setFormulario: "vacio" }
        }
    })
    const generarArchivo = () => {
        const seleccionArrayNumerico = {
            ...seleccionArray,
            tablaArray: seleccionArray.tablaArray.map(Number),
        };

        CodigoGenerador(seleccionBoleano, seleccionAMVB, seleccionArrayNumerico, datosArchivo, columnaAdicional);

    }
    const [formularios, setFormularios] = useState([
        { titulo: "principal", formulario: "formulario1", setFormulario: "setFormulario1", key: 'principal', },
        { titulo: "secundario", formulario: "formulario2", setFormulario: "setFormulario2", key: 'secundario', }
    ]);
    const [nuevoFormulario, setNuevoFormulario] = useState("");

    const handleInputChange = (key, campo, valor) => {
        setFormularios(prevFormularios => {
            const nuevosFormularios = [...prevFormularios];
            const index = nuevosFormularios.findIndex(f => f.key === key);
            nuevosFormularios[index][campo] = valor;
            return nuevosFormularios;
        });
    };

    const handleEliminarFormulario = (key) => {
        setFormularios(prevFormularios => prevFormularios.filter(f => f.key !== key));
    };

    const handleAgregarFormulario = () => {
        if (nuevoFormulario.trim() !== "") {
            const nuevoFormularioObj = {
                formulario: `formulario${formularios.length + 1}`,
                setFormulario: `setFormulario${formularios.length + 1}`,
                titulo: nuevoFormulario,
                key: Date.now().toString(),
            };
            setFormularios(prevFormularios => [...prevFormularios, nuevoFormularioObj]);
            setNuevoFormulario("");
        }
    };
    // cambioValores campo, valor, setCli, setCliente, cliente, cli
    //checkbox campo, valor, e, setCli, setCliente, cliente, cli
    return (
        <div>
            <h2>Editor de Configuración</h2>
            <div>
                {formularios.map((formulario, campo) => (
                    <div key={formulario.key} className="grid">
                        {Object.keys(formulario).map((campo, index) => (campo !== "key" ?
                            <div className="col-3" key={campo}>
                                <span className="p-float-label font-bold mb-5" >
                                    <InputText

                                        value={formulario[campo]}
                                        onChange={(e) => handleInputChange(formulario.key, campo, e.target.value)}
                                    />
                                    <label>{campo}: </label>
                                </span>
                            </div>
                            :
                            <div className="col-3" key={campo}>
                                <span className="p-float-label font-bold mb-5" >
                                    <Button
                                        key={campo}
                                        label="ELIMINAR"
                                        onClick={() => handleEliminarFormulario(formulario.key)}
                                        className="w-full"
                                    />
                                </span>
                            </div>
                        ))}
                        {/* <input
                            value={formulario.titulo}
                            onChange={(e) => handleInputChange(formulario.key, 'titulo', e.target.value)}
                        />
                        <input
                            value={formulario.formulario}
                            onChange={(e) => handleInputChange(formulario.key, 'formulario', e.target.value)}
                        />
                        <input
                            value={formulario.setFormulario}
                            onChange={(e) => handleInputChange(formulario.key, 'setFormulario', e.target.value)}
                        />

                        <button onClick={() => handleEliminarFormulario(formulario.key)}>
                            Eliminar
                        </button> */}
                    </div>
                ))}
                <div>
                    <input
                        placeholder="Nuevo formulario"
                        value={nuevoFormulario}
                        onChange={(e) => setNuevoFormulario(e.target.value)}
                    />
                    <button onClick={handleAgregarFormulario}>
                        Agregar Formulario
                    </button>
                </div>
            </div>
            {Object.keys(seleccionBoleano).map((campo, index) => (
                <SimpleCheckbox
                    campo={campo}
                    cli={cli}
                    cliente={seleccionBoleano}
                    setCli={setCli}
                    setCliente={setSeleccionBoleano}
                    key={index} />
            ))}
            {Object.keys(datosArchivo).map((campo, index) => (
                <SimpleInputTexto
                    campo={campo}
                    cli={cli}
                    cliente={datosArchivo}
                    setCli={setCli}
                    setCliente={setDatosArchivo}
                    key={index} />
            ))}
            {Object.keys(seleccionTexto).map((campo, index) => (
                <SimpleInputTexto
                    campo={campo}
                    cli={cli}
                    cliente={seleccionTexto}
                    setCli={setCli}
                    setCliente={setSeleccionTexto}
                    key={index} />
            ))}
            {Object.keys(seleccionArray).map((campo, index) => (
                <SimpleChips
                    campo={campo}
                    cli={cli}
                    cliente={seleccionArray}
                    setCli={setCli}
                    setCliente={setSeleccionArray}
                    key={index} />
            ))}
            <Button label="Generar Archivo" onClick={generarArchivo} />
        </div>
    );
};

export default VistaGeneradora;
