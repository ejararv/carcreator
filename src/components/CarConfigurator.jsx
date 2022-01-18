import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setBudget } from "../reducers/carReducer";
import CarElement from "./UI/CarElement";

const CarConfigurator = ({
  carElements,
  setElement,
  elementCost,
  title,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <CarConfiguratorContainer>
      <Title>{title}</Title>
      <Configurations>
        {Array.isArray(carElements, id) ? (
          carElements.map((carElement) => (
            <CarElement
              key={id}
              value={carElement}
              setElement={() => {
                setElement(carElement);
                dispatch(setBudget());
              }}
            >
              {/* I don’t recommend using indexes for keys if the order of items may
              change */}
              {carElement}
            </CarElement>
          ))
        ) : (
          <CarElement
            key={Date.now()}
            value={carElements}
            setElement={() => {
              setElement(carElements);
            }}
          >
            {/* I don’t recommend using indexes for keys if the order of items may
              change */}
            {carElements}
          </CarElement>
        )}

        {Array.isArray(elementCost, id) && elementCost ? (
          elementCost.map((e) => (
            <CarElement
              key={id}
              value={e}
              setElement={() => {
                setElement(e);
                dispatch(setBudget());
              }}
            >
              {/* I don’t recommend using indexes for keys if the order of items may
              change */}
              {e}
            </CarElement>
          ))
        ) : (
          <CarElement
            key={Date.now()}
            value={elementCost}
            setElement={() => {
              setElement(elementCost);
            }}
          >
            {/* I don’t recommend using indexes for keys if the order of items may
              change */}
            {carElements}
          </CarElement>
        )}
      </Configurations>
    </CarConfiguratorContainer>
  );
};

export default CarConfigurator;
const CarConfiguratorContainer = styled.div``;
const Title = styled.h1``;

const Configurations = styled.div`
  display: flex;
`;
