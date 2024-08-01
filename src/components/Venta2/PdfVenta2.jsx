import React from "react";
import SimplePdf from "../Componentes/SImplePDF";
import { Dialog } from "primereact/dialog";
import ProformaPDF from "./Proforma";

const PdfVenta2 = ({ visible, setVisible, lista, listaViguetas, listacomplemento, cliente, stotal, descuento, total }) => {

    const hideModal = () => {
        setVisible(false);
    };
    const detalles = lista.map(item => ({
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
    }
    const transitionOptions = {
        classNames: "slide-bottom",
        timeout: { enter: 300, exit: 300 },
    };
    const verQR = {
        ver: false,
        datos: ``,
    };

    const verLogo = {
        ver: false,
        ruta: "/icons/img/report.png"
    };
    const cliente2 = {
        nombre: "Sr Omar",
        direccion: "B/ Los Chapacos"
    };

    const fecha = "16 de julio de 2024";
    const encargado = "Tec. Cristian Jhonatan Rodriguez Miranda";

    const productos = [
        { nombre: "Viguetas", pzas: 64, ml: 302.20, area: 163.77, precio: "11720.00" },
        { nombre: "Plastoformo", pzas: 10, ml: 302, area: 163.77, precio: "3302.00" },
        { nombre: "Ceramico", pzas: 1270, ml: 302.20, area: 163.77, precio: "18870.00" },
        { nombre: "Ceramico", pzas: 1270, ml: 302.20, area: 163.77, precio: "18870.00" },
    ];

    const complementos = [
        { nombre: "Plastoformo", medida: "12x43x100", precio: "18.87", cantidad: 10, precioTotal: "188.70" },
        { nombre: "Ceramico", medida: "10x43x25", precio: "2.60", cantidad: 1270, precioTotal: "3302.00" }
    ];

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
            <ProformaPDF
                cliente={cliente2}
                fecha={fecha}
                encargado={encargado}
                productos={productos}
                complementos={listacomplemento}
                precioTotal={precioTotal} />

        </Dialog>
    </React.Fragment>)
}
export default PdfVenta2