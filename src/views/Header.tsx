import React, { FC } from 'react'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <header className='flex border-b-4 bg-zinc-800 border-zinc-300 h-1/4 px-16 text-white'>
      <div className='flex items-center grow w-1/2'>
        <Image
          alt='Profile Picture'
          className='rounded-full'
          height={120}
          src='/vogi_logo.png'
          width={120}
        />
        <div className='flex flex-col ml-6 space-y-1'>
          <span className='text-3xl'>Vogi</span>
          <span className='text-lg text-zinc-400'>@Vogi</span>
        </div>
      </div>
      <div className='flex items-center grow text-center w-1/2'>
        <span className='text-lg'>
          Ich und ich und ich und ich und ich und ich und ich und ich und ich
          und ich und ich und ich und ich und ich und ich
        </span>
      </div>
    </header>
  )
}
