import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import React from "react";
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

function Gallery() {
  const navigator = useNavigate();
  return (
    <Container>
      <h1 className="heading">Gallery</h1>
      <div className="gallery-container">
        <img
          src="https://image3.jdomni.in/banner/08092022/21/0A/B0/FF311FB47E993397F6B09C303F_1662632964447.jpeg?output-format=webp"
          className="gallery-pic"
        ></img>
        <img
          src="https://image2.jdomni.in/banner/08092022/B8/D1/D0/A6E027A6E96A6DEBEC906BC0D9_1662632954446.jpeg?output-format=webp"
          className="gallery-pic"
        />
        <img
          src="https://image1.jdomni.in/banner/08092022/97/E3/B7/135ECA0A558803DD335A756DB7_1662632939261.jpeg?output-format=webp"
          className="gallery-pic"
        />
        <img
          src="https://i.pinimg.com/originals/67/f5/e5/67f5e56e842b9f21880d75feea2cb47b.jpg"
          className="gallery-pic"
        />
        <img
          src="https://www.weddingsutra.com/images/Vendor_Images/Wedding-decor/the-decor-company/the-decor-company-02.jpg"
          className="gallery-pic"
        />
        <img
          src="https://www.weddingsutra.com/images/Vendor_Images/Wedding-decor/the-decor-company/the-decor-company-01.jpg"
          className="gallery-pic"
        />
      </div>
    </Container>
  );
}

export default Gallery;
