import Link from "next/link";

export default function Card({item, index}: {item: {image: string, imageMobile: string, name: string, description: string, link: string}, index: number}) {
    return (
        <div id={`project` + index} 
        className={`${index%2 === 0 && 'bg-neutral-950 text-neutral-50'} 
        py-7 sm:py-10 px-5 overflow-hidden flex flex-col-reverse sm:flex-row gap-y-5 gap-x-10`}>
            <div className="sm:w-3/5 flex gap-x-3 ml-[-15%]">
                <img src={item.image} alt={item.name} className="w-[calc((296%*100/377)-6px)]" />
                <img src={item.imageMobile} alt={item.name} className="w-[calc((81%*100/377)-6px)]" />
            </div>
            <div className="grid content-center gap-y-3">
                <Link href={item.link} target="_blank" 
                className="font-bold text-[2em] leading-none underline w-max mb-0.5">{item.name}</Link>
                <h1 className="text-[1.5em] font-light leading-relaxed">{item.description}</h1>
            </div>
        </div>
    )
}