const Work = () => {
    const data = [
        {src: 'typing', title: 'Typing animation library', url: 'typing-ind'},
        {src: 'netflix', title: 'Netflix landing page clone', url: 'netflix-clone'},
        {src: 'movie', title: 'Movie app with IMDB API', url: 'movie-app'},
        {src: 'game', title: 'Games: Find the card', url: 'find-the-card'}
    ]

    return (
        <div id="work" className="text-center mt-10 pt-10">
            <h2 className='font-bold text-md sm:text-lg lg:text-xl text-one tracking-widest'>PORTFOLIO</h2>
            <h1 className='font-main text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-4'>Featured Project</h1>
            <h3 className='text-five text-xs sm:text-sm lg:text-base'>
                You can see my other projects at my <a className="text-one underline" href={`https://github.com/madanadra`} 
                target="_blank" rel="noopener noreferrer">GitHub</a> repository.
            </h3>
            <div className='grid sm:grid-cols-2 mt-8 gap-3 sm:gap-4 lg:gap-5'>
                {data.map((d, i) => 
                    <div key={i}
                    className='rounded-lg aspect-video overflow-hidden relative'>
                        <img src={require(`../assets/${d.src}.jpg`)} alt={d.title} loading='lazy'
                        className='h-full w-full saturate-200 brightness-50' />
                        <div className="absolute inset-0 grid content-center z-10 p-5">
                            <h1 className='font-main text-xl sm:text-2xl lg:text-3xl mb-3'>
                                {d.title}
                            </h1>
                            <a href={`https://github.com/madanadra/${d.url}`} target="_blank" rel="noopener noreferrer"
                            className='text-one rounded bg-four py-2 px-3.5 w-max mx-auto text-xs sm:text-sm lg:text-base'>
                                Source code
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Work;