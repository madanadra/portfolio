import { PiArrowUpRight, PiArrowDown } from "react-icons/pi";
import Link from "next/link";
import { playfairDisplay } from '../font';

export default function Title({href, name}: {href?: string, name: string}) {
    const Content = () => {
        return (
            <div className={`${href && 'hover:text-violet-700'} flex gap-x-3 justify-between items-center py-1.5`}>
                <h2 className={`${playfairDisplay.className} font-semibold text-xs sm:text-sm lg:text-base uppercase`}>{name}</h2>
                <div className='sm:text-lg lg:text-xl'>
                    {href 
                    ? <PiArrowUpRight />
                    : <PiArrowDown />
                    }
                </div>
            </div>
        )
    }

    if (href) {
        return (
            <Link href={href}>
                <Content />
            </Link>
        )
    }

    return (
        <Content />
    )
}