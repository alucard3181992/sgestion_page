import axios from "axios";
export const nuevosDatosExcel = async () => {
  console.log("ME LLAMAN NUEVOS ");
  const response = await axios.post("/api/excel/generadorExcel", [
    "Juan Pérez NUEVO",
    "Desarrollador Web NUEVO",
    "555-1234456",
  ]);
  console.log("RESPONSE DE POST", response);
  if (response.statusText === "OK") {
    console.log("Variables saved successfully!");
  } else {
    console.error("Failed to save variables");
  }
};

export const consultaExcel = async () => {
  console.log("SI ME EJECUTO LLAMANDO AL GET");
  const response = await axios.get("/api/excel/generadorExcel");
  const result = await response.data;
  console.log("RESULTADO DE GET", result);
  if (response.statusText === "OK") {
    console.log("Variables saved successfully!");
  } else {
    console.error("Failed to save variables");
  }
};

export const descargarExcel = async () => {
  await axios({
    url: "/api/excel/descargarExcel",
    method: "GET",
    responseType: "blob", // Cambiamos para manejar blobs
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "archivo.xlsx";
      document.body.appendChild(a); // Necesario para Firefox
      a.click();
      a.remove();
    })
    .catch((error) => console.error("Error downloading file:", error));
};
export const modificarExcel = async () => {
  const response = await axios.put("/api/excel/generadorExcel", {
    codigo: "COD-7",
  });
  if (response.statusText === "OK") {
    console.log("Variables saved successfully!");
  } else {
    console.error("Failed to save variables");
  }
};
export const modificarExcel2 = async () => {
  const response = await fetch("/icons/h/out.xlsx");
  const arrayBuffer = await response.arrayBuffer();
  // Convertir el ArrayBuffer en Uint8Array para serializarlo fácilmente
  const uint8Array = new Uint8Array(arrayBuffer);
  const response2 = await axios.put("/api/excel/descargarExcel", {
    codigo: "COD-4",
    data: Array.from(uint8Array),
  });
  console.log("SOY RESPONDE 2", response2);
  if (response2.status === 200) {
    console.log("Variables saved successfully!");
  } else {
    console.error("Failed to save variables");
  }
};
