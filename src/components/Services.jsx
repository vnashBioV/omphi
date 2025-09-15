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
    <section className='w-full flex justify-center items-center mt-20' id="services">
        <div className='container mx-auto xl:mb-[15rem] mb-[5rem] xl:px-0 px-6'>
            <div className='w-full flex flex-col gap-3'>
                <motion.h3 
                    variants={fadeIn('right', 0)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='text-black xl:text-[2.5rem] text-[2rem] xl:leading-[62px] leading-[49px] font-bold'>
                    What I Do?
                </motion.h3> 
                <motion.p 
                  variants={fadeIn('left', 0)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.3}} 
                  className='text-black xl:w-[710px] w-full text-[1.1rem]'
                >
                  With a passion for technology, I specialize in UX/UI Design, web and mobile  development. My expertise lies in creating innovative, scalable, and efficient solutions that help businesses.
                </motion.p>
            </div>

            <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
              className='w-full flex-col xl:flex-row group mt-[4rem] flex border-b-[3px] cursor-pointer border-[#535353] justify-start py-[1rem]'
            >
              <h3 className='text-[#535353] group-hover:text-[3rem] group-hover:text-black text-[2rem] transition-all duration-300 font-[600]'>Development</h3>
              <p className='text-black transition-all duration-300 group-hover:flex hidden xl:ml-[10rem]'>
                The process of developing software applications or systems using programming languages, frameworks, tools, and methodologies, carried out through stages such as conceptualization, planning, coding, testing, deployment, and ongoing maintenance.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='w-full flex-col xl:flex-row group mt-[4rem] flex border-b-[3px] cursor-pointer border-[#535353] justify-start py-[1rem]'
            >
              <h3 className='text-[#535353] group-hover:text-[3rem] group-hover:text-black text-[2rem] whitespace-nowrap transition-all duration-300 font-[600]'>UX/UI Design</h3>
              <p className='text-black transition-all duration-300 group-hover:flex hidden xl:ml-[10rem]'>
                Designing user interfaces (UI) and user experiences (UX) for digital products such as websites, mobile apps, and software applications. Though distinct, these aspects of the design process work together to create a seamless digital experience.
              </p>
            </motion.div>
        </div>
    </section>
  )
}

export default Services
