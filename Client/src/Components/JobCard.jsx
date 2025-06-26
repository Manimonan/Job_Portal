import React from 'react'

import { assets } from '../assets/Assets'

const JobCard = ({job}) => {
  return (
    <div className='border p-4 shadow rounded'> 
      <div className='flex flex-col justify-between '>
        <img className='h-15 w-15 m-0.5 bg-amber-100 rounded-2xl' src={job.company.logo} alt="" />
        <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
        <div className='flex items-center gap-2 mt-3 text-[12px]'>
            <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded cursor-pointer'>{job.location}</span>
            <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded cursor-pointer'>{job.level}</span>
        </div>
        <p className='mt-4 text-black' dangerouslySetInnerHTML={{__html:job.description.slice(0,155)}}></p>
        <div className='flex items-center gap-2 mt-4'>
            <button className='bg-blue-700 text-white px-4 py-2 rounded cursor-pointer'>Apply Now</button>
            <button className='bg-amber-50  text-gray-600 border border-gray-400 px-4 py-2 rounded cursor-pointer '>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard

