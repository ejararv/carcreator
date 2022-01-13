import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bugatti from "./../assets/pngegg.png";

const CarCard = () => {
  const color = useSelector((state) => state.car.color);
  return (
    <Container color={color}>
      <CardContainer></CardContainer>
    </Container>
  );
};

export default CarCard;
const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  width: 50vw;
`;
const CardContainer = styled.div`
  margin: 10rem auto;
  width: 50%;
  height: 60%;
  background-color: gray;
`;
