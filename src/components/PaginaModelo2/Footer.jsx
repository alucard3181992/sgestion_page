import React from "react";
import { Image } from "primereact/image";
export default function Footer() {
    return (
        <section id="footer" className="" style={{
            zIndex: 0, top: 0, backgroundImage: "none", position: "relative",
            background: "#1e1e1e"
        }}>
            <div className="grid p-2">
                <div className="col-6 md:col-3 lg:col-3 centro-total">
                    <div style={{ width: 150 }}>
                        <Image alt="Cargando Imagen..." src="/icons/img/mundo.png" className="ImgnormalInicio" />
                    </div>
                </div>
                <div className="col-6 md:col-3 lg:col-3 centro-total" >
                    <div className="p-2">
                        <div className="text-bold text-2xl mb-3"> Address</div>
                        <div className="font-500 mb-3">Calle Sin Nombre</div>
                        <div className="font-500 mb-3">Ciudad Sin Nombre</div>
                    </div>
                </div>
                <div className="col-6 md:col-3 lg:col-3 centro-total" >
                    <div className="p-2">
                        <div className="text-bold text-2xl mb-3"> Contacts</div>
                        <div className="font-500 mb-3">Calle Sin Nombre</div>
                        <div className="font-500 mb-3">Ciudad Sin Nombre</div>
                        <div className="font-500 mb-3">Ciudad Fax</div>
                    </div>
                </div>
                <div className="col-6 md:col-3 lg:col-3 centro-total" >
                    <div className=" p-2 gap-2">
                        <div className="text-bold text-2xl mb-3"> Algo Mas....</div>
                        <div className="font-500 mb-3 text-orange-500">Calle Sin Nombre</div>
                        <div className="font-500 mb-3 text-blue-500">Ciudad Sin Nombre</div>
                        <div className="font-500 mb-3 text-purple-500">Ciudad Fax</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="flex flex-wrap gap-5 mb-2 centro-total">
                        <i className="pi pi-twitter" />
                        <i className="pi pi-facebook" />
                        <i className="pi pi-whatsapp" />
                    </div>
                    <hr className="linea3"></hr>
                </div>
                <div className="col-12 text-center" >
                    © Copyright 2023 - All Rights Reserved
                </div>
            </div>
        </section >
    );
}