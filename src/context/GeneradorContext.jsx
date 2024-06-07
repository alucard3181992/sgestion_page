import React, { createContext, useState, useEffect, useRef } from "react";
import * as datosC from "@/components/Generador/Campos";
import { analizarObjeto } from "@/components/Generador/FuncionesGeneradora";
export const GeneradorContext = createContext();

const GeneradorContextProvider = (props) => {
    const [columnas, setColumnas] = useState(null)
    const [columnasExpasion, setColumnasExpansion] = useState(null)
    const [camposFormulario, setCamposFormulario] = useState(null)
    const [camposGenerales, setCamposGenerales] = useState(null)
    const [datosArchivo, setDatosArchivo] = useState(null)
    const [objeto, setObjeto] = useState(null)
    const [cli, setCli] = useState([])
    const [lista, setLista] = useState([])
    useEffect(() => {
        //console.log("LLAMANDO A USUARIO");
        try {
            //console.log("SOY CONTEXTO PRINCIPAL NADA MAS")
            setColumnas(datosC.columnasC)
            setColumnasExpansion(datosC.columnasExpasionC)
            setCamposFormulario(datosC.campos)
            setCamposGenerales(datosC.datosC1)
            setDatosArchivo(datosC.datosArchivoC)
            setObjeto(analizarObjeto(datosC.datosC1))
            const lista2 = datosC.datosArchivoC && Object.keys(datosC.datosArchivoC).map((campo, index) => ({
                campo,
                index,
            }));
            setLista(lista2);
        } catch (error) {
            console.log(error)
        }
    }, []);


    return (
        <GeneradorContext.Provider
            value={{
                columnas,
                columnasExpasion,
                camposFormulario,
                camposGenerales,
                datosArchivo,
                objeto,
                cli,
                lista,
                setColumnas,
                setColumnasExpansion,
                setCamposFormulario,
                setCamposGenerales,
                setDatosArchivo,
                setObjeto,
                setCli,
                setLista
            }}
        >
            {props.children}
        </GeneradorContext.Provider>
    );
}

export default GeneradorContextProvider;