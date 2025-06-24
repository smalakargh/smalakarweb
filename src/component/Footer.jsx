import React from 'react'
import { FcLike } from 'react-icons/fc'

function Footer() {
  return (
    <div>
      <div className='flex justify-center items-center gap-1 font-sm py-4 bg-[#7b797c] font-[500]'>made with <FcLike />by
       <p className='text-transparent bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text font-[600] cursor-crosshair '> Smalakar</p></div>
    </div>
  )
}

export default Footer
