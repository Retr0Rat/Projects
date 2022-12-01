import React from 'react'
import Typed from 'react-typed'
import {motion} from 'framer-motion'
import {hero, btn1} from './motion'

const Hero = () => {
  return (
    <div className='bg-black'>
        <motion.div
        variants={hero}
        initial='hidden'
        animate='visible' className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex-col flex justify-center'>
            <p className='text-[#00df9a] font-bold p-2 '>GROWING WITH DATA ANALYTICS</p>

            <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

            <div className='flex justify-center items-center'> 
                <p className=' md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, Flexible financing for</p>
                
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB','BTC','SASS']}
                typeSpeed={120}
                backSpeed={150} loop
                />
            </div>
            
              <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
              <motion.button
              whileInView={{ scale: 0.9 }}
              whileHover={{ scale: 1.0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
               className='bg-[#00df9a] border-[#00df9a] border-2 w-[200px] rounded-md font-bold m-6 mx-auto p-3 text-black hover:text-white ease-in--out duration-570 hover:bg-black '>Get Started</motion.button>
        </motion.div>
     </div>
  )
}

export default Hero