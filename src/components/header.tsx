export default function Header() {
    return (
        <header className='flex flex-wrap justify-between items-center gap-4 py-5 border-b border-neutral-950'>
            <h1 className='font-signa text-xl md:text-3xl italic lowercase text-violet-700'>indra</h1>
            <nav className='flex font-ucase uppercase items-center gap-x-4 text-sm md:text-lg'>
              <h1 onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth"})} 
              className="hover:text-violet-700 cursor-pointer">About</h1>
              <h1 onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth"})} 
              className="hover:text-violet-700 cursor-pointer">Work</h1>
            </nav>
        </header>
    )
}