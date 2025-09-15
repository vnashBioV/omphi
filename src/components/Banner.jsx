'use client'
import React, {useState} from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { FaArrowRight } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'
import { Link } from 'react-scroll';
import NextLink  from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const Banner = () => {
  const [send, setSend] = useState(false);

  const handleMouseEnter = () => {
    setSend(true);
  };

  const handleMouseLeave = () => {
    setSend(false);
  };

  return (
    <div className='w-full flex relative justify-center mb-20'>
       {/* video */}
      {/* <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover before:left-0 before:top-0 before:right-0 before:bottom-0 before:h-full before:w-full before:content-[] before:bg-green-400"
      >
        Your browser does not support the video tag.
        <source src="/video3.mp4" type="video/mp4"/>
      </video> */}
      <div className='container mx-auto flex flex-row xl:h-[750px] relative h-[500px] mt-[90px] xl:m-0' id="home">
        <div className='xl:w-[60%] w-[100%] xl:px-0 px-6  gap-7 h-full flex flex-col justify-center'>
          <motion.h1 
            variants={fadeIn('right', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='xl:text-[3.3rem] text-[2.3rem] font-[700] xl:leading-[95px] leading-[49px] text-black'
          >
            Classy Developer/ <br className='xl:flex hidden'/> 
            UI UX Designer <br className='md:flex hidden'/> 
          </motion.h1>
          <div className='w-full flex '>
            
            <div className='ml-6'>
              <motion.p 
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='text-[1.1rem] font-[400] text-black'
              >
                  Empowering ideas through beautiful design and functional code — <br className='xl:flex hidden'/> 
                  where creativity meets precision, and every line of code <br className='xl:flex hidden'/> 
                  is written with care, clarity, and confidence. well suited for your business needs
              </motion.p>

              <motion.div 
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='flex justify-between mt-[2.5rem] cursor-pointer w-fit items-center'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}  
              >
                <Link
                  to="contact"
                  smooth={true}
                  spy
                  offset={-50}
                  className='flex justify-between items-center bg-[#495FEF] px-10 py-4 rounded-full hover:opacity-75 transition-all duration-300'
                >
                  <p className={`text-white`}>Reach out</p>
                </Link>
              
              </motion.div>
            </div>
          </div>
          
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
                  factorX={0.2} 
                  factorY={0.4} 
                  className="relative w-full h-full flex justify-center items-center"
                >
                  <div className='w-full h-full'>
                    <Image src="/homeart.svg" alt='home art' className='w-full h-full object-contain' width={466} height={323}/>
                  </div>
                
              </MouseParallaxChild>
            </MouseParallaxContainer>
        </motion.div>
        
      </div>
    </div>
    
  )
}

export default Banner
