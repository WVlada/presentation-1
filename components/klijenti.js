import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import Carousel3 from "./klijenti/carousel.3";
const Klijenti = () => {
  return (
    <div className="flex w-full  flex-grow bg-cover flex-col justify-center items-center relative mx-auto bg-backlinearimage min-h-screen ">
      <div className="min-h-screen px-10 md:px-20 bg-main bg-opacity-90 w-full flex flex-col items-center">
        <div className="max-w-[1200px] mt-48 ">
          <div>
            <p className="text-center text-lg sm:text-3xl uppercase text-white font-bold">
              Klijenti
            </p>
          </div>

          <div className="text-center text-xs md:text-md px-10 mt-4 mb-4">
            <FontAwesomeIcon color="#fff" icon={faUsersLine} />
            <p className="text-white text-center">
              Utisci zadovoljnih klijenata koji koriste svakodnevno našu
              aplikaciju u svojim agencijama!
            </p>
          </div>
          <Carousel3 />
        </div>
      </div>
    </div>
  );
};

export default Klijenti;
