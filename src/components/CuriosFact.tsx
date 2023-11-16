import React from 'react';

export const CuriosFact = ({text}:any) => {
  return (
    <div className='md:text-xl md:mt-20 lg:mx-[25%] message flex mx-[10%] text-white my-14 p-2 md:p-6'>
        <p className='p-6 text-black'>{text}</p>
    </div>
  )
}
