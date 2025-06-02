import mexico from '../assets/img/mexico.jpg';
import destination2 from '../assets/img/destination-2.jpg';
import spain from '../assets/img/Spain.jpg';
import germany from '../assets/img/alemania.jpg';
import destination5 from '../assets/img/destination-5.jpg';
import peru from '../assets/img/peru.jpg';

const Destination = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Destinos</h6>
        <h1>Explora Nuestros Destinos</h1>
      </div>
      <div className="row">
        {[{ img: mexico, name: 'México', cities: 10 },
          { img: destination2, name: 'Brasil', cities: 12 },
          { img: spain, name: 'España', cities: 24 },
          { img: germany, name: 'Alemania', cities: 17 },
          { img: destination5, name: 'USA', cities: 56 },
          { img: peru, name: 'Perú', cities: 4 }].map((dest, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img className="img-fluid" src={dest.img} alt={dest.name} />
              <a className="destination-overlay text-white text-decoration-none" href="#">
                <h5 className="text-white">{dest.name}</h5>
                <span>{dest.cities} ciudades</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Destination;
