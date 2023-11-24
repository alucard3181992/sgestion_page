import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import { Funciones } from "../Tabla/Funciones";
import RenderizarCheckbox, { SimpleCheckbox } from "../Tabla/Checkbox";
import { SimpleInputTexto } from "../Tabla/InputText";
import { CodigoGenerador } from "./CodigoGenerador";

const VistaGeneradora = (props) => {
    const [formulario, setFormulario] = useState(false)
    const { empresa,
        usuarios,
        roles,
        nuevo,
        modificar,
        editar,
        cerrarFormulario,
        registro,
        setRegistro,
        mostrar,
        eliminarMasivo,
        eliminarIndividual,
    } = props

    function buscar() {

    }
    const [cli, setCli] = useState([])
    const [lista, setLista] = useState([])
    const [datos, setDatos] = useState({
        tablaTitulo: "Registro de Usuarios",
        tablaResponsiva: false,
        tablaColumnasDiferentes: true,
        tablaOrden: "idu",
        tablaOrdenNumero: 1,
        // ... otras propiedades
    });

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
        borrarMasivo: { visible: seleccionBoleano.borrarMasivo, funcion: eliminarMasivo },
        añadir: { visible: seleccionBoleano.añadir, funcion: "hola" },
        modificar: { visible: seleccionBoleano.modificar, funcion: buscar },
        ver: { visible: seleccionBoleano.ver, funcion: mostrar },
        borrar: { visible: seleccionBoleano.borrar, funcion: eliminarIndividual },
    }
    const columnaAdicional = [
        { header: "Modificar2", icon: "pi pi-pencil", generarHandler: (data) => () => buscar(data), dialog: setFormulario, severity: "success" },
        { header: "Modificar3", icon: "pi pi-print", generarHandler: (data, e, icon) => () => modificar(data, e, icon), dialog: setFormulario, severity: "danger" },
    ]

    const handleChange = (e, prop) => {

        const { value, checked } = e.target
        const valor = value || checked
        console.log("VALOR ES", valor);
        setDatos((prevDatos) => ({
            ...prevDatos,
            [prop]: valor,
        }));
    };

    const generarArchivo = () => {
        CodigoGenerador(seleccionBoleano, seleccionAMVB, datosArchivo, columnaAdicional)
    }
    // cambioValores campo, valor, setCli, setCliente, cliente, cli
    //checkbox campo, valor, e, setCli, setCliente, cliente, cli
    return (
        <div>
            <h2>Editor de Configuración</h2>
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
            <Button label="Generar Archivo" onClick={generarArchivo} />
        </div>
    );
};

export default VistaGeneradora;
