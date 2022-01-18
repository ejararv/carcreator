import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCars } from "../actions/cars";
import CarConfigurator from "../components/CarConfigurator";
import Colors from "../components/UI/Colors";
import {
  setBudget,
  setCarEngine,
  setCarGearBox,
  setCurrentCar,
  setModel,
} from "../reducers/carReducer";
import CarCard from "../components/UI/CarCard";
import MuscleCar from "../components/3dModel/cars/MuscleCar";
import bg from "./../assets/background.jpg";

const MainPage = () => {
  const dispatch = useDispatch();
  const carModel = useSelector((state) => state.car.carModel);
  const carEngine = useSelector((state) => state.car.carEngine);
  const carGearBox = useSelector((state) => state.car.carGearBox);
  const loader = useSelector((state) => state.app.loader);
  const data = useSelector((state) => state.car.data);
  const currCar = useSelector((state) => state.car.currentCar);

  console.log(currCar, carEngine);
  console.log(data.cars.map((i) => i));
  useEffect(() => {
    dispatch(getCars());
  }, []);

  const Models = () => {
    return (
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
    );
  };

  const Engines = () => {
    return (
      <CarConfigurator
        title="Engine"
        setElement={(value) => {
          dispatch(setCarEngine(value));
        }}
        carElements={currCar[0].engines.map((e) => e.modelName)}
        elementCost={currCar[0].engines.map((e) => e.cost)}
      />
    );
  };
  const GearBoxes = () => {
    let allGearBoxesViaModel =
      carModel === "PRO RS3"
        ? "Yes"
        : currCar[0].automaticGearbox === "Yes"
        ? ["Yes", "No"]
        : currCar[0].automaticGearbox;

    return (
      <CarConfigurator
        title="Gearbox"
        setElement={(value) => {
          dispatch(setCarGearBox(value));
        }}
        carElements={allGearBoxesViaModel}
      />
    );
  };

  if (loader) {
    return <LoaderContainer>{/* loader */}</LoaderContainer>;
  }

  return (
    <Container>
      <Configurations>
        <Models />
        {currCar.length && <Engines />}
        {currCar.length && <GearBoxes />}
        {currCar.length && <Colors />}
      </Configurations>

      <CarCard model={<MuscleCar />} />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Configurations = styled.div`
  margin: 20rem 5rem;
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
