"use client";

import { useCountryContext } from "@/context/countryContext";
import axios from "axios";
import React from "react";

const SubmitButton = () => {
  const { setCountry } = useCountryContext();

  const handleSubmit = function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    axios.get("api/getCountry").then((res) => {
      setCountry(res.data);
    });
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
