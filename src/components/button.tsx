export default function Button({id, href, text}: {id: string, href: string, text: string}) {
    return (
        <div id={id} className="flex items-center gap-x-4 py-10 md:py-16">
            <hr className="flex-1 border-t border-neutral-950"/>
            <a href={href} className='font-ucase md:text-xl uppercase outline-0
            rounded-full py-2 px-5 bg-neutral-950 text-neutral-50 hover:bg-violet-700 w-max'>
                {text}
            </a>
            <hr className="flex-1 border-t border-neutral-950"/>
        </div>
    )
}