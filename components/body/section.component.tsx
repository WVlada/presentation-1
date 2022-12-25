import Carousel from "./carousel.component";
const Section = () => {
  return (
    <div className="section flex flex-row  mt-40">
      <div className="md:flex hidden md:w-1/6 ">
        
        </div>
      <div className="flex flex-col w-full md:w-2/6 items-center justify-left">
        <div>
          <p className="text-left text-4xl font-bold text-white">
            Aplikacija za stomatološke ordinacije
          </p>
        </div>
        <div>
          <p className="text-left text-white mt-6 ">
            Dentalino predstavlja online aplikaciju koja je kreirana za potrebe
            stomatoloških ordinacija u cilju optimizacije njihovog poslovanja,
            efikasnije evidencije pacijenata i smanjenja papirologije.
          </p>
        </div>
        <div className="justify-left w-full mt-8">
          <button
            type="button"
            className="text-sm transition-colors duration-700 hover:bg-tertiary hover:text-white text-center text-secondary bg-white py-2 px-6 rounded-full"
          >
            Vidi više
          </button>
        </div>
      </div>
      <div className="md:flex hidden md:w-2/6 ">
        <Carousel />
      </div>
      <div className="md:flex hidden md:w-1/6 ">
        
      </div>
    </div>
  );
};

export default Section;
