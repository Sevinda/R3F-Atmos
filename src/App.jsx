import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
