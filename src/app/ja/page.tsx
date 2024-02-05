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

      <Navbar lenguage={"ja"} />
      <Vehicle lenguage={"ja"} />
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
                  <TypingAnimation stringList={['ソフトウェア開発者', '起業家', 'アスリート']}
                    wrapper="h2" />
                </div>

              </div>
              <div className='md:w-[50%] relative w-full h-[20rem] mt-[5rem] md:mb-[6rem] lg:mb-[12rem]'>
                <Image
                  src={require("@/assets/yo-en-el-tesla.png")}
                  alt='Andres Bonilla in a tesla roadster'
                  width={350}
                  height={350}
                  className='absolute w-full floating'
                />
              </div>
            </div>

            {/* about me */}
            <div className='px-[15%]'>
              <div className='flex w-full justify-center items-center' id='about'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>私について</h2>
              </div>
              <p className='text-white text-left text-xl leading-10'>こんにちは！👋 はじめまして、アンドレス・ボニーリャです。学生、ソフトウェア開発者、起業家です。16歳のときにFansiveという最初の会社を立ち上げて以来、技術プロジェクトを作るのが大好きです。科学、テクノロジー、スポーツ、車、音楽、そして何よりもアイスクリームが好きです！😄
              </p>
            </div>

            <CuriosFact text={"私たちは海抜384,400kmにいる。この高度で、月は地球の周りを回っている。少し待てば見えるだろう。"} />
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
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] lg:mb-12'>マイ・ビジネス</h2>
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
                    プライバシーポリシーや利用規約が長くてわかりにくいので、読まずにクリックしたことはありませんか？Simplitermsは、ワンクリックでポリシーを要約してくれるGoogleの拡張機能です。
                  </p>

                  <div className='px-[13%] lg:px-0'>
                    <Link className='w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B] hover:bg-yellow-300 transition-all' href={"https://www.simpliterms.com/"} target='_blank'>もっと見る</Link>
                  </div>

                </div>

              </div>

            </div>

            {/* my skills */}
            <div className='lg:px-[30%] px-[13%] mb-14'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-12'>スキル</h2>
              </div>
              <Skills />
            </div>

            <CuriosFact text={"現在、私たちは海抜400キロにいる。この高度に国際宇宙ステーション（ISS）がある。"} />
            <div id="part3" className='flex'>
              <Image
                src={require("@/assets/space-station-icon.png")}
                alt="国際宇宙ステーション"
                className='international-space-station'
                id='international-space-station'
              />
            </div>


            {/* my projects */}
            <div id='projects'>
              <div className='flex w-full justify-center items-center'>
                <h2 className='border-b-[.5rem] pl-[1.6rem] pr-[.8rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>マイ・プロジェクト</h2>
              </div>

              <Project name={"YourDreamCar"}
                desc={"YourDreamCarは、私が親友のデビッドと一緒に開発している会社のためにデザインしたウェブサイトです。カーラップサービスやウィンドウティントなど、様々なサービスを提供しています。#ユアドリームカー"}
                link={"https://www.yourdreamcar.ca/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/YourDreamCar"}
                imgUrl={"yourdreamcar-interface.png"}
                buttonText={"プロジェクトを見る"}
                iconList={[<Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <TailwindSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NextJsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Fansive"}
                desc={"Fansiveは私が作ったスタートアップで、独占コンテンツのプラットフォームだ。このアプリには、ライブストリーム、ストーリー、グループチャット、プライベートチャット、パブリッシング、ファイルストレージなど、コンテンツクリエイターが最高のコンテンツを購読者に提供するために必要なツールがすべて揃っている。"}
                link={"https://fansive.netlify.app/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code"}
                imgUrl={"fansive-interface.png"}
                buttonText={"プロジェクトを見る"}
                iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <WebRTCSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <SocketIOSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
              <Project name={"Virtual Board"}
                desc={"Virtual Boardは、教室の黒板をシミュレートし、描画、消去、図形の作成、ドラッグ＆ドロップ、回転、その他多くの機能を可能にする、ライブラリを使用せずに作成されたWebアプリケーションです。このアプリケーションは、バーチャルボード上の機能の一部を解くために三角法と代数を使用します。"}
                link={"https://super-virtual-board.netlify.app/"}
                github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Virtual-Board"}
                imgUrl={"virtualboard-interface.jpg"}
                buttonText={"プロジェクトを見る"}
                iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
                <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
                ]}
              />
            </div>

            <CuriosFact text={"現在、私たちは高度30,000メートルにおり、これは現在ほとんどの民間旅客機が飛行している高度である。"} />
            <div id="part2" className='flex'>
              <Image
                src={require("@/assets/vehicle7.png")}
                alt="boeing 737"
                className='w-[17rem] h-[6rem] lg:w-[25rem] lg:h-[10rem] plane1'
              />
              <Image
                src={require("@/assets/vehicle8.png")}
                alt="軍用機"
                className='w-[12rem] h-[6rem] lg:w-[15rem] lg:h-[8rem] plane2'
              />
              <Image
                src={require("@/assets/airplane3-icon.png")}
                alt="プライベートジェット"
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
              alt="黄色い魚の群れ"
              className='w-[10rem] h-[10rem] fish-group'
            />
          </div>

          {/* my projects */}
          <div>
            <CuriosFact text={"この水深では、サーモンやリーフフィッシュなどの魚を見ることができる。"} />
            <div className='flex'>
              <Image
                src={require("@/assets/fish-group-1-icon.png")}
                alt="黄色い魚の群れ"
                className='w-[6rem] h-[6rem] fish-group delay-300'
              />
              <Image
                src={require("@/assets/fish-group-2-icon.png")}
                alt="サーモン・フィッシュ・スイミング"
                className='w-[8rem] h-[8rem] fish-group-2'
              />
              <Image
                src={require("@/assets/fish-group-3-icon.png")}
                alt="サメ遊泳"
                className='w-[30rem] h-[10rem] fish-group-3'
              />
            </div>
            <Project name={"FileBox"}
              desc={"fileBoxは私が作ったアプリケーションで、DropboxやGoogle Driveなどによく似ており、誰でもファイルをアップロードしたり、ダウンロードしたり、フォルダを作成したり、その他多くの機能を実行することができる。"}
              link={"https://filebox.netlify.app/#/login"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/backend-fileBox"}
              imgUrl={"filebox-interface.png"}
              buttonText={"プロジェクトを見る"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <MongoDBSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <AwsSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <NodejsSVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"Geekepedia"}
              desc={"Geekipediaは、BFS(Breadth Search)、QuickSort、Binary Searchなど、コンピュータサイエンスで最も有名なアルゴリズムの仕組みを学べるブログです。"}
              link={"https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/Geekipedia/home/Geekipedia"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Geekipedia"}
              imgUrl={"geekipedia-interface.png"}
              buttonText={"プロジェクトを見る"}
              iconList={[<AngularSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Html5SVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              <Css3SVG className={"w-[3rem] mr-3"} key={Math.random()} />
              ]}
            />
            <Project name={"thePokedex"}
              desc={"thePokedexは光と闇をテーマにしたアプリで、現存する全てのポケモンの情報を検索することができます。また、AndroidとiOSデバイスに対応しています。"}
              link={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"}
              github={"https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex"}
              imgUrl={"pokedex-interface.png"}
              buttonText={"プロジェクトを見る"}
              iconList={[<ReactSVG className={"w-[3rem] mr-3"} key={Math.random()} />,
              ]}
            />
            <div className='flex h-[18rem]'>
              <Image
                src={require("@/assets/tentaculos.gif")}
                alt="kraken tentaculus"
                className='w-[30rem] h-[30rem] rotate-[75deg] -translate-x-20'
              />
            </div>
          </div>

          <div className='px-[13%]'>
            <div className='flex w-full justify-center items-center' id='contact'>
              <h2 className='border-b-[.5rem] pl-[1rem] pr-[.2rem] pb-2 border-yellow-200 tracking-[.8rem] md:text-3xl font-bold text-white text-lg um:text-xl mt-[12rem] mb-10'>コンタクト</h2>
            </div>
            <ContactForm lenguage={"ja"} />
          </div>

          <CuriosFact text={"現在、私たちはタイタニック号の沈没船のある水深3,800メートルにおり、私のウェブサイトの最後にある。"} />

          <Footer titanicAlt={"タイタニック・イン・ザ・ディープ・オブ・ザ・シー"} />

        </div>

      </main>


    </>
  )
}
