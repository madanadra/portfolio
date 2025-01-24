import { Link } from "react-router";
import Title from "../components/title";
import Layout from "../layout";
import { PiHandWaving, PiGlobe } from "react-icons/pi";
import Button from "../components/Button";

export default function Home() {
  const Hero = () => {
    return (
      <div className='grid gap-y-6 py-10 md:py-16'>
        <Title text={['frontend', ' web', ' developer']} />
        <img src='/images/tech.jpg' alt='Tech stack'
        className="w-full aspect-[32/9] rounded-3xl object-cover object-center mt-2" />
      </div>
    )
  }

  const Brief = () => {
    return (
      <div className='grid gap-y-6 py-10 md:py-16'>
        <div className='flex items-center gap-x-4 text-3xl md:text-5xl'>
          <PiHandWaving />
          <PiGlobe />
        </div>
        <h2 className='text-xl md:text-3xl'>
          I&apos;m Indra, a Web Developer for Frontend based in Indonesia.
          I use React JS to translate design into a fast and stable website.
        </h2>
        <Button url='/about' text='more about me' mt />
      </div>
    )
  }

  const Featured = () => {
    const project = [
      {
        title: 'typing ind', 
        visit: 'https://www.npmjs.com/package/typing-ind', 
        source: 'https://github.com/madanadra/typing-ind',
        img: '/images/typing-ind.jpg', 
        desc: `This is simple typing animation library for React. 
        Only 1 tag component (<Typed />) & 5 properties (type, backspace, delay, duration, cursor).`, 
        tech: ['npm', 'react js', 'typescript', 'create-react-library']
      },
      {
        title: 'in games', 
        visit: 'https://ingames.vercel.app',
        source: 'https://github.com/madanadra/ingames', 
        img: '/images/in-games.jpg', 
        desc: `Retro quiz game with 24 categories, 3 difficulty levels, and 2 question types. 
        Race against 10 seconds and achieve your highest score.`, 
        tech: ['next js', 'react js', 'tailwind css', 'typescript', 'open tdb api']
      },
    ]

    return (
      <div className='grid gap-y-16 py-10 md:py-16'>
        <h1 className='font-ucase md:text-xl uppercase mb-2'>Featured projects</h1>
        {project.map((item, i) => 
          <div key={i} className='grid md:grid-cols-2 gap-x-12 gap-y-8'>
            <img src={item.img} alt='Project image'
            className="w-full aspect-square rounded-3xl object-cover object-center" />
            <div className='grid gap-y-6 content-center'>
              <div className='flex items-center gap-x-6'>
                <Button url={item.visit} text='visit site' />
                <Link to={item.source} target="_blank" 
                className='font-ucase md:text-xl uppercase hover:text-violet-700'>
                  source code
                </Link>
              </div>
              <h1 className='font-ucase text-5xl md:text-7xl uppercase'>
                {item.title}
              </h1>
              <h1 className='text-lg md:text-2xl'>{item.desc}</h1>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => <Link to={`https://www.google.com/search?q=`+tech} target="_blank" key={i} 
                className='text-sm md:text-lg hover:text-violet-700 underline'>{tech}</Link>)}
              </div>
            </div>
          </div>
        )}
        <Button url='/project' text='my project list' mt />
      </div>
    )
  }

  return (
    <Layout title="Home">
        <Hero />
        <Brief />
        <Featured />
    </Layout>
  )
}
