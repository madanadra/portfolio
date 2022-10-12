const Skill = () => {
    return (
      <div id='skill' className='skill'>
        <div className='tool'>
          <img src={require('../assets/html.svg').default} alt="HTML" loading='lazy' />
          <h3>HTML</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/css.svg').default} alt="CSS" loading='lazy' />
          <h3>CSS</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/bootstrap.svg').default} alt="Bootstrap" loading='lazy' />
          <h3>Bootstrap</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/js.svg').default} alt="JS" loading='lazy' />
          <h3>JavaScript</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/nodejs.svg').default} alt="Node JS" loading='lazy' />
          <h3>Node JS</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/react.svg').default} alt="React JS" loading='lazy' />
          <h3>React JS</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/mui.svg').default} alt="Material UI" loading='lazy' />
          <h3>Material UI</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/php.svg').default} alt="PHP" loading='lazy' />
          <h3>PHP</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/laravel.svg').default} alt="Laravel" loading='lazy' />
          <h3>Laravel</h3>
        </div>
        <div className='tool'>
          <img src={require('../assets/mysql.svg').default} alt="MySQL" loading='lazy' />
          <h3>MySQL</h3>
        </div>
      </div>
    );
}

export default Skill;