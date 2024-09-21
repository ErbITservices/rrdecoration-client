import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpeg";
import background from "../assets/IMG_7600.PNG";
import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contectus from "../components/Contectus";
import Map from "../components/Map";

function Aboutus() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mainbackground})` }}
        className="backimg"
      >
        <Navbar />
        <div className="main-container backimg">
          <div className="hero-text">
            <h2 className="hero-text2"> Decor For All Your</h2>

            <h1 className="hero-text1">Special Occasions</h1>
            <Link to={"/ComplainRegister"}>
              <button className="btn">Enquiry Now</button>
            </Link>
            <Link to={"/Home"}>
              <button className="btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <Services  />
        <About />
        <Gallery />
        <Contectus />
        <Map />
        <Footer />
      </div>
    </>
  );
}
export default Aboutus;
