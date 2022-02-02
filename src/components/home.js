import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
const home = () => {
  return (
    <div className='content home'>
      <div>
        <h3>Hi, I'm Indrajit.</h3>
        <br></br>
        <h1>A Web Developer.</h1>
        <br></br>
      </div>
      <div>
        <p>Problem solver, Fast learner and definitely Indian.</p>
        <p>
          Currently employed by Integra Microsystems Pvt.Ltd , where I shuffle
          data, and slap my keyboard until everything works..
        </p>
        <br></br>
        <Link to='/about'>Learn More &gt;</Link>
      </div>
    </div>
  )
};

export default home;
