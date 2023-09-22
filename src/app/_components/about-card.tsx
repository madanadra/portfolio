'use client'

import tech from '../../../public/tech.jpg'
import Image from "next/image";
import { PiHandWaving, PiGlobe } from "react-icons/pi";

export default function AboutCard() {
    return (
        <div className='grid items-center md:grid-cols-2 gap-9 py-6'>
            <div className='relative w-full aspect-square rounded-3xl overflow-hidden'>
                <Image src={tech} alt='Background Image' priority fill placeholder="blur" className="object-cover object-center" />
            </div>
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
    )
}