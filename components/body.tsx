import Section from "./body/section.component";
import Usluge from "./body/usluge.component";
const Body = () => {
  return (
    <div className="flex flex-grow flex-col relative w-full max-w-[1200px] mx-auto px-20 ">
      <div className=" flex flex-grow justify-center items-center mb-20 ">
        <Section />
      </div>
    </div>
  );
};

export default Body;
