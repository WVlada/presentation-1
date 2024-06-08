import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel3() {
  let texts = [
    {
      text: "instant pretraga po svim podacima"
    },
    {
      text: "obeležavanje neplaćenih"
    },
    {
      text: "pregled mesečni, nedeljni i dnevni"
    },
    {
      text: "izveštaj svih troškova ordinacije"
    }
  ];

  return (
    <div
      className={"w-full flex flex-col text-white justify-center items-center "}
    >
      <Carousel
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={2000}
        transitionTime={1000}
        autoPlay
        swipeable={true}
        showArrows={false}
        className="max-w-[800px] leading-5  "
      >
        {
          <div key="slide1 relative">
            <p className="text-mainlight text-center font-[Parisienne] text-sm md:text-3xl">
              <FontAwesomeIcon
                color="#ffffff"
                size="2x"
                icon={faQuoteLeft}
                className="opacity-70"
              />
              Uskoro... aplikacija još nije pokrenuta!
            </p>
            <p className="mt-8">
              <FontAwesomeIcon color="#ffd500" icon={faStar} />
              <FontAwesomeIcon color="#ffd500" icon={faStar} />
              <FontAwesomeIcon color="#ffd500" icon={faStar} />
              <FontAwesomeIcon color="#ffd500" icon={faStar} />
              <FontAwesomeIcon color="#ffd500" icon={faStar} />
            </p>
            <p className="mt-4">Bilbo Baggins, Middle-earth</p>
          </div>
        }

        <div key="slide2">
          <p className="text-mainlight text-center font-[Parisienne] text-sm md:text-3xl">
            <FontAwesomeIcon
              color="#ffffff"
              size="2x"
              icon={faQuoteLeft}
              className="opacity-70"
            />
            Uskoro... aplikacija još nije pokrenuta!
          </p>
          <p className="mt-8">
            <FontAwesomeIcon color="#ffd500" icon={faStar} />
            <FontAwesomeIcon color="#ffd500" icon={faStar} />
            <FontAwesomeIcon color="#ffd500" icon={faStar} />
            <FontAwesomeIcon color="#ffd500" icon={faStar} />
            <FontAwesomeIcon color="#ffd500" icon={faStar} />
          </p>
          <p className="mt-4">Samwise Gamgee, Middle - earth</p>
        </div>
      </Carousel>
    </div>
  );
}
