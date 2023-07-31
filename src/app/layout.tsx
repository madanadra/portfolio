import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Personal Portolio Muhammad Laksmana Indra',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full min-h-screen bg-neutral-50 text-neutral-950`}>
        {children}
      </body>
    </html>
  )
}
