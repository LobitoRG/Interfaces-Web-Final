// src/components/DestinationSection.jsx
import React from "react";
import dest1 from "../assets/img/destination-1.jpg";
import dest2 from "../assets/img/destination-2.jpg";
import dest3 from "../assets/img/destination-3.jpg";
import dest4 from "../assets/img/destination-4.jpg";
import dest5 from "../assets/img/destination-5.jpg";
import dest6 from "../assets/img/destination-6.jpg";

const destinos = [
  { pais: "Estados Unidos", ciudades: 100, imagen: dest1 },
  { pais: "Reino Unido", ciudades: 100, imagen: dest2 },
  { pais: "Australia", ciudades: 100, imagen: dest3 },
  { pais: "India", ciudades: 100, imagen: dest4 },
  { pais: "Sudáfrica", ciudades: 100, imagen: dest5 },
  { pais: "Indonesia", ciudades: 100, imagen: dest6 },
];

const DestinationSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Destinos
          </h6>
          <h1>Explora los Mejores Destinos</h1>
        </div>
        <div className="row">
          {destinos.map((destino, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destino.imagen} alt={destino.pais} />
                <a className="destination-overlay text-white text-decoration-none" href="#">
                  <h5 className="text-white">{destino.pais}</h5>
                  <span>{destino.ciudades} ciudades</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
