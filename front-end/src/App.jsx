import React from 'react'
import Login from './pages/login/login'
import Signup from './pages/signup/Signup'
import './index.css'
// import Home from './pages/home/Home'
import Home from './pages/home/Home'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext }  from './context/AuthContext'

function App() {
  
  const { authUser } = useAuthContext();
  // console.log("hello user " ,authUser);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to = {'/login'} />} />
        <Route path="/login" element={ authUser ? <Navigate to = {'/'} /> : <Login />} />
        <Route path="/signup" element={ authUser ? <Navigate to = {'/'} /> : <Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
