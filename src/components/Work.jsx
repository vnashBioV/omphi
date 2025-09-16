'use client'
import React from 'react'
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
  return (
    <section className='w-full flex justify-center items-center mt-10' id="work">
        <div className='container mx-auto xl:mb-[15rem] mb-[2rem] xl:px-0 px-6'>
            <motion.h3 
                variants={fadeIn('right', 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='text-black xl:text-[2.5rem] text-[2rem] xl:leading-[62px] leading-[49px] font-bold'>
                Work
            </motion.h3> 

            <div className='w-full flex justify-between xl:flex-row flex-col items-center'>
                <div className='xl:w-[45%] xl:mb-0 mb-10 w-full border-black flex justify-between'>
                    <div className='w-full'>
                        <div className='h-[500px] border mb-3'>
                            <a target="_blank" href="https://www.figma.com/design/OpwDNpdkmM6eQz92EtzhrO/Newsletter-application-UI?node-id=117-346&t=13CLekOPgPkdWi2w-1" className='w-full h-full border !flex justify-center items-center'>
                                <Image src="/wesite-work.png" alt='home art' className='w-full h-full object-contain' width={1076} height={714}/>
                            </a>
                        </div>
                        <h3 className='italic text-black'>Web design</h3>
                        <p className='text-black font-bold'>Newsletter application UI</p>
                    </div>
                </div>
                <div className='xl:w-[45%] w-full border-black flex justify-between'>
                    <div className='w-full'>
                        <div className='h-[500px] border mb-3'>
                            <a target="_blank" href="https://www.figma.com/design/lypqrEVzbnMxPJwQNzXtPR/Messaging---Chatbox-App-Design?node-id=0-1&t=R1Tjyly2BLHf9vFt-1" className='w-full h-full border !flex justify-center items-center'>
                                <Image src="/mobile-work.png" alt='home art' className='w-full h-full object-contain' width={840} height={400}/>
                            </a>
                        </div>
                        <h3 className='italic text-black'>Mobile design</h3>
                        <p className='text-black font-bold'>Messaging App</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Work;
