import React from 'react'
import Single from './assets/single.png'
import Double from './assets/double.png'
import Triple from './assets/triple.png'
import {motion} from 'framer-motion'
import {test,img1} from './motion'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
      <motion.div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <motion.div 
        variants={test}
      initial='hidden'
      whileInView='visible'
      viewport={{once:true}}
      className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold '>$149</p>
          <div className="text-center font-medium">
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <motion.button 
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
           className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black text-white ease-in-out duration-70'>Start Trail</motion.button>
        </motion.div>
        <motion.div
        variants={test}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
        className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
          <img src={Double} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold '>$149</p>
          <div className="text-center font-medium">
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <motion.button
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
           className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black text-white ease-in-out duration-70'>Start Trail</motion.button>
        </motion.div>
        <motion.div
        variants={test}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
        className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold '>$149</p>
          <div className="text-center font-medium">
            <motion.p 
            variants={test}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='py-2 border-b mx-8 mt-8'>500 GB Storage</motion.p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <motion.button 
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black text-white ease-in-out duration-70'>Start Trail</motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Cards