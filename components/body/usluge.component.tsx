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
    },
    {
      title: "Kreiranje naloga i kontnih planova",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge2.png",
    },
    {
      title: "Konsolidovanje",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge3.png",
    },
    {
      title: "Finansije",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge4.png",
    },
    {
      title: "Podesive liste",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge5.png",
    },
    {
      title: "Dugovanja",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "/images/usluge6.png",
    },
  ];
  return (
    <div
      className={
        "md:p-10  w-full text-center relative  bg-mainlight text-footertextcolor z-50 "
      }
    >
      <div className="mt-5">
        <p className="text-3xl font-bold mb-5 ">USLUGE APLIKACIJE</p>
        <span className="">
          <FontAwesomeIcon icon={faUsersLine} />
        </span>
        <p className="w-50 text-lg mt-5">
          Aplikacija je razvijena u punoj saradnji sa iskusnim računovođama i
          kancelarijama sa dugogodišnjom praksom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-10 mt-20">
        {cards.map((card) => {
          return <Card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
}
