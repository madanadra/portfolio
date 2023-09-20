import type { Metadata } from 'next'
import { playfairDisplay, antonio } from '../font'
import { PiLayout, PiCode } from "react-icons/pi";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Project - Muhammad Laksmana Indra',
}

export default function Page() {
    const project = [
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
    ]

    return (
        <div className='grid items-start md:grid-cols-2 divide-y md:divide-y-0 divide-neutral-950 gap-9 py-6'>
            <div className={`${antonio.className} text-7xl sm:text-8xl lg:text-9xl uppercase grid gap-y-3`}>
                <h1>my</h1>
                <h1 className={`${playfairDisplay.className} italic lowercase text-violet-700`}>project</h1>
                <h1>list</h1>
            </div>
            <div className='grid divide-y divide-neutral-950'>
                {project.map((item, i) => 
                    <div key={i} className='flex justify-between items-center gap-x-1.5 uppercase py-3'>
                        <h1 className={`${antonio.className} sm:text-lg lg:text-xl`}>{item.title}</h1>
                        <div className='flex gap-x-3 text-xl sm:text-2xl lg:text-3xl'>
                            <Link href={item.site} target="_blank" className='hover:text-violet-700'><PiLayout /></Link>
                            <Link href={'https://github.com/madanadra/'+item.gh} target="_blank" className='hover:text-violet-700'><PiCode /></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}