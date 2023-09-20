import type { Metadata } from 'next'
import Card from './card'
import { playfairDisplay, antonio } from './font';
import { PiArrowUpRight, PiArrowDown, PiHandWaving, PiGlobe } from "react-icons/pi";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Muhammad Laksmana Indra',
}

export default function Page() {
  const projects = [
    {
      title: 'typing ind', 
      url: 'https://www.npmjs.com/package/typing-ind', 
      img: './package.png', 
      desc: `This is simple typing animation library for React. 
      Only 1 tag component <Typed /> & 5 properties type, backspace, delay, duration, cursor.`, 
      tech: ['npm', 'react js', 'typescript', 'create-react-library']
    },
    {
      title: 'in games', 
      url: 'https://ingames.vercel.app', 
      img: './games.png', 
      desc: `Quiz game with 24 categories, 3 difficulty levels, and 2 question types. 
      Race against 10 seconds and achieve your highest score.`, 
      tech: ['next js', 'react js', 'tailwind css', 'typescript', 'open tdb api']
    },
  ]

  return (<>
    <h1 className={`${antonio.className} uppercase text-7xl sm:text-8xl lg:text-9xl py-6`}>
      front<span className={`${playfairDisplay.className} italic lowercase text-violet-700`}>-end</span> developer
    </h1>
    <div className='grid items-center md:grid-cols-2 gap-9 py-6'>
      <img src='./bg.jpg' alt='Background Image' className='w-full aspect-square object-cover object-center rounded-3xl' />
      <div className='grid content-center gap-y-6'>
        <div className='flex items-center gap-x-3 text-3xl sm:text-4xl lg:text-5xl'>
          <PiHandWaving />
          <PiGlobe />
        </div>
        <h2 className='font-medium text-xl sm:text-2xl lg:text-3xl uppercase leading-8 sm:leading-9 lg:leading-10'>
          i&apos;m indra, a web developer for front-end based in indonesia.
          I use React JS to translate design into a fast and stable website.
        </h2>
      </div>
    </div>
    <Link href='/about' className='flex gap-x-3 justify-between items-center py-1.5 hover:text-violet-700'>
      <h2 className={`${playfairDisplay.className} font-semibold text-xs sm:text-sm lg:text-base uppercase`}>more about me</h2>
      <PiArrowUpRight className='sm:text-lg lg:text-xl' />
    </Link>
    <div className='flex gap-x-3 justify-between items-center py-1.5'>
      <h2 className={`${playfairDisplay.className} font-semibold text-xs sm:text-sm lg:text-base uppercase`}>featured projects</h2>
      <PiArrowDown className='sm:text-lg lg:text-xl' />
    </div>
    {projects.map((item, i) => 
      <Card key={i} item={item} num={i+1} />
    )}
    <Link href='/project' className='flex gap-x-3 justify-between items-center py-1.5 hover:text-violet-700'>
      <h2 className={`${playfairDisplay.className} font-semibold text-xs sm:text-sm lg:text-base uppercase`}>my project list</h2>
      <PiArrowUpRight className='sm:text-lg lg:text-xl' />
    </Link>
  </>)
}