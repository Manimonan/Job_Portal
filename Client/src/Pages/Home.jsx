import React from 'react'
import Hero from '../Components/Hero'
import JobListing from '../Components/JobListing'
import AppDownload from '../Components/AppDownload'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <JobListing/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}

export default Home
