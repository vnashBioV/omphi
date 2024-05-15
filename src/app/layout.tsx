'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

//import components
import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname()

  const noHeaderFooterRoutes = ['/store', 'postDetail'];
  
  const hideHeaderFooter = noHeaderFooterRoutes.some(route => pathname.includes(route));

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${poppins.variable} overflow-x-hidden relative`}>
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
