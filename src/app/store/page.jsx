import Image from "next/image";
import { client } from "../lib/sanity";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type == 'store']`
  const data = await client.fetch(query, { cache: 'no-store' });
  return data;
}

const Store = async() => {
  const store = await getData()

  return (
    <div className='text-black relative flex flex-col justify-start items-center bg-[#e0e3f3] h-[100vh]'>
      <div className='w-full h-[400px] relative flex justify-center items-center flex-col bg-store_overlay bg-cover before:content-[""] before:bg-black/80 before:left-0 before:right-0 before:top-0 before:bottom-0 before:absolute'>
        <div className="absolute left-0 text-white top-0 p-4 flex xl:text-[.9rem] text-[.7rem] justify-between items-center">
          <Link href="/" className="mr-2">Home</Link>
          {">"}
          <Link href="/store" className="ml-2"><b>Store</b></Link>
        </div>
        <div className="xl:w-[50%] w-full flex justify-center text-white relative items-center flex-col">
          <p className="text-center z-[1] font-normal xl:text-[2rem] text-[1.4rem]  py-6"> High-Quality Digital <br /> Products</p>
          <p className="xl:text-[1.2rem] text-[.8rem] text-center">Boost Your Development Efficiency</p>
        </div>
      </div>
      <div className='xl:w-[50%] w-full bottom-0 lx:mb-10 m-10 xl:absolute xl:h-[80%] xl:max-h-[60%] h-[100vh] border-[1px] scrollbar-hide overflow-y-scroll bg-[white] mx-auto flex flex-col rounded-xl p-6'>
        <div className="w-full flex justify-between xl:grid-cols-3 grid-cols-1 gap-8 flex-wrap items-center mt-5">
          {store.length > 0 && store.map((storeItem, index) => (
            <> 
              <Link 
                href={`/StoreItem/${storeItem.slug.current}`}
                key={index} 
                className="xl:w-[30%] w-full flex gap-2 flex-col p-4 hover:shadow-md transition-all duration-300 cursor-pointer rounded-xl"
              >
                <div className="w-full h-[190px] rounded-xl">
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
