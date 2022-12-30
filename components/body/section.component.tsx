import Carousel from "./carousel.component";
const Section = () => {
  return (
    <div className="section flex flex-row  mt-40 ">
      <div className="md:flex hidden md:w-1/12 ">
        
        </div>
      <div className="flex flex-col w-full md:w-5/12 p-10 md:p-0 justify-left">
        
          <p className="text-left text-4xl font-bold text-white">
            Aplikacija za računovodstvene agencije
          </p>
          <p className="text-left text-white mt-5  ">
            Books predstavlja online aplikaciju koja je kreirana za potrebe
            računovodstvenih agencija u cilju optimizacije njihovog poslovanja,
            efikasnije evidencije biznisa i smanjenja papirologije.
          </p>
        <div className="justify-left w-full mt-5 ">
          <button
            type="button"
            className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-2 px-6 rounded-full"
          >
            Vidi više
          </button>
        </div>
      </div>
      <div className="md:flex hidden md:w-5/12 ">
        <Carousel />
      </div>
      <div className="md:flex hidden md:w-1/12 ">
        
      </div>
    </div>
  );
};

export default Section;
