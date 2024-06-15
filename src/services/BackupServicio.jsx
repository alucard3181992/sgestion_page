import axios from "axios";
import { baseUrl} from "@/lib/ip";
export class BackupServicio {

    async generarCopia(backup) {
        return await axios.post(baseUrl + "api/backup/backup", backup);
    }
    async restaurar(backup) {
        return await axios.put(baseUrl + "api/backup/backup", backup);
    }
}