import React from 'react';
import Card from './card.js'
import {Link} from 'react-router-dom'
import './style.css'
const resume = () => {
  return (
    <div className='content'>
      <Card />
      <div className='skill-link'>
        <Link to='/resume/skill'> Learn More about Skills &gt;</Link>
      </div>
    </div>
  )
};

export default resume;
