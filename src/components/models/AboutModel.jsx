"use client";
import React, { useCallback, useState } from 'react';
import { debounce } from "lodash";
import { useGLTF, PerspectiveCamera  } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const AboutModel = (props) => {
    const { nodes, materials } = useGLTF("/medias/about.glb");
    const { viewport } = useThree();
    const [hovered, hover] = useState(null)

    const over = (name) => (e) => (e.stopPropagation(), debouncedHover(name)) 
    const debouncedHover = useCallback(debounce(hover, 30), [])

    // Define the zoom-out scale factor
    const zoomOutScaleFactor = 0.075; // Adjust this value as needed
    

    return (
        <group 
            {...props}
            dispose={null}
            scale={[zoomOutScaleFactor, zoomOutScaleFactor, zoomOutScaleFactor]}
        >
        <group scale={0.02}>
            <group position={[1297.407, 41.289, 1039.533]} rotation={[-1.543, 0.416, 1.5]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4.geometry}
                material={nodes.Rectangle_4.material}
                position={[0.306, -21.632, 3.771]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3.geometry}
                material={nodes.Rectangle_3.material}
                position={[0.306, -14.807, -0.1]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[0.306, 1.024, -4.379]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[-0.007, -19.179, 14.642]}
                scale={1.041}
            />
            </group>
            <group position={[1473, 28.954, 981.028]} rotation={[-1.606, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4_1.geometry}
                material={nodes.Rectangle_4_1.material}
                position={[0.306, -21.632, 3.771]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3_1.geometry}
                material={nodes.Rectangle_3_1.material}
                position={[0.306, -14.807, -0.1]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2_1.geometry}
                material={nodes.Rectangle_2_1.material}
                position={[0.306, 1.024, -4.379]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={nodes.Cube_1.material}
                position={[-0.007, -19.179, 14.642]}
                scale={1.041}
            />
            </group>
            <group position={[1333.058, 65.505, 893.317]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4_2.geometry}
                material={nodes.Rectangle_4_2.material}
                position={[0.306, -21.632, 3.771]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3_2.geometry}
                material={nodes.Rectangle_3_2.material}
                position={[0.306, -14.807, -0.1]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2_2.geometry}
                material={nodes.Rectangle_2_2.material}
                position={[0.306, 1.024, -4.379]}
                scale={[1.041, 1.041, 0.726]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={nodes.Cube_2.material}
                position={[-0.007, -19.179, 14.642]}
                scale={1.041}
            />
            </group>
            <directionalLight intensity={0.7} decay={2} rotation={[-0.579, 0.687, 0.801]} />
            <PerspectiveCamera
            makeDefault={false}
            far={100000}
            near={5}
            fov={45}
            position={[1705.17, 274.653, 1432.818]}
            rotation={[-0.539, 0.604, 0.327]}
            />
        </group>
        </group>
    );
}

export default AboutModel;
