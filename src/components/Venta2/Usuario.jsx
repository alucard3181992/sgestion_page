import React from "react";
import FormularioSD from "../Tabla/FormularioSD";

const VistaUsuarioExcel = ({ usuario, setUsuario }) => {

    const listaClientes = [
        { cliente: "Juan Perez", direccion: "Av. Siempre Viva 123", "Cel/Telf": "123456789" },
        { cliente: "Maria Gomez", direccion: "Calle Falsa 456", "Cel/Telf": "987654321" },
        // Otros clientes...
    ];


    return (<React.Fragment>
        <FormularioSD
            cliente={usuario}
            setCliente={setUsuario}
        />
    </React.Fragment>)
}
export default VistaUsuarioExcel