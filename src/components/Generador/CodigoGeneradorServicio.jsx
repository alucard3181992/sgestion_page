import { Funciones } from "../Tabla/Funciones";

export function CodigoGeneradorServicios(datosArchivo) {

    const urlApi = `"api/${datosArchivo.CarpetaApi}/${datosArchivo.ArchivoApi}"`
    //const datos = await axios.get(baseUrl + "api/rol/rol");
    function formulariosNum() {
        const valor = datosArchivo.ListasAdicionales
        let valorResultante = valor.map((campo) => {
            return `async listar${Funciones.formatearCadena(campo)}() {
                const datos = await axios.get(baseUrl + "api/${campo}/${campo}");
                return datos.data;
            }`
        }).join('\n')
        return valorResultante
    }

    const nuevasListas = formulariosNum()

    const contenidoServicio = `
    //carpeta services
    import axios from "axios";
    import { baseUrl } from "@/lib/ip";
    
    export class ${datosArchivo.NombreFuncion}Servicio {
        async listar${datosArchivo.NombreFuncion}() {
            const datos = await axios.get(baseUrl + ${urlApi});
            return datos.data;
        }
        async create(cliente) {
            return await axios.post(baseUrl + ${urlApi}, cliente)
        }
        async modificar(cliente, telefono) {
            return await axios.put(baseUrl + ${urlApi}, { cliente, telefono });
        }
        async eliminar(cliente) {
            return await axios.delete(baseUrl + ${urlApi}, { data: cliente });
        }
        ${nuevasListas}
    }
    `
    // Lógica para descargar el archivo
    const blob = new Blob([contenidoServicio], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = datosArchivo.NombreFuncion + "Servicio.jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)

}

export function CodigoGeneradorVista(datosArchivo) {

    const contenidoVista = `
    //carpeta services pages
    import Vista${datosArchivo.NombreFuncion} from "@/components/${datosArchivo.NombreFuncion}/${datosArchivo.NombreFuncion}Datos";
import ${datosArchivo.NombreFuncion}ContextProvider from "@/context/${datosArchivo.NombreFuncion}Context";
const ${datosArchivo.NombreFuncion} = () => {
    return (
        <${datosArchivo.NombreFuncion}ContextProvider>
            <Vista${datosArchivo.NombreFuncion} />
        </${datosArchivo.NombreFuncion}ContextProvider>
    )
}
export default ${datosArchivo.NombreFuncion};
`

    // Lógica para descargar el archivo
    const blob = new Blob([contenidoVista], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "G" + datosArchivo.NombreFuncion + ".jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)
}

export function CodigoGeneradorContext(datosArchivo) {


    const set = `set${Funciones.formatearCadena(datosArchivo.ListaPrincipal)}`
    const adicionales = formulariosNum()
    const listasAdicionales = formulariosNum2()
    const listasAdicionales2 = formulariosNum3()
    const servicio = `${datosArchivo.NombreFuncion.toLocaleLowerCase()}Servicio`
    const listar = `listar${datosArchivo.NombreFuncion}()`
    const nombre = datosArchivo.NombreFuncion

    function formulariosNum() {
        const valor = datosArchivo.ListasAdicionales
        let valorResultante = valor.map((campo) => {
            return `const [${campo}, set${Funciones.formatearCadena(campo)}] = useState([]);`
        }).join('\n')
        return valorResultante
    }

    function formulariosNum2() {
        const valor = datosArchivo.ListasAdicionales
        let valorResultante = valor.map((campo) => {
            return `${datosArchivo.NombreFuncion.toLocaleLowerCase()}Servicio.listar${Funciones.formatearCadena(campo)}().then((data) => set${Funciones.formatearCadena(campo)}(data))`
        }).join('\n')
        return valorResultante
    }

    function formulariosNum3() {
        const valor = datosArchivo.ListasAdicionales
        let valorResultante = valor.map((campo) => {
            return `${campo},`
        }).join('\n')
        return valorResultante
    }


    const contenidoContext = `
    //carpeta context
    import React, { createContext, useState, useEffect, useRef } from "react";
import { ${nombre}Servicio } from "@/services/${nombre}Servicio";

export const ${nombre}Context = createContext();

const ${nombre}ContextProvider = (props) => {

    const ${servicio}  = new ${nombre}Servicio()
    const [${datosArchivo.ListaPrincipal}, ${set}] = useState([])
    const [editar, setEditar] = useState(null)
    const [registro, setRegistro] = useState("Guardar")
    ${adicionales}

    useEffect(() => {
        //console.log("LLAMANDO A USUARIO")
        try {
            ${servicio}.${listar}.then((data) => ${set}(data))
            ${listasAdicionales}
        } catch (error) {
            console.log(error)
        }
    }, [])


    const nuevo = async (usuario) => {
        const res = await ${servicio}.create(usuario).then(
            ${servicio}.${listar}.then((data) => ${set}(data))
        )
        return res.data
    }

    const buscar = (cli) => {
        //console.log("CLI ES", cli);
        setRegistro("Editar")
        setEditar(cli);
    }

    const cerrarFormulario = () => {
        setRegistro("Guardar")
        setEditar(null)
    }

    const mostrar = (cli) => {
        setRegistro("Mostrar")
        setEditar(cli)
    }

    const modificar = async (usuario, telefono) => {
        const res = await ${servicio}.modificar(usuario, telefono).then(
            ${servicio}.${listar}.then((data) => ${set}(data))
        )
        return res.data
    }

    const eliminarMasivo = async (seleccion) => {
        try {
            let resultado = [];
            let mensajes = [];
            for (const id of seleccion) {
                const data = await ${servicio}.eliminar(id);
                resultado.push(data);
                mensajes.push({ cliente: id.nom, mensaje: data.data.message, baja: data.data.msg })
            }
            ${servicio}.${listar}.then((data) => ${set}(data))
            //return resultado;
            return { mensajes }
        } catch (error) {
            console.log("el error es " + error)
        }
    }
    const eliminarIndividual = async (cliente) => {
        const res = await ${servicio}.eliminar(cliente).then(
            ${servicio}.${listar}.then((data) => ${set}(data))
        )
        return res.data
    }

    const nuevaLista = () => {
        ${servicio}.${listar}.then((data) => ${set}(data));
    }

    return (
        <${nombre}Context.Provider
            value={{
                ${datosArchivo.ListaPrincipal},
                editar,
                buscar,
                mostrar,
                nuevo,
                modificar,
                eliminarMasivo,
                eliminarIndividual,
                registro,
                setRegistro,
                nuevaLista,
                cerrarFormulario,
                ${listasAdicionales2}
            }}
        >
            {props.children}
        </${nombre}Context.Provider>
    );
}

export default ${nombre}ContextProvider;
`

    // Lógica para descargar el archivo
    const blob = new Blob([contenidoContext], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombre + "Context.jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)
}

export function CodigoGeneradorApi(datosArchivo) {

    const nombre = datosArchivo.NombreFuncion
    const contenidoApi = `
    
import prisma from '@/lib/prisma';

const ${nombre}BD = async (req, res) => {
    const { method } = req;
    //console.log("METODO ", method);
    switch (method) {
        case "GET": {
            try {
                
                return res.status(200).json(data)
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "PUT": {
            try {

                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "DELETE": {
            try {

                return res.status(200).json({ message: 'TODO BIEN', msg: msg })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }

        case "POST": {
            try {

                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}
export default ${nombre}BD
    `
    // Lógica para descargar el archivo
    const blob = new Blob([contenidoApi], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = datosArchivo.ArchivoApi + ".jsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url)
}