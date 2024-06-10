import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./kontakt.module.css";

export default function KontakForm() {
  const [formData, setFormdata] = useState({
    name: "x",
    email: "x",
    poruka: "x",
  });
  const handleTextAreaInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formData, poruka: e.currentTarget.value });
  };
  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formData, email: e.currentTarget.value });
  };
  const handleSubmit = async () => {
    // i dont care if you dont enter mail or name or whatever
    let options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    };
    let response = await fetch("/api/sendemail", options);
    let result = await response.json();
    console.log("res>", result);
  };
  return (
    <div
      className={
        "bg-white rounded-sm drop-shadow-2xl w-full md:w-[400px] p-12 " +
        styles.kontakt_forma
      }
    >
      <input
        id="input1"
        placeholder="Ime i prezime"
        type="text"
        className="bg-gray-200 w-full p-2 focus:border-white mb-4 border-blue-100 border"
      ></input>
      <input
        id="input1"
        placeholder="Vaša email adresa"
        type="text"
        onChange={handleEmailInput}
        className="bg-gray-200 w-full p-2 focus:border-white mb-4"
      ></input>
      <textarea
        onChange={handleTextAreaInput}
        className="p-2 bg-gray-200 w-full"
        id="kontakttextarea"
        name="kontakttextarea"
        placeholder="Vaša poruka ovde"
        rows={4}
        cols={30}
      ></textarea>
      <div className="flex flex-col items-center">
        <button
          onClick={handleSubmit}
          type="button"
          className="mt-10 w-32 mb-5 text-sm transition-colors duration-700 hover:bg-white hover:text-tertiary text-center text-white hover:shadow bg-tertiary py-3 px-7 rounded-full"
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
