import { antonio } from "../font"

export default function MoreAboutCard({item}: {item: {title: string, content: string}}) {
    return (
        <div className='grid gap-y-1.5 uppercase py-3'>
            <h2 className={`${antonio.className} sm:text-lg lg:text-xl`}>{item.title}</h2>
            <h1 className='font-medium text-xl sm:text-2xl lg:text-3xl leading-8 sm:leading-9 lg:leading-10'>{item.content}</h1>
        </div>
    )
}