"use client"
import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(15); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    const [isGoingUp, setIsGoingUp] = useState(false);
    const [canClick, setCanClick] = useState(true);
    


    const elemento:any = useRef(null);
    
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

        let number = 15;
        const newInterval = setInterval(() => {
            if (!canUptade) {
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

    let isScrolling:any;
    document.addEventListener('scroll', function () {
        
        clearTimeout(isScrolling);
        setIsGoingUp(false);
        setCanClick(false);

        if (elemento.current) {
            elemento.current.style.opacity = '0';
            elemento.current.classList.remove('opacity-transition');
        }

        isScrolling = setTimeout(function () {
            if (elemento.current) {
                elemento.current.classList.add('opacity-transition');
                elemento.current.style.opacity = '1';
            }
            setCanClick(true);
        }, 200);

    }, false);
    
    
    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 9) return;
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }

    const goUp = () => {
        if(!canClick) return;
        // go to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            setIsGoingUp(true);
        }, 50);
        
        // show info message 
    }
    
  return (
    <div>

            {
                isGoingUp &&    <div className='fixed w-full bottom-0 left-0 z-50'>

                                    <Image 
                                        src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                        alt="bicicross"
                                        className='w-[12rem] h-[12rem] rotate-90 -translate-x-9'
                                    />

                                    <div className='bg-gradient-to-b from-transparent via-black to-black text-white flex items-center px-10 py-[5rem]'>
                                        
                                        <p className='text-lg'>You are currently on a {vehicles[vehicleIndex].name}. The maximum speed of this object is: {vehicles[vehicleIndex].velocity}. 
                                                            Therefore it will take about: 20 days to rise to the top of the page.</p>
                                    </div>

                                </div>
                
            }

            {
                !isGoingUp &&  <div ref={elemento} className={`fixed bottom-0 right-0 mr-6 z-40 flex flex-col justify-center items-center`}>
                                        <button onClick={goUp}
                                                type='button' 
                                                className={`rounded-full bg-white p-2 ${(canUptade) ? "border-green-500" : "border-gray-400"} border-4`}>

                                            <Image 
                                                src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                                alt="bicicross"
                                                className='w-[4.5rem] h-[4.5rem]'
                                            />

                                        </button>

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
            }


    </div>

  )
}
