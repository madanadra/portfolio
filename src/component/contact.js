import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = ({setAlert}) => {
    const [load, setLoad] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoad(true);
        send('service_lnna21m', 'template_0m967db', 
        {name: e.target.name.value, email: e.target.email.value.toLowerCase(), message: e.target.message.value}, 
        'user_M6g4nRDcaLWFLkrywRpRY')
        .then((response) => {
          e.target.reset();
          setAlert('succeed');
          setLoad(false);
        })
        .catch((err) => {
          setAlert('failed');
          setLoad(false);
        });
    }

    const Social = ({children, url}) => {
      return (
        <a className='bg-four pt-1 pb-0.5 px-2.5 rounded' 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer">{children}</a>
      );
    }

    return (
      <div id='contact' className="grid sm:grid-cols-2 items-center mt-10 pt-10">
        <div className='pb-9 sm:pr-12 sm:pb-0 text-center'>
            <h2 className='font-bold text-md sm:text-lg lg:text-xl text-one tracking-widest'>MY CONTACT</h2>
            <h1 className='font-main text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-4'>Get In Touch</h1>
            <div className='flex gap-x-2 sm:gap-x-3 justify-center text-lg sm:text-xl lg:text-2xl text-one'>
              <Social url="https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b">
                <i className="fab fa-linkedin-in" />
              </Social>
              <Social url="https://github.com/madanadra">
                <i className="fab fa-github" />
              </Social>
              <Social url="https://twitter.com/mlaksmanaindra">
                <i className="fab fa-twitter" />
              </Social>
              <Social url="https://www.instagram.com/mlaksmanaindra">
                <i className="fab fa-instagram" />
              </Social>
            </div>
        </div>
        <form className='grid gap-y-5 text-sm sm:text-base lg:text-lg' onSubmit={(e) => sendEmail(e)}>
          <input type='text' placeholder='Name' name='name' required
          className='py-2 bg-transparent outline-0 border-b border-four focus:border-one placeholder:text-five' />
          <input type='email' placeholder='Email' name='email' required
          className='py-2 bg-transparent outline-0 border-b border-four focus:border-one placeholder:text-five' />
          <textarea placeholder='Message' rows='5' name='message' required
          className='py-2 bg-transparent outline-0 border-b border-four resize-none focus:border-one placeholder:text-five' />
          {load ? 
          <button type='submit' disabled
          className='rounded-md bg-four tracking-widest p-2 sm:p-3 mt-3 brightness-50'>SENDING...</button>
          : 
          <button type='submit' 
          className='rounded-md bg-four text-one tracking-widest p-2 sm:p-3 mt-3'>SEND</button>}
          <h3 className='text-five text-center text-xs sm:text-sm lg:text-base'>galunggungone@gmail.com</h3>
        </form>
      </div>
    );
}

export default Contact;