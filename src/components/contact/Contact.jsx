import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l75zfnv', 'template_olsfpi7', form.current, 'toMGjBu0HixZMotzP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <HiOutlineMail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>sharma.neha.ns729@gmail.com</h5>
          <a href="mailto:sharma.neha.ns729@gmail.com">Send a message</a>
        </article>
        <article className="contact_option">
          <FaFacebookMessenger className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Neha Sharma</h5>
          <a href="https://www.facebook.com/profile.php?id=100053092480143" target="__blank">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+977 9860678048</h5>
          <a href="https://api.whatsapp.com/send?phone+9779860678048" target="__blank">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact