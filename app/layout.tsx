import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "@/styles/globals.css";
import axios from "axios";
import { CountryProvider } from "@/context/countryContext";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World Capitals",
  description:
    "A web applications to answer with the country capitals if you know it. Let's see how many capitals do you know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col bg-hero-pattern bg-center">
          <CountryProvider>{children}</CountryProvider>
        </div>
      </body>
    </html>
  );
}
