import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCars } from "../actions/cars";
import CarCard from "../components/CarCard";
import CarConfigurator from "../components/CarConfigurator";
import CarElement from "../components/UI/CarElement";
import Colors from "../components/UI/Colors";
import { setCarEngine, setCurrentCar, setModel } from "../reducers/carReducer";
import HamsterLoader from "../components/UI/hamsterLoader/HamsterLoader";

const MainPage = () => {
  const dispatch = useDispatch();
  const carModel = useSelector((state) => state.car.carModel);
  const loader = useSelector((state) => state.app.loader);
  const data = useSelector((state) => state.car.cars);
  const currCar = useSelector((state) => state.car.currentCar);

  console.log(currCar);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  if (loader) {
    return (
      <LoaderContainer>
        <HamsterLoader />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <Configurations>
        <BudgetContainer>
          <BudgetElement>111</BudgetElement>
          <BudgetElement>0</BudgetElement>
        </BudgetContainer>

        <CarConfigurator
          setElement={(value) => {
            dispatch(setModel(value));
            dispatch(
              setCurrentCar(
                data.cars.filter((i) =>
                  i.modelName.toLowerCase().includes(value.toLowerCase())
                )
              )
            );
          }}
          title="Model"
          carElements={data.cars.map((i) => i.modelName)}
        />
        {currCar.length && (
          <CarConfigurator
            title="Engine"
            setElement={(value) => {
              dispatch(setCarEngine(value));
            }}
            carElements={currCar[0].engines}
          />
        )}
        {/* <CarConfigurator
          title="Gearbox"
          carElement={currCar[0].automaticGearbox}
        /> */}

        {/* <CarConfigurator
          setElement={(value) => dispatch(setModel(value))}
          title="Model"
          car={data.cars.map((i) => i.modelName)}
        />
        <CarConfigurator
          setElement={(value) => dispatch(setModel(value))}
          title="Engine"
          car={data.cars.map((i) => i.engines)}
        />
         */}
        <Colors />
        {/* {getConfigurationsViaModel(carModel)} */}
      </Configurations>

      <CarCard />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Configurations = styled.div`
  margin: 20rem 5rem;
`;
const BudgetContainer = styled.div`
  position: fixed;
  top: 3rem;
  left: 3rem;
  width: 20rem;
  height: 15vh;
  background-color: gray;
  display: flex;
`;

const BudgetElement = styled.li`
  list-style: none;
`;
const LoaderContainer = styled.div`
  box-sizing: border-box;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 5vw;
  height: 100vh;
`;
