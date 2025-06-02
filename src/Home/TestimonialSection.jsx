import React from "react";
import Slider from "react-slick";

import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import testimonial3 from "../assets/img/testimonial-3.jpg";
import testimonial4 from "../assets/img/testimonial-4.jpg";

const testimonials = [
  {
    image: testimonial1,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos labore diam.",
    name: "Nombre del Cliente",
    profession: "Profesión"
  },
  {
    image: testimonial2,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos labore diam.",
    name: "Nombre del Cliente",
    profession: "Profesión"
  },
  {
    image: testimonial3,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos labore diam.",
    name: "Nombre del Cliente",
    profession: "Profesión"
  },
  {
    image: testimonial4,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos labore diam.",
    name: "Nombre del Cliente",
    profession: "Profesión"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const TestimonialSection = () => (
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonios</h6>
        <h1>Lo Que Dicen Nuestros Clientes</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="px-3" key={index}>
            <div className="text-center pb-4">
              <img
                className="img-fluid mx-auto rounded-circle"
                src={t.image}
                style={{ width: 100, height: 100 }}
                alt={t.name}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">{t.text}</p>
                <h5 className="text-truncate">{t.name}</h5>
                <span>{t.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default TestimonialSection;
