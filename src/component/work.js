const Work = () => {
    const data = [
        {src: 'typing', title: 'Typing animation library', url: 'typing-ind'},
        {src: 'netflix', title: 'Netflix landing page clone', url: 'netflix-clone'},
        {src: 'movie', title: 'Movie app with IMDB API', url: 'movie-app'},
        {src: 'game', title: 'Games: Find the card', url: 'find-the-card'}
    ]

    return (
        <div id="work" className="text-center mt-10 max-w-7xl mx-auto pt-10 px-5">
            <h2 className='font-bold text-md sm:text-lg lg:text-xl text-one tracking-widest'>PORTFOLIO</h2>
            <h1 className='font-main text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-4'>Featured Project</h1>
            <h3 className='text-five text-xs sm:text-sm lg:text-base'>
                You can see my other projects at my 
                <a className="text-one underline mx-1 sm:mx-[5px] lg:mx-1.5" href={`https://github.com/madanadra`} 
                target="_blank" rel="noopener noreferrer">GitHub</a> 
                repository.
            </h3>
            <div className='grid sm:grid-cols-2 mt-8 gap-3 sm:gap-4 lg:gap-5'>
                {data.map((d, i) => 
                    <div key={i}
                    className='rounded-lg border border-four aspect-video overflow-hidden grid content-center justify-center relative p-5'>
                        <img src={require(`../assets/${d.src}.jpg`)} alt={d.title} loading='lazy'
                        className='h-full w-full absolute brightness-[0.1]' />
                        <h1 className='font-main text-xl sm:text-2xl lg:text-3xl z-10 text-center'>
                            {d.title}
                        </h1>
                        <hr className='border-t z-10 border-four mt-3 mb-5' />
                        <a href={`https://github.com/madanadra/${d.url}`} target="_blank" rel="noopener noreferrer"
                        className='z-10 bg-four text-one py-2 px-3.5 w-max rounded mx-auto text-xs sm:text-sm lg:text-base'>
                            Source code
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Work;