import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Usluge from "../components/body/usluge.component";
import Carousel2 from "../components/carousel2";
export default function Home() {
  return (
    <>
      <Head>
        <title>Presentation app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col justify-center min-h-screen bg-backlinear w-full ">
        <Header />

        <Body />
      </main>
      <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] -ml-10 absolute -bottom-16  z-10"></div>
      <div className="w-full bg-mainlight">
        <Usluge />
      </div>

      <div className="flex flex-grow flex-col relative mb-48 ">
        <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] -ml-10 absolute -bottom-16  z-10"></div>
      </div>

      <div className="w-full bg-backlinear">
        <div className="flex flex-grow flex-col relative -mt-40 max-w-[1200px] w-full mx-auto ">
          <div className="mt-20 mb-20">
            <Carousel2 />
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
