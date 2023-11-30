
export function CodigoGenerador(...componentes) {
    console.log("SI ME LLAMA A CODIGO GENERADOR", componentes);
    // Aquí puedes procesar los componentes según tus necesidades
    // Por ejemplo, puedes mapear sobre ellos, acceder a sus propiedades, etc.
    let datos = {}
    componentes.forEach((componente, index) => {
        console.log(`Componente ${index + 1}:`, componente);
        datos = {
            ...datos,
            ...componente
        }
    });
    console.log("DATOS ES ", datos);
    const dataExportada = {
        ...datos
    }

    // Función personalizada para JSON.stringify
    function replacer(key, value) {
        // Si la clave es "funcion" y el valor es una cadena, quitar las comillas
        if (key === "funcion") {
            return value;
        }
        // Si el valor es una función, representarla como su código fuente
        if (typeof value === 'function') {
            return value.toString();
        }
        // Si la clave es "tablaArray" y el valor es una cadena de números separados por comas, convertir a un array de números
        if (key === "tablaArray" && typeof value === 'string') {
            return value.split(',').map(Number);
        }
        return value;
    }

    // Convertir el objeto a cadena con JSON.stringify y la función personalizada
    const jsonString = JSON.stringify(dataExportada, replacer, 2);

    const json1 = jsonString
        .replace(/"funcion": "(.*?)"/g, '"funcion": $1')
        .replace(/"generarHandler": "(.*?)"/g, '"generarHandler": $1')
        .replace(/"dialog": "(.*?)"/g, '"dialog": $1')

    const contenidoArchivo = `
import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"

export default function ${dataExportada.NombreFuncion}() {
    const [formulario, setFormulario] = useState(false)
    const { empresa, ${dataExportada.ListaPrincipal}, roles, nuevo, modificar, editar, cerrarFormulario, registro, setRegistro, buscar, mostrar, eliminarMasivo, eliminarIndividual } = useContext(UsuarioContext)

    const datos2 = ${json1};
    useEffect(() => {

    }, []);

    return (
        <React.Fragment>
            <TablaPrincipal
                lista={${dataExportada.ListaPrincipal}}
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
    a.download = dataExportada.NombreArchivo + ".jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)
}