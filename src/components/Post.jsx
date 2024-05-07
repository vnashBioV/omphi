'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { urlFor } from "@/app/lib/sanity";
import BlockContent from '@sanity/block-content-to-react'
import { PortableText } from 'next-sanity'
import { IoTimer } from "react-icons/io5";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          />
        )
      }
    }
}

const Post = ({posts}) => {    
    console.log("🚀 ~ Post ~ posts:", posts)

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];  

    return (
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
            { posts && posts.map((post, i) => {
                    return (
                        <motion.div 
                            key={i}
                            className='xl:w-[23%] w-full h-fit p-3'
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}} 
                        >
                            <div className='border xl:w-[296] w-full  rounded-[20px] h-[322px]'>
                                <Image src={urlFor(post.mainImage).url()} width={2432} height={3648} alt='' className='object-cover rounded-[20px] w-full h-full'/>

                            </div>
                            <div className='w-full py-3'>
                                <p className='text-black font-[800] xl:h-[76px] text-[1rem]'>{post.title}</p>
                                <p className='text-black pt-3 xl:h-[89px] text-[.8rem] blog-body'>
                                    <PortableText value={post.body} components={ptComponents}/>
                                </p>
                                <p className='text-[black] mt-4 font-bold cursor-pointer w-fit rounded-full px-4 text-[.7rem] p-2 border-black border'>Read More</p> 
                                <p className='text-black mt-4 text-[.8rem] flex items-center'>
                                    <IoTimer className='text-[1.3rem] mr-[.8rem]'/> {new Date(post.publishedAt).getFullYear()} {months[new Date(post.publishedAt).getMonth()]} {new Date(post.publishedAt).getDate()}
                                </p>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default Post
