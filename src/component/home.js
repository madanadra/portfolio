const Home = ({scroll}) => {
    return (
        <div id="home" className="min-h-screen grid content-center text-center max-w-5xl mx-auto relative">
            <h1 className='font-main font-bold text-5xl sm:text-6xl lg:text-7xl text-one'>
                I'm Indra a Frontend developer with React JS.
            </h1>
            <h2 className='text-sm sm:text-base lg:text-lg mt-5'>
                Build fast and stable websites with creativity and passion.
            </h2>
            <div onClick={() => scroll('about')}
            className='text-lg sm:text-xl lg:text-2xl cursor-pointer p-[5px_10px_3px_10px] absolute bottom-5 left-2/4 translate-x-[-50%]'>
                <i className="fas fa-chevron-down" />
            </div>
        </div>
    );
}

export default Home;