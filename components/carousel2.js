import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { isTemplateSpan } from "typescript";
import { type } from "os";
import styles from "./carousel2.module.css";
export default function Carousel2() {
  let item = {
    images: [
      "/images/laptoppng11.png",
      "/images/laptoppng22.png",
      "/images/laptoppng33.png",
      "/images/laptoppng44.png",
    ],
    texts: [
      {
        text2: "Obračun svih vrsta neophodnih u privredi",
        header: "Obračun dugovanja i potraživanja",
        header2: "Obračun",
        text: "Obračun zakonskih zateznih kamata na iznose u domaćoj i stranoj valuti, kao i revalorizacija i eskont dinarskih i deviznih, prema Zakonskim propisima, uz mogućnost odabira metode obračuna, perioda obračuna, načina pripisa glavnice i redosleda namirenja.",
      },
      {
        text2: "Odabir podešavanja štampe",
        header: "Prikaz i štampa",
        header2: "Štampa",
        text: "Podešavanje prikaza kolona obračuna, štampa u prilagođenom PDF formatu i snimanje u PDF fajl.",
      },
      {
        text2: "Snimanje obračuna u arhivu",
        header: "Jednostavno snimanje obračuna i jednostavna pretraga",
        header2: "Arhiva",
        text: "Obračuni se snimaju u neograničenom obimu, prema poveriocu, dužniku ili iznosu, i lako pretražuju prema istim kriterijumima.",
      },
      {
        text2: "24/h podrška i kontakt",
        header: "Podrška i kontakt",
        header2: "Kontakt",
        text: "Kontakt i pružanje pomoći i podrđke je omogućeno unutar aplikacije, kao i preko e-maila i telefona",
      },
    ],
  };
  const [currentPic, setCurrentPic] = useState(0);
  const [currentPic2, setCurrentPic2] = useState(0);

  const [arrayOfTimers, setArrayOfTimers] = useState([]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPic >= item.images.length - 1) {
        setCurrentPic(0);
        setCurrentClass2(styles.animate_out);
        setCurrentClass3(styles.animate_out);
        setCurrentClass4(styles.animate_out);
        setTimeout(() => {
          setCurrentPic2(0);
          setCurrentClass2(styles.animate_in2);
          setCurrentClass3(styles.animate_in3);
          setCurrentClass4(styles.animate_in4);
        }, 500);
      } else {
        setCurrentPic(currentPic + 1);
        setCurrentClass2(styles.animate_out);
        setCurrentClass3(styles.animate_out);
        setCurrentClass4(styles.animate_out);
        setTimeout(() => {
          setCurrentPic2(currentPic + 1);
          setCurrentClass2(styles.animate_in2);
          setCurrentClass3(styles.animate_in3);
          setCurrentClass4(styles.animate_in4);
        }, 500);
      }
    }, 5000);
    arrayOfTimers.map((arr) => {
      clearTimeout(arr);
    });
    setArrayOfTimers([timer]);
    return () => clearTimeout(timer);
  }, [currentPic]);

  const [curentClass2, setCurrentClass2] = useState(styles.animate_in2);
  const [curentClass3, setCurrentClass3] = useState(styles.animate_in3);
  const [curentClass4, setCurrentClass4] = useState(styles.animate_in4);

  useEffect(() => {}, [currentPic]);
  const handleClick = (e) => {
    if (+e != currentPic) {
      setCurrentPic(+e);
      setCurrentClass2(styles.animate_out);
      setCurrentClass3(styles.animate_out);
      setCurrentClass4(styles.animate_out);
      setTimeout(() => {
        setCurrentPic2(+e);
        setCurrentClass2(styles.animate_in2);
        setCurrentClass3(styles.animate_in3);
        setCurrentClass4(styles.animate_in4);
      }, 500);
    }
  };

  
  return (
    <div  className={"w-full flex flex-col mt-0 md:mt-40 text-white px-10 lg:px-20  "}>
      <div className={"relative flex lg:flex-row flex-col overflow-hidden "}>
        {item.texts.map((tex, index) =>
          index == currentPic2 ? (
            <div
              key={index}
              className={
                "justify-left lg:w-1/2 mb-10 md:mb-0 flex flex-col bg-opacity-20 cursor-pointer "
              }
            >
              <div className={"text-2xl md:text-4xl font-bold " + curentClass2}>
                {tex.header}
              </div>
              <div className={"mt-8 text-sm h-24 " + curentClass3}>
                {tex.text}
              </div>
              <div id="istaknuto" className={"mt-8 flex flex-grow items-end lg:items-center " + curentClass4}>
                <button className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-3 px-6 rounded-full">
                  Kontakt za više informacija
                </button>
              </div>
            </div>
          ) : null
        )}

        <div id="carousel2" className="flex lg:w-1/2 relative h-52 md:h-80 justify-center items-end md:mt-0 lg:mt-0 flex-grow mb-0 ">
          {item.images.map((src, index) => {
            return (
              <Image
                key={src}
                src={src}
                fill
                //sizes="xl"
                priority
                style={{ objectFit: "contain" }}
                alt="laptop image"
                className={
                  "absolute object-bottom " +
                  (index == currentPic ? styles.animate_in_picture : styles.animate_out_picture)
                }
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-row justify-center">
        {item.texts.map((item, index) => {
          return (
            <div
              key={index}
              id={`${index}`}
              onClick={(e) => {
                handleClick(e.currentTarget.id);
              }}
              className={
                "w-1/4 border-t-2 cursor-pointer text-left mt-4 px:0 sm:px-4 h-28 " +
                (index == currentPic ? "" : " border-t-0 ")
              }
            >
              <p className="text-xs md:text-md font-bold mt-2">{item.header2}</p>
              <p className="text-xs md:text-sm mt-3">{item.text2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
