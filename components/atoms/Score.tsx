"use client";

import { useCountryContext } from "@/context/countryContext";

const Score = () => {
  const { score } = useCountryContext();

  return (
    <span className="sm:self-start font-bold relative">
      Total Score: {String(score)}
    </span>
  );
};

export default Score;
