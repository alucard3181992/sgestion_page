
import { exec } from 'child_process';

import prisma from '@/lib/prisma';

const BackupBD = async (req, res) => {
    const { method } = req;
    switch (method) {
        case "POST": {
            try {
                console.log("BODY ", req.body);
                const { nombre, ruta } = req.body
                const dbName = 'LP'; // Nombre de la base de datos
                const backupFileName = ruta + nombre + ".backup";
                const rutaPG_DUMP = '"C:\\Program Files\\PostgreSQL\\9.2\\bin\\pg_dump.exe"';

                const cmd = `${rutaPG_DUMP} --host=localhost --port=5432 --username=postgres --no-password --format=custom --blobs --inserts --column-inserts --verbose --file=${backupFileName} ${dbName}`;
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error al crear la copia de seguridad: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        //console.error(`SI SOY: ${stderr}`);
                        return;
                    }
                    console.log(`Copia de seguridad creada correctamente en ${backupFileName}`);
                    //mensaje.exito("Copia Creada Correctamente");
                });
                //console.log("SI FUNCIONA");
                return res.status(200).json({ message: "TODO BIEN" })
            } catch (error) {
                console.log("ERROR", error);
                return res.status(400).json({ message: "ERROR: " + error })
            }
        }
        case "GET": {
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
                //console.log("BODY ", req.body);
                const { nombre, ruta } = req.body
                const dbName = 'ParaTodo'; // Nombre de la base de datos
                const backupFileName = ruta + nombre;
                const rutaPG_DUMP = '"C:\\Program Files\\PostgreSQL\\9.2\\bin\\pg_restore.exe"';

                const cmd =
                    `${rutaPG_DUMP} --host=localhost --port=5432 --username=postgres --dbname=${dbName} --role=postgres --no-password --clean --verbose ${backupFileName}`;
                //console.log("EL CMD ES", cmd);
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error al crear la copia de seguridad: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        //console.error(`SI SOY: ${stderr}`);
                        return;
                    }
                    console.log(`Copia de seguridad creada correctamente en ${backupFileName}`);
                    //mensaje.exito("Copia Creada Correctamente");
                });
                return res.status(200).json({ message: "TODO BIEN" });
            } catch (error) {
                console.log("ERROR", error);
                return res.status(200).json({ message: "ERROR: " + error })
            }
        }

    }

}

export default BackupBD