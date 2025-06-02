import React, { useState } from "react";

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
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.subject) newErrors.subject = "Please enter a subject";
    if (!formData.message) newErrors.message = "Please enter your message";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contact</h6>
          <h1>Contact For Any Query</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-white" style={{ padding: "30px" }}>
              {submitted && <div className="alert alert-success">Your message has been sent.</div>}
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Your Name"
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
                      placeholder="Your Email"
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
                    placeholder="Subject"
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
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-danger">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button className="btn btn-primary py-3 px-4" type="submit">
                    Send Message
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
