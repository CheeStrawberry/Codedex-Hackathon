import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import '../css/SectionAvatar.css';

import Model from "./Girl"; 

function SectionAvatar() {
  const controls = useRef();
  
  return (
    <div className="section-avatar">
      <div className="canvas-container">
        <Canvas
          camera={{ position: [3, 5, 14.25], fov: 8 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <OrbitControls
            ref={controls}
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            target={[0, 0, 0]}
            autoRotate
          />
          <Suspense fallback={null}>
            <Model position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} /> 
          </Suspense>
        </Canvas>
      </div>
      <div className="text-content">
        <ul className="item-list">
          <li>
            <span>DRESSES</span>
            <img src="../dress.jpg" alt="Dress" />
            
          </li>
          <li>
            <span>TOPS</span>
            <img src="../top.png" alt="Top" />
            
          </li>
          <li>
            <span>JEANS</span>
            <img src="../jeans.jpeg" alt="Jeans" />
            
          </li>
          <li>
            <span>SUNGLASSES</span>
            <img src="../sunglasses.jpg" alt="Sunglasses" />
            
          </li>
          <li>
            <span>CAPS</span>
            <img src="../cap.jpg" alt="Cap" />
            
          </li>
          <li>
            <span>SHOES</span>
            <img src="../shoes.png" alt="Shoes" />
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SectionAvatar;
