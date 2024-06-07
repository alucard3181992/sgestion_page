import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Funciones } from "@/components/Tabla/Funciones";
import { LoginServicio } from "@/services/LoginServicio";
import { Validacion } from "@/recursos/js/Validacion";

const PaginaInicio = () => {
    const consultas = new LoginServicio()
    const [datos, setDatos] = useState([])
    const [bloqueo, setBloqueo] = useState(true)
    useEffect(() => {
        if (!datos.length) {
            consultas.ListarOrden().then((data) => setDatos(data))
        } else {
            setBloqueo(false)
        }
        console.log("LOS DATOS SON datos", datos);
    }, [datos])

    return (<React.Fragment>
        {bloqueo ? "CARGANDO DATOS....." :
            <PanelesDeColores lista={datos} />
        }
    </React.Fragment>)
}
export default PaginaInicio

const colores = (numero) => {
    switch (numero) {
        case 1: return { color: "blue", titulo: "Productos", mensaje: "Mas Vendidos ", metodo: "props.todos.setVisible1(true)", icon: "pi pi-shopping-cart" }
        case 2: return { color: "orange", titulo: "Productos", mensaje: "Ver Imagenes", metodo: "props.todos.setVisible2(true)", icon: "pi pi-map-marker" }
        case 3: return { color: "cyan", titulo: "Proveedores", mensaje: "Proveedores2", metodo: "setVisible", icon: "pi pi-inbox" }
        case 4: return { color: "purple", titulo: "Calendario", mensaje: "Ver Actividades", metodo: "props.todos.setVisible3(true)", icon: "pi pi-comment" }
        default: return { color: "black", titulo: "sintitulo", mensaje: "sintitulo2" }
    }
}


const PanelesDeColores = ({ lista }) => {
    const items = Array.from({ length: 6 }, (v, i) => i);
    return (
        <><div className="grid">
            {lista.map((col, index) => {
                const { color, titulo, mensaje, icon, metodo } = colores(index + 1);
                return <React.Fragment key={index}>
                    <div className={`col-12 ${Funciones.getColumnClass(index, items.length)} ${Funciones.getColumnClassLg(index, items.length)}`}>
                        <div className={" h-full surface-0 shadow-2 p-3 border-1 border-50 border-round bg-" + color + "-300"}>
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-900 font-medium mb-3">{col.cliente.persona.nombre}</span>
                                    <div className="text-900 font-medium text-xl">{col.estado}</div>
                                </div>
                                <div className={"flex align-items-center justify-content-center bg-" + color + "-100 border-round"} style={{ width: '4.5rem', height: '4.5rem' }}>
                                    <i className={icon + " text-" + color + "-500 text-2xl"}></i>
                                </div>
                            </div>
                            <div>
                                <span className="text-green-500 font-medium">{Validacion.formatoDMABIEN(col.fecha)} </span>
                            </div>
                            <div>
                                <span className="text-800">{col.obs} </span>
                            </div>
                            <div>
                                <span className="text-800">
                                    <Button
                                        label='Ver Mas....'
                                        size='small'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            try {
                                                // Evaluar y ejecutar el código almacenado en 'metodo'
                                                eval(metodo);
                                            } catch (error) {
                                                console.error("Error al ejecutar el método:", error);
                                            }
                                        }}
                                        className='text-green-500'
                                        link
                                    />
                                </span>
                            </div>

                        </div>
                    </div>

                </React.Fragment>
            })}
        </div>
        </>
    )
}