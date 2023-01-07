import * as React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ali Gorji</title>
        <meta name="description" content="Portfolio of Ali Gorji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      <main className="container mx-auto max-w-prose px-7 py-6 md:py-10 md:px-0 min-h-[calc(100vh-180px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
