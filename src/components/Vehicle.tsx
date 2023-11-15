"use client"
import Image from 'next/image';
import React, {useEffect, useState, useRef} from 'react';

export const Vehicle = () => {

    const [counterTime, setCounterTime] = useState(1); // in seconds
    const [vehicleIndex, setvehicleIndex] = useState(0);
    const [canUptade, setCanUptade] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [showVehicleInfo, setShowVehicleInfo] = useState(false);
    const [vehiclePosition, setVehiclePosition] = useState(0);
    const [vehicleIsMoving, setVehicleIsMoving] = useState(false);
    const [vehiclePart, setVehiclePart] = useState(1); // in which part is the vehicle
    
    const vehicleWrapper:any = useRef(null);
    const vehicleIMG:any = useRef(null);

    
    const [vehicles, setVehicles] = useState([
        {
            velocity: 30,
            img: "vehicle1.png",
            subvehicle: "Vehicle:",
            vehicle: "supercross bicycle",
            submaxSpeed: "Max-speed:",
            maxSpeed: "30 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 8 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 1 hour",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 12 hours",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 18 months",
        },
        {
            velocity: 90,
            img: "vehicle2.png",
            subvehicle: "Vehicle:",
            vehicle: "Honda cb 125f",
            submaxSpeed: "Max-speed:",
            maxSpeed: "90 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 2.5 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 20 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 4 hours",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 180 days",
        },
        {
            velocity: 160,
            img: "vehicle3.png",
            subvehicle: "Vehicle:",
            vehicle: "Renault Sandero Dynamic",
            submaxSpeed: "Max-speed:",
            maxSpeed: "160 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 1.46 minutes",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 11.5 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 2.3 hours",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 101 days",
        },
        {
            velocity: 250,
            img: "vehicle4.png",
            subvehicle: "Vehicle:",
            vehicle: "BMW M4 competition",
            submaxSpeed: "Max-speed:",
            maxSpeed: "250 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 63 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 7.3 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 1.48 hours",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 65 days",
        },
        {
            velocity: 300,
            img: "vehicle5.png",
            subvehicle: "Vehicle:",
            vehicle: "Porsche 992 GT3 rs",
            submaxSpeed: "Max-speed:",
            maxSpeed: "300 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 48 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 6 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 1.2 hours",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 54 days",
        },
        {
            velocity: 490,
            img: "vehicle6.png",
            subvehicle: "Vehicle:",
            vehicle: "Bugatti Chiron Super Sport",
            submaxSpeed: "Max-speed:",
            maxSpeed: "490 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 30 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 3.7 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 45 minutes",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 33 days",
        },
        {
            velocity: 840,
            img: "vehicle7.png",
            subvehicle: "Vehicle:",
            vehicle: "Boeing 737",
            submaxSpeed: "Max-speed:",
            maxSpeed: "840 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 16.5 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 2.2 minutes",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 26.4 minutes",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 19 days",
        },
        {
            velocity: 2600,
            img: "vehicle8.png",
            subvehicle: "Vehicle:",
            vehicle: "f-15 eagle",
            submaxSpeed: "Max-speed:",
            maxSpeed: "2.600 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 5.5 seconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 43 seconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 8.6 minutes",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 6 days",
        },
        {
            velocity: 64500,
            img: "vehicle9.png",
            subvehicle: "Vehicle:",
            vehicle: "Saturn V - Nasa",
            submaxSpeed: "Max-speed:",
            maxSpeed: "64.500 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 212 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 1.75 seconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 21 seconds",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 6 hours",
        },
        {
            velocity: 692000,
            img: "vehicle10.png",
            subvehicle: "Vehicle:",
            vehicle: "Parker Solar Probe",
            submaxSpeed: "Max-speed:",
            maxSpeed: "692.000 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 20 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 158 miliseconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 2 seconds",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 33 minutes",
        },
        {
            velocity: 2000000,
            img: "vehicle11.png",
            subvehicle: "Vehicle:",
            vehicle: "Caza estelar T-65 Ala-X - Stars Wars",
            submaxSpeed: "Max-speed:",
            maxSpeed: "2.000.000 km/h",
            subtimeTitanic: "Titanic->city:",
            timeTitanic: "aprox 6.3 miliseconds",
            subtimeCity: "City->Airplanes:",
            timeCity: "aprox 50 miliseconds",
            subtimeAirplanes: "Airplanes->ISS:",
            timeAirplanes: "aprox 0.66 seconds",
            subtotalTime: "Titaic->Top of the page:",
            totalTime: "aprox 11 minutes",
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
    
    const goUp = () => {
        if(!canClick) return;
        window.scrollTo(0, document.body.scrollHeight);
        setVehicleIsMoving(true);
        setTimeout(() => {
            setShowVehicleInfo(true);
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

    const moveImage = (vindex:number = vehicleIndex) => {

            const part1 = document.getElementById("part1");
            const part2 = document.getElementById("part2");
            const part3 = document.getElementById("part3");
            const part4 = document.getElementById("part4");

            let speed = Math.abs(calculateAmountOfpixels(part1)) / calculateTime(vehicles[vindex].velocity, 3.8);
            let position =  0; // Posición inicial desde el fondo
            if (vehiclePosition === 0) {
                position =  document.body.scrollHeight-1400;
            }else{
                position =  vehiclePosition;
            }

            const moveStep = (timestamp:any) => {

                const timeDelta = timestamp - lastTimestamp;
                lastTimestamp = timestamp;

                position -= speed * (timeDelta / 1000);

                vehicleIMG.current.style.transform = `translate(-30%, ${position}px) rotate(90deg) scale(1.2,1.2)`;
                setVehiclePosition(position);
                vehicleIMG.current.style.zIndex = "99";

                if (position > calculateAmountOfpixels(part1)) {

                    setVehiclePart(1);
                    speed = Math.abs(calculateAmountOfpixels(part1)) / calculateTime(vehicles[vindex].velocity, 3.8);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part2)) {

                    // La imagen ha alcanzado la parte
                    setVehiclePart(2);
                    speed = Math.abs(calculateAmountOfpixels(part2)) / calculateTime(vehicles[vindex].velocity, 30);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part3)) {

                    // La imagen ha alcanzado la parte 
                    setVehiclePart(3); 
                    speed = Math.abs(calculateAmountOfpixels(part3)) / calculateTime(vehicles[vindex].velocity, 370);
                    requestAnimationFrame(moveStep);

                } else if (position > calculateAmountOfpixels(part4)) {

                    // La imagen ha alcanzado la parte
                    setVehiclePart(4);
                    speed = Math.abs(calculateAmountOfpixels(part4)) / calculateTime(vehicles[vindex].velocity, 390000);
                    requestAnimationFrame(moveStep);

                }else{
                    // La imagen ha alcanzado la parte superior, puedes realizar acciones adicionales aquí si es necesario
                    setVehicleIsMoving(false);
                    setVehiclePosition(0);
                    setVehiclePart(1);
                }
            }

            let lastTimestamp = performance.now();
            requestAnimationFrame(moveStep);
    }

    const updateVehicle = () => {
        if (!canUptade) return;
        if (vehicleIndex === 10) return;
        if (vehicleIsMoving) {
            setVehicleIsMoving(true);
            setvehicleIndex(vehicleIndex+1);
            setCanUptade(false);
            window.scrollTo(0, vehiclePosition);
            moveImage(vehicleIndex+1);
            return;
        }
        setvehicleIndex(vehicleIndex+1);
        setCanUptade(false);
    }


    const closeInfo = () => {
        setShowVehicleInfo(false);
    }

    const findVehicleInScreen = () => {
        window.scrollTo(0, vehiclePosition);
    }
    
  return (
    <div>
            {
               vehicleIsMoving && <button onClick={()=>setShowVehicleInfo(true)} ref={vehicleIMG} className='absolute left-0 bottom-0 w-[12rem] h-[12rem]'>
                                        <Image    
                                            src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                            alt={vehicles[vehicleIndex].vehicle}
                                            className='w-auto'
                                        />
                                  </button>
            }

            {
               vehicleIsMoving && <button onClick={findVehicleInScreen} className='fixed left-0 bottom-0 text-white font-bold bg-green-500 z-50 py-4 px-5 rounded-full ml-4 mb-4'>
                                        {(vehiclePart === 1) && <p className='font-bold'>{`Titanic -> City`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeTitanic}</span></p>}
                                        {(vehiclePart === 2) && <p className='font-bold'>{`City -> Airplanes`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeCity}</span></p>}
                                        {(vehiclePart === 3) && <p className='font-bold'>{`Airplanes -> ISS`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].timeAirplanes}</span></p>}
                                        {(vehiclePart === 4) && <p className='font-bold'>{`ISS -> +moon`}: <span className='font-normal opacity-85'>{vehicles[vehicleIndex].totalTime}</span></p>}
                                  </button>
            }

            {

                   showVehicleInfo &&  <div className={`opacity-transition fixed w-full bottom-0 left-0 z-50 bg-black bg-opacity-95 text-white flex flex-col items-start p-10`}>            
                                            <div className='flex'>
                                                <p className='font-bold text-lg mr-2'>{vehicles[vehicleIndex].subvehicle}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].vehicle}</p>
                                            </div>
                                            <div className='flex mt-6'>
                                                <p className='font-bold text-lg mr-2'>{vehicles[vehicleIndex].submaxSpeed}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].maxSpeed}</p>
                                            </div>
                                            <div className={`${(vehiclePart === 4) ? "bg-green-400 bg-opacity-50 p-2" : ""} flex mt-6`}>
                                                <p className="font-bold text-lg mr-2">{vehicles[vehicleIndex].subtotalTime}</p>
                                                <p className='text-lg opacity-80'>{vehicles[vehicleIndex].totalTime}</p>
                                            </div>
                                            
                                            <div>
                                                <p className='font-bold text-lg mt-6'>IMPORTANT</p>
                                                <p className='text-lg opacity-80 mt-2'>This is a realistic speed simulation for: {vehicles[vehicleIndex].vehicle}. So in case you see it stopped it is because it is going too slow for the distance it has to travel.</p>
                                            </div>
                                            <div className='w-full flex justify-between items-center mt-10'>
                                                <button onClick={findVehicleInScreen} className='bg-yellow-200 py-4 px-5 text-black font-bold' type='button'>Follow</button>
                                                <button onClick={closeInfo} className='bg-yellow-200 py-4 px-5 text-black font-bold' type='button'>Close</button>
                                            </div>
                                        </div>
                
            }

            {
                  <div ref={vehicleWrapper} className={`fixed bottom-0 right-0 mr-6 z-40 flex flex-col justify-center items-center`}>
                                        <button onClick={goUp}
                                                type='button' 
                                                className={`rounded-full bg-white p-2 ${(canUptade) ? "border-green-500" : "border-gray-400"} border-4 w-[6rem] h-[6rem]`}>

                                            <Image 
                                                src={require(`@/assets/${vehicles[vehicleIndex].img}`)}
                                                alt={vehicles[vehicleIndex].vehicle}
                                                className='w-full'
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
