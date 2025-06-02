import React from "react";
import mexico from "../assets/img/PaqueteMex.jpg";
import usa from "../assets/img/PaqueteUsa.jpg";
import spain from "../assets/img/PaqueteSpain.jpg";
import cdmx from "../assets/img/Paquetecdmx.jpg";
import nayarit from "../assets/img/package-5.jpg";
import peru from "../assets/img/PaquetePeru.jpg";

const packages = [
  {
    image: mexico,
    location: "Mexico",
    days: "3 dias",
    people: "2 Personas",
    description: "Visita el hermoso caribe mexicano con nostros.",
    rating: 5,
    reviews: 1250,
    price: "$420",
  },
  {
    image: usa,
    location: "New York",
    days: "5 dias",
    people: "2 Personas",
    description: "Explora la ciudad de los rascacielos con nosotros",
    rating: 4.5,
    reviews: 918,
    price: "$500",
  },
  {
    image: spain,
    location: "Ibiza",
    days: "4 dias",
    people: "4 Personas",
    description: "Vive la fiesta en Ibiza con nosotros",
    rating: 4.7,
    reviews: 333,
    price: "$900",
  },
  {
    image: cdmx,
    location: "Ciudad de Mexico",
    days: "3 dias",
    people: "2 Personas",
    description: "Conoce los emblematicos mercados de CDMX",
    rating: 4.9,
    reviews: 1092,
    price: "$199",
  },
  {
    image: nayarit,
    location: "Nuevo Nayarit",
    days: "4 dias",
    people: "2 Personas",
    description: "Descubre increibles lugares con nosotros",
    rating: 5,
    reviews: 3000,
    price: "$25",
  },
  {
    image: peru,
    location: "Machú Pichú",
    days: "1 dias",
    people: "5 Personas",
    description: "Un lugar ancestral te espera",
    rating: 4.5,
    reviews: 30,
    price: "$503",
  },
];

const Packages = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Paquetes</h6>
          <h1>Paquetes Perfectos de Tours</h1>
        </div>
        <div className="row">
          {packages.map((pkg, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={pkg.image} alt={pkg.location} />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small><i className="fa fa-map-marker-alt text-primary mr-2"></i>{pkg.location}</small>
                    <small><i className="fa fa-calendar-alt text-primary mr-2"></i>{pkg.days}</small>
                    <small><i className="fa fa-user text-primary mr-2"></i>{pkg.people}</small>
                  </div>
                  <a className="h5 text-decoration-none" href="">{pkg.description}</a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6><i className="fa fa-star text-primary mr-2"></i>{pkg.rating} <small>({pkg.reviews})</small></h6>
                      <h5>{pkg.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
