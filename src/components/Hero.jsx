import { useEffect, useRef } from "react";
import { asset } from "../constants";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>Mackbook Pro</h1>
        <img src={asset("/title.png")} alt="Macbook Title" />
      </div>
      <video
        ref={videoRef}
        src={asset("/videos/hero.mp4")}
        autoPlay
        muted
        playsInline
      ></video>
      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
