import React, { useRef, useCallback } from "react";
import WebCam from "react-webcam";

const Test = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
  return (
    <div>
      <button onClick={capture}>Capture</button>
      <WebCam
        videoConstraints={videoConstraints}
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
      />
    </div>
  );
};

export default Test;
