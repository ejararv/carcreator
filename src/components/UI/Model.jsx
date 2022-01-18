import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Model = ({ children, ...props }) => {
  return (
    <Canvas {...props}>
      <OrbitControls autoRotate={true} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={2} />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default Model;
