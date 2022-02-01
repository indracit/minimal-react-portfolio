import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
const home = () => {
  return (
    <div className='content'>
      <div>
        <h3>Hi, I'm Indrajit.</h3>
        <br></br>
        <h1>A Web Developer.</h1>
        <br></br>
      </div>
      <div>
        {' '}
        <p>
          I'm currently working as Data management Team member in Integra Micro
          Systems Pvt.Ltd. I have a strong Knowledge and experience in Frontend
          Technologies like HTML,CSS,Bootstrap,Javascript and React Js and
          backend Technologies like Node js , Express js and Databases such as
          Mysql,Mongo Db and PostgresSql.
        </p>
        <br></br>
        <Link to='/about'>Learn More &gt;</Link>
      </div>
    </div>
  )
};

export default home;
