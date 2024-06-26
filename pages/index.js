import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Usluge from "../components/body/usluge.component";
import Carousel2 from "../components/carousel2";
import VrstePaketa from "../components/VrstePaketa";
import Klijenti from "../components/klijenti";
import Pitanja from "../components/pitanja";
import Kontakt from "../components/kontakt";
export default function Home() {
  return (
    <>
      <Head>
        <title>Office soft - obračun kamate</title>
        <meta name="description" content="Office soft, obracun kamate i revalorizacija u dinarima i devizama." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="obracun, obracun kamate, offis soft, office-soft, office soft rs" />
        <meta name="theme-color" content="#445865" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full ">
        <Header />
        
        <div className=" w-full bg-backlinear">
          <Body />
        </div>

        <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10 -mt-14 -mb-14 z-10"></div>
        <div className="w-full bg-mainlight">
          <Usluge />
        </div>

        {/*<div className="flex flex-grow flex-col relative mb-48 ">
        <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10 absolute -bottom-16  z-10"></div>
  </div>*/}
        <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10 -mt-28 -bottom-16  z-10"></div>

        <div className="w-full bg-backlinear sm:mb-20 -mt-12">
          <div className="flex flex-grow flex-col relative  max-w-[1200px] w-full mx-auto ">
            <div className="mt-20 mb-48 sm:mb-20 h-screen flex flex-col justify-center">
              <Carousel2 />
            </div>
          </div>
        </div>
        <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10 -mt-32 -bottom-16  z-4"></div>

        <div className="flex flex-grow flex-col relative bg-mainlight w-full justify-center items-center -mt-14 ">
          <VrstePaketa />
        </div>
        {/*<div className="flex flex-grow flex-col relative bg-mainlight h-24 "></div>*/}
        <div className="bg-mainlight h-40 md:h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10   z-10 md:-mt-36 -mt-12 "></div>

        <div className="flex w-full h-screen flex-grow flex-col relative -mt-20 justify-center items-center">
          <Klijenti />
        </div>

        <div className="bg-mainlight h-36 md:h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10   z-10 -mt-24 "></div>

        <div className="flex flex-grow w-full flex-col relative bg-mainlight ">
          <Pitanja />
        </div>
        <div className="bg-mainlight h-28 md:h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10   z-10 -mt-24 md:-mt-32 "></div>

        <div className="flex flex-grow flex-col relative w-full -mt-14 md:-mb-10  ">
          <Kontakt />
        </div>
        <div className="bg-mainlight h-28 md:h-60 w-[160%] -rotate-[4deg] 2xl:-rotate-[2deg] -ml-10 z-10 md:-mt-2 "></div>

        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
