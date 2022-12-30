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
      "/images/laptoppng1.png",
      "/images/laptoppng2.png",
      "/images/laptoppng3.png",
      "/images/laptoppng4.png",
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
    <div className={"w-full flex flex-col min-w-[500px]  "}>
      <div
        className={
          "relative h-64 " +
          classname
        }
      >
        {item.images.map((src, index) => {
          return (
            <Image
              key={src}
              src={src}
              width={426}
              height={240}
              alt="laptop image"
              className={
                "absolute transition duration-700 ease-in-out " +
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
