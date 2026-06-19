import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT_DESKTOP = 90
const NODE_COUNT_MOBILE  = 40
const CONNECTION_DIST    = 2.8
const SPREAD             = 9

interface Node {
  position: THREE.Vector3
  speed: number
  offset: number
}

function Network({ nodeCount }: { nodeCount: number }) {
  const groupRef    = useRef<THREE.Group>(null)
  const linesRef    = useRef<THREE.LineSegments>(null)
  const pointsRef   = useRef<THREE.Points>(null)

  // Generate stable node data
  const nodes = useMemo<Node[]>(() =>
    Array.from({ length: nodeCount }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * SPREAD,
        (Math.random() - 0.5) * SPREAD,
        (Math.random() - 0.5) * SPREAD,
      ),
      speed:  Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
    })),
  [nodeCount])

  // Build initial positions Float32Array for points
  const nodePositions = useMemo(() => {
    const arr = new Float32Array(nodeCount * 3)
    nodes.forEach((n, i) => {
      arr[i * 3]     = n.position.x
      arr[i * 3 + 1] = n.position.y
      arr[i * 3 + 2] = n.position.z
    })
    return arr
  }, [nodes, nodeCount])

  // Build connections
  const { linePositions, lineCount } = useMemo(() => {
    const pos: number[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < CONNECTION_DIST) {
          pos.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z,
          )
        }
      }
    }
    return { linePositions: new Float32Array(pos), lineCount: pos.length / 3 }
  }, [nodes])

  // Working positions for animation (mutated each frame)
  const workingPos = useMemo(() => new Float32Array(nodePositions), [nodePositions])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    // Slowly rotate the whole network
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.06
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.12
    }

    // Float each node gently up/down
    nodes.forEach((n, i) => {
      workingPos[i * 3 + 1] = n.position.y + Math.sin(t * n.speed + n.offset) * 0.18
    })

    // Push updated positions to GPU
    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
      attr.array = workingPos
      attr.needsUpdate = true
    }

    // Pulse line opacity
    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial
      mat.opacity = 0.1 + Math.sin(t * 0.5) * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            itemSize={3}
            count={lineCount}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B82F6" transparent opacity={0.12} />
      </lineSegments>

      {/* Nodes — large glowing layer */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={workingPos}
            itemSize={3}
            count={nodeCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          color="#60A5FA"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Nodes — smaller bright core */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={workingPos}
            itemSize={3}
            count={nodeCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#ffffff"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

interface Props {
  isMobile: boolean
}

export default function NeuralBackground({ isMobile }: Props) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Network nodeCount={isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP} />
      </Canvas>
    </div>
  )
}
