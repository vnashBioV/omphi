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
    <div className='w-full flex relative justify-center'>
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
              Websites, Apps, and <br className='md:flex hidden'/> <span className='xl:bg-black rounded-xl px-3 xl:text-white'>Digital Solutions</span>  <br className='md:flex hidden'/> Tailored Just for You
          </motion.h1>
          <div className='w-full flex '>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}  
              className='text-black flex flex-col items-center'
            >
              <NextLink href="https://www.facebook.com/tshilitech" target='_blank' className='rounded-full -rotate-90 hover:bg-gray-300 p-2 text-[1.4rem] cursor-pointer transition-all duration-300'><FaFacebookF /></NextLink>
              <NextLink href="https://www.tiktok.com/@tshilidzirambuda2" target='_blank' className='rounded-full -rotate-90 hover:bg-gray-300 p-2 text-[1.4rem] cursor-pointer transition-all duration-300 mt-2'><IoLogoTiktok /></NextLink>
              <p className='h-7 w-[.2rem] bg-black mt-2'></p>
            </motion.div>
            <div className='ml-6'>
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
                className='flex justify-between mt-[2.5rem] cursor-pointer w-fit items-center'
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
                  <p className={`text-black xl:text-[2rem] text-[1.4rem]  ${send ? "border-0 tracking-wide" : "border-b-[2px] border-black"} transition-all duration-300  ease-in-out w-fit`}>Get in touch</p>
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
                    <Image src="homeart.svg" className='w-full h-full object-contain' width={466} height={323}/>
                  </div>
                
              </MouseParallaxChild>
            </MouseParallaxContainer>
        </motion.div>
        
      </div>
    </div>
    
  )
}

export default Banner
