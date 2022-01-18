/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: everhard (https://sketchfab.com/everhard)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/1971-buick-riviera-custom-268d8b02b7e6424cb624ca3718b5cc27
title: 1971 Buick Riviera Custom
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Buick(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/buick/scene.gltf");
  return (
    <group  ref={group} {...props} dispose={null}>
      <group  rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.BR71_lak}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.BR71_lak003}
        />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Gar_cbs} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Gar_gum} />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.P_85_Tex_2126_0}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Gar_kob} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.farsvet} />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.PB68_lak3}
        />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mirror} />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.leather_dark}
        />
        <mesh geometry={nodes.Object_12.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Gar_skl}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.window_black}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.diavel_disk}
        />
        <mesh geometry={nodes.Object_16.geometry} material={materials.chrome} />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.BR71_lak002}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.BR71_tex}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={nodes.Object_19.material}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={nodes.Object_20.material}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Gar_alu}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
