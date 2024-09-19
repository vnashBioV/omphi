'use client'
import Image from 'next/image'
import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {AiFillCheckCircle} from 'react-icons/ai';
import Loader from './Loader';

import {sendContactForm} from '../app/lib/sendMessage'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {

  const [emailsent, setEmailSent] = useState(false);
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    setLoader(true);
    console.log(data);
    try {
      await sendContactForm(data);
      setLoader(false);
      setEmailSent(true)
      setTimeout(() =>{
        setEmailSent(false);
        reset()
      },4000)
    } catch (error) {
      setEmailSent(false)
      setError(true)
      setErrorMessage(error.message)
    }
  };

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
          <div className='xl:h-[650px] h-[350px] xl:w-[35%] w-full flex justify-center items-center'>
              <Image src="/contact.png" width={1424} height={3280}  className='w-[45%] h-full object-contain'/>
          </div>
          <div className='xl:h-[650px] my-[2rem] xl:w-[65%] w-full flex flex-col justify-center'>
            <form 
              onSubmit={handleSubmit(formSubmit)}
              className='xl:w-[50%] w-full flex flex-col xl:h-[300px] relative'
            >
              <motion.div 
                variants={fadeIn('up', 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex xl:flex-row flex-col justify-between'
              >
                <input 
                  type="text"  
                  className='xl:w-[46%] xl:mb-0 mb-8 w-full h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[.9rem] rounded-full text-black' 
                  placeholder={errors.name ? errors.name.message : "Name"}
                  {...register("name", { required: 'Please enter your name'  })}
                />
                <input 
                  type="text"  
                  className='xl:w-[46%] w-full h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[.9rem] rounded-full text-black' 
                  placeholder={errors.email ? errors.email.message : "Email"}
                  {...register("email", { required: 'Please enter your email'  })}
                />
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <input 
                  type="text"  
                  className='w-[100%] h-[2.8rem] border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 text-[.9rem] rounded-full text-black' 
                  placeholder={errors.subject ? errors.subject.message : "Subject"}
                  {...register("subject", { required: 'Please enter subject'  })}
                />
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <textarea 
                  name="" 
                  id="" 
                  cols={30} 
                  rows={10}
                  className='w-[100%] h-[9rem] resize-none border-none bg-[#EAE6E6] placeholder:text-black placeholder:text-[.9rem] outline-none px-6 py-4 text-[.9rem] rounded-[20px] text-black' 
                  placeholder={errors.message ? errors.message.message : "Message"}
                  {...register("message", { required: 'Please enter your message'  })}
                >
                </textarea>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}} 
                className='w-full flex mt-[2rem] justify-between'
              >
                <button 
                  className='w-[100%] relative h-[2.8rem] border-none hover:tracking-widest hover:text-black hover:bg-white transition-all duration-300 bg-[#000000] outline-none px-6 text-[1rem] rounded-full text-white' 
                >
                  Send
                  <FaLongArrowAltRight className='absolute right-[5%] top-[23%] text-[1.8rem]'/>
                </button>
              </motion.div>

              {emailsent &&
                <div className=' absolute flex justify-center items-center right-0 left-0 bottom-0 top-0 w-full h-full'>
                  <motion.div 
                      className='flex flex-col justify-center  items-center w-fit p-5 rounded-xl bg-[white]'
                      variants={fadeIn('up', 0.9)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                    >
                      <p className='text-[2rem] text-black'><AiFillCheckCircle/></p>
                      <h1 className='text-black mt-4'>Thank you for your message! <br/> we will get back to you shortly.</h1>
                  </motion.div>
                </div>
              }
              {loader &&
                <Loader/>
              }
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
