import { PDFViewer, usePDF, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ToggleButton } from 'primereact/togglebutton';
import React, { useState } from 'react';

export default function DocumentoPdf({ imagen1, imagen2 }) {
    const [tamañoHoja, setTamañoHoja] = useState("LETTER")
    const [orientacion, setOrientacion] = useState(true)
    const [tamañoImagen, setTamañoImagen] = useState({ "alto": 10, "ancho": 15 })
    const [copias, setCopias] = useState(1)

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 20,
        },
        body: {
            padding: 20,
        },
        imagenes: {
            width: cambioPixel(tamañoImagen.ancho) + "px",
            height: cambioPixel(tamañoImagen.alto) + "px",
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
        },
        row1: {
            width: cambioPixel(tamañoImagen.ancho) + "px",
            height: cambioPixel(tamañoImagen.alto) + "px",
            borderBottom: '1px solid #EEE',
            borderLeft: '1px solid #EEE',
        },
        tableCellImg: {
            padding: 0,
            margin: 0,
        },
    });

    const renderImages = () => {
        const elements = [];

        for (let i = 0; i < copias; i++) {
            elements.push(
                <View key={i} style={displayImg()}>
                    <Image alt="Cargando Imagen..." style={[styles.row1, styles.tableCellImg]} src={imagen1} />
                    <Image alt="Cargando Imagen..." style={[styles.row1, styles.tableCellImg]} src={imagen2} />
                </View>
            );
        }

        return elements;
    };

    function displayImg() {
        const flex = {
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
        }
        const grid = {
            display: 'grid',
            margin: 5,
        }
        return orientacion ? flex : grid
    }
    function cambioPixel(valor) {
        const cambio = valor * 28.35
        const cambio1 = cambio.toFixed(0)
        const cambio2 = parseInt(cambio1)
        return cambio2
    }
    const tamaños = [
        { name: 'A4', code: 'A4' },
        { name: 'Carta', code: 'LETTER' },
        { name: 'Oficio', code: 'LEGAL' },
        { name: 'Folio', code: 'FOLIO' },
    ];

    const meRenderizo = () => {
        console.log("ME REENDERIZO");
    }


    return (<React.Fragment>
        <div className=''>
            <div className='grid'>
                <div className='col-12'>
                    <div className='centro-total gap-3 mb-3'>
                        <ToggleButton tooltip={"¿ Orientacion de las Imagenes ?"}
                            checked={orientacion}
                            onChange={(e) => setOrientacion(e.value)}
                            onIcon="pi pi-arrows-v" offIcon="pi pi-arrows-h"
                            onLabel="Vertical" offLabel="Horizontal"
                            tooltipOptions={{ position: "bottom" }}
                            className={`border-none ${orientacion ? '' : 'bg-red-500'}`}
                        />
                        <div className={orientacion ? 'flex gap-1 p-inputgroup-addon' : 'gap-1 d-grid p-inputgroup-addon'}>
                            <div style={{ width: orientacion ? 15 : 30, height: orientacion ? 30 : 15, border: "1px solid #383838" }}></div>
                            <div style={{ width: orientacion ? 15 : 30, height: orientacion ? 30 : 15, border: "1px solid #383838" }}></div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='centro-total gap-3 mb-3'>
                        {tamañoImagen && Object.keys(tamañoImagen).map((campo, index) => (
                            <div className="p-float-label" key={index + campo}>
                                <InputNumber
                                    id="ancho"
                                    value={tamañoImagen[campo]}
                                    onValueChange={(e) => {
                                        const newComision = e.value;
                                        setTamañoImagen({ ...tamañoImagen, [campo]: newComision });
                                    }}
                                    showButtons
                                    buttonLayout="horizontal"
                                    tooltip={campo}
                                    tooltipOptions={{ position: 'top' }}
                                    suffix=" cm"
                                    step={0.50}
                                    maxFractionDigits={2}
                                    min={0}
                                    max={100}
                                    className={"w-full"}
                                    incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                                />
                                <label htmlFor={campo}>
                                    <i className={campo === "alto" ? "pi pi-arrows-v" : "pi pi-arrows-h"}></i>
                                    {campo} (cm)
                                </label>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='col-12'>
                    <div className='centro-total gap-3'>
                        <div className="p-float-label">
                            <Dropdown
                                value={tamaños.find(item => item.code === tamañoHoja) || null}
                                id="dd"
                                onChange={(e) => {
                                    setTamañoHoja(e.value ? e.value.code : null)
                                }}
                                options={tamaños}
                                optionLabel="name"
                                filter
                                showClear
                                style={{ width: "250px" }}
                                placeholder="Selecciona el tamaño de la hoja"
                            />
                            <label>Tamaño de la Hoja</label>
                        </div>
                        <div className="p-float-label">
                            <InputNumber
                                id="ancho"
                                value={copias}
                                onValueChange={(e) => setCopias(e.value)}
                                showButtons
                                buttonLayout="horizontal"
                                tooltip={"Numero de Copias"}
                                tooltipOptions={{ position: 'top' }}

                                step={1}
                                maxFractionDigits={0}
                                min={1}
                                max={100}
                                className={"w-full"}
                                incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                            />
                            <label>Copias</label>
                        </div>
                    </div>

                </div>
                <div className='col-12'>
                    <div className='centro-total'>
                        {imagen1 && imagen2 && <PDFViewer style={{ width: '90%', height: '50vh' }}>
                            <Document
                                title="Alucard"
                                author='Alucard'
                                creator='Alucard'
                                keywords='Pdf'
                                producer='Alucard'
                                subject='Alucard'
                                /* onRender={meRenderizo} */
                            >
                                <Page
                                    size={tamañoHoja}
                                    style={styles.body}
                                >
                                    <View style={styles.table}>
                                        {renderImages()}
                                    </View>
                                </Page>
                            </Document>
                        </PDFViewer>}
                        <>
                        </>
                    </div>
                </div>

            </div>


        </div >
    </React.Fragment >)
}


