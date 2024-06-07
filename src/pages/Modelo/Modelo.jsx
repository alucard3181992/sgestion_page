import React, { useContext } from "react"
import PaginaCreacion from "@/components/PaginaCreacion/PaginaCreacion";
import { PrincipalContext } from "@/context/PrincipalContext";

export default function Modelo() {
    const { setScroll } = useContext(PrincipalContext);
    const handleScroll = (event) => {
        console.log("SOY ESCROl  MODELO2");
        const scrollTop = event.target.scrollTop;
        setScroll(scrollTop);
    }
    return (<React.Fragment>
        <div className="fuera" onScroll={handleScroll} >
            <PaginaCreacion />
        </div>
    </React.Fragment>)
}