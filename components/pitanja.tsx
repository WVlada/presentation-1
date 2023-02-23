import Accordion from "./pitanja/accordion";

const Pitanja = () => {
  let pitanja = [
    {
      pitanje: "Šta je potrebno za korišćenje aplikacije?",
      odgovor:
        "Za korišćenje Dentalino aplikacije neophodan Vam je računar (desktop ili laptop) i internet konekcija. Aplikacija se može koristiti i na drugim uređajima, ali zbog preglednosti naša preporuka jeste računar tj. uređaji sa većim ekranom.",
      points: [],
    },

    {
      pitanje: "Kako doći do aplikacije?",
      odgovor:
        "Sve što je potrebno jeste da nam se obratite putem e-mail adrese: info@dentalino.rs ili putem kontakt forme ispod, a mi ćemo Vam odgovoriti u najkraćem mogućem roku sa instrukcijama, prezentacijom i odgovorima na sva Vaša pitanja.",
      points: [],
    },
    {
      pitanje: "Šta još dobijam?",
      odgovor:
        "Pored navedenih mogućnosti izabranog paketa aplikacije dobijate:        ",
      points: [
        "Ličnu ili u digitalnom obliku prezentacija aplikacije u cilju obuke",
        "Pravo na nove verzije Update",
        "Svakodnevna rezervna kopija backup Vaših podataka",
        "Tehnička podrška i održavanje",
      ],
    },
    {
      pitanje: "Cena aplikacije",
      odgovor:
        "Cena aplikacije zavisi od izbora paketa ( Basic paket 20€ , Professional paket 30€) plaćanje se obavlja svakog meseca od 1. do 5.   Prezentacija aplikacije je besplatna",
      points: [],
    },
    {
      pitanje: "Da li je aplikacija dostupna u svakoj državi?",
      odgovor:
        "Da, nije važno odakle ste, aplikacija je dostupna za sve države.     Aplikacija je dostupna na više jezika multilanguage, ukoliko aplikacija nije dostupna na Vašem lokalnom jeziku, možete nam se obratiti sa tom željom a mi ćemo se potruditi da Vam omogućimo",
      points: [],
    },
    {
      pitanje: "Ako dođe do problema, kome da se obratim?",
      odgovor:
        "Možete nam se obratiti sa problemom na email adresu: support@dentalino.rs, a mi ćemo se potruditi u najkraćem mogućem vremenu da proverimo i reagujemo. Takođe u aplikaciji imate odeljak Tehnička podrška, gde imate podatke i kontakt formu koju možete popuniti i prijaviti nam problem",
      points: [],
    },
  ];

  return (
    <div className="flex flex-grow flex-col  w-full mx-auto  min-h-screen -mt-10">
      <div className=" w-full h-full px-10 bg-mainlight bg-opacity-90 h-screen flex justify-center">
        <div className="max-w-[1200px] mt-20 ">
          <p className="text-center text-3xl uppercase text-footertextcolor">
            Česta pitanja
          </p>
          <div className="mt-10 mb-10">
            <Accordion pitanja={pitanja} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitanja;
