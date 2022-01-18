import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Model from "./Model";

const CarCard = ({ model }) => {
  const color = useSelector((state) => state.car.color);
  const carState = useSelector((state) => state.car);

  return (
    <Container color={color}>
      <BudgetContainer></BudgetContainer>
      <CardContainer>
        <Model>{model}</Model>

        <Element>{carState.carModel}</Element>
        <Element>{carState.carEngine}</Element>
        <Element>{carState.carGearBox}</Element>
      </CardContainer>
    </Container>
  );
};

export default CarCard;
const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;

  width: 100vw;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Element = styled.div``;
const BudgetContainer = styled.div`
  display: flex;
`;

const BudgetElement = styled.li`
  list-style: none;
`;
const CarModel = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto;
`;
