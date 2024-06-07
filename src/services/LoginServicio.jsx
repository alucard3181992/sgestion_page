import axios from "axios";
import { baseUrl } from "@/lib/ip";

export class LoginServicio {
    async listar(datosLogin) {
        const datos = await axios.post(baseUrl + "api/login", datosLogin);
        return datos.data;
    }
    async verificar() {
        const datos = await axios.get(baseUrl + "api/login");
        return datos.data;
    }
    async eliminar() {
        const datos = await axios.delete(baseUrl + "api/login");
        return datos;
    }
    async imagen(id) {
        const datos = await axios.put(baseUrl + "api/login", { id });
        return datos.data;
    }
    async prueba() {
        const datos = await axios.get(baseUrl + "api/usuarios/usuario");
        return datos.data;
    }
    async prueba2() {
        const datos = await axios.get("http://localhost:3000/api/rol/rol");
        return datos.data;
    }
    async ListarOrden() {
        const datos = await axios.get(baseUrl + "api/orden/orden");
        return datos.data;
    }

}