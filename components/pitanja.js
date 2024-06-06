import Accordion from "./pitanja/accordion";

const Pitanja = () => {
  let pitanja = [
    {
      pitanje: "Šta je potrebno za korišćenje aplikacije?",
      odgovor:
        "Za korišćenje Obračun.rs aplikacije neophodan Vam je računar (desktop ili laptop) i internet konekcija. Aplikacija će uskoro biti prilagođena za korišćenje i na mobilnim uređajima.",
      points: [],
    },

    {
      pitanje: "Kako doći do aplikacije?",
      odgovor:
        `Aplikacija je dostupna na ${process.env.NEXT_PUBLIC_OBRACUN_APP_PAGE}. Možete i da nam se obratite putem e-mail adrese: ${process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL} ili putem kontakt forme ispod, a mi ćemo Vam odgovoriti u najkraćem mogućem roku sa instrukcijama, prezentacijom i odgovorima na sva Vaša pitanja.`,
      points: [],
    },
    {
      pitanje: "Šta još dobijam?",
      odgovor:
        "Pored trenutno navedenih mogućnosti izabranog paketa aplikacije dobijate:        ",
      points: [
        "Potpuno besplatnu nadogradnju aplikacije u budućnosti.",
        "Potpuno besplatno proširenje za korišćenje na mobilnim uređajima.",
        "Tehnička podrška i održavanje",
      ],
    },
    {
      pitanje: "Cena aplikacije",
      odgovor:
        `Cena aplikacije zavisi od izbora paketa. Plaćanje se obavlja jedanputa godišnje. Cene paketa su dostupne na ${process.env.NEXT_PUBLIC_OBRACUN_APP_PAGE}`,
      points: [],
    },
    {
      pitanje: "Ako dođe do problema, kome da se obratim?",
      odgovor:
        `Možete nam se obratiti sa problemom na email adresu: ${process.env.NEXT_PUBLIC_SENDGRID_TO_EMAIL}. Takоđe, sama aplikacija unutar sebe ima kontakt formu u kojoj se komunicira direktno sa osobljem koje može rešiti svaki problem i odgovoriti na svako pitanje.`,
      points: [],
    },
  ];

  return (
    <div  className="flex flex-grow flex-col bg-mainlight w-full mx-auto  min-h-screen -mt-32 z-40">
      <div className=" w-full h-full px-10 bg-mainlight bg-opacity-90 h-screen flex justify-center">
        <div className="max-w-[1200px] mt-20 ">
          <p id="faq" className="text-center text-3xl uppercase text-footertextcolor">
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
