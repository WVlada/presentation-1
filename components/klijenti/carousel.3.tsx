import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel3() {
  let texts: [
      {
        text: "instant pretraga po svim podacima",
      },
      {
        text: "obeležavanje neplaćenih",
      },
      {
        text: "pregled mesečni, nedeljni i dnevni",
      },
      {
        text: "izveštaj svih troškova ordinacije",
      },
    ]
    
  return (
    <div className={"w-full flex flex-col text-white "}>
        <Carousel>
                <div>
                    <img src="images/usluge1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/usluge2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/usluge3.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        
    </div>
  );
}
