"use client";

import { useCountryContext } from "@/context/countryContext";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

const SubmitButton = () => {
  const {
    setCountries,
    capital,
    countries,
    setScore,
    setCapital,
    randomCountry,
    setRandomCountry,
  } = useCountryContext();

  const router = useRouter();

  const handleSubmit = function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    if (countries[Number(randomCountry)].capital === capital) {
      console.log("Correct");
      setScore((prev) => Number(prev) + 1);
      setCapital("");
      setRandomCountry(Math.floor(Math.random() * countries.length));
      axios.get("api/getCountry").then((res) => {
        setCountries(res.data);
      });
    } else {
      router.push("/gameover");
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="bg-yellow-400 p-2 rounded-md tracking-widest font-bold"
      type="submit"
    >
      SUBMIT
    </button>
  );
};

export default SubmitButton;
