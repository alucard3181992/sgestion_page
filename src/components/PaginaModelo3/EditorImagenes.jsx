import React, { useState } from "react"
import Archivo from "../CargarImagen/Archivo"
import RecortarImagen from "../CargarImagen/RecortarImagen"
import DocumentoPdf from "./DocumentoPdf"

export default function EditorImagen() {
    const [imagen, setImagen] = useState({ imagen1: null, imagen2: null })

    const codigoBase64 = (base64) => {
        console.log("LO QUE LLEGA ES", base64);
        setImagen(base64)
    }
    return (<React.Fragment>
        <div className="card">
            <div className="grid nested-grid">
                <div className="col-12">
                    <div className="text-center p-3 border-round-sm h-full  font-bold">
                        <label className="font-bold text-blue-600 text-4xl">Recortar Imagen</label>
                        <RecortarImagen />
                    </div>
                </div>
                <div className="col-12">
                    <div className="text-center p-3 border-round-sm h-full  font-bold">
                        <label className="font-bold text-blue-600 text-4xl">Imagen para Colorear</label>
                        <Archivo codigoBase64={codigoBase64}></Archivo>
                        <DocumentoPdf imagen1={imagen.imagen1} imagen2={imagen.imagen2} />
                    </div>
                </div>
                {/* <div className="col-12">
                    <div className="grid">
                        {imagen && Object.keys(imagen).map((color, index) => (
                            <div className="col-6" key={index}>
                                <div className="text-center p-3 border-round-sm font-bold">{color}</div>
                                <div className=''>
                                    <Image src={imagen[color]} alt="Optimizada" preview downloadable className="ImgnormalColores border-round" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

            </div>
        </div>
    </React.Fragment>)
}