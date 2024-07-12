import React, { useEffect, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "../css/LandingPage.css";
import SectionAvatar from "./SectionAvatar";
import SectionInvitation from "./SectionInvitation";
import MusicPlayer from "./MusicPlayer";
import ShareThis from "./ShareThis";
import Model from "./Sunglass"; 

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const leafShadows = document.querySelector(".leaf-shadows");

      leafShadows.style.transform = `scale(${1.3 + scrollTop / 500})`;
      leafShadows.style.opacity = 1 - scrollTop / 200;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const controls = useRef();

  return (
    <div className="landing-page">
      <ShareThis />
      <MusicPlayer />
      <div className="leaf-shadows"></div>
      <div className="gradient-background"></div>

      <div className="content">
        <h1>Brooklyn</h1>
        <h1>Stoop Sale</h1>
        <p>JULY 20, 2024 <br/> 10:00 AM - 4:00 PM </p>
      </div>
      <div id="section-avatar">
        <SectionAvatar />
      </div>
      <div className="section-invitation">
        <SectionInvitation />
      </div>
      <div className="canvas-container">
        <Canvas
          camera={{ position: [3, 10, 14.25], fov: 8 }}
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
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
          <Model position={[0, -0.1, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default LandingPage;
