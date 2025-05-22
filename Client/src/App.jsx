import React,{useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'
import ApplyJob from './Pages/ApplyJob'
import Dashboard from './Pages/Dashboard'
import AddJobs from './Pages/AddJobs'
import ManageJobs from './Pages/ManageJobs'
import ViewApplications from './Pages/ViewApplications'
import Recruiterlogin from './Components/Recruiterlogin'
import { AppContext } from './Context/AppContext'

function App() {
  const {showRecruitersLogin} =  useContext(AppContext)
  return (
    <div>
      
       {showRecruitersLogin && <Recruiterlogin/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:Id" element={<ApplyJob/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/dashboard" element={<Dashboard/>} >
          <Route path="add-jobs" element={<AddJobs/>} />
          <Route path="manage-jobs" element={<ManageJobs/>} />
          <Route path="view-applications" element={<ViewApplications/>} />
        </Route>
       
      </Routes>
    </div>
  )
}

export default App
