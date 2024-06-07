
    //carpeta services
    import axios from "axios";
    import { baseUrl } from "@/lib/ip";
    
    export class ClienteServicio {
        async listarCliente() {
            const datos = await axios.get(baseUrl + "api/clientes/cliente");
            return datos.data;
        }
        async create(cliente) {
            return await axios.post(baseUrl + "api/clientes/cliente", cliente)
        }
        async modificar(cliente, telefono) {
            return await axios.put(baseUrl + "api/clientes/cliente", { cliente, telefono });
        }
        async eliminar(cliente) {
            return await axios.delete(baseUrl + "api/clientes/cliente", { data: cliente });
        }
        
    }
    