import * as React from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ali Gorji</title>
        <meta name="description" content="Portfolio of Ali Gorji" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav>navigation</nav>

      <main className="container mx-auto max-w-prose px-7 py-10 md:px-0">
        {children}
      </main>
      <footer className="container mx-auto max-w-prose px-7 pb-10 md:px-0">
        footer
      </footer>
    </>
  );
}
