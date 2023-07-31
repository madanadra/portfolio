'use client'

export default function Main() {
    const scroll = (id: string) => {
        const point: any = document.getElementById(id); 
        window.scrollTo({
            top: point.offsetTop,
            behavior:"smooth"
        });
    };

    return (
        <div className="grid gap-y-14 px-5 sm:px-20">
            <h1 className="font-black text-[3em] sm:w-2/3 leading-tight sm:leading-snug">
                Hi, I'm Indra, a Frontend Developer with React JS.
            </h1>
            <h2 onClick={() => scroll('project0')} className="font-light text-[1.5em] cursor-pointer">
                Scroll to explore
            </h2>
        </div>
    )
}