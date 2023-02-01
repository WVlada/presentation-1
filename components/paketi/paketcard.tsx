import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import styles from "./paketcard.module.css";
import Image from "next/image";
interface Paket {
  paket: { image: string; title: string; perks: string[]; pic: string };
}
export default function PaketCard({ paket }: Paket) {
  return (
    <div className="flex flex-col justify-center text-footertextcolor w-full mt-10 self-start">
      <div className="bg-main mx-auto rounded text-center h-60 p-4 transition-transform md:w-48 cursor-pointer drop-shadow-[0_10px_5px_rgba(0,0,0,0.35)] hover:scale-110">
        <p className="text-center text-maindark">{paket.title}</p>
        <div className="text-center mt-10">
          <Image
            className="inline"
            src={paket.image}
            width="80"
            height="80"
            alt="logo"
          />
        </div>
        <p className="text-center mt-10 text-white text-xs">
          aplikacija za računovodstvene agencije
        </p>
      </div>
      <div className="text-center h-14"></div>
      <div className="bg-white rounded p-6 text-center min-h-44 w-full shadow">
        <div className="mb-10">
          <p> {paket.title}</p>
        </div>
        {paket.perks.map((perk) => {
          return <div className={"cursor-pointer hover:border-l-4 border-blue-400 relative z-20  "} key={perk}><div className={"absolute top-0 let-0 z-10 bg-gray-100 hover:" + styles.cardfadefromleft}></div><p className="text-sm p-2">{perk}</p></div>;
        })}
      </div>
    </div>
  );
}
