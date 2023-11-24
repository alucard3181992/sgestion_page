import React, { useState, useEffect, useContext } from 'react';
import { PrincipalContext } from "@/context/PrincipalContext";
export default function ScrollToTopButton() {
    const { scroll } = useContext(PrincipalContext);
    return (
        <div
            style={{
                position: 'fixed',
                padding: '10px 0',
                bottom: '0',
                borderBottom: '3px solid black',
                width: '100%',
            }}
        >
            {scroll > 100 ? <>
                <a
                    style={{
                        background: "#50505080", color: "white",
                        float: "right", marginRight: 20, fontSize: "1.5rem",
                        border: "none", textDecoration: "none", fontWeight: 700
                    }}
                    href="#about"
                    className="pi pi-arrow-up p-3 border-none text-white
                    p-button p-button-raised p-button-text p-button-rounded
                    zoominup animation-duration-1000"
                >

                </a>
            </>
                : ""}
        </div >
    );
}
