import React, { createContext, useState, useEffect } from "react";
import { LoginServicio } from "@/services/LoginServicio";
import { useLocalStorage, useResizeListener } from 'primereact/hooks';
import { useRouter } from 'next/router';
import { Validacion } from "@/recursos/js/Validacion";

export const PrincipalContext = createContext();

const PrincipalContextProvider = (props) => {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            if (eventData.width >= 1024) {
                //console.log("TAM SI", eventData.width);
                if (menuBar2 !== "ocultar") { setMenuBar("") }
            } else {
                //console.log("TAM NO", eventData.width);
                if (eventData.width <= 768) {
                    setMenuBar("nada")
                } else {
                    setMenuBar("ocultar")
                }
            }
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    const principalServicio = new LoginServicio()
    const [datos, setDatos] = useState([])
    const [count, setCount] = useLocalStorage(0, 'count')
    const [menuBar, setMenuBar] = useLocalStorage('', 'menuBar');
    const [menuBar2, setMenuBar2] = useLocalStorage('', 'opcion');
    const [tema, setTema] = useLocalStorage('arya-blue', 'tema');
    const [datosIn, setDatosIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [acceso, setAcceso] = useState(false)
    const [mensaje, setMensaje] = useState("")
    const [scroll, setScroll] = useState(0)
    const values = {
        login: "",
        contrasenia: "",
        concat: "",
    }
    const [usuario, setUsuario] = useState(values)
    const [perfil, setPerfil] = useState("")
    const router = useRouter()
    const [panelActividades, setPanelActividades] = useState(false)
    const [actividades, setActividades] = useState([])
    const [registro, setRegistro] = useState()
    const [empresa, setEmpresa] = useState()
    useEffect(() => {
        try {
            setLoading(true)
            principalServicio.verificar().then((data) => {
                setDatos(data)
                setDatosIn(data.estado)
                setEmpresa(data.empresa)
                if (data.estado) {
                    principalServicio.imagen(data.datos[0].idpe).then((data2) => {
                        setUsuario(data.datos[0])
                        setPerfil(data2.base64.base64);

                    })
                }
                setLoading(false)
            });
            //console.log("me llaman normal Principal");
        } catch (error) {
            console.log(error)
        }
    }, [count]);

    Validacion.addLocale();
    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth <= 1024) { setMenuBar("ocultar") } else { setMenuBar("") }
        if (window.innerWidth <= 768) { setMenuBar("nada") } else { setMenuBar("") }
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    const ingresar = async (datosIncicio) => {
        const respuesta = await principalServicio.listar(datosIncicio).then((data) => {
            let acceder = { acceder: "", usuario: "" }
            if (data.message === "Usuario Permitido") {
                setCount(1)
                router.push("/")
                setMensaje("  Iniciando Session...")
                setAcceso(false)
                setDatosIn(true)
                acceder.usuario = data.usuario
                return acceder
            } else {
                acceder.acceder = "Acceso Denegado"
                return acceder
            }
        })
        return respuesta
    }

    const salir = () => {
        principalServicio.eliminar().then((data) => {
            setUsuario(values)
            setPerfil("")
            setCount(2)
            setMensaje("  Finalizando Session...")
            router.push("/")
        })
        setMenuBar2("ocultar")
    }

    const cargar = () => {
        return (
            <div> <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}></i> </div>
        );
    }

    return (
        <PrincipalContext.Provider
            value={{
                datos,
                count,
                datosIn,
                loading,
                ingresar,
                salir,
                usuario,
                perfil,
                cargar,
                menuBar,
                setMenuBar,
                setMenuBar2,
                setTema,
                tema,
                mensaje,
                acceso,
                setAcceso,
                panelActividades,
                setPanelActividades,
                actividades,
                setActividades,
                registro,
                setRegistro,
                eventData,
                empresa,
                scroll,
                setScroll
            }}
        >
            {props.children}
        </PrincipalContext.Provider>
    );
}

export default PrincipalContextProvider;