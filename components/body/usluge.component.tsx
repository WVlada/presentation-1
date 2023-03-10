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
      title: "Kreiranje firme i povezane firme",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge1.png",
      flag: true,
    },
    {
      title: "Kreiranje naloga i kontnih planova",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge2.png",
      flag: true,
    },
    {
      title: "Konsolidovanje",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge3.png",
      flag: true,
    },
    {
      title: "Finansije",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge4.png",
      flag: false,
    },
    {
      title: "Podesive liste",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge5.png",
      flag: false,
    },
    {
      title: "Dugovanja",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge6.png",
      flag: true,
    },
  ];
  return (
    <div
      className={
        "md:p-10 mx-auto -mt-20  w-full text-center relative max-w-[1200px] w-full  bg-mainlight text-footertextcolor z-50 "
      }
    >
      <div className="mt-5">
        <p className="text-3xl font-bold mb-5 ">USLUGE APLIKACIJE</p>
        <span className="">
          <FontAwesomeIcon icon={faUsersLine} />
        </span>
        <p className="w-50 text-lg mt-5">
          Aplikacija je razvijena u punoj saradnji sa iskusnim ra??unovo??ama i
          kancelarijama sa dugogodi??njom praksom.
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
