"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type Country = {
  id: Number;
  country: String;
  capital: String;
};

type CountryContextType = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  capital: String;
  setCapital: React.Dispatch<React.SetStateAction<String>>;
  score: Number;
  setScore: React.Dispatch<React.SetStateAction<Number>>;
  randomCountry: Number;
  setRandomCountry: React.Dispatch<React.SetStateAction<Number>>;
};

const countryContextDefaultValues: CountryContextType = {
  countries: [],
  setCountries: () => {},
  capital: "",
  setCapital: () => {},
  score: 0,
  setScore: () => {},
  randomCountry: 0,
  setRandomCountry: () => {},
};

const CountryContext = createContext(countryContextDefaultValues);

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [randomCountry, setRandomCountry] = useState<Number>(0);
  const [capital, setCapital] = useState<String>("");
  const [score, setScore] = useState<Number>(0);

  useEffect(() => {
    axios.get<Country[]>("api/getCountry").then((res) => {
      setCountries(res.data);
    });
    setRandomCountry(Math.floor(Math.random() * countries.length));
  }, [countries.length]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        capital,
        setCapital,
        score,
        setScore,
        randomCountry,
        setRandomCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
