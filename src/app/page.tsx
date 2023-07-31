import type { Metadata } from 'next'
import Card from './card'
import Main from './main'
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: 'Muhammad Laksmana Indra',
}

export default function Page() {
  const project = [
    {
      image: './api.png',
      imageMobile: './api-mobile.png',
      name: 'InGames',
      description: 'Quiz game with Open Trivia DB API.',
      link: 'https://ingames.vercel.app',
    }, 
    {
      image: './clone.png',
      imageMobile: './clone-mobile.png',
      name: 'Netflix clone',
      description: 'Duplicate a Netflix web landing page.',
      link: 'https://madanadra.github.io/netflix-clone',
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
    <Main />
    <div className='py-7 sm:py-14 mt-14'>
      {project.map((item, i) => 
        <Card key={i} item={item} index={i} />
      )}
    </div>
  </>)
}