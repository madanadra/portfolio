import type { Metadata } from 'next'
import Navbar from '../navbar'
import More from './more'

export const metadata: Metadata = {
    title: 'About - Muhammad Laksmana Indra',
}

export default function Page() {
    return (<>
        <Navbar name='About' />
        <div className="grid gap-y-7 sm:w-2/3 px-5 sm:px-20">
            <h1 className="font-semibold text-[2em]">A bit about me</h1>
            <div className='grid gap-y-5 text-[1.5em] font-light leading-relaxed relative'>
                <h1>I&apos;m a Front-End developer with React JS. 
                I translate the design into a fast and stable website.</h1>
                <h1>Besides React JS, I also use Next JS, Tailwind CSS, Bootstrap, Material UI, and other tools. 
                Familiar with Back-End tools like Laravel and MySQL.</h1>
                <h1>Why did I choose the Front-End? because I love the beauty of UI and the precision of logic.</h1>
                <div className='absolute w-32 top-0 left-0 aspect-square bg-neutral-50 rounded-full blur-xl -z-10' />
                <div className='absolute w-32 bottom-0 right-0 aspect-square bg-gradient rounded-full blur-3xl opacity-30 -z-10' />
            </div>
        </div>
        <More />
    </>)
}