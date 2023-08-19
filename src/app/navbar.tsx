'use client'

import Link from "next/link"
import { menu } from "./data"

export default function Navbar({name}: {name: string}) {
    return (
        <div className="flex items-center justify-between gap-x-3 p-5 sm:py-10 sm:px-20 mb-14 text-[1em]">
            <Link href='/' className="relative">
                <h1 className="font-extrabold leading-none px-0.5">Indra</h1>
                <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient" />
            </Link>
            <div className='flex gap-x-7 font-semibold'>
                {menu.map((item, i) => 
                    <Link key={i} href={item.url}
                    className={`${name != item.name && 'text-neutral-500 hover:text-neutral-700'} py-0.5 leading-none`}>
                        {item.name}
                    </Link>
                )}
            </div>
        </div>
    )
}