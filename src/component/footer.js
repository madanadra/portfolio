const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <div className="bg-three shadow-[0px_-1px_10px_-5px_#000000]">
      <div className='max-w-7xl mx-auto text-xs sm:text-sm font-normal py-3 px-5 text-two flex gap-2 items-center'>
        <h1 className='grow'><i className="far fa-copyright"></i> {year} Muhammad Laksmana Indra</h1>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer"
        className='hidden sm:block w-max'>
          <i class="far fa-question-circle"></i>
        </a>
        <a href='mailto:indrafrontend@gmail.com' target="_blank" rel="noopener noreferrer"
        className='sm:hidden w-max'>
          <i class="far fa-question-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;