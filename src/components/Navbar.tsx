"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {

    const [asteroidsMenuOpen, setAsteroidsMenuOpen] = useState(false);
    const router = useRouter();

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

  return (
    <>

        <nav className='absolute top-0 left-0 w-full flex justify-between items-center py-10 px-[15%]'>

            <Image 
                src={require("@/assets/slogan.png")}
                alt='Andres Bonilla Logo'
                width={50}
                height={50}
            />

            <div>
                <FontAwesomeIcon
                onClick={openAsteroidsMenu} 
                icon={faBars}
                className='text-white w-10 h-10' 
                />
            </div>

            
        </nav>

        {
            asteroidsMenuOpen && <div className='fixed w-full h-screen z-50 bg-[#0F193B]'>
                                    <div className='stars'>
                                        <div className='flex justify-end items-center p-10 mb-12'>
                                            <FontAwesomeIcon
                                                    onClick={closeAsteroidsMenu} 
                                                    icon={faXmark}
                                                    className='text-white w-12 h-12' 
                                            />
                                        </div>
                                        <div className='overflow-hidden h-screen'>

                                            <div onClick={()=>clickOnAsteroid("/#about")} className='w-[7rem] h-[7rem] flex justify-center items-center mb-8' id='asteroid'>
                                                <p className='font-bold text-white text-2xl'>ABOUT</p>
                                            </div>

                                            <div onClick={()=>clickOnAsteroid("/#projects")} className='w-[10rem] h-[10rem] flex justify-center items-center mb-12' id='asteroid1'>
                                                <p className='font-bold text-white text-2xl'>PROJECTS</p>                         
                                            </div>

                                            <div onClick={()=>clickOnAsteroid("/#contact")} className='w-[8rem] h-[8rem] flex justify-center items-center mb-12' id='asteroid2'>
                                                <p className='font-bold text-white text-2xl'>CONTACT</p>
                                            </div>

                                        </div>
                                    </div>
                                 </div>
        }
        
    
    </>
  )
}
