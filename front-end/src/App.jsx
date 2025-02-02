import React from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import './index.css'
// import Home from './pages/home/Home'
import Home from './pages/home/Home'
import { Navigate, Routes, Route , useLocation} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext }  from './context/AuthContext'

function App() {
  const { authUser } = useAuthContext();
  const location = useLocation(); // Get the current route

  // Check if the current route is login or signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className={`h-screen ${isAuthPage ? "flex items-center justify-center" : "flex-2"} bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
