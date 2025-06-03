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
            {/* Facebook */}
            <a
              className="text-primary px-3"
              href="https://www.facebook.com/christianohyeah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter (placeholder vacío por ahora) */}
            <a
              className="text-primary px-3"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* LinkedIn */}
            <a
              className="text-primary px-3"
              href="https://www.linkedin.com/in/rashmi-singh-429353320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Instagram */}
            <a
              className="text-primary px-3"
              href="https://www.instagram.com/crstan_ortiz?igsh=MTJkODQwODRvdmY0eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* YouTube (placeholder) */}
            <a
              className="text-primary px-3"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
