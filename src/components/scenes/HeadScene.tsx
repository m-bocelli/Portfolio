import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function HeadScene(props: ThreeElements['mesh']): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[hovered ? 2 : 1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}
