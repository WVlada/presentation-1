import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./header.module.css";
import Link from "next/link";
import {Hamburger} from '../components/header/hamburgermenu'

const Header = () => {
  const [bgState, useBg] = useState(false);
  const handlePocetnaClick = () => {
    document
      .getElementById("pocetna")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleUslugeClick = () => {
    document
      .getElementById("usluge")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleIstaknutoClick = () => {
    document
      .getElementById("istaknuto")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handlePaketiClick = () => {
    document
      .getElementById("paketi")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleFAQClick = () => {
    document
      .getElementById("faq")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleContactClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  useEffect(() => {
    //useBg(true)
  }, []);
  let bg = bgState
    ? " bg-none transition-all duration-700 drop-shadow-sm  "
    : " bg-main transition-all duration-700 drop-shadow-xl ";

  const headerFunction = () => {
    if (window.scrollY == 0) {
      useBg(true);
    } else {
      useBg(false);
    }
  };
  useEffect(() => {
    //console.log(document.querySelector("#prvi_button").scrollTop);
    window.addEventListener("scroll", headerFunction);
    const observer = new IntersectionObserver((entries) => {
      //console.log(window.scrollY == 0);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          //setSomeClass(styles.animateheader);
          //useBg(false);
        } else {
          //useBg(true);
        }
      });
    });
    observer.observe(document.querySelector("#prvi_button"));
  }, ["someClass"]);
  return (
    <div
      id="header"
      className={
        "flex flex-row text-white justify-center w-full mx-auto fixed top-0 z-50 " +
        bg +
        " " //+
        //someClass
      }
    >
      <div className="flex flex-row justify-between max-w-[1200px] w-full px-20 md:px-auto">
        <div className="flex items-center">
          <Link href="/">
            <div className="w-44 ">
              <Image
                className="inline"
                id="logo"
                src="/images/logoNoBlur.svg"
                alt="logo image"
                //style={{ height: "auto", width: "auto" }}
                height={44}
                width={44}
              />
              <p className="inline ml-2 font-bold text-lg">OFFICE SOFT</p>
            </div>
          </Link>
        </div>

        <div className="p-4 md:flex flex-row items-center hidden">
          <div onClick={handlePocetnaClick}>
            <p className="ml-6 cursor-pointer">Početna</p>
          </div>
          <div onClick={handleUslugeClick}>
            <p className="ml-6 cursor-pointer">Usluge</p>
          </div>
          <div onClick={handleIstaknutoClick}>
            <p className="ml-6 cursor-pointer">Istaknuto</p>
          </div>
          <div onClick={handlePaketiClick}>
            <p className="ml-6 cursor-pointer">Paketi</p>
          </div>
          <div onClick={handleFAQClick}>
            <p className="ml-6 cursor-pointer">FAQ</p>
          </div>
          <div onClick={handleContactClick}>
            <p className="ml-6 cursor-pointer">Kontakt</p>
          </div>
        </div>

        <div className="hamburger flex flex-row items-center  p-7">
          <Hamburger/>
        </div>
      </div>
    </div>
  );
};

export default Header;
