import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Usluge from "../components/body/usluge.component";
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
      <main className="flex flex-col h-full min-h-screen bg-backlinear">
        <Header />
        <Body />
      </main>
      <Usluge />
      <Footer />
    </>
  );
}
