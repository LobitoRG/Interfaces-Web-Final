const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary"><span className="text-white">KAY</span>AK</h1>
            </a>
            <p>
           Somos una empresa comprometida con ofrecer experiencias de viaje únicas, accesibles y seguras, conectando personas con los destinos más extraordinarios del mundo.
           </p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>Siguenos</h6>
            <div className="d-flex justify-content-start">
              {["twitter", "facebook-f", "linkedin-in", "instagram"].map((icon) => (
                <a key={icon} className="btn btn-outline-primary btn-square mr-2" href="#">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Nuestros Servicios</h5>
            <div className="d-flex flex-column justify-content-start">
              {["Acerca de", "Destinos", "Servicios", "Paquetes", "Guìas", "Testimonios", "Blog"].map((item) => (
                <a key={item} className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>{item}</a>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Nuestros Links</h5>
            <div className="d-flex flex-column justify-content-start">
              {["Acerca de", "Destinos", "Servicios", "Paquetes", "Guìas", "Testimonios", "Blog"].map((item) => (
                <a key={item} className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>{item}</a>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Contactanos</h5>
            <p><i className="fa fa-map-marker-alt mr-2"></i>123 Av. Tecnológico, Tepic, México</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+52 311 184 7284</p>
            <p><i className="fa fa-envelope mr-2"></i>chalmunozor@ittepic.edu.mx</p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>Newsletter</h6>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Tu dirección de correo Electrónico" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3">Registrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1)" }}>
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              &copy; <a href="#">Kayak group</a>. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <p className="m-0 text-white-50">
              diseñado con <a href="https://htmlcodex.com">BOOTSTRAP</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
