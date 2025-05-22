import React from 'react'
import { FaBlackTie } from "react-icons/fa";
import { assets } from '../assets/Assets';

function Footer() {
  return (
    <div className='container mx-auto px-4 mb-2.5 2xl:px-20 flex justify-between items-center py-3 bg-gray-50 '>
         <p className='flex items-center text-3xl'><FaBlackTie className='rounded-full bg-white text-blue-600 w-{160px}'/> <span className='font-semibold font-serif'>Job Potal</span></p>
         <p className='flex-1 pl-4 text-sm text-gray-600 max-sm:hidden'>Copyright @JobPortal.dev  | All right reserved</p>
         <div className='flex gap-4'>
            <img width={38} src={assets.linkedin} alt="" />
            <img width={38} src={assets.twitter} alt="" />
            <img width={38} src={assets.facebook} alt="" />
         </div>
    </div>
  )
}

export default Footer
