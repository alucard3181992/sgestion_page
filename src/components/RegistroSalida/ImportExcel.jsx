import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ImportExcel = ({ onImport }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleImport = () => {
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const wb = XLSX.read(binaryString, { type: "binary" });
      const sheet = wb.Sheets[wb.SheetNames[0]]; // Obtener la primera hoja

      const data = XLSX.utils.sheet_to_json(sheet); // Convertir la hoja a JSON
      onImport(data); // Pasar los datos al componente principal
    };
    reader.readAsBinaryString(file);
  };

  return (
    <Card>
      <center>
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* El input de tipo file está visible, pero muy transparente y colocado encima del label */}
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            id="uploadExcel"
            className="p-button"
          />
          {/* El botón será el que se ve en la UI */}
          {file && <span> {file.name}</span>}{" "}
          {/* Mostrar el nombre del archivo cargado */}
          <Button
            label="Importar"
            onClick={handleImport}
            icon="pi pi-check"
            className="p-button-success"
          />
        </div>
      </center>
    </Card>
  );
};

export default ImportExcel;
