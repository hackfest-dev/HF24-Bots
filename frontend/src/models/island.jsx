import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF,useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from '../assets/animated_character_walks_on_floating_island.glb'

const Island=({isRotating,setIsRotating,setCurrentStage,...props})=> {
  const islandRef=useRef();
  const group = useRef()

  const {gl,viewport}=useThree();
  const { nodes, materials,animations } = useGLTF(islandScene)
  const { actions } = useAnimations(animations, group)

  const lastX=useRef(0);
  const rotatingSpeed=useRef(0);
  const dampingFactor=0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX=event.touches?event.touches[0].clientX:event.clientX;
    const delta=(clientX-lastX.current)/viewport.width

    islandRef.current.rotation.y+=delta*0.01*Math.PI;
    lastX.current=clientX;
    rotatingSpeed.current=delta*0.01*Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.015 * Math.PI;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.015 * Math.PI;
    }
  };


  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotatingSpeed.current *= dampingFactor;

      if (Math.abs(rotatingSpeed.current) < 0.001) {
        rotatingSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotatingSpeed.current;
    } else {

      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
        setCurrentStage(4);
      } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
        setCurrentStage(3);
      } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
        setCurrentStage(2);
      } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
        setCurrentStage(1);
      } else {
        setCurrentStage(null);
      }
    }
  });


  useEffect(() => {
    const canvas=gl.domElement
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
  <group ref={islandRef} {...props}>
  <group ref={group}>
  <group name="Sketchfab_Scene">
    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
      <group name="root">
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Floating_Island_68" position={[0, 0.096, -3.361]} scale={10.181}>
            <group name="root_0">
              <group name="node_id35_1" scale={0.001}>
                <group name="node_id31_69" position={[0, -255.468, 256.001]} scale={37.55}>
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.material}
                  />
                </group>
                <group name="node_id33_70" position={[0, -255.468, 256.001]} scale={37.55}>
                  <mesh
                    name="Object_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.material_1}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            name="Walk_In_Circle_71"
            position={[-0.93, 0.032, -0.52]}
            rotation={[0, 1.006, 0]}
            scale={0.304}>
            <group name="Walk_In_Circle_Skeleton_67" scale={0.01}>
              <group name="GLTF_created_0">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials.Ch46_body}
                  skeleton={nodes.Object_15.skeleton}
                />
                <group name="Ch46_72" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
</group>
</group>
  )
}

export default Island;



  //  <a.group ref={islandRef} {...props}>
  //     <mesh
  //       geometry={nodes.polySurface944_tree_body_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.polySurface945_tree1_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.polySurface946_tree2_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.polySurface947_tree1_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.polySurface948_tree_body_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.polySurface949_tree_body_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //     <mesh
  //       geometry={nodes.pCube11_rocks1_0.geometry}
  //       material={materials.PaletteMaterial001}
  //     />
  //   </a.group>