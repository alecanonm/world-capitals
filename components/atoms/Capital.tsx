"use client";

import { useCountryContext } from "@/context/countryContext";

const Capital = () => {
  const { country } = useCountryContext();

  return <h1 className="text-3xl h-9 font-extrabold">{country.capital}</h1>;
};
export default Capital;
