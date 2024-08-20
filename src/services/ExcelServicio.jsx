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
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyN1kxdR5JkVsEyX5XCnvdxNfUHjG4Tj4yHdc34ey96fGwRrKeuox03cJ_aUMoM9pZgxw/exec",
        {
          method: "POST",
          body: JSON.stringify(excel),
        }
      );
      const output = await res.text();
      return output;
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      return error;
    }
  }
  async modificar2(codigo, excel) {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxrZpHFLIw_0QjH4V0lF47fVIO5UmzLAJHq09evXAUsShUmeRxC1OPc1EPAlFPKnej4ig/exec",
        {
          method: "POST",
          body: JSON.stringify(excel),
        }
      );
      const output = await res.text();
      console.log("RESP", output);
      return output;
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      return error;
    }
  }
  async listar3() {
    console.log("ME LLAMAN LISTAR 3");
    const datos = await axios.get(
      "https://script.google.com/macros/s/AKfycbwRRnfL9GB11lLBDuw2X1mjCyqPR1nnzKuXIAGP7X_x18V2_R6RWaoLA7NNC5IiYSOO/exec"
    );
    return datos;
  }
  async create3(excel) {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwvfHdxRAeHxs3gP6amXl4VfSn4qM5ckDAQ-wUJvwrbQi6OF4zJIXA_o3LeCLDxxjRV/exec",
        {
          method: "POST",
          body: JSON.stringify(excel),
        }
      );
      const output = await res.text();
      return output;
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      return error;
    }
  }
}
