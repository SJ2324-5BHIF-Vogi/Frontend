import React, { FC } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchBar: FC = () => {
  return (
    <search className='flex items-center mt-16 rounded-full mx-10 h-14 bg-zinc-950 dark:bg-midnight-900 font-manrope'>
      <RiSearchLine className='cursor-pointer ml-4 text-2xl text-white' />
      <input className='text-white text-lg ml-3 bg-transparent' />
    </search>
  )
}
