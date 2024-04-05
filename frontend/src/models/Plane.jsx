import planeModel from '../assets/plane.glb';
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
    const meshRef = useRef();
    const { scene, animations } = useGLTF(planeModel);
    const { actions } = useAnimations(animations, meshRef);

    useEffect(() => {
        if (isRotating) {
            actions["Take 001"].play();
        } else {
            actions["Take 001"].stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh {...props} ref={meshRef}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Plane;