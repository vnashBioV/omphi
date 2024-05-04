import Image from 'next/image'
import React from 'react'

const BackgroundArt = () => {
  return (
    <div className="text-black absolute top-[-6%] left-[0%] z-[-1] h-fit w-fit backdrop-blur-xl bg-white/30" style={{ filter: 'blur(3px)'}}>
        <Image src="/bg-pattern.svg" width={769} height={1209} alt="" className="objec-cover"/>
    </div>
  )
}

export default BackgroundArt
