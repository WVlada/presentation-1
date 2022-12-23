import Section from "./body/section.component";
const Body = () => {
  return (
    <div className="flex flex-grow flex-col ">
      <div className="h-full flex flex-grow justify-center ">
        <Section />
      </div>
      <div className="bg-mainlight h-40 w-[130%] -rotate-6 -mb-14"></div>
    </div>
  );
};

export default Body;
