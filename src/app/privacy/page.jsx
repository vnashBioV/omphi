import React from 'react'
import ptComponentsprivacy from "@/components/ptComponentsprivacy"
import { urlFor } from "@/app/lib/sanity";
import { client } from "../lib/sanity";
import { PortableText } from '@portabletext/react';

const getPrivacy = async () => {
    const query = `*[_type == 'privacy']`
    const data = await client.fetch(query);
    return data;
}

const Privacy = async () => {
    const privacy = await getPrivacy()
    const date = new Date()
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (
        <div className='text-black container mx-auto privacy my-[5rem]'>
            <h3 className='text-black text-[2rem] font-[600]'>Privacy Policy</h3>
            <p>Last updated: {date.getFullYear()} {months[date.getMonth()]} {date.getDate()}</p>
            <PortableText value={privacy[0]?.body} components={ptComponentsprivacy}/>
        </div>
    )
}

export default Privacy
