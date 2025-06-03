import React, { useState } from "react";
import Slider from "react-slick";
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import testimonial3 from "../assets/img/testimonial-3.jpg";
import testimonial4 from "../assets/img/testimonial-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initialTestimonials = [
    {
        image: testimonial1,
        text: "Todo fue perfecto desde la reserva hasta el regreso. Excelente atención y precios justos. Sin duda volveré a viajar con ustedes.",
        name: "Byron Arciniega",
        profession: "Ingenierio Civil"
    },
    {
        image: testimonial2,
        text: "Una experiencia increíble. El proceso fue sencillo y el equipo siempre estuvo al pendiente. Recomendado al 100%",
        name: "Carlos M.",
        profession: "Maestro"
    },
    {
        image: testimonial3,
        text: "Reservé de último minuto y todo salió perfecto. Muy profesionales y atentos en cada paso del viaje.",
        name: "Lucia T.",
        profession: "Arquitecta"
    },
    {
        image: testimonial4,
        text: "Gracias a ustedes viví el mejor viaje de mi vida. Todo fue fácil, rápido y seguro. ¡Los recomiendo totalmente!",
        name: "Jorge Ramos",
        profession: "Pescador"
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

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        image: "",
        text: "",
        name: "",
        profession: ""
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updated = [...testimonials];
            updated[editIndex] = formData;
            setTestimonials(updated);
            setEditIndex(null);
        } else {
            setTestimonials([...testimonials, formData]);
        }
        setFormData({ image: "", text: "", name: "", profession: "" });
        setShowForm(false);
    };

    const handleDelete = (index) => {
        const updated = testimonials.filter((_, i) => i !== index);
        setTestimonials(updated);
    };

    const handleEdit = (index) => {
        setFormData(testimonials[index]);
        setEditIndex(index);
        setShowForm(true);
    };

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container py-5">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonios</h6>
                    <h1>Lo Que Dicen Nuestros Clientes</h1>
                    <button className="btn btn-success mt-3" onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Cancelar" : "Agregar Testimonio"}
                    </button>
                </div>

                {showForm && (
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <div className="mb-3">
                            <label className="form-label">Foto</label>
                            <input type="file" className="form-control" name="image" accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Comentario</label>
                            <textarea className="form-control" name="text" value={formData.text} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Profesión</label>
                            <input type="text" className="form-control" name="profession" value={formData.profession} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">{editIndex !== null ? "Actualizar" : "Agregar"}</button>
                    </form>
                )}

                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div className="px-3" key={index}>
                            <div className="text-center pb-4">
                                <img
                                    className="img-fluid mx-auto rounded-circle"
                                    src={t.image}
                                    style={{ width: 100, height: 100, marginTop: 20 }}
                                    alt={t.name}
                                />
                                <div
                                    className="testimonial-text bg-white p-4 position-relative shadow"
                                    style={{
                                        marginTop: 20,
                                        borderRadius: "8px",
                                        minHeight: "200px"
                                    }}
                                >
                                    <p>{t.text}</p>
                                    <h5 className="text-truncate">{t.name}</h5>
                                    <span>{t.profession}</span>
                                    <div className="mt-2">
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(index)}>Editar</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    );
};

export default TestimonialSection;

