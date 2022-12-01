import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
//import {BsGithub} from 'react-icons/bs'
//import {BsDribbble} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {child4} from './headermotion'

const Socials = () => {
  return (
    <motion.div className="Socials_header" 
    variants={child4}
      initial="hidden"
      animate="visible">
        <a href="https://www.linkedin.com/in/aman-bansal-15b986204/" className='ln'><BsLinkedin/></a>
        <a href="https://github.com/Retr0Rat" className='gb'><BsGithub/></a>
        <a href="https://www.behance.net/retronagar" className='ln'><BsBehance/></a>
    </motion.div>
  )
}

export default Socials