import Link from "next/link"
import { PiPeace } from "react-icons/pi";

export default function Footer({menu}: {menu: {url?: string, text?: string, name: string}[]}) {
    return (
        <div className="text-sm sm:text-base lg:text-lg font-medium py-4">
            {menu.map((item, i) => <>
                <span className={`${!item.text && 'hidden'}`}>{item.text} </span>
                {item.url 
                ? <Link key={i} href={item.url} target="_blank" className="hover:text-violet-700 underline">{item.name}</Link>
                : <span>{item.name}</span>
                }
                <span className="last-of-type:hidden">. </span>
            </>)}
            <span> <PiPeace className='inline' /></span>
        </div>
    )
}