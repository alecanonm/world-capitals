"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type Country = {
  id: Number;
  country: String;
  capital: String;
};

type CountryContextType = {
  country: Country;
  setCountry: React.Dispatch<React.SetStateAction<Country>>;
  capital: String;
  setCapital: React.Dispatch<React.SetStateAction<String>>;
  score: Number;
  setScore: React.Dispatch<React.SetStateAction<Number>>;
};

const countryContextDefaultValues: CountryContextType = {
  country: {
    id: 0,
    country: "",
    capital: "",
  },
  setCountry: () => {},
  capital: "",
  setCapital: () => {},
  score: 0,
  setScore: () => {},
};

const CountryContext = createContext(countryContextDefaultValues);

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [country, setCountry] = useState<Country>({
    id: 0,
    country: "",
    capital: "",
  });

  const [capital, setCapital] = useState<String>("");
  const [score, setScore] = useState<Number>(0);

  useEffect(() => {
    axios.get<Country>("api/getCountry").then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
    <CountryContext.Provider
      value={{ country, setCountry, capital, setCapital, score, setScore }}
    >
      {children}
    </CountryContext.Provider>
  );
};
