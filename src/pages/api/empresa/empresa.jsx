import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EmpresaBD = async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET": {
            try {
                const data = await prisma.empresa.findMany({
                    include: {
                        persona: {
                            include: {
                                telefono: true,
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
                const { cliente, telefono } = req.body;
                const estado = true;
                const persona = cliente.persona
                //console.log("PERSONA", cliente.persona);
                //console.log("TELEFONOS", telefono);
                let telefonos
                const result = await prisma.$transaction(async (prisma) => {
                    const persona1 = await prisma.persona.create({  // Insertar la nueva persona
                        data: persona
                    });

                    const cliente = await prisma.cliente.create({  // Insertar el nuevo cliente
                        data: {
                            estado,
                            persona: { connect: { idpe: persona1.idpe } }  // Conectar al registro de persona creado
                        }
                    });
                    if (telefono && telefono.length > 0) {
                        telefonos = [];
                        for (const tel of telefono) {
                            const telefonoCreado = await prisma.telefono.create({
                                data: {
                                    estado,
                                    numero: tel,
                                    persona: { connect: { idpe: persona1.idpe } }
                                }
                            });
                            telefonos.push(telefonoCreado);
                        }
                    }
                    return { persona1, cliente, telefonos };
                });
                //console.log("RESULTADO", result);
                return res.status(200).json({ message: 'TODO BIEN' });
            } catch (error) {
                console.error('Error al agregar nueva persona y cliente:', error);
                return res.status(500).json({ message: 'ERROR: ' + error.message });
            }
        }

        case "DELETE": {
            try {
                const { idcli, estado } = req.body
                const estadoreal = estado ? false : true
                const msg = estado ? "DADO DE BAJA" : "DADO DE ALTA"
                const valores = { estado: estadoreal }
                console.log("ME LLAMAN ELIMINAR ", req.body);
                await prisma.cliente.update({
                    where: {
                        idcli: idcli
                    },
                    data: valores
                })
                return res.status(200).json({ message: 'TODO BIEN', msg: msg })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }

        case "PUT": {
            try {
                //console.log("BODY", req.body);
                const { empresa, persona, telefono } = req.body
                const idpe = persona.idpe
                const idem = empresa.idem
                const estado = true;
                const valores = { ci: persona.ci, nombre: persona.nombre, ap: persona.ap, am: persona.am, direccion: persona.direccion, email: persona.email }
                const valores2 = { nit: empresa.nit, nom: empresa.nom, dir: empresa.dir, des: empresa.des, dep: empresa.dep }
                await prisma.$transaction(async (prisma) => {
                    await prisma.empresa.update({
                        where: {
                            idem: idem
                        },
                        data: valores2
                    })
                    await prisma.persona.update({
                        where: {
                            idpe: idpe
                        },
                        data: valores
                    })
                    if (telefono && telefono.length > 0) {
                        for (const tel of telefono) {
                            if (tel.accion === "agregar") {
                                await prisma.telefono.create({
                                    data: {
                                        estado,
                                        numero: tel.numero,
                                        persona: { connect: { idpe: idpe } }
                                    }
                                });
                            } else {
                                if (tel.accion === "eliminar") {
                                    await prisma.telefono.delete({
                                        where: {
                                            idtel: tel.idtel,
                                            idpe: idpe,
                                            numero: tel.numero
                                        }
                                    })
                                }
                            }
                        }
                    }
                });
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}

export default EmpresaBD