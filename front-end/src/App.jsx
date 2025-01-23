import React from 'react'
import Login from './pages/login/login'
import Signup from './pages/signup/Signup'
import './index.css'
// import Home from './pages/home/Home'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        {/* <Login />
        <Signup /> */}
        <Home/>
      </div> 
    </div>
  )
}

export default App
