import React from 'react';
import './card.css'
const card = () => {
  return (
    <div className='cards'>
      <div className='card-item'>
        <h4>Experience.</h4>
      </div>
      <div className='card'>
        <div className='container'>
          <h4>Data Management Team member</h4>
          <p>Integra Micro Systems Pvt Ltd - Full time</p>
          <p>Jul 2021 - Present</p>
          <p> Chennai, Tamil Nadu, India</p>
        </div>
      </div>
      
      <div className='card-item'>
        <h4>Education.</h4>
      </div>
      <div className='card'>
        <div className='container'>
          <h4>Anna University BIT Campus Trichy</h4>
          <p>B.E Computer Science and Engineering</p>
          <p>2016 - 2020</p>
          <p> Grade: 62%</p>
        </div>
      </div>
    </div>
  )
};


export default card;
