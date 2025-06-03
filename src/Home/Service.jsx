const Service = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Servicios</h6>
        <h1>Servicios de Tours y Viajes</h1>
      </div>
      <div className="row">
        {[
          {
            icon: 'fa-map-marked-alt', // reemplazo de fa-route
            title: 'Guía de Viajes',
            desc: 'Descubre los mejores destinos, consejos prácticos y todo lo que necesitas saber para tu próxima aventura.'
          },
          {
            icon: 'fa-plane-departure', // reemplazo de fa-ticket-alt
            title: 'Reservación de Boletos',
            desc: 'Reserva tus boletos de manera rápida y segura para cualquier evento o viaje. ¡Hazlo en pocos clics!'
          },
          {
            icon: 'fa-bed', // reemplazo de fa-hotel
            title: 'Reserva de hoteles',
            desc: 'Reserva tu hotel ideal de manera rápida y segura. ¡Encuentra el mejor lugar para tu estancia!'
          }
        ].map((service, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <div className="service-item bg-white text-center mb-2 py-5 px-4">
              <i className={`fas ${service.icon} fa-2x mx-auto mb-4`}></i>
              <h5 className="mb-2">{service.title}</h5>
              <p className="m-0">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Service;
