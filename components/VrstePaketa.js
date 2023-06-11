import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import PaketCard from "./paketi/paketcard";
export default function VrstePaketa() {
  let paketi = [
    {
      image: "/images/logoNoBlur.svg",
      title: "basic",
      perks: ["jedan korisnički nalog", "ograničen broj obračuna", "ograničene mogućnosti", "nemogućnost štampe", "online pristup"],
      pic: "",
      primary: false,
      style: "left",
      zakogaje: "otvoren pristup"
    },
    {
      image: "/images/logoNoBlur.svg",
      title: "professional",
      perks: ["Pet korisnička naloga", "Sve što sadrži Basic paket", "Finansije i štampanje izveštaja", "Uvid u sva dugovanja pacijenata", "Kreiranje liste zadataka", "Sistem notifikacija", "Upravljanje korisničkim nalozima", "Puno manjih opcija"],
      pic: "",
      primary: true,
      style: "bottom",
      zakogaje: "za advokate, stečajne upravnike, veštake i knjigovođe"
    },
    {
      image: "/images/logoNoBlur.svg",
      title: "enterprise",
      perks: ["Uskoro u ponudi"],
      pic: "",
      primary: false,
      style: "right"
      ,
      zakogaje: "za velike poslovne sisteme"
    },
  ];
  return (
    <div  className="flex flex-col justify-center items-center max-w-[1200px] text-footertextcolor  bg-mainlight">
      <div>
        <p  className="text-3xl font-bold mb-5 text-center z-20 ">VRSTE PAKETA</p>
        <div className="text-center">
          <FontAwesomeIcon icon={faUsersLine} />
        </div>
        <p id="paketi" className="w-50 text-lg mt-5 text-center">
          Aplikacija nudi izbor paketa prema potrebama biznisa.
        </p>
        <p className="w-50 text-lg text-center">
          Za više informacija kontaktirajte nas!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-20 mb-10 paketgrid ">
        {paketi.map((paket) => {
          return <PaketCard key={paket.title} paket={paket} />;
        })}
      </div>
      <div></div>
    </div>
  );
}
