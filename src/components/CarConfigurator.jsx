import React, { useState } from "react";
import styled from "styled-components";
import CarElement from "./UI/CarElement";

const CarConfigurator = ({
  carElements,
  carElement,
  setElement,
  title,
  id,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <CarConfiguratorContainer>
      <Title>{title}</Title>
      <Configurations>
        {carElements.length > 1 ? (
          carElements.map((carElement) => (
            <CarElement
              clicked={isClicked}
              key={id}
              value={carElement}
              onClick={() => {
                setElement(carElement);
                setIsClicked(!isClicked);
              }}
            >
              {/* I don’t recommend using indexes for keys if the order of items may
              change */}
              {carElement}
            </CarElement>
          ))
        ) : (
          <CarElement
            clicked={isClicked}
            key={id}
            value={carElements}
            onClick={() => {
              setElement(carElements);
              setIsClicked(!isClicked);
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
