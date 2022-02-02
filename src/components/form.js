import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


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
        'service_p7i2bvi',
        'template_7hcyr4p',
        e.target,
        'user_Vow7L69Qh60bpUR6wspjs'
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
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input
        name='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        name='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name='message'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <button type='submit' value='Send'>
        Submit
      </button>

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
    </form>
  )
}

export default ContactUs;