'use client'
import { Canvas } from '@react-three/fiber'
import MobileModel from '../models/MobileModel'
import { Environment, CameraControls, ContactShadows } from '@react-three/drei';

const MobileScene = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3} position={[0,3,2]}/>
        <Environment preset='city'/>
        <CameraControls  
          minPolarAngle={0} // Set the minimum polar angle (in radians)
          maxPolarAngle={Math.PI / 2} // Set the maximum polar angle (in radians)
          minAzimuthAngle={-Math.PI / 4} // Set the minimum azimuth angle (in radians)
          maxAzimuthAngle={Math.PI /9} // Set the maximum azimuth angle (in radians)
          minDistance={5} // Set the minimum distance the camera can zoom in
          maxDistance={3}
          enableZoom={false}
        />
        <MobileModel className='animate-bounce'/>
    </Canvas>
  )
}

export default MobileScene
