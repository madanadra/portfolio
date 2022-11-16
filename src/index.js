import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar';
import Home from './component/home';
import Project from './component/project';
import Footer from './component/footer';
import './index.css';

function App() {
  return (
    <div className='font-main'>
      <Navbar />
      <Home />
      <Project />
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
