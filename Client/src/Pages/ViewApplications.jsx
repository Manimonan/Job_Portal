import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import {viewApplicationsPageData,assets} from '../assets/Assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
      <div>
        <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr className='border-b border-gray-300 bg-gray-100 '>
              <th className='py-3 px-6 text-left'>#</th>
              <th className='py-3 px-6 text-left '>User Name</th>
              <th className='py-3 px-6 text-left max-sm:hidden'>Job Title</th>
              <th className='py-3 px-6 text-left max-sm:hidden'>Location</th>
              <th className='py-3 px-6 text-left'>Resume</th>
              <th className='py-3 px-6 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((application,i) => (
              <tr key={i}className='text-gray-700 hover:bg-gray-50'>
                <td className='py-2 px-4 border-b text-center'>{i + 1}</td>
                <td className='py-2 px-4 border-b text-center flex items-center '>
                  <img className='w-12 h-13 rounded-full mr-3 max-sm:hidden' src={assets.applicant} alt="User" />
                  <span>{application.name}</span>
                  </td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{application.jobTitle}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{application.location}</td>
                <td className='py-2 px-4 border-b text-center'>
                  <a href='' target="_blank" rel="noopener noreferrer " className='bg-blue-50 text-blue-500 px-3 py-1 inline-flex gap-2 items-center rounded hover:bg-blue-100 transition-colors'>
                     Resume <FaFileDownload className='inline'/>
                  </a>
                </td>
                <td className='py-2 px-4 border-b relative'>
                  <div className='relative inline-block text-left group'>
                    <button className='text-gray-500 action-button ml-4'>...</button>
                    <div className=' z-10 absolute right-0 md:left-0 top-0 mt-2 gap-1 w-24 bg-white border border-gray-200 rounded shadow hidden group-hover:block'>
                     <button className='block w-full  text-left px-4 py-2 text-blue-500 hover:bg-gray-100 cursor-pointer'>Approve</button>
                     <button className='block w-full  text-left px-4 py-2 text-red-500  hover:bg-gray-100 cursor-pointer'>Reject</button>
                    </div>
                  </div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications
