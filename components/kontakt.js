import KontakForm from "./kontakt/form";

const Kontakt = () => {
  return (
    <div className="flex flex-grow min-h-screen bg-backkontaktimage bg-cover">
      <div className=" w-full bg-main flex justify-center bg-opacity-[.85] h-screen  pt-32 ">
        <div className="max-w-[1200px] flex flex-col md:flex-row justify-center px-20">
          <div className="md:w-1/2 flex justify-center items-center px-10">
            <div>
              <p className="text-center md:text-left text-lg md:text-[40px]  text-white mt-10 mb-8">
                Kontaktirajte nas
              </p>
              <p className="text-left text-[#ffffffcc] font-[400] text-[18px] tracking-[1.5px] leading-[1.8] hidden md:block">
                Za više informacija o aplikaciji i potencijalnu saradnju
                kontaktirajte nas e-mail: info@dentalino.rs ili pomoću kontakt
                forme i odgovorićemo Vam u najkraćem mogućem vremenu.
              </p>
            </div>
          </div>

          <div id={"contact"} className="md:w-1/2 flex items-center px-10">
            <KontakForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
