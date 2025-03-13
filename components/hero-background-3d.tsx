/* eslint-disable */

"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function CubeGrid({ count = 10, spacing = 3, mousePosition }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const { viewport } = useThree()

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.05
      mesh.current.rotation.y += delta * 0.05

      // Mouse interaction
      if (mousePosition.current) {
        const { x, y } = mousePosition.current
        mesh.current.rotation.x += (y * 0.01 - mesh.current.rotation.x) * 0.1
        mesh.current.rotation.y += (x * 0.01 - mesh.current.rotation.y) * 0.1
      }
    }
  })

  const cubes = []
  const halfCount = Math.floor(count / 2)

  for (let x = -halfCount; x <= halfCount; x++) {
    for (let y = -halfCount; y <= halfCount; y++) {
      for (let z = -halfCount; z <= halfCount; z++) {
        // Only create cubes at certain positions for a more interesting pattern
        if ((Math.abs(x) + Math.abs(y) + Math.abs(z)) % 2 === 0) {
          const posX = x * spacing
          const posY = y * spacing
          const posZ = z * spacing
          const size = 0.4 + Math.random() * 0.3
          const opacity = 0.2 + Math.random() * 0.3

          cubes.push(
            <mesh key={`${x}-${y}-${z}`} position={[posX, posY, posZ]} scale={size}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#4c9eff"
                transparent={true}
                opacity={opacity}
                emissive="#4c9eff"
                emissiveIntensity={0.5}
              />
            </mesh>,
          )
        }
      }
    }
  }

  return <group ref={mesh}>{cubes}</group>
}

function FloatingParticles({ count = 100, mousePosition }) {
  const particles = useRef()
  const { viewport } = useThree()

  useFrame((state, delta) => {
    if (particles.current) {
      particles.current.rotation.y += delta * 0.02

      // Mouse interaction
      if (mousePosition.current) {
        const { x, y } = mousePosition.current
        const childrenArray = particles.current.children

        for (let i = 0; i < childrenArray.length; i++) {
          const particle = childrenArray[i]
          const distX = particle.position.x - x * 20
          const distY = particle.position.y - y * 20
          const distance = Math.sqrt(distX * distX + distY * distY)

          if (distance < 10) {
            particle.position.x += distX * 0.01
            particle.position.y += distY * 0.01
          }
        }
      }
    }
  })

  const particleElements = []

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 50
    const y = (Math.random() - 0.5) * 50
    const z = (Math.random() - 0.5) * 50
    const size = 0.05 + Math.random() * 0.1

    particleElements.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[size, 8, 8]} />
        <meshStandardMaterial color="#a3d0ff" emissive="#a3d0ff" emissiveIntensity={1} />
      </mesh>,
    )
  }

  return <group ref={particles}>{particleElements}</group>
}

function DigitalGrid({ mousePosition }) {
  const grid = useRef()

  // Create a procedural texture instead of loading an external one
  const generateGridTexture = () => {
    const size = 512
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext("2d")

    // Fill background
    context.fillStyle = "#000000"
    context.fillRect(0, 0, size, size)

    // Draw grid lines
    context.strokeStyle = "#4c9eff"
    context.lineWidth = 1

    const gridSize = 32
    const cellSize = size / gridSize

    for (let i = 0; i <= gridSize; i++) {
      context.beginPath()
      context.moveTo(i * cellSize, 0)
      context.lineTo(i * cellSize, size)
      context.stroke()
    }

    for (let i = 0; i <= gridSize; i++) {
      context.beginPath()
      context.moveTo(0, i * cellSize)
      context.lineTo(size, i * cellSize)
      context.stroke()
    }

    return new THREE.CanvasTexture(canvas)
  }

  const texture = generateGridTexture()

  useFrame((state, delta) => {
    if (grid.current && mousePosition.current) {
      const { x, y } = mousePosition.current
      grid.current.rotation.x = y * 0.1
      grid.current.rotation.y = x * 0.1
    }
  })

  return (
    <mesh ref={grid} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100, 20, 20]} />
      <meshStandardMaterial
        map={texture}
        color="#4c9eff"
        emissive="#4c9eff"
        emissiveIntensity={0.3}
        transparent={true}
        opacity={0.7}
      />
    </mesh>
  )
}

function Scene() {
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#4c9eff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a3d0ff" />

      <CubeGrid mousePosition={mousePosition} />
      <FloatingParticles mousePosition={mousePosition} />
      <DigitalGrid mousePosition={mousePosition} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

export default function HeroBackground3D() {
  return (
    <Canvas className="bg-[#0a0a1a]">
      <Scene />
    </Canvas>
  )
}

