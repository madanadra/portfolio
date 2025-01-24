import { Link } from "react-router";

export default function Button({url, text, mt}: {url: string, text: string, mt?: boolean}) {
    return (
        <Link to={url} className={`font-ucase md:text-xl uppercase 
        rounded-full py-2 px-5 bg-neutral-950 text-neutral-50 hover:bg-violet-700 w-max ${mt ? 'mt-2' : ''}`}>
            {text}
        </Link>
    )
}