import React from 'react'
import Laptop from './assets/laptop.jpg'
import {motion} from 'framer-motion'
import {img1} from './motion'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <motion.div
        variants={img1}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
         className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} className='w-[500px] mx-auto my-4' alt="/" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Aata Analytics Centrally</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam harum voluptates reprehenderit voluptate aliquid nobis tempore rem vel voluptatum quaerat vero aut repellat dolorum sapiente, sed dolore accusantium eveniet.
              </p>
              <motion.button
              whileInView={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='bg-black border-black border-2 w-[200px] rounded-md font-bold mt-5 p-3 text-[#00df9a] hover:text-black ease-in--out duration-70 hover:bg-white'>Get Started</motion.button>
            </div>
        </motion.div>
    </div>
  )
}

export default Analytics