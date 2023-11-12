"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export const Vehicle = () => {

    const [startTime, setStartTime] = useState(0);

    useEffect(() => {

    }, [])
    
  return (
    <div className='fixed bottom-0 right-0 mr-6 z-50 flex flex-col justify-center items-center'>

            <div className='rounded-full bg-white p-4 border-green-500 border-4'>

                <Image 
                    src={require("@/assets/vehicle1.png")}
                    alt="bicicross"
                    className='w-[3rem] h-[3rem]'
                />

            </div>

            <button type='button' className='bg-green-500 py-2 px-3 text-white rounded-full -translate-y-8'>Update</button>
            {/* <button>Update</button> */}

    </div>
  )
}
