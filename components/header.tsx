import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type } from "os";

const Header = () => {
  const [ref, inView] = useInView();
  const handleArrowClick = () => {
    document.getElementById("logo")?.scrollIntoView({ behavior: "smooth" });
  };
  const [bgState, useBg] = useState(false)
  useEffect(() => {
    console.log(window.pageYOffset);
    //useBg(true)
  }, []);
  let bg = bgState ? " bg-main" : " bg-none"
  return (
    <div className={"flex text-white justify-between max-w-[1200px] mx-auto w-full " + bg}>
      {inView && (
        <div
          onClick={handleArrowClick}
          className="absolute right-5 bottom-5  bg-main rounded-full p-2  animate-bounce cursor-pointer "
        >
          <svg
            className="w-5 h-5 rotate-180 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}

      <div className="flex flex-row justify-between w-full px-20">
        <div className="flex items-center">
          <div className="w-32 ">
            <Image
              id="logo"
              ref={ref}
              src="/mylogo.svg"
              alt="logo image"
              height={20}
              width={88}
            />
          </div>
        </div>

        <div className="p-7 md:flex flex-row items-center hidden">
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
          <div>
            <p className="ml-6">Pocetna</p>
          </div>
        </div>

        <div className="hamburger flex flex-row items-center md:hidden p-7">
          Menu
        </div>
      </div>
    </div>
  );
};

export default Header;
