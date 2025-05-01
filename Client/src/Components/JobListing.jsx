import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { jobCategories } from "../assets/Assets";
import { jobLocations } from "../assets/Assets";

import JobCard from "./JobCard";

function JobListing() {
  const { searchFilter, isSearched, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showMobileFilter, setShowMobileFilter] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  console.log(Math.ceil());

  return (
    <div className="container 2xl:px-20 mx-auto my-10 flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white max-lg:px-4 ">
        {/* Search filter from Hero component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-semibold text-xl mb-4">Current Search</h3>
              <div className="flex flex-col sm:flex-row gap-2 mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-2 py-1 ">
                    <strong>Title:</strong> {searchFilter.title}
                    <RxCross2
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer font-semibold"
                    />
                  </span>
                )}

                {searchFilter.location && (
                  <span className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-2 py-1 ">
                    <strong>Location:</strong> {searchFilter.location}
                    <RxCross2
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer font-semibold"
                    />
                  </span>
                )}
              </div>
              {/* <div>
                <span>
                  <strong>Title:</strong> {searchFilter.title}
                   <RxCross2 onClick={()=>  setIsSearched(false)}  className="cursor-pointer font-semibold"/>
                </span>
                <span>
                  <strong>Location:</strong> {searchFilter.location}
                   <RxCross2 onClick={()=>  setIsSearched(false) }  className="cursor-pointer font-semibold"/>
                </span>
              </div> */}
            </>
          )}

        <button onClick={()=>setShowMobileFilter(!showMobileFilter)} className='lg:hidden text-4xl bg-blue-100 text-black border border-stone-500 rounded-xl w-18 cursor-pointer px-2 py-1'><BsFilterLeft/></button>

        {/* Category Filter */}
        <div className={`my-10 ${showMobileFilter ? "block" : "hidden"} lg:block`}>
          <h3 className="font-semibold text-xl mb-4">Filter by categories</h3>
          <ul>
            {jobCategories.map((category) => (
              <li key={category.id} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-gray-600"
                >
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={`my-10 ${showMobileFilter ? "block" : "hidden"} lg:block`}>
          <h3 className="font-semibold text-xl mb-4">Filter by Location</h3>
          <ul>
            {jobLocations.map((location) => (
              <li key={location.id} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  id={`category-${location.id}`}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`category-${location.id}`}
                  className="text-gray-600"
                >
                  {location.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>


        {/* Job Listings */}
        

        <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4 ">
            <h3 className="font-semibold text-xl mb-4" id="job-list">
                Latest Jobs 
            </h3>
            <p className="mb-8">Get your desired job from top companies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Map through job listings and display them */}
                {jobs.map((job,index)=>(
                   <JobCard key={index} job={job}/>
                ))}    
            </div>

            {/* Pagination */}
            {
                  jobs.length > 0 && (
                    <div className="flex items-center justify-center gap-4 mt-8 space-x-2 ">
                     <a href="#job-list"><FaArrowLeft/></a>
                      {
                        Array.from({ lenght:Math.ceil(jobs.length/6)}).map((_,index)=>(
                          <a href="#job_list">
                            <button className="">
                              {index + 1} 
                            </button>
                          </a>
                        ))
                      }
                     <a href="#job-list"><FaArrowRight/></a>
                    </div>
                  )
                 }
        </section>
    </div>
  );
}

export default JobListing;
