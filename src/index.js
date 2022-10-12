import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/home';
import Skill from './component/skill';
import Project from './component/project';
import Contact from './component/contact';
import Footer from './component/footer';
import './style/index.css';

function App() {
  const [alert, setAlert] = useState('')

  return (
    <div className="container">
      {alert === 'succeed' ? <div className='alert'><h2>Successfully sent</h2></div> : 
      alert === 'failed' ? <div className='alert'><h2>Failed to send</h2></div> : []}
      <Home />
      <Skill />
      <Project />
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
