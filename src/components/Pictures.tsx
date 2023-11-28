"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const PicturesInBalloons = () => {
  const [balloons, setBalloons] = useState(5);
  const [animationY, setAnimationY] = useState(-100);
  const animatedImage = useRef(null);

  const directionFunction = (value:any) => {
    if (balloons === 5) {
      return value - 3;
    }
    if (balloons === 4) {
      return value + 1;
    }
    if (balloons === 3) {
      return value + 1;
    }
    if (balloons === 2) {
      return value + 2;
    }
    if (balloons === 1) {
      return value + 4;
    }
    if (balloons === 0) {
      return value + 16;
    }
  }

  useEffect(() => {
    const animate = () => {
      setAnimationY((prevY) => directionFunction(prevY));
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [balloons]);

  const deleteBalloon = (id:number) => {

    const balloonSelected:any = document.getElementById(`balloon${id}`);
    balloonSelected.style.display = "none";

    setBalloons(balloons-1);

  };

  let style = {
    transform: `translateY(${animationY}px)`,
  };


  return (
    <div
      ref={animatedImage}
      style={style}
      className={` flex flex-col items-center justify-center fixed left-0 md:left-[5rem] lg:left-[10rem] xl:left-[15rem] bottom-[-20rem] w-[20rem] h-[25rem] z-[999]`}
    >
      <div className="flex z-[995] relative">
        {/* Balloons here */}
        <div id="balloon1" onClick={() => deleteBalloon(1)} className="cursor-pointer balloon rotate-[25deg] -translate-y-[15rem] top-0 left-[-7rem]"></div>
        <div id="balloon2" onClick={() => deleteBalloon(2)} className="cursor-pointer balloon rotate-[15deg] -translate-y-[15rem] top-0 left-[-7rem]"></div>
        <div id="balloon3" onClick={() => deleteBalloon(3)} className="cursor-pointer balloon rotate-[0deg] -translate-y-[15rem] top-0 left-[-7rem]"></div>
        <div id="balloon4" onClick={() => deleteBalloon(4)} className="cursor-pointer balloon rotate-[-15deg] -translate-y-[15rem] top-0 left-[-7rem]"></div>
        <div id="balloon5" onClick={() => deleteBalloon(5)} className="cursor-pointer balloon rotate-[-25deg] -translate-y-[15rem] top-0 left-[-7rem]"></div>
      </div>
      <Image
        src={require(`@/assets/ovni.png`)}
        alt="Me and my dog"
        className="w-auto z-[998] relative"
      />
    </div>
  );
};
