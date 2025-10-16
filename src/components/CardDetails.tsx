import { Text } from '@react-three/drei'

export default function CardDetails({ side = 'front' }: { side?: 'front' | 'back' }) {
  if (side === 'front') {
    return (
      <group position={[0, 0, 0.011]}>
        {/* Card Number */}
        <Text
          position={[-1.2, -0.2, 0]}
          fontSize={0.15}
          color="white"
          font="/fonts/RobotoMono-Regular.ttf"
          anchorX="left"
        >
          4000 1234 5678 9010
        </Text>

        {/* Name */}
        <Text
          position={[-1.2, -0.6, 0]}
          fontSize={0.12}
          color="white"
          font="/fonts/Inter-Regular.ttf"
          anchorX="left"
        >
          REESE HILL
        </Text>

        {/* Expiry */}
        <Text
          position={[0.6, -0.6, 0]}
          fontSize={0.08}
          color="white"
          font="/fonts/RobotoMono-Regular.ttf"
          anchorX="left"
        >
          EXP 11/27
        </Text>

        {/* Tap to pay symbol */}
        <Text
          position={[1.4, 0.8, 0]}
          fontSize={0.12}
          color="white"
          font="/fonts/Inter-Regular.ttf"
          anchorX="right"
        >
          )))
        </Text>

        {/* Chip */}
        <mesh position={[-1.2, 0.3, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.4, 0.3]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* VISA logo */}
        <Text
          position={[1.4, -0.6, 0]}
          fontSize={0.2}
          color="white"
          font="/fonts/Inter-Bold.ttf"
          anchorX="right"
        >
          VISA
        </Text>
      </group>
    )
  }

  // Back side details
  return (
    <group position={[0, 0, -0.011]}>
      {/* Magnetic stripe */}
      <mesh position={[0, 0.5, 0]}>
        <planeGeometry args={[3.4, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.8} />
      </mesh>
      
      {/* CVV */}
      <Text
        position={[1.2, 0, 0]}
        fontSize={0.1}
        color="black"
        font="/fonts/RobotoMono-Regular.ttf"
        anchorX="right"
      >
        CVV 123
      </Text>
    </group>
  )
}
