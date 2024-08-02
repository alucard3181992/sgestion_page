import React from "react";
import SimplePdf from "../Componentes/SImplePDF";
import { Dialog } from "primereact/dialog";
import ProformaPDF from "./Proforma";
import { Validacion } from "@/recursos/js/Validacion";

const PdfVenta2 = ({ visible,
    setVisible,
    lista,
    listaViguetas,
    listacomplemento,
    cliente,
    stotal,
    descuento,
    total }) => {
    /* console.log("LISTA", lista);
    console.log("Cliente", cliente);
    console.log("Viguetas", listaViguetas); */
    const hideModal = () => {
        setVisible(false);
    };
    /*para la proforma*/
    //{ nombre: "Viguetas", pzas: 64, ml: 302.20, area: 163.77, precio: "11720.00" },
    const listaPro = lista.map(item => ({
        nombre: item.producto,
        pzas: item.pzas,
        ml: item.ml,
        area: item.area,
        precioTotal: item.precioTotal,
        precio: item.precioFinal
        //prev: item.prev,
    }))


    /**proforma */


    /* const detalles = lista.map(item => ({
        Producto: item.name,
        Cantidad: item.cantidad,
        PUnit: item.price,
        SubTotal: item.stotal
    }));
    const clienteNuevo = {
        Cedula: cliente.cedula,
        Nombre: cliente.nombre,
        Apellido_Paterno: cliente.ap,
        Apellido_Materno: cliente.am,
    }
    const datos = {
        Datos_Del_Cliente: cliente,
        Detalles_Viguetas: listaViguetas,
        Detalles_Complementos: listacomplemento,
        Detalles: lista,
        Datos_Adicionales: { descuento, total }
    } */
    const transitionOptions = {
        classNames: "slide-bottom",
        timeout: { enter: 300, exit: 300 },
    };
    /* const verQR = {
        ver: false,
        datos: ``,
    };

    const verLogo = {
        ver: false,
        ruta: "/icons/img/report.png"
    }; */
    const clienteOf = {
        ...cliente,
        nombre: cliente.cliente
    }

    const fecha = Validacion.formatoLiteral(Date.now());
    const encargado = "Tec. Cristian Jhonatan Rodriguez Miranda";
    /* 
        const productos = [
            { nombre: "Viguetas", pzas: 64, ml: 302.20, area: 163.77, precio: "11720.00" },
            { nombre: "Plastoformo", pzas: 10, ml: 302, area: 163.77, precio: "3302.00" },
            { nombre: "Ceramico", pzas: 1270, ml: 302.20, area: 163.77, precio: "18870.00" },
            { nombre: "Ceramico", pzas: 1270, ml: 302.20, area: 163.77, precio: "18870.00" },
        ];
     */

    const precioTotal = 10140.00;
    return (<React.Fragment>
        <Dialog
            visible={visible}
            style={{ width: '80vw' }}
            onHide={hideModal}
            modal
            transitionOptions={transitionOptions}
        >
            {/* <SimplePdf
                Datos={datos}
                titulo={"TITULO"}
                subTitulo={"Subtitulo"}
                verQR={verQR}
                verLogo={verLogo}
                SegundaPagina={null}
                data={{
                    ver: false,
                }}
                tema={"azul"}
            /> */}
            {listaPro.length ? <ProformaPDF
                cliente={clienteOf}
                fecha={fecha}
                encargado={encargado}
                productos={listaPro}
                complementos={listacomplemento}
                precioTotal={parseFloat(total)} /> : "SIN DATOS PARA LA VISTA"}

        </Dialog>
    </React.Fragment>)
}
export default PdfVenta2