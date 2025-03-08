import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface CreditCardProps {
  position?: [number, number, number]
}

export default function CreditCard({ position = [0, 0, 0] }: CreditCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Add subtle hover effect
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.05
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.05
  })

  return (
    <mesh ref={meshRef} position={position}>
      <RoundedBox args={[3.4, 2.1, 0.01]} radius={0.1} smoothness={4}>
        {/* Front */}
        <meshStandardMaterial attach="material-0" color="#ffffff" metalness={0.1} roughness={0.5} />
        {/* Back */}
        <meshStandardMaterial attach="material-1" color="#000000" metalness={0.1} roughness={0.5} />
        {/* Edges */}
        <meshPhysicalMaterial
          attach="material-2"
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.3}
        />
        <meshPhysicalMaterial
          attach="material-3"
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.3}
        />
        <meshPhysicalMaterial
          attach="material-4"
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.3}
        />
        <meshPhysicalMaterial
          attach="material-5"
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.3}
        />
      </RoundedBox>
    </mesh>
  )
} 