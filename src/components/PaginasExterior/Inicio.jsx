import React from "react"
import About from "./About"
import Navbar from "./Navbar"
import Projects from "./Proyects"
import Projects2 from "./Proyects2"
import Skills from "./Skills"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import ScrollToTopButton from "../PaginaModelo1/ScrollTop"
export default function PaginaExteriorInicio() {


    return (<React.Fragment>
        <Navbar />
        <About />
        <Projects />
        <Projects2 />
        <Skills />
        <Testimonials />
        <Contact />
        <ScrollToTopButton />
    </React.Fragment>)
}