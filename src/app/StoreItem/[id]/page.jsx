'use client';
import { usePathname } from 'next/navigation';
import { MdChevronRight } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, urlFor } from '@/app/lib/sanity';
import Loader from '@/components/Loader';
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';

const getStoreItemBySlug = async (slug) => {
    const query = `*[_type == 'store' && slug.current == $slug][0]{
        title,
        description,
        price,
        slug,
        images,
        date
    }`;
    const params = { slug };
    const post = await client.fetch(query, params);
    return post;
}

const StoreItem = () => {
    const [data, setData] = useState(null);
    const path = usePathname();
    console.log("🚀 ~ page ~ path:", path);

    useEffect(() => {
        const fetchData = async () => {
            // Ensure that the path is correctly split to get the slug
            const pathParts = path.split('/');
            const slug = pathParts[pathParts.length - 1] || null; // Assuming slug is the last part of the path

            if (slug) {
                const post = await getStoreItemBySlug(slug);
                setData(post);
                console.log("Post:", post);
            }
        };

        fetchData();
    }, [path]);

    const handlePayment = async () => {
        try {
            const response = await fetch('/api/payfast-initiate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item_name: data.title,
                    amount: data.price,
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }
    
            const { paymentUrl } = await response.json();
    
            if (paymentUrl) {
                window.location.href = paymentUrl; // Redirect user to PayFast payment page
            } else {
                console.error('Payment URL not found in response.');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };
    

    if (!data) {
        return (
            <div className='w-[100%] h-[100vh] mx-auto flex justify-center items-center'>
                <Loader />
            </div>
        );
    }

    return (
        <div className='text-black flex justify-center items-center bg-[#e0e3f3] xl:h-[100vh]'>
            <div className='xl:w-[50%] w-full bg-[white] mx-auto flex flex-col rounded-xl p-6'>
                <div className='flex items-center'>
                    <p className="mr-3 xl:text-[1rem] text-[.7rem] text-[gray]">Tshilitech</p>
                    <p className="mr-3 text-[gray]"><MdChevronRight /></p>
                    <p className="mr-3 xl:text-[1rem] text-[.7rem] text-[gray]">Store</p>
                    <p className="mr-3 text-[gray]"><MdChevronRight /></p>
                    <p className="mr-3 xl:text-[1rem] text-[.7rem] text-[gray]">{data.title}</p>
                </div>
                <div className="w-full h-[50%] bg-[#dfe3ff] mt-4 rounded-xl">
                    <div className="xl:w-[70%] w-full xl:rounded-none rounded-xl mx-auto h-full flex flex-col justify-center items-center">
                        <Image
                            src={urlFor(data.images[1]).url()}
                            alt=""
                            width={1920}
                            height={1080}
                            priority
                            quality={100}
                            className="w-full h-full object-contain xl:rounded-none rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex flex-row !mt-4">
                    <div className="w-[100%] flex flex-col gap-3 h-full p-6">
                        <p className="font-semibold text-2xl">{data.title}</p>
                        <p className=" font-extralight text-[1rem]">{data.description}</p>
                        <p className="font-semibold text-xl">R{data.price}</p>
                        <button
                            className='xl:w-[25%] w-[50%] h-14 text-white text-[1rem] rounded-full bg-[#455CE9] hover:bg-[#455CE9]/50 transition-all duration-300'
                            onClick={handlePayment}
                        >
                            Get the code
                        </button>
                        <div className='flex items-center mt-6 gap-2'>
                            <Link href="https://www.tiktok.com/@tshilidzirambuda2" target='_blank' className="text-[1rem] !justify-self-end cursor-pointer hover:bg-[#dfe3ff] transition-all duration-300 p-3 rounded-full w-fit"><IoLogoTiktok /></Link>
                            <Link href="https://www.facebook.com/tshilitech" target='_blank' className="text-[1rem] !justify-self-end cursor-pointer hover:bg-[#dfe3ff] transition-all duration-300 p-3 rounded-full w-fit"><FaFacebookF /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreItem;
