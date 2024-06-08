import React, { useState } from "react";

import SimpleInputTextoMemo from "../Componentes/SimpleInputTexto";
import SimpleInputNumberMemo from "../Componentes/SimpleInputNumber";
import SimpleChipsMemo from "../Componentes/SimpleChips";
import SimpleCheckboxMemo from "../Componentes/SimpleCheckbox";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from "primereact/divider";
import { CSSTransition } from "primereact/csstransition";
import { Image } from "primereact/image";

const Presentacion = () => {
    const [cliente, setCliente] = useState({ nombre: "", ap: "" });
    const [producto, setProducto] = useState({ nombre: "", precio: 0, cantidad: 0 });
    const [tags, setTags] = useState([]);
    const [isGift, setIsGift] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="p-grid p-justify-center p-mt-5 p-pb-5" style={{ backgroundColor: '#1e1e2f', minHeight: '100vh', color: '#fff' }}>
            <div className="p-col-12 p-md-10">
                <Card className="p-mb-4" style={{ backgroundColor: '#2e2e3f', border: '1px solid #444' }}>
                    <div className="p-fluid p-text-center">
                        <h1 style={{ color: '#4caf50' }}>Hola</h1>
                        <p>
                            Soy un desarrollador especializado en la creación de páginas web de gestión.
                            Aquí podrás ver algunas demostraciones de los componentes que utilizo en mis proyectos.
                        </p>
                    </div>
                </Card>

                <Card title="Mis Habilidades" className="p-mb-4" style={{ backgroundColor: '#2e2e3f', border: '1px solid #444' }}>
                    <p>
                        Desarrollador con experiencia en tecnologías como React, Node.js, y bases de datos NoSQL.
                        Especializado en la creación de interfaces de usuario intuitivas y eficientes.
                    </p>
                    <p>
                        Aquí abajo puedes ver algunos de los componentes personalizados que he creado y utilizado en mis proyectos.
                    </p>
                </Card>

                <Card title="Demostración de Componentes" className="p-mb-4" style={{ backgroundColor: '#2e2e3f', border: '1px solid #444' }}>
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
                        <Button label="Registrar Venta" icon="pi pi-check" className="p-mt-2 p-button-success" />
                    </div>
                </Card>

                <Card title="Contacto" className="p-mb-4" style={{ backgroundColor: '#2e2e3f', border: '1px solid #444' }}>
                    <p>Si deseas saber más sobre mis servicios o tienes alguna consulta, no dudes en contactarme.</p>
                    <div className="p-fluid">
                        <div className="p-field">
                            <InputText id="email" type="email" placeholder="@example.com" className="p-inputtext p-component" />
                        </div>
                        <div className="p-field">
                            <InputTextarea id="mensaje" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe tu mensaje aquí..." />
                        </div>
                        <Button label="Enviar Mensaje" icon="pi pi-envelope" className="p-mt-2 p-button-primary" />
                    </div>
                </Card>

                <Card className="p-mt-4" style={{ backgroundColor: '#007ad9', color: '#ffffff', textAlign: 'center', border: 'none' }}>
                    <p>© 2024 - Todos los derechos reservados.</p>
                </Card>
            </div>
        </div>
    );
};

export default Presentacion;
