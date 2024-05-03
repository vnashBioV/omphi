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
                <div className='xl:w-[25%] w-full xl:h-[772px] xl:pb-0 pb-6'>
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
                    <motion.div 
                        variants={fadeIn('up', 0)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} 
                        className='xl:mt-[4rem] mt-[2rem] flex flex-col justify-between p-6 w-[100%] xl:h-[500px] h-[400px] rounded-[37px] before:z-[-1] relative before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-full before:h-full before:bg-black/50 before:rounded-[37px]'>
                        <Image src="/hand.jpg" alt='' width={2432} height={3648} className='h-full w-full object-cover absolute left-0 right-0 bottom-0 top-0 z-[-2] rounded-[37px]'/>
                        <div className='flex justify-end items-center'>
                            <div 
                                className='h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center'
                            >
                                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p>
                                Stay Connected and Informed, Be the First to Know with our  
                                Latest News Updates, Keeping You Ahead of the Curve on All 
                                the Latest Developments and Trends from Our Platform.
                            </p>
                            <div className='mt-6 w-fit px-3 py-1 bg-white rounded-full '>
                                <p className='text-black text-[.9rem] italic'>1 April 2024</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    variants={fadeIn('up', 1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='xl:w-[25%] w-full xl:h-[772px] h-[400px] xl:pb-0 pb-6'
                >
                    <div className='flex flex-col justify-between p-6 w-[100%] h-full rounded-[37px] before:z-[-1] relative before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-full before:h-full before:bg-black/50 before:rounded-[37px]'>
                        <Image src="/colab.jpg" alt='' width={6000} height={4000} className='h-full w-full object-cover absolute left-0 right-0 bottom-0 top-0 z-[-2] rounded-[37px]'/>
                        <div className='flex justify-end items-center'>
                            <div 
                                className='h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center'
                            >
                                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p>
                                Stay Connected and Informed, Be the First to Know with our  
                                Latest News Updates, Keeping You Ahead of the Curve on All 
                                the Latest Developments and Trends from Our Platform.
                            </p>
                            <div className='mt-6 w-fit px-3 py-1 bg-white rounded-full '>
                                <p className='text-black text-[.9rem] italic'>1 April 2024</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeIn('up', 2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='xl:w-[40%] w-full xl:h-[772px] flex flex-col justify-between'
                >
                    <div className='flex xl:pm-0 mb-6 flex-col justify-between p-6 w-[100%] xl:h-[45%] h-[400px] border rounded-[37px] before:z-[-1] relative before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-full before:h-full before:bg-black/50 before:rounded-[37px]'>
                        <Image src="/colab.jpg" alt='' width={6000} height={4000} className='h-full w-full object-cover absolute left-0 right-0 bottom-0 top-0 z-[-2] rounded-[37px]'/>
                        <div className='flex justify-end items-center'>
                            <div 
                                className='h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center'
                            >
                                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p>
                                Stay Connected and Informed, Be the First to Know with our  
                                Latest News Updates, Keeping You Ahead of the Curve on All 
                                the Latest Developments and Trends from Our Platform.
                            </p>
                            <div className='mt-6 w-fit px-3 py-1 bg-white rounded-full '>
                                <p className='text-black text-[.9rem] italic'>1 April 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between p-6 w-[100%] xl:h-[45%] h-[400px] rounded-[37px] before:z-[-1] relative before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-full before:h-full before:bg-black/50 before:rounded-[37px]'>
                        <Image src="/colab.jpg" alt='' width={6000} height={4000} className='h-full w-full object-cover absolute left-0 right-0 bottom-0 top-0 z-[-2] rounded-[37px]'/>
                        <div className='flex justify-end items-center'>
                            <div 
                                className='h-[50px] w-[50px] cursor-pointer rounded-full flex transition-all ease-in-out duration-500 justify-center bg-[#535353] items-center'
                            >
                                <FaArrowRight className='text-white transition-all duration-300 text-[1.5rem]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p>
                                Stay Connected and Informed, Be the First to Know with our  
                                Latest News Updates, Keeping You Ahead of the Curve on All 
                                the Latest Developments and Trends from Our Platform.
                            </p>
                            <div className='mt-6 w-fit px-3 py-1 bg-white rounded-full '>
                                <p className='text-black text-[.9rem] italic'>1 April 2024</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Posts
