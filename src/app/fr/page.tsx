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

      <Navbar lenguage={"fr"} />
      <Vehicle lenguage={"fr"} />
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
                  <TypingAnimation stringList={['Développeur de logiciels', 'Entrepreneur', 'Athlète']}
                    wrapper="h2" />
                </div>

              </div>
              <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                <Image
                  src={require("@/assets/yo-en-el-tesla.png")}
                  alt='Andres Bonilla dans un roadster Tesla'
                  width={350}
                  height={350}
                  className='absolute w-full floating'
                />
              </div>
            </div>

            {/* about me */}
            <div className='px-[15%]'>
              <div className='flex w-full justify-center items-center' id='about'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>À PROPOS DE MOI</h2>
              </div>
              <p className='text-white text-left text-xl leading-10'>Bonjour 👋 Comment vas-tu ? Je m&apos;appelle Andrés Bonilla. Je suis étudiant, développeur de logiciels et entrepreneur. J&apos;adore créer des projets technologiques ; je le fais depuis l&apos;âge de 16 ans, lorsque j&apos;ai créé ma première entreprise technologique appelée Fansive. J&apos;aime tout ce qui touche à la science, à la technologie, au sport, aux voitures, à la musique, mais surtout à la crème glacée ! 😄
              </p>
            </div>

            <CuriosFact text={"Nous sommes à 384 400 km d'altitude ; à cette altitude, la lune est en orbite autour de la Terre. Attendez un peu et vous la verrez probablement."} />
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
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] lg:mb-12'>MON ENTREPRISE</h2>
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
                    Avez-vous déjà cliqué sur Accepter la politique de confidentialité et/ou les conditions d&apos;utilisation sans les lire parce qu&apos;elles étaient trop longues et difficiles à comprendre ? Simpliterms est une extension Google qui résume les politiques en un seul clic afin que vous n&apos;ayez plus à les accepter à l&apos;aveuglette.
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>Voir plus</Link>
                  </div>

                </div>

              </div>

            </div>

            {/* my skills */}
            <div className='lg:px-[30%] px-[13%] mb-14'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>COMPÉTENCES</h2>
              </div>
              <Skills />
            </div>

            <CuriosFact text={"Nous nous trouvons actuellement à 400 kilomètres au-dessus du niveau de la mer. C'est à cette altitude que se trouve la Station spatiale internationale (SSI)."} />
            <div id="part3" className='flex'>
              <Image
                src={require("@/assets/space-station-icon.png")}
                alt="Station spatiale internationale"
                className='international-space-station'
                id='international-space-station'
              />
            </div>


            {/* my projects */}
            <div id='projects'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>MES PROJETS</h2>
              </div>

              <Project name={"YourDreamCar"}
                desc={"YourDreamCar est un site web que j'ai conçu pour une entreprise que je développe avec mon meilleur ami David. Nous offrons des services d'habillage de voiture, de vitres teintées et bien d'autres choses encore. #YourDreamCar"}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.png"}
                buttonText={"Voir le projet"}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Fansive"}
                desc={"Fansive est une startup que j'ai créée et qui est une plateforme de contenu exclusif. Cette application dispose de tous les outils nécessaires aux créateurs de contenu pour offrir le meilleur contenu à leurs abonnés, tels que les flux en direct, les histoires, les chats de groupe, les chats privés, la publication, le stockage de fichiers et bien plus encore."}
                link={"https://fansive.netlify.app/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code"}
                imgUrl={"fansive-interface.png"}
                buttonText={"Voir le projet"}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Virtual Board"}
                desc={"Virtual Board est une application web créée sans l'utilisation de bibliothèques qui simule un tableau noir de salle de classe, vous permettant de dessiner, d'effacer, de créer des formes, de glisser-déposer, de faire pivoter et bien d'autres fonctions. Cette application utilise la trigonométrie et l'algèbre pour résoudre certaines des fonctionnalités du tableau virtuel."}
                link={"https://super-virtual-board.netlify.app/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Virtual-Board"}
                imgUrl={"virtualboard-interface.jpg"}
                buttonText={"Voir le projet"}
                iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </div>

            <CuriosFact text={"Nous nous trouvons actuellement à une altitude de 30 000 mètres, altitude à laquelle la plupart des avions de ligne volent aujourd'hui."} />
            <div id="part2" className='flex'>
              <Image
                src={require("@/assets/vehicle7.png")}
                alt="boeing 737"
                className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
              />
              <Image
                src={require("@/assets/vehicle8.png")}
                alt="avion militaire"
                className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
              />
              <Image
                src={require("@/assets/airplane3-icon.png")}
                alt="jet privé"
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
              alt="poissons jaunes en groupe"
              className='w-[10rem] h-[10rem] fish-group'
            />
          </div>

          {/* my projects */}
          <div>
            <CuriosFact text={"Nous sommes dans des eaux peu profondes, à cette profondeur vous pouvez trouver des poissons tels que le saumon, les poissons de récif et plus encore."} />
            <div className='flex'>
              <Image
                src={require("@/assets/fish-group-1-icon.png")}
                alt="poissons jaunes en groupe"
                className='w-[6rem] h-[6rem] fish-group delay-300'
              />
              <Image
                src={require("@/assets/fish-group-2-icon.png")}
                alt="poisson saumon nageant"
                className='w-[8rem] h-[8rem] fish-group-2'
              />
              <Image
                src={require("@/assets/fish-group-3-icon.png")}
                alt="requin nageant"
                className='w-[30rem] h-[10rem] fish-group-3'
              />
            </div>
            <Project name={"FileBox"}
              desc={"FileBox est une application que j'ai créée, très similaire à Dropbox, Google Drive ou d'autres applications similaires, dans laquelle n'importe qui peut charger des fichiers, les télécharger, créer des dossiers et exécuter de nombreuses autres fonctions."}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/backend-fileBox"}
              imgUrl={"filebox-interface.png"}
              buttonText={"Voir le projet"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"Geekepedia"}
              desc={"Geekipedia est un blog où vous pouvez apprendre comment fonctionnent certains des algorithmes les plus célèbres en informatique, tels que BFS (Breadth Search), QuickSort, Binary Search et bien d'autres."}
              link={"https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Geekipedia"}
              imgUrl={"geekipedia-interface.png"}
              buttonText={"Voir le projet"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"thePokedex"}
              desc={"thePokedex est une application à thème clair et sombre où vous pouvez trouver et rechercher des informations sur tous les Pokémon existants. Elle est également compatible avec les appareils Android et iOS."}
              link={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"}
              imgUrl={"pokedex-interface.png"}
              buttonText={"Voir le projet"}
              iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              ]}
            />
            <div className='flex h-[18rem]'>
              <Image
                src={require("@/assets/tentaculos.gif")}
                alt="Tentacule de Kraken"
                className='w-[30rem] h-[30rem] rotate-[75deg] -translate-x-20'
              />
            </div>
          </div>

          <div className='px-[13%]'>
            <div className='flex w-full justify-center items-center' id='contact'>
              <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>COTACT</h2>
            </div>
            <ContactForm lenguage={"fr"} />
          </div>

          <CuriosFact text={"Nous nous trouvons actuellement à une profondeur de 3 800 mètres, là où se trouve l'épave du Titanic et à la fin de mon site web."} />

          <Footer titanicAlt={"titanic dans les profondeurs de la mer"} />

        </div>

      </main>


    </>
  )
}
