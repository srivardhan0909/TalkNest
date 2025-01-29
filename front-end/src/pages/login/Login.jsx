import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
  
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-center">Login
        <span className='ml-2 font-serif font-bold text-blue-500 '>TalkNest</span>
      </h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label className="block mb-2 text-base text-gray-700">
            Username
          </label>
          <input 
            type="text" 
            placeholder='Enter your username' 
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-base text-gray-700">
            Password
          </label>
          <input 
            type="password" 
            placeholder='Enter your password' 
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Link to = '/signup' className="flex items-center text-sm text-gray-500 underline hover:cursor-pointer hover:text-blue-500">
            Don't have an account?
          </Link>
        </div>
        <div>
          <button 
            type="submit" 
            className='w-full py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login