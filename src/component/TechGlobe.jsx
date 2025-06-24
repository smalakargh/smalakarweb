import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import * as THREE from 'three';

function Cylinder() {
  const tex = useTexture('/sqlogo.png'); 

  return (
    <mesh>
      {/* <cylinderGeometry args={[7, 7, 15, 22, 8, true]} /> */}
      <sphereGeometry args={[20,64,32,0,6,0,3]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function TechGlobe() {
  return (
    <Canvas camera={{ fov: 100, position: [20,20,0] }}>
      <ambientLight intensity={2} />
      <OrbitControls autoRotate autoRotateSpeed={8} />

      <Suspense fallback={null}>
        <Cylinder />
      </Suspense>
    </Canvas>
  );
}

export default TechGlobe;
