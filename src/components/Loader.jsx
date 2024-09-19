import React from 'react'

const Loader = () => {
  return (
    <div className=' absolute flex justify-center items-center right-0 left-0 bottom-0 top-0 w-full h-full'>
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
        role="status">
        </div>
    </div>
  )
}

export default Loader
