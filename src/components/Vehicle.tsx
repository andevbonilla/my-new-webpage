"use client"
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(15); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
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
        let number = 15;
        const newInterval = setInterval(() => {
            console.log(number)
            if (!canUptade) {
                console.log("trabajando")
                number--;
                setCounterTime(number);
                if (number === 0) {
                    setCounterTime(15);
                    number = 15;
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
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }
    
  return (
    <div className='fixed bottom-0 right-0 mr-6 z-50 flex flex-col justify-center items-center'>

            <div className={`rounded-full bg-white p-4 ${(canUptade) ? "border-green-500" : "border-gray-400"} border-4`}>

                <Image 
                    src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
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
