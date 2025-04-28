export default function Header() {
    return (
        <header className='flex flex-wrap justify-between items-center gap-4 py-5'>
            <h1 className='font-signa font-black text-xl md:text-3xl uppercase text-violet-700'>indra</h1>
            <nav className='flex gap-x-4 text-sm md:text-lg font-medium'>
              <h1 onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth"})} className="italic hover:text-violet-700 cursor-pointer">about</h1>
              <h1>/</h1>
              <h1 onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth"})} className="italic hover:text-violet-700 cursor-pointer">work</h1>
            </nav>
        </header>
    )
}