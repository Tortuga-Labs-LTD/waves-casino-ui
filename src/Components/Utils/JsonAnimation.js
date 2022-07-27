import React,{ createRef, useEffect } from 'react';
import './style.css';

import lottie from "lottie-web";


function Animation({ animation }) {
  let animationContainer = createRef();
  useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          className: 'anima',
        }
      });
      return () => anim.destroy(); // optional clean up for unmounting
  }, [animation, animationContainer]);
  return (
    <>
      <div ref={animationContainer} />
    </>
  );
}

export default Animation
