import React, { useState, useEffect, useContext, useRef, Suspense } from "react";
import { StyleSheet, View } from "react-native";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { useSpring, animated } from "@react-spring/three";
import WeatherContext from "../../context/WeatherContext";
import { useNavigation } from "@react-navigation/native";

import iphone from "./Model.glb";

// import modelPath from "../../assets/models/iphone.usdz";

const IphoneModel = (props) => {
    const { nodes, materials } = useGLTF(iphone);
    const [active, setActive] = useState(false);
    const springs = useSpring({ scale: active ? 1.5 : 1 });
    const { scale } = useSpring({ scale: active ? 1.5 : 1 });
    const ref = useRef(false);

    return (
        <group
            {...props}
            scale={5}
            position={[0, -1, 0]}
            dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flora.geometry}
                material={materials.lambert1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flora1.geometry}
                material={materials.lambert1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flora2.geometry}
                material={materials.lambert1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flora3.geometry}
                material={materials.lambert1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flora4.geometry}
                material={materials.lambert1}
            />
        </group>
    );
};

useGLTF.preload(iphone);

const ARScreen = () => {
    return (
        <Canvas
            style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
            gl={{ antialias: true }}
            shadows={true}
            onCreated={(state) => {
                const _gl = state.gl.getContext();
                const pixelStorei = _gl.pixelStorei.bind(_gl);
                _gl.pixelStorei = function (...args) {
                    const [parameter] = args;
                    switch (parameter) {
                        case _gl.UNPACK_FLIP_Y_WEBGL:
                            return pixelStorei(...args);
                    }
                };
            }}>
            <ambientLight intensity={0.8} />
            <directionalLight
                intensity={1}
                color={"white"}
                castShadow={true}
                position={[1, 1, 1]}
            />
            <Suspense>
                <IphoneModel />
            </Suspense>
        </Canvas>
    );
};

export default ARScreen;
