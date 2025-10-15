'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import CreditCard from './CreditCard'

function useResponsiveCamera() {
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 0, 7] as [number, number, number],
    fov: 45
  })

  useEffect(() => {
    const updateCamera = () => {
      if (typeof window === 'undefined') return
      
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth < 1024 && window.innerWidth >= 768
      
      if (isMobile) {
        setCameraSettings({
          position: [0, 0, 10],
          fov: 35
        })
      } else if (isTablet) {
        setCameraSettings({
          position: [0, 0, 8],
          fov: 40
        })
      } else {
        setCameraSettings({
          position: [0, 0, 7],
          fov: 45
        })
      }
    }

    updateCamera()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateCamera)
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateCamera)
      }
    }
  }, [])

  return cameraSettings
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

    // Subtle easing with light overshoot
    const baseEase = 1 - Math.pow(1 - progress, 2)
    const overshoot = Math.sin(progress * Math.PI * 1.2) * 0.15 * Math.pow(1 - progress, 3)
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
  const cameraSettings = useResponsiveCamera()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <div className="h-screen w-full" style={{ backgroundColor: '#F2F3F7' }}>
      <Canvas 
        camera={{ position: cameraSettings.position, fov: cameraSettings.fov }}
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
          minDistance={cameraSettings.position[2] - 2}
          maxDistance={cameraSettings.position[2] + 3}
          minPolarAngle={Math.PI/3}
          maxPolarAngle={2*Math.PI/3}
          enableRotate={true}
          rotateSpeed={isMobile ? 0.3 : 0.5}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
} 