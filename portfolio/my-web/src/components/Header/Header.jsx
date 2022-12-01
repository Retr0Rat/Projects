import React from 'react'
import './Header.css'
import BTN from './BTN'
import ME from '../../assets/me.png'
import Socials from './Socials'
import {motion} from 'framer-motion'
import {child1, child2, child3, child4, sd} from './headermotion'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Header = () => {
  return (
    <>
    <div className="container header_container" id="header"> 
      <motion.h5
      variants={child1}
      initial="hidden"
      animate="visible">
        Hello I'm
      </motion.h5>
      <motion.h1
      variants={child2}
      initial="hidden"
      animate="visible">
        Retr0Rat
      </motion.h1>
      <motion.h5 className="text-light"
      variants={child3}
      initial="hidden"
      animate="visible">
        FrontEnd Developer
      </motion.h5>
      <BTN/>
      <Socials/>
      <motion.div className="front-image"
      variants={child4}
      initial="hidden"
      animate="visible">
          <img src={ME} alt="me"/>
      </motion.div>
      <motion.div 
      variants={sd}
      initial="hidden"
      animate="visible"
      whileInHover="animate"
      >
      <a href="#contact" className="scroll_down">Scroll Down</a>
      </motion.div>
    </div>

    </>
  )
}

export default Header