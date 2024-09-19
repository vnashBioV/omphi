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
    <div className='text-black relative flex flex-col justify-start items-center bg-[#e0e3f3] h-[100vh]'>
      <div className='w-full h-[200px] bg-white flex justify-center relative items-center bg-store_overlay before:content-[""] before:bg-black/50 before:left-0 before:right-0 before:top-0 before:bottom-0 bg-cover before:absolute'>
        <p className="text-center z-[1] font-semibold text-white text-[1.4rem]  py-6">Tshilitech {">"} Store</p>
      </div>
      <div className='xl:w-[50%] w-full bottom-0 lx:mb-10 m-10 xl:absolute xl:h-[80%] xl:max-h-[80%] h-[100vh] border-[1px] scrollbar-hide overflow-y-scroll bg-[white] mx-auto flex flex-col rounded-xl p-6'>
        <div className="w-full flex justify-between xl:grid-cols-3 grid-cols-1 gap-8 flex-wrap items-center mt-5">
          {store.length > 0 && store.map((storeItem, index) => (
            <> 
              <Link 
                href={`/StoreItem/${storeItem.slug.current}`}
                key={index} 
                className="xl:w-[30%] w-full flex gap-2 flex-col p-4 hover:shadow-md transition-all duration-300 cursor-pointer rounded-xl"
              >
                <div className="w-full h-[280px] rounded-xl">
                  <Image src={urlFor(storeItem.images[0]).url()} alt="" width={1919} height={1079} className="w-full h-full object-cover rounded-xl"/>
                </div>
                <p className="font-light mt-4">{storeItem?.title}</p>
                <p className="mt-3 font-semibold">R{storeItem?.price}</p>
              </Link>
            </>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Store
