import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {child1, home, abt, con, comp, rnav, nnav} from './motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className='flex justify-between items-center h-24 max-width-[1240px] m-auto px-20 text-white'>
        <motion.h1 
        variants={rnav}
        initial='hidden'
        animate='visible'
        className='w-full text-3xl font-bold text-[#00df9a] m-4'><a href='#' className=''>REACT.</a></motion.h1>
        <motion.ul
        variants={nnav}
        initial='hidden'
        animate='visible' className='hidden md:flex'>
          <li className='p-4'><a href='#home' className='hover:text-green-500 ease-in-out duration-300'>Home</a></li>
          <li className='p-4'><a href='#company' className='hover:text-green-500 ease-in-out duration-300'>Company</a></li>
          <li className='p-4'><a href='#about' className='hover:text-green-500 ease-in-out duration-300'>About</a></li>
          <li className='p-4'><a href='#contact' className='hover:text-green-500 ease-in-out duration-300'>Contact</a></li>
        </motion.ul>

        <motion.div 
        variants={child1}
        initial='hidden'
        animate='visible' onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </motion.div>

        <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r bg-black border-r-gray-900 ease-in-out duration-1000 sm:hidden' : 'fixed left-[-100%] w-[50%] h-full ease-in-out duration-1000 bg-black sm:hidden'}>
        <motion.h1 
        variants={home}
        initial='hidden'
        whileInView='visible'
        className='w-full text-3xl font-bold text-[#00df9a] m-4 p-4'><a href=''>REACT.</a></motion.h1>
          <ul 
          className='p-4 uppercase '>
            <motion.li
            variants={home}
            initial='hidden'
            whileInView='visible'
             className='p-4 border-b border-gray-600'><a href='#home' className='hover:text-green-500 ease-in-out duration-300'>Home</a></motion.li>
            <motion.li 
            variants={comp}
            initial='hidden'
            whileInView='visible'
            className='p-4 border-b border-gray-600'><a href='#company' className='hover:text-green-500 ease-in-out duration-300'>Company</a></motion.li>
            <motion.li 
            variants={abt}
            initial='hidden'
            whileInView='visible'
            className='p-4 border-b border-gray-600'><a href='#about' className='hover:text-green-500 ease-in-out duration-300'>About</a></motion.li>
            <motion.li 
            variants={con}
            initial='hidden'
            whileInView='visible'
            className='p-4 border-b border-gray-600'><a href='#contact' className='hover:text-green-500 ease-in-out duration-300'>Contact</a></motion.li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar