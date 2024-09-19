'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import dynamic from 'next/dynamic';
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'
import { SiVisualstudiocode } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const About = () => {
  return (
    <section 
      className='w-full bg-black flex justify-center items-center relative xl:mb-[15rem] mb-[5rem]'
      id='about'
    >
        <div className='container mx-auto xl:h-[800px] h-fit flex justify-between'>
          <motion.div 
            variants={fadeIn('right', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='w-[13%] h-full flex items-center justify-center'
          >
            <p className='text-white text-center xl:flex hidden -rotate-90 text-[2.4rem] font-bold'>About <br /> Tshilitech</p>
          </motion.div>

          <div className='xl:w-[74%] w-full flex justify-center items-center h-full'>
            <div className='pl-4 py-28 pr-14 h-full flex flex-col w-full'>
              <motion.p 
                variants={fadeIn('down', 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='text-[2.2rem] font-bold mb-10'
              >
                Our Story
              </motion.p>
              <motion.p
                variants={fadeIn('down', 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}  
                className='mb-10'
              >
                At TshiliTech, our journey began with a simple belief that every business, 
                no matter how small, deserves a strong online presence. As a passionate 
                web developer, I started this venture to bring high-quality web development 
                services to local businesses in Johannesburg and beyond. Even though we’re 
                a startup, we are driven by a commitment to excellence, creativity, 
                and customer satisfaction.
              </motion.p>
              <motion.p
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
              >
                Every project we take on is an opportunity to showcase our skills and make 
                a lasting impact. Whether it’s building a brand-new website from scratch or 
                revamping an existing one, we approach each task with the same level of 
                dedication and attention to detail.
              </motion.p>
              <motion.div 
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-[75%] relative self-center justify-end xl:flex hidden flex-row 2xl:h-[20rem] h-[12rem] mt-[4rem]'
              >
                <div 
                  className='w-[37%] h-[130%] absolute left-0 right-0 top-[50%] translate-y-[-50%] bottom-0'
                >
                  <Image src="/laptop.png" width={3136} height={3060} alt='' className='object-contain w-full h-full'/>
                </div>
                <div className='w-[80%] h-full bg-white flex flex-col justify-center items-start pl-[12rem] 2xl:gap-3 gap-2'>
                  <div className='flex items-center'>
                    <p className='text-[#455CE9] text-[1.7rem]'><FaCheckCircle /></p>
                    <p className='text-black ml-4 font-medium 2xl:text-[16px] text-[14px]'>Clean and powerfull code</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-[#455CE9] text-[1.7rem]'><FaCheckCircle /></p>
                    <p className='text-black ml-4 font-medium 2xl:text-[16px] text-[14px]'>Efficient and Optimized Performance</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-[#455CE9] text-[1.7rem]'><FaCheckCircle /></p>
                    <p className='text-black ml-4 font-medium 2xl:text-[16px] text-[14px]'>Modular and Reusable Components</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-[#455CE9] text-[1.7rem]'><FaCheckCircle /></p>
                    <p className='text-black ml-4 font-medium 2xl:text-[16px] text-[14px]'>Adherence to Industry Standards</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='w-[13%] h-full xl:flex hidden justify-center items-center'>
            <motion.div 
              variants={fadeIn('left', 0)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='w-[111px] h-[543px]'
            >
              <Image src="/about.svg" width={111} height={543} className='object-contain w-full h-full'  />  
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default About
