'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Posts = () => {

    const [swiper, setSwiper] = useState(null);

    return (
        <section className='w-full flex-col justify-center items-center flex' id="posts">
            <div className='container flex xl:flex-row flex-col xl:px-0 px-6 justify-between items-center mx-auto xl:mb-[15rem] mb-[5rem]'>
                <div className='xl:w-[25%] w-full xl:pb-0 pb-6'>
                    <motion.h3
                        variants={fadeIn('up', 0)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}  
                        className='text-black xl:text-[3rem] text-[2rem] leading-[62px] font-bold'
                    >
                        Latest News
                    </motion.h3>
                    <motion.p 
                        variants={fadeIn('up', 0)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} 
                        className='xl:mt-[3rem] mt-[2rem] text-black'
                    >
                        Stay Connected and Informed, Be the First to Know 
                        with our  Latest News Updates, Keeping You Ahead 
                        of the Curve on All the Latest Developments and 
                        Trends from Our Platform.
                    </motion.p>
                </div>

                <motion.div 
                    className='xl:w-[23%] w-full h-fit p-3'
                    variants={fadeIn('up', 1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                >
                    <div className='border xl:w-[296] w-full  rounded-[20px] h-[322px]'>
                        <Image src="/hand.jpg" width={2432} height={3648} alt='' className='object-cover rounded-[20px] w-full h-full'/>

                    </div>
                    <div className='w-full py-3'>
                        <p className='text-black font-[800] text-[1.3rem]'>orem ipsum dolor sit amet consectetur</p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quos vitae, officia, consectetur libero ullam aperiam 
                            iste aspernatur ratione explicabo nihil laborum tenetur...<span className='text-[black] font-bold cursor-pointer'>read more </span> 
                        </p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            1 April 2024
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('up', 2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='xl:w-[23%] w-full h-fit p-3'
                >
                    <div className='border xl:w-[296] w-full  rounded-[20px] h-[322px]'>
                        <Image src="/colab.jpg" width={2432} height={3648} alt='' className='object-cover rounded-[20px] w-full h-full'/>

                    </div>
                    <div className='w-full py-3'>
                        <p className='text-black font-[800] text-[1.3rem]'>orem ipsum dolor sit amet consectetur</p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quos vitae, officia, consectetur libero ullam aperiam 
                            iste aspernatur ratione explicabo nihil laborum tenetur...<span className='text-[black] font-bold cursor-pointer'>read more </span> 
                        </p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            1 April 2024
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('up', 3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='xl:w-[23%] w-full h-fit p-3'
                >
                    <div className='border xl:w-[296] w-full  rounded-[20px] h-[322px]'>
                        <Image src="/woman-couch.jpg" width={2432} height={3648} alt='' className='object-cover rounded-[20px] w-full h-full'/>

                    </div>
                    <div className='w-full py-3'>
                        <p className='text-black font-[800] text-[1.3rem]'>orem ipsum dolor sit amet consectetur</p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quos vitae, officia, consectetur libero ullam aperiam 
                            iste aspernatur ratione explicabo nihil laborum tenetur...<span className='text-[black] font-bold cursor-pointer'>read more </span> 
                        </p>
                        <p className='text-black pt-3 text-[.8rem]'>
                            1 April 2024
                        </p>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
}

export default Posts
