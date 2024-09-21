import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { hero } from "../DummyData";
import { mobile } from "../Responsive";

const Container = styled.div`
  margin: auto;
  width: 1600px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  /* ${mobile({
    display: "none",
  })}  */
`;
const ImageWrapper = styled.div`
  width: 100%;
  max-height: 65vh;
  max-height: 70dvh;
  overflow: hidden;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
  object-position: center;
`;

const Info = styled.div`
  width: 1100px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    align-items: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (max-width: 900px) {
    font-size: 40px;
    color: black;
  }
  color: black;
`;
const Description = styled.span`
  font-family: "Hanken Grotesk", sans-serif;
  margin-bottom: 15px;
  color: black;
`;
const Button = styled.button`
  margin-bottom: 5px;
  font-family: "Hanken Grotesk", sans-serif;
  border-radius: 2vmax;
  background-color: black;
  color: white;
  padding: 10px;
  border: 1px solid white;
`;

function Slider() {
  const navigate = useNavigate();
  const index = Math.floor(Math.random() * 8) + 1;
  const heroInfo = hero[index];
  console.log(hero);

  return (
    <Container>
      <ImageWrapper>
        <Image src="https://www.fnpweddings.com/wp-content/uploads/2023/07/Mandap.jpg" />
      </ImageWrapper>
      <Info>
        <Title>{heroInfo.title}</Title>
        <Description>{heroInfo.description}</Description>
      </Info>
    </Container>
  );
}

export default Slider;
