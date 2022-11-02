const Home = () => {
    return (
        <div className="home">
            <div className='box'>
                <h1>Hi, i'm Indra</h1>
                <h3>A Web Developer for Frontend, Backend & Fullstack who masters various programming languages 
                to build a modern and stable website with creativity and passion.</h3>
                <h2 onClick={() => document.getElementById('skill').scrollIntoView(true)}>Let's dive <i class="fas fa-arrow-down icon"></i></h2>
            </div>
            <div className='profile'>
                <img src={require('../assets/profile.png')} alt="Profile" />
                <div className='bg' />
                <div className='shadow' />
            </div>
        </div>
    );
}

export default Home;