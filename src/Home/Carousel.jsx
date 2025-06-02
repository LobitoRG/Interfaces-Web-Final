import { Carousel } from 'react-bootstrap';
import img1 from "../assets/img/carousel-1.jpg";
import img2 from "../assets/img/carousel-2.jpg";


const CarouselSection = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel fade controls indicators id="header-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {img1}
            alt="Primera imagen"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
              <h4 className="text-white text-uppercase mb-md-3">Tours & viajes</h4>
              <h1 className="display-3 text-white mb-md-4">vamos a descubrir el mundo juntos</h1>
              <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">descubre ahora</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Segunda imagen"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '900px' }}>
              <h4 className="text-white text-uppercase mb-md-3">Tours & viajes</h4>
              <h1 className="display-3 text-white mb-md-4">Descubramos lugares increíbles juntos</h1>
              <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">descubre ahora</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
