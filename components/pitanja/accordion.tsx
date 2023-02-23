import { useState } from "react";

interface Pitanja {
  pitanja: Pitanje[];
}
type Pitanje = {
  pitanje: String;
  odgovor: String;
  points: String[];
};
const Accordion = ({ pitanja }: Pitanja) => {
  let [active, setActive] = useState<Number | undefined>();
  const handleClick = (number: Number) => {
    if (number == active) {
      setActive(10);
    } else {
      setActive(number);
    }
  };
  return (
    <div className="">
      {pitanja.map((p, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            className="border-b cursor-pointer p-4 pl-0 "
          >
            <div className="flex flex-row justify-between items-center h-16">
              <p
                className={
                  "text-left text-3xl   p-4 pl-0" +
                  (index == active ? " text-main " : " text-footertextcolor  ")
                }
              >
                {p.pitanje}
              </p>
              <div className="flex items-center">
                <div className="">
                  <p className="text-[#afafaf] text-3xl">
                    {index == active ? "-" : "+"}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                "overflow-hidden transition-all duration-500 " +
                (index == active
                  ? " text-footertextcolor max-h-32 ease-in "
                  : " text-footertextcolor max-h-0 ease-out ")
              }
            >
              <p className="">{p.odgovor}</p>
              <div>
                {p.points &&
                  p.points.map((point, index) => {
                    return (
                      <li className="ml-5" key={index}>
                        {point}
                      </li>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
