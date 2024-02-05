import type { Metadata } from "next";
import { HomePgae } from "@/components/pages";

export const metadata: Metadata = {
  title: "World Capitals",
  description:
    "A web applications to answer with the country capitals if you know it. Let's see how many capitals do you know",
};
const Home = () => <HomePgae />;

export default Home;
