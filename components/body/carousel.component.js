import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
export default function Carousel() {
  let item = {
    images: [
      "/images/laptoppng11.png",
      "/images/laptoppng22.png",
      "/images/laptoppng33.png",
      "/images/laptoppng44.png",
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
    <div id="pocetna" className={" flex flex-col min-w-[500px] w-[1200px] "}>
      <div
        className={
          "relative h-[300px] flex items-center  " +
          classname
        }
      >
        {item.images.map((src, index) => {
          return (
            <Image
              key={src}
              src={src}
              sizes={'xl'}
              //width={426}
              //height={240}
              style={{ objectFit: "contain" }}
              fill
              alt="laptop image"
              className={
                "absolute transition duration-700 ease-in-out object-bottom " +
                (index == currentPic ? classname : " opacity-0 ")
              }
            />
          );
        })}
      
      </div>
      <div className=" justify-center items-center  flex flex-row bg-opacity-20 cursor-pointer ">
        <FontAwesomeIcon
          size="lg"
          onClick={handleLeftArrowClick}
          color={"#ffffff"}
          className=""
          icon={faArrowLeft}
        />
        <p className="text-white ml-5 mr-5 font-bold">/</p>
        <div className="  flex justify-center items-center bg-opacity-20 cursor-pointer">
          <FontAwesomeIcon
            size="lg"
            onClick={handleRightArrowClick}
            color={"#ffffff"}
            className=""
            icon={faArrowRight}
          />
        </div>
      </div>
      
    </div>
  );
}
