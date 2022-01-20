import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Html, useProgress } from "@react-three/drei";

const Model = ({ children, zIndex, ...props }) => {
  const LoadingBar = () => {
    const { progress } = useProgress();
    console.log(progress);
    // return <Html center>{progress} % loaded</Html>;

    return (
      <Html>
        <ProgressBar>
          <Percent>{Math.floor(progress, 2)}%</Percent>
        </ProgressBar>
      </Html>
    );
  };

  return (
    <Container>
      <Canvas camera={{ position: [0, 0, zIndex], zoom: 1 }} {...props}>
        <OrbitControls autoRotate={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={<LoadingBar />}>{children}</Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const ProgressBar = styled.div`
  height: 20rem;
  width: 20vw;
  border-radius: 6px;
  display: flex;

  margin: 3px;
`;

const Percent = styled.h6`
  color: #fff;
  width: 2rem;
  height: 4rem;
  font-size: large;
  height: 4rem;
  position: absolute;
  left: 50%;
  text-align: center;
`;

export default Model;
