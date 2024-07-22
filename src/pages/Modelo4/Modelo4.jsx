import React, { useEffect, useState } from "react"
import VistaGeneradora from "@/components/Generador/VistaGeneradora";
import AuthWrapper from "@/components/Componentes/AuthWrapper";
import VentaExcel from "@/components/Venta2/VentaExcel";
import VistaPrincipalVenta from "@/components/Venta/Venta";
import VistaPrincipalVenta3 from "@/components/Venta3/Venta3";
import { MultiStateCheckbox } from "primereact/multistatecheckbox";

export default function Modelo4() {

    useEffect(() => {
    }, []);

    const [vista, setVista] = useState("VentaExcel")
    const options = [
        { value: 'VentaProductos', icon: 'pi pi-globe' },
        { value: 'VentaExcel', icon: 'pi pi-lock' }
    ];

    return (<React.Fragment>

        <AuthWrapper correctPassword="admin12">
            {/* <VistaGeneradora /> */}
            <div className="card flex flex-column align-items-center gap-3">
                <MultiStateCheckbox value={vista} onChange={(e) => setVista(e.value)} options={options} optionValue="value" />
                <span>{vista || 'Sin Vista'}</span>
            </div>
            {vista === "VentaProductos" ? <VistaPrincipalVenta />
                :
                vista === "VentaExcel" ? <VentaExcel /> : <VistaPrincipalVenta3 />}

        </AuthWrapper>
    </React.Fragment>)
}

