import { useState, useRef, useEffect } from 'react';
import { send } from 'emailjs-com';

const Contact = ({alert, setAlert}) => {
    const name = useRef()
    const email = useRef()
    const message = useRef()
    const [load, setLoad] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoad(true);
        send('service_lnna21m', 'template_0m967db', 
        {name: name.current.value, email: email.current.value, message: message.current.value}, 
        'user_M6g4nRDcaLWFLkrywRpRY')
        .then((response) => {
        setAlert('succeed');
        name.current.value = '';
        email.current.value = '';
        message.current.value = '';
        setLoad(false);
        })
        .catch((err) => {
        setAlert('failed');
        setLoad(false);
        });
    }

    useEffect(() => {
        setTimeout(()=>{
            setAlert('')
            return () => {setAlert('')};
        }, 3000)
    }, [alert]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div className="contact">
        <div className="box">
          <h1>Let's talk</h1>
          <h3>Interested in me? Or do you have any questions, 
          complaints, suggestions and criticisms about me?</h3>
          <div className='social'>
            <a href="https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/madanadra" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/mlaksmanaindra" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/mlaksmanaindra" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <form onSubmit={(e) => sendEmail(e)}>
          <h2>Name</h2>
          <input type='text' ref={name} required />
          <h2>Email</h2>
          <input type='email' ref={email} required />
          <h2>Message</h2>
          <textarea rows='5' ref={message} required />
          {load ? 
          <button className='dis' disabled>SENDING...</button>
          : 
          <button type='submit'>SEND</button>}
        </form>
      </div>
    );
}

export default Contact;