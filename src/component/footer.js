const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <div className="bg-three shadow-[0px_-1px_10px_-5px_#000000]">
      <div className='max-w-7xl mx-auto text-xs sm:text-sm font-normal py-3.5 px-5 text-two flex gap-2 items-center'>
        <h1 className='grow flex items-baseline'><i className="far fa-copyright mr-[5px] text-[9px] sm:text-[11px]"></i>{year} Muhammad Laksmana Indra</h1>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer"
        className='hidden sm:block w-max'>
          <i className="fas fa-envelope"></i>
        </a>
        <a href='mailto:indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer"
        className='sm:hidden w-max'>
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;