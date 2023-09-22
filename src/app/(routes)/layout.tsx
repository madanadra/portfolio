import '../globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import { inter } from '../font';

export const metadata: Metadata = {
  description: 'Personal Portfolio Muhammad Laksmana Indra',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='p-4 w-full min-h-screen bg-neutral-50 text-neutral-950'>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
