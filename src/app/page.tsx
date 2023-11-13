import { ContactForm } from '@/components/ContactForm';
import { CuriosFact } from '@/components/CuriosFact';
import { Navbar } from '@/components/Navbar';
import { Project } from '@/components/Project';
import { Skills } from '@/components/Skills';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Vehicle } from '@/components/Vehicle';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      
      <Navbar />
      <Vehicle />
      <main className='overflow-x-hidden z-20'>
          
          <div className='gradient-background'>

            <StarsBackground>

                {/* simulate the navbar height */}
                <div className='h-16'></div>

                {/* presentation section */}
                <div className='flex flex-col justify-center items-center h-screen px-[10%]'>
                    <div className='mb-10'>
                            <h1 className='text-white font-bold text-3xl'>Andres Bonilla</h1>
                            <TypingAnimation stringList={['Software Developer', 'Entrepreneur', 'Athlete']}/>
                    </div>
                    <div className='mt-[10rem] h-[10rem]'>
                            <Image 
                                src={require("@/assets/yo-en-el-tesla.png")}
                                alt='Andres Bonilla in a tesla roadster'
                                width={350}
                                height={350}
                                className='absolute floating left-0 ml-[5%]'
                            />
                    </div>
                </div>

                {/* about me */}
                <div className='px-[15%]'>
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>ABOUT ME</h2>
                    <p className='text-white text-left text-xl leading-10'>Hi there! 👋 How are you? My name is Andres Bonilla. I&apos;m a student, software developer, and entrepreneur. 
                      I love creating technological products. When I was 16, I founded my first company, Fansive. 
                      I&apos;m passionate about science, technology, cars, music, but above all, ice cream. 😄
                    </p>
                </div>

                <CuriosFact text={"At this point we are 400 kilometers above sea level. At this altitude is the International Space Station (ISS)."}/>
                <div className='flex'>
                  <Image 
                        src={require("@/assets/space-station-icon.png")}
                        alt="simpliterm's planet"
                        className='w-[30rem] h-[30rem] international-space-station'
                      />
                </div>


                {/* my business */}
                <div className='w-full'>
                  
                    <h2 className='font-bold text-white text-center text-2xl mb-10'>MY BUSINESS</h2>

                    <div className='w-full'>
                      <div className='h-[25rem] relative'>
                          <Image 
                            src={require("@/assets/simpliterms-planet.png")}
                            alt="simpliterm's planet"
                            className='absolute top-0 w-full p-6 floating'
                          />
                      </div>
                      
                      
                      <h3 className='font-bold text-2xl text-white mx-[13%] mt-6 leading-10'>Simpliterms</h3>

                      <p className='text-white text-left text-xl leading-10 mx-[13%] mb-8'>
                          Have you ever clicked on accept privacy policy and/or terms of use without reading them because 
                          they are too long and difficult to understand? Simpliterms is an extension that summarizes the policies 
                          with a single click so you don&apos;t have to blindly accept them again.
                      </p>

                      <div className='px-[13%]'>
                        <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]' href={"https://www.simpliterms.com/"} target='_blank'>View More</Link>
                      </div>

                    </div>                

                </div>

                {/* my skills */}
                <div className='px-[13%] mb-14'>
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>SKILLS</h2>
                    <Skills />
                </div>

                <CuriosFact text={"At this point we are at 1000 kilometers above sea level. At this altitude we can find the STARLINK satellites of Elon Musk which are usually between 340 km and 1200 km above sea level."}/>

                <div className='flex'>
                  <Image 
                        src={require("@/assets/starlink-icon.png")}
                        alt="simpliterm's planet"
                        className='w-[10rem] h-[10rem] starlink'
                      />
                </div>


                {/* my projects */}
                <div>
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>MY PROJECTS</h2>
                    <Project name={"YourDreamCar"} 
                            desc={"YourDreamCar is a web page that I designed for a company that I developed with my best friend David. Which offers wrapping services, window tinting and more. #YourDreamCar"} 
                            link={"https://www.yourdreamcar.ca/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/YourDreamCar"} 
                            imgUrl={"yourdreamcar-interface.png"}
                            imgStack={"yourdreamcar-stack.png"}
                    />
                    <Project name={"Simpliterms"} 
                            desc={"Fansive is a startup created by me which is a platform for exclusive content. This app has all the necessary tools for content creators to offer the best content to their subscribers, such as live streaming, stories, group chats, private chats, post, file storage and much more."} 
                            link={"https://fansive.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code"} 
                            imgUrl={"fansive-interface.png"}
                            imgStack={"fansive-stack.png"}
                    />
                    <Project name={"Virtual Board"} 
                            desc={"Virtual Board is a web application that simulates a classroom board, so you can draw, erase, create figures, drag and drop, rotate and many other things. This app use trigonometry and algebra to solve some of the functionalities in the virtual board."} 
                            link={"https://super-virtual-board.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Virtual-Board"} 
                            imgUrl={"virtualboard-interface.jpg"}
                            imgStack={"virtual-board-stack.png"}
                    />
                </div>

                <CuriosFact text={"At this point we are at an altitude of 30,000 meters, at this altitude most of today's commercial airplanes usually fly."}/>
                <div className='flex'>
                  <Image 
                        src={require("@/assets/vehicle8.png")}
                        alt="simpliterm's planet"
                        className='w-[14rem] h-[14rem] plane1'
                      />
                  <Image 
                        src={require("@/assets/vehicle7.png")}
                        alt="simpliterm's planet"
                        className='w-[8rem] h-[8rem] plane2'
                      />
                  <Image 
                        src={require("@/assets/airplane3-icon.png")}
                        alt="simpliterm's planet"
                        className='w-[10rem] h-[10rem] plane3'
                      />
                </div>
                
                
                <div className='h-[12rem]'></div>

                <div className='city scale-150'>
                      <Image 
                        src={require("@/assets/city.png")}
                        alt="singapur city"
                        className='w-full scale-150 -translate-x-6'
                      />
                </div>


              </StarsBackground>

          </div>

          <div className='gradient-background-water overflow-hidden'>

              {/* my projects */}
              <div className='pt-[10rem]'>
                    <Project name={"FileBox"} 
                            desc={"fileBox is an application created by me very similar to dropbox, google drive or similar, in which anyone can upload files, download them, create folders and many other functions."} 
                            link={"https://filebox.netlify.app/#/login"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/backend-fileBox"} 
                            imgUrl={"filebox-interface.png"}
                            imgStack={"filebox-stack.png"}
                    />
                    <Project name={"Geekepedia"} 
                            desc={"Geekipedia is a blog where you can learn how some of the most famous algorithms in computer science work, such as BFS (Breath First Search), QuickSort, Binary Search and many more."} 
                            link={"https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/Geekipedia/home/Geekipedia"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Geekipedia"} 
                            imgUrl={"geekipedia-interface.png"}
                            imgStack={"geekipedia-stack.png"}
                    />
                    <Project name={"thePokedex"} 
                            desc={"thePokedex is an app with light and dark theme in which you can find and search information of all existing pokemon and you can use it on android and ios devices."} 
                            link={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"} 
                            imgUrl={"pokedex-interface.png"}
                            imgStack={"pokedex-stack.png"}
                    />
                </div>

                <div className='px-[13%]'>
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>CONTACT ME</h2>
                    <ContactForm />
                </div>

                <CuriosFact text={"At this point we are at 3800 meters deep, at this depth is the remains of the Titanic and ends the content of my website."}/>

                <div className='titanic'>
                      <div className='flex justify-center items-center mb-24'>
                          <Link href={"https://www.instagram.com/__andrec__/"} target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className='text-white w-[2.5rem] h-[2.5rem] mr-10' />
                          </Link>
                          <Link href={"https://twitter.com/AndresB64566284"} target='_blank'>
                            <FontAwesomeIcon icon={faTwitter} className='text-white w-[2.5rem] h-[2.5rem] mr-10' />
                          </Link>
                          <Link href={"https://www.linkedin.com/in/andres-bonilla-685983189/"} target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-white w-[2.5rem] h-[2.5rem] mr-10' />
                          </Link>
                          <Link href={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A"} target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='text-white w-[2.5rem] h-[2.5rem]' />
                          </Link>
                      </div>
                      <Image 
                        src={require("@/assets/titanic.png")}
                        alt="singapur city"
                        className='w-full scale-150 -translate-x-6'
                      />
                </div>

          </div>
          
      </main>

      
    </>
  )
}
