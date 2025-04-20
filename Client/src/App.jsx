import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'
import ApplyJob from './Pages/ApplyJob'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:id" element={<ApplyJob/>} />
        <Route path="/application" element={<Application/>} />
       
      </Routes>
    </div>
  )
}

export default App
