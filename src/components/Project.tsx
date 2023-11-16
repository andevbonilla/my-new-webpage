import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Project = ({name, desc, link, github, imgUrl, imgStack}:any) => {
  return (
    <div className='mt-12 sm:mx-[15%] md:mx-[25%] lg:flex lg:items-center lg:w-full lg:mx-0'>
        <Image 
          src={require(`@/assets/${imgUrl}`)}
          alt={name + " image mockup"}
          className='mb-4 w-full lg:h-auto lg:w-[50%] xl:w-[55%]'
        />
        <div className='px-[10%] sm:px-0 md:px-0 mt-10 lg:px-0 lg:mt-0 lg:mx-10 xl:w-[45%]'>

            <h3 className='text-white font-bold text-2xl mb-4 leading-9'>{name}</h3>
            <p className='text-white text-lg mb-4 leading-8'>{desc}</p>

            <div className='flex'>
                <Image 
                    src={require(`@/assets/${imgStack}`)}
                    alt={name + " image mockup"}
                    className='mb-4 w-full lg:w-[18rem] md:w-[22rem] sm:w-[22rem]'
                />
            </div>

            <div className='flex justify-between items-center mt-10 lg:mt-5'>
                <Link target='_blank' className='text-white font-bold text-lg underline decoration-yellow-200 underline-offset-8 decoration-8' href={link}>View Project</Link>
                <Link title='Github repository Link' target='_blank' href={github}>
                    <FontAwesomeIcon icon={faGithub} className='w-10 h-10 text-white' />
                </Link>
            </div>
        </div>
    </div>
  )
}
