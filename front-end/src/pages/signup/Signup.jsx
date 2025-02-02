import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

function Signup() {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const { loading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(inputs)
    await signup(inputs)
  }

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender })
  }

  return (
    <div className="max-w-md p-8 mx-auto mt-16 mb-16 bg-white rounded-3xl transform transition-transform duration-500 ">
      <h1 className="mb-6 text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Signup
        <span className="ml-2 font-serif text-blue-600 font-bold">
          TalkNest
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-lg text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={inputs.fullname}
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>

        <GenderCheckbox
          onCheckboxChange={handleCheckbox}
          selectedGender={inputs.gender}
        />

        <div className="mb-4 text-center">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Already have an account? <span className="underline">Login</span>
          </Link>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            {loading ? (
              <div className="w-full h-5 border-4 border-t-transparent border-blue-400 rounded-full animate-spin mx-auto"></div>
            ) : (
              'Signup'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
