import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {motion} from 'framer-motion'
import {child1,child2,child3,child4} from './Cmotion'
import './Contact.css'
//import {HiOutlineMail} from 'react-icons/hi'
//import {BsFillPersonFill} from 'react-icons/bs'
//import {AiOutlineMail} from 'react-icons/ai'
//import {AiOutlineMessage} from 'react-icons/ai'
//import {CopyToClipboard} from 'react-copy-to-clipboard'
 

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ydsre6j', 'template_txrgufl', form.current, '6nXsv8jERF019NWNg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
};
  return (
    <>
    <section id="contact">
      <motion.h5
      variants={child1}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      >Get In Touch</motion.h5>
      <motion.h2
      variants={child2}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}>Contact Me</motion.h2>

      <div className="container contact_container">
        {/*<div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>probansalaman03@gmail.com</h5>
            <a href="https://www.gmail.com" >Send a message</a>
          </article>
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>123-4567-890</h5>
            <a href="https://www.whatsapp.com" >Send a message</a>
          </article>
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>abcdefgh@gmail.com</h5>
            <a href="https://www.messenger.com" >Send a message</a>
          </article>
        </div>*/}
      {/*End of contact */}
      <form ref={form} onSubmit={sendEmail }>
      <motion.input
      variants={child3}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
       type="text" name='name' placeholder='Your Full Name' required />
        <motion.input
        variants={child3}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
         type="email" name='email' placeholder='Your Email' required />
        <motion.textarea
        variants={child3}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
         name="message" rows="3" placeholder='Your Message' required></motion.textarea><br />
        <motion.button
        variants={child4}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}} type="submit" className="btn1">Send Message</motion.button>
      </form>
    </div>
    <div className="container cont_up">
    {
    //  <a href="#header" className="scroll_up">scroll up</a>
    }
    </div>

    </section>
    </>
  )

}

export default Contact