import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <div className="text-black absolute top-[-6%] left-[0%] z-[-1] h-fit w-fit backdrop-blur-xl bg-white/30" style={{ filter: 'blur(3px)'}}>
        <Image src="/bg-pattern.svg" width={769} height={1209} alt="" className="objec-cover"/>
      </div>
      <Banner/>
      <About/>
      <Services/>
      <Posts/>
      <Contact/>
    </main>
  );
}
