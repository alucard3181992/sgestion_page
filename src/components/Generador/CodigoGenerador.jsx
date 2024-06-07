import { CodigoGeneradorApi, CodigoGeneradorContext, CodigoGeneradorServicios, CodigoGeneradorVista } from "./CodigoGeneradorServicio";



export function CodigoGenerador(camposGenerales, camposFormulario, columnas, columnasExpasion, datosArchivo) {

    //columnaAdicionalOpcion: false,

    const resultado = camposGenerales.columnaAdicionalOpcion ? {
        ...camposGenerales,
        formulario: {
            ...camposGenerales.formulario,
            campos: camposFormulario
        }
    } :
        {
            ...camposGenerales,
            columnaAdicional: [],
            formulario: {
                ...camposGenerales.formulario,
                campos: camposFormulario
            }
        }

    /* const formularios = formulariosNum()
    console.log(formularios);
    function formulariosNum() {
        const valor = camposGenerales.formularioDialog
        let valorResultante = []
        Object.values(valor).map((campo) => {
            console.log(`const [${campo.formulario}, ${campo.setFormulario}] = useState(false)`)
            valorResultante.push(`const [${campo.formulario}, ${campo.setFormulario}] = useState(false)`)
        })
        return valorResultante
    } */
    //const resultadoSinComillas = eliminarComillas(resultado);

    // Función personalizada para JSON.stringify
    function replacer(key, value) {
        // Si la clave es "tablaArray" y el valor es una cadena de números separados por comas, convertir a un array de números
        if (key === "tablaArray" && typeof value === 'string') {
            return value.split(',').map(Number);
        }
        if (key === "opciones" && typeof value === 'string') {
            const valor = value.split('"')
            const nuevo = `${valor[0]}'${valor[1]}','${valor[3]}','${valor[5]}'${valor[6]}`
            return nuevo
        }
        return value;
    }

    function formulariosNum() {
        const valor = camposGenerales.formularioDialog
        let valorResultante = Object.values(valor).map((campo) => {
            return `const [${campo.formulario}, ${campo.setFormulario}] = useState(false);`
        }).join('\n')

        return valorResultante
    }
    const formularios = formulariosNum()


    function listasAdicionales() {
        const valor = datosArchivo.ListasAdicionales
        let valorResultante = valor.map((campo) => {
            return `${campo},`
        }).join('\n')

        return valorResultante
    }
    const listasAdicional = listasAdicionales()
    // Convertir el objeto a cadena con JSON.stringify y la función personalizada
    const jsonString = JSON.stringify(resultado, replacer, 2)
    const jsonString2 = JSON.stringify(columnas, replacer, 2)
    const jsonString3 = JSON.stringify(columnasExpasion, replacer, 2)

    const json1 = jsonString
        .replace(/"funcion": "(.*?)"/g, '"funcion": $1')
        .replace(/"formulario": "(.*?)"/g, '"formulario": $1')
        .replace(/"setFormulario": "(.*?)"/g, '"setFormulario": $1')
        .replace(/"cerrar": "(.*?)"/g, '"cerrar": $1')
        .replace(/"nuevo": "(.*?)"/g, '"nuevo": $1')
        .replace(/"modificar": "(.*?)"/g, '"modificar": $1')
        .replace(/"generarHandler": "(.*?)"/g, '"generarHandler": $1')
        .replace(/"dialog": "(.*?)"/g, '"dialog": $1')
        .replace(/"opciones": "(.*?)"/g, '"opciones": $1')
        .replace(/\\"/g, '"')
        .replace(/"([^"]+)":/g, '$1:')


    //console.log("JSON1", json1);

    const json2 = jsonString2
        .replace(/"([^"]+)":/g, '$1:')

    const json3 = jsonString3
        .replace(/"([^"]+)":/g, '$1:')

    /* function cambiadora(value) {
        //console.log("EL VALOR Q LLEGA ES", value);
    } */

    /* function opcionesSin(key, value) {
        if (key === "opciones" && typeof value === 'string') {
            //return value.split(',').map(Number);
            console.log("KEY ", key, " y valor es ", value);
        }
        return value;
    }
    const jsonStringSn = JSON.stringify(json1, opcionesSin, 2)
    console.log("jshjdfhs ", jsonStringSn); */
    const contenidoArchivo = `
    //carpeta componentes
import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"
import { ${datosArchivo.NombreFuncion}Context } from "@/context/${datosArchivo.NombreFuncion}Context"
import { Funciones } from "@/components/Tabla/Funciones";

export default function Vista${datosArchivo.NombreFuncion}() {

    ${formularios}

    const { ${datosArchivo.ListaPrincipal},
        ${listasAdicional}
           nuevo,
            modificar,
             editar,
              cerrarFormulario,
               registro,
                setRegistro,
                 buscar,
                  mostrar,
                   eliminarMasivo,
                    eliminarIndividual } = useContext(${datosArchivo.NombreFuncion}Context )

    function hola(mensaje) {
    console.log("HOLA MUNDO: ", mensaje)
    }

    const datos = ${json1}
    
    const columnas = ${json2}

    const columnasExpasion = ${json3}

    useEffect(() => {

    }, []);

    return (
        <React.Fragment>
            <TablaPrincipal
                lista={${datosArchivo.ListaPrincipal}}
                datos={datos}
                columnas={columnas}
                columnasExpasion={columnasExpasion}
                datosCliente={editar}>
            </TablaPrincipal>
        </React.Fragment>
    );
}
`;



    // Lógica para descargar el archivo
    const blob = new Blob([contenidoArchivo], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = datosArchivo.NombreFuncion + "Datos.jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)

    CodigoGeneradorServicios(datosArchivo)
    CodigoGeneradorVista(datosArchivo)
    CodigoGeneradorContext(datosArchivo)
    CodigoGeneradorApi(datosArchivo)
}