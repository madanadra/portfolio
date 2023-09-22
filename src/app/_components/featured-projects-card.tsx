import Link from "next/link";
import { playfairDisplay, antonio, spaceGrotest } from "../font";
import Image from "next/image";

export default function FeaturedProjectsCard({item, num}: {item: {title: string, url: string, img: any, desc: string, tech: string[]}, num: number}) {
    return (
        <div className='grid md:grid-cols-2 gap-9 py-6'>
            <div className={`${num % 2 === 0 && 'md:order-last'} grid gap-y-6 content-end`}>
                <div className='flex items-center gap-x-3'>
                    <h3 className={`${spaceGrotest.className} font-light text-3xl sm:text-4xl lg:text-5xl`}>*{num}~</h3>
                    <Link href={item.url} target="_blank" 
                    className={`${antonio.className} sm:text-lg lg:text-xl uppercase 
                    rounded-full py-1.5 px-3 border border-neutral-950 hover:text-violet-700 hover:border-violet-700`}>
                        visit site
                    </Link>
                </div>
                <h1 className='font-medium sm:text-lg lg:text-xl uppercase leading-7 sm:leading-8 lg:leading-8'>
                    <span className={`${antonio.className} font-normal text-5xl sm:text-6xl lg:text-7xl`}>
                        {item.title}
                    </span> - {item.desc}
                </h1>
                <div className='flex flex-wrap gap-1.5 text-sm sm:text-base lg:text-lg'>
                    {item.tech.map((tech, i) => <>
                        <Link href={`https://www.google.com/search?q=`+tech} target="_blank" key={i} className={`${playfairDisplay.className} 
                        font-medium italic hover:text-violet-700`}>
                            {tech}
                        </Link>
                        <span className="last:hidden"> | </span>
                    </>)}
                </div>
            </div>
            <div className='relative w-full aspect-square rounded-3xl overflow-hidden'>
                <Image src={item.img} alt='Background Image' priority fill placeholder="blur" className="object-cover object-center" />
            </div>
        </div>
    )
}