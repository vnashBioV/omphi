'use client'
import "./globals.css";
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Head from 'next/head';

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

  const noHeaderFooterRoutes = ['/store', 'postDetail', '/privacy', '/prices'];
  
  const hideHeaderFooter = noHeaderFooterRoutes.some(route => pathname.includes(route));

  return (
    <html lang="en">
      <head>
        <title>tshilitech</title>
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
