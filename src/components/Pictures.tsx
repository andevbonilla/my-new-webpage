"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const PicturesInBalloons = () => {
  const [balloons, setBalloons] = useState(5);
  const [animationY, setAnimationY] = useState(-100);
  const animatedImage = useRef(null);

  const directionFunction = (value:any) => {
    if (balloons === 5) {
      return value - 4;
    }
    if (balloons === 4) {
      return value + 2;
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

  const deleteBalloon = () => {
    setBalloons(balloons-1);
  };

  let style = {
    transform: `translateY(${animationY}px)`,
  };


  return (
    <div
      ref={animatedImage}
      style={style}
      className={`fixed left-0 md:left-[5rem] lg:left-[10rem] xl:left-[15rem] bottom-[-20rem] w-[20rem] h-[25rem] z-[999]`}
    >
      <div className="flex z-[995]">
        {/* Balloons here */}
        <div onClick={deleteBalloon} className="cursor-pointer balloon -translate-x-[5rem] -rotate-[30deg] translate-y-[1rem]"></div>
        <div onClick={deleteBalloon} className="cursor-pointer balloon -translate-x-[12rem] -rotate-[10deg] -translate-y-[4rem]"></div>
        <div onClick={deleteBalloon} className="cursor-pointer balloon -translate-x-[18rem] -translate-y-[6rem]"></div>
        <div onClick={deleteBalloon} className="cursor-pointer balloon -translate-x-[28rem] rotate-[10deg] translate-y-[.5rem]"></div>
        <div onClick={deleteBalloon} className="cursor-pointer balloon -translate-x-[34rem] rotate-[30deg] translate-y-[1rem]"></div>
      </div>
      <Image
        src={require(`@/assets/ovni.png`)}
        alt="Me and my dog"
        className="w-auto z-[998] relative"
      />
    </div>
  );
};
