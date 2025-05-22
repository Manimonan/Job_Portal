import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { assets } from "../assets/Assets";

function AppDownload() {
  return (
    <div className="container mx-auto my-20 px-4 2xl:px-20">
      <div className="relative bg-white border-2 border-gray-400 p-5 sm:p-10 lg:p-20 rounded-lg flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4 mt-20 max-lg:items-center max-lg:justify-center">
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Download for Android
            </a>
          </div>
        </div>
        <img src={assets.men_pointing} className=" w-80  bottom-0 left-3.5  max-lg:hidden" alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
