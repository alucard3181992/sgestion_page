// src/components/Contact.js

import React from "react";
import Map from "../Map";
import QRCode from "qrcode.react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function Contact() {
    return (
        <section id="contact" className="mbr-fullscreen">
            <div className="grid p-2">
                <div className="p-3 col-12">
                    <div className="grid card" style={{ height: "100%" }}>
                        <div className="col-12 md:col-6 lg:col-6" >
                            <Map style={{ height: "400px" }} center={[-21.5181771839151, -64.727141745742]} zoom={15} Localizar={"NO"}>
                                {({ TileLayer, Marker, Popup }) => (
                                    <>
                                        <TileLayer
                                            style={{ position: 'absolute', top: 10, left: 10, zIndex: 999 }}
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        />
                                        <Marker position={[-21.5181771839151, -64.727141745742]}>
                                            <Popup>
                                                {"BIENVENIDO"}<br /><a href={"https://maps.google.com/?q=" + -21.5181771839151 + "," + -64.727141745742}>IR</a>
                                            </Popup>
                                            <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}>
                                                <QRCode value={"https://maps.google.com/?q=" + -21.5181771839151 + "," + -64.727141745742} />
                                            </div>
                                            <div className="color-fondo w-full" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 999 }}>
                                                <div className="grid" style={{ marginBottom: 10 }}>
                                                    <div className="col-6 md:col-4 lg:col-4" >
                                                        <div>DIRECCION</div>
                                                        <div>CALLE TIGUIPA</div>
                                                        <div>TARIJA-BOLIVIA</div>
                                                    </div>
                                                    <div className="col-6 md:col-4 lg:col-4" >
                                                        <div>CORREO ELECTRONICO</div>
                                                        <div>sdhjsadhk@gmail.com</div>
                                                    </div>
                                                    <div className="col-6 md:col-4 lg:col-4" >
                                                        <div>NUMERO DE TELEFONO</div>
                                                        <div>+591- 7555-55 5 </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Marker>
                                    </>
                                )}
                            </Map>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <h2 className="font-bold text-4xl">
                                ¡Contrátame!
                            </h2>
                            <p className="font-500 mb-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                                suscipit officia aspernatur veritatis. Asperiores, aliquid?
                            </p>
                            <div className='mb-5' style={{ marginTop: 25 }}>
                                <span className="w-full p-float-label p-input-icon-right">
                                    <i className="pi pi-user" />
                                    <InputText
                                        type="text"
                                        className='w-full login lineaB'

                                    />
                                    <label className="font-bold">Usuario</label>
                                </span>
                            </div>
                            <div className='mb-5'>
                                <span className="w-full p-float-label p-input-icon-right">
                                    <i className="pi pi-send" />
                                    <InputText
                                        type="email"
                                        className='w-full login lineaB'
                                        style={{ backgroundImage: "none" }}
                                    />
                                    <label className="font-bold">Correo electrónico</label>
                                </span>
                            </div>
                            <div className='mb-5'>
                                <span className="w-full p-float-label p-input-icon-right">
                                    <i className="pi pi-comments" />
                                    <InputTextarea
                                        className='w-full login lineaB'
                                        style={{ backgroundImage: "none" }}
                                    />
                                    <label className="font-bold">Mensaje</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}