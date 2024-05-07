'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { client } from "../../lib/sanity";
import { PortableText } from 'next-sanity'
import { urlFor } from "@/app/lib/sanity";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useRouter } from 'next/navigation'

const getPostBySlug = async (slug) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]`;
  const params = { slug }; // Define parameters for the query
  const post = await client.fetch(query, params);
  return post;
}

const getAuthorBySlug = async (slug) => {
  const query = `*[_type == 'post' && slug.current == $slug][0].author->`;
  const params = { slug }; // Define parameters for the query
  const author = await client.fetch(query, params);
  return author;
}

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

const PostPage = () => {
    const [postData, setPostData] = useState(null)
    const [authorData, setAuthorData] = useState(null)
    console.log("🚀 ~ PostPage ~ authorData:", authorData)
    console.log("🚀 ~ PostPage ~ postData:", postData?.mainImage)

    const router = useRouter()

    const path = usePathname()

    useEffect(() => {
      const fetchData = async () => {
        const pathParts = path.split('/');
        const slug = pathParts.length >= 3 ? pathParts[2] : null;
  
        const post = await getPostBySlug(slug);
        setPostData(post)
        console.log("Post:", post);
      };
  
      fetchData();
    }, [path]);

    useEffect(() => {
      const fetchData = async () => {
        const pathParts = path.split('/');
        const slug = pathParts.length >= 3 ? pathParts[2] : null;
  
        const post = await getAuthorBySlug(slug);
        setAuthorData(post)
        console.log("Author:", post);
      };
  
      fetchData();
    }, [path]);

  return (
    <div className='container xl:px-[10rem] px-6 mx-auto'>
        <div className='flex w-full xl:mb-14 my-4'>
          <div 
            className='flex items-center cursor-pointer justify-center group'
            onClick={() => router.push('/')}
          >
            <MdOutlineArrowBackIosNew className='text-[#535353] font-bold text-[2rem] group-hover:text-[2.3rem] transition-all duration-300'/> <p className='text-[#535353] group-hover:tracking-widest transition-all duration-300 text-[.8rem]'>Back</p>
          </div>
        </div>  
        <div className='w-full flex xl:flex-row flex-col-reverse'>
          <div className='xl:w-[50%] w-full flex flex-col justify-center xl:pr-[4rem] gap-10'>
            <div className='flex flex-row'>
              <div className='w-[4rem] h-[4rem] rounded-full bg-[#bdbdbd]'>
                {authorData &&
                  <Image 
                    src={authorData ? urlFor(authorData?.image).url() : ""}
                    width={200} 
                    height={200}
                    alt='Author Image'
                    className='w-full h-full object-cover rounded-full'
                  />
                }
              </div>
              <div className={`flex flex-col ml-4 justify-center ${!authorData && "bg-[#bdbdbd] w-[205px] h-[65px] rounded-xl"} `}>
                <p className='text-[grey] font-[500]'>{authorData?.name}</p>
                <p className='text-[#616161] text-[.8rem]'>
                  <PortableText value={authorData?.bio} components={ptComponents}/>
                </p>
              </div>
            </div>
            <h3 className={`text-black text-[2rem] font-[700] ${!postData && "bg-[#bdbdbd] xl:w-[544px] w-full xl:h-[144px] rounded-xl"}`}>{postData?.title}</h3>

            <div className={`w-full h-[700px] mx-h-[700px] blog-paragraph ${!postData && "bg-[#bdbdbd] w-[544px] h-[344px] mx-h-[344px] rounded-xl"} overflow-scroll scrollbar-hide`}>
              <p className='text-black font-[400]'>
                <PortableText value={postData?.body} components={ptComponents}/>
              </p>
            </div>
          </div>
          <div className={`xl:h-[500px] xl:rounded-none rounded-xl mb-[3rem] xl:mb-0 xl:w-[50%] w-full ${!postData && "bg-[#bdbdbd] xl:w-[544px] w-full xl:h-[344px] rounded-xl"} border`}>
            { postData &&
              <Image 
                src={postData ? urlFor(postData?.mainImage).url() : ""}
                width={2880}
                height={1800}
                alt='Post Image'
                className='w-full h-full xl:rounded-none rounded-xl object-cover'
              />
            }
          </div>
        </div>
    </div>
  )
}

export default PostPage
