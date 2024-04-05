import { Suspense, useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import Loader from "./Loader";
import Island from "../models/island";
import Sky from "../models/sky";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition;
    let rotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -0.5, -2];
      rotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -0.5, -4];
      rotation = [0, 0, 0]; // No rotation
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  useEffect(() => {
    const handleResize = () => {
      const [newIslandScale, newIslandPosition, newIslandRotation] = adjustIslandForScreenSize();
      const [newPlaneScale, newPlanePosition] = adjustPlaneForScreenSize();

      setIslandScale(newIslandScale);
      setIslandPosition(newIslandPosition);
      setIslandRotation(newIslandRotation);
      setPlaneScale(newPlaneScale);
      setPlanePosition(newPlanePosition);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Sky
            isRotating={isRotating}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home;
