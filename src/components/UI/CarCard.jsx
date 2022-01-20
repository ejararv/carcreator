import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Fiat from "../3dModel/cars/Fiat";
import Gmc from "../3dModel/cars/Gmc";
import MuscleCar from "../3dModel/cars/MuscleCar";
import Porsche from "../3dModel/cars/Porsche";
import Model from "./Model";

const CarCard = () => {
  const color = useSelector((state) => state.car.color);
  const carModel = useSelector((state) => state.car.carModel);

  const CurrentCarModel = () => {
    return carModel === "Fiat" ? (
      <Model zIndex={10}>
        <Fiat customColor={color} />
      </Model>
    ) : carModel === "GMC" ? (
      <Model zIndex={10}>
        <Gmc customColor={color} />
      </Model>
    ) : carModel === "Porsche 911" ? (
      <Model zIndex={10}>
        <Porsche customColor={color} />
      </Model>
    ) : carModel === "MuscleCar" ? (
      <Model zIndex={10}>
        <MuscleCar customColor={color} />
      </Model>
    ) : null;
  };

  return <Container>{CurrentCarModel()}</Container>;
};

export default CarCard;
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
