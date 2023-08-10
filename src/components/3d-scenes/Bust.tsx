import { PerspectiveCamera, useGLTF, OrbitControls } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Bust(props: ThreeElements['mesh']): JSX.Element {
    const meshRef = useRef<THREE.Mesh>(null!);
    const bustGltf = useGLTF('/bust_voxelized.glb');
    useFrame(() => (meshRef.current.rotation.y += 0.005));
    return (
        <>
            <primitive {...props} ref={meshRef} object={bustGltf.scene} />
            <pointLight color={0xf7d3c8} position={[0, 20, 20]} />
            <ambientLight intensity={0.25} />
            <PerspectiveCamera
                fov={85}
                aspect={window.innerWidth / window.innerHeight}
            />
            <OrbitControls />
        </>
    );
}
