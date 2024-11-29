// components/Main.js
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "../PaginaModelo1/Proyects";
import Contact from "../PaginaModelo1/Contact";
import Footer from "../PaginaModelo1/Footer";
import Skills from "../PaginaModelo2/Skills";
import Clients from "../PaginaModelo1/Clients";
import More from "./More";
//import Skills from "../PaginaModelo1/Skills";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Projects />
      {/* <Clients /> */}
      <More />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
