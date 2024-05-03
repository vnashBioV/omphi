'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return (
    <section className='w-full flex justify-center items-center' id="services">
        <div className='container mx-auto xl:mb-[15rem] mb-[5rem] xl:px-0 px-6'>
            <div className='w-full flex flex-col xl:flex-row justify-between xl:items-center '>
                <motion.h3 
                    variants={fadeIn('right', 0)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='text-black xl:text-[3rem] text-[2rem] xl:leading-[62px] leading-[49px] font-bold'>
                    What Services <br /> Are Offered
                </motion.h3>
                <motion.p 
                  variants={fadeIn('left', 0)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.3}} 
                  className='text-black xl:w-[710px] w-full text-[1.1rem]'
                >
                  Discover how our services empower businesses 
                  to shine brighter online, building trust and 
                  expanding their horizons. With our proven digital 
                  strategies, we're here to elevate your brand's 
                  visibility, reputation, and success. Here are the 
                  services we provide.
                </motion.p>
            </div>
            <motion.div 
                variants={fadeIn('up', 2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.3}} 
                className='w-full mt-[4rem] flex justify-between border-b-[3px] cursor-pointer border-[#535353] items-center py-[1rem]'
            >
              <h3 className='text-[#535353] text-[2rem] font-[600]'>Branding</h3>
              <div 
                className={`h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center ml-6`}
              >
                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
              </div>
            </motion.div>
            <motion.div 
                variants={fadeIn('up', 2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
              className='w-full flex justify-between border-b-[3px] cursor-pointer border-[#535353] pt-[2rem] items-center py-[1rem]'
            >
              <h3 className='text-[#535353] text-[2rem] font-[600]'>Development</h3>
              <div 
                className={`h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center ml-6`}
              >
                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='w-full flex justify-between border-b-[3px] cursor-pointer border-[#535353] pt-[2rem] items-center py-[1rem]'
            >
              <h3 className='text-[#535353] text-[2rem] font-[600]'>UX/UI Design</h3>
              <div 
                className={`h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center ml-6`}
              >
                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='w-full flex justify-between border-b-[3px] cursor-pointer border-[#535353] pt-[2rem] items-center py-[1rem]'
            >
              <h3 className='text-[#535353] text-[2rem] font-[600]'>SEO</h3>
              <div 
                className={`h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center ml-6`}
              >
                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
              </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Services
