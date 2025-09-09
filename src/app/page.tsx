import Image from "next/image";
import Header from '@/components/Header';
import Banner from "@/components/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
    </main>
  );
}
