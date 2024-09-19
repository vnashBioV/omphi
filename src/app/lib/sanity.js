import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'vqxv3di5',
    dataset: 'production',
    apiVersion: '2024-04-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const imgBuilder = ImageUrlBuilder(client);

export const urlFor = (source) =>{
    return imgBuilder.image(source);
}
export function urlForFile(source) {
    const ref = source?._ref;
    if (!ref) return '';

    const [fileType, fileId, extension] = ref.split('-');
    
    // Construct the URL manually for files
    return `https://cdn.sanity.io/files/vqxv3di5/production/${fileId}.${extension}`;
}
