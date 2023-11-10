import { Navbar } from '@/components/Navbar';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      
      <Navbar />
      <main className='overflow-x-hidden bg-gradient-to-b from-[#0F193B] via-[#1A2B65] to-blue-300 z-20'>
          
          <StarsBackground>

            {/* simulate the navbar height */}
            <div className='h-20'></div>

            <div className='flex flex-col justify-center items-center h-screen px-[10%]'>
                <div className='mb-10'>
                        <h1 className='text-white font-bold text-3xl'>Andres Bonilla</h1>
                        <TypingAnimation stringList={['Software Developer', 'Entrepreneur', 'Athlete']}/>
                </div>
                <div className='mt-[10rem]'>
                        <Image 
                            src={require("@/assets/yo-en-el-tesla.png")}
                            alt='Andres Bonilla in a tesla roadster'
                            width={350}
                            height={350}
                        />
                </div>
            </div>


            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>
            <div className='h-[30rem]'></div>

            
          </StarsBackground>
          
      </main>
    </>
  )
}
