const About = () => {
    return (
        <div id='about' className='grid sm:grid-cols-2 items-center max-w-7xl mx-auto pt-10 px-5'>
            <div className='bg-four px-6 pt-6 sm:px-12 sm:pt-12 rounded-lg'>
                <img className='w-full drop-shadow-[3px_0px_0px_#ffcb74]' src={require('../assets/profile.png')} alt="Profile" />
            </div>
            <div className='pt-9 sm:pl-12 sm:pt-0 text-center'>
                <h2 className='font-bold text-md sm:text-lg lg:text-xl text-one tracking-widest'>
                    ABOUT ME
                </h2>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold font-main mt-5 mb-4'>
                    Muhammad Laksmana Indra
                </h1>
                <h3 className='text-five text-xs sm:text-sm lg:text-base'>
                    Frontend developer with React JS, Next JS, Tailwind CSS, and several other technologies,
                    including Backend technologies like Laravel and MySQL.
                    I translate the design into a stable and modern website.
                    I'm interested in art and logic that's why I focus on the Frontend instead of the Backend.
                    I have worked on many projects and have several certificates.
                </h3>
                <hr className='border-t z-10 border-four my-5' />
                <div className='flex gap-3 sm:gap-4 lg:gap-5 justify-center'>
                    <img className='w-10 sm:w-14 lg:w-20' 
                    src={require('../assets/next.svg').default} 
                    alt="Next JS" />
                    <img className='w-10 sm:w-14 lg:w-20' 
                    src={require('../assets/react.svg').default} 
                    alt="React JS" />
                    <img className='w-10 sm:w-14 lg:w-20' 
                    src={require('../assets/tailwind.svg').default} 
                    alt="Tailwind CSS" />
                </div>
            </div>
        </div>
    );
}

export default About;