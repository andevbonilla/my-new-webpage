"use client"
import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(1); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [haveMoved, setHaveMoved] = useState(false);
    
    const vehicleWrapper:any = useRef(null);
    const vehicleIMG:any = useRef(null);
    
    const [vehicles, setVehicles] = useState([
        {
            name: "supercross",
            velocity: 35,
            img: "vehicle1.png"
        },
        {
            name: "Honda cb 125f",
            velocity: 90,
            img: "vehicle2.png"
        },
        {
            name: "Renault Sandero",
            velocity: 160,
            img: "vehicle3.png"
        },
        {
            name: "BMW M4",
            velocity: 250,
            img: "vehicle4.png"
        },
        {
            name: "Porsche 992 GT3 rs",
            velocity: 320,
            img: "vehicle5.png"
        },
        {
            name: "Bugatti Chiron",
            velocity: 490,
            img: "vehicle6.png"
        },
        {
            name: "Boeing 737",
            velocity: 840,
            img: "vehicle7.png"
        },
        {
            name: "f-15 eagle",
            velocity: 2600,
            img: "vehicle8.png"
        },
        {
            name: "Saturn V",
            velocity: 64500,
            img: "vehicle9.png"
        },
        {
            name: "Parker Solar Probe",
            velocity: 692000,
            img: "vehicle10.png"
        },
        {
            name: "Caza estelar T-65 Ala-X - Stars Wars",
            velocity: 2000000,
            img: "vehicle11.png"
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

    }, [])
    
    
    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 10) return;
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }

    const goUp = () => {
        if(!canClick) return;
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            setHaveMoved(true);
            moveImage();
        }, 200);
    }

    const calculateAmountOfpixels = (elem:any) => {
        return elem.offsetTop - window.innerHeight; // return the amount of pixels between th parts
    }

    // velocity: km/h distance: km
    const calculateTime = (velocity:number, distance:number) => {
        return (3600 * distance) / velocity; // return the time it will take to go up. in seconds
    }

    const moveImage = () => {

            const part1 = document.getElementById("part1");
            const part2 = document.getElementById("part2");
            const part3 = document.getElementById("part3");
            const part4 = document.getElementById("part4");


            let position =  document.body.scrollHeight-1200; // Posición inicial desde el fondo
            let speed = Math.abs(calculateAmountOfpixels(part1)) / calculateTime(vehicles[vehicleIndex].velocity, 3.8); // Velocidad en píxeles por segundo

            const moveStep = (timestamp:any) => {

                const timeDelta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                position -= speed * (timeDelta / 1000);

                vehicleIMG.current.style.transform = `translate(-30%, ${position}px) rotate(90deg)`;
                vehicleIMG.current.style.zIndex = "99";

                // if (position > -vehicleIMG.current.height-1200) {
                //     requestAnimationFrame(moveStep);
                // } else {
                //     // La imagen ha alcanzado la parte superior, puedes realizar acciones adicionales aquí si es necesario
                // }
                if (position > calculateAmountOfpixels(part1)) {

                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part2)) {

                    // La imagen ha alcanzado la parte
                    speed = Math.abs(calculateAmountOfpixels(part2)) / calculateTime(vehicles[vehicleIndex].velocity, 30);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part3)) {

                    // La imagen ha alcanzado la parte
                    speed = Math.abs(calculateAmountOfpixels(part3)) / calculateTime(vehicles[vehicleIndex].velocity, 400);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part4)) {

                    // La imagen ha alcanzado la parte
                    speed = Math.abs(calculateAmountOfpixels(part4)) / calculateTime(vehicles[vehicleIndex].velocity, 390000);
                    requestAnimationFrame(moveStep);

                }else{
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
                                            (canUptade && vehicleIndex !== 10) && <button onClick={updateVehicle} type='button' className='bg-green-500 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>Update</button>
                                        }

                                        {
                                            (!canUptade && vehicleIndex !== 10) && <p onClick={goUp} className='bg-gray-400 py-2 px-3 text-white rounded-full -translate-y-8 text-lg'>{counterTime}s</p>
                                        }

                                        {
                                            (vehicleIndex === 10) && <p className='opacity-0'>{counterTime}s</p>
                                        }
                                        
                                </div>
            }


    </div>

  )
}
