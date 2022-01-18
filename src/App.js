import "./App.css";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyles";
import { createServer } from "miragejs";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

import Buick from "./components/3dModel/cars/Buick";
import BritishCar from "./components/3dModel/cars/BritishCar";
import Colors from "./components/UI/Colors";
import styled from "styled-components";
import Tank from "./components/3dModel/Tank";
import MuscleCar from "./components/3dModel/cars/MuscleCar";
import ConceptCar from "./components/3dModel/cars/ConceptCar";
import MotorBikeEngine from "./components/3dModel/engines/MotorBikeEngine";
import CombustionEngine from "./components/3dModel/engines/CombustionEngine";
import { useSelector } from "react-redux";
import Model from "./components/UI/Model";
// createServer({
//   routes() {
//     this.get("/api/cars", () => {
//       return {
//         user: {
//           money: 1000,
//         },
//         cars: [
//           {
//             id: 1,
//             modelName: "PRO RS3",
//             engines: [
//               "5.2L 532BHP",
//               "4.2L 443BHP",
//               "3.6L 374BHP",
//               "2.0L 116BHP",
//             ],
//             automaticGearbox: "Yes",
//           },
//           {
//             id: 2,
//             modelName: "UBER RS2",
//             engines: ["4.2L 443BHP", "3.6L 374BHP", "2.0L 116BHP"],
//             automaticGearbox: "Yes",
//           },
//           {
//             id: 3,
//             modelName: "STANDART",
//             engines: ["3.6L 374BHP", "2.0L 116BHP"],
//             automaticGearbox: "No",
//           },
//           {
//             id: 4,
//             modelName: "WK",
//             engines: ["2.0L 116BHP"],
//             automaticGearbox: "No",
//           },
//         ],
//         colors: [" #000000", "#0d4671", "#63803a", "#841210", "#a09e9f"],
//       };
//     });
//   },
// });

function App() {
  const colors = useSelector((state) => state.car.color);
  return (
    <>
      <GlobalStyle />
      <MainPage />
      {/* camera={{ position: [0, 0, 100], zoom: 1 }} */}
      {/* <Model /> */}
      {/* <Container>
        <Colors />
        <Model>
          <MuscleCar customColor={colors} />
        </Model>
        <Model>
          <CombustionEngine />
        </Model>
      </Container> */}

      <Container></Container>
    </>
  );
}

const Container = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto;
`;
export default App;
