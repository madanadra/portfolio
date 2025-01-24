import Layout from "../layout";
import { PiLayout, PiCode } from "react-icons/pi";
import Button from "../components/Button";
import { Link } from "react-router";
import Title from "../components/title";

export default function Project() {
    const Hero = () => {
        return (
            <div className='grid gap-y-6 py-10 md:py-16 relative'>
                <Title text={['my', ' project', ' list']} />
                <div className='absolute right-0 bottom-0 translate-y-1/2 pl-6 bg-neutral-50'>
                    <Button url='https://github.com/madanadra' text='view my code' />
                </div>
            </div>
        )
    }

    const List = () => {
        const list = [
            {
                title: 'typing ind',
                site: 'https://www.npmjs.com/package/typing-ind',
                gh: 'typing-ind'
            },
            {
                title: 'in games',
                site: 'https://ingames.vercel.app',
                gh: 'ingames'
            },
            {
                title: 'indragram',
                site: 'https://indragram.vercel.app/',
                gh: 'indragram'
            },
            {
                title: 'counter app',
                site: 'https://madanadra.github.io/counter-app/',
                gh: 'counter-app'
            },
            {
                title: 'drum machine',
                site: 'https://madanadra.github.io/drum-machine/',
                gh: 'drum-machine'
            },
            {
                title: 'image finder',
                site: 'https://madanadra.github.io/image-finder/',
                gh: 'image-finder'
            },
            {
                title: 'marvel character list',
                site: 'https://madanadra.github.io/marvel-app/',
                gh: 'marvel-app'
            },
            {
                title: 'music playlist',
                site: 'https://madanadra.github.io/music-playlist/',
                gh: 'music-playlist'
            },
            {
                title: 'notes app',
                site: 'https://madanadra.github.io/notes-app/',
                gh: 'notes-app'
            },
            {
                title: 'stopwatch app',
                site: 'https://madanadra.github.io/stopwatch-app/',
                gh: 'stopwatch-app'
            },
            {
                title: 'quotes app',
                site: 'https://madanadra.github.io/quotes-app/',
                gh: 'quotes-app'
            },
            {
                title: 'tic tac toe',
                site: 'https://madanadra.github.io/tictactoe/',
                gh: 'tictactoe'
            },
            {
                title: 'weather app',
                site: 'https://madanadra.github.io/weather-app/',
                gh: 'weather-app'
            },
            {
                title: 'productivity booster',
                site: 'https://madanadra.github.io/productivity-booster/',
                gh: 'productivity-booster'
            },
            {
                title: 'find the card',
                site: 'https://madanadra.github.io/find-the-card/',
                gh: 'find-the-card'
            },
            {
                title: 'netflix landing page clone',
                site: 'https://madanadra.github.io/netflix-clone/',
                gh: 'netflix-clone'
            },
            {
                title: 'web scraper',
                site: 'https://scraper-madanadra.vercel.app/',
                gh: 'scraper'
            },
        ]

        return (
            <div className='flex flex-wrap items-start gap-x-12 py-10 md:py-16'>
                {list.map((item, i) => 
                    <div key={i} className='w-full md:w-[calc(50%-24px)] flex justify-between items-center gap-x-6 uppercase py-4 
                    border-t border-neutral-950 nth-1:border-none md:nth-[-n+2]:border-none'>
                        <h1 className='font-ucase md:text-xl'>{item.title}</h1>
                        <div className='flex gap-x-4 text-xl md:text-3xl'>
                            <Link to={item.site} target="_blank" className='hover:text-violet-700'>
                                <PiLayout />
                            </Link>
                            <Link to={'https://github.com/madanadra/'+item.gh} target="_blank" className='hover:text-violet-700'>
                                <PiCode />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
      <Layout title="Project">
            <Hero />
            <List />
      </Layout>
    )
  }
  