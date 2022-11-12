const Navbar = ({alert, scroll}) => {
    const Menu = ({name}) => {
        return (
            <li onClick={() => scroll(name)}
            className="px-3 p-5 text-xs sm:text-sm lg:text-base cursor-pointer capitalize">{name}</li>
        );
    }

    return (
        <div className='min-w-full fixed top-0 z-40'>
            <ul className="flex gap-1 sm:gap-2 lg:gap-3 justify-center px-2 navbar">
                <Menu name='home' />
                <Menu name='about' />
                <Menu name='work' />
                <Menu name='contact' />
            </ul>
            {alert === 'succeed' ? 
                <div className='mt-5 mr-5 ml-auto w-max navbar rounded-md py-3 px-5 text-xs sm:text-sm lg:text-base'>
                <h3>Successfully sent</h3>
                </div> 
            : alert === 'failed' ? 
                <div className='mt-5 mr-5 ml-auto w-max navbar rounded-md py-3 px-5 text-xs sm:text-sm lg:text-base'>
                <h3>Failed to send</h3>
                </div> 
            : []}
        </div>
    );
}

export default Navbar;