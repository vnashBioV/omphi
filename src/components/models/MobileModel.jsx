"use client";
import React, { useCallback, useState } from 'react';
import { debounce } from "lodash";
import { useGLTF} from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const MobileModel = () => {
    const { nodes } = useGLTF("/medias/mobile.glb");
    const { viewport } = useThree();
    const [hovered, hover] = useState(null)

    const over = (name) => (e) => (e.stopPropagation(), debouncedHover(name)) 
    const debouncedHover = useCallback(debounce(hover, 30), [])

    return (
        <group 
            scale={viewport.width / 4} 
            rotation={[0, Math.PI * 2.82, 0.34]}
        >
            {Object.keys(nodes).map((nodeName) => {
                const node = nodes[nodeName];
                const { geometry, material, position, rotation, scale } = node;

               

                return (
                    <mesh
                        key={nodeName}
                        onPointerOver={over("BRÖNDEN")} 
                        onPointerOut={() => debouncedHover(null)}
                        geometry={geometry}
                        material={material}
                        position={position}
                        rotation={rotation}
                        scale={scale}
                    />
                );
            })}
        </group>
    );
}

export default MobileModel;