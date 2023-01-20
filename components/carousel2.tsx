import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { isTemplateSpan } from "typescript";
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
        text: "Prilikom kreiranja kartona poželjno je staviti cenu i izabrati da li je pacijent platio ili nije, jer pomoću tih parametara automatski biće generisan račun te usluge. Virtuelni račun služi za prikazivanje stanja kod pacijenata i kao takav način pruža stomatologu da vodi evidenciju rada kod pacijenta i beleži neplaćene intervencije",
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
  //const [disappear, setDisapear] = useState(" ");

  const handleRightArrowClick = () => {
    //setDisapear(" opacity-10 transition duration-500 ease-in-out");
    //setTimeout(() => {
    setCurrentPic(currentPic === item.images.length - 1 ? 0 : currentPic + 1);
    // setDisapear(" ");
    //}, 500);
  };
  const handleLeftArrowClick = () => {
    //setDisapear(" opacity-10 transition duration-500 ease-in-out");
    //setTimeout(() => {
    setCurrentPic(currentPic === 0 ? item.images.length - 1 : currentPic - 1);
    //  setDisapear(" ");
    //}, 500);
  };

  //const classname = item.images[currentPic] + " " //+ disappear;
  const classname = "flex opacity-100 justify-center";
  return (
    <div className={"w-full flex flex-col mt-40 text-white px-10 lg:px-20  "}>
      <div className={"relative flex  lg:flex-row flex-col " + classname}>
        <div className=" justify-left lg:w-1/2 flex flex-col bg-opacity-20 cursor-pointer ">
          <div className="text-4xl font-bold">
            {item.texts[currentPic].header}
          </div>
          <div className="mt-8 text-sm">{item.texts[currentPic].text}</div>
          <div className="mt-8 flex flex-grow items-center">
            <button className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-3 px-6 rounded-full">
              Kontakt za više informacija
            </button>
          </div>
        </div>
        <div className="flex lg:w-1/2 relative h-80 justify-center items-end mt-10 lg:mt-0 flex-grow mb-0 ">
          {item.images.map((src, index) => {
            return (
              <Image
                key={src}
                src={src}
                fill
                style={{ objectFit: "contain" }}
                //width={426}
                //height={240}
                alt="laptop image"
                className={
                  "absolute transition duration-700 ease-in-out object-bottom " +
                  (index == currentPic ? classname : " opacity-0 ")
                }
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-row justify-center">
        {item.texts.map((item) => {
          return (
            <>
              <div className="w-1/4 border-t-2 text-left mt-4 px-4 h-28">
                <p className="text-md font-bold mt-2">{item.header2}</p>
                <p className="text-sm mt-3">{item.text2}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
