const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <div className="bg-four mt-20 py-7 text-center">
      <h1 className="text-xs sm:text-sm lg:text-base max-w-6xl mx-auto px-5">
        Copyright <i className="far fa-copyright"></i> {year} Muhammad Laksmana Indra
      </h1>
    </div>
  );
}

export default Footer;