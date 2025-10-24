import React from 'react'

function Login() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[350px] bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Login
        </h2>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>

    </>
  )
}

export default Login