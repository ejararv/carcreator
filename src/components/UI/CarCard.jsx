import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CarCard = () => {
  const color = useSelector((state) => state.car.color);
  const carState = useSelector((state) => state.car);
  
  return (
    <Container color={color}>
      <BudgetContainer>
        <BudgetElement>Budget {carState.budget.total}</BudgetElement>
        <BudgetElement>Price {carState.budget.spent}</BudgetElement>
      </BudgetContainer>
      <CardContainer>
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
  background-color: ${(props) => props.color};
  width: 50vw;
`;
const CardContainer = styled.div`
  margin: 10rem auto;
  width: 50%;
  height: 60%;
  background-color: gray;
`;
const Element = styled.div``;
const BudgetContainer = styled.div`
  width: 20rem;
  height: 15vh;
  background-color: gray;
  display: flex;
`;

const BudgetElement = styled.li`
  list-style: none;
`;
