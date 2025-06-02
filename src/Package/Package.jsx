import Booking from "../components/Booking";
import Footer from "../components/Footer";
import PackagesHeader from "./PackagesHeader";
import Packages from "../Home/Packages";
import DestinationSection from "../Destination/DestinationSection";


const Package = () => {
  return (
    <>
    <PackagesHeader/>
    <Booking/>
    <Packages/>
    <DestinationSection/>
    <Footer/>
    </>
  );
};

export default Package;