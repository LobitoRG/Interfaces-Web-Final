import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Por favor ingresa tu nombre";
    if (!formData.email) newErrors.email = "Por favor ingresa tu correo";
    if (!formData.subject) newErrors.subject = "Por favor ingresa un asunto";
    if (!formData.message) newErrors.message = "Por favor escribe un mensaje";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Generar fecha y hora actual formateada
      const now = new Date();
      const time = now.toLocaleString("es-MX", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: time,
      };

      emailjs
        .send(
          "service_3djmrce",       // Tu Service ID
          "template_u4wyxw8",      // Tu Template ID
          templateParams,          // Variables que espera la plantilla
          "TaVLpbgn0kp0hFf0y"       // Tu Public Key
        )
        .then(() => {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        })
        .catch((err) => {
          console.error("Error al enviar:", err);
          alert("Hubo un error al enviar el mensaje.");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contacto</h6>
          <h1>Contáctanos para cualquier pregunta.</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-white" style={{ padding: "30px" }}>
              {submitted && <div className="alert alert-success">Tu mensaje fue enviado con éxito.</div>}
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Tu Nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Tu Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    id="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="text-danger">{errors.subject}</p>}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-danger">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button className="btn btn-primary py-3 px-4" type="submit">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
