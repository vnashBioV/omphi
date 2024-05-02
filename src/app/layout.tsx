import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

//import components
import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Tshilitech",
  description: "Designing Websites, Apps, and Digital Solutions Tailored Just for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
