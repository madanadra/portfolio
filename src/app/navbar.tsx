'use client'

import Link from "next/link"

export default function Navbar({name}: {name: string}) {
    const menu = [
        {
            url: '/',
            name: 'Project'
        },
        {
            url: '/about',
            name: 'About'
        }
    ]

    return (
        <div className="flex items-center justify-between gap-x-3 p-5 sm:py-10 sm:px-20 mb-14">
            <Link href='/' className="font-bold text-[1.25em]">Indra.</Link>
            <div className='flex gap-x-7 font-medium text-[1em]'>
                {menu.map((item, i) => 
                    <Link key={i} href={item.url}
                    className={`${name != item.name && 'text-neutral-500 hover:text-neutral-700'} font-medium py-0.5`}>
                        {item.name}
                    </Link>
                )}
            </div>
        </div>
    )
}