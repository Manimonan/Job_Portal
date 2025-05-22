import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { VscLocation } from "react-icons/vsc";
import { assets } from "../assets/Assets";
import { AppContext } from "../context/AppContext";

function Hero() {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = React.useRef(null);
  const locationRef = React.useRef(null);

  const onSearch = () => {
    const title = titleRef.current.value;
    const location = locationRef.current.value;

    if (title || location) {
      setSearchFilter({ title, location });
      setIsSearched(true);
    }
    console.log({
      title: title,
      location: location,
    });
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10 mt-20">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg p-10 flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-center">
          Welcome to the Job Application Portal
        </h1>
        <p className=" text-xl font-medium mb-4 text-center">
          Apply for your dream job today! Over 10,000+ jobs to apply
        </p>
        <div className="flex items-center justify-between bg-white rounded-2xl text-gray-600  pl-4 px-1.5 py-1 mx-4 sm:mx-auto">
          <div className="flex items-center gap-2">
            <IoSearch className=" sm:text-2xl" />
            <input
              type="text"
              placeholder="Search for job title"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center gap-2">
            <VscLocation className=" sm:text-2xl" />
            <input
              type="text"
              placeholder="location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-2xl cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-sm px-6 mt-5 flex  gap-4 items-center overflow-hidden  ">
        <p className="font-medium text-2xl">Trusted by :</p>
        <div className=" flex flex-col sm:flex-row md:gap-5 lg:gap-10 xl:gap-20 items-center justify-between m-4 overflow-x-auto">
          <img
            src={assets.microsoft_logo}
            alt="logo"
            className="w-24 h-10 object-cover"
          />
          <img
            src={assets.samsung_logo}
            alt="logo"
            className="w-24 h-10 object-cover"
          />
          <img
            src={assets.accenture_logo}
            alt="logo"
            className="w-24 h-10 object-cover"
          />
          <img
            src={assets.google_logo}
            alt="logo"
            className="w-24 h-10 object-cover"
          />
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
