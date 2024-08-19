import axios from "axios";

export class ExcelServicio {
  async listar() {
    const datos = await axios.get(
      "https://sheet.best/api/sheets/014325b8-6cdd-4f8b-b076-b4f0bb8cdb96"
    );
    return datos.data;
  }
  async create(excel) {
    return await axios.post(
      "https://sheet.best/api/sheets/014325b8-6cdd-4f8b-b076-b4f0bb8cdb96",
      excel
    );
  }

  async modificar(codigo, excel) {
    return await axios.put(
      `
      https://sheet.best/api/sheets/014325b8-6cdd-4f8b-b076-b4f0bb8cdb96/Codigo/*${codigo}*`,
      excel
    );
  }
  async eliminar(excel) {
    return await axios.delete(`
      https://sheet.best/api/sheets/014325b8-6cdd-4f8b-b076-b4f0bb8cdb96/Codigo/*${excel}*`);
  }

  async listar2() {
    const datos = await axios.get(
      "https://script.google.com/macros/s/AKfycbyhgAkxboUhj_PekQ_1EiKGJSgwFNcZGykUM3DBCcpb5OcaFod_ePm5WfzkBeDwnYI6NA/exec"
    );
    return datos;
  }
  async create2(excel) {
    return await axios.post(
      "https://script.google.com/macros/s/AKfycbz7ENF5-h3UAv5vQGcHXOuLwFjp_MjUnd7LvayZ246IlzH8oOdzEMV4qUo0tEAxZxt1Tw/exec",
      excel
    );
  }
}
