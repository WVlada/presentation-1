import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { type } from "os";

interface CardType {
  text: string;
  title: string;
  image: string;
}

export default function Card({ text, title, image }: CardType) {
  return (
    <div className="flex flex-col p-8 relative h-96 bg-white overflow-hidden drop-shadow-[0_5px_15px_rgba(0,0,0,0.15)] rounded hover:-translate-y-4 animate transition-transform duration-300 ease-in-out">
      <div className="absolute bg-maindark -right-8 rotate-45 top-6 drop-shadow-lg">
        <p className="text-white text-xs py-2 px-8 font-bold">Neograničeno</p>
      </div>

      <div className="">{<Image className="mx-auto" src={image} width={300} height={200} alt="image" />}</div>
      <div>
        <p className="text-xl font-bold mt-4">{title}</p>
        <p className="text-sm mt-4">{text}</p>
      </div>
    </div>
  );
}
