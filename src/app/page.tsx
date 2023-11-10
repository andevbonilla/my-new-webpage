import { Navbar } from '@/components/Navbar';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      
      <Navbar />
      <main className='overflow-x-hidden bg-gradient-to-b from-[#0F193B] via-[#1A2B65] to-blue-300 z-20'>
          
          <StarsBackground>

            {/* simulate the navbar height */}
            <div className='h-20'></div>

            {/* presentation section */}
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

            {/* about me */}
            <div className='px-[15%]'>
                <h2 className='font-bold text-white text-center text-2xl my-20'>ABOUT ME</h2>
                <p className='text-white text-left text-xl leading-10'>Hi there! 👋 How are you? My name is Andres Bonilla. I&apos;m a student, software developer, and entrepreneur. 
                   I love creating technological products. When I was 16, I founded my first company, Fansive. 
                   I&apos;m passionate about science, technology, cars, music, but above all, ice cream. 😄
                </p>
            </div>

            {/* my business */}
            <div>
                <h2 className='font-bold text-white text-center text-2xl my-20'>MY BUSINESS</h2>

                <div>

                  <Image 
                    src={require("@/assets/hologram.png")}
                    alt='Hologram of simpliterms'
                    className='w-full'
                  />
                  
                  <h3 className='font-bold text-2xl text-white mx-[10%] mt-5 leading-10'>Simpliterms</h3>

                  <p className='text-white text-left text-xl leading-10 mx-[10%] mb-8'>
                      Have you ever clicked on accept privacy policy and/or terms of use without reading them because 
                      they are too long and difficult to understand? Simpliterms is an extension that summarizes the policies 
                      with a single click so you don't have to blindly accept them again.
                  </p>

                  <Link className='mx-[10%] bg-yellow-200 py-3 px-4' href={"https://www.simpliterms.com/"} target='_blank'>View More</Link>

                </div>                

            </div>

            {/* my skills */}
            {/* <div className='px-[10%]'>
                <h2 className='font-bold text-white text-center text-2xl my-20'>ABOUT ME</h2>
                
            </div> */}

            {/* my projects */}
            {/* <div className='px-[10%]'>
                <h2 className='font-bold text-white text-center text-2xl my-20'>ABOUT ME</h2>
                
            </div> */}

            {/* my contact */}
            {/* <div className='px-[10%]'>
                <h2 className='font-bold text-white text-center text-2xl'>ABOUT ME</h2>
                
            </div> */}


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
