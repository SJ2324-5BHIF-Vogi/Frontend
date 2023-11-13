import React, { FC } from 'react'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <header className='flex border-b-4 bg-zinc-800 border-zinc-500 h-1/4 px-16 text-white font-manrope'>
      <div className='flex items-center grow w-1/2'>
        <Image
          alt='Profile Picture'
          className='rounded-full'
          height={120}
          src='/vogi_logo_dark.png'
          width={120}
        />
        <div className='flex flex-col ml-6'>
          <span className='text-2xl'>Vogi Official</span>
          <span className='text-lg text-zinc-400'>@vogi</span>
        </div>
      </div>
      <div className='flex items-center grow text-center w-1/2'>
        <span className='text-lg'>
          The only social media platform in the world.
        </span>
      </div>
    </header>
  )
}
