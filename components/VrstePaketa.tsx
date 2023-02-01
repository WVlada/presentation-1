import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import PaketCard from "./paketi/paketcard";
export default function VrstePaketa() {
  let paketi = [
    {
      image: "/mylogo.svg",
      title: "basic",
      perks: ["Tri korisnička naloga", "Neograničen broj pacijenata", "Neograničen broj kartona", "Neograničeno zakazivanje termina", "Kreiranje anamneze", "Virtuelni račun", "Otpremanje RTG snimaka", "Višejezična aplikacija"],
      pic: "",
    },
    {
      image: "/mylogo.svg",
      title: "professional",
      perks: ["Pet korisnička naloga", "Sve što sadrži Basic paket", "Finansije i štampanje izveštaja", "Uvid u sva dugovanja pacijenata", "Kreiranje liste zadataka", "Sistem notifikacija", "Upravljanje korisničkim nalozima", "Puno manjih opcija"],
      pic: "",
    },
    {
      image: "/mylogo.svg",
      title: "enterprise",
      perks: ["", ""],
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-20">
        {paketi.map((paket) => {
          return <PaketCard key={paket.title} paket={paket} />;
        })}
      </div>
      <div></div>
    </div>
  );
}
