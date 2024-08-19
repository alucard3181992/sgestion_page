/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExcelServicio } from "@/services/ExcelServicio";
//import XlsxPopulate from "xlsx-populate";
import {
  descargarExcel,
  nuevosDatosExcel,
  consultaExcel,
  modificarExcel,
  modificarExcel2,
} from "./funciones";

import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const VistaPrincipalExcel = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  const excel = new ExcelServicio();
  /* useEffect(() => {
    // Realiza la solicitud a la API
    const fetchData = async () => {
      try {
        //console.log("SI ME EJECUTO LLAMANDO AL GET");
        const response = await axios.get("/api/excel/generadorExcel");
        //const response = await fetch("/api/generadorExcel");
        //console.log("RESPONSE", response);
        const result = await response.data;
        setHeaders(result.headers); // Guarda los encabezados
        setData(result.data); // Guarda los datos
        //console.log("DATOS OBTENIDOS", result.headers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Deja de mostrar el loading una vez que los datos se han cargado
      }
    };

    fetchData();
  }, []); */

  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const response = await fetch("/icons/h/out.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        // Convertir el ArrayBuffer en Uint8Array para serializarlo fácilmente
        const uint8Array = new Uint8Array(arrayBuffer);
        const response2 = await axios.post("/api/excel/descargarExcel", {
          data: Array.from(uint8Array),
        });
        //console.log("RESPONSE 2 ", response2);
        if (response2.status === 200) {
          // Guarda los datos
          //console.log("DATASSSS", response2.data);
          setHeaders(response2.data.headers); // Guarda los encabezados
          setData(response2.data.dataNueva);
          //console.log("NUEVA OPCION SI FUNCIONA", response2.data);
        } else {
          console.error("NO FUNCIONA TAMPOCO");
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      } finally {
        setLoading(false); // Deja de mostrar el loading una vez que los datos se han cargado
      }
      try {
        excel
          .listar2()
          .then((data) =>
            console.log("DATA TRANSFORMADA", transformarDatos(data.data))
          );
      } catch (error) {
        console.log("ERROR  DATOS", error);
      }
      try {
        const excelCliente = {
          Codigo: "COD-450",
          Nombre: "SHEET Nombre",
          "Apellido Pat": "SHEET Ap",
          "Apellido Mat": "SHEET Am",
          Celular: "SHEET Celular",
          Dato1: "SHHET 5",
          Dato2: "SHHET 6",
          Dato22: "SHHET",
          Dato3: "SHHET 7",
          Dato4: "SHHET 8",
        };
        excel
          .create2(excelCliente)
          .then((data) => console.log("EL RETORNO ES ", data));
        
      } catch (error) {
        console.log("ERROR NUEVOS SHEET", error);
      }
    };

    fetchExcel();
  }, []);

  function transformarDatos(data) {
    // Extraer los encabezados (la primera fila del array)
    const headers = data[0];

    // Crear un nuevo array para los datos formateados
    const dataNueva = [];

    // Iterar sobre las filas de datos (excluyendo la primera fila de encabezados)
    for (let i = 1; i < data.length; i++) {
      const fila = data[i];
      const objeto = {};

      // Asignar cada valor de la fila a su correspondiente encabezado
      headers.forEach((header, index) => {
        if (fila[index]) {
          objeto[header] = fila[index];
        }
      });

      // Agregar el objeto formado al array de dataNueva
      dataNueva.push(objeto);
    }

    return { headers, dataNueva };
  }

  const nuevosDatos = () => {
    try {
      const excelCliente = {
        Codigo: "COD-11",
        Nombre: "SHEET Nombre",
        "Apellido Pat": "SHEET Ap",
        "Apellido Mat": "SHEET Am",
        Celular: "SHEET Celular",
        Dato1: "SHHET 5",
        Dato2: "SHHET 6",
        Dato22: "SHHET",
        Dato3: "SHHET 7",
        Dato4: "SHHET 8",
      };
      excel
        .create(excelCliente)
        .then((data) => console.log("EL RETORNO ES ", data));
    } catch (error) {
      console.log("ERROR NUEVOS SHEET", error);
    }
  };
  const eliminarExcel = () => {
    try {
      excel
        .eliminar("COD-6")
        .then((data) => console.log("EL RETORNO ES ", data));
    } catch (error) {
      console.log("ERROR ELIMINAR SHEET ", error);
    }
  };
  const modificarExcel = () => {
    try {
      const excelCliente = {
        Codigo: "COD-1",
        Nombre: "Cristian",
        "Apellido Pat": "Miranda",
        "Apellido Mat": "Miranda",
        Celular: "123456789",
        Dato1: "Datos1",
        Dato2: "Datos2",
        Dato22: "Datos3",
        Dato3: "Datos4",
        Dato4: "Datos5",
      };
      excel
        .modificar("COD-1", excelCliente)
        .then((data) => console.log("EL RETORNO ES ", data));
    } catch (error) {
      console.log("ERROR MODIFICAR SHEET ", error);
    }
  };
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-2">
        <Button
          label="NuevosExcel"
          rounded
          text
          onClick={nuevosDatosExcel}
          icon="pi pi-file-excel"
        />
        <Button
          label="NuevosExcel2"
          rounded
          severity="info"
          text
          onClick={nuevosDatos}
          icon="pi pi-file-excel"
        />
        <Button
          label="EliminarExcel2"
          rounded
          text
          severity="info"
          onClick={eliminarExcel}
          icon="pi pi-file-excel"
        />
        <Button
          label="ModificarExcel2"
          rounded
          text
          severity="info"
          onClick={modificarExcel}
          icon="pi pi-file-excel"
        />
        <Button
          label="DescargarExcel"
          rounded
          text
          onClick={descargarExcel}
          icon="pi pi-file-excel"
        />
        <Button
          label="ModificarExcel"
          rounded
          text
          onClick={modificarExcel}
          icon="pi pi-file-excel"
        />
        <Button
          label="ModificarExcel 2"
          rounded
          text
          onClick={modificarExcel2}
          icon="pi pi-file-excel"
        />

        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <DataTable
            value={data}
            stripedRows
            className="w-full"
            scrollable={false}
            selectionMode="radiobutton"
          >
            {headers.map((header, index) => (
              <Column key={index} field={header} header={header} />
            ))}
          </DataTable>
        )}
      </div>
    </React.Fragment>
  );
};

export default VistaPrincipalExcel;
