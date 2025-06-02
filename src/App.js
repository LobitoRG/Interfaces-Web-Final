import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useRef } from 'react';



import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import About from './About/About'
import Home from './Home/Home';
import Service from './Service/Service';
import Package from './Package/Package';
import Blog from './Blog/Blog';
import Single from './Single/Single';
import Destination from './Destination/Destination';
import Guide from './Guide/Guide';
import Testimonial from './Testimonial/Testimonial';
import Contact from './contact/contact';

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single" element={<Single />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

