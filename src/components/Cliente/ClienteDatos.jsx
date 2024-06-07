
//carpeta componentes
import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"
import { ClienteContext } from "@/context/ClienteContext"
import { Funciones } from "@/components/Tabla/Funciones";

export default function VistaCliente() {

  const [formulario, setFormulario] = useState(false);

  const { clientes,

    nuevo,
    modificar,
    editar,
    cerrarFormulario,
    registro,
    setRegistro,
    buscar,
    mostrar,
    eliminarMasivo,
    eliminarIndividual } = useContext(ClienteContext)

  function hola(mensaje) {
    console.log("HOLA MUNDO: ", mensaje)
  }

  const datos = {
    tablaTitulo: "Registro de Clientes",
    tablaResponsiva: true,
    tablaColumnasDiferentes: true,
    tablaOrden: "idcli",
    tablaOrdenNumero: 1,
    tablaFilas: 5,
    tablaArray: [
      5,
      10,
      15
    ],
    tipoDeSeleccion: "multiple",
    expansion: false,
    tituloExpansion: "Expandir",
    listaExpansion: "persona",
    borrarMasivo: {
      visible: true,
      funcion: eliminarMasivo
    },
    añadir: {
      visible: true,
      funcion: hola
    },
    modificar: {
      visible: true,
      funcion: buscar
    },
    ver: {
      visible: true,
      funcion: mostrar
    },
    borrar: {
      visible: true,
      funcion: eliminarIndividual
    },
    header: true,
    columnasDeBusqueda: [
      "persona.nombre",
      "idcli"
    ],
    columnaAdicionalOpcion: false,
    columnaAdicional: [
      {
        header: "Modificar2",
        icon: "pi pi-pencil",
        generarHandler: (data) => () => buscar(data),
        dialog: setFormulario,
        severity: "success",
        key: "Modificar2"
      },
      {
        header: "Modificar3",
        icon: "pi pi-print",
        generarHandler: (data, e, icon) => () => modificar(data, e, icon),
        dialog: setFormulario,
        severity: "danger",
        key: "Modificar3"
      }
    ],
    formularioDialog: {
      principal: {
        formulario: formulario,
        setFormulario: setFormulario,
        key: "principal"
      }
    },
    seleccion2: {
      id: "idcli",
      estado: "estado",
      nom: "persona.nombre"
    },
    formulario: {
      formularioTitulo: "Administrar Cliente",
      cerrar: cerrarFormulario,
      botonTitulo: "registro",
      telefono: true,
      nuevo: nuevo,
      modificar: modificar,
      campos: [
        {
          id: [
            {
              label: "Identificador de Cliente",
              value: "idcli",
              value2: "idcli",
              key: "IDU"
            },
            {
              label: "Identificador de Persona",
              value: "idpe",
              value2: "persona.idpe",
              key: "IDPE"
            }
          ],
          texto: [
            {
              label: "Cedula de Identidad",
              value: "ci",
              requerido: true,
              value2: "persona.ci",
              key: "CI"
            },
            {
              label: "Nombre",
              value: "nombre",
              requerido: true,
              value2: "persona.nombre",
              key: "Nom"
            }
          ],
          fecha: [],
          checkbox: [],
          radiobutton: [],
          listas: [],
          imagen: [
            {
              label: "Imagen Personal",
              value: "base64",
              requerido: true,
              value2: "persona.base64"
            }
          ],
          chips: [],
          toggleButton: []
        }
      ]
    }
  }

  const columnas = [
    {
      header: "Codigo",
      field: "idcli",
      key: "Codigo"
    },
    {
      header: "Nombre",
      field: "persona.nombre",
      key: "persona.nombre"
    },
    {
      header: "Estado",
      field: "estado",
      key: "estado"
    }
  ]

  const columnasExpasion = [
    {
      header: "Cedula",
      field: "ci",
      key: "ci"
    },
    {
      header: "Nombre",
      field: "nombre",
      key: "nombre"
    }
  ]

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <TablaPrincipal
        lista={clientes}
        datos={datos}
        columnas={columnas}
        columnasExpasion={columnasExpasion}
        datosCliente={editar}>
      </TablaPrincipal>
    </React.Fragment>
  );
}
