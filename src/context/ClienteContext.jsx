
    //carpeta context
    import React, { createContext, useState, useEffect, useRef } from "react";
import { ClienteServicio } from "@/services/ClienteServicio";

export const ClienteContext = createContext();

const ClienteContextProvider = (props) => {

    const clienteServicio  = new ClienteServicio()
    const [clientes, setClientes] = useState([])
    const [editar, setEditar] = useState(null)
    const [registro, setRegistro] = useState("Guardar")
    

    useEffect(() => {
        //console.log("LLAMANDO A USUARIO")
        try {
            clienteServicio.listarCliente().then((data) => setClientes(data))
            
        } catch (error) {
            console.log(error)
        }
    }, [])


    const nuevo = async (usuario) => {
        const res = await clienteServicio.create(usuario).then(
            clienteServicio.listarCliente().then((data) => setClientes(data))
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
        const res = await clienteServicio.modificar(usuario, telefono).then(
            clienteServicio.listarCliente().then((data) => setClientes(data))
        )
        return res.data
    }

    const eliminarMasivo = async (seleccion) => {
        try {
            let resultado = [];
            let mensajes = [];
            for (const id of seleccion) {
                const data = await clienteServicio.eliminar(id);
                resultado.push(data);
                mensajes.push({ cliente: id.nom, mensaje: data.data.message, baja: data.data.msg })
            }
            clienteServicio.listarCliente().then((data) => setClientes(data))
            //return resultado;
            return { mensajes }
        } catch (error) {
            console.log("el error es " + error)
        }
    }
    const eliminarIndividual = async (cliente) => {
        const res = await clienteServicio.eliminar(cliente).then(
            clienteServicio.listarCliente().then((data) => setClientes(data))
        )
        return res.data
    }

    const nuevaLista = () => {
        clienteServicio.listarCliente().then((data) => setClientes(data));
    }

    return (
        <ClienteContext.Provider
            value={{
                clientes,
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
                
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    );
}

export default ClienteContextProvider;
