import React, { useContext } from 'react'
import { FaBlackTie } from "react-icons/fa";
import {useClerk,useUser,UserButton} from "@clerk/clerk-react"
import { Link ,useNavigate} from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()
    const navigate = useNavigate()
    const {setShowRecruitersLogin} = useContext(AppContext)
   
  return (
    <div className='shadow py-4 fixed top-0 left-0 right-0 z-10 bg-white'>
      <div className='container mx-auto px-4 2xl:px-20 flex justify-between items-center'>
        <p className='flex items-center text-3xl cursor-pointer ' onClick={()=>navigate("/")} ><FaBlackTie className='rounded-full bg-white text-blue-600'/> <span className='font-semibold font-serif'>Job Potal</span></p>
        {
            user
            ? <div className='flex gap-4 max-sm:text-xs'>
                <Link to='/application' className='max-sm:hidden'> Applied Job</Link>
                <p>|</p>
                <p>Hi, {user.firstName + "" + user.lastName}</p>
                <UserButton/>

            </div>
            :<div className='flex gap-4 max-sm:text-xs'> 
            <button onClick={e => setShowRecruitersLogin(true)} className='text-gray-600 cursor-pointer'>Recruiter Login</button>
            <button onClick={e => openSignIn() } className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-2xl cursor-pointer'>Login</button>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
