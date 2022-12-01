import React from 'react'
import {motion} from 'framer-motion'
import {img1} from './motion'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 text-white bg-black'>
        <motion.div 
        variants={img1}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
        className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md-tet-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your work</h1>
                <p>Sign up our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" className="p-3 flex w-full rounded-md text-black" placeholder='Enter Email' required />
                    <motion.button
                    whileInView={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                     className='bg-[#00df9a] border-[#00df9a] border-2 w-[200px] rounded-md font-bold ml-6 my-6 px-6 py-3 text-black hover:text-white ease-in--out duration-70 hover:bg-black '>Notify Me</motion.button>
                </div>
                <p className='py-3'>We care about the protection of your data, Read our <span className='text-[#00df9a] '>Prirvacy Policy</span></p>
            </div>
        </motion.div>
    </div>
  )
}

export default Newsletter