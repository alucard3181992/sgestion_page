import { projects } from "../PaginasExterior/data";

const More = () => {
  function getColumnClass(index, totalElements) {
    if (totalElements % 2 === 0) {
      // Si hay un número par de elementos, cada elemento toma md:col-6
      return "md:col-6";
    } else {
      // Si hay un número impar de elementos, el último elemento toma md:col-12
      return index === totalElements - 1 ? "md:col-12" : "md:col-6";
    }
  }
  prueba();
  function prueba() {
    let ID = "1O-6_s5RPLVmq99wJ-zWf0Am2sYe-yOAMb4WHRxKMU9M";
    let HOJA = "Sheet1";
    let RANGO = "A1:J54";
    let FULL =
      "https://docs.google.com/spreadsheets/d/" +
      ID +
      "/gviz/tq?sheet=" +
      HOJA;
    fetch(FULL)
      .then((res) => res.text())
      .then((rep) => {
        let data = JSON.parse(rep.substring(47).slice(0, -2));
        console.log(data);
      });
  }
  //https://docs.google.com/spreadsheets/d/1O-6_s5RPLVmq99wJ-zWf0Am2sYe-yOAMb4WHRxKMU9M/edit?gid=1202364934#gid=1202364934
  return (
    <section
      className="mbr-fullscreen imagen5"
      style={{ minHeight: "100vh", alignItems: "normal", padding: 30 }}
    >
      <div className="grid medio-fondo">
        <div className="col-12 centro-total">
          <div className="text-center texto-seccion-carusel">
            <div className="text-6xl mb-3">
              Titulo de la Nueva Seccion Muy Largo Que Sea
            </div>
            <div className="text-2xl mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              finibus, arcu ut sollicitudin rhoncus, augue risus aliquet mauris.
            </div>
          </div>
        </div>
        {projects.map((project, index) => (
          <div
            className={`col-12 ${getColumnClass(index, projects.length)} p-5`}
            key={index}
          >
            <div
              className="flex  text-center shadow-6 p-5 md:p-2"
              style={{ height: "100%" }}
            >
              <div
                className={`md:col-9 flex-order-1 md:flex-order-${
                  index % 2 == 0 ? "0" : "1"
                }`}
              >
                <div className="font-bold text-2xl">
                  {project.title} {"NUMERO" + index}{" "}
                </div>
                <div className="font-bold text-xl">{project.subtitle}</div>
                <div className="text-l ">{project.description}</div>
              </div>
              <div
                className={`p-2 md:col-3 flex-order-0 md:flex-order-${
                  index % 2 == 0 ? "1" : "0"
                } h-full`}
              >
                <div className="h-full centro-total">
                  <i
                    className={project.icon}
                    style={{
                      padding: 15,
                      borderRadius: "50%",
                      color: "var(--surface-c)",
                      background: "var(--primary-color)",
                      fontSize: "2.5rem",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- Testimonios --> */}
      {/* <section class="testimonios" id="testimonios">
        <h2>Testimonios</h2>
        <blockquote>
          <p>{`"Excelente atención y profesionalismo."`}</p>
          <cite>— Juan Pérez</cite>
        </blockquote>
        <blockquote>
          <p>{`"Muy satisfecho con el servicio."`}</p>
          <cite>— María García</cite>
        </blockquote>
      </section> */}
    </section>
  );
};
export default More;
