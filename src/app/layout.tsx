import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from './navbar';
import Footer from './footer';
import { inter } from './font';

export const metadata: Metadata = {
  description: 'Personal Portolio Muhammad Laksmana Indra',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  const menu: {
    url: string,
    name: string,
  }[] = [
    {
      url: '/',
      name: 'home'
    },
    {
      url: '/about',
      name: 'about'
    },
    {
      url: '/project',
      name: 'project'
    }
  ]

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <main className='grid content-start divide-y divide-neutral-950 p-4 w-full min-h-screen bg-neutral-50 text-neutral-950'>
          <Navbar menu={menu} />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
