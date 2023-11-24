import { useContext, useState, useEffect } from 'react';
import { PrincipalContext } from "@/context/PrincipalContext";
import Login from "../Login/Login";
import PaginaExteriorInicio from '../PaginasExterior/Inicio';
import { Button } from "primereact/button";

const Principal = ({ Component, pageProps }) => {

    useEffect(() => {
        console.log("ME ACTUALIZO JOTOS");
    }, []);
    const { acceso, setAcceso, setScroll } = useContext(PrincipalContext);
    return (<>

        {acceso ? (<>
            <Login />
        </>) : (<>
            {/* <div className="fuera" onScroll={event => {
                const scrollTop = event.target.scrollTop;
                setScroll(scrollTop)
                
            }}> */}
                <Component  {...pageProps} />
            {/* </div> */}
            {/*  <PaginaExteriorInicio /> */}
            {/* <div className='topRegistro'>
                <Button label="Ingrese al Sistema"
                    text
                    raised
                    onClick={(event) => { event.preventDefault(); acceso === true ? setAcceso(false) : setAcceso(true) }}
                    style={{ position: 'absolute', right: 0, color: "white" }}
                />
            </div>
            algomas */}
        </>)}
    </>)
}
export default Principal;