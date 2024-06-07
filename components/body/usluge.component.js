import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import Card from "./card.comonent";
export default function Usluge() {
  let cards = [
    {
      title: "Obračun zakonske zatezne kamate",
      text: "Obrаčun zakonske zatezne kamate u dinarima ili devizama, prema važećim propisima uz moguća prilagođavanja za pojedine periode sa prostom ili konformnom metodom.",
      image: "/images/usluge1.png",
      flag: true,
    },
    {
      title: "Revalorizacija",
      text: "Revalorizacija iznosa u domaćoj ili stranoj valuti prema propisima.",
      image: "/images/usluge2.png",
      flag: true,
    },
    {
      title: "Javni prihodi",
      text: "Obračun dugovanja i potraživanja po osnovu javnih prihoda.",
      image: "/images/usluge3.png",
      flag: true,
    },
    {
      title: "Eskont",
      text: "Obračun dugovanja i potraživanja prema važećim eskontnim stopama centralnih banaka.",
      image: "/images/usluge4.png",
      flag: true,
    },
    {
      title: "Ugovorena kamata",
      text: "Obračun dugovanja i potraživanja po stopi koju sami odaberete, po periodima.",
      image: "/images/usluge5.png",
      flag: true,
    },
    {
      title: "Bankarski anuiteti",
      text: "Obračun dugovanja i potraživanja prilagođen bankarskom obračunu u praksi.",
      image: "/images/usluge6.png",
      flag: false,
    },
  ];
  return (
    <div
      className={
        "md:p-10 mx-auto -mt-20  w-full text-center relative max-w-[1200px] bg-mainlight text-footertextcolor z-20 "
      }
    >
      <div className="mt-5">
        <p  className="text-3xl font-bold mb-5 ">USLUGE APLIKACIJE</p>
        <span className="">
          <FontAwesomeIcon icon={faUsersLine} />
        </span>
        <p id="usluge" className="w-50 text-lg mt-5">
          Aplikacija je razvijena iz višegodišnjeg iskustva u knjigovodstvu, sudskim i stečajnim postupcima.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-10 mt-20">
        {cards.map((card, index) => {
          return <Card key={card.title} {...card} index={index} />;
        })}
      </div>
    </div>
  );
}
