"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(1); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    
    const [vehicles, setVehicles] = useState([
        {
            name: "supercross",
            velocity: "35km/h",
            img: "vehicle1.png"
        },
        {
            name: "Honda cb 125f",
            velocity: "90km/h",
            img: "vehicle2.png"
        },
        {
            name: "Renault Sandero",
            velocity: "160km/h",
            img: "vehicle3.png"
        },
        {
            name: "BMW M4",
            velocity: "250km/h",
            img: "vehicle4.png"
        },
        {
            name: "Porsche 992 GT3 rs",
            velocity: "320km/h",
            img: "vehicle5.png"
        },
        {
            name: "Bugatti Chiron",
            velocity: "490km/h",
            img: "vehicle6.png"
        },
        {
            name: "Boeing 737",
            velocity: "840km/h",
            img: "vehicle7.png"
        },
        {
            name: "f-15 eagle",
            velocity: "2.600km/h",
            img: "vehicle8.png"
        },
        {
            name: "Saturn V",
            velocity: "64.500km/h",
            img: "vehicle9.png"
        },
        {
            name: "Parker Solar Probe",
            velocity: "692,000 km/h",
            img: "vehicle10.png"
        },
    ]);



    useEffect(() => {

        let number = 1;
        const newInterval = setInterval(() => {
            if (!canUptade) {
                number--;
                setCounterTime(number);
                if (number === 0) {
                    setCounterTime(1);
                    number = 1;
                    setCanUptade(true);
                 }
            }
        }, 1000);

        return () => {
            clearInterval(newInterval);
        }
      
    }, [canUptade]);


    

    

    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 9) return;
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }
    
  return (
    <div className='fixed bottom-0 right-0 mr-6 z-50 flex flex-col justify-center items-center'>

            <div className={`rounded-full bg-white p-2 ${(canUptade) ? "border-green-500" : "border-gray-400"} border-4`}>

                <Image 
                    src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                    alt="bicicross"
                    className='w-[4.5rem] h-[4.5rem]'
                />

            </div>

            {
                (canUptade && vehicleIndex !== 9) && <button onClick={updateVehicle} type='button' className='bg-green-500 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>Update</button>
            }

            {
                (!canUptade && vehicleIndex !== 9) && <p className='bg-gray-400 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{counterTime}s</p>
            }

            {
                (vehicleIndex === 9) && <p className='opacity-0'>{counterTime}s</p>
            }
            
    </div>
  )
}
