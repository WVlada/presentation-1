import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
interface Paket {
  image: string; title: string; persk: string[]; pic: string;
}
export default function PaketCard( paket: Paket) {
  return (
    <div className="flex flex-col justify-center text-footertextcolor">
      <p className="text-center">{paket.title}</p>
      <div></div>
    </div>
  );
}
