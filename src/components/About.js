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

function About() {
  const navigator = useNavigate();
  return (
    <Container>
      <div className="about-container">
        <img
          src="https://image3.jdomni.in/banner/08092022/FC/ED/21/50C0801CED283AEC717DD72962_1662636049744.jpeg?output-format=webp"
          className="about-img"
        ></img>
        <div className="about-text">
          <h1 className="heading">About Us</h1>
          <p>
            We, dummy company located in area, city, state fill every occasion
            with great food and suitable decor to make an event memorable and
            successful. We are known for providing truly exquisite cuisine
            accompanied by dedicated service of decorating the venue aptly. We
            aim at providing services that define class and bring the true
            essence of the event. The experience that we have attained over the
            years, help us provide excellent personal service and individual
            attention. We give you the option of choosing from a variety of
            packages to suit the best for the event you envision. This undivided
            attention given to each of our customers has helped us to gather a
            huge client base for our company who assist us to grow each day.
          </p>
          <button className="btn" onClick={() => console.log("hello")}>
            Shop Now
          </button>
        </div>
      </div>
    </Container>
  );
}

export default About;
