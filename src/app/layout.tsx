'use client'
import "./globals.css";
import { useEffect, useState } from "react";
import { Open_Sans, Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Head from 'next/head';
import Script from "next/script";

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
  const noHeaderFooterRoutes = ['/store', 'postDetail', '/privacy', '/prices', '/StoreItem', '/payment-success'];
  const hideHeaderFooter = noHeaderFooterRoutes.some(route => pathname.includes(route));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure that this runs only on the client side
    setMounted(true);

    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');

      // Add or remove the margin depending on the route
      if (!hideHeaderFooter) {
        body?.classList.add('xl:mt-[118px]');
      } else {
        body?.classList.remove('xl:mt-[118px]');
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.querySelector('body')?.classList.remove('xl:mt-[118px]');
      }
    };
  }, [pathname, hideHeaderFooter]);

  return (
    <html lang="en">
      <head>
        <title>Omphile website</title>
        <meta name="description" content="Websites, Apps, and Digital Solutions Tailored Just for You" />
        <meta name="keywords" content="websites, web development, web design, applications, application development, seo, design, react, nextjs, javascript, html, css" />
        
      </head>
      <body className={`${poppins.variable} overflow-x-hidden relative`}>
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
