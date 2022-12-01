import React from 'react'
import './About.css'
import ME from '../../assets/wrench3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {motion} from 'framer-motion'
import {child1, child2, child3} from './aboutMotion'

const About = () => {
    return ( 
        <section id="about">
            <motion.h5
            variants={child3}
            initial="hidden"
            animate="visible">Get To Know</motion.h5>
            <motion.h2
            variants={child3}
            initial="hidden"
            animate="visible">About me</motion.h2>

            <div className="container about_container" id="about">
                <div className="about_me">
                    <div className="about_image">
                    <motion.img 
                    variants={child2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                     src={ME} alt="about_image"/>
                    </div>
                </div>
            <div className="about_content">
                <div className="about_cards">
                    <motion.article 
                    variants={child1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3 Years Of Coding</small>
                    </motion.article>

                    <motion.article 
                    variants={child1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="about_card">
                        <FiUsers className="about_icon"/>
                        <h5>Work</h5>
                        <small>1 Year Of Working</small>
                    </motion.article>

                    <motion.article 
                    variants={child1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projets</h5>
                        <small>5+ Completed</small>
                    </motion.article>
                </div>

                <motion.p
                variants={child1}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}>Meticulous Website (Graphics) Designer with over two years of Website designing and Graphics designing. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction. </motion.p>

                <motion.a 
                variants={child1}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                href="#contact" className="btn11">Let's Talk</motion.a>  
            </div>
            </div>

        </section>
    )
}

export default About