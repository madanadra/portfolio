import Link from "next/link"
import { playfairDisplay } from "../font"
import { navbar } from "../data"

export default function Navbar() {
    return (
        <header className='flex flex-wrap justify-between items-center gap-3 py-4'>
            <Link href='/' className={`${playfairDisplay.className} font-black text-xl sm:text-2xl lg:text-3xl uppercase text-violet-700`}>
            indra
            </Link>
            <nav className='inline text-sm sm:text-base lg:text-lg font-medium'>
                {navbar.map((item, i) => <>
                    <Link key={i} href={item.url} className="hover:text-violet-700">{item.name}</Link>
                    <span className="last:hidden"> / </span>
                </>)}
            </nav>
        </header>
    )
}