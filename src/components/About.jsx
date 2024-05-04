'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import dynamic from 'next/dynamic';
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const AboutScene = dynamic(() => import('@/components/scenes/AboutScene'), {
  ssr: false
})

const About = () => {
  return (
    <section 
      className='w-full flex justify-center items-center relative'
      id='about'
    >
        <div className='container xl:mt-[4rem] xl:px-0 px-6 xl:mb-[15rem] mb-[5rem] flex flex-col xl:flex-row justify-between items-center'>
          <motion.div 
            variants={fadeIn('right', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='xl:w-[30%] w-[100%] xl:h-[520px] h-[350px]'
          >
            {/* 3D */}
            <MouseParallaxContainer 
              globalFactorX={0.1} 
              globalFactorY={0.2} 
              resetOnLeave
              className='w-full cursor-grab flex flex-row relative justify-end h-full'>
                <MouseParallaxChild 
                    factorX={0.4} 
                    factorY={0.8} 
                    className="relative w-full flex justify-center items-end h-full"
                  >
                    {/* <div className='w-full flex juce items-center h-full'> */}
                      <Image src="/about-tshilitech.png" width={4448} height={2664} className='object-cover' alt='files'/>
                    {/* </div> */}
                </MouseParallaxChild>
              </MouseParallaxContainer>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='xl:w-[30%] w-[100%] xl:h-[620px] h-[300px] flex xl:items-end'
          >
              <p className='text-black text-[1.1rem]'>
                Creating digital products that captivate and inspire 
                is the goal! pushing the 
                limits and exploring new horizons to craft 
                something truly remarkable. The passion for 
                learning and always on the cutting edge of 
                technology and design trends. Let's join 
                forces, spark innovation, and make some magic 
                together!
              </p>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='xl:w-[30%] w-full relative flex justify-end'
          >
            <div className=' xl:w-[291px] w-full xl:h-[340px] h-fit p-6 xl:p-0 rounded-[2rem] border-[.6rem] border-black'>
              <p className='text-black text-right font-[600] left-[-102%] h-[194px] flex justify-center items-center top-[22%] xl:bg-[white] xl:text-[3.5rem] text-[2rem] xl:absolute'>At heart, innovation, design, <br className='xl:flex hidden'/> and building.</p>
            </div>
          </motion.div>
        </div>
    </section>
    
  )
}

export default About
