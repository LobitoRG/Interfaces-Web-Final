const HomeSections = () => {
  return (
    <>
      {/* Feature Section */}
      <div className="container-fluid pb-5">
        <div className="container pb-5">
          <div className="row">
            {[
              {
                icon: 'fa-money-check-alt',
                title: 'Competitive Pricing',
                text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
              },
              {
                icon: 'fa-award',
                title: 'Best Services',
                text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
              },
              {
                icon: 'fa-globe',
                title: 'Worldwide Coverage',
                text: 'Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea',
              },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: '100px', width: '100px' }}
                  >
                    <i className={`fa fa-2x ${feature.icon} text-white`}></i>
                  </div>
                  <div className="d-flex flex-column">
                    <h5>{feature.title}</h5>
                    <p className="m-0">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
                  Mega Offer
                </h6>
                <h1 className="text-white">
                  <span className="text-primary">30% OFF</span> For Honeymoon
                </h1>
              </div>
              <p className="text-white">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-primary text-center p-4">
                  <h1 className="text-white m-0">Sign Up Now</h1>
                </div>
                <div className="card-body rounded-bottom bg-white p-5">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control p-4" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control p-4" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                      <select className="custom-select px-4" style={{ height: '47px' }}>
                        <option selected>Select a destination</option>
                        <option value="1">destination 1</option>
                        <option value="2">destination 2</option>
                        <option value="3">destination 3</option>
                      </select>
                    </div>
                    <div>
                      <button className="btn btn-primary btn-block py-3" type="submit">
                        Sign Up Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
              Guides
            </h6>
            <h1>Our Travel Guides</h1>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={`img/team-${i}.jpg`} alt={`team-${i}`} />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-outline-primary btn-square" href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSections;
