import type { Metadata } from 'next'
import { abrilFatface, antonio } from '../font'
import { PiArrowUpRight } from "react-icons/pi";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Project - Muhammad Laksmana Indra',
}

export default function Page() {
    const project = [
        {
            title: 'typing ind',
            url: 'https://www.npmjs.com/package/typing-ind'
        },
        {
            title: 'in games',
            url: 'https://ingames.vercel.app'
        },
        {
            title: 'indragram',
            url: 'https://indragram.vercel.app/'
        },
        {
            title: 'counter app',
            url: 'https://madanadra.github.io/counter-app/'
        },
        {
            title: 'drum machine',
            url: 'https://madanadra.github.io/drum-machine/'
        },
        {
            title: 'image finder',
            url: 'https://madanadra.github.io/image-finder/'
        },
        {
            title: 'marvel character list',
            url: 'https://madanadra.github.io/marvel-app/'
        },
        {
            title: 'music playlist',
            url: 'https://madanadra.github.io/music-playlist/'
        },
        {
            title: 'notes app',
            url: 'https://madanadra.github.io/notes-app/'
        },
        {
            title: 'stopwatch app',
            url: 'https://madanadra.github.io/stopwatch-app/'
        },
        {
            title: 'quotes app',
            url: 'https://madanadra.github.io/quotes-app/'
        },
        {
            title: 'tic tac toe',
            url: 'https://madanadra.github.io/tictactoe/'
        },
        {
            title: 'weather app',
            url: 'https://madanadra.github.io/weather-app/'
        },
        {
            title: 'productivity booster',
            url: 'https://madanadra.github.io/productivity-booster/'
        },
        {
            title: 'find the card',
            url: 'https://madanadra.github.io/find-the-card/'
        },
    ]

    return (
        <div className='grid items-start md:grid-cols-2 divide-y md:divide-y-0 divide-neutral-950 gap-9 py-6'>
            <div className={`${antonio.className} text-7xl sm:text-8xl lg:text-9xl uppercase grid gap-y-3`}>
                <h1>my</h1>
                <h1 className={`${abrilFatface.className} italic lowercase text-violet-700`}>project</h1>
                <h1>list</h1>
            </div>
            <div className='grid divide-y divide-neutral-950'>
                {project.map((item, i) => 
                    <Link href={item.url} target="_blank" key={i} className='flex justify-between items-center gap-x-1.5 uppercase py-3 hover:text-violet-700'>
                        <h1 className={`${antonio.className} sm:text-lg lg:text-xl`}>{item.title}</h1>
                        <PiArrowUpRight className='text-xl sm:text-2xl lg:text-3xl' />
                    </Link>
                )}
            </div>
        </div>
    )
}