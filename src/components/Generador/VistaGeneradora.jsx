import React, { useEffect, useRef, useContext } from "react";

import { Button } from "primereact/button";
import { useMountEffect } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

import { itemTemplate, prueba } from "./Campos";
import { DataScroller } from 'primereact/datascroller';

import { CodigoGenerador } from "./CodigoGenerador";
import { RenderizarCampos } from "./RenderizarCampos";
import Navbar from "@/components/PaginasExterior/Navbar";

import { GeneradorDeArrayTabla, generadorDeArrayTabla } from "./FuncionesGeneradora";
import VistasDatos from "./VistaDatos";
import DatosArchivo from "./DatosArchivo";
import VistaArraySimple from "./VistaArraySimple";

import GeneradorContextProvider, { GeneradorContext } from "@/context/GeneradorContext";
const Vista = () => {
    const { columnas,
        columnasExpasion,
        camposFormulario,
        camposGenerales,
        datosArchivo,
        objeto,
        cli,
        lista,
        setColumnas,
        setColumnasExpansion,
        setCamposFormulario,
        setCamposGenerales,
        setDatosArchivo,
        setCli } = useContext(GeneradorContext)

    const toast = useRef(null);
    const ds = useRef(null);
    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />

    useMountEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Pagina Cargada :)', sticky: false, life: 2000 });
    });

    useEffect(() => {

    }, [])

    const generarArchivo = () => {
        /* const seleccionArrayNumerico = {
            ...seleccionArray,
            tablaArray: seleccionArray.tablaArray.map(Number),
        } */

        CodigoGenerador(camposGenerales, camposFormulario, columnas, columnasExpasion, datosArchivo)

    }

    return (
        <React.Fragment>
            <Toast ref={toast} />
            {/*  {JSON.stringify(datosArchivo)} */}
            <h2>Editor de Configuración2</h2>
            <Button label="Generar Archivo" onClick={generarArchivo} />
            {/* <DataScroller
                ref={ds}
                value={prueba}
                itemTemplate={itemTemplate}
                rows={1}
                loader
                footer={footer}
                header="Click Load Button at Footer to Load More" /> */}
            <DatosArchivo
                Datos={datosArchivo}
                setDatos={setDatosArchivo}
                lista={lista}
                titulo={"Datos Principales"} />
            <VistasDatos
                objeto={objeto}
                datos={camposGenerales}
                setDatos={setCamposGenerales}
                cli={cli}
                setCli={setCli}
                titulo={"Datos"} />
            <RenderizarCampos
                campos={camposFormulario && camposFormulario[0]}
                setCamposFormulario={setCamposFormulario}
                titulo={"Campos del Formulario"} />
            <VistaArraySimple
                Datos={columnas}
                setDatos={setColumnas}
                titulo={"header"}
                tituloPrincipal={"Columnas De La Tabla"} />
            <VistaArraySimple
                Datos={columnasExpasion}
                setDatos={setColumnasExpansion}
                titulo={"header"}
                tituloPrincipal={"Columnas De La Expansion"} />


            <Button label="Generar Archivo" onClick={generarArchivo} />
        </React.Fragment>
    )
}
function VistaGeneradora() {
    useEffect(() => {

    }, [])
    return (<React.Fragment>
        <GeneradorContextProvider>
            <Navbar />
            <Vista />
        </GeneradorContextProvider>
    </React.Fragment>)
}
export default VistaGeneradora;
