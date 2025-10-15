'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import CreditCard from './CreditCard'

function BackgroundAnimator({ onColorChange }: { onColorChange: (color: string) => void }) {
  const startTime = useRef<number>(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start immediately when component mounts (same as cards)
    setIsAnimating(true)
    startTime.current = Date.now()
  }, [])

  useFrame(() => {
    if (!isAnimating) return

    const elapsed = (Date.now() - startTime.current) / 1000
    const duration = 1.5 // Same duration as card animation
    const progress = Math.min(elapsed / duration, 1)

    // Same easing as card animation with overshoot
    const baseEase = 1 - Math.pow(1 - progress, 2)
    const overshoot = Math.sin(progress * Math.PI * 1.5) * 0.3 * Math.pow(1 - progress, 2)
    const easeOutOvershoot = progress < 1 ? baseEase + overshoot : 1

    // Interpolate between colors
    const startColor = new THREE.Color('#F2F3F7')
    const endColor = new THREE.Color('#1D07AE')
    
    const currentColor = startColor.clone().lerp(endColor, easeOutOvershoot)
    onColorChange(`#${currentColor.getHexString()}`)

    if (progress >= 1) {
      setIsAnimating(false)
    }
  })

  return null
}

function AnimatedCard({ 
  startPosition, 
  endPosition, 
  endRotation, 
  variant, 
  delay = 0
}: {
  startPosition: [number, number, number]
  endPosition: [number, number, number]
  endRotation: [number, number, number]
  variant: 'super-money' | 'black-card'
  delay?: number
}) {
  const [position, setPosition] = useState<[number, number, number]>(startPosition)
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])
  const [isAnimating, setIsAnimating] = useState(false)
  const startTime = useRef<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      startTime.current = Date.now()
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useFrame(() => {
    if (!isAnimating) return

    const elapsed = (Date.now() - startTime.current) / 1000
    const duration = 1.5
    const progress = Math.min(elapsed / duration, 1)

    // Easing function with overshoot
    const baseEase = 1 - Math.pow(1 - progress, 2)
    const overshoot = Math.sin(progress * Math.PI * 1.5) * 0.3 * Math.pow(1 - progress, 2)
    const easeOutOvershoot = progress < 1 ? baseEase + overshoot : 1

    // Animate position
    const newPosition: [number, number, number] = [
      startPosition[0] + (endPosition[0] - startPosition[0]) * easeOutOvershoot,
      startPosition[1] + (endPosition[1] - startPosition[1]) * easeOutOvershoot,
      startPosition[2] + (endPosition[2] - startPosition[2]) * easeOutOvershoot,
    ]

    // Animate rotation
    const newRotation: [number, number, number] = [
      endRotation[0] * easeOutOvershoot,
      endRotation[1] * easeOutOvershoot,
      endRotation[2] * easeOutOvershoot,
    ]

    setPosition(newPosition)
    setRotation(newRotation)

    if (progress >= 1) {
      setIsAnimating(false)
    }
  })

  return (
    <CreditCard 
      position={position}
      rotation={rotation}
      variant={variant}
    />
  )
}

export default function Scene() {
  const [showCards, setShowCards] = useState(true)

  return (
    <div className="h-screen w-full" style={{ backgroundColor: '#F2F3F7' }}>
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#F2F3F7']} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[2, 2, 2]}
          intensity={0.6}
        />
        
        {/* Blue Card (foreground) - starts from top */}
        <AnimatedCard
          startPosition={[0, 8, 0]}
          endPosition={[0.3, 0.2, 0.1]}
          endRotation={[0, 0, -0.1]}
          variant="super-money"
          delay={0}
        />
        
        {/* Black Card (background) - starts from bottom */}
        <AnimatedCard
          startPosition={[0, -8, 0]}
          endPosition={[-0.3, -0.2, -0.1]}
          endRotation={[0, 0, -0.1]}
          variant="black-card"
          delay={0}
        />

        <OrbitControls 
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={2*Math.PI/3}
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
} 