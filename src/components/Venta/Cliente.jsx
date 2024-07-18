import React, { useState, useEffect } from "react";
import { clientes } from "./data";
import FormularioPrincipal from "../Tabla/Formulario";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Tooltip } from "primereact/tooltip";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

const VistaCliente = ({
    vista,
    setVista,
    cliente,
    setCliente,
    encontrado,
    setEncontrado,
    documento,
    formulario,
    setDocumento,
}) => {

    const clienteDatos = {
        cedula: "",
        nombre: "",
        ap: "",
        am: "",
    }

    const buscarCliente = (valor) => {
        const persona = clientes.filter((e) => e.cedula === valor)
        if (persona.length) {
            setCliente(persona[0])
            setEncontrado(true)
        } else {
            setCliente(clienteDatos)
            setEncontrado(false)
        }
    }

    const ClienteVista = ({ cliente }) => (
        <Card
            title={<span className="text-primary">Detalles del Cliente</span>}
            className="p-shadow-5 text-center"
            style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '1rem',
                padding: '2rem',
            }}
        >
            <div className="p-field p-mb-3">
                <Tooltip target=".custom-tooltip-name" content="Nombre del cliente" />
                <label className="p-mb-1 custom-tooltip-name"><strong>Nombre:</strong></label>
                <p className="text-xl">{cliente.nombre}</p>
            </div>
            <Divider />
            <div className="p-field p-mb-3">
                <Tooltip target=".custom-tooltip-ap" content="Apellido paterno del cliente" />
                <label className="p-mb-1 custom-tooltip-ap"><strong>Apellido Paterno:</strong></label>
                <p className="text-xl">{cliente.ap}</p>
            </div>
            <Divider />
            <div className="p-field p-mb-3">
                <Tooltip target=".custom-tooltip-am" content="Apellido materno del cliente" />
                <label className="p-mb-1 custom-tooltip-am"><strong>Apellido Materno:</strong></label>
                <p className="text-xl">{cliente.am}</p>
            </div>
            <Button
                label="Editar"
                icon="pi pi-pencil"
                className="p-button-rounded p-button-success p-mt-3"
                onClick={(e) => {
                    e.preventDefault()
                    setDocumento(true)
                }}
            />
            <Button
                label="Aceptar"
                icon="pi pi-check"
                className="p-button-rounded p-button-info p-mt-3"
                onClick={(e) => {
                    e.preventDefault()
                    setVista(false)
                }}
            />
        </Card>
    );

    const ClienteNoEncontrado = () => (
                <Card
                    title={<span className="text-danger">Cliente No Encontrado</span>}
                    className="p-shadow-5 text-center"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        borderRadius: '1rem',
                        padding: '2rem',
                    }}
                >
                    <p className="text-lg">El cliente no se encuentra en nuestra base de datos. Por favor, intente con otra búsqueda.</p>
                    <Button
                        label="Nuevo"
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-success p-mt-3"
                        onClick={(e) => {
                            e.preventDefault()
                            setDocumento(true)
                        }}
                    />
                </Card>
    );

    return (<React.Fragment>
        <Dialog
            visible={vista}
            onHide={(e) => setVista(false)}
        >
            <div className="centro-total">
                <div>
                    <span className="p-float-label font-bold p-input-icon-right mt-4">
                        <InputText
                            defaultValue={""}
                            onChange={(e) => buscarCliente(e.target.value)} />
                        <label className="w-full">Cedula y/o NIT </label>
                    </span>
                </div>
            </div>
            {encontrado ? <ClienteVista cliente={cliente} /> : <ClienteNoEncontrado />}
            <FormularioPrincipal
                setFormulario={setDocumento}
                formulario={documento}
                datosFormulario={formulario}
                datosCliente={cliente} />
        </Dialog>
    </React.Fragment>)
}
export default VistaCliente

