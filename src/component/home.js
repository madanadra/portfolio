const Home = ({scroll}) => {
    return (
        <div id="home" className="min-h-screen flex items-center mx-auto relative">
            <img className='absolute w-full h-full' 
            src={require('../assets/home.svg').default} 
            alt="Bg home" />
            <div className="text-center px-5 mx-[5%] max-w-7xl z-10">
                <h1 className='font-main font-bold text-5xl sm:text-6xl lg:text-7xl text-one'>
                    I'm Indra a Frontend developer with React.
                </h1>
                <h1 className='text-sm sm:text-base lg:text-lg mt-5'>
                    Build modern and stable websites with creativity and passion.
                </h1>
            </div>
            <div onClick={() => scroll('about')}
            className='text-lg sm:text-xl lg:text-2xl cursor-pointer p-[5px_10px_3px_10px] absolute bottom-5 left-2/4 translate-x-[-50%]'>
                <i className="fas fa-chevron-down" />
            </div>
        </div>
    );
}

export default Home;