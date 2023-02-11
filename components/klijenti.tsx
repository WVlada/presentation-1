import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import Carousel3 from "./klijenti/carousel.3";
const Klijenti = () => {
  return (
    <div className="flex w-full  flex-grow bg-cover flex-col justify-center items-center relative mx-auto bg-backlinearimage min-h-screen -mt-20 -mb-20">
      <div className="h-screen px-20 bg-main bg-opacity-90 w-full flex flex-col items-center">
        <div className="max-w-[1200px] mt-48 ">
          <div>
            <p className="text-center text-3xl uppercase text-white font-bold">
              Klijenti
            </p>
          </div>

          <div className="text-center mt-4 mb-4">
            <FontAwesomeIcon color="#fff" icon={faUsersLine} />
            <p className="text-white text-center">
              Utisci zadovoljnih klijenata koji koriste svakodnevno našu
              aplikaciju u svojim ordinacijama!
            </p>
          </div>
          <Carousel3 />
        </div>
      </div>
    </div>
  );
};

export default Klijenti;
