"use client"
import React from 'react';
import Image from 'next/image';

export const PicturesInBalloons = () => {

  return (
        <div className='pictures fixed left-0 md:left-[5rem] lg:left-[10rem] xl:left-[15rem] bottom-[-20rem] w-[20rem] h-[25rem] z-[999]' >
                <div className='flex z-[995]'>
                  <div className="balloon -translate-x-[5rem] -rotate-[30deg] translate-y-[1rem]"></div>
                  <div className="balloon -translate-x-[12rem] -rotate-[10deg] -translate-y-[4rem]"></div>
                  <div className="balloon -translate-x-[18rem] -translate-y-[6rem]"></div>
                  <div className="balloon -translate-x-[28rem] rotate-[10deg] translate-y-[.5rem]"></div>
                  <div className="balloon -translate-x-[34rem] rotate-[30deg] translate-y-[1rem]"></div>
                </div>
                <Image    
                    src={require(`@/assets/ovni.png`)}
                    alt="Me and my dog"
                    className='w-auto z-[998] relative'
                />
        </div>
  )
}
