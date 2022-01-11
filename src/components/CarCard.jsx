import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CarCard = () => {
  const color = useSelector((state) => state.car.color);
  return (
    <Container>
      <img
        alt="car"
        src={
          `https://ddools.imgix.net/cars/base.png?w=600&mark-align=center,middle&mark=https%3A%2F%2Fddools.imgix.net%2Fcars%2Fpaint.png%3Fw%3D600%26bri%3D-18%26con%3D26%26monochrome%3D000000` +
          color
        }
      ></img>
    </Container>
  );
};

export default CarCard;
const Container = styled.div`
  margin: auto;

  width: 50vw;
`;
