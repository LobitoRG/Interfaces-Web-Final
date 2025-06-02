import React from "react";
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import userImg from "../assets/img/user.jpg";
import blogThumb from "../assets/img/blog-100x100.jpg";

const BlogSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          {/* Publicaciones del blog */}
          <div className="col-lg-8">
            <div className="row pb-3">
              {[blog1, blog2, blog3, blog1, blog2, blog3, blog1, blog2].map((img, index) => (
                <div className="col-md-6 mb-4 pb-2" key={index}>
                  <div className="blog-item">
                    <div className="position-relative">
                      <img className="img-fluid w-100" src={img} alt={`blog-${index}`} />
                      <div className="blog-date">
                        <h6 className="font-weight-bold mb-n1">01</h6>
                        <small className="text-white text-uppercase">Ene</small>
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="d-flex mb-2">
                        <a className="text-primary text-uppercase text-decoration-none" href="#">Admin</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-primary text-uppercase text-decoration-none" href="#">Tours y Viajes</a>
                      </div>
                      <a className="h5 m-0 text-decoration-none" href="#">Descubre los destinos más increíbles para tus próximas vacaciones</a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-12">
                <nav aria-label="Navegación de página">
                  <ul className="pagination pagination-lg justify-content-center bg-white mb-0" style={{ padding: "30px" }}>
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Anterior">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Siguiente">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Barra lateral */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            {/* Autor */}
            <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
              <img src={userImg} className="img-fluid mx-auto mb-3" style={{ width: "100px" }} alt="Autor" />
              <h3 className="text-primary mb-3">Juan Pérez</h3>
              <p>Apasionado por los viajes, siempre buscando nuevas experiencias para compartir con el mundo.</p>
              <div className="d-flex justify-content-center">
                {["facebook-f", "twitter", "linkedin-in", "instagram", "youtube"].map((icon, i) => (
                  <a className="text-primary px-2" href="#" key={i}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Buscador */}
            <div className="mb-5">
              <div className="bg-white" style={{ padding: "30px" }}>
                <div className="input-group">
                  <input type="text" className="form-control p-4" placeholder="Buscar palabra clave..." />
                  <div className="input-group-append">
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorías */}
            <div className="mb-5">
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Categorías</h4>
              <div className="bg-white" style={{ padding: "30px" }}>
                <ul className="list-inline m-0">
                  {[
                    ["Diseño Web", 150],
                    ["Desarrollo Web", 131],
                    ["Marketing Digital", 78],
                    ["SEO y Palabras Clave", 56],
                    ["Email Marketing", 98]
                  ].map(([name, count], i) => (
                    <li className="mb-3 d-flex justify-content-between align-items-center" key={i}>
                      <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>{name}</a>
                      <span className="badge badge-primary badge-pill">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Publicaciones recientes */}
            <div className="mb-5">
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Entradas Recientes</h4>
              {[1, 2, 3].map((_, i) => (
                <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="#" key={i}>
                  <img className="img-fluid" src={blogThumb} alt="Entrada Reciente" />
                  <div className="pl-3">
                    <h6 className="m-1">Explora los mejores lugares para viajar en 2025</h6>
                    <small>01 Ene, 2050</small>
                  </div>
                </a>
              ))}
            </div>

            {/* Nube de etiquetas */}
            <div className="mb-5">
              <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Etiquetas</h4>
              <div className="d-flex flex-wrap m-n1">
                {["Diseño", "Desarrollo", "Marketing", "SEO", "Escritura", "Consultoría"].map((tag, i) => (
                  <a href="#" className="btn btn-light m-1" key={i}>{tag}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

