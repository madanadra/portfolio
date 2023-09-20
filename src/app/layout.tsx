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
  const navbar = [
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

  const footer = [
    {
      url: 'https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b',
      text: 'Connect to me on',
      name: 'LinkedIn'
    },
    {
      url: 'https://github.com/madanadra',
      text: 'View my code in',
      name: 'GitHub'
    },
    {
      text: 'Email me at',
      name: 'mlaksindra@gmail.com'
    }
  ]

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <main className='grid content-start divide-y divide-neutral-950 p-4 w-full min-h-screen bg-neutral-50 text-neutral-950'>
          <Navbar menu={navbar} />
          {children}
          <Footer menu={footer} />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
