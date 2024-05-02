'use client'
import { Canvas } from '@react-three/fiber'
import AboutModel from '../models/AboutModel'
import {  useGLTF, ContactShadows, Environment, OrbitControls, CameraControls } from '@react-three/drei';

const AboutScene = () => {
  return (
    <Canvas shadows camera={{ position: [6,  0.075, 4.5], fov: 9 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <AboutModel />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        {/* <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI}
          maxAzimuthAngle={Math.PI}
          minDistance={5}
          maxDistance={100}
          enableZoom={false} // Disable zooming with the mouse wheel
          enablePan={false} // Disable panning
          enableDamping // Enable smooth damping when moving the camera
          dampingFactor={0.1} // Adjust the damping factor for smoother camera movement
          screenSpacePanning // Enable screen-space panning
          rotateSpeed={0.5} // Adjust the speed of camera rotation
        /> */}
      </Canvas>
  )
}

export default AboutScene
