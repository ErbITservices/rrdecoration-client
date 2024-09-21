import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useNavigate } from "react-router-dom";

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

function Map() {
  const navigator = useNavigate();
  return (
    <Container>
      <h1 className="heading">Location</h1>
      <div className="map-container">
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8082.347626540011!2d72.63387920639154!3d23.202036185192583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726913755625!5m2!1sen!2sin"
          
        ></iframe>
      </div>
    </Container>
  );
}

export default Map;
