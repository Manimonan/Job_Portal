import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { assets } from "../assets/Assets";

function AppDownload() {
  return (
    <div>
      <div className='container mx-auto my-10 '>
      <h1 className="text-3xl font-bold text-center mb-4">Download Mobile App  For Better Experience</h1>
        <div className=''>
            <div className="justify-center">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
                Download for iOS
                </a>
                <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Download for Android
                </a>
            </div>
        </div>
        <img src={assets.men_pointing} className='w-1/4 h-52' alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
