"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export const Navbar = ({lenguage}:any) => {

    const [asteroidsMenuOpen, setAsteroidsMenuOpen] = useState(false);
    const [showLenguageMenu, setshowLenguageMenu] = useState(false);
    const router = useRouter();

    const [texts, setTexts] = useState({
        svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
        LenguageName: "EN",
    });
    useEffect(() => {

        if (lenguage === "en") {
        setTexts({
            svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
            LenguageName: "EN",
        })
        }else if(lenguage === "es"){
        setTexts({
            svgUrl: "flag-for-spain-svgrepo-com.svg",
            LenguageName: "ES",
        })
        }else {
        setTexts({
            svgUrl: "flag-for-united-kingdom-svgrepo-com.svg",
            LenguageName: "EN",
        })
        }

    }, []);

    const openAsteroidsMenu = () => {
        setAsteroidsMenuOpen(true);
    }

    const closeAsteroidsMenu = () => {
        setAsteroidsMenuOpen(false);
    }

    const clickOnAsteroid = (link:string) => {
        setAsteroidsMenuOpen(false);
        router.push(link);
    }

    const openLenguagesMenu = () => {
        setshowLenguageMenu(true);
    }



  return (
    <>

        <nav className='z-[998] absolute top-0 left-0 w-full flex justify-between items-center py-10 px-[15%]'>

            <Image 
                src={require("@/assets/slogan.png")}
                alt='Andres Bonilla Logo'
                width={60}
                height={60}
            />

            <div className='flex items-center'>

                <button onClick={openLenguagesMenu} type='button' className='flex items-center bg-yellow-200 rounded-full p-1 mr-3 cursor-pointer'>
                    <Image 
                        src={require(`@/assets/${texts.svgUrl}`)}
                        alt='spain flag'
                        width={30}
                        height={30}
                    />
                    <p className='text-black font-bold mx-1'>{texts.LenguageName}</p>
                </button>

                <FontAwesomeIcon
                    onClick={openAsteroidsMenu} 
                    icon={faBars}
                    className='text-white w-10 h-10 cursor-pointer' 
                />
            </div>

        </nav>

        {/* change the lenguage part */}
        {
            showLenguageMenu && <div className='z-[999] fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center'>
                                    
                                    <div className='bg-white p-10'>

                                        <h2 className='font-bold text-xl mb-6'>Change Language</h2>

                                        <Link href={"/"} className='text-black flex items-center mb-6'>
                                            <Image 
                                                src={require("@/assets/flag-for-united-kingdom-svgrepo-com.svg")}
                                                alt='spain flag'
                                                width={40}
                                                height={40}
                                            />
                                            <p className='ml-2 text-xl'>English</p>
                                        </Link>

                                        <Link href={"/es"} className='text-black flex items-center mb-6'>
                                            <Image 
                                                src={require("@/assets/flag-for-spain-svgrepo-com.svg")}
                                                alt='spain flag'
                                                width={40}
                                                height={40}
                                            />
                                            <p className='ml-2 text-xl'>Español</p>
                                        </Link>
                                        
                                    </div>
                                    
                                </div>
        }

        {
            asteroidsMenuOpen && <div className='fixed w-full h-screen z-[999] bg-[#0F193B]'>
                                    <div className='stars'>
                                        <div className='flex justify-end items-center p-10'>
                                            <FontAwesomeIcon
                                                    onClick={closeAsteroidsMenu} 
                                                    icon={faXmark}
                                                    className='text-white w-12 h-12 cursor-pointer' 
                                            />
                                        </div>
                                        <div className='overflow-hidden'>

                                            <button onClick={()=>clickOnAsteroid("/#about")} className='w-[7rem] h-[7rem] flex justify-center items-center mb-8 asteroid' id='asteroid'>
                                                <p className='font-bold text-white text-2xl'>ABOUT</p>
                                            </button>

                                            <button onClick={()=>clickOnAsteroid("/#projects")} className='w-[10rem] h-[10rem] flex justify-center items-center mb-12 asteroid1' id='asteroid1'>
                                                <p className='font-bold text-white text-2xl'>PROJECTS</p>                         
                                            </button>

                                            <button onClick={()=>clickOnAsteroid("/#contact")} className='w-[8rem] h-[8rem] flex justify-center items-center mb-12 asteroid2' id='asteroid2'>
                                                <p className='font-bold text-white text-2xl'>CONTACT</p>
                                            </button>

                                        </div>
                                    </div>
                                 </div>
        }
        
    
    </>
  )
}
