import React, { useState } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import SimpleInputTextoMemo from "../Componentes/SimpleInputTexto";
import SimpleInputNumberMemo from "../Componentes/SimpleInputNumber";
import SimpleChipsMemo from "../Componentes/SimpleChips";
import SimpleCheckboxMemo from "../Componentes/SimpleCheckbox";
import FormularioPrincipal from "../Tabla/Formulario";

const RegistroVenta = () => {
    const [cliente, setCliente] = useState({ nombre: "", ap: "" });
    const [producto, setProducto] = useState({ nombre: "", precio: 0, cantidad: 0 });
    const [tags, setTags] = useState([]);
    const [isGift, setIsGift] = useState(false);
    const [ventaRegistrada, setVentaRegistrada] = useState(false);

    const handleRegistroVenta = () => {
        // Aquí iría la lógica para registrar la venta
        setVentaRegistrada(true);
    }
    const [documento, setDocumento] = useState(false)

    const cerrarFormulario = () => {
        console.log("SE CERRO");
    }
    const nuevo = (datos) => {
        console.log("ME LLAMAN NUEVO", datos);
        setDocumento(false)
    }
    const formulario = {
        formularioTitulo: "Titulo del Formulario",
        cerrar: cerrarFormulario,
        botonTitulo: "Registro",
        telefono: true,
        nuevo: nuevo,
        modificar: null,
        campos: [{
            id: [
                { label: 'Identificador de Usuario', value: 'idu', value2: 'idu' },
                { label: 'Identificador de Persona', value: 'idpe', value2: 'persona.idpe' },
                /* { label: 'Identificador de Empresa', value: 'idem', value2: 'empresa.idem' }, */
                // Otros campos de tipo texto
            ],
            texto: [
                { label: 'Cedula de Identidad', value: 'ci', requerido: true, value2: 'persona.ci', },
                { label: 'Nombre', value: 'nombre', requerido: true, value2: 'persona.nombre', },
                { label: 'Ap. Paterno', value: 'ap', requerido: true, value2: 'persona.ap', },
                { label: 'Ap. Materno', value: 'am', requerido: false, value2: 'persona.am', },
                { label: 'Direccion', value: 'direccion', requerido: true, value2: 'persona.direccion', },
                { label: 'Correo Electrónico', value: 'email', requerido: false, value2: 'persona.email', },
                // Otros campos de tipo texto
            ],
            fecha: [
                { label: 'Fecha de Nacimiento', value: 'fecnac', value2: 'fecnac', requerido: true },
                //{ label: 'Fecha de Entrega', value: 'fecent', requerido: true },
                // Otros campos de tipo fecha
            ],
            checkbox: [
                /* {
                    etiqueta: 'Acepto Términos y Condiciones',
                    value: 'Acp',
                    requerido: true,
                    opciones: [
                        { label: 'Opción 1', value: 'opcion1' },
                        // Otras opciones para el campo checkbox
                    ],
                }, */
                /* {
                    etiqueta: 'Preferencias',
                    value: 'pre',
                    requerido: true,
                    opciones: [
                        { label: 'Opción 1', value: 'opcion1' },
                        { label: 'Opción 2', value: 'opcion2' },
                        { label: 'Opción 3', value: 'opcion3' },
                        // Otras opciones para el campo checkbox
                    ],
                }, */
                /* {
                    etiqueta: 'Rol(es)',
                    value: 'usurol',
                    value2: 'usurol',
                    valor: 'roles.idr',
                    requerido: true,
                    opciones: Funciones.convierteListas(roles, "value", "nombre", "idr"),
                }, */
                // Otros campos de tipo checkbox
            ],
            radiobutton: [
                {
                    etiqueta: 'Género',
                    value: 'sexo',
                    value2: 'sexo',
                    requerido: true,
                    opciones: [
                        { label: 'Masculino', value: 'M', key: "Masculino" },
                        { label: 'Femenino', value: 'F', key: "Femenino" },
                        // Otras opciones para el campo radiobutton
                    ],
                },
                /* {
                    etiqueta: 'Turno',
                    value: 'turno',
                    requerido: true,
                    opciones: convierteListas(lista, "valor", "persona.nombre", "idu")

                }, */
                // Otros campos de tipo radiobutton
            ],
            listas: [
                /* {
                    etiqueta: 'Empresa',
                    value: 'idem',
                    value2: "empresa.idem",
                    requerido: true,
                    opciones: Funciones.convierteListas(empresa, "valor", "nom", "idem")
                }, */
                /* {
                    etiqueta: 'Candidatos',
                    value: 'cand',
                    requerido: true,
                    opciones: [
                        { label: 'Miguel Arzuña', valor: '1' },
                        { label: 'Pedro Chupaño', valor: '2' },
                        // Otras opciones para el campo radiobutton
                    ],
                }, */
                // Otros campos de tipo radiobutton
            ],

            imagen: [
                { label: 'Imagen Personal', value: 'base64', requerido: true, value2: 'persona.base64' },
                //{ label: 'Imagen Secundaria', value: 'imgsec', requerido: true },
                // Otros campos de tipo texto
            ],
            chips: [
                {
                    etiqueta: 'Telefono(s) Personal',
                    value: 'telefono',
                    value2: 'persona.telefono',
                    valor: 'numero',
                    telefono: true,
                    requerido: true,
                    opciones: [],
                },
                {
                    etiqueta: 'Telefono(s) Empresa',
                    value: 'telefono2',
                    value2: 'empresa.persona.telefono',
                    valor: 'numero',
                    telefono: true,
                    requerido: true,
                    opciones: [],
                },
                /* {
                    etiqueta: 'Rol(es)',
                    value: 'usurol',
                    value2: 'usurol',
                    valor: 'roles.nombre',
                    requerido: true,
                    opciones: [],
                }, */
            ],
            toggleButton: [
                /* {
                    etiqueta: 'Rol(es)2',
                    value: 'usurol2',
                    value2: 'usurol',
                    valor: 'roles.idr',
                    requerido: true,
                    opciones: Funciones.convierteListas(roles, "value", "nombre", "idr"),
                }, */
                /* {
                    etiqueta: 'Genero 2',
                    value: 'sexo2',
                    value2: 'sexo',
                    valor: 'sexo',
                    requerido: true,
                    opciones: [
                        { label: 'Masculino', value: 'M' },
                        { label: 'Femenino', value: 'F' },
                    ]
                }, */
            ]
            // Puedes añadir más tipos y sus respectivos campos según sea necesario
        }]
    }
    return (
        <div className="p-grid p-justify-center">
            <FormularioPrincipal
                setFormulario={setDocumento}
                formulario={documento}
                datosFormulario={formulario}
                datosCliente={null} />
            <Button label="Formulario" icon="pi pi-check" onClick={(e) => { e.preventDefault(), setDocumento(true) }} className="p-mt-2" />
            <Card title="Registro de Venta de Productos" className="p-col-12 p-md-8">
                <div className="p-fluid">
                    <div className="p-field">
                        <SimpleInputTextoMemo campo="nombre" cliente={cliente} setCliente={setCliente} original={cliente} />
                    </div>
                    <div className="p-field">
                        <SimpleInputTextoMemo campo="ap" cliente={cliente} setCliente={setCliente} original={cliente} />
                    </div>
                    <div className="p-field">
                        <SimpleInputTextoMemo campo="nombre" cliente={producto} setCliente={setProducto} original={producto} />
                    </div>
                    <div className="p-field">
                        <SimpleInputNumberMemo campo="precio" cliente={producto} setCliente={setProducto} original={producto} />
                    </div>
                    <div className="p-field">
                        <SimpleInputNumberMemo campo="cantidad" cliente={producto} setCliente={setProducto} original={producto} />
                    </div>
                    <div className="p-field">
                        <SimpleChipsMemo campo="tags" cliente={tags} setCliente={setTags} original={tags} />
                    </div>
                    <div className="p-field-checkbox">
                        <SimpleCheckboxMemo campo="isGift" cliente={isGift} setCliente={setIsGift} original={isGift} label="Es un regalo" />
                    </div>
                    <Button label="Registrar Venta" icon="pi pi-check" onClick={handleRegistroVenta} className="p-mt-2" />
                    {ventaRegistrada && <Message severity="success" text="Venta registrada con éxito!" className="p-mt-2" />}
                </div>
            </Card>
        </div>
    )
}

export default RegistroVenta;
