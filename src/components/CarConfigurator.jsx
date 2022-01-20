import React from "react";
import styled from "styled-components";
import CarElement from "./UI/CarElement";

const CarConfigurator = ({ carElements, setElement, title }) => {
  return (
    <CarConfiguratorContainer>
      <Title>{title}</Title>
      <Configurations>
        {Array.isArray(carElements) ? (
          carElements.map((carElement) => (
            <CarElement
              key={Math.random() * 100}
              value={carElement}
              setElement={() => {
                setElement(carElement);
              }}
            >
              {carElement}
            </CarElement>
          ))
        ) : (
          <CarElement
            key={Math.floor(Math.random() * 100)}
            value={carElements}
            setElement={() => {
              setElement(carElements);
            }}
          >
            {carElements}
          </CarElement>
        )}
      </Configurations>
    </CarConfiguratorContainer>
  );
};

export default CarConfigurator;
const CarConfiguratorContainer = styled.div``;
const Title = styled.h1`
  color: aliceblue;
`;

const Configurations = styled.div`
  display: flex;
`;
