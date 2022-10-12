const Project = () => {
    const Frame = ({src, alt, url, title, sub}) => {
      return (
        <div className='image'>
          <img src={require(`../assets/${src}.jpg`)} alt={alt} loading='lazy' />
          <div className='text'>
            <h2>{title}</h2>
            <h3>{sub}</h3>
            <h3 className="visit"><a href={url} target="_blank" rel="noopener noreferrer">VISIT SITE <i class="fas fa-external-link-alt icon"></i></a></h3>
          </div>
        </div>
      );
    }

    return (
        <div className="project">
          <div className='box'>
            <h1>Projects</h1>
            <h3>You can see my other projects <a href='https://github.com/madanadra' target="_blank" rel="noopener noreferrer">here.</a></h3>
          </div>
          <div className='list'>
            <Frame src='medsos' alt='Medsos App' url='http://inmu-medsos.dgrande.com' title='Medsos'
            sub='Social media application where you can share your thoughts with the world.' />
            <Frame src='netflix' alt='Netflix Clone' url='https://madanadra.github.io/netflix-clone' title='Netflix clone'
            sub='Single Page Application (SPA) that duplicates Netflix landing page.' />
            <Frame src='movie' alt='Movie Info' url='https://madanadra.github.io/movie-app' title='Movie app'
            sub='An application that shares information about movies & series using IMDB API.' />
            <Frame src='game' alt='Find the card' url='https://madanadra.github.io/find-the-card' title='Find the card'
            sub='Find a green card, choose your level and get the highest score.' />  
          </div>
        </div>
    );
}
 
export default Project;