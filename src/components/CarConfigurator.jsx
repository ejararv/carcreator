import React from "react";
import styled from "styled-components";

const CarConfigurator = ({ configurations, title, ...props }) => {
  return (
    <CarConfiguratorContainer>
      <Title>{title}</Title>
      <Configurations>{configurations}</Configurations>
    </CarConfiguratorContainer>
  );
};

export default CarConfigurator;
const CarConfiguratorContainer = styled.div``;
const Title = styled.h1``;

const Configurations = styled.div`
  display: flex;
`;
