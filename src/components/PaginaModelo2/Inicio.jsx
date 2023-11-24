import React from "react"
import About from "./About"
import Navbar from "./Navbar"
import Projects from "./Proyects"
import Skills from "./Skills"
import Testimonials from "./Testimonials"
import Clients from "./Clients"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollToTopButton from "../PaginaModelo1/ScrollTop"
export default function PaginaInicioModelo2() {


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
    </React.Fragment>)
}