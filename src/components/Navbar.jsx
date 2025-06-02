import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-primary"><span className="text-dark">KAYA</span>K</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/package" className="nav-item nav-link">Package</Link>

              {/* Dropdown personalizado con React */}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="nav-link dropdown-toggle" style={{ cursor: "pointer" }}>
                  Páginas
                </span>
                {dropdownOpen && (
                  <div className="dropdown-menu border-0 rounded-0 m-0 show" style={{ display: "block" }}>
                    <Link to="/blog" className="dropdown-item">Blog</Link>
                    <Link to="/single" className="dropdown-item">Single</Link>
                    <Link to="/destination" className="dropdown-item">Destination</Link>
                    <Link to="/guide" className="dropdown-item">Guide</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="nav-item nav-link">Contacto</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

