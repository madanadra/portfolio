export default function Title({text}: {text: string[]}) {
    return (
        <h1 className='text-balance text-6xl md:text-8xl uppercase'>
            {text.map((item, i) => 
                <span key={i} className={`${i % 2 === 0 ? 'font-ucase' : 'font-signa italic lowercase text-violet-700'}`}>{item}</span>
            )}
        </h1>
    )
}