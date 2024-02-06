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
};

const countryContextDefaultValues: CountryContextType = {
  country: {
    id: 0,
    country: "",
    capital: "",
  },
  setCountry: () => {},
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

  useEffect(() => {
    axios.get<Country>("api/getCountry").then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
