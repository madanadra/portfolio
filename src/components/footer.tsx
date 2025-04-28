import { PiPeace } from "react-icons/pi";

export default function Footer() {
    const sentence = [
        {
          url: 'https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b',
          text: 'Connect to me on',
          name: 'LinkedIn'
        },
        {
          url: 'https://github.com/madanadra',
          text: 'View my code in',
          name: 'GitHub'
        },
        {
          text: 'Email me at',
          name: 'mlaksindra@gmail.com'
        }
    ]

    return (
        <div className="grid gap-y-4 text-sm md:text-lg py-10 md:py-16">
            <div>
            {sentence.map((item, i) => <>
                <span className={`${!item.text && 'hidden'}`}>{item.text} </span>
                {item.url 
                ? <a key={i} href={item.url} target="_blank" className="hover:text-violet-700 underline">{item.name}</a>
                : <span>{item.name}</span>
                }
                <span className="last-of-type:hidden">. </span>
            </>)}
            <span> <PiPeace className='inline' /></span>
            </div>
            <h1>&copy; {new Date().getFullYear()} - Muhammad Laksmana Indra Portfolio</h1>
        </div>
    )
}