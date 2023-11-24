import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const UsuarioBD = async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET": {
            try {
                const data = await prisma.usuario.findMany({
                    select: {
                        idu: true,
                        sexo: true,
                        fecnac: true,
                        idpe: true,
                        estado: true,
                        persona: {
                            include: {
                                telefono: true,
                            }
                        },
                        datos: true,
                        usurol: {
                            select: {
                                roles: true
                            }
                        },
                        empresa: {
                            select: {
                                idem: true,
                                nom: true,
                                persona: {
                                    select: {
                                        idpe: true,
                                        nombre: true,
                                        telefono: true,
                                    }
                                }
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
                //const { cliente, telefono } = req.body;
                console.log("BODY NUEVO", req.body);
                /* const estado = true;
                const persona = cliente.persona
                let idu
                let telefonos
                const result = await prisma.$transaction(async (prisma) => {
                    const persona1 = await prisma.persona.create({  // Insertar la nueva persona
                        data: persona
                    });

                    idu = await prisma.usuario.create({  // Insertar el nuevo cliente
                        data: {
                            sexo: cliente.sexo,
                            fecnac: obtenerMesAnio(cliente.fecnac),
                            estado: estado,
                            empresa: { connect: { idem: cliente.idem } },
                            persona: { connect: { idpe: persona1.idpe } }  // Conectar al registro de persona creado
                        }
                    });
                    if (telefono && telefono.length > 0) {
                        telefonos = [];
                        for (const tel of telefono) {
                            const telefonoCreado = await prisma.telefono.create({
                                data: {
                                    estado: estado,
                                    numero: tel,
                                    persona: { connect: { idpe: persona1.idpe } }
                                }
                            });
                            telefonos.push(telefonoCreado);
                        }
                    }
                    const usu = persona.nombre.slice(0, 2) + persona.ap.slice(0, 2) + formatDate(new Date(cliente.fecnac))
                    await prisma.datos.create({
                        data: {
                            login: usu,
                            contrasenia: "12345",
                            usuario: { connect: { idu: idu.idu } }
                        }
                    })
                    return { persona1, idu, telefonos };
                }); */
                //console.log("RESULTADO", result);
                return res.status(200).json({ message: 'TODO BIEN' });
            } catch (error) {
                console.error('Error al agregar nueva persona y cliente:', error);
                return res.status(500).json({ message: 'ERROR: ' + error.message });
            }
        }
        case "PUT": {
            try {
                console.log("USUARIO MODIFICAR", req.body);
                /* const { cliente, telefono } = req.body
                const persona = cliente.persona
                const idpe = persona.idpe
                const estado = true;
                //console.log("NUEVO BODY", req.body);
                const valores = { ci: persona.ci, nombre: persona.nombre, ap: persona.ap, am: persona.am, direccion: persona.direccion, email: persona.email, base64: persona.base64 }
                await prisma.$transaction(async (prisma) => {
                    await prisma.persona.update({
                        where: {
                            idpe: idpe
                        },
                        data: valores
                    })
                    await prisma.usuario.update({  // Insertar el nuevo cliente
                        where: {
                            idu: cliente.idu
                        },
                        data: {
                            sexo: cliente.sexo,
                            fecnac: obtenerMesAnio(cliente.fecnac),
                            idem: cliente.idem,
                        }
                    });
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
                }); */
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }
        case "DELETE": {
            try {
                const { id, estado } = req.body
                const idu = id
                const estadoreal = estado ? false : true
                const msg = estado ? "DADO DE BAJA" : "DADO DE ALTA"
                const valores = { estado: estadoreal }
                //console.log("ME LLAMAN ELIMINAR ", req.body);
                await prisma.usuario.update({
                    where: {
                        idu: idu
                    },
                    data: valores
                })
                return res.status(200).json({ message: 'TODO BIEN', msg: msg })
            } catch (error) {
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
    }

}
function obtenerMesAnio(fecha) {
    const fechaObj = new Date(fecha);
    const mes = (fechaObj.getUTCMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque los meses van de 0 a 11
    const anio = fechaObj.getUTCFullYear().toString();
    const dia = fechaObj.getUTCDate().toString().padStart(2, '0');;
    return `${anio}-${mes}-${dia}T00:00:00Z`;
}

function formatDate(date) {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().substr(-2);
    const fec = `${day}${month}${year}`;
    const fe = fec.slice(0, 4);
    return fe;
}
/*
case "POST": {
            //console.log("Agregar Nuevo Usuario");
            const { ci, nombre, ap, am, direccion, email, sexo, base64, fecnac } = req.body;
            const estado = true;
            const client = await pool.connect(); // Conexión de cliente de pool de PostgreSQL

            try {
                await client.query('BEGIN'); // Comenzar la transacción

                // Insertar la nueva persona en la tabla personas
                const insertPersonaQuery =
                    'INSERT INTO persona (ci,nombre,ap,am,direccion,email,estado,base64) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING idpe';
                const insertPersonaValues = [ci, nombre, ap, am, direccion, email, estado, base64];
                const { rows } = await client.query(insertPersonaQuery, insertPersonaValues);
                const idpe = rows[0].idpe;

                // Insertar el nuevo usuario en la tabla usuarios
                const insertUsuarioQuery =
                    'INSERT INTO usuario (sexo, fecnac, idpe, estado) VALUES ($1, $2, $3, $4) RETURNING idu';
                const insertUsuarioValues = [sexo, fecnac, idpe, estado];
                const result = await client.query(insertUsuarioQuery, insertUsuarioValues);
                const idu = result.rows[0].idu;
                console.log("FECHA DE NAC ES ", fecnac);
                const apInicial = ap.slice(0, 2);
                const noInicial = nombre.slice(0, 2);
                const fechaNacimiento = formatDate(new Date(fecnac));
                const login = `${noInicial}${apInicial}${fechaNacimiento}`;
                const contrasenia = '12345';

                // Insertar datos del nuevo usuario login y password
                const insertDatosQuery = 'INSERT INTO datos (idu, login, contrasenia) VALUES ($1, $2, $3)';
                const insertDatosValues = [idu, login, contrasenia];
                await client.query(insertDatosQuery, insertDatosValues);

                await client.query('COMMIT'); // Completar la transacción
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                await client.query('ROLLBACK'); // Deshacer la transacción si ocurre un error
                console.log('Error al agregar nuevo usuario:', error);
                return res.status(200).json({ message: "ERROR: " + error })
            } finally {
                client.release(); // Liberar el cliente de la conexión de pool
            }
        }*/
/*case "PUT": {
    //console.log("Modificar Usuario");
    const { ci, nombre, ap, am, direccion, email, sexo, base64, fecnac, idu } = req.body;
    //const { id } = req.params;
    const id = idu
    console.log("idu es " + id);
    const client = await pool.connect(); // Conexión de cliente de pool de PostgreSQL  
    try {
        await client.query('BEGIN'); // Comenzar la transacción

        // Actualizar la persona en la tabla personas
        const updatePersonaQuery = 'UPDATE persona SET ci=$1, nombre=$2, ap=$3, am=$4, direccion=$5, email=$6, base64=$7 WHERE idpe=(SELECT idpe FROM usuario WHERE idu=$8)';
        const updatePersonaValues = [ci, nombre, ap, am, direccion, email, base64, id];
        await client.query(updatePersonaQuery, updatePersonaValues);

        // Actualizar el usuario en la tabla usuarios
        const updateUsuarioQuery = 'UPDATE usuario SET sexo=$1, fecnac=$2 WHERE idu=$3';
        const updateUsuarioValues = [sexo, fecnac, id];
        await client.query(updateUsuarioQuery, updateUsuarioValues);
        //const { rows } = await client.query(updateUsuarioQuery, updateUsuarioValues);
        await client.query('COMMIT'); // Completar la transacción
        return res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        await client.query('ROLLBACK'); // Deshacer la transacción si ocurre un error
        console.log('Error al modificar usuario:', error);
        return res.status(200).json({ message: "ERROR: " + error })
    } finally {
        client.release(); // Liberar el cliente de la conexión de pool
    }
} */
export default UsuarioBD