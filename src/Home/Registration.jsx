import React from "react";

const Registration = () => {
  return (
    <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Mega Oferta</h6>
              <h1 className="text-white"><span className="text-primary">30% OFF</span> por cierre de semestre</h1>
            </div>
            <p className="text-white">
              Aprovecha nuestra oferta especial de fin de semestre. Disfruta descuentos exclusivos en paquetes de viaje y servicios seleccionados. ¡Solo necesitas registrarte para comenzar a planear tu próxima aventura al mejor precio!
            </p>
            <ul className="list-inline text-white m-0">
              <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Mejores precios que nuestra competencia</li>
              <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Sin necesidad de pagos por adelantado</li>
              <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Un saludo al Mestro Irving</li>
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
                    <select className="custom-select px-4" style={{ height: "47px" }}>
                      <option defaultValue="">Seleciona un destino</option>
                      <option value="1">Sayulita</option>
                      <option value="2">Ibiza</option>
                      <option value="3">Machu Pichu</option>
                    </select>
                  </div>
                  <button className="btn btn-primary btn-block py-3" type="submit">Registrarte Ahora</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
