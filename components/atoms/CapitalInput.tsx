"use client";
import React from "react";
import { useCountryContext } from "@/context/countryContext";

const CapitalInput = () => {
  const { capital, setCapital } = useCountryContext();

  const handleChange = function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setCapital(e.target.value);
  };

  return (
    <input
      type="text"
      value={capital.toString()}
      onChange={handleChange}
      placeholder="Enter the capital"
      className="text-center border-2 p-2 rounded-md ring-yellow-500 ring-2 outline-yellow-500 cursor-pointer"
    />
  );
};

export default CapitalInput;
