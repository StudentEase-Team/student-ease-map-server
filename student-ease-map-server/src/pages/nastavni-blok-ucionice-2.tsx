import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { NastavniBlokUcionice2 } from '../models/nastavni-blok-ucionica-2';

const NastavniBlokUcionice2Prikaz: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Canvas shadows={false} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={0.5} castShadow={false} />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} castShadow={false} />
        <NastavniBlokUcionice2 />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default NastavniBlokUcionice2Prikaz;
