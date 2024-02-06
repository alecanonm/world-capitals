"use client";

import { useCountryContext } from "@/context/countryContext";

const Capital = () => {
  const { countries, randomCountry } = useCountryContext();

  return (
    <h1 className="text-3xl m-2 text-center h-9 font-extrabold">
      {countries[Number(randomCountry)]?.country}
    </h1>
  );
};
export default Capital;
