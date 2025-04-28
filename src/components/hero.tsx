export default function Hero() {
    return (
      <div className='grid gap-y-10 py-10 md:py-16'>
        <h1 className='text-balance text-6xl md:text-8xl uppercase'>
            <span className='font-ucase'>frontend</span>
            <span className='font-signa italic lowercase text-violet-700'> web </span>
            <span className='font-ucase'>developer</span>
        </h1>
        <h1 className='text-xl md:text-3xl'>
          I&apos;m Indra, a Web Developer for Frontend based in Indonesia.
          I use React JS to translate design into a fast and stable website.
        </h1>
        <img src='/images/tech.jpg' alt='Tech stack'
        className="w-full aspect-[32/9] rounded-3xl object-cover object-center mt-2" />
      </div>
    )
}