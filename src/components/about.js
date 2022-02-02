import React from 'react';
import './style.css'
import ij from './ij.jpg'
const about = () => {
  return (
    <div className='content'>
      <div className='aboutflex'>
        <div className='items '>
          <img src={ij} alt='Indrajit S' />
        </div>
        <div className='items item1'>
          <h4>About me.</h4>
          <p>
            Hi ,I've completed by
            Bachelor degree in Computer Science and Engineering in Anna
            University BIT Campus Trichy by 2020. </p>
             <p>I'm currently working as Data
            management Team member in Integra Micro Systems Pvt.Ltd.</p><p> I have been
            worked in Frontend Technologies like
            HTML, CSS, Bootstrap, Javascript and React.js </p><p>And also backend Technologies
            like Node.js , Express .js, core java and Databases such as
            Mysql,Mongo Db and PostgresSql.
          </p>
        </div>
      </div>
    </div>
  )
};

export default about;
