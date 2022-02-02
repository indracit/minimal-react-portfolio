import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './form.css'
import Social from './social'
 const ContactUs = () => {
  
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
  

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    })
  
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)
    emailjs
      .sendForm(
        '',
        '',
        e.target,
        ''
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
      toastifySuccess()
      console.log(name,email,message)
      setName('')
      setEmail('')
      setMessage('')
      
      
  };
  

  return (
    <div className='form1'>
      <form onSubmit={sendEmail}>
        <div>
          <label>Name</label>
        </div>

        <div>
          <input
            name='name'
            type='text'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
        </div>
        <div>
          <textarea
            name='message'
            placeholder='Enter your Message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div>
            <button className='send-button' type='submit' value='Send'>
              Submit
            </button>
          </div>

          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </form>
      <div>
        {/* <ul class='social-media-list'>
          <li>
            <a class='contact-icon' href='https://github.com/indracit'>
              <i class='fa fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://codepen.io/indracit' class='contact-icon'>
              <i class='fa fa-codepen' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/imindrajithij'
              target='_blank'
              class='contact-icon'
            >
              <i class='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/indrajit.js/'
              target='_blank'
              class='contact-icon'
            >
              <i class='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          
        </ul> */}
              <Social/>
        <div class='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </div>
  )
}

export default ContactUs;
