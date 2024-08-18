const XlsxPopulate = require("xlsx-populate");

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {
      try {
        // Cargar el archivo de Excel existente
        const workbook = await XlsxPopulate.fromFileAsync("./out.xlsx");

        // Convertir el archivo a un buffer para enviarlo como respuesta
        const buffer = await workbook.outputAsync();

        // Enviar el archivo como respuesta
        res.setHeader(
          "Content-Disposition",
          'attachment; filename="archivo.xlsx"'
        );
        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        return res.status(200).send(buffer);
      } catch (error) {
        console.log("ERROR", error);
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }

    case "POST": {
      try {
        //console.log("SOY POST DE DESCARGA", req.body);

        const { data } = req.body;
        if (!data) {
          throw new Error("No data received");
        }

        // Convertir el array de vuelta a Uint8Array
        const uint8Array = new Uint8Array(data);

        // Si necesitas trabajar con XlsxPopulate:
        const workbook = await XlsxPopulate.fromDataAsync(uint8Array.buffer);
        const sheet = workbook.sheet(0);

        // Determinar la última fila y columna con datos
        const lastRow = sheet.usedRange().endCell().rowNumber();
        const lastCol = sheet.usedRange().endCell().columnNumber();

        // Función para convertir número de columna a letra
        function numberToColumn(number) {
          let column = "";
          while (number > 0) {
            const modulo = (number - 1) % 26;
            column = String.fromCharCode(65 + modulo) + column;
            number = Math.floor((number - modulo) / 26);
          }
          return column;
        }

        // Obtener el rango dinámicamente
        const tableRange = sheet.range(
          `A1:${numberToColumn(lastCol)}${lastRow}`
        );

        // Obtener todos los valores del rango en forma de array
        const allValues = tableRange.value();

        // Obtener los encabezados (primer fila del rango)
        const headers = allValues[0];

        // Crear un array de objetos donde cada objeto representa una fila con sus claves basadas en los encabezados
        const dataNueva = allValues.slice(1).map((row) => {
          let rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        console.log("Workbook cargado correctamente");
        /* console.log("HEADERS", headers);
        console.log("DATA", dataNueva); */
        return res.status(200).json({ headers, dataNueva });
        /* return res
          .status(200)
          .json({ message: "Datos añadidos correctamente." }); */
      } catch (error) {
        console.error("Error al modificar el archivo:", error.message);
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }

    case "DELETE": {
      try {
        return res.status(200).json({ message: "TODO BIEN" });
      } catch (error) {
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }

    case "PUT": {
      try {
        console.log("SOY PUT DE DESCARGA", req.body);

        const { data, codigo } = req.body;
        if (!data) {
          throw new Error("No data received");
        }

        // Convertir el array de vuelta a Uint8Array
        const uint8Array = new Uint8Array(data);

        // Si necesitas trabajar con XlsxPopulate:
        const workbook = await XlsxPopulate.fromDataAsync(uint8Array.buffer);
        const sheet = workbook.sheet(0);
        const lastRow = sheet.usedRange().endCell().rowNumber();
        const lastCol = sheet.usedRange().endCell().columnNumber();
        for (var i = 1; i <= lastRow; i++) {
          if (sheet.cell(`A${i}`).value() === codigo) {
            sheet.cell(`B${i}`).value("Encontrado NUEVO NUBE");
            sheet.cell(`C${i}`).value("Encontrado NUEVO NUBE");
            sheet.cell(`D${i}`).value("Encontrado NUEVO NUBE");
            sheet.cell(`E${i}`).value("Encontrado NUEVO NUBE");
          }
        }

        // 4. Guarda el archivo con los nuevos datos añadidos
        await workbook.toFileAsync("./public/icons/h/out.xlsx");
        return res.status(200).send({ message: "TODO BIEN: " });
      } catch (error) {
        console.log("ERROR", error);
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }
  }
}
