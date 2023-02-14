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
      "/images/laptoppng1.png",
      "/images/laptoppng2.png",
      "/images/laptoppng3.png",
      "/images/laptoppng4.png",
    ],
    texts: [
      {
        text2: "instant pretraga po svim podacima",
        header: "Kreiranje pacijenata",
        header2: "Kreiranje pacijenata",
        text: "Kalendar omogućava brzo zakazivanje termina i odličnu preglednost zakazanih termina na mesečnom, nedeljnom i dnevnom nivou. Drag & Drop automatsko zakazivanje termina",
      },
      {
        text2: "obeležavanje neplaćenih",
        header: "Virtuelni račun",
        header2: "Virtuelni račun",
        text: "Prilikom kreiranja kartona poželjno je staviti cenu i izabrati da li je pacijent platio ili nije, jer pomoću tih parametara automatski biće generisan račun te usluge. Virtuelni račun služi za prikazivanje stanja kod .",
      },
      {
        text2: "pregled mesečni, nedeljni i dnevni",
        header: "Zakazivanje intervencija",
        header2: "Zakazivanje intervencija",
        text: "Kompletan uvid u sve troškove ordinacije sa grupacijama na mesečnom nivou, mogućnost filtriranja i štampanja izveštaja. Mogućnost kreiranja samostalno nove vrste troška radi evidencije u izveštajima",
      },
      {
        text2: "izveštaj svih troškova ordinacije",
        header: "Finansije",
        header2: "Finansije",
        text: "Kompletan uvid u sve troškove ordinacije sa grupacijama na mesečnom nivou, mogućnost filtriranja i štampanja izveštaja. Mogućnost kreiranja samostalno nove vrste troška radi evidencije u izveštajima",
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
    <div className={"w-full flex flex-col mt-40 text-white px-10 lg:px-20  "}>
      <div className={"relative flex lg:flex-row flex-col overflow-hidden "}>
        {item.texts.map((tex, index) =>
          index == currentPic2 ? (
            <div
              key={index}
              className={
                "justify-left lg:w-1/2 mb-10 md:mb-0 flex flex-col bg-opacity-20 cursor-pointer "
              }
            >
              <div className={"text-4xl font-bold " + curentClass2}>
                {tex.header}
              </div>
              <div className={"mt-8 text-sm h-16 " + curentClass3}>
                {tex.text}
              </div>
              <div className={"mt-8 flex flex-grow items-end lg:items-center " + curentClass4}>
                <button className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-3 px-6 rounded-full">
                  Kontakt za više informacija
                </button>
              </div>
            </div>
          ) : null
        )}

        <div className="flex lg:w-1/2 relative h-80 justify-center items-end md:mt-10 lg:mt-0 flex-grow mb-0 ">
          {item.images.map((src, index) => {
            return (
              <Image
                key={src}
                src={src}
                fill
                sizes="xl"
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
                "w-1/4 border-t-2 cursor-pointer text-left mt-4 px-4 h-28 " +
                (index == currentPic ? "" : " border-t-0 ")
              }
            >
              <p className="text-md font-bold mt-2">{item.header2}</p>
              <p className="text-sm mt-3">{item.text2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
