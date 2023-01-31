import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import PaketCard from "./paketi/paketcard";
export default function VrstePaketa() {
  let paketi = [
    {
      image: "",
      title: "basic",
      persk: ["", ""],
      pic: "",
    },
    {
      image: "",
      title: "professional",
      persk: ["", ""],
      pic: "",
    },
    {
      image: "",
      title: "enterprise",
      persk: ["", ""],
      pic: "",
    },
  ];
  return (
    <div className="flex flex-col justify-center text-footertextcolor -mt-10 bg-mainlight">
      <div>
        <p className="text-3xl font-bold mb-5 text-center ">VRSTE PAKETA</p>
        <div className="text-center">
          <FontAwesomeIcon icon={faUsersLine} />
        </div>
        <p className="w-50 text-lg mt-5 text-center">
          Aplikacija nudi izbor paketa prema potrebama biznisa.
        </p>
        <p className="w-50 text-lg text-center">
          Za više informacija kontaktirajte nas!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 content-center">
        {paketi.map((paket) => {
          return <PaketCard key={paket.title} paket={paket} />;
        })}
      </div>
      <div></div>
    </div>
  );
}
