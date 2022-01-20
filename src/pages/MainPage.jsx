import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCars, postCar } from "../actions/cars";
import CarConfigurator from "../components/CarConfigurator";
import Colors from "../components/UI/Colors";
import {
  buyCar,
  setCarEngine,
  setCarGearBox,
  setCurrentCar,
  setModel,
} from "../reducers/carReducer";
import CarCard from "../components/UI/CarCard";
import bg from "./../assets/background.jpg";
import CarElement from "../components/UI/CarElement";

const MainPage = () => {
  const dispatch = useDispatch();
  const carModel = useSelector((state) => state.car.carModel);
  const carEngine = useSelector((state) => state.car.carEngine);
  const carState = useSelector((state) => state.car);
  const carGearBox = useSelector((state) => state.car.carGearBox);
  const data = useSelector((state) => state.car.data);
  const currCar = useSelector((state) => state.car.currentCar);

  //action getCars - async call to fake api mirror.js

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
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
      />
    );
  };
  const GearBoxes = () => {
    let allGearBoxesViaModel =
      carModel === "MuscleCar"
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

  //Count total
  const getTotalPrice = () => {
    let res = 0;
    let current;
    if (carModel) {
      current = data.cars.find((i) => i.modelName === carModel);
      res += current.cost;
      if (carEngine) {
        res += current.engines.find((i) => i.modelName === carEngine).cost;
      }
      if (carGearBox) {
        if (carGearBox === "Yes") {
          res += 2500;
        } else if (carGearBox === "No") {
          res += 1000;
        }
      }
    }
    return res;
  };

  // if (loader) {
  //   return (
  //     <LoaderContainer>
  //       <HamsterLoader />
  //     </LoaderContainer>
  //   );
  // }

  return (
    <Container>
      <Configurations>
        <Models />
        {currCar.length && (
          <>
            <Engines />
            <GearBoxes />
            <Colors /> (
            <BudgetContainer>
              <table>
                <tbody>
                  <tr>
                    <TData>Model:</TData>
                    <TData>{carState.carModel}</TData>
                  </tr>
                  <tr>
                    <TData>Engine:</TData>
                    <TData>{carState.carEngine}</TData>
                  </tr>
                  <tr>
                    <TData>Automatic gearbox:</TData>
                    <TData>{carState.carGearBox}</TData>
                  </tr>
                  <tr>
                    <TData>Total:</TData>
                    <TData>{getTotalPrice()}</TData>
                  </tr>
                </tbody>
              </table>

              {carModel && carEngine && carGearBox && (
                <CarElement
                  style={{ background: "red" }}
                  setElement={
                    (() =>
                      dispatch(
                        buyCar({
                          carModel: carModel,
                          carEngine: carEngine,
                          carGearBox: carGearBox,
                        })
                      ),
                    postCar({
                      carModel: carModel,
                      carEngine: carEngine,
                      carGearBox: carGearBox,
                    }))
                  }
                >
                  Buy
                </CarElement>
              )}
            </BudgetContainer>
          </>
        )}
      </Configurations>

      <CarCard />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  padding: 3rem;
  overflow: hidden;
  align-items: flex-start;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Configurations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  align-self: auto;
`;
const TData = styled.td`
  color: white;
`;
const BudgetContainer = styled.div`
  width: 25rem;
  height: 20vh;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  height: 15%;
`;
