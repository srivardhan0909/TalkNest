import React from 'react'
import GenderCheckbox from './GenderCheckbox';

function signup() {
  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-center">Signup
        <span className='ml-2 font-serif font-bold text-blue-500 '>TalkNest</span>
      </h1>
      <form>
      <div className="mb-4">
          <label className="block mb-2 text-base text-gray-700">
            FullName
          </label>
          <input 
            type="text" 
            placeholder='Enter your username' 
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-base text-gray-700">
            Username
          </label>
          <input 
            type="text" 
            placeholder='Enter your username' 
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-base text-gray-700">
            ConfirmPassword
          </label>
          <input 
            type="password" 
            placeholder='Enter your password' 
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <GenderCheckbox />
        <div className="mb-4">
          <a className="flex items-center text-sm text-gray-500 underline hover:cursor-pointer hover:text-blue-500" href='#'>
             Already have an account?
          </a>
        </div>
        <div>
          <button 
            type="submit" 
            className='w-full py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}

export default signup
