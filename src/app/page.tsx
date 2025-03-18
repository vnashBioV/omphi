import type { Metadata } from "next";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";
import BackgroundArt from "@/components/BackgroundArt";

export const metadata: Metadata = {
  title: "Tshilitech | Your Local Software Company for Websites, Apps & Digital Solutions",
  description: "Tshilitech is your trusted software company specializing in website design, app development, and digital solutions.",
  keywords: "local software company, website design, app development, digital solutions, Tshilitech",
  robots: "index, follow",
  openGraph: {
    title: "Tshilitech – Web & App Development Experts",
    description: "We provide cutting-edge web and app development solutions. Get in touch for customized digital services!",
    url: "https://www.tshilitech.co.za",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Tshilitech Logo" }],
  }
};

export default function Home() {
  return (
    <main className="flex relative min-h-[100vh] flex-col items-center justify-between">
      <BackgroundArt />
      <Banner />
      <About />
      <Services />
      <Posts />
      <Contact />
    </main>
  );
}
