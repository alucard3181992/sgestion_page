import React, { useState, useContext } from "react";

import VistaClienteExcel from "./Cliente";
import { PrincipalContext } from "@/context/PrincipalContext";
import VistaUsuarioExcel from "./Usuario";
import DataTableExcel from "./Tabla";
import ComplementosAdicionales from "./Complementos";
import ResumenCotizacion from "./Resumen";
import PdfVenta2 from "./PdfVenta2";
import { Button } from "primereact/button";

const VentaExcel = () => {
    const clienteVacio = {
        cliente: "",
        direccion: "",
        "Cel/Telf": ""
    }
    const usuario = {
        "FECHA": new Date().toLocaleDateString(),
        "EJECUTIVO COMERCIAL": "Tec. Cristian Jhonatan Rodriguez Miranda",
        "Cel. / Telf.": "61879391",
        CARGO: "EJECUTIVO DE VENTAS"

    }
    const initialViguetas = Array.from({ length: 5 }, () => ({ longitud: '', nroPzas: '', mlViguetas: '', serie: '', bs: '' }));
    const [viguetas, setViguetas] = useState(initialViguetas); // Estado para las filas de viguetas

    const initialComplementos = [
        { complemento: '', medida: '', precio: 0, cantidad: 0, precioTotal: 0 },
    ]
    const [complementos, setComplementos] = useState(initialComplementos); // Estado para las filas de complementos adicionales

    const [totalesDes, setTotalesDes] = useState([])
    const [descuento, setDescuento] = useState(0)
    const [visible, setVisible] = useState(false)

    const [cliente, setCliente] = useState(clienteVacio)

    const totalCotizacion = totalesDes.reduce((acc, item) => acc + item.precioFinal, 0) + descuento; // Incluyendo comisión maestro


    return (<React.Fragment>
        <div className="grid">
            <div className="col-12">
                <div className="p-4 border-round shadow-2 surface-card h-full text-center font-bold text-xl">
                    PRESUPUESTO PARA LOSA PRETENSADA Y COMPLEMENTO
                </div>
            </div>
            <div className="col-12 md:col-6">
                <VistaClienteExcel
                    cliente={cliente}
                    setCliente={setCliente}
                    clienteVacio={clienteVacio} />
            </div>
            <div className="col-12 md:col-6">
                <VistaUsuarioExcel usuario={usuario} setUsuario={setCliente} />
            </div>
            <div className="col-12">
                <DataTableExcel rows={viguetas} setRows={setViguetas} />
            </div>
            <div className="col-12 md:col-12 lg:col-6">
                <ComplementosAdicionales rows={complementos} setRows={setComplementos} />
            </div>
            <div className="col-12 md:col-12 lg:col-6">
                <ResumenCotizacion
                    viguetas={viguetas}
                    complementos={complementos}
                    setTotalesDes={setTotalesDes}
                    setDescuento={setDescuento}
                    descuento={descuento}
                />
            </div>
            <div className="col-12">
                <div className="font-bolb text-3xl p-4 border-round shadow-2 surface-card text-right">
                    Total Cotizacion: {totalCotizacion.toFixed(2)} bs
                </div>
            </div>
            <Button label="abrir pdf" onClick={(e) => {
                e.preventDefault()
                setVisible(true)
            }} />
            {visible && <PdfVenta2
                cliente={cliente}
                descuento={`${descuento} bs`}
                lista={totalesDes}
                listaViguetas={viguetas}
                listacomplemento={complementos}
                stotal={0}
                total={`${totalCotizacion} bs`}
                visible={visible}
                setVisible={setVisible}
            />}
        </div>

    </React.Fragment>)
}

export default VentaExcel
