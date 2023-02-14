import Accordion from "./pitanja/accordion";

const Pitanja = () => {
  return (
    <div className="flex flex-grow flex-col w-full mx-auto  min-h-screen -mt-10">
      <div className=" w-full h-full px-20 bg-mainlight bg-opacity-90 h-screen ">
        <div className="max-w-[1200px] mt-20">
          <p className="text-center text-3xl uppercase text-footertextcolor">
            Česta pitanja
          </p>
          <div className="">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitanja;
