import Link from 'next/link';
import { antonio } from '../font';
import { PiLayout, PiCode } from "react-icons/pi";

export default function ProjectListCard({item}: {item: {title: string, site: string, gh: string}}) {
    return (
        <div className='flex justify-between items-center gap-x-1.5 uppercase py-3'>
            <h1 className={`${antonio.className} sm:text-lg lg:text-xl`}>{item.title}</h1>
            <div className='flex gap-x-3 text-xl sm:text-2xl lg:text-3xl'>
                <Link href={item.site} target="_blank" className='hover:text-violet-700'><PiLayout /></Link>
                <Link href={'https://github.com/madanadra/'+item.gh} target="_blank" className='hover:text-violet-700'><PiCode /></Link>
            </div>
        </div>
    )
}