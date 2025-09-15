import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Work from "@/components/Work"

export const metadata: Metadata = {
  title: "Omphile website ",
  description: "website design, app development, and digital solutions.",
  keywords: ", website design, app development, digital solutions, Tshilitech",
  robots: "index, follow",
  openGraph: {
    title: "Omphile",
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="flex relative min-h-[100vh] flex-col items-center justify-between">
      <Banner />
      <Services />
      <Work/>
      <Contact />
    </main>
  );
}
