import React, { useContext, useState, useEffect } from 'react';

import Principal from './Principal';
import Menus from '../Menu/Menus';

import Login from '@/components/Login/Login';
import VistaSkeleton, { Paginacion, Session } from '@/components/Esqueleto/VistaSkeleton';
import PrincipalContextProvider, { PrincipalContext } from '@/context/PrincipalContext';

import Link from 'next/link';

import { Button } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';

import { useRouter } from "next/router";
//import "primereact/resources/themes/arya-blue/theme.css";

const Vista = ({ Component, pageProps }) => {
    const { empresa,
        eventData,
        panelActividades,
        setPanelActividades,
        actividades,
        setActividades,
        setScroll,
        datosIn,
        loading,
        menuBar,
        setMenuBar,
        setMenuBar2,
        tema,
        mensaje
    } = useContext(PrincipalContext)

    const router = useRouter()
    const [loading2, setLoading2] = useState(false)
    const [menuLateral, setMenuLateral] = useState(false)

    useEffect(() => {
        const handleRouteChangeStart = () => setLoading2(true);
        const handleRouteChangeComplete = () => setLoading2(false);

        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);
        router.events.on("routeChangeError", handleRouteChangeComplete);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
            router.events.off("routeChangeError", handleRouteChangeComplete);
        };
    }, [router])

    const cambioTamaño = () => {
        if (menuBar === "ocultar") {
            setMenuBar("")
            setMenuBar2("")
        } else {
            if (menuBar === "nada") {
                setMenuBar("")
                setMenuBar2("")
            } else {
                if (eventData.width <= 768) {
                    setMenuBar("nada")
                    setMenuBar2("")
                } else {
                    setMenuBar("ocultar")
                    setMenuBar2("ocultar")
                }

            }
        }
    }

    return (
        <>
            {tema && <>
                <link id="theme-link" rel="stylesheet" href={"/icons/themes/" + tema + "/theme.css"} />
                {/* <link id="theme-link" rel="stylesheet" href={"/icons/h/theme.css"} /> */}
            </>}
            {loading ? (
                <>
                    <Session animacion={"P"} todo={false} mensaje={mensaje} />
                </>
            ) : (
                <>
                    {datosIn ? (
                        <>
                            <div className={menuBar}>
                                <div className='top'>
                                    <Button icon={"pi pi-bars"} style={{ height: 30, marginLeft: 25, marginTop: 0, position: 'absolute', left: 0 }} onClick={cambioTamaño} />
                                    <Link href={'/'} className='imprenta' >
                                        {"NOMBRE EMPRESA"}
                                    </Link>
                                    <Button icon="pi pi-cog" style={{ height: 30, marginRight: 25, marginTop: 0, position: 'absolute', right: 0 }} onClick={() => setPanelActividades(true)}
                                        tooltip='Actividades' tooltipOptions={{ position: "left" }}
                                    />
                                </div>
                                <div className="menu">
                                    <Menus />
                                </div>
                                <div className={"contenido"}>
                                    {loading2 && <Paginacion animacion={""} todo={true} />}
                                    <Component  {...pageProps} />
                                </div>
                            </div>
                        </>
                    ) : (<>

                        <Component  {...pageProps} />

                    </>)}
                </>
            )
            }

        </>
    )
}

const InicioPage = ({ Component, pageProps }) => {
    return (
        <PrincipalContextProvider>
            <Vista Component={Component} pageProps={pageProps} />
        </PrincipalContextProvider>
    )
}

export default InicioPage;
