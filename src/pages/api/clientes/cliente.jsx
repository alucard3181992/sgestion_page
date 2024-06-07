

import prisma from '@/lib/prisma';

const ClienteBD = async (req, res) => {
    const { method } = req;
    //console.log("METODO ", method);
    switch (method) {
        case "GET": {
            try {
                const data = await prisma.cliente.findMany({
                    select: {
                        idcli: true,
                        persona: true,
                    }
                })
                return res.status(200).json(data)
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "PUT": {
            try {

                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "DELETE": {
            try {

                return res.status(200).json({ message: 'TODO BIEN', msg: msg })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }

        case "POST": {
            try {

                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}
export default ClienteBD
