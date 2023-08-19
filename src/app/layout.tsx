import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Personal Portolio Muhammad Laksmana Indra',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${font.className} w-full min-h-screen bg-neutral-50 text-neutral-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
