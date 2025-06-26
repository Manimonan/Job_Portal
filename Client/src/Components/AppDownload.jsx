import React from 'react'
import { FaApple, FaAndroid } from "react-icons/fa";
import { assets } from '../assets/Assets';

function AppDownload() {
  return ( 
    <div>
      <div className='container mx-auto my-10 pt-10 '>
      <h1 className=" text-3xl font-bold  mb-4">Download Mobile App  For Better Experience</h1>
        <div className='flex my-1 mx-40 items-center '>
            <div className="my-10">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
                Download for iOS
                </a>
                <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Download for Android
                </a>
            </div>
            <img src={assets.men_pointing} className=' h-52' alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default AppDownload
