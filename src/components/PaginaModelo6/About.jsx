/* eslint-disable @next/next/no-img-element */
// components/About.js
import { Button } from "primereact/button";
import { Card } from "primereact/card";
/* const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1>Psychotherapy for Adults & Children</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button label="Contact Me Today!" className="p-button-raised p-button-primary" />
            </div>
            <div className="about-image">
                <img src="/icons/img/2.jpg" alt="Therapist" />
            </div>
        </section>
    );
};<section id="about" className="mbr-fullscreen imagen1" style={{
            zIndex: 0, top: 0, backgroundImage: "none", position: "relative"
        }}>

export default About; */
// components/About.js

const About = () => {
  return (
    <section
      className="mbr-fullscreen imagen5"
      style={{ minHeight: "100vh", alignItems: "normal" }}
    >
      {/* <div className="image-container"> */}
      {/* <img
          src="/icons/img/2.jpg"
          alt="Background"
          className="background-image"
        /> */}
      <div className="card-container">
        <div className="flex flex-wrap" /* style={{padding:80}} */>
          <div className="col-12 md:col-8 flex-order-0">
            <h1 className="font-bold text-5xl" style={{ color: "black" }}>
              TITULO DE LA CLINICA &amp; COMPAÑIA
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <button
              className="p-button p-button-primary font-bold"
              style={{
                borderRadius: 0,
                color: "white",
              }}
            >
              Contact Me Today!
            </button>
          </div>
          <div
            className="shadow-2 col-12 md:col-4 flex-order-2 md:flex-order-1 p-0"
            style={{ background: "white" }}
          >
            <img
              src="/icons/img/5.jpg"
              alt="Background"
              width={"100%"}
              className="p-0"
            />
            <p className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>
          <div className="col-12 flex-order-1 md:flex-order-2 mb-3">
            <div className="font-bold text-4xl">Servicios</div>
            <div className="">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </div>
          </div>
          <div className="col-12 flex-order-3">
            <div className="grid mt-2">
              <div className="col-12 md:col-4 p-2">
                <div className="h-full shadow-2 p-3 check">
                  <div className="font-bold text-xl">Sub Titulo 1</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectur adipiscing elit
                  </div>
                  <div className="text-center">
                    <Button
                      style={{ borderRadius: 0, color: "white" }}
                      label="Mas ..."
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4 p-2">
                <div className="h-full shadow-2 p-3 check">
                  <div className="font-bold text-xl">Sub Titulo 2</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectur adipiscing elit
                  </div>
                  <div className="text-center">
                    <Button
                      style={{ borderRadius: 0, color: "white" }}
                      label="Mas ..."
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4 p-2">
                <div className="h-full shadow-2 p-3 check">
                  <div className="font-bold text-xl">Sub Titulo 3</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectur adipiscing elit
                  </div>
                  <div className="text-center">
                    <Button
                      style={{ borderRadius: 0, color: "white" }}
                      label="Mas ..."
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*</div> */}
    </section>
  );
};

export default About;
