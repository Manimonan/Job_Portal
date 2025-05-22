import React from 'react'
import{Outlet,useNavigate,NavLink} from 'react-router-dom'
import { assets } from '../assets/Assets'
import { FaUserTie } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen '>
      {/* Navbar for recuriter panel */}
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
            <img onClick={()=>navigate("/")} src={assets.comon_logo} alt="" className='h-15 w-15 rounded-full p-1 cursor-pointer '  />
            <div className='flex gap-4 items-center '>
                <p className='max-sm:hidden'>Hii.. recruiter</p>
                <div className='relative group'>
                   <FaUserTie className='text-3xl p-1 rounded-full border border-blue-400 cursor-pointer'/>
                   <div className='hidden group-hover:block absolute top-8 right-0 z-10 text-black shadow-lg rounded-lg bg-white'>
                    <ul className='list-none m-0 p-2 flex flex-col gap-2'>
                        <li className='py-1 px-2 cursor-pointer pr-10 text-sm  bg-yellow-50 rounded-md border '>Profile</li>
                        <li className='py-1 px-2 cursor-pointer pr-10 text-sm  bg-yellow-50 rounded-md border '>Logout</li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
      </div>
      
        {/* Sidebar for dashboard menu */}
        
            <div className='flex gap-4 mt-5 ml-5'>
                <div className='w-1/4 bg-white  min-h-screen border-r-2'>
                    <h1 className='text-xl font-semibold'>Dashboard</h1>
                    <ul className='flex flex-col items-start pt-5 text-gray-800'>
                        <NavLink to={'/dashboard/add-jobs'} className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} >
                            <MdOutlineLibraryAdd/>
                            <li className='py-2 px-4 cursor-pointer '>Add Jobs</li>
                        </NavLink>
                        <NavLink to={'/dashboard/manage-jobs'} className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}> 
                           <MdOutlineManageHistory/>
                            <li className='py-2 px-4 cursor-pointer '>Manage Jobs</li>
                        </NavLink>
                        <NavLink to={'/dashboard/view-applications'} className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
                           <FaUsersViewfinder/>
                            <li className='py-2 px-4 cursor-pointer '>View Applications</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='w-full'>
                    <Outlet/>
                </div>
            </div>
        
    </div>
  )
}

export default Dashboard
