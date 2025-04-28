export default function Button({id, href, text}: {id: string, href: string, text: string}) {
    return (
        <div id={id} className="flex flex-wrap justify-center gap-8 py-10 md:py-16">
            <a href={href} className='font-ucase md:text-xl uppercase 
            rounded-full py-2 px-5 bg-neutral-950 text-neutral-50 hover:bg-violet-700 w-max'>
                {text}
            </a>
        </div>
    )
}