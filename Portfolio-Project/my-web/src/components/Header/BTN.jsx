import React from 'react'
import CV from '../../assets/CV.pdf'
import {motion} from 'framer-motion'
import {child6, child5} from './headermotion'

const BTN = () => {
  return (
      <>
    <div className="button">
        <motion.a href={CV} download className="btn12"
        variants={child5}
        initial="hidden"
        animate="visible">Download CV</motion.a>
        <motion.a href="#contact" className="btn13"
        variants={child6}
        initial="hidden"
        animate="visible">Let's Talk</motion.a>
    </div>
    </>
  )
}

export default BTN