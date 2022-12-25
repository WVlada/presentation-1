import Section from "./body/section.component";
const Body = () => {
  return (
    <div className="flex flex-grow flex-col relative ">
      <div className="min-h-screen flex flex-grow justify-center ">
        <Section />
      </div>
      <div className="bg-mainlight h-60 w-[160%] -rotate-[4deg] -ml-10 absolute -bottom-16 "></div>
    </div>
  );
};

export default Body;
