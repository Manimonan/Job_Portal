import React, { createContext, useEffect, useState } from 'react';
import { jobListings } from '../assets/Assets';

export const AppContext = createContext();

export const AppConcextProvier =(props)=>{

    const [searchFilter,setSearchFilter] = useState(
        {
            title:'',
            location:''
        }
    )
    const [isSearched,setIsSearched] = useState(false)
    const [jobs,setJobs] = useState([])
    const[showRecruitersLogin,setShowRecruitersLogin]=useState(false)
    // function to fach jobs data 
     const fetchJobs = async()=>{
         setJobs(jobListings)
     }
     useEffect(()=>{
        fetchJobs()
     },[])

    const value ={
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruitersLogin,
        setShowRecruitersLogin
    }

    return(
        <AppContext.Provider value ={value}>
            {props.children}
        </AppContext.Provider>
    )
}