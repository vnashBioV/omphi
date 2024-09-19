import Image from "next/image";
import { client } from "../lib/sanity";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type == 'store']`
  const data = await client.fetch(query, { cache: 'no-cache' });
  return data;
}

const Store = async() => {
  const store = await getData()

  return (
    <div className='text-black flex justify-center items-center bg-[#e0e3f3] h-[100vh]'>
      <div className='w-[50%] h-[80%] bg-[white] mx-auto flex flex-col rounded-xl p-6'>
        <p className="text-center font-semibold text-[1.5rem]">Store</p>
        <div className="w-full flex justify-between items-center mt-5">
          {store.length > 0 && store.map((storeItem, index) => (
            <Link 
              href={`/StoreItem/${storeItem.slug.current}`}
              key={index} 
              className="w-[30%] flex gap-2 flex-col p-4 hover:shadow-md transition-all duration-300 cursor-pointer rounded-xl"
            >
              <div className="w-full h-[280px] rounded-xl">
                <Image src={urlFor(storeItem.images[0]).url()} alt="" width={1919} height={1079} className="w-full h-full object-cover rounded-xl"/>
              </div>
              <p className="font-light mt-4">{storeItem?.title}</p>
              <p className="mt-3 font-semibold">R{storeItem?.price}</p>
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Store
