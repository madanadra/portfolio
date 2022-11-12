const Work = () => {
    const data = [
        {src: 'typing', title: 'Typing animation library', url: 'typing-ind'},
        {src: 'netflix', title: 'Netflix landing page clone', url: 'netflix-clone'},
        {src: 'movie', title: 'Movie app with IMDB API', url: 'movie-app'},
        {src: 'game', title: 'Games: Find the card', url: 'find-the-card'}
    ]

    return (
        <div id="work" className="text-center mt-10 pt-10">
            <h2 className='font-bold text-md sm:text-lg lg:text-xl text-four tracking-widest'>PORTFOLIO</h2>
            <h1 className='font-main text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-4'>Featured Project</h1>
            <h3 className='text-three text-xs sm:text-sm lg:text-base'>
                You can see my other projects at my <a className="text-four underline" href={`https://github.com/madanadra`} 
                target="_blank" rel="noopener noreferrer">GitHub</a> repository.
            </h3>
            <div className='grid sm:grid-cols-2 mt-8 gap-3 sm:gap-4 lg:gap-5'>
                {data.map((d, i) => 
                    <div key={i}
                    className='aspect-video relative'>
                        <img src={require(`../assets/${d.src}.jpg`)} alt={d.title} loading='lazy'
                        className='h-full w-full rounded-lg brightness-75' />
                        <div className="absolute left-0 right-0 bottom-0 z-10 pt-5 px-5 work">
                            <h1 className='font-main text-xl sm:text-2xl lg:text-3xl'>
                                {d.title}
                            </h1>
                        </div>
                        <a href={`https://github.com/madanadra/${d.url}`} target="_blank" rel="noopener noreferrer"
                        className='tracking-widest rounded bg-four py-2 px-3.5 text-xs sm:text-sm lg:text-base absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'>
                            SOURCE CODE
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Work;