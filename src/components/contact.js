import React from 'react';
import Form from './form'
import './style.css'

const contact = () => {
  return (
    <div className='content content-s'>
      <h1>Let's Talk.</h1>
      <p>
        Get in touch via the form below, or by emailing{' '}
        <a href="mailto:indrajith981@outlook.com?subject=Let's Talk">
          indrajith981@outlook.com
        </a>
      </p>
     <Form/>
    </div>
  )
};

export default contact;
