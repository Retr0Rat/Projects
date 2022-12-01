import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {f1} from './motion'

const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className="aa">
            <motion.h1 
                variants={f1}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</motion.h1>
            <motion.p    
            variants={f1}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex dolores exercitationem! Quo officia atque ratione modi unde aperiam quas saepe.</motion.p>
            <div className="flex justify-between md:w-[75%] ym-6">
                <motion.div
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}><FaFacebookSquare size={30} className='hover:text-green-500 duration-300'/>
                </motion.div>
                <motion.div
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}>
                        <FaInstagramSquare size={30} className='hover:text-green-500 duration-300'/></motion.div>
                        <motion.div
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}>
                        <FaTwitterSquare size={30} className='hover:text-green-500 duration-300'/></motion.div>
                        <motion.div
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}>
                        <FaGithubSquare size={30} className='hover:text-green-500 duration-300'/></motion.div>
                        <motion.div
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}>
                        <FaDribbbleSquare size={30} className='hover:text-green-500 duration-300'/></motion.div>
                </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <motion.h6 
                variants={f1}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='text-lg text-gray-400'>Solutions</motion.h6>
                <ul>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Analytics</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Mareting</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Commerce</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Insights</a></motion.li>
                </ul>
            </div>
            <div>
                <motion.h6 
                variants={f1}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='text-lg text-gray-400'>Support</motion.h6>
                <ul>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Pricing</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>documentation</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Guides</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>API Status</a></motion.li>
                </ul>
            </div>
            <div>
                <motion.h6 
                variants={f1}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='text-lg text-gray-400'>Company</motion.h6>
                <ul>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>About</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Blog</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Jobs</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Press</a></motion.li>
                </ul>
            </div>
            <div>
                <motion.h6 
                variants={f1}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true}}
                className='text-lg text-gray-400'>Legal</motion.h6>
                <ul>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Claim</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Policy</a></motion.li>
                    <motion.li 
                    variants={f1}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='py-2 text-md'><a href='/' className='hover:text-green-500 ease-in-out duration-300'>Terms</a></motion.li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer