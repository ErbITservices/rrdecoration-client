import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
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
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 25px;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  margin: 1.6rem 5%;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 17px;
  }
  ${mobile({
    fontSize: "1rem",
  })}
`;
const InputContainer = styled.div`
  height: 7%;
  width: 50%;
  background-color: transperent;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    width: "80%",
  })}
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  max-width: 150px;
  border-radius: 10px;
  // font-size: 50px
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  flex: 1;
  background-color: #6fc3c9;
  color: black;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    background-color: #4d9296;
  }
`;

function Contectus() {
  const navigator = useNavigate();
  return (
    <Container>
      <h1 className="heading">Contect Us</h1>
      <div className="contectus-container">
        <div className="contect-card">
          <HomeWorkOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
          <h1>Shop Address</h1>
          <p> near temple Sector 24,gandhinagar,gujarat,3820024</p>
        </div>
        <div className="contect-card">
          <MailOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
          <h1>General Enquiries</h1>
          <p>erbitservices@gmail.com</p>
        </div>
        <div className="contect-card">
          <LocalPhoneOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
          <h1>Call Us</h1>
          <p>+91 8160628914</p>
        </div>
        <div className="contect-card">
          <AccessTimeOutlinedIcon sx={{ fontSize: 40 }} className="icon" />
          <h1>Our Timings</h1>
          <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
        </div>
        <Link to={"/ComplainRegister"}>
          <button className="btn">Enquiry Now</button>
        </Link>
      </div>
    </Container>
  );
}

export default Contectus;
