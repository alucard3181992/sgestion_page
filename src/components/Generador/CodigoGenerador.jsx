
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


    const contenidoArchivo = `
import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"

export default function ${dataExportada.NombreFuncion}() {
    const [formulario, setFormulario] = useState(false)
    const { empresa, ${dataExportada.ListaPrincipal}, roles, nuevo, modificar, editar, cerrarFormulario, registro, setRegistro, buscar, mostrar, eliminarMasivo, eliminarIndividual } = useContext(UsuarioContext)

    const datos = ${JSON.stringify(dataExportada, function (key, value) {
        if (typeof value === 'function') {
            return value.name; // Solo devuelve el nombre de la función
        }
        return value;
    }, 2)
            .replace(/"(\w+)"\s*:/g, '$1:')} // Elimina las comillas alrededor de las claves

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