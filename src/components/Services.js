import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

 



function Services() {
  const navigator = useNavigate();
  return (
    <Container>
      <h1 className="heading">Services</h1>
      <div className="service-container">
        <div className="service-card">
          <img
            src={
              "https://image3.jdomni.in/banner/08092022/94/13/CD/F4F6428A1094AC850BE9CD7659_1662632461966.png?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Wedding Decor</h1>
          <h3>
            We create a divine experience that you will never forget, keeping
            your taste, style and budget in mind with suitable decor and wedding
            tents chosen.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src={
              "https://image2.jdomni.in/banner/08092022/24/B3/BF/E71659F5354D850DE9723FE306_1662632642919.jpg?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Corporate Events</h1>
          <h3>
            We provide event solution for a wide range of events like
            conventions, trade shows, meetings & conferences with the best
            suitable set up and food.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src={
              "https://image1.jdomni.in/banner/08092022/14/6E/E9/CC07690157326B73D3D6AE94A4_1662632560447.jpg?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Private Occasions</h1>
          <h3>
            We ensure that the event is made memorable with exquisite delicacies
            prepared according to the theme of the event.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src={
              "https://image3.jdomni.in/banner/08052018/5F/18/30/2BF3DA7EA37BEFA3428929DCC2_1525772137585.jpg?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Theme Parties</h1>
          <h3>
            We portray the chosen theme in all areas from the venue, decor, food
            and other party factors to bring the party to life.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src={
              "https://image3.jdomni.in/banner/08092022/F4/80/7D/A992EB0F36BC32247A2575FDAE_1662632713291.jpg?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Reception & Cocktail Parties</h1>
          <h3>
            Whether the mood is traditional or fashionable, we create an
            atmosphere that is warm and personalized in every sense.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src={
              "https://image1.jdomni.in/banner/08092022/B9/96/DF/AB216BA7452897F7B8A3B2CCD5_1662632760156.jpg?output-format=webp"
            }
          ></img>
          <h1 className="service-h1">Birthday Parties</h1>
          <h3>
            Our team is committed to provide smooth execution of birthday
            parties of all age groups by providing delicious food and decor.
          </h3>
          <Link to={"/ComplainRegister"}>
            <button className="btn">Enquiry Now</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Services;
