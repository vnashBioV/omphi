import type { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";
import BackgroundArt from "@/components/BackgroundArt";

export const metadata: Metadata = {
  title: "Tshilitech",
  description: "Designing Websites, Apps, and Digital Solutions Tailored Just for You",
};

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <BackgroundArt/>
      <Banner/>
      <About/>
      <Services/>
      <Posts/>
      <Contact/>
    </main>
  );
}
