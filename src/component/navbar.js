const Navbar = () => {
    const Part = ({url, value}) => {
        return (
            <li className="hover:text-two cursor-pointer">
                <a href={url} target="_blank" rel="noopener noreferrer">{value}</a>
            </li>
        );
    }

    return (
        <div className='bg-one text-three w-full fixed top-0 z-10 shadow-[0px_1px_10px_-5px_#000000]'>
            <div className="max-w-7xl flex justify-between items-center mx-auto py-3 px-5 text-sm sm:text-base">
                <h1 className="font-bold">Madanadra.</h1>
                <ul className="hidden sm:flex gap-5 font-semibold">
                    <Part url='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' value='LinkedIn' />
                    <Part url='https://github.com/madanadra' value='GitHub' />
                    <Part url='https://mail.google.com/mail/?view=cm&fs=1&to=indrafrontend@gmail.com' value='Contact' />
                </ul>
                <ul className="flex sm:hidden gap-5 font-semibold">
                    <Part url='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' value={<i className="fab fa-linkedin-in" />} />
                    <Part url='https://github.com/madanadra' value={<i className="fab fa-github" />} />
                    <Part url='mailto:indrafrontend@gmail.com' value={<i className="fas fa-envelope"></i>} />
                </ul>
            </div>
        </div>
    );
}

export default Navbar;