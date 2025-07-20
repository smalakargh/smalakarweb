import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

function ComingSoon() {
  return (
    <div className='h-[20vh] flex justify-center items-center bg-neutral-500 text-white flex-wrap font-[600] gap-1 text-[18px]'>
        <IoMdInformationCircleOutline />This website is Under <span className='text-[26px]'>Develop</span>
    </div>
  )
}

export default ComingSoon