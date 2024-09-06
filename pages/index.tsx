
import { Inter } from "next/font/google";
import MainPage from "@/components/Home";
import About from "@/components/About";
import Events from "@/components/Events";
import Galery from "@/components/Galery";
import Movies from "@/components/Movies";
import Contact from "@/components/Contact";
import Musicians from "@/components/Musicians";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainPage />
      <Events />
      <About/>
      <Musicians />
      <Galery />
      <Movies />
      <Contact />
    </>
  );
}
