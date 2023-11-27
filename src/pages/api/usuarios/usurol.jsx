import prisma from '@/lib/prisma';

const MenuRolBD = async (req, res) => {
    const { method } = req;
    //console.log("METODO ", method);
    switch (method) {
        case "PUT": {
            try {
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "GET": {
            try {
                return res.status(200).json({ message: 'TODO BIEN' })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "DELETE": {
            try {
                const { usu, rol } = req.body
                await prisma.usurol.delete({
                    where: {
                        idu: usu,
                        idr: rol,
                    }
                })
                return res.status(200).json({ message: 'TODO BIEN' })
            } catch (error) {
                console.log("ERROR", error);
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }

        case "POST": {
            try {
                const { usu, rol } = req.body
                const data = { idu: usu, idr: rol }
                await prisma.usurol.create({
                    data: data
                })
                return res.status(200).json({ message: 'TODO BIEN' })
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}
export default MenuRolBD