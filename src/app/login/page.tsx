import React, { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='flex h-screen bg-zinc-900'>
      {/* Left half - Logo */}
      <div className='flex-1 flex items-center justify-center'>
        <img
          src='/vogi_logo_dark.png'
          alt='Your Logo'
          className='h-full w-full object-cover object-center'
        />
      </div>

      {/* Right half - Login Form */}
      <div className='flex-1 flex items-center justify-center'>
        <div className='max-w-screen-md w-full bg-zinc-900 p-8 shadow-md'>
          <h2 className='text-2xl font-bold mb-8 text-white'>Login</h2>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-white text-sm font-bold mb-2'
            >
              Email:
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-2 border border-neon-green-500 bg-gray-300 rounded-md'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-white text-sm font-bold mb-2'
            >
              Password:
            </label>
            <input
              type='password'
              id='password'
              className='w-full p-2 border border-neon-green-500 bg-gray-300 rounded-md'
              placeholder='Enter your password'
            />
          </div>
          <button className='bg-neon-green-500 text-white p-2 rounded-md hover:bg-neon-green-600 focus:outline-none focus:shadow-outline-neon-green'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
