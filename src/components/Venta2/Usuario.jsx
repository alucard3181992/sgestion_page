import React from "react";
import FormularioSD from "../Tabla/FormularioSD";

const VistaUsuarioExcel = ({ usuario, setUsuario }) => {

    return (<React.Fragment>
        <FormularioSD
            cliente={usuario}
            setCliente={setUsuario}
            disabled={true}
        />
    </React.Fragment>)
}
export default VistaUsuarioExcel