const Navbar = ({scroll}) => {
    const Menu = ({name}) => {
        return (
            <li onClick={() => scroll(name)}
            className="px-3 py-5 text-xs sm:text-sm lg:text-base cursor-pointer capitalize">{name}</li>
        );
    }

    return (
        <ul className="flex gap-1 sm:gap-2 lg:gap-3 w-screen justify-center fixed top-0 z-[15] bg-two border-b border-four">
            <Menu name='home' />
            <Menu name='about' />
            <Menu name='work' />
            <Menu name='contact' />
        </ul>
    );
}

export default Navbar;