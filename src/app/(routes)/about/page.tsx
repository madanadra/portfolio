import type { Metadata } from 'next'
import Header from '@/app/_components/header'
import MoreAboutCard from '@/app/_components/more-about-card'
import { moreAbout } from '@/app/data'

export const metadata: Metadata = {
    title: 'About - Muhammad Laksmana Indra',
}

export default function Page() {
    return (
        <div className='grid content-start divide-y divide-neutral-950 border-y border-neutral-950 page-animation'>
            <div className='grid items-start md:grid-cols-2 gap-9 py-6'>
                <Header grid text={['more', 'about', 'me']} />
                <div className='grid divide-y divide-neutral-950'>
                    {moreAbout.map((item, i) => 
                        <MoreAboutCard key={i} item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}