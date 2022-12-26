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
      "bg-[url('/images/laptoppng1.png')]",
      "bg-[url('/images/laptoppng2.png')]",
      "bg-[url('/images/laptoppng3.png')]",
      "bg-[url('/images/laptoppng4.png')]",
    ],
  };
  const [currentPic, setCurrentPic] = useState(0);
  const [disappear, setDisapear] = useState(" ");

  const handleRightArrowClick = () => {
    setDisapear(" opacity-10 transition duration-500 ease-in-out");
    setTimeout(() => {
      setCurrentPic(currentPic === item.images.length - 1 ? 0 : currentPic + 1);
      setDisapear(" ");
    }, 500);
  };
  const handleLeftArrowClick = () => {
    setDisapear(" opacity-10 transition duration-500 ease-in-out");
    setTimeout(() => {
      setCurrentPic(currentPic === 0 ? item.images.length - 1 : currentPic - 1);
      setDisapear(" ");
    }, 500);
  };
  //let images = { 1: { 1: "bg-[url('/images/carousel/image1.jpg')]", 2: "bg-[url('/images/carousel/image2.jpg')]", 3: "bg-[url('/images/carousel/image3.jpg')]", 4: "bg-[url('/images/carousel/image4.jpg')]" }, 2: { 1: '', 2: '', 3: '', 4: '' }, 3: { 1: '', 2: '', 3: '', 4: '' }, 4: { 1: '', 2: '', 3: '', 4: '' } }
  const classname = item.images[currentPic] + " " + disappear;
  return (
    <div className={"w-full flex flex-col  "}>
      <div
        className={
          " bg-contain bg-no-repeat h-64 bg-center mt-6  " +
          classname
        }
      ></div>

      <div className=" justify-left mt-5 items-center  flex flex-row bg-opacity-20 cursor-pointer ">
        <FontAwesomeIcon
          size="lg"
          onClick={handleLeftArrowClick}
          color={"#ffffff"}
          className="ml-20"
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
