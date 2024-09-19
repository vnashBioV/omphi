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
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.3}} 
                className='w-full flex-col xl:flex-row group mt-[4rem] flex border-b-[3px] cursor-pointer border-[#535353] justify-start py-[1rem]'
            >
              <h3 className='text-[#535353] group-hover:text-[3rem] group-hover:text-black text-[2rem] transition-all duration-300 font-[600]'>Branding</h3>
              <p className='text-black transition-all duration-300 group-hover:flex hidden xl:ml-[10rem]'>
                Creating a unique identity and image for your product, service, 
                company, or individual in the minds of your users or consumers. 
                Crafting a consistent message, visual identity, 
                and overall experience that communicates your values and
                personality.
              </p>
            </motion.div>

            <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
              className='w-full flex-col xl:flex-row group mt-[4rem] flex border-b-[3px] cursor-pointer border-[#535353] justify-start py-[1rem]'
            >
              <h3 className='text-[#535353] group-hover:text-[3rem] group-hover:text-black text-[2rem] transition-all duration-300 font-[600]'>Development</h3>
              <p className='text-black transition-all duration-300 group-hover:flex hidden xl:ml-[10rem]'>
                Creating software applications or systems through the use of programming 
                languages, frameworks, tools, and methodologies. Through a series 
                of stages, from conceptualization and planning to coding, testing, 
                deployment, and maintenance.
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
                Creating user interfaces (UI) and user experiences (UX) for digital products, 
                such as websites, mobile apps, and software applications. 
                while these are different aspects of the design process combined make up a complete digital experience.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='w-full flex-col xl:flex-row group mt-[4rem] flex border-b-[3px] cursor-pointer border-[#535353] justify-start py-[1rem]'
            >
              <h3 className='text-[#535353] group-hover:text-[3rem] group-hover:text-black text-[2rem] transition-all duration-300 font-[600]'>SEO</h3>
              <p className='text-black transition-all duration-300 group-hover:flex hidden xl:ml-[10rem]'>
                Optimizing your websites and online content to 
                improve their visibility and ranking in search engine 
                results pages (SERPs). The goal of SEO is to attract 
                more organic (non-paid) traffic to your website by 
                ensuring that it appears higher in search engine 
                results for relevant queries.
              </p>
            </motion.div>
        </div>
    </section>
  )
}

export default Services
