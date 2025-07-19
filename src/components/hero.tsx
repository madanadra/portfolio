export default function Hero() {
    return (
      <div className='grid gap-y-10 py-10 md:py-16'>
        <h1 className='text-balance text-6xl md:text-8xl'>
            <span className='font-ucase uppercase'>frontend</span>
            <span className='font-signa italic lowercase text-violet-700'> web </span>
            <span className='font-ucase uppercase'>developer</span>
        </h1>
        <h1 className='text-xl md:text-3xl'>
          I&apos;m Indra, a Web Developer for Frontend based in Indonesia.
          Use passion to translate design into a fast, secure, and stable website.
        </h1>
        <img src='/images/tech.jpg' alt='Tech stack'
        className="w-full aspect-32/9 rounded-3xl object-cover object-center mt-2" />
      </div>
    )
}