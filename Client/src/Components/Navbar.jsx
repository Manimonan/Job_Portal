import React from 'react'
import { FaBlackTie } from "react-icons/fa";
import {useClerk,useUser,UserButton} from "@clerk/clerk-react"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()
    console.log(user);
  return (
    <div className='shadow py-4'>
      <div className='container mx-auto px-4 2xl:px-20 flex justify-between items-center'>
        <p className='flex items-center text-3xl'><FaBlackTie className='rounded-full bg-white text-blue-600'/> <span className='font-semibold font-serif'>Job Potal</span></p>
        {
            user
            ? <div className='flex gap-4 max-sm:text-xs'>
                <Link to='/application'> Applied Job</Link>
                <p>|</p>
                <p>Hi, {user.firstName + "" + user.lastName}</p>
                <UserButton/>

            </div>
            :<div className='flex gap-4 max-sm:text-xs'> 
            <button className='text-gray-600'>Recruiter Login</button>
            <button onClick={e => openSignIn() } className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-2xl cursor-pointer'>Login</button>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
