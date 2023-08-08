import type { Metadata } from 'next'
import Card from './card'
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: 'Muhammad Laksmana Indra',
}

export default function Page() {
  const project = [
    {
      image: './package.png',
      imageMobile: './package-mobile.png',
      name: 'Typing Ind',
      description: 'Simple typing animation library for React.',
      link: 'https://www.npmjs.com/package/typing-ind',
    },
    {
      image: './api.png',
      imageMobile: './api-mobile.png',
      name: 'InGames',
      description: 'Quiz game with Open Trivia DB API.',
      link: 'https://ingames.vercel.app',
    }, 
    {
      image: './auth.png',
      imageMobile: './auth-mobile.png',
      name: 'Indragram',
      description: 'Instagram clone with Google OAuth.',
      link: 'https://indragram.vercel.app',
    }
  ]

  return (<>
    <Navbar name='Project' />
    <div className='sm:w-2/3 relative'>
      <h1 className="font-bold text-[3em] leading-tight sm:leading-snug px-5 sm:px-20">
        Hi! I&apos;m Indra, a Front-End Developer with React JS.
      </h1>
      <div className='absolute w-32 top-0 left-0 aspect-square bg-neutral-50 rounded-full blur-xl -z-10' />
      <div className='absolute w-32 bottom-0 right-0 aspect-square bg-gradient rounded-full blur-3xl opacity-30 -z-10' />
    </div>
    <div className='py-7 sm:py-14 mt-14'>
      <h1 className='font-semibold text-[1.15em] px-5 sm:px-20 mb-10'>Featured projects</h1>
      {project.map((item, i) => 
        <Card key={i} item={item} index={i} />
      )}
    </div>
    <h1 className='font-medium text-[1em] text-right p-5 sm:py-10 sm:px-20'>mlaksindra@gmail.com</h1>
  </>)
}