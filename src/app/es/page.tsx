import { City } from '@/components/City';
import { ContactForm } from '@/components/ContactForm';
import { CuriosFact } from '@/components/CuriosFact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PicturesInBalloons } from '@/components/Pictures';
import { Project } from '@/components/Project';
import { Skills } from '@/components/Skills';
import { StarsBackground } from '@/components/Stars';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Vehicle } from '@/components/Vehicle';
import { AngularSVG, AwsSVG, Css3SVG, Html5SVG, MongoDBSVG, NextJsSVG, NodejsSVG, ReactSVG, SocketIOSVG, TailwindSVG, WebRTCSVG } from '@/utils/IconsSvgs';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeES() {
  return (
    <>

      <Navbar lenguage={"es"} />
      <Vehicle lenguage={"es"} />
      <main className='overflow-x-hidden z-20 relative'>
        <PicturesInBalloons />
        <div className='gradient-background relative'>

          <StarsBackground>

            {/* simulate the navbar height */}
            <div id="part4" className='h-16'></div>

            {/* presentation section */}
            <div className='md:px-[15%] lg:px-[20%] flex flex-col md:flex-row justify-center items-center h-screen px-[10%]'>
              <div className='mb-10 md:w-[50%]'>
                <h1 className='text-white font-bold text-[1.6rem] um:text-[2.2rem] xl:text-[3rem]'>Andres Bonilla</h1>
                <div className='flex text-white'>
                  <TypingAnimation stringList={['Desarrollador de software', 'Emprendedor', 'Deportista']}
                    wrapper="h2" />
                </div>

              </div>
              <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                <Image
                  src={require("@/assets/yo-en-el-tesla.webp")}
                  alt='Andres Bonilla en un tesla roadster'
                  width={350}
                  height={350}
                  className='absolute w-full floating'
                />
              </div>
            </div>

            {/* about me */}
            <div className='px-[15%]'>
              <div className='flex w-full justify-center items-center' id='about'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>SOBRE MI</h2>
              </div>
              <p className='text-white text-left text-xl leading-10'>¡Hola! 👋 ¿Cómo estás? Mi nombre es Andrés Bonilla. Soy estudiante, desarrollador de software y emprendedor. Me encanta crear proyectos tecnológicos; lo hago desde los 16 años, cuando comencé con mi primera compañía tecnológica llamada Fansive. Disfruto de todo lo relacionado con la ciencia, la tecnología, el deporte, los autos, la música, pero sobre todo, ¡el helado! 😄
              </p>
            </div>

            <CuriosFact text={"Estamos a 384,400 km sobre el nivel del mar; a esta altitud, la luna está orbitando la Tierra. Espera un poco y seguramente la verás."} />
            <div className='lg:h-[15rem] flex relative h-[8rem]'>
              <Image
                src={require("@/assets/moon-icon.png")}
                alt="moon picture"
                className='absolute moon'
              />
            </div>


            {/* my business */}
            <div className='w-full'>

              <div className='flex w-full justify-center items-center' id="business-part">
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] lg:mb-12'>MIS NEGOCIOS</h2>
              </div>

              <div className='w-auto lg:flex lg:justify-between lg:items-center lg:mx-[16%]'>

                <div className='lg:w-[40%] lg:mx-0 md:mx-[25%] flex items-center justify-center h-[28rem] relative w-auto mx-[13%]'>
                  <Image
                    src={require("@/assets/simpliterms-planet.png")}
                    alt="simpliterm's planet"
                    className='absolute w-auto floating'
                  />
                </div>

                <div className='lg:w-[60%] lg:ml-12'>

                  <h3 className='font-bold text-2xl text-white mx-[13%] lg:mx-0 mb-[2rem]'>Simpliterms</h3>

                  <p className='text-white text-left text-xl leading-10 mx-[13%] lg:mx-0 mb-8'>
                    ¿Alguna vez has hecho clic en Aceptar política de privacidad y/o Términos de uso sin leerlos porque son demasiado extensos y difíciles de entender? Simpliterms es una extensión de google que resume las políticas con un solo clic para que no tengas que aceptarlas a ciegas nuevamente.
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>Ver Mas</Link>
                  </div>

                </div>

              </div>

            </div>

            {/* my skills */}
            <div className='lg:px-[30%] px-[13%] mb-14'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>HABILIDADES</h2>
              </div>
              <Skills />
            </div>

            <CuriosFact text={"En este momento, estamos a 400 kilómetros sobre el nivel del mar. A esta altitud se encuentra la Estación Espacial Internacional (EEI)."} />
            <div id="part3" className='flex'>
              <Image
                src={require("@/assets/space-station-icon.png")}
                alt="Estacion Espaacial internacional"
                className='international-space-station'
                id='international-space-station'
              />
            </div>


            {/* my projects */}
            <div id='projects'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>MIS PROYECTOS</h2>
              </div>

              <Project name={"YourDreamCar"}
                desc={"YourDreamCar es una página web que diseñé para una empresa que estoy desarrollando con mi mejor amigo David. Ofrecemos servicios de vinilado, polarizacion de ventanas y muchos más. #YourDreamCar"}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/andevbonilla/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.png"}
                buttonText={"Ver Proyecto"}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Fansive"}
                desc={"Fansive es una startup creada por mí, La cual es una plataforma para contenido exclusivo. Esta aplicación cuenta con todas las herramientas necesarias para que los creadores de contenido ofrezcan el mejor contenido a sus suscriptores, como transmisiones en vivo, historias, chats grupales, chats privados, publicaciones, almacenamiento de archivos y mucho más."}
                link={"https://fansive.netlify.app/"}
                github={"https://github.com/andevbonilla/fansive-code"}
                imgUrl={"fansive-interface.png"}
                buttonText={"Ver Proyecto"}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Virtual Board"}
                desc={"Virtual Board es una aplicación web creada sin utilizar bibliotecas que simula un pizarrón de aula, lo que te permite dibujar, borrar, crear figuras, arrastrar y soltar, rotar y muchas otras funciones. Esta aplicación utiliza trigonometría y álgebra para resolver algunas de las funcionalidades en el pizarrón virtual."}
                link={"https://super-virtual-board.netlify.app/"}
                github={"https://github.com/andevbonilla/Virtual-Board"}
                imgUrl={"virtualboard-interface.jpg"}
                buttonText={"Ver Proyecto"}
                iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </div>

            <CuriosFact text={"En este momento nos encontramos a una altitud de 30,000 metros, altura a la que la mayoría de los aviones comerciales suelen volar hoy en día."} />
            <div id="part2" className='flex'>
              <Image
                src={require("@/assets/vehicle7.png")}
                alt="boeing 737"
                className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
              />
              <Image
                src={require("@/assets/vehicle8.png")}
                alt="avion militar"
                className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
              />
              <Image
                src={require("@/assets/airplane3-icon.png")}
                alt="avion privado"
                className='w-[7rem] h-[7rem] lg:w-[15rem] lg:h-[10rem] plane3'
              />
            </div>


            <div className='h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[60rem] 2xl:h-[80rem] 3xl:h-[100rem]'></div>


          </StarsBackground>

          <City />
        </div>


        <div className='sea overflow-hidden'>

          <div className='flex h-[10rem]'>
            <Image
              src={require("@/assets/fish-group-1-icon.png")}
              alt="grupo de peces amarillos"
              className='w-[10rem] h-[10rem] fish-group'
            />
          </div>

          {/* my projects */}
          <div>
            <CuriosFact text={"Nos encontramos en aguas poco profundas, a esta profundidad se pueden encontrar peces como el salmón, peces de arrecife y otros más."} />
            <div className='flex'>
              <Image
                src={require("@/assets/fish-group-1-icon.png")}
                alt="grupo de peces amarillos"
                className='w-[6rem] h-[6rem] fish-group delay-300'
              />
              <Image
                src={require("@/assets/fish-group-2-icon.png")}
                alt="pez salmon nadando"
                className='w-[8rem] h-[8rem] fish-group-2'
              />
              <Image
                src={require("@/assets/fish-group-3-icon.png")}
                alt="tiburon nadando"
                className='w-[30rem] h-[10rem] fish-group-3'
              />
            </div>
            <Project name={"FileBox"}
              desc={"fileBox es una aplicación creada por mí, muy similar a Dropbox, Google Drive u otras similares, en la cual cualquiera puede cargar archivos, descargarlos, crear carpetas y realizar muchas otras funciones."}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/andevbonilla/backend-fileBox"}
              imgUrl={"filebox-interface.png"}
              buttonText={"Ver Proyecto"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"Geekepedia"}
              desc={"Geekipedia es un blog donde puedes aprender cómo funcionan algunos de los algoritmos más famosos en ciencias de la computación, como BFS (Búsqueda en Anchura), QuickSort, Búsqueda Binaria y muchos más."}
              link={"https://andevbonilla.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/andevbonilla/Geekipedia"}
              imgUrl={"geekipedia-interface.png"}
              buttonText={"Ver Proyecto"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"thePokedex"}
              desc={"thePokedex es una aplicación con temas claro y oscuro en la que puedes encontrar y buscar información sobre todos los Pokémon existentes. Además, es compatible con dispositivos Android e iOS."}
              link={"https://github.com/andevbonilla/thePokedex"}
              github={"https://github.com/andevbonilla/thePokedex"}
              imgUrl={"pokedex-interface.png"}
              buttonText={"Ver Proyecto"}
              iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              ]}
            />
            <div className='flex h-[18rem]'>
              <Image
                src={require("@/assets/tentaculos.gif")}
                alt="Tentaculos del kraken"
                className='w-[30rem] h-[30rem] rotate-[75deg] -translate-x-20'
              />
            </div>
          </div>

          <div className='px-[13%]'>
            <div className='flex w-full justify-center items-center' id='contact'>
              <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>CONTACTO</h2>
            </div>
            <ContactForm lenguage={"es"} />
          </div>

          <CuriosFact text={"En este momento nos encontramos a 3.800 metros de profundidad, donde se encuentran los restos del Titanic y en el final de mi sitio web."} />

          <Footer titanicAlt={"titanic en las profundidades del mar"} />

        </div>

      </main>


    </>
  )
}
