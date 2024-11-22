import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function Background() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
        />
      </Canvas>
    </div>
  );
}