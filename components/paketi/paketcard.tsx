import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
interface Paket {
  paket: {image: string; title: string; persk: string[]; pic: string;}
}
export default function PaketCard( {paket}: Paket) {
  return (
    <div className="flex flex-col justify-center text-footertextcolor w-full md:w-60 justify-self-center">
      <p className="text-center">{paket.title}</p>
      <div className="bg-black text-center h-20">1</div>
      <div className="bg-white text-center h-28">2</div>
      <div className="bg-black text-center h-32">3</div>
    </div>
  );
}
