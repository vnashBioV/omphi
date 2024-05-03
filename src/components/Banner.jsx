'use client'
import React, {useState} from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { FaArrowRight } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'
import { Link } from 'react-scroll';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const MobileScene = dynamic(() => import('@/components/scenes/MobileScene'), {
  ssr: false
})

const Banner = () => {
  const [send, setSend] = useState(false);

  const handleMouseEnter = () => {
    setSend(true);
  };

  const handleMouseLeave = () => {
    setSend(false);
  };

  return (
    <div className='container flex flex-row xl:h-[750px] h-[500px] mt-[90px] xl:m-0' id="home">
      <div className='xl:w-[60%] w-[100%] xl:px-0 px-6  gap-7 h-full flex flex-col justify-center'>
        <motion.h1 
          variants={fadeIn('right', 0)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='xl:text-[3.8rem] text-[2.3rem] font-[700] xl:leading-[83px] leading-[49px] text-black'
        >
            Websites, Apps, and Digital <br className='mdl:flex hidden'/> Solutions Tailored Just for <br className='md:flex hidden'/> You
        </motion.h1>
        <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='text-[1.1rem] font-[400] text-black'
        >
            Building stunning websites and smart applications <br className='xl:flex hidden'/> well suited for your business needs
        </motion.p>
        <motion.div 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='flex justify-between mt-[.5rem] cursor-pointer w-fit items-center'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}  
        >
          <Link
            to="contact"
            smooth={true}
            spy
            offset={-50}
            className='flex justify-between items-center'
          >
            <p className={`text-black text-[2rem]  ${send ? "border-0 tracking-wide" : "border-b-[2px] border-black"} transition-all duration-300  ease-in-out w-fit`}>Get in touch</p>
            <div 
              className={`h-[58px] w-[58px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center ${send ? "bg-white" : "bg-black"} items-center ml-6`}
            >
              {!send ? 
                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
                :
                <MdSend className='text-[1.5rem] text-black transition-all duration-300'/>
              }
            </div>
          </Link>
         
        </motion.div>
        
      </div>
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
        className="w-[40%] xl:flex hidden cursor-grab flex-row relative justify-end h-full"
      >
        <MouseParallaxContainer 
          globalFactorX={0.1} 
          globalFactorY={0.2} 
          resetOnLeave
          className='w-full cursor-grab flex flex-row relative justify-end h-full'>
            <MouseParallaxChild 
                factorX={0.4} 
                factorY={0.8} 
                className="relative w-full h-full flex justify-center items-center"
              >
                <div className='w-[397px] h-[611px]'>
                  <Image src="moblephoneOne.svg" className='w-full h-full object-cover' width={397} height={611}/>
                </div>
              
            </MouseParallaxChild>
          </MouseParallaxContainer>
      </motion.div>
      
    </div>
  )
}

export default Banner
