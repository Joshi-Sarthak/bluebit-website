"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group } from "three"

export default function PipBoyModel(props: any) {
  const group = useRef<Group>(null)

  // This is a simplified model since we don't have the actual Pip-Boy 3000 model
  // In a real implementation, you would use a proper Pip-Boy 3000 GLB model

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main body of the Pip-Boy */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial color="#2a3a28" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.2, 0.26]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.8, 0.05]} />
        <meshStandardMaterial color="#4cff5e" emissive="#4cff5e" emissiveIntensity={0.5} roughness={0.3} />
      </mesh>

      {/* Knobs and buttons */}
      <mesh position={[-0.7, -1.2, 0.3]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      <mesh position={[0, -1.2, 0.3]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      <mesh position={[0.7, -1.2, 0.3]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      {/* Top buttons */}
      <mesh position={[-0.7, 1.2, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      <mesh position={[0, 1.2, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      <mesh position={[0.7, 1.2, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.1, 0.05]} />
        <meshStandardMaterial color="#111111" roughness={0.5} />
      </mesh>

      {/* Wrist band */}
      <mesh position={[0, 0, -0.3]} rotation={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.4, 16, 1, true, -Math.PI / 4, Math.PI / 2]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.8} side={2} />
      </mesh>
    </group>
  )
}

