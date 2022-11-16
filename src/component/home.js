const Home = () => {
    return (
        <div className="bg-one min-h-screen flex items-center pt-12 sm:pt-6">
            <div className="max-w-6xl mx-auto px-5 py-9 sm:py-12">
                <h1 className='text-three text-3xl sm:text-4xl lg:text-5xl w-max font-bold'>Hi, I'm Indra</h1>
                <hr className="border-t-2 border-four w-2/6 mt-5" />
                <p className="text-two text-lg md:text-xl lg:text-2xl mt-5 mb-9 font-normal">
                    My full name is Muhammad Laksmana Indra.
                    I'm a Frontend developer with React JS, Next JS, Tailwind CSS, and several other technologies.
                    I'm also familiar with some backend technologies like Laravel and MySQL.
                    I translate the design into a fast and stable website.
                    I'm interested in art and logic, that's why I chose Frontend.
                    I have worked on many projects and have several certificates.
                </p>
                <hr className="border-t-2 border-four w-2/6 mb-5 mr-0 ml-auto" />
                <a href='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' target="_blank" rel="noopener noreferrer"
                className="rounded bg-three text-one text-md sm:text-lg lg:text-xl w-max py-3 px-5 flex items-center mr-0 ml-auto">
                    <i className="fab fa-linkedin-in mr-2" /> Connect
                </a>
            </div>
        </div>
    );
}

export default Home;