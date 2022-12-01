import React from 'react'
import './Exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {child1,child2} from './Expmotion'
import { fd1,fd2,fd3 } from './Expmotion'
import { gv1,gv2,gv3 } from './Expmotion'

const Exp = () => {
  return (
    <>
    <section id="experience">
        <motion.h5
          variants={child1}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}>What Skills I have </motion.h5>
        <motion.h2
         variants={child2}
         initial="hidden"
         whileInView="visible"
         viewport={{once:true}}>My Experience</motion.h2>
      <div className="container exp_container">
          <motion.div                    
            variants={child1}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="exp_frontend">
            <h3>Frontend Development</h3>
            <div className="exp_content">
              <motion.article
                variants={fd1}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}} className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </motion.article>
              <motion.article
               variants={fd1}
               initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
               className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </motion.article>
              <motion.article 
              variants={fd2}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>TAILWIND CSS</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </motion.article>
              <motion.article 
              variants={fd2}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </motion.article>
              <motion.article 
              variants={fd2}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </motion.article>
              <motion.article
              variants={fd3}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
               className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>NODE JS</h4>
                  <small className="text-light">Intermidiate</small>
                  </div>
              </motion.article>
              <motion.article
              variants={fd3}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
               className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>REACT NATIVE</h4>
                  <small className="text-light">Intermidiate</small>
                  </div>
              </motion.article>
              <motion.article
              variants={fd3}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
               className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>THREE JS</h4>
                  <small className="text-light">Beginner</small>
                  </div>
              </motion.article>
            </div>
          </motion.div>

          <motion.div 
            variants={child2}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="exp_editor">
          <h3>Graphics & Video Editing</h3>
            <div className="exp_content">
              <motion.article 
              variants={gv1}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>PHOTOSHOP</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </motion.article>
              <motion.article
              variants={gv1}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}} className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>ILLUSTRATOR</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </motion.article>
              <motion.article
              variants={gv2}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}} className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>LIGHTROOM</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </motion.article>
              <motion.article 
              variants={gv2}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>PEMEIRE PRO</h4>
                  <small className="text-light">Beginner</small>
                  </div>
              </motion.article>
              <motion.article 
              variants={gv3}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}className="exp_details">
                  <BsPatchCheckFill className="exp_details-icon" />
                  <div>
                  <h4>AFTER EFFECTS</h4>
                  <small className="text-light">Beginner</small>
                  </div>
              </motion.article>
            </div>
          </motion.div>
      </div>
    </section>
    </>
  )
}

export default Exp