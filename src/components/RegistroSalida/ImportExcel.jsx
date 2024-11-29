import React, { useState } from "react";
import * as XLSX from "xlsx";
import { format, parseISO, parse } from "date-fns";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";

const ImportExcel = ({ onImport }) => {
  const handleUpload = async (event) => {
    console.log("MI LLAMAN");
    const file = event.files[0];
    if (file) {
      handleImport(file);
    }
  };
  const handleImport = (file) => {
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const wb = XLSX.read(binaryString, { type: "binary" });
      const sheet = wb.Sheets[wb.SheetNames[0]];

      // Convertir los datos de la hoja a JSON
      let data = XLSX.utils.sheet_to_json(sheet);

      // Normalizar las fechas
      data = data.map((row) => {
        if (row.date) {
          // Si la fecha es texto en formato DD/MM/YYYY
          if (typeof row.date === "string" && row.date.includes("/")) {
            const [day, month, year] = row.date.split("/");
            row.date = new Date(year, month - 1, day).toISOString();
          }
          // Si ya está en formato ISO, usarla directamente
          else if (typeof row.date === "string") {
            row.date = parseISO(row.date).toISOString();
          }
          // Si es un número (formato Excel)
          else if (typeof row.date === "number") {
            const parsedDate = XLSX.SSF.parse_date_code(row.date);
            row.date = new Date(
              parsedDate.y,
              parsedDate.m - 1,
              parsedDate.d
            ).toISOString();
          }
        }
        return row;
      });

      onImport(data); // Pasar los datos normalizados
    };
    reader.readAsBinaryString(file);
  };

  return (
    <Card>
      <center>
        <div>
          <FileUpload
            name="invoice"
            accept=".xlsx, .xls"
            /* customUpload={true}
            uploadHandler={handleUpload} */
            onUpload={handleUpload}
            chooseLabel="Seleccionar archivo"
            uploadLabel="Cargar datos"
            cancelLabel="Cancelar"
          ></FileUpload>
        </div>
      </center>
    </Card>
  );
};

export default ImportExcel;
