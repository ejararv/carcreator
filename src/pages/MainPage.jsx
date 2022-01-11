import React from "react";
import styled from "styled-components";
import CarCard from "../components/CarCard";
import CarConfigurator from "../components/CarConfigurator";
import CarElement from "../components/UI/CarElement";
import Colors from "../components/UI/Colors";

const MainPage = () => {
  return (
    <Container>
      <Configurations>
        <CarConfigurator
          title="Model"
          configurations={[
            <CarElement>BMW</CarElement>,
            <CarElement>AUDI</CarElement>,
          ]}
        />
        <Colors />
      </Configurations>

      <CarCard />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
`;

const Configurations = styled.div`
  margin: 20rem 5rem;
`;
