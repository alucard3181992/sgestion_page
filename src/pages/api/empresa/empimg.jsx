import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EmpresaIMGBD = async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET": {
            try {

                return res.status(200).json(data)
            } catch (error) {
                console.log("ERROR", error);
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "POST": {
            try {
                return res.status(200).json({ message: 'TODO BIEN' });
            } catch (error) {
                console.error('Error al agregar nueva persona y cliente:', error);
                return res.status(500).json({ message: 'ERROR: ' + error.message });
            }
        }

        case "DELETE": {
            try {
                return res.status(200).json({ message: 'TODO BIEN', msg: msg })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }

        case "PUT": {
            try {
                //console.log("BODY", req.body);
                const { datos } = req.body
                if (datos.tabla === "persona") {
                    await prisma.persona.update({
                        where: {
                            idpe: datos.idpe
                        },
                        data: {
                            base64: datos.base64
                        }
                    })
                } else {
                    if (datos.tabla === "empresa") {
                        await prisma.empresa.update({
                            where: {
                                idem: datos.idem
                            },
                            data: {
                                base64: datos.base64
                            }
                        })
                    }
                }
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}

export default EmpresaIMGBD