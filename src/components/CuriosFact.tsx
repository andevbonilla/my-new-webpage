import React from 'react'

export const CuriosFact = ({text}:any) => {
  return (
    <div className='message flex mx-[10%] text-white my-14'>
        <p className='p-6 text-black'>{text}</p>
    </div>
  )
}
