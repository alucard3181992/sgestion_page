import React from "react";

import { InputText } from "primereact/inputtext"
import { Funciones } from "./Funciones";

const RenderizarInputTexto = ({ campo, cli, setCli, cliente, setCliente, }) => {

    return <div className={cli.includes(campo.value) ? "field error p-error mb-5" : "field mb-5"}>
        <span className="p-float-label font-bold">
            <InputText
                placeholder={campo.label}
                value={cliente[campo.value]}
                onChange={(e) => Funciones.cambioValores(campo.value, e.target.value, setCli, setCliente, cliente, cli)}
                className='w-full'
                type={campo.value === "email" ? "email" : "text"}
            />
            <label>{campo.label}: </label>
        </span>
        {cli.includes(campo.value) && < small className="p-error font-bold">{`${campo.label.toUpperCase()} ES REQUERIDO`}</small>}
    </div>
}
export default RenderizarInputTexto

export function SimpleInputTexto({ campo, cli, setCli, cliente, setCliente }) {
    return (<div className="field mb-5">
        <span className="p-float-label font-bold">
            <InputText
                value={cliente[campo]}
                onChange={(e) => Funciones.cambioValores(campo, e.target.value, setCli, setCliente, cliente, cli)}
                className='w-full'
            />
            <label>{Funciones.formatearCadena(campo)}: </label>
        </span>
    </div>)
}