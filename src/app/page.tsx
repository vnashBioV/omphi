import type { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";
import BackgroundArt from "@/components/BackgroundArt";
import Showcase from '@/components/Showcase';

export const metadata: Metadata = {
  title: "Tshilitech | Your Local Software Company for Websites, Apps & Digital Solutions",
  description: "Tshilitech is your trusted software company specializing in website design, app development, and digital solutions. Contact us for tailored software services.",
  keywords: "local software company, website design, app development, digital solutions, Tshilitech, software services, custom software solutions",
  robots: "index, follow",
  openGraph: {
    title: "Tshilitech – Web & App Development Experts",
    description: "We provide cutting-edge web and app development solutions. Get in touch for customized digital services!",
    url: "https://www.tshilitech.co.za",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Tshilitech Logo" }]
  }
};

export default function Home() {
  return (
    <main className="flex relative min-h-[100vh] flex-col items-center justify-between">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8346213375529687" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tshilitech",
            "url": "https://www.tshilitech.co.za",
            "logo": "https://www.tshilitech.co.za/logo.png",
            "description": "Tshilitech is a leading software company offering web development, app development, and custom software solutions.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+27769201799",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/tshilitech",
            ]
          })
        }} />
      </head>
      <BackgroundArt/>
      <Banner/>
      <About/>
      <Services/>
      <Posts/>
      <Contact/>
    </main>
  );
}
