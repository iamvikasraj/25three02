'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import CreditCard from './CreditCard'

export default function Scene() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <Environment preset="studio" />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.15}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        <spotLight
          position={[-5, -5, -5]}
          angle={0.15}
          penumbra={1}
          intensity={0.4}
        />
        
        {/* Single card centered */}
        <CreditCard position={[0, 0, 0]} />

        <OrbitControls 
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={2*Math.PI/3}
        />
      </Canvas>
    </div>
  )
} 