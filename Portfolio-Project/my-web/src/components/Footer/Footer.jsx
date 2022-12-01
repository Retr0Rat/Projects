import React from 'react'
import './Footer.css'
//import {BsFacebook} from 'react-icons/bs'
//import {BsInstagram} from 'react-icons/bs'
//import {BsTwitter} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {sd,child1,child2, firstname} from './footermotion'

const Footer = () => {
    return ( 
    <>
{
/*HOW TO EMPLEMENT HR ELMENT IN REACT*/
}
    <footer>

        <div className="container">
            <div className="cont_up">
            <motion.div 
            variants={sd}
            initial="hidden"
            animate="visible"
            whileInView="animate">
        <a href="#header" className="scroll_up">Scroll up</a>
        </motion.div>
             </div>
            <motion.a className="footer_logo">Retr0Rat</motion.a>
            {/*<ul className="links">
                <li><a href="/" className="links_sub">Home</a></li>
                <li><a href="#about" className="links_sub">About</a></li>
                <li><a href="#experience" className="links_sub">Experience</a></li>
                <li><a href="#services" className="links_sub">Services</a></li>
                <li><a href="#portfolio" className="links_sub">Portfolio</a></li>
                <li><a href="#testimonials" className="links_sub">Testimonials</a></li>
                <li><a href="#contacts" className="links_sub">Contacts</a></li>
                <li><a href="/" className="links_sub">More</a></li>
            </ul>
            <div className="socials">
                <a href="https:/facbook.com"><BsFacebook className="social_logo"/></a>
                <a href="https:/instagram.com"><BsInstagram className="social_logo"/></a>
                <a href="https:/twitter.com"><BsTwitter className="social_logo"/></a>
</div>*/}
<div className="message"><p>That was so nice of you to make it till the end!</p></div>
            <div className="footer_copyright">
                <small>&copy; Retr0rat. All Right Reserved</small>
            </div>
</div>
    </footer>
    </>
    )
}

export default Footer