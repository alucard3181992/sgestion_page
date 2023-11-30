import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"
import { UsuarioContext } from "@/context/UsuarioContext"
import { Funciones } from "../Tabla/Funciones"
import VistaGeneradora from "../Generador/VistaGeneradora"

export default function VistaUsuario() {
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
        buscar,
        mostrar,
        eliminarMasivo,
        eliminarIndividual,
    } = useContext(UsuarioContext)

    function hola(mensaje) {
        console.log("HOLA MUNDO: ", mensaje)
    }


    const datos = {
        tablaTitulo: "Registro de Usuarios",
        tablaResponsiva: false,
        tablaColumnasDiferentes: true,
        tablaOrden: "idu",
        tablaOrdenNumero: 1,
        tablaFilas: 5,
        tablaArray: [5, 10, 15],
        tipoDeSeleccion: "multiple",
        expansion: true,
        tituloExpansion: "Expandir",
        listaExpansion: "persona",
        borrarMasivo: { visible: true, funcion: eliminarMasivo },
        "añadir": { visible: true, funcion: hola },
        modificar: { visible: true, funcion: buscar },
        ver: { visible: true, funcion: mostrar },
        borrar: { visible: true, funcion: eliminarIndividual },
        header: true,
        columnasDeBusqueda: ["idu", "sexo", "persona.nombre"],
        columnaAdicional: [
            { header: "Modificar2", icon: "pi pi-pencil", generarHandler: (data) => () => buscar(data), dialog: setFormulario, severity: "success" },
            { header: "Modificar3", icon: "pi pi-print", generarHandler: (data, e, icon) => () => modificar(data, e, icon), dialog: setFormulario, severity: "danger" },
        ],
        formularioDialog: {
            principal: { formulario: formulario, setFormulario: setFormulario },
            secundario: { formulario, setFormulario }
        },
        seleccion2: { id: "idu", estado: "estado", nom: "persona.nombre" },
        formulario: {
            formularioTitulo: "Administrar Usuarios",
            cerrar: cerrarFormulario,
            botonTitulo: registro,
            telefono: true,
            nuevo: nuevo,
            modificar: modificar,
            campos: [{
                id: [
                    { label: 'Identificador de Usuario', value: 'idu', value2: 'idu' },
                    { label: 'Identificador de Persona', value: 'idpe', value2: 'persona.idpe' },
                    /* { label: 'Identificador de Empresa', value: 'idem', value2: 'empresa.idem' }, */
                    // Otros campos de tipo texto
                ],
                texto: [
                    { label: 'Cedula de Identidad', value: 'ci', requerido: true, value2: 'persona.ci', },
                    { label: 'Nombre', value: 'nombre', requerido: true, value2: 'persona.nombre', },
                    { label: 'Ap. Paterno', value: 'ap', requerido: true, value2: 'persona.ap', },
                    { label: 'Ap. Materno', value: 'am', requerido: false, value2: 'persona.am', },
                    { label: 'Direccion', value: 'direccion', requerido: true, value2: 'persona.direccion', },
                    { label: 'Correo Electrónico', value: 'email', requerido: false, value2: 'persona.email', },
                    // Otros campos de tipo texto
                ],
                fecha: [
                    { label: 'Fecha de Nacimiento', value: 'fecnac', value2: 'fecnac', requerido: true },
                    //{ label: 'Fecha de Entrega', value: 'fecent', requerido: true },
                    // Otros campos de tipo fecha
                ],
                checkbox: [
                    /* {
                        etiqueta: 'Acepto Términos y Condiciones',
                        value: 'Acp',
                        requerido: true,
                        opciones: [
                            { label: 'Opción 1', value: 'opcion1' },
                            // Otras opciones para el campo checkbox
                        ],
                    }, */
                    /* {
                        etiqueta: 'Preferencias',
                        value: 'pre',
                        requerido: true,
                        opciones: [
                            { label: 'Opción 1', value: 'opcion1' },
                            { label: 'Opción 2', value: 'opcion2' },
                            { label: 'Opción 3', value: 'opcion3' },
                            // Otras opciones para el campo checkbox
                        ],
                    }, */
                    {
                        etiqueta: 'Rol(es)',
                        value: 'usurol',
                        value2: 'usurol',
                        valor: 'roles.idr',
                        requerido: true,
                        opciones: Funciones.convierteListas(roles, "value", "nombre", "idr"),
                    },
                    // Otros campos de tipo checkbox
                ],
                radiobutton: [
                    {
                        etiqueta: 'Género',
                        value: 'sexo',
                        value2: 'sexo',
                        requerido: true,
                        opciones: [
                            { label: 'Masculino', value: 'M' },
                            { label: 'Femenino', value: 'F' },
                            // Otras opciones para el campo radiobutton
                        ],
                    },
                    /* {
                        etiqueta: 'Turno',
                        value: 'turno',
                        requerido: true,
                        opciones: convierteListas(lista, "valor", "persona.nombre", "idu")

                    }, */
                    // Otros campos de tipo radiobutton
                ],
                listas: [
                    {
                        etiqueta: 'Empresa',
                        value: 'idem',
                        value2: "empresa.idem",
                        requerido: true,
                        opciones: Funciones.convierteListas(empresa, "valor", "nom", "idem")
                    },
                    /* {
                        etiqueta: 'Candidatos',
                        value: 'cand',
                        requerido: true,
                        opciones: [
                            { label: 'Miguel Arzuña', valor: '1' },
                            { label: 'Pedro Chupaño', valor: '2' },
                            // Otras opciones para el campo radiobutton
                        ],
                    }, */
                    // Otros campos de tipo radiobutton
                ],

                imagen: [
                    { label: 'Imagen Personal', value: 'base64', requerido: true, value2: 'persona.base64' },
                    //{ label: 'Imagen Secundaria', value: 'imgsec', requerido: true },
                    // Otros campos de tipo texto
                ],
                chips: [
                    {
                        etiqueta: 'Telefono(s) Personal',
                        value: 'telefono',
                        value2: 'persona.telefono',
                        valor: 'numero',
                        telefono: true,
                        requerido: true,
                        opciones: [],
                    },
                    {
                        etiqueta: 'Telefono(s) Empresa',
                        value: 'telefono2',
                        value2: 'empresa.persona.telefono',
                        valor: 'numero',
                        telefono: true,
                        requerido: true,
                        opciones: [],
                    },
                    /* {
                        etiqueta: 'Rol(es)',
                        value: 'usurol',
                        value2: 'usurol',
                        valor: 'roles.nombre',
                        requerido: true,
                        opciones: [],
                    }, */
                ],
                toggleButton: [
                    {
                        etiqueta: 'Rol(es)2',
                        value: 'usurol2',
                        value2: 'usurol',
                        valor: 'roles.idr',
                        requerido: true,
                        opciones: Funciones.convierteListas(roles, "value", "nombre", "idr"),
                    },
                    {
                        etiqueta: 'Genero 2',
                        value: 'sexo2',
                        value2: 'sexo',
                        valor: 'sexo',
                        requerido: true,
                        opciones: [
                            { label: 'Masculino', value: 'M' },
                            { label: 'Femenino', value: 'F' },
                        ]
                    },
                ]
                // Puedes añadir más tipos y sus respectivos campos según sea necesario
            }]
        }

    }
    //botonAdicional(data, icon, funcion, severity)
    const columnas = [
        { header: "Codigo", field: "idu", },
        { header: "Genero", field: "sexo", },
        { header: "Nombre", field: "persona.nombre", },
        { header: "Imagen", field: "persona.base64", },
        { header: "Estado", field: "estado", },
    ]
    const columnasExpasion = [
        { header: "Cedula", field: "ci", },
        { header: "Nombre", field: "nombre", },
        { header: "Apellido(s)", field: "ap", },
        { header: "Cedula", field: "ci", },

    ]

    useEffect(() => {

    }, []);

    return (<React.Fragment>

        {/* <TablaPrincipal
            lista={usuarios}
            datos={datos}
            columnas={columnas}
            columnasExpasion={columnasExpasion}
            datosCliente={editar}></TablaPrincipal> */}
        <VistaGeneradora></VistaGeneradora>
    </React.Fragment>)
}