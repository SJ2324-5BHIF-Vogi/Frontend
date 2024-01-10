import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  username: string
  displayName: string
  bio: string
  //pic: string
}

export const Header: FC<Props> = ({ username, displayName, bio }) => {
  return (
    <header className='flex flex-col md:flex-row items-center border-b-4 md:dark:border-blue-500 bg-zinc-800 border-zinc-500 md:h-[25vh] px-4 md:px-16 text-white font-manrope dark:bg-midnight-700 dark:border-lilac-500'>
      <div className='mt-6 flex items-center grow mb-4 md:mb-0 md:w-1/2'>
        <Image
          alt='Profile Picture'
          className='rounded-full'
          height={120}
          src='/vogi_logo_dark.png'
          width={120}
        />
        <div className='flex flex-col ml-4 md:ml-6'>
          <span className='text-2xl dark:text-white'>{displayName}</span>
          <span className='text-lg text-zinc-400 dark:text-lilac-500'>
            @{username}
          </span>
        </div>
      </div>
      <div className='flex items-center grow text-center md:w-1/2'>
        <span className='text-lg mb-6'>{bio}</span>
      </div>
    </header>
  )
}
