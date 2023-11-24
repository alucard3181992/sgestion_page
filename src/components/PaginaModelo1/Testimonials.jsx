import React from "react";
export default function Testimonials() {
  return (
    <section id="testimonials" className="mbr-fullscreen imagen2">
      <div className="grid p-2">
        <div className="col-12 centro-total" >
          <div className="fondob text-center" /* style={{ height:"100%",minHeight: "300px", maxWidth: "300px" }} */>
            <hr className="linea mb-3" />
            <div className="text-2xl mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus,
              arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
            </div>
            <hr className="linea" />
          </div>
        </div>
        <div className="col-12 centro-total">
          <div className="text-center" /* style={{ height:"100%",minHeight: "300px", maxWidth: "300px" }} */>
            <div className="text-7xl mb-3">
            Titulo de la Tercera Seccion Muy Largo Que Sea
            </div>
            <div className="text-2xl mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus,
              arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
            </div>
            <div className="text-2xl mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus,
              arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
            </div>
            <div className="text-2xl mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus,
              arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
            </div>
            <div className="cuadro-contador">
              <label className="font-bold text-2xl">Las Ofertas Comienzan en :</label>
              <div className="grid">
                <div className="col-3">
                  <div className="text-center">
                    <div className="numeros">00</div>
                    <hr className="linea2" style={{ width: "50%" }} />
                    <div className="text-xl">Dias</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <div className="numeros">00</div>
                    <hr className="linea2" style={{ width: "50%" }} />
                    <div className="text-xl">Horas</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <div className="numeros">00</div>
                    <hr className="linea2" style={{ width: "50%" }} />
                    <div className="text-xl">Minutos</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <div className="numeros">00</div>
                    <hr className="linea2" style={{ width: "50%" }} />
                    <div className="text-xl">Segundos</div>
                  </div>
                </div>
              </div>
              <label className="font-bold text-xl">2020/10/10 - Lorem ipsum</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}