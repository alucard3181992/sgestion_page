import axios from "axios";
import { baseUrl } from "@/lib/ip";

export class UsuarioServicio {
    async listarUsuarios() {
        const datos = await axios.get(baseUrl + "api/usuarios/usuario");
        return datos.data;
    }
    async listarRoles() {
        const datos = await axios.get(baseUrl + "api/rol/rol");
        return datos.data;
    }
    async listarEmpresa() {
        const datos = await axios.get(baseUrl + "api/empresa/empresa");
        return datos.data;
    }
    async create(cliente) {
        return await axios.post(baseUrl + "api/usuarios/usuario", cliente)
    }

    async modificar(cliente, telefono) {
        return await axios.put(baseUrl + "api/usuarios/usuario", { cliente, telefono });
    }
    async eliminar(cliente) {
        return await axios.delete(baseUrl + "api/usuarios/usuario", { data: cliente });
    }

    async usuRol(usu, rol, accion) {
        if (accion === "agregar") {
            return await axios.post(baseUrl + "api/usuarios/usurol", { usu, rol });
        } else {
            if (accion === "quitar") return await axios.delete(baseUrl + "api/usuarios/usurol", { data: { usu, rol } });
        }
    }
}