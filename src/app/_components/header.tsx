import { playfairDisplay, antonio } from '../font';

export default function Header({grid, text}: {grid?: boolean, text: string[]}) {
    return (
        <div className={`${grid && 'grid gap-y-3'} text-7xl sm:text-8xl lg:text-9xl uppercase`}>
            {text.map((item, i) => 
                <span key={i} className={`${i % 2 === 0 ? antonio.className : `${playfairDisplay.className} italic lowercase text-violet-700`}`}>{item}</span>
            )}
        </div>
    )
}