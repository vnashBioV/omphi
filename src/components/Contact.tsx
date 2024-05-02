'use client'
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <section className='w-full' id="contact">
      <div className='container mx-auto xl:mb-[15rem] mb-[5rem] xl:px-0 px-6'>
        <div className='w-full'>
          <motion.h3 
            variants={fadeIn('up', 0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='text-black xl:text-[3rem] text-[2rem] leading-[62px] font-bold'
          >
            Let’s Talk.<span className='text-[#989898]'>.</span>.
          </motion.h3>
        </div>
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='xl:h-[650px] h-[350px] xl:w-[35%] w-full'>
              {/* 3D Art */}
          </div>
          <div className='h-[650px] xl:w-[65%] w-full flex flex-col justify-center'>
            <div className='xl:w-[50%] w-full flex flex-col h-[300px]'>
              <motion.div 
                variants={fadeIn('up', 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex justify-between'
              >
                <input 
                  type="text"  
                  className='w-[46%] h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[1rem] rounded-full text-black' 
                  placeholder="Name"
                />
                <input 
                  type="text"  
                  className='w-[46%] h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[1rem] rounded-full text-black' 
                  placeholder="Email"
                />
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <input 
                  type="text"  
                  className='w-[100%] h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[1rem] rounded-full text-black' 
                  placeholder="Subject"
                />
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <textarea 
                  name="" 
                  id="" 
                  cols="30" 
                  rows="10"
                  className='w-[100%] h-[9rem] resize-none border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 py-4 text-[1rem] rounded-[20px] text-black' 
                  placeholder="Message"
                >
                </textarea>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <button 
                  type="btn"  
                  className='w-[100%] relative h-[2.8rem] border-none hover:tracking-widest hover:text-black hover:bg-white transition-all duration-300 bg-[#000000] outline-none px-6 text-[1rem] rounded-full text-white' 
                >
                  Send
                  <FaLongArrowAltRight className='absolute right-[5%] top-[23%] text-[1.8rem]'/>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
