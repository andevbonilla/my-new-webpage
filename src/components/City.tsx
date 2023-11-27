import Image from 'next/image';
import React from 'react';

export const City = () => {
  return (
        <div className='city scale-150 lg:scale-100 absolute bottom-[9rem] md:bottom-[12rem] left-0 w-full' id="part1">
            <Image 
              src={require("@/assets/city.png")}
              alt="singapur city"
              className='w-full scale-150 -translate-x-6'
            />
        </div>
  )
}
