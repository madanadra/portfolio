const Navbar = () => {
    return (
        <div className='bg-one text-three w-full fixed top-0 z-10 shadow-[0px_1px_10px_-5px_#000000]'>
            <div className="max-w-7xl flex justify-between items-center mx-auto py-3 px-5 text-sm sm:text-base">
                <h1 className="font-bold">Madanadra.</h1>
                <ul className="hidden sm:flex gap-5 font-semibold">
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://github.com/madanadra' target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer">Contact</a>
                    </li>
                </ul>
                <ul className="flex sm:hidden gap-5 font-semibold">
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
                    </li>
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://github.com/madanadra' target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
                    </li>
                    <li className="hover:text-two cursor-pointer">
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;