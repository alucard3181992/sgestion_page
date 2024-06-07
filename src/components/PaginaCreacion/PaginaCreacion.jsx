import React, { useState } from "react";

import About from "@/components/PaginaModelo1/About";
import Navbar from "@/components/PaginaModelo1/Navbar";
import Projects from "@/components/PaginaModelo1/Proyects";
import Skills from "@/components/PaginaModelo1/Skills";
import Testimonials from "@/components/PaginaModelo1/Testimonials";
import Clients from "@/components/PaginaModelo1/Clients";
import Contact from "@/components/PaginaModelo1/Contact";
import Footer from "@/components/PaginaModelo1/Footer";
import ScrollToTopButton from "@/components/PaginaModelo1/ScrollTop";


import { PickList } from 'primereact/picklist';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const PaginaCreacion = () => {

    const estructuraDePaginaId = [
        {
            id: "1",
            nombre: "Navbar",
            componente: Navbar,
        },
        {
            id: "2",
            nombre: "About",
            componente: About,
        },
        {
            id: "3",
            nombre: "Projects",
            componente: Projects,
        },
        {
            id: "4",
            nombre: "Skills",
            componente: Skills,
        },
        {
            id: "5",
            nombre: "Testimonials",
            componente: Testimonials,
        },
        {
            id: "6",
            nombre: "Clients",
            componente: Clients,
        },
        {
            id: "7",
            nombre: "Contact",
            componente: Contact,
        },
        {
            id: "8",
            nombre: "Footer",
            componente: Footer,
        },
        {
            id: "9",
            nombre: "ScrollToTopButton",
            componente: ScrollToTopButton,
        },
    ]

    const [source, setSource] = useState(estructuraDePaginaId);
    const [target, setTarget] = useState([])
    const [nombre, setNombre] = useState("")

    const onChange = (event) => {
        setSource(event.source)
        setTarget(event.target)
    }

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3" >
                <div className="flex gap-2">
                    <i className="pi pi-tag text-sm"></i>
                    <span className="font-bold">{item.nombre}</span>
                </div>
            </div>
        )
    }
    const generarArchivo = () => {
        // Lógica para descargar el archivo
        //import ScrollToTopButton from "@/components/PaginaModelo1/ScrollTop";
        function importacionesForm() {
            let valorResultante = target.map((campo) => {
                return `import ${campo.nombre} from "@/components/PaginaModelo1/${campo.nombre}";`
            }).join('\n')

            return valorResultante
        }
        const importaciones = importacionesForm()

        function componentesForm() {
            let valorResultante = target.map((campo) => {
                return `<${campo.nombre}/>`
            }).join('\n')

            return valorResultante
        }

        const componentesNuevos = componentesForm()
        const contenidoArchivo = `
        import React from "react"
        ${importaciones}

        export default function ${nombre}() {
            return (<React.Fragment>
                ${componentesNuevos}
            </React.Fragment>)
        }
        `
        const blob = new Blob([contenidoArchivo], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = nombre + ".jsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url)
    }
    return (
        <React.Fragment>
            <div className="grid">
                <div className="col-12 md:col-6">
                    <h2>Selecciona Componentes</h2>
                    <div className="card">
                        <PickList
                            source={source}
                            target={target}
                            onChange={onChange}
                            itemTemplate={itemTemplate}
                            filter
                            filterBy="name"
                            breakpoint="1280px"
                            sourceHeader="Componentes"
                            targetHeader="Seleccionados"
                            sourceStyle={{ height: '24rem' }}
                            targetStyle={{ height: '24rem' }}
                            sourceFilterPlaceholder="Buscar componente"
                            targetFilterPlaceholder="Buscar componente"
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <h2>Vista Previa</h2>
                    <div className="flex gap-2">
                        <InputText
                            defaultValue={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <Button
                            label="Generar Archivo" onClick={generarArchivo} />
                    </div>

                    <VistaInicial componentes={target} />
                </div>
            </div>
        </React.Fragment>
    )
}

const VistaInicial = ({ componentes }) => {
    return (
        <React.Fragment>
            {componentes.map((Componente, index) => (
                <Componente.componente key={index} />
            ))}
        </React.Fragment>
    );
};

export default PaginaCreacion;
