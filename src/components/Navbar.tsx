import Image from 'next/image';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

  return (
    <nav className='absolute top-0 left-0 w-full flex justify-between items-center py-10 px-[15%]'>
        <Image 
            src={require("@/assets/slogan.png")}
            alt='Andres Bonilla Logo'
            width={50}
            height={50}
        />

        <div>
            <FontAwesomeIcon 
               icon={faBars}
               className='text-white w-10 h-10' 
            />
        </div>
    </nav>
  )
}
