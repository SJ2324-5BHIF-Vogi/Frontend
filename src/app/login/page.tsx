import React, { FC } from 'react'
//import { Link } from 'react-router-dom'

const Login: FC = () => {
  return (
    <div className='flex h-screen bg-zinc-900 justify-between'>
      <div className='w-1/2 flex items-center justify-center mx-8'>
        <img
          src='/vogi_logo_transparent.png'
          alt='Your Logo'
          className='h-full w-full object-contain'
        />
      </div>

      <div className='w-1/2 flex items-center mx-8'>
        <div className='max-w-screen-md w-full bg-zinc-900 p-8'>
          <h2 className='text-2xl font-bold mb-8 text-white text-center'>
            Login
          </h2>
          <div className='mb-4'>
            <input
              type='email/name'
              id='email/name'
              className='w-full p-2 border border-white text-center bg-gray-500 rounded-full'
              placeholder='Email address/Accountname'
            />
          </div>
          <div className='mb-6'>
            <input
              type='password'
              id='password'
              className='w-full p-2 border border-white text-center bg-gray-500 rounded-full mb-4'
              placeholder='Password'
            />
            <button className='border border-white text-white p-2 rounded-full w-full h-full'>
              Sign In
            </button>
          </div>
          <div className='text-white text-center'>
            <label className='text-white'>Create Account</label>
            <span className='mx-2'>|</span>
            <label className='text-white'>Forgot Password?</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
