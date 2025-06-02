import Booking from "../components/Booking";
import Footer from "../components/Footer";
import CarouselSection from "./Carousel";
import AboutFeature from "./AboutFeature";
import Destination from "./Destination";
import Service from "./Service";
import Package from "./Packages"
import Registration from "./Registration";
import TeamSection from "./TeamSection";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";

const Home = () => {
  return (
    <>
    <CarouselSection/>
    <Booking/>
    <AboutFeature/>
    <Destination/>
    <Service/>
    <Package/>
    <Registration/>
    <TeamSection/>
    <TestimonialSection/>
    <BlogSection/>
    <Footer/>
    </>
  );
};

export default Home;