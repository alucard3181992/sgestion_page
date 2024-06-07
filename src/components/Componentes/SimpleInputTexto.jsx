import React, { useEffect, useState } from 'react';
import { Funciones } from '../Tabla/Funciones';

import { InputText } from 'primereact/inputtext';
import { useUpdateEffect } from 'primereact/hooks';

const SimpleInputTextoMemo = ({ campo, cliente, setCliente, original }) => {
    console.log("ME LLAMAN SimpleInputTextoMemo", campo, " CLIENTE ", cliente);
    //const [valor, setValor] = useState(cliente[campo]);
    const [titulo] = useState(Funciones.formatearCadena(campo))
    const [modificado, setModificado] = useState(false)
    const [valorOriginal, setValorOriginal] = useState("")
    useUpdateEffect(() => {
        setValorOriginal(cliente[campo])
    }, [original])

    const cambioValores = (campo, valor, setCliente, cliente,) => {
        setCliente({
            ...cliente,
            [campo]: valor
        })
        if (valor !== valorOriginal) {
            setModificado(true)
        } else {
            setModificado(false)
        }
        /* if(valorOriginal!==){

        } */
    }
    function generarCadenaSombra(numPasos, color) {
        const resultado = Array.from({ length: numPasos }, (_, index) => {
            const offsetPos = (index + 1) * 5;
            const offsetNeg = (index + 1) * -5;
            return `${color} ${offsetNeg}px ${offsetPos}px`;
        }).join(',');

        return resultado;
    }

    return (<>
        <div className="field mb-5">
            <span className="w-full p-float-label font-bold p-input-icon-right">
                <i className={modificado ? "pi pi-save" : ""} />
                <InputText
                    defaultValue={cliente[campo]}
                    //value={cliente[campo]}
                    //onChange={(e) => cambioValores(campo, e.target.value, setCliente, cliente)}
                    onBlur={(e) => cambioValores(campo, e.target.value, setCliente, cliente)}
                    //className='w-full'
                    className={'w-full border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150'}
                    style={{
                        background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                        //transform: modificado ? 'translateY(5px)' : 'translateY(0)',
                        boxShadow: modificado ? generarCadenaSombra(3, 'var(--surface-hover)') : ""
                    }}
                />
                <label>{titulo}: </label>
            </span>
        </div>

    </>

    )
}

export default SimpleInputTextoMemo;
