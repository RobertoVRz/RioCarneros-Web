import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="w-screen h-[50vh] relative">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        role="presentation"
        ref={videoRef}
        crossOrigin="anonymous"
        playsInline={true}
        preload="auto"
        loop={true}
        tabIndex={-1}
        autoPlay={true}
        muted={true}
        controls={false}
      >
        <source
          src="https://video.wixstatic.com/video/6a2275_2d1d99501b944379bb50e3fe360fb00c/720p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Hero;
