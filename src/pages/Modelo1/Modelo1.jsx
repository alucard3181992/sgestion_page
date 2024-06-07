import React, { useContext } from "react"
import PaginaInicioModelo1 from "@/components/PaginaModelo1/Inicio"
import { PrincipalContext } from "@/context/PrincipalContext";

export default function Modelo1() {
    const { setScroll } = useContext(PrincipalContext);
    const handleScroll = (event) => {
        console.log("SOY ESCROl  MODELO2");
        const scrollTop = event.target.scrollTop;
        setScroll(scrollTop);
    }
    return (<React.Fragment>
        <div className="fuera" onScroll={handleScroll} >
            <PaginaInicioModelo1 />
        </div>
    </React.Fragment>)
}