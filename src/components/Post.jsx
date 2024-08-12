'use client'
import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from '@portabletext/react';
import { IoTimer } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'
import ptComponents from './ptComponents'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Post = ({posts}) => {    
    console.log("🚀 ~ Post ~ posts:", posts)
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];  

    const sortedPosts = posts ?  posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) : posts;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
            <motion.div 
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='xl:w-[70%] w-full flex flex-row'
            >
                <Swiper 
                    // spaceBetween={50}
                    slidesPerView={!isTabletOrMobile ? 3 : 1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='w-full cursor-grab'
                >
                    { posts && sortedPosts.map((post) => {
                            return (
                                <SwiperSlide
                                    key={post._id}
                                >
                                    <div 
                                        className='w-full h-fit p-3'
                                    >
                                        <div className='border xl:w-[296] w-full  rounded-[20px] h-[322px]'>
                                            <Image src={urlFor(post.mainImage).url()} width={2432} height={3648} alt='post image' className='object-cover rounded-[20px] w-full h-full'/>
                                        </div>
                                        <div className='w-full py-3'>
                                            <div className='text-black font-[800] xl:h-[76px] text-[1rem]'>{post.title}</div>
                                            <div className='text-black pt-3 xl:h-[89px] text-[.8rem] blog-body'>
                                                <PortableText value={post.body} components={ptComponents} />
                                            </div>
                                            <div className='mt-6'>
                                                <Link href={`/postDetail/${post.slug.current}`} className='text-[black] font-bold cursor-pointer w-fit rounded-full px-4 text-[.7rem] p-2 border-black border'>Read More</Link> 
                                            </div>
                                            <div className='text-black mt-6 text-[.8rem] flex items-center'>
                                                <IoTimer className='text-[1.3rem] mr-[.8rem]'/> {new Date(post.publishedAt).getFullYear()} {months[new Date(post.publishedAt).getMonth()]} {new Date(post.publishedAt).getDate()}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Post
