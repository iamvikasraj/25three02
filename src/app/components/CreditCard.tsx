import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

interface CreditCardProps {
  position?: [number, number, number]
  variant?: 'super-money' | 'axis-bank' | 'black-card'
  rotation?: [number, number, number]
}

export default function CreditCard({ position = [0, 0, 0], variant = 'super-money', rotation = [0, 0, 0] }: CreditCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Card dimensions - matching PNG aspect ratio (504x705)
  const cardWidth = 2.1
  const cardHeight = 2.94 // 2.1 * (705/504) to maintain aspect ratio
  const cardThickness = 0.05
  const detailsZPosition = cardThickness / 2 + 0.001 // Half thickness + small offset
  
  // Load the PNG texture based on variant
  const [cardTexture, setCardTexture] = useState<THREE.Texture | null>(null)
  
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    const texturePath = variant === 'super-money' ? '/Blue Card.png' : 
                       variant === 'black-card' ? '/Black Card.png' : 
                       '/Blue Card.png' // default fallback
    
    loader.load(
      texturePath,
      (texture) => {
        console.log('Texture loaded:', texture)
        texture.flipY = true
        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        texture.repeat.set(1, 1)
        texture.generateMipmaps = false
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.anisotropy = 1
        texture.needsUpdate = true
        setCardTexture(texture)
      },
      undefined,
      (error) => {
        console.error('Failed to load texture:', error)
      }
    )
  }, [variant])

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Optimized floating animation - only update every 2 frames
    if (Math.floor(state.clock.elapsedTime * 30) % 2 === 0) {
      // Limited rotation - much smaller range and slower speed
      const rotationAmount = Math.sin(state.clock.elapsedTime * 0.2) * 0.005
      meshRef.current.rotation.y = rotationAmount
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[cardWidth, cardHeight]} />
      <meshStandardMaterial 
        map={cardTexture}
        color={cardTexture ? "#ffffff" : (variant === 'black-card' ? "#1a1a1a" : "#1e40af")}
        side={THREE.DoubleSide}
        transparent={true}
        alphaTest={0.1}
        metalness={0.8}
        roughness={0.2}
      />
      
      {/* Card Details - Hidden since PNG texture contains the design */}
      <group position={[0, 0, detailsZPosition]} visible={false}>
        {variant === 'super-money' ? (
          <>
            {/* Super Money Variant */}
            {/* Chip */}
            <mesh position={[-0.8, 1.2, 0]}>
              <planeGeometry args={[0.3, 0.25]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Super Money Logo */}
            <Text
              position={[-0.8, 0.8, 0]}
              fontSize={0.12}
              color="white"
              anchorX="left"
            >
              super. money
            </Text>

            {/* RuPay Logo */}
            <Text
              position={[-0.8, -1.2, 0]}
              fontSize={0.1}
              color="white"
              anchorX="left"
            >
              RuPay
            </Text>

            {/* QR Code */}
            <mesh position={[0.6, -1.2, 0]}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.1}
                roughness={0.8}
              />
            </mesh>

            {/* Contactless Symbol */}
            <Text
              position={[0.8, 1.2, 0]}
              fontSize={0.12}
              color="white"
              anchorX="right"
            >
              )))
            </Text>

            {/* Vertical SUPER Text */}
            <Text
              position={[0.9, 0, 0]}
              fontSize={0.25}
              color="white"
              anchorX="center"
              rotation={[0, 0, Math.PI / 2]}
            >
              SUPER
            </Text>
          </>
        ) : (
          <>
            {/* Axis Bank Variant */}
            {/* Chip */}
            <mesh position={[-0.8, 1.2, 0]}>
              <planeGeometry args={[0.3, 0.25]} />
              <meshStandardMaterial
                color="#FFD700"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Global Company Logo */}
            <mesh position={[-0.8, 0.8, 0]}>
              <planeGeometry args={[0.2, 0.2]} />
              <meshStandardMaterial color="white" />
            </mesh>

            {/* Axis Bank Logo */}
            <Text
              position={[-0.8, 0.5, 0]}
              fontSize={0.08}
              color="white"
              anchorX="left"
            >
              Axis Bank
            </Text>

            {/* Tap to Pay Symbol */}
            <Text
              position={[0.8, 1.2, 0]}
              fontSize={0.12}
              color="white"
              anchorX="right"
            >
              )))
            </Text>

            {/* RuPay Logo */}
            <Text
              position={[-0.8, -1.2, 0]}
              fontSize={0.1}
              color="white"
              anchorX="left"
            >
              RuPay
            </Text>

            {/* Vertical SUPER Text */}
            <Text
              position={[0.9, 0, 0]}
              fontSize={0.25}
              color="white"
              anchorX="center"
              rotation={[0, 0, Math.PI / 2]}
            >
              SUPER
            </Text>

            {/* GM Logo */}
            <mesh position={[0, -1.5, 0]}>
              <planeGeometry args={[0.15, 0.15]} />
              <meshStandardMaterial color="#1e40af" />
            </mesh>
            <Text
              position={[0, -1.5, 0.001]}
              fontSize={0.08}
              color="white"
              anchorX="center"
            >
              GM
            </Text>
          </>
        )}
      </group>
    </mesh>
  )
} 