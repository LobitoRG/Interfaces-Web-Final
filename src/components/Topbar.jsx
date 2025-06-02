const Topbar = () => (
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p><i className="fa fa-envelope mr-2"></i>chalmunozor@ittepic.edu.mx</p>
            <p className="text-body px-3">|</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+51 311 255 2321</p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            {["facebook-f", "twitter", "linkedin-in", "instagram", "youtube"].map(icon => (
              <a key={icon} className="text-primary px-3" href="">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
