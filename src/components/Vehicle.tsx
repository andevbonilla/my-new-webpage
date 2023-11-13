"use client"
import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(15); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [haveMoved, setHaveMoved] = useState(false);
    
    const vehicleWrapper:any = useRef(null);
    const vehicleIMG:any = useRef(null);
    
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

    useEffect(() => {

        let isScrolling:any;
        document.addEventListener('scroll', function () {
            
            clearTimeout(isScrolling);
            setCanClick(false);
            setHaveMoved(false);

            if (vehicleWrapper.current) {
                vehicleWrapper.current.style.opacity = '0';
                vehicleWrapper.current.classList.remove('opacity-transition');
            }

            isScrolling = setTimeout(function () {
                if (vehicleWrapper.current) {
                    vehicleWrapper.current.classList.add('opacity-transition');
                    vehicleWrapper.current.style.opacity = '1';
                }
                setCanClick(true);
            }, 200);

        }, false);

        moveImage();

    }, [])
    
    
    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 9) return;
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }

    const goUp = () => {
        if(!canClick) return;
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            setHaveMoved(true);
        }, 200);
    }

    function moveImage() {

            let position = document.body.scrollHeight-1200; // Posición inicial desde el fondo

            function moveStep(timestamp:any) {
                const speed = 100; // Velocidad en píxeles por segundo
                const timeDelta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                position -= speed * (timeDelta / 1000);

                vehicleIMG.current.style.transform = `translate(-30%, ${position}px) rotate(90deg)`;
                vehicleIMG.current.style.zIndex = "99";

                if (position > -vehicleIMG.current.height-1000) {
                    requestAnimationFrame(moveStep);
                } else {
                    // La imagen ha alcanzado la parte superior, puedes realizar acciones adicionales aquí si es necesario
                }
            }

            let lastTimestamp = performance.now();
            requestAnimationFrame(moveStep);
    }
    
  return (
    <div>
        
            <Image 
               src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
               alt="bicicross"
               className='absolute left-0 bottom-0 w-[12rem] h-[12rem]'
               ref={vehicleIMG}
            />

            {

                   haveMoved &&  <div className={`opacity-transition fixed w-full bottom-0 left-0 z-50 bg-gradient-to-b from-transparent via-black to-black text-white flex items-center px-10 py-[5rem]`}>
                                        
                                    <p className='text-lg'>You are currently on a {vehicles[vehicleIndex].name}. The maximum speed of this object is: {vehicles[vehicleIndex].velocity}. 
                                                        Therefore it will take about: 20 days to rise to the top of the page.</p>
                                 </div>
                
            }

            {
                  <div ref={vehicleWrapper} className={`fixed bottom-0 right-0 mr-6 z-40 flex flex-col justify-center items-center`}>
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
                                            (!canUptade && vehicleIndex !== 9) && <p onClick={goUp} className='bg-gray-400 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{counterTime}s</p>
                                        }

                                        {
                                            (vehicleIndex === 9) && <p className='opacity-0'>{counterTime}s</p>
                                        }
                                        
                                </div>
            }


    </div>

  )
}
