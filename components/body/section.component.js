import Carousel from "./carousel.component";
import { useInView } from "react-intersection-observer";
const Section = () => {
  const [ref, inView] = useInView();
  const handleArrowClick = () => {
    //document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <div className="flex flex-row w-full ">
      {/*<div className="md:flex hidden md:w-1/12 ">
        
  </div>*/}
      <div className="flex flex-col w-full md:w-6/12 p-0 justify-left h-[300px]">
      {!inView && (
        <div
          onClick={handleArrowClick}
          className="fixed text-white right-5 bottom-10  bg-main rounded-full p-2  animate-bounce cursor-pointer z-50 "
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
          <p ref={ref} className="text-left text-4xl font-bold text-white">
            Aplikacija za računovodstvene agencije
          </p>
          <p className="text-left text-white mt-5  ">
            Books predstavlja online aplikaciju koja je kreirana za potrebe
            računovodstvenih agencija u cilju optimizacije njihovog poslovanja,
            efikasnije evidencije biznisa i smanjenja papirologije.
          </p>
        <div className="justify-left w-full mt-5 flex flex-grow items-end ">
          <button
            id="prvi_button"
            type="button"
            className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-2 px-6 rounded-full"
          >
            Vidi više
          </button>
        </div>
      </div>
      <div className="md:flex hidden md:w-6/12 justify-center ">
        <Carousel />
      </div>
      {/*<div className="md:flex hidden md:w-1/12 ">
        
</div>*/}
    </div>
  );
};

export default Section;
