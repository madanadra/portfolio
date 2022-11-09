import React, { useState } from 'react';
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

  return (
    <div className='bg-two text-three font-second'>
      {alert === 'succeed' ? 
        <div className='top-5 z-20 right-5 bg-four rounded-md py-3 px-5 w-max fixed text-xs sm:text-sm lg:text-base'>
          <h3>Successfully sent</h3>
        </div> 
      : alert === 'failed' ? 
        <div className='top-5 z-20 right-5 bg-four rounded-md py-3 px-5 w-max fixed text-xs sm:text-sm lg:text-base'>
          <h3>Failed to send</h3>
        </div> 
      : []}
      <Navbar scroll={scroll} />
      <Home scroll={scroll} />
      <About />
      <Work />
      <Contact alert={alert} setAlert={setAlert} />
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
