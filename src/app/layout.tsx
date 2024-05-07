'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'

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

  const noHeaderFooterRoutes = '/store';
  
  const hideHeaderFooter = pathname === noHeaderFooterRoutes

  return (
    <html lang="en">
      <body className={`${poppins.variable} overflow-x-hidden relative`}>
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
