import React from 'react'
import {useState} from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {child7} from './navmotion'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <motion.nav
    variants={child7}
      initial="hidden"
      animate="visible">
    <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}
    duration={500}  exact='true' offset={-80} delay={1000}><AiFillHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} duration={500}  exact='true' offset={-160} delay={1000}><AiOutlineUser/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} duration={500}  exact='true' offset={-240} delay={1000}><BiBook/></a>
    {/*<a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} duration={500}  exact='true' offset={-320}><RiServiceLine/></a>*/}
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} duration={500}  exact='true' offset={-400}><BiMessageSquareDetail/></a>
    </motion.nav>
  )
}

export default Nav