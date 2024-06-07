import React, { useContext } from "react"
import PaginaInicioModelo2 from "@/components/PaginaModelo2/Inicio"
import { PrincipalContext } from "@/context/PrincipalContext";

export default function Modelo2() {
    const { setScroll } = useContext(PrincipalContext);
    const handleScroll = (event) => {
        console.log("SOY ESCROl  MODELO2");
        const scrollTop = event.target.scrollTop;
        setScroll(scrollTop);
    }

    return (<React.Fragment>
        <div className="fuera" onScroll={handleScroll} >
            <PaginaInicioModelo2 />
        </div>
    </React.Fragment>)
}