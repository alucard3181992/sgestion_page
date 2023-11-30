import { useRouter } from 'next/router'
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Ripple } from 'primereact/ripple';
import { BlockUI } from 'primereact/blockui';
import { Tooltip } from 'primereact/tooltip';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Sidebar } from 'primereact/sidebar';

import Link from 'next/link';
import { PrincipalContext } from '@/context/PrincipalContext';
import { useContext, useState, useEffect, useRef } from "react";
const Menus = () => {
    const { datos, salir, usuario, perfil, cargar, menuBar, setTema, tema } = useContext(PrincipalContext);
    const [bloqueo, setBloqueo] = useState(true);
    const [verCon, setVerCon] = useState({ p: "password", i: "pi pi-lock" })
    const [roles, setRoles] = useState(null);
    const router = useRouter()
    const op = useRef(null);

    useEffect(() => {
        if (datos.message !== "Sin Acceso") {
            if (datos.roles.length !== 0) {

                // 1. Ordenar por nombreR
                datos.roles.sort((a, b) => a.nombreR.localeCompare(b.nombreR));

                // 2. Ordenar cada sublista menus por nombreM
                datos.roles.forEach((rol) => {
                    rol.menus.sort((a, b) => a.nombreM.localeCompare(b.nombreM));
                });

                // 3. Modificar las URL en la lista de menus
                datos.roles.forEach((rol) => {
                    rol.menus.forEach((menu) => {
                        menu.url = menu.url.replace('/Bienvenido', '').replace('.lp', '');
                    });
                });
                setRoles(datos)
                setBloqueo(false)
            }
            else {
                setBloqueo(true)
            }
        }
    }, [datos])

    const template = (options, titulo) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2`;
        const style = { fontSize: '1.0rem' };

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick} >
                    <span className={toggleIcon} data-pr-tooltip={menuBar !== "" ? titulo : ""}></span>
                    <Ripple />
                </button>
                <span className={titleClassName} style={style}>{titulo}</span>
            </div>
        );
    };

    const ver = () => {
        if (verCon.p === "password") {
            setVerCon({ p: "text", i: "pi pi-unlock" })
        } else {
            setVerCon({ p: "password", i: "pi pi-lock" })
        }
    }

    const VerUsuario = () => {
        return (
            <>
                <Card className="mb-3 font-bold" style={{ textAlign: 'center' }} footer={usuario.concat} >
                    {perfil !== null ?
                        <Image src={perfil} alt="Foto Actual" preview className="Imgnormal1 border-round" style={{ height: "150px", width: "100%" }} /> :
                        <Avatar label={usuario.concat.slice(0, 2)} size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />}
                    <div className="p-inputgroup mb-3">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText value={usuario.login} disabled className="w-full" />
                    </div>
                    <div className="p-inputgroup mb-3">
                        <span className="p-inputgroup-addon" onClick={ver} style={{ cursor: 'pointer' }}>
                            <i className={verCon.i}></i>
                        </span>
                        <InputText id="password" value={usuario.contrasenia} type={verCon.p} className="w-full" disabled />
                    </div>
                    <Button onClick={salir} style={{ marginTop: 20 }} >Cerrar Session</Button>
                </Card>
            </>
        )
    }

    const VerUsuarioOculto = () => {
        return (
            <>
                <Button style={{ marginTop: 20 }} type="button" icon="pi pi-user" label="" severity='help' onClick={(e) => op.current.toggle(e)} />
                <div className="titulo" >Datos</div>
                <OverlayPanel ref={op} style={{ width: 250, left: '80px !important', top: 50 }} showCloseIcon>
                    <VerUsuario />
                </OverlayPanel>
            </>
        )
    }

    return (
        <>
            <TabView style={{ paddingLeft: 10 }}>
                <TabPanel leftIcon="pi pi-bars" style={{ height: '100%' }}>
                    <Tooltip target=".pi" />
                    <div className="titulo" >Menus</div>
                    <BlockUI blocked={bloqueo} template={cargar}>
                        {roles === null ? "" : roles.roles.map((e) =>
                            <Panel key={e.nombreR + "a" + 1} headerTemplate={(e2) => template(e2, e.nombreR)} toggleable>
                                <ul>{e.menus.map((eM) =>
                                    <li key={e.nombreR + eM.nombreM} className={router.route === eM.url ? 'seleccionado tol' : 'tol'} >
                                        <Link href={eM.url} className='menus' >
                                            <i className='pi pi-fw pi-home' data-pr-tooltip={menuBar !== "" ? eM.nombreM : ""} style={{ /* fontSize: '4.5rem', */ paddingRight: 5 }} />
                                            <span >{eM.nombreM}</span>
                                        </Link>
                                    </li>
                                )}
                                </ul>
                            </Panel>
                        )}
                    </BlockUI>
                </TabPanel>
                <TabPanel leftIcon="pi pi-android">
                    <div className="titulo" >Usuario</div>
                    {menuBar !== "" ? <VerUsuarioOculto /> : <VerUsuario />}
                </TabPanel>
                <TabPanel leftIcon="pi pi-cog">
                    <Tooltip target=".pi" />
                    <div className="titulo" >Temas</div>
                    <ul>
                        <li onClick={(event) => { event.preventDefault(); setTema('arya-blue') }} className={tema === 'arya-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "arya-blue" : ""} /><span>arya-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('arya-green') }} className={tema === 'arya-green' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "arya-green" : ""} /><span>arya-green</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('arya-orange') }} className={tema === 'arya-orange' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "arya-orange" : ""} /><span>arya-orange</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('arya-purple') }} className={tema === 'arya-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "arya-purple" : ""} /><span>arya-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('bootstrap4-light-blue') }} className={tema === 'bootstrap4-light-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "bootstrap4-light-blue" : ""} /><span>bootstrap4-light-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('bootstrap4-light-purple') }} className={tema === 'bootstrap4-light-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "bootstrap4-light-purple" : ""} /><span>bootstrap4-light-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('bootstrap4-dark-blue') }} className={tema === 'bootstrap4-dark-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "bootstrap4-dark-blue" : ""} /><span>bootstrap4-dark-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('bootstrap4-dark-purple') }} className={tema === 'bootstrap4-dark-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "bootstrap4-dark-purple" : ""} /><span>bootstrap4-dark-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('md-light-indigo') }} className={tema === 'md-light-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "md-light-indigo" : ""} /><span>md-light-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('md-light-deeppurple') }} className={tema === 'md-light-deeppurple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "md-light-deeppurple" : ""} /><span>md-light-deeppurple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('md-dark-indigo') }} className={tema === 'md-dark-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "md-dark-indigo" : ""} /><span>md-dark-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('md-dark-deeppurple') }} className={tema === 'md-dark-deeppurple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "md-dark-deeppurple" : ""} /><span>md-dark-deeppurple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('mdc-light-indigo') }} className={tema === 'mdc-light-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "mdc-light-indigo" : ""} /><span>mdc-light-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('mdc-light-deeppurple') }} className={tema === 'mdc-light-deeppurple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "mdc-light-deeppurple" : ""} /><span>mdc-light-deeppurple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('mdc-dark-indigo') }} className={tema === 'mdc-dark-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "mdc-dark-indigo" : ""} /><span>mdc-dark-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('mdc-dark-deeppurple') }} className={tema === 'mdc-dark-deeppurple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "mdc-dark-deeppurple" : ""} /><span>mdc-dark-deeppurple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('tailwind-light') }} className={tema === 'tailwind-light' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "tailwind-light" : ""} /><span>tailwind-light</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('fluent-light') }} className={tema === 'fluent-light' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "fluent-light" : ""} /><span>fluent-light</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-light-blue') }} className={tema === 'lara-light-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-light-blue" : ""} /><span>lara-light-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-light-indigo') }} className={tema === 'lara-light-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-light-indigo" : ""} /><span>lara-light-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-light-purple') }} className={tema === 'lara-light-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-light-purple" : ""} /><span>lara-light-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-light-teal') }} className={tema === 'lara-light-teal' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-light-teal" : ""} /><span>lara-light-teal</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-dark-blue') }} className={tema === 'lara-dark-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-dark-blue" : ""} /><span>lara-dark-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-dark-indigo') }} className={tema === 'lara-dark-indigo' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-dark-indigo" : ""} /><span>lara-dark-indigo</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-dark-purple') }} className={tema === 'lara-dark-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-dark-purple" : ""} /><span>lara-dark-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('lara-dark-teal') }} className={tema === 'lara-dark-teal' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "lara-dark-teal" : ""} /><span>lara-dark-teal</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('soho-light') }} className={tema === 'soho-light' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "soho-light" : ""} /><span>soho-light</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('soho-dark') }} className={tema === 'soho-dark' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "soho-dark" : ""} /><span>soho-dark</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('viva-light') }} className={tema === 'viva-light' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "viva-light" : ""} /><span>viva-light</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('viva-dark') }} className={tema === 'viva-dark' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "viva-dark" : ""} /><span>viva-dark</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('mira') }} className={tema === 'mira' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "mira" : ""} /><span>mira</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('nano') }} className={tema === 'nano' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "nano" : ""} /><span>nano</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('saga-blue') }} className={tema === 'saga-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "saga-blue" : ""} /><span>saga-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('saga-green') }} className={tema === 'saga-green' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "saga-green" : ""} /><span>saga-green</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('saga-orange') }} className={tema === 'saga-orange' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "saga-orange" : ""} /><span>saga-orange</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('saga-purple') }} className={tema === 'saga-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "saga-purple" : ""} /><span>saga-purple</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('vela-blue') }} className={tema === 'vela-blue' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "vela-blue" : ""} /><span>vela-blue</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('vela-green') }} className={tema === 'vela-green' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "vela-green" : ""} /><span>vela-green</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('vela-orange') }} className={tema === 'vela-orange' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "vela-orange" : ""} /><span>vela-orange</span></li>
                        <li onClick={(event) => { event.preventDefault(); setTema('vela-purple') }} className={tema === 'vela-purple' ? ' seleccionado menus tol' : ' menus tol'}><i className='pi pi-palette' data-pr-tooltip={menuBar !== "" ? "vela-purple" : ""} /><span>vela-purple</span></li>
                    </ul>
                </TabPanel>
            </TabView>
        </>
    )
}

export default Menus;