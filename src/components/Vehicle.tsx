"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(20); // in seconds
    const [canUptade, setCanUptade] = useState(false);
    const [vehicles, setVehicles] = useState([
        {
            name: "supercross",
            velocity: "35km/h",
            selected: true,
            img: "vehicle1.png"
        },
        {
            name: "Honda cb 125f",
            velocity: "90km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Renault Sandero",
            velocity: "160km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "BMW M4",
            velocity: "250km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Porsche 911 GT3",
            velocity: "320km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Bugatti Chiron",
            velocity: "490km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Boeing 737",
            velocity: "840km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "f-15 eagle",
            velocity: "2.600km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Saturn V",
            velocity: "64.500km/h",
            selected: false,
            img: "vehicle1.png"
        },
        {
            name: "Parker Solar Probe",
            velocity: "692,000 km/h",
            selected: false,
            img: "vehicle1.png"
        },
    ]);



    useEffect(() => {
        let number = 20;
        setInterval(() => {
            if (!canUptade) {
                number--;
                setCounterTime(number);
                if (number === 0) {
                    setCanUptade(true);
                    setCounterTime(20);
                    number = 20;
                }
            }
        }, 1000);
    }, []);

    const updateVehicle = () => {

    }
    
  return (
    <div className='fixed bottom-0 right-0 mr-6 z-50 flex flex-col justify-center items-center'>

            <div className='rounded-full bg-white p-4 border-green-500 border-4'>

                <Image 
                    src={require("@/assets/vehicle1.png")}
                    alt="bicicross"
                    className='w-[3rem] h-[3rem]'
                />

            </div>

            {
                canUptade && <button onClick={updateVehicle} type='button' className='bg-green-500 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>Update</button>
            }

            {
                !canUptade && <button type='button' className='bg-gray-400 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{counterTime}s</button>
            }
            
    </div>
  )
}
