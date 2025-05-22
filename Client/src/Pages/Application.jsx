import React from 'react'
import { FaFileUpload } from "react-icons/fa";
import { jobsApplied } from '../assets/Assets';
import Footer from '../Components/Footer';

const Application = () => {

  const [isEdit, setIsEdit] = React.useState(false);
  const [file, setFile] = React.useState(null);
  return (
    <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto mt-20'>
      <div>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {isEdit ? 
          <>
           <label htmlFor="fileUpload" className='flex items-center'>
            <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 flex'>Select Resume
              <input type="file" id='fileUpload' onChange={e =>setFile(e.target.files[0])} accept='application/pdf' hidden />
            <FaFileUpload className='text-2xl  ml-1 ' />
            </p>
            
           </label>
            <button className='text-gray-600 border border-gray-700 rounded-lg px-4 py-2 cursor-pointer text-lg' onClick={()=>setIsEdit(false)}>Save</button>
            
          </>
          :
          <div className='flex gap-2'>
            <a className='bg-blue-100 text-blue-600 text-lg px-4 py-2 rounded-lg' href="">Resume</a>
            <button className='text-gray-600 border border-gray-700 rounded-lg px-4 py-2 cursor-pointer text-lg' onClick={()=>setIsEdit(true)}>Edit</button>
          </div>
          }
        </div>
      </div>
      <div className=' mb-30'>
        <h2 className='text-xl font-semibold mb-4'>Applied Jobs</h2>
        <table className='min-w-full  border border-gray-300 rounded-lg'>
          <thead>
            <tr>
              <th className='py-3 px-4 border-b text-left border-gray-300'>Company</th>
              <th className='py-3 px-4 border-b text-left border-gray-300'>Job Title</th>
              <th className='py-3 px-4 border-b text-left border-gray-300 max-sm:hidden'>Location</th>
              <th className='py-3 px-4 border-b text-left border-gray-300 max-sm:hidden'>Date</th>
              <th className='py-3 px-4 border-b text-left border-gray-300'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job,i) => (
              <tr key={i}>
                <td className='py-2 px-4 border-b text-left border-gray-300'>
                  <div className='flex items-center gap-2'>
                    <img src={job.logo} alt="" className='h-10 w-10 rounded-full border border-blue-300 ' />
                    <p>{job.company}</p>
                  </div>
                </td>
                <td className='py-2 px-4 border-b text-left border-gray-300'>{job.title}</td>
                <td className='py-2 px-4 border-b text-left border-gray-300 max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b text-left border-gray-300 max-sm:hidden'>{job.date}</td>
                <td className='py-2 px-4 border-b text-left border-gray-300'>
                  <span className={`${job.status === 'Applied' ? 'bg-blue-100 text-blue-600': job.status === 'Interview Scheduled' ? 'bg-yellow-100 text-yellow-600' : job.status === 'Rejected' ? 'bg-red-100 text-red-600' : job.status === 'Offer Accepted' ? 'bg-green-300':''} px-4 py-2 rounded-lg`}>
                     {job.status}
                  </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  )
}

export default Application
