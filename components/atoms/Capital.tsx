"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Capital = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios.get("api/getCountry").then((res) => {
      setCountry(res.data.capital);
    });
  }, []);

  return <h1 className="text-3xl h-9 font-extrabold">{country}</h1>;
};
export default Capital;
