/* eslint-disable */

"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface CubeGridProps {
  count?: number;
  spacing?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function CubeGrid({ count = 10, spacing = 3, mousePosition }: CubeGridProps) {
  const mesh = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.05;
      mesh.current.rotation.y += delta * 0.05;

      if (mousePosition.current) {
        const { x, y } = mousePosition.current;
        mesh.current.rotation.x += (y * 0.01 - mesh.current.rotation.x) * 0.1;
        mesh.current.rotation.y += (x * 0.01 - mesh.current.rotation.y) * 0.1;
      }
    }
  });

  const cubes = [];
  const halfCount = Math.floor(count / 2);

  for (let x = -halfCount; x <= halfCount; x++) {
    for (let y = -halfCount; y <= halfCount; y++) {
      for (let z = -halfCount; z <= halfCount; z++) {
        if ((Math.abs(x) + Math.abs(y) + Math.abs(z)) % 2 === 0) {
          const size = 0.4 + Math.random() * 0.3;
          const opacity = 0.2 + Math.random() * 0.3;
          cubes.push(
            <mesh key={`${x}-${y}-${z}`} position={[x * spacing, y * spacing, z * spacing]} scale={size}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#4c9eff" transparent opacity={opacity} emissive="#4c9eff" emissiveIntensity={0.5} />
            </mesh>
          );
        }
      }
    }
  }

  return <group ref={mesh}>{cubes}</group>;
}

interface FloatingParticlesProps {
  count?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function FloatingParticles({ count = 100, mousePosition }: FloatingParticlesProps) {
  const particles = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (particles.current) {
      particles.current.rotation.y += delta * 0.02;
    }
  });

  const particleElements = Array.from({ length: count }, (_, i) => (
    <mesh key={i} position={[(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50]}>
      <sphereGeometry args={[0.05 + Math.random() * 0.1, 8, 8]} />
      <meshStandardMaterial color="#a3d0ff" emissive="#a3d0ff" emissiveIntensity={1} />
    </mesh>
  ));

  return <group ref={particles}>{particleElements}</group>;
}

interface DigitalGridProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function DigitalGrid({ mousePosition }: DigitalGridProps) {
  const grid = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (grid.current) {
      const { x, y } = mousePosition.current;
      grid.current.rotation.x = y * 0.1;
      grid.current.rotation.y = x * 0.1;
    }
  });

  return (
    <mesh ref={grid} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100, 20, 20]} />
      <meshStandardMaterial color="#4c9eff" emissive="#4c9eff" emissiveIntensity={0.3} transparent opacity={0.7} />
    </mesh>
  );
}

function Scene() {
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
  );
}

export default function HeroBackground3D() {
  return (
    <Canvas className="bg-[#0a0a1a]">
      <Scene />
    </Canvas>
  );
}