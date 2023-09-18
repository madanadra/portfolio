import type { Metadata } from 'next'
import { abrilFatface, antonio } from '../font'

export const metadata: Metadata = {
    title: 'About - Muhammad Laksmana Indra',
}

export default function Page() {
    const about = [
        {
            title: 'Who am i?',
            content: `Hi! I'm Indra, a web developer for front-end based in indonesia.
            I use React JS to translate design into a fast and stable website.`
        },
        {
            title: 'What I have?',
            content: `Besides React JS, I also use Next JS, Tailwind CSS, Bootstrap, Material UI, and other tools. 
            Familiar with Back-End tools like Laravel and MySQL.`
        },
        {
            title: 'Why Front-End?',
            content: `because I love the beauty of UI and the precision of logic.`
        }
    ]

    return (
        <div className='grid items-start divide-y md:divide-y-0 divide-neutral-950 md:grid-cols-2 gap-9 py-6'>
            <div className={`${antonio.className} text-7xl sm:text-8xl lg:text-9xl uppercase grid gap-y-3`}>
                <h1>more</h1>
                <h1 className={`${abrilFatface.className} italic lowercase text-violet-500`}>about</h1>
                <h1>me</h1>
            </div>
            <div className='grid divide-y divide-neutral-950'>
                {about.map((item, i) => 
                    <div key={i} className='grid gap-y-1.5 uppercase py-3'>
                        <h2 className={`${antonio.className} sm:text-lg lg:text-xl`}>{item.title}</h2>
                        <h1 className='font-medium text-xl sm:text-2xl lg:text-3xl leading-8 sm:leading-9 lg:leading-10'>{item.content}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}