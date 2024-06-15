import React, { useRef, useState } from 'react';

import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';
import { Image } from 'primereact/image';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { BlockUI } from 'primereact/blockui';

import { Validacion } from '@/recursos/js/Validacion';

import { BackupServicio } from '@/services/BackupServicio';
import { Toast } from 'primereact/toast';
import { Messages } from 'primereact/messages';

export default function VistaBackup() {
    const backupServicio = new BackupServicio();
    const [backupPath, setBackupPath] = useState({ nombre: "IN-" + Validacion.formatoDMA3(new Date()), ruta: "E:/Backups/" });
    const [archivo, setArchivo] = useState({ nombre: "", ruta: "E:/Backups/" });
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    const [bloqueo, setBloqueo] = useState(false);
    const toast = useRef(null);
    const msgs = useRef(null);

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        setArchivo({ ...archivo, nombre: "", })
        mensaje2(false, "error", "", "Archivo Removido " + file.name, 2000)
        callback();
    };

    const handleUpload = async (event) => {
        setBloqueo(true)
        const file = event.files[0];
        mensaje2(false, "info", "", "Archivo Seleccionado " + file.name, 2000)
        setArchivo({ ...archivo, nombre: file.name, });
        setBloqueo(false)
    };
    const mensaje1 = (Estado, Titulo, Mensaje) => {
        toast.current.show({ severity: Estado, summary: Titulo + "  ", detail: Mensaje, life: 3000 });
    };
    const mensaje2 = (Duracion, Estado, Titulo, Mensaje, Vida) => {
        msgs.current.show({ sticky: Duracion, severity: Estado, summary: Titulo + "  ", detail: Mensaje, life: Vida })
    }
    const cargar = () => {
        return (
            <div> <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem', color: 'var(--primary-color)' }}></i> </div>
        );
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column" >
                <i className="pi pi-database p-5" style={{ fontSize: '3em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1em', color: 'var(--text-color-secondary)' }} >
                    Arrastre y suelte la copia aquí
                </span>
            </div>
        );
    };
    async function generarBackup() {
        const res = await backupServicio.generarCopia(backupPath)
        if (res.data.message === "TODO BIEN") {
            mensaje1("success", "", " COPIA CREADA CON EXITO ")
        } else {
            mensaje2("error", "", " ERROR EN LOGICA ")
        }
    }
    async function restaurarBackup(callback) {
        const res = await backupServicio.restaurar(archivo)
        if (res.data.message === "TODO BIEN") {
            setTotalSize(0)
            setArchivo({ ...archivo, nombre: "", })
            mensaje1("success", "", " RESTAURACION COMPLETADA ")
            callback()
        } else {
            mensaje2("error", "", " ERROR EN LOGICA ")
        }
    }
    const botonDeSubida = () => {
        return (<>
            <Button type="button"
                icon="pi pi-fw pi-verified"
                className='custom-upload-btn p-button-rounded p-button-outlined'
                disabled
            />
        </>
        )
    }
    const headerTemplate = (options) => {
        const { className, chooseButton } = options;
        const value = totalSize / 1000000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';
        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {totalSize === 0 ? chooseButton : botonDeSubida()}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 100 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };
    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });
        if (_totalSize <= 100000000) {
            setTotalSize(_totalSize)
        }

    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const itemTemplate = (file, props) => {
        return (
            <BlockUI blocked={bloqueo} template={cargar} >
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <div className="galleria-demo flex justify-content-center">
                            <div className='ContenedorImg' style={{ display: "contents" }}>
                                {/* <Image src="/icons/bd.png" alt="Original" className="Imgnormal1 border-round" style={{ height: "150px", width: "50%" }} /> */}
                                <i className="pi pi-database p-5" style={{ fontSize: '3em', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'var(--surface-d)' }}></i>
                                <div className='IzquierdaArriba' style={{ top: 5 }}>
                                    <Button type="button"
                                        icon="pi pi-fw pi-cloud-upload"
                                        tooltip='Restaurar Copia De Seguridad'
                                        tooltipOptions={{ position: "bottom" }}
                                        className='custom-upload-btn p-button-success p-button-rounded p-button-outlined'
                                        onClick={() => restaurarBackup(props.onRemove)}
                                    />
                                </div>
                                <div className='IzquierdaAbajo' style={{ bottom: 0 }}>
                                    <Tag value={props.formatSize} />
                                </div>
                                <div className='DerechaArriba' style={{ top: 5 }}>
                                    <Button type="button"
                                        icon="pi pi-times"
                                        tooltip='Quitar'
                                        tooltipOptions={{ position: "left" }}
                                        className="p-button-outlined p-button-rounded p-button-danger ml-auto"
                                        onClick={() => onTemplateRemove(file, props.onRemove)} />

                                </div>

                                <span className="text-500 font-medium DerechaAbajo" style={{ bottom: 0, width: "auto" }}>{file.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockUI>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-database', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    return (
        <div>
            <Toast ref={toast} />
            <Messages ref={msgs} />
            <h2>Copia de Seguridad y Restauración</h2>
            <div className='card'>
                <div className="flex align-items-center gap-2 mb-5">
                    <div className="p-inputgroup flex-1">
                        <span className='p-float-label font-bold'>
                            <InputText
                                id='bnombre'
                                value={backupPath.nombre}
                                onChange={(e) => { setBackupPath({ ...backupPath, nombre: e.target.value }) }} />
                            <label htmlFor='bnombre'>NONBRE:</label>
                        </span>
                        <Button label='Generar Backup'
                            onClick={generarBackup}
                            className='w-full'
                            tooltip='Generar Copia de Seguridad de la base de datos del Sistema'
                            tooltipOptions={{ position: "bottom" }} />
                    </div>
                </div>
                <small className="font-bold">Ruta de Guardado: {backupPath.ruta + backupPath.nombre + ".backup"}</small>
            </div>
            <FileUpload
                accept=".backup"
                customUpload={true}
                uploadHandler={handleUpload}
                mode="advanced"
                auto={true}
                chooseOptions={chooseOptions}
                invalidFileSizeMessageDetail="Maximo de subida 100Mb"
                invalidFileSizeMessageSummary=" "
                maxFileSize={100000000}
                emptyTemplate={emptyTemplate}
                itemTemplate={itemTemplate}
                headerTemplate={headerTemplate}
                ref={fileUploadRef}
                onSelect={onTemplateSelect}
                onClear={onTemplateClear}

            />
        </div>
    );
}
