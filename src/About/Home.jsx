// 📁 Importar imágenes del equipo
import team1 from '../assets/img/team2.jpg';
import team2 from '../assets/img/team1.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';

// 📁 Importar imágenes de About (si las usas)
import about1 from '../assets/img/about.jpg';
import about2 from '../assets/img/about-1.jpg';
import about3 from '../assets/img/about-2.jpg';

// Puedes usar estos arreglos donde necesites
const teamImages = [team1, team2, team3, team4];
const aboutImages = [about1, about2, about3];

const HomeSections = () => {
  return (
    <>
      {/* Feature Section */}
      <div className="container-fluid pb-5">
        <div className="container pb-5">
          <div className="row">
            {[
              {
                icon: 'fas fa-money-check-alt',
                title: 'Precios competitivos',
                text: 'Los mejores precios y los más competitivos.',
              },
              {
                icon: 'fas fa-award',
                title: 'Mejores Servicios',
                text: 'Nuestros servicios son altamente valorados por la calidad y eficiencia.',
              },
              {
                icon: 'fas fa-globe',
                title: 'Cobertura global',
                text: 'Cobertura a nivel mundial que nos valida ante todos.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: '100px', width: '100px' }}
                  >
                    <i className={`${feature.icon} fa-2x text-white`}></i>
                  </div>
                  <div className="d-flex flex-column">
                    <h5>{feature.title}</h5>
                    <p className="m-0">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
                  Mega Offer
                </h6>
                <h1 className="text-white">
                  <span className="text-primary">30% OFF</span> Por Cierre De Semestre
                </h1>
              </div>
              <p className="text-white">
                              Aprovecha nuestra oferta especial de fin de semestre. Disfruta descuentos exclusivos en paquetes de viaje y servicios seleccionados. ¡Solo necesitas registrarte para comenzar a planear tu próxima aventura al mejor precio!

              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fas fa-check text-primary mr-3"></i>Mejores precios que nuestra competencia
                </li>
                <li className="py-2">
                  <i className="fas fa-check text-primary mr-3"></i>Sin necesidad de pagos por adelantado
                </li>
                <li className="py-2">
                  <i className="fas fa-check text-primary mr-3"></i>Un saludo al Mestro Irving
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-primary text-center p-4">
                  <h1 className="text-white m-0">Registrate Ahora</h1>
                </div>
                <div className="card-body rounded-bottom bg-white p-5">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control p-4" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control p-4" placeholder="Tu correo" required />
                    </div>
                    <div className="form-group">
                      <select className="custom-select px-4" style={{ height: '47px' }}>
                        <option defaultValue>Seleciona un destino</option>
                        <option value="1">Sayulita</option>
                        <option value="2">Ibiza</option>
                        <option value="3">Machu Pichu</option>
                      </select>
                    </div>
                    <div>
                      <button className="btn btn-primary btn-block py-3" type="submit">
                        Registrarte Ahora
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
              Guías
            </h6>
            <h1>Nuestros Guías de Viaje</h1>
          </div>
          <div className="row">
            {teamImages.map((imgSrc, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={imgSrc} alt={`team-${i + 1}`} />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Nombre del guía</h5>
                    <p className="m-0">Guía turistico</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSections;
