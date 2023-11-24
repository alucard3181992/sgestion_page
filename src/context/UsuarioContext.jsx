import React, { createContext, useState, useEffect, useRef } from "react";
import { UsuarioServicio } from "@/services/UsuarioServicio";

export const UsuarioContext = createContext();

const UsuarioContextProvider = (props) => {

    const usuarioServicio = new UsuarioServicio();
    const [usuarios, setUsuarios] = useState([]);
    const [editar, setEditar] = useState(null);
    const [registro, setRegistro] = useState("Guardar")
    const [roles, setRoles] = useState([]);
    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        //console.log("LLAMANDO A USUARIO");
        try {
            usuarioServicio.listarUsuarios().then((data) => setUsuarios(data));
            usuarioServicio.listarRoles().then((data) => setRoles(data))
            usuarioServicio.listarEmpresa().then((data) => setEmpresa(data))
        } catch (error) {
            console.log(error)
        }
    }, []);


    const nuevo = async (usuario) => {
        const res = await usuarioServicio.create(usuario).then(
            usuarioServicio.listarUsuarios().then((data) => setUsuarios(data))
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
        const res = await usuarioServicio.modificar(usuario, telefono).then(
            usuarioServicio.listarUsuarios().then((data) => setUsuarios(data))
        )
        return res.data
    }

    const eliminarMasivo = async (seleccion) => {
        try {
            let resultado = [];
            let mensajes = [];
            for (const id of seleccion) {
                const data = await usuarioServicio.eliminar(id);
                resultado.push(data);
                mensajes.push({ cliente: id.nom, mensaje: data.data.message, baja: data.data.msg })
            }
            usuarioServicio.listarUsuarios().then((data) => setUsuarios(data))
            //return resultado;
            return { mensajes }
        } catch (error) {
            console.log("el error es " + error)
        }
    }
    const eliminarIndividual = async (cliente) => {
        const res = await usuarioServicio.eliminar(cliente).then(
            usuarioServicio.listarUsuarios().then((data) => setUsuarios(data))
        )
        return res.data
    }
    //roles 
    const nuevaLista = () => {
        usuarioServicio.listarRoles().then((data) => setUsuarios(data));
    }
    const usuRol = async (usu, rol, accion) => {
        const res = await usuarioServicio.usuRol(usu, rol, accion).then(
        )
        return res.data
    }
    return (
        <UsuarioContext.Provider
            value={{
                usuarios,
                editar,
                buscar,
                mostrar,
                nuevo,
                modificar,
                eliminarMasivo,
                eliminarIndividual,
                registro,
                setRegistro,
                roles,
                nuevaLista,
                usuRol,
                empresa,
                cerrarFormulario
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContextProvider;