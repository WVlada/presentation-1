import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import styles from "./paketcard.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Paket {
  paket: {
    image: string;
    title: string;
    perks: string[];
    pic: string;
    primary: boolean;
    style: string;
  };
}
export default function PaketCard({ paket }: Paket) {
  let stylesArr = {
    left: styles.cardLoadFromLeft + " mt-20",
    bottom: styles.cardLoadFromBottom + " mt-10",
    right: styles.cardLoadFromRight + " mt-20",
  };
  const [someClass, setSomeClass] = useState("");
  let classname = stylesArr[paket.style];
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //let classname = stylesArr[paket.style]
          setSomeClass(classname);
        } //else{
        //setSomeClass(" ")
        //}
      });
    });
    observer.observe(document.querySelector(".paketcard"));
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setSomeClass(" ");
        }
      });
    });
    observer.observe(document.querySelector(".paketgrid"));
  });
  return (
    <div
      className={
        "paketcard flex flex-col justify-center text-footertextcolor w-full self-start " +
        someClass
      }
    >
      <div className="bg-main mx-auto rounded text-center h-60 p-4 transition-transform md:w-48 shadow cursor-pointer drop-shadow-[0_10px_5px_rgba(0,0,0,0.35)] hover:scale-110">
        <p className="text-center text-maindark">{paket.title}</p>
        <div className="text-center mt-10">
          <Image
            className="inline"
            src={paket.image}
            width='80'
            height="80"
            alt="logo"
          />
        </div>
        <p className="text-center mt-10 text-white text-xs">
          aplikacija za računovodstvene agencije
        </p>
      </div>
      <div className="text-center h-14"></div>
      <div
        className={
          "flex flex-col bg-white rounded p-6 text-center min-h-[500px] w-full shadow relative transition-transform duration-300 hover:scale-105 " +
          styles.cardHover
        }
      >
        <div className="flex flex-row justify-center">
          {paket.primary && (
            <div className={"-mt-6 bg-[#55A2BE] h-8 w-24 " + styles.crown}>
              <FontAwesomeIcon color="white" icon={faCrown} />
            </div>
          )}
        </div>
        <div className="mb-10 mt-10">
          <p className="uppercase text-2xl font-bold"> {paket.title}</p>
        </div>
        <div className={"border-b w-full mb-10 " + styles.borderHover}></div>
        <div className="flex flex-col grow justify-center ">
          {paket.perks.map((perk) => {
            return (
              <div
                className={
                  "cursor-pointer relative z-50 self-center " +
                  styles.cardfadefromleft
                }
                key={perk}
              >
                <div className={"absolute top-0 let-0 z-0 "}></div>
                <p className="text-md p-2 z-20 relative">{perk}</p>
              </div>
            );
          })}
        </div>

        <div className={"border-b w-full mb-8 mt-8 "}></div>
        <div className={" justify-center "}>
          <button
            type="button"
            className="mb-5 text-sm transition-colors duration-700 hover:bg-white hover:text-tertiary text-center text-white hover:shadow bg-tertiary py-3 px-7 rounded-full"
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}
