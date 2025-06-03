import React from "react";

const services = [
  {
    icon: "fa-route",
    title: "Guía de Viajes",
    description:
      "Descubre los mejores destinos, consejos prácticos y todo lo que necesitas saber para tu próxima aventura.",
  },
  {
    icon: "fa-ticket-alt",
    title: "Reservación de Boletos",
    description:
      "Reserva tus boletos de manera rápida y segura para cualquier evento o viaje. ¡Hazlo en pocos clics!",
  },
  {
    icon: "fa-hotel",
    title: "Reserva de Hotel",
    description:
      "Reserva tu hotel ideal de manera rápida y segura. ¡Encuentra el mejor lugar para tu estancia!",
  }
];

const ServiceSection = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
          Servicios
        </h6>
        <h1>Servicios de Tours y Viajes</h1>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="service-item bg-white text-center mb-2 py-5 px-4">
              <i className={`fas fa-2x ${service.icon} mx-auto mb-4`}></i>
              <h5 className="mb-2">{service.title}</h5>
              <p className="m-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServiceSection;
