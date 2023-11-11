import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Project = ({name, desc, link, github, imgUrl, imgStack}:any) => {
  return (
    <div className='mt-12'>
        <Image 
          src={require(`@/assets/${imgUrl}`)}
          alt={name + " image mockup"}
          className='mb-4 w-full'
        />
        <div className='px-[10%] mt-10'>

            <h3 className='text-white font-bold text-2xl mb-4 leading-9'>{name}</h3>
            <p className='text-white text-lg mb-4 leading-8'>{desc}</p>

            <div className='flex'>
                <Image 
                    src={require(`@/assets/${imgStack}`)}
                    alt={name + " image mockup"}
                    className='mb-4 w-full'
                />
            </div>

            <div className='flex justify-between items-center mt-10'>
                <Link target='_blank' className='text-white font-bold text-lg underline decoration-yellow-200 underline-offset-8 decoration-8' href={link}>View Project</Link>
                <Link target='_blank' href={github}>
                    <FontAwesomeIcon icon={faGithub} className='w-10 h-10 text-white' />
                </Link>
            </div>
        </div>
    </div>
  )
}
