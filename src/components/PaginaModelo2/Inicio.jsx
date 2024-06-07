import React, { useContext, useEffect } from "react"
import About from "./About"
import Navbar from "./Navbar"
import Projects from "./Proyects"
import Skills from "./Skills"
import Testimonials from "./Testimonials"
import Clients from "./Clients"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollToTopButton from "../PaginaModelo1/ScrollTop"

function VistaPrincipal() {
    return (<React.Fragment>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
        <ScrollToTopButton />
    </React.Fragment >)
}

export default function PaginaInicioModelo2() {
    return (<VistaPrincipal />)
}