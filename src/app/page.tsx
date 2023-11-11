import { Navbar } from '@/components/Navbar';
import { Project } from '@/components/Project';
import { Skills } from '@/components/Skills';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      
      <Navbar />
      <main className='overflow-x-hidden z-20'>
          
          <div className='gradient-background'>

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
                                className='floating'
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

                {/* my business */}
                <div className='w-full'>
                  
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>MY BUSINESS</h2>

                    <div className='w-full'>

                      <Image 
                        src={require("@/assets/simpliterms-planet.png")}
                        alt="simpliterm's planet"
                        className='w-full p-6 floating'
                      />
                      
                      <h3 className='font-bold text-2xl text-white mx-[13%] mt-6 leading-10'>Simpliterms</h3>

                      <p className='text-white text-left text-xl leading-10 mx-[13%] mb-8'>
                          Have you ever clicked on accept privacy policy and/or terms of use without reading them because 
                          they are too long and difficult to understand? Simpliterms is an extension that summarizes the policies 
                          with a single click so you don't have to blindly accept them again.
                      </p>

                      <div className='px-[13%]'>
                        <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]' href={"https://www.simpliterms.com/"} target='_blank'>View More</Link>
                      </div>

                    </div>                

                </div>

                {/* my skills */}
                <div className='px-[13%]'>
                    <h2 className='font-bold text-white text-center text-2xl mt-[12rem] mb-10'>SKILLS</h2>
                    <Skills />
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

          <div className='gradient-background-water'>

              {/* my projects */}
              <div className='pt-[4rem]'>
                    <Project name={"FileBox"} 
                            desc={"fileBox is an application created by me very similar to dropbox, google drive or similar, in which anyone can upload files, download them, create folders and many other functions."} 
                            link={"https://www.yourdreamcar.ca/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/YourDreamCar"} 
                            imgUrl={"filebox-interface.png"}
                            imgStack={"yourdreamcar-stack.png"}
                    />
                    <Project name={"Geekepedia"} 
                            desc={"Geekipedia is a blog where you can learn how some of the most famous algorithms in computer science work, such as BFS (Breath First Search), QuickSort, Binary Search and many more."} 
                            link={"https://fansive.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code"} 
                            imgUrl={"geekipedia-interface.png"}
                            imgStack={"fansive-stack.png"}
                    />
                    <Project name={"thePokedex"} 
                            desc={"thePokedex is an app with light and dark theme in which you can find and search information of all existing pokemon and you can use it on android and ios devices."} 
                            link={"https://super-virtual-board.netlify.app/"} 
                            github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Virtual-Board"} 
                            imgUrl={"pokedex-interface.png"}
                            imgStack={"pokedex-stack.png"}
                    />
                </div>

                <div className='h-[50rem]'></div>

          </div>
          
      </main>

      
    </>
  )
}
