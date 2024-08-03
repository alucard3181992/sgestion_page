import React from "react";
import FormularioSD from "../Tabla/FormularioSD";

const VistaClienteExcel = ({ cliente, setCliente, clienteVacio }) => {

    const listaClientes = [
        { cliente: "Juan Perez", direccion: "Av. Siempre Viva 123", "Cel/Telf": "123456789" },
        { cliente: "Maria Gomez", direccion: "Calle Falsa 456", "Cel/Telf": "987654321" },
        // Otros clientes...
    ];


    return (<React.Fragment>
        <FormularioSD
            cliente={cliente}
            setCliente={setCliente}
            buscar={true}
            lista={listaClientes}
            elemento="cliente"
            clienteVacio={clienteVacio}
        />
    </React.Fragment>)
}
export default VistaClienteExcel