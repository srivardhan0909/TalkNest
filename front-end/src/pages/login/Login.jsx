import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="max-w-md p-8 mx-auto mt-12 bg-white rounded-xl  transform transition-transform duration-500 ">
      <h1 className="mb-6 text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Login
        <span className='ml-2 font-serif text-blue-600 font-bold'>TalkNest</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-lg text-gray-700">Username</label>
          <input 
            type="text" 
            placeholder='Enter your username' 
            className='w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-lg text-gray-700">Password</label>
          <input 
            type="password" 
            placeholder='Enter your password' 
            className='w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-5 text-center">
          <Link to='/signup' className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Don't have an account? <span className="underline">Sign up</span>
          </Link>
        </div>

        <div className="mt-4">
          <button 
            type="submit" 
            className='w-full py-3 text-white transition-colors bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600'
          >
            {loading ? (
              <div className="w-full h-5 border-4 border-t-transparent border-blue-400 rounded-full animate-spin mx-auto"></div>
            ) : (
              'Login'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
