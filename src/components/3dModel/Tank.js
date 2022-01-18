/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Jared Jones (https://sketchfab.com/rytmiking)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/thomas-the-tank-engine-de2752e50d4146899fbb1334d08af517
title: Thomas The Tank Engine
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Tank(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/tank/scene.gltf");
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.03}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              name="Eye_Ctrl"
              position={[-10.45, 76.28, 104.16]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[7.35, 7.35, 5.13]}
            />
            <group position={[0, 32.97, -8.09]}>
              <group position={[0, -2.23, 23.62]} rotation={[0.08, 0, 0]}>
                <group position={[0, 7.59, 32.75]}>
                  <group position={[0, -7.42, 6.26]}>
                    <group position={[0, 0.04, 0.03]}>
                      <mesh
                        geometry={nodes.Lower_Leg_thomasthomas2_0.geometry}
                        material={nodes.Lower_Leg_thomasthomas2_0.material}
                      />
                    </group>
                    <group position={[0, 2.06, -46.09]}>
                      <mesh
                        geometry={
                          nodes.Caustion_Strip_CAution_Material_0.geometry
                        }
                        material={
                          nodes.Caustion_Strip_CAution_Material_0.material
                        }
                      />
                    </group>
                  </group>
                  <mesh
                    geometry={nodes.Knee_blinn1_0.geometry}
                    material={nodes.Knee_blinn1_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.F_Upper_Leg1_Thomas_Metal_0.geometry}
                  material={nodes.F_Upper_Leg1_Thomas_Metal_0.material}
                />
                <mesh
                  geometry={nodes.F_Upper_Leg1_thomasthomas2_0.geometry}
                  material={nodes.F_Upper_Leg1_thomasthomas2_0.material}
                />
                <mesh
                  geometry={nodes.F_Upper_Leg1_blinn1_0.geometry}
                  material={nodes.F_Upper_Leg1_blinn1_0.material}
                />
                <mesh
                  geometry={nodes.F_Upper_Leg1_Thomas_Black_Lambet_0.geometry}
                  material={nodes.F_Upper_Leg1_Thomas_Black_Lambet_0.material}
                />
                <mesh
                  geometry={nodes.F_Upper_Leg1_second_brown_0.geometry}
                  material={nodes.F_Upper_Leg1_second_brown_0.material}
                />
              </group>
              <group position={[0, -2.23, -7.41]} rotation={[-0.13, 0, 0]}>
                <group position={[0, 7.59, -32.75]} rotation={[0.18, 0, 0]}>
                  <group position={[0, -7.42, -6.26]}>
                    <group position={[0, 0.06, -0.12]}>
                      <mesh
                        geometry={nodes.Lower_Leg_thomasthomas2_0_1.geometry}
                        material={nodes.Lower_Leg_thomasthomas2_0_1.material}
                      />
                    </group>
                    <group position={[0, 2.06, 46.09]}>
                      <mesh
                        geometry={
                          nodes.Caustion_Strip_CAution_Material_0_1.geometry
                        }
                        material={
                          nodes.Caustion_Strip_CAution_Material_0_1.material
                        }
                      />
                    </group>
                  </group>
                  <mesh
                    geometry={nodes.Knee_blinn1_0_1.geometry}
                    material={nodes.Knee_blinn1_0_1.material}
                  />
                </group>
                <mesh
                  geometry={nodes.B_Upper_Leg2_Thomas_Metal_0.geometry}
                  material={nodes.B_Upper_Leg2_Thomas_Metal_0.material}
                />
                <mesh
                  geometry={nodes.B_Upper_Leg2_thomasthomas2_0.geometry}
                  material={nodes.B_Upper_Leg2_thomasthomas2_0.material}
                />
                <mesh
                  geometry={nodes.B_Upper_Leg2_blinn1_0.geometry}
                  material={nodes.B_Upper_Leg2_blinn1_0.material}
                />
                <mesh
                  geometry={nodes.B_Upper_Leg2_Thomas_Black_Lambet_0.geometry}
                  material={nodes.B_Upper_Leg2_Thomas_Black_Lambet_0.material}
                />
                <mesh
                  geometry={nodes.B_Upper_Leg2_second_brown_0.geometry}
                  material={nodes.B_Upper_Leg2_second_brown_0.material}
                />
              </group>
              <group position={[15.51, -2.23, 8.11]} rotation={[0, 0, 0.23]}>
                <group position={[32.75, 7.59, 0]}>
                  <group position={[6.26, -7.42, 0]}>
                    <group position={[6.32, -4.7, 0]}>
                      <mesh
                        geometry={nodes.Lower_Leg_thomasthomas2_0_2.geometry}
                        material={nodes.Lower_Leg_thomasthomas2_0_2.material}
                      />
                    </group>
                    <group position={[-46.09, 2.06, 0]}>
                      <mesh
                        geometry={
                          nodes.Caustion_Strip_CAution_Material_0_2.geometry
                        }
                        material={
                          nodes.Caustion_Strip_CAution_Material_0_2.material
                        }
                      />
                    </group>
                  </group>
                  <mesh
                    geometry={nodes.Knee_blinn1_0_2.geometry}
                    material={nodes.Knee_blinn1_0_2.material}
                  />
                </group>
                <mesh
                  geometry={nodes.L_Upper_Leg6_Thomas_Metal_0.geometry}
                  material={nodes.L_Upper_Leg6_Thomas_Metal_0.material}
                />
                <mesh
                  geometry={nodes.L_Upper_Leg6_thomasthomas2_0.geometry}
                  material={nodes.L_Upper_Leg6_thomasthomas2_0.material}
                />
                <mesh
                  geometry={nodes.L_Upper_Leg6_blinn1_0.geometry}
                  material={nodes.L_Upper_Leg6_blinn1_0.material}
                />
                <mesh
                  geometry={nodes.L_Upper_Leg6_Thomas_Black_Lambet_0.geometry}
                  material={nodes.L_Upper_Leg6_Thomas_Black_Lambet_0.material}
                />
                <mesh
                  geometry={nodes.L_Upper_Leg6_second_brown_0.geometry}
                  material={nodes.L_Upper_Leg6_second_brown_0.material}
                />
              </group>
              <group position={[-15.51, -2.23, 8.11]} rotation={[0, 0, -0.21]}>
                <group position={[-32.75, 7.59, 0]} rotation={[0, 0, 0.27]}>
                  <group position={[-6.26, -7.42, 0]} rotation={[0, 0, 0.22]}>
                    <group position={[-0.15, 0.06, 0]}>
                      <mesh
                        geometry={nodes.Lower_Leg_thomasthomas2_0_3.geometry}
                        material={nodes.Lower_Leg_thomasthomas2_0_3.material}
                      />
                    </group>
                    <group position={[46.09, 2.06, 0]}>
                      <mesh
                        geometry={
                          nodes.Caustion_Strip_CAution_Material_0_3.geometry
                        }
                        material={
                          nodes.Caustion_Strip_CAution_Material_0_3.material
                        }
                      />
                    </group>
                  </group>
                  <mesh
                    geometry={nodes.Knee_blinn1_0_3.geometry}
                    material={nodes.Knee_blinn1_0_3.material}
                  />
                </group>
                <mesh
                  geometry={nodes.R_Upper_Leg5_Thomas_Metal_0.geometry}
                  material={nodes.R_Upper_Leg5_Thomas_Metal_0.material}
                />
                <mesh
                  geometry={nodes.R_Upper_Leg5_thomasthomas2_0.geometry}
                  material={nodes.R_Upper_Leg5_thomasthomas2_0.material}
                />
                <mesh
                  geometry={nodes.R_Upper_Leg5_blinn1_0.geometry}
                  material={nodes.R_Upper_Leg5_blinn1_0.material}
                />
                <mesh
                  geometry={nodes.R_Upper_Leg5_Thomas_Black_Lambet_0.geometry}
                  material={nodes.R_Upper_Leg5_Thomas_Black_Lambet_0.material}
                />
                <mesh
                  geometry={nodes.R_Upper_Leg5_second_brown_0.geometry}
                  material={nodes.R_Upper_Leg5_second_brown_0.material}
                />
              </group>
              <group position={[-5.71, 0, 2.38]} rotation={[0, Math.PI / 4, 0]}>
                <group
                  position={[0, -2.23, 23.62]}
                  rotation={[0.25, -0.28, 0.07]}
                >
                  <group position={[0, 7.59, 32.75]} rotation={[-0.21, 0, 0]}>
                    <group position={[0, -7.42, 6.26]} rotation={[-0.36, 0, 0]}>
                      <group position={[0, 0.04, 0.03]}>
                        <mesh
                          geometry={nodes.Lower_Leg_thomasthomas2_0_4.geometry}
                          material={nodes.Lower_Leg_thomasthomas2_0_4.material}
                        />
                      </group>
                      <group position={[0, 2.06, -46.09]}>
                        <mesh
                          geometry={
                            nodes.Caustion_Strip_CAution_Material_0_4.geometry
                          }
                          material={
                            nodes.Caustion_Strip_CAution_Material_0_4.material
                          }
                        />
                      </group>
                    </group>
                    <mesh
                      geometry={nodes.Knee_blinn1_0_4.geometry}
                      material={nodes.Knee_blinn1_0_4.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Upper_Leg1_Thomas_Metal_0.geometry}
                    material={nodes.Upper_Leg1_Thomas_Metal_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg1_thomasthomas2_0.geometry}
                    material={nodes.Upper_Leg1_thomasthomas2_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg1_blinn1_0.geometry}
                    material={nodes.Upper_Leg1_blinn1_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg1_Thomas_Black_Lambet_0.geometry}
                    material={nodes.Upper_Leg1_Thomas_Black_Lambet_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg1_second_brown_0.geometry}
                    material={nodes.Upper_Leg1_second_brown_0.material}
                  />
                </group>
                <group
                  position={[0, -2.23, -7.41]}
                  rotation={[-0.04, 0.24, -0.02]}
                >
                  <group position={[0, 7.59, -32.75]} rotation={[-0.14, 0, 0]}>
                    <group
                      position={[0, -7.42, -6.26]}
                      rotation={[-0.45, 0, 0]}
                    >
                      <group position={[0, 0.06, -0.12]}>
                        <mesh
                          geometry={nodes.Lower_Leg_thomasthomas2_0_5.geometry}
                          material={nodes.Lower_Leg_thomasthomas2_0_5.material}
                        />
                      </group>
                      <group position={[0, 2.06, 46.09]}>
                        <mesh
                          geometry={
                            nodes.Caustion_Strip_CAution_Material_0_5.geometry
                          }
                          material={
                            nodes.Caustion_Strip_CAution_Material_0_5.material
                          }
                        />
                      </group>
                    </group>
                    <mesh
                      geometry={nodes.Knee_blinn1_0_5.geometry}
                      material={nodes.Knee_blinn1_0_5.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Upper_Leg2_Thomas_Metal_0.geometry}
                    material={nodes.Upper_Leg2_Thomas_Metal_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg2_thomasthomas2_0.geometry}
                    material={nodes.Upper_Leg2_thomasthomas2_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg2_blinn1_0.geometry}
                    material={nodes.Upper_Leg2_blinn1_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg2_Thomas_Black_Lambet_0.geometry}
                    material={nodes.Upper_Leg2_Thomas_Black_Lambet_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg2_second_brown_0.geometry}
                    material={nodes.Upper_Leg2_second_brown_0.material}
                  />
                </group>
                <group
                  position={[15.51, -2.23, 8.11]}
                  rotation={[0.03, 0.16, -0.18]}
                >
                  <group position={[32.75, 7.59, 0]} rotation={[0, 0, 0.17]}>
                    <group position={[6.26, -7.42, 0]} rotation={[0, 0, 0.2]}>
                      <group position={[6.32, -4.7, 0]}>
                        <mesh
                          geometry={nodes.Lower_Leg_thomasthomas2_0_6.geometry}
                          material={nodes.Lower_Leg_thomasthomas2_0_6.material}
                        />
                      </group>
                      <group position={[-46.09, 2.06, 0]}>
                        <mesh
                          geometry={
                            nodes.Caustion_Strip_CAution_Material_0_6.geometry
                          }
                          material={
                            nodes.Caustion_Strip_CAution_Material_0_6.material
                          }
                        />
                      </group>
                    </group>
                    <mesh
                      geometry={nodes.Knee_blinn1_0_6.geometry}
                      material={nodes.Knee_blinn1_0_6.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Upper_Leg6_Thomas_Metal_0.geometry}
                    material={nodes.Upper_Leg6_Thomas_Metal_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg6_thomasthomas2_0.geometry}
                    material={nodes.Upper_Leg6_thomasthomas2_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg6_blinn1_0.geometry}
                    material={nodes.Upper_Leg6_blinn1_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg6_Thomas_Black_Lambet_0.geometry}
                    material={nodes.Upper_Leg6_Thomas_Black_Lambet_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg6_second_brown_0.geometry}
                    material={nodes.Upper_Leg6_second_brown_0.material}
                  />
                </group>
                <group
                  position={[-15.51, -2.23, 8.11]}
                  rotation={[0.02, -0.23, 0.01]}
                >
                  <group position={[-32.75, 7.59, 0]} rotation={[0, 0, 0.39]}>
                    <group position={[-6.26, -7.42, 0]} rotation={[0, 0, 0.16]}>
                      <group position={[-0.15, 0.06, 0]}>
                        <mesh
                          geometry={nodes.Lower_Leg_thomasthomas2_0_7.geometry}
                          material={nodes.Lower_Leg_thomasthomas2_0_7.material}
                        />
                      </group>
                      <group position={[46.09, 2.06, 0]}>
                        <mesh
                          geometry={
                            nodes.Caustion_Strip_CAution_Material_0_7.geometry
                          }
                          material={
                            nodes.Caustion_Strip_CAution_Material_0_7.material
                          }
                        />
                      </group>
                    </group>
                    <mesh
                      geometry={nodes.Knee_blinn1_0_7.geometry}
                      material={nodes.Knee_blinn1_0_7.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Upper_Leg5_Thomas_Metal_0.geometry}
                    material={nodes.Upper_Leg5_Thomas_Metal_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg5_thomasthomas2_0.geometry}
                    material={nodes.Upper_Leg5_thomasthomas2_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg5_blinn1_0.geometry}
                    material={nodes.Upper_Leg5_blinn1_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg5_Thomas_Black_Lambet_0.geometry}
                    material={nodes.Upper_Leg5_Thomas_Black_Lambet_0.material}
                  />
                  <mesh
                    geometry={nodes.Upper_Leg5_second_brown_0.geometry}
                    material={nodes.Upper_Leg5_second_brown_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[0, 32.97, -8.09]}>
              <mesh
                geometry={nodes.Base_Thomas_Metal_0.geometry}
                material={nodes.Base_Thomas_Metal_0.material}
              />
              <mesh
                geometry={nodes.Base_second_brown_0.geometry}
                material={nodes.Base_second_brown_0.material}
              />
              <mesh
                geometry={nodes.Base_blinn1_0.geometry}
                material={nodes.Base_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Base_CAution_Material_0.geometry}
                material={nodes.Base_CAution_Material_0.material}
              />
            </group>
            <group position={[0, 32.97, -8.09]}>
              <primitive object={nodes._rootJoint} />
              <mesh
                geometry={nodes.Head_thomasthomas2_0.geometry}
                material={nodes.Head_thomasthomas2_0.material}
              />
              <skinnedMesh
                geometry={nodes.R_Eye_EyeBall_0.geometry}
                material={nodes.R_Eye_EyeBall_0.material}
                skeleton={nodes.R_Eye_EyeBall_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.R_Eye_Pupil_0.geometry}
                material={nodes.R_Eye_Pupil_0.material}
                skeleton={nodes.R_Eye_Pupil_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.L_Eye_EyeBall_0.geometry}
                material={nodes.L_Eye_EyeBall_0.material}
                skeleton={nodes.L_Eye_EyeBall_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.L_Eye_Pupil_0.geometry}
                material={nodes.L_Eye_Pupil_0.material}
                skeleton={nodes.L_Eye_Pupil_0.skeleton}
              />
              <mesh
                geometry={nodes.Front_Cylinder_thing_Dirty_Green_0.geometry}
                material={nodes.Front_Cylinder_thing_Dirty_Green_0.material}
              />
              <mesh
                geometry={nodes.Front_rail_Thomas_Metal_0.geometry}
                material={nodes.Front_rail_Thomas_Metal_0.material}
              />
              <mesh
                geometry={nodes.Red_Laser_Holder_thomasthomas2_0.geometry}
                material={nodes.Red_Laser_Holder_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Rail_Guard_thomasthomas2_0.geometry}
                material={nodes.Rail_Guard_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Top_Cube_Piece_thomasthomas2_0.geometry}
                material={nodes.Top_Cube_Piece_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Top_Cube_Piece_blinn1_0.geometry}
                material={nodes.Top_Cube_Piece_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Engine_Back_thomasthomas2_0.geometry}
                material={nodes.Engine_Back_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Propane_Tank_phong4_0.geometry}
                material={materials.phong4}
              />
              <mesh
                geometry={nodes.Propane_Tank_Thomas_Metal_0.geometry}
                material={nodes.Propane_Tank_Thomas_Metal_0.material}
              />
              <mesh
                geometry={nodes.Danger_Texture_CAution_Material_0.geometry}
                material={nodes.Danger_Texture_CAution_Material_0.material}
              />
              <mesh
                geometry={nodes.Laser_Base1_CAution_Material_0.geometry}
                material={nodes.Laser_Base1_CAution_Material_0.material}
              />
              <mesh
                geometry={nodes.Laser_Base1_Red_Skull_0.geometry}
                material={nodes.Laser_Base1_Red_Skull_0.material}
              />
              <mesh
                geometry={nodes.Laser_Base1_blinn1_0.geometry}
                material={nodes.Laser_Base1_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Laser_Base1_Green_Laser_Light_0.geometry}
                material={materials.Green_Laser_Light}
              />
              <mesh
                geometry={nodes.Laser_Base1_Green_Laser_0.geometry}
                material={materials.Green_Laser}
              />
              <mesh
                geometry={nodes.Laser_Base1_Red_Laser_Light_0.geometry}
                material={materials.Red_Laser_Light}
              />
              <mesh
                geometry={nodes.Laser_Base1_Dirty_Green_0.geometry}
                material={nodes.Laser_Base1_Dirty_Green_0.material}
              />
              <mesh
                geometry={nodes.Skull_Decor_blinn1_0.geometry}
                material={nodes.Skull_Decor_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Skull_Decor_thomasthomas2_0.geometry}
                material={nodes.Skull_Decor_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Skull_Decor_Red_Skull_0.geometry}
                material={nodes.Skull_Decor_Red_Skull_0.material}
              />
              <mesh
                geometry={nodes.Skull_Decor_Thomas_Black_Lambet_0.geometry}
                material={nodes.Skull_Decor_Thomas_Black_Lambet_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_CAution_Material_0.geometry}
                material={nodes.Top_Platform_CAution_Material_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_Thomas_Metal_0.geometry}
                material={nodes.Top_Platform_Thomas_Metal_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_blinn1_0.geometry}
                material={nodes.Top_Platform_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_Dirty_Green_0.geometry}
                material={nodes.Top_Platform_Dirty_Green_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_Thomas_Black_Lambet_0.geometry}
                material={nodes.Top_Platform_Thomas_Black_Lambet_0.material}
              />
              <mesh
                geometry={nodes.Top_Platform_thomasthomas2_0.geometry}
                material={nodes.Top_Platform_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Engine_thomasthomas2_0.geometry}
                material={nodes.Engine_thomasthomas2_0.material}
              />
              <mesh
                geometry={nodes.Engine_blinn1_0.geometry}
                material={nodes.Engine_blinn1_0.material}
              />
              <mesh
                geometry={nodes.Engine_CAution_Material_0.geometry}
                material={nodes.Engine_CAution_Material_0.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");