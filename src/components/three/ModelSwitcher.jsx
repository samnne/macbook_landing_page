import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { MacbookModel16 } from "../models/Macbook-16";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MacbookModel14 from "../models/Macbook-14";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;
const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};
const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

/*
    Allow switching between Macbook models and presentation logic
*/
const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacRef = useRef();
  const largeMacRef = useRef();

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook){

        moveGroup(smallMacRef.current, -OFFSET_DISTANCE);
        moveGroup(largeMacRef.current, 0);
    
        fadeMeshes(smallMacRef.current, 0);
        fadeMeshes(largeMacRef.current, 1);
    } else{
        moveGroup(smallMacRef.current, 0);
        moveGroup(largeMacRef.current, OFFSET_DISTANCE);
    
        fadeMeshes(smallMacRef.current, 1);
        fadeMeshes(largeMacRef.current, 0);
        
    }
  }, [scale]);
  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,

    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };
  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
