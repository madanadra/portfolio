const Project = () => {
    const data = [
        {
            src: 'typing', 
            title: 'Typing animation library', 
            url: 'typing-ind',
            detail: 'React library for typing animation. 1 tag component & 5 property types.'
        },
        {  
            src: 'movie', 
            title: 'Movie app with IMDB API',
            url: 'movie-app',
            detail: 'Inspired by Disney+ Hotstar. Contains information about movies & series.'
        },
        {
            src: 'game', 
            title: 'Games: Find the card', 
            url: 'find-the-card',
            detail: 'Choose a level, find a green card, get the highest score & enjoy the game.'
        }
    ]

    return (
        <div className="bg-three text-one pb-9 sm:pb-6">
            <div className="max-w-6xl mx-auto px-5 py-9 sm:py-12">
                <div className='flex flex-wrap justify-between items-center font-semibold'>
                    <h1 className='text-md sm:text-lg lg:text-xl'>Featured Projects</h1>
                    <a href='https://github.com/madanadra' target="_blank" rel="noopener noreferrer" 
                    className="rounded bg-one text-three text-base sm:text-md lg:text-lg w-max py-1 px-2.5 flex items-center">
                        <i className="fab fa-github mr-2" /> All
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-9 gap-x-6 mt-7">
                    {data.map((d, i) => 
                        <div key={i} className='grid content-start'>
                            <div className='aspect-video rounded bg-two overflow-hidden'>
                                <img src={require(`../assets/${d.src}.jpg`)} alt={d.title} loading='lazy'
                                className='w-full h-full saturate-200' />
                            </div>
                            <h1 className='text-lg sm:text-xl lg:text-2xl font-semibold mt-3.5'>{d.title}</h1>
                            <h2 className="text-two text-sm sm:text-base lg:text-lg mt-1 mb-3">{d.detail}</h2>
                            <a href={`https://github.com/madanadra/${d.url}`} target="_blank" rel="noopener noreferrer"
                            className='font-bold underline text-one text-xs sm:text-sm lg:text-base uppercase w-max'>
                                Source code
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;