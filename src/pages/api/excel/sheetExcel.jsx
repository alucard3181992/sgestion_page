const XlsxPopulate = require("xlsx-populate");

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {
      try {
        // Cargar el archivo Excel
        console.log("SOY GET SHEET DE EXCEL");
        const data = [];
        return res.status(200).json({ data });
      } catch (error) {
        console.log("EL ERROR ES", error);
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }
    case "POST": {
      try {
        console.log("SOY POST SHEET REQ", req.body);

        return res
          .status(200)
          .json({ message: "Datos añadidos correctamente." });
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
        console.log("SOY PUT SHEET REQ", req.body);
        return res
          .status(200)
          .json({ message: "Datos modificados correctamente." });
      } catch (error) {
        console.log("ERROR", error);
        return res.status(500).json({ message: "ERROR: " + error.message });
      }
    }
  }
}
