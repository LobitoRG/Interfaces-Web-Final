import about1 from "../assets/img/about1.jpg";
import about1img from "../assets/img/about-1.jpg";
import about2 from "../assets/img/about-2.jpg";

const AboutFeature = () => (
  <>
    {/* About Start */}
    <div className="container-fluid py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100" src={about1} style={{ objectFit: "cover" }} alt="About" />
            </div>
          </div>
          <div className="col-lg-6 pt-5 pb-lg-5">
            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Acerca de nosotros</h6>
              <h1 className="mb-3">Ofrecemos paquetes que se ajustan a tu bolsillo</h1>
              <p>
                Nos especializamos en ofrecer paquetes diseñados para adaptarse a diferentes presupuestos, sin comprometer la calidad ni la experiencia. Nuestro compromiso es brindarte soluciones accesibles y eficientes.
              </p>
              <div className="row mb-4">
                <div className="col-6">
                  <img className="img-fluid" src={about1img} alt="Paquete 1" />
                </div>
                <div className="col-6">
                  <img className="img-fluid" src={about2} alt="Paquete 2" />
                </div>
              </div>
              <a href="#" className="btn btn-primary mt-1">Iniciar ahora</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}

    {/* Feature Start */}
    <div className="container-fluid pb-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: "100px", width: "100px" }}>
                <i className="fa fa-2x fa-money-check-alt text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5>Precios competitivos</h5>
                <p className="m-0">Los mejores precios y los más competitivos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: "100px", width: "100px" }}>
                <i className="fa fa-2x fa-award text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5>Mejores Servicios</h5>
                <p className="m-0">Nuestros servicios son altamente valorados por la calidad y eficiencia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: "100px", width: "100px" }}>
                <i className="fa fa-2x fa-globe text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5>Cobertura global</h5>
                <p className="m-0">Cobertura a nivel mundial que nos valida ante todos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Feature End */}
  </>
);

export default AboutFeature;
