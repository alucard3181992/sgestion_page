import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Usuario2BD = async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET": {
            try {
                const data = await prisma.usuario.findMany({
                    select: {
                        idu: true,
                        persona: {
                            select: {
                                idpe: true,
                                nombre: true,
                                ap: true,
                                am: true,
                            }
                        }
                    }
                })
                return res.status(200).json(data)
            } catch (error) {
                console.log("ERROR", error);
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "POST": {
            try {
                //console.log("RESULTADO", result);
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
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}

export default Usuario2BD