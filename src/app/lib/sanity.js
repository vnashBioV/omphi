import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PRODUCT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-04-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const imgBuilder = ImageUrlBuilder(client);

export const urlFor = (source) =>{
    return imgBuilder.image(source);
}
export function urlForFile(source) {
    return imgBuilder.file(source);
}