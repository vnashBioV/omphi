import React from 'react'
import ptComponentsprivacy from "@/components/ptComponentsprivacy"
import { client } from "../lib/sanity";
import { PortableText } from '@portabletext/react';

const getPrivacy = async () => {
    const query = `*[_type == 'privacy'][0]`; // Fetch only the first privacy document
    const data = await client.fetch(query);
    return data;
}

const Privacy = async () => {
    const privacy = await getPrivacy();

    // Extract lastUpdated from Sanity
    const lastUpdated = privacy?.lastUpdated ? new Date(privacy.lastUpdated) : new Date();
    
    // Format the date
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const formattedDate = `${lastUpdated.getFullYear()} ${months[lastUpdated.getMonth()]} ${lastUpdated.getDate()}`;

    return (
        <div className='text-black container mx-auto privacy my-[5rem]'>
            <h3 className='text-black text-[2rem] font-[600]'>Privacy Policy</h3>
            <p>Last updated: {formattedDate}</p>
            <PortableText value={privacy?.body} components={ptComponentsprivacy}/>
        </div>
    )
}

export default Privacy;
