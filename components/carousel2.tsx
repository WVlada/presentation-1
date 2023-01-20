import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
export default function Carousel2() {
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
    <div className={"w-full flex flex-col mt-40  "}>
      <div className={"relative flex  lg:flex-row flex-col  " + classname}>
        <div className=" justify-center items-center lg:w-1/2 flex flex-col bg-opacity-20 cursor-pointer ">
          <div className="">
            <p>tect</p>
          </div>
          <div className="">
            <p>tect</p>
          </div>
          <div className="">
            <p>tect</p>
          </div>
          <div className="">
            <p>tect</p>
          </div>
        </div>
        <div className="flex lg:w-1/2 relative h-64">
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
      </div>

      <div className="flex flex-row justify-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}
