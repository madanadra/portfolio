import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/footer';
import './index.css';

function App() {
  const [alert, setAlert] = useState('')

  function scroll(target) {
    const element = document.getElementById(target);
    const position = element.getBoundingClientRect().top + window.pageYOffset - 55;
  
    window.scrollTo({
        top: position,
        behavior: "smooth"
    });   
  }

  useEffect(() => {
    setTimeout(()=>{
        setAlert('')
        return () => {setAlert('')};
    }, 3000)
  }, [alert]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='bg-two text-five font-second relative'>
      <div className='absolute w-full h-screen z-20 shadow-[0px_0px_90px_25px_#111111_inset] md:shadow-[0px_0px_90px_50px_#111111_inset]' />
      <img className='absolute w-full h-screen' src={require('./assets/home.svg').default} alt="Bg home" />
      <Navbar alert={alert} scroll={scroll} />
      <div className='max-w-6xl mx-auto px-5'>
        <Home scroll={scroll} />
        <About />
        <Work />
        <Contact setAlert={setAlert} />
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
