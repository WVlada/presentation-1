import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import styles from "./card.module.css";

interface CardType {
  text: string;
  title: string;
  image: string;
  index: number;
  flag: boolean
}

export default function Card({ text, title, image, index, flag }: CardType) {
  let classname = " ";
  switch (index) {
    case 0:
      classname += ` ${styles.zero}`;
      break;
    case 1:
      classname += ` ${styles.first}`;
      break;
    case 2:
      classname += ` ${styles.second}`;
      break;
    case 3:
      classname += ` ${styles.third}`;
      break;
    case 4:
      classname += ` ${styles.fourth}`;
      break;
    case 5:
      classname += ` ${styles.fifth}`;
    default:
  }
  const [someClass, setSomeClass] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSomeClass(classname);
        }
      });
    });
    observer.observe(document.querySelector(".card"));
  });
  return (
    <div
      className={
        "flex flex-col p-8 relative h-96 bg-white overflow-hidden drop-shadow-[0_5px_15px_rgba(0,0,0,0.15)] rounded hover:-translate-y-4 animate transition-transform duration-300 ease-in-out card " +
        someClass
      }
    >
      {flag && <div className="absolute bg-maindark -right-8 rotate-45 top-6 drop-shadow-lg">
        <p className="text-white text-xs py-2 px-8 font-bold">Neograničeno</p>
      </div>}

      <div className="">
        {
          <Image
            className="mx-auto"
            src={image}
            width={300}
            height={200}
            alt="image"
          />
        }
      </div>
      <div>
        <p className="text-xl font-bold mt-4">{title}</p>
        <p className="text-sm mt-4">{text}</p>
      </div>
    </div>
  );
}
