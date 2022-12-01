import React from 'react'
import './Portfolio.css'
import TW from '../../assets/tailwindP.png'
import PP from '../../assets/portfolioP.png'
import EC from '../../assets/ecommP.png'
import {motion} from 'framer-motion'
import {child1,child2,child3,child4,child5} from './Pmotion.jsx'

const data =[
  {
    id: 1,
    image: TW,
    title: 'Tailwind Project',
    github: 'https://github.com/Retr0Rat/portfolio2/tree/master/portfolio2',
    demo: 'https://example-3ee5f.web.app'
  },
  {
    id: 2,
    image: PP,
    title: 'Portfolio Project',
    github: 'https://www.github.com',
    demo: '#'
  },
  {
    id: 3,
    image: EC,
    title: 'Ecommerce Project',
    github: 'https://www.github.com',
    demo: '#'
  }
]
const Portfolio = () => {
  return (
    <>
    <section className="#portfolio">
      <motion.h5                    
      variants={child1}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}>My Recent Work</motion.h5>
      <motion.h2
        variants={child2}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}>Portfolio</motion.h2>

      <div className="container port_container">
      {      
        data.map(({id, image, title, github, demo}) => {
          return(
          <motion.article
          variants={child3}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}} key={id} className="port_item">
            <div className="port_item-image">
              <motion.img 
              variants={child4}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              src={image} alt={title} />
            </div>
            <motion.h3
            variants={child5}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >{title}</motion.h3>
            <motion.div
            variants={child5}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
             className="port_item-btn">
              <a href={github} className="btn10">Github</a>
              <a href={demo} className="btn20 " >Live Demo</a>
            </motion.div>
          </motion.article>
          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default Portfolio
