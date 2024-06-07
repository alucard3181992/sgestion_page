import React, { useEffect, useState } from 'react';
import { Funciones } from '../Tabla/Funciones';
import { InputNumber } from 'primereact/inputnumber';

import { useUpdateEffect } from 'primereact/hooks';

const SimpleInputNumberMemo = ({ campo, cliente, setCliente, original }) => {
    //console.log("ME LLAMAN SimpleInputTextoMemo", campo, " CLIENTE ", cliente);
    //const [valor, setValor] = useState(cliente[campo]);
    const [titulo] = useState(Funciones.formatearCadena(campo))
    const [modificado, setModificado] = useState(false)
    const [valorOriginal, setValorOriginal] = useState("")
    useUpdateEffect(() => {
        setValorOriginal(cliente[campo])
    }, [original])

    const cambioValores = (campo, valor, setCliente, cliente,) => {
        console.log("EL VALOR QUE LLEGA ES ", valor ? "SI" : "NO");
        const valorNuevo = valor !== "" ? valor : 0
        setCliente({
            ...cliente,
            [campo]: parseInt(valorNuevo)
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
                <InputNumber
                    value={cliente[campo]}
                    onBlur={(e) => cambioValores(campo, e.target.value, setCliente, cliente)}
                    pt={{
                        root: {
                            className: 'w-full'
                        },
                        input: {
                            root: {
                                className: 'w-full border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150',
                                style: {
                                    background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                                    boxShadow: modificado ? generarCadenaSombra(3, 'var(--surface-hover)') : ""
                                }
                            }

                        }



                        //token: { className: 'bg-primary' }
                    }}
                />
                <label>{titulo}: </label>
            </span>
        </div>

    </>

    )
}

export default SimpleInputNumberMemo;
